import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PlayerDashboard.css";

import { usePlayerAuth } from "../hooks/usePlayerAuth";
import { usePlayerDashboard } from "../hooks/usePlayerDashboard";
import {
  logoutPlayer,
  changeCurrentPlayerPassword,
  verifyCurrentUserPassword,
} from "../firebase/playerAuth";

import GirlAvatar from "../assets/GirlAvatar";
import BoyAvatar from "../assets/BoyAvatar";

import {
  getPaymentStatus,
  getMonthName,
  currentMonthKey,
  groupAttendanceByMonth,
} from "../utils/paymentStatus";

import {
  LogOut,
  Loader,
  Home,
  User,
  TrendingUp,
  MessageSquare,
  Award,
  Users,
  CreditCard,
  CheckCircle,
  Clock,
  AlertTriangle,
  XCircle,
  Shield,
  CalendarDays,
  BookOpen,
  HelpCircle,
  Target,
  Sparkles,
  ChevronRight,
  Gamepad2,
  Settings,
  Lock,
  Mail,
  BadgeCheck,
  X,
  Trophy,
  Dumbbell,
  Menu,
} from "lucide-react";

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

function getFirstName(name) {
  if (!name) return "Player";
  return String(name).trim().split(" ")[0] || "Player";
}

function getIdNumber(playerId) {
  return String(playerId || "")
    .replace("PTBA-", "")
    .replace("PTBT-", "");
}

function getAccent(player) {
  return player?.gender === "girl" ? "#f472b6" : "#38bdf8";
}

function clampPercent(value) {
  const n = Number(value) || 0;
  return Math.max(0, Math.min(100, n));
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function sortByDateDesc(items, dateKeys) {
  return [...safeArray(items)].sort(function (a, b) {
    function pickDate(item) {
      for (const key of dateKeys) {
        if (item?.[key]) return String(item[key]);
      }
      return "";
    }

    return pickDate(b).localeCompare(pickDate(a));
  });
}

function formatToday() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

function getCurrentMonthData(attendance, payments) {
  const curMonth = currentMonthKey();
  const attByMonth = groupAttendanceByMonth(safeArray(attendance));
  const monthAtt = attByMonth[curMonth] || [];

  const presentDays = monthAtt.filter(function (a) {
    return a.status === "present";
  }).length;

  const absentDays = monthAtt.filter(function (a) {
    return a.status === "absent";
  }).length;

  const attendancePct =
    monthAtt.length > 0 ? Math.round((presentDays / monthAtt.length) * 100) : 0;

  const currentPayment = safeArray(payments).find(function (p) {
    return p.month === curMonth;
  });

  const paymentStatus = getPaymentStatus(currentPayment, curMonth);

  return {
    curMonth,
    monthAtt,
    presentDays,
    absentDays,
    attendancePct,
    currentPayment,
    paymentStatus,
  };
}

function getPaymentMeta(status) {
  const map = {
    paid: {
      cls: "paid",
      tone: "green",
      label: "Paid",
      title: "Payment Settled",
      text: "Training fee is settled for this month.",
      icon: <CheckCircle size={13} />,
    },
    waived: {
      cls: "waived",
      tone: "blue",
      label: "Waived",
      title: "Fee Waived",
      text: "This month has been waived by the coach.",
      icon: <CheckCircle size={13} />,
    },
    overdue: {
      cls: "overdue",
      tone: "pink",
      label: "Overdue",
      title: "Payment Overdue",
      text: "Payment needs attention. Please contact Coach Pulindu if needed.",
      icon: <XCircle size={13} />,
    },
    final_week: {
      cls: "final",
      tone: "gold",
      label: "Due Soon",
      title: "Due Soon",
      text: "Final week reminder. Please settle before the month ends.",
      icon: <AlertTriangle size={13} />,
    },
    ongoing: {
      cls: "ongoing",
      tone: "gold",
      label: "Ongoing",
      title: "Month Ongoing",
      text: "This month is still ongoing.",
      icon: <Clock size={13} />,
    },
  };

  return map[status] || map.ongoing;
}

// ─────────────────────────────────────────────
// SHARED UI
// ─────────────────────────────────────────────

function PlayerAvatar({ player, size = "md", onClick }) {
  const isGirl = player?.gender === "girl";
  const clickable = typeof onClick === "function";
  const Tag = clickable ? "button" : "div";

  return (
    <Tag
      type={clickable ? "button" : undefined}
      className={
        "p2-avatar p2-avatar--" +
        size +
        (clickable ? " p2-avatar--clickable" : "")
      }
      onClick={clickable ? onClick : undefined}
      title={clickable ? "Open photo" : undefined}
    >
      {player?.profilePhotoURL ? (
        <img src={player.profilePhotoURL} alt={player?.name || "Player"} />
      ) : isGirl ? (
        <GirlAvatar />
      ) : (
        <BoyAvatar />
      )}
    </Tag>
  );
}

function EmptyState({ icon, title, sub }) {
  return (
    <div className="p2-empty">
      <span>{icon}</span>
      <strong>{title}</strong>
      <p>{sub}</p>
    </div>
  );
}

function SectionHeader({ eyebrow, title, text, icon }) {
  return (
    <div className="p2-section-head">
      <div>
        {eyebrow && <span>{eyebrow}</span>}
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>

      {icon && <div className="p2-section-head__icon">{icon}</div>}
    </div>
  );
}

function StatusPill({ status }) {
  const meta = getPaymentMeta(status);

  return (
    <span className={"p2-status-pill p2-status-pill--" + meta.cls}>
      {meta.icon} {meta.label}
    </span>
  );
}

function ImagePreviewOverlay({ player, onClose }) {
  const [zoomed, setZoomed] = useState(false);

  if (!player) return null;

  return (
    <div className="p2-photo-preview" onClick={onClose}>
      <div
        className={"p2-photo-preview__card" + (zoomed ? " zoomed" : "")}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="p2-overlay-close" onClick={onClose}>
          <X size={18} />
        </button>

        <button
          type="button"
          className="p2-photo-preview__image"
          onClick={() => setZoomed((prev) => !prev)}
        >
          <PlayerAvatar player={player} size="preview" />
        </button>

        <h2>{player?.name || "Player"}</h2>
        <p>{player?.playerId || "PTBA Player"}</p>
        <small>{zoomed ? "Tap photo to zoom out" : "Tap photo to zoom in"}</small>
      </div>
    </div>
  );
}

function MobileMenuOverlay({ open, navItems, activeTab, onPick, onClose }) {
  if (!open) return null;

  return (
    <div className="p2-mobile-menu-overlay" onClick={onClose}>
      <div className="p2-mobile-menu-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="p2-mobile-menu-sheet__head">
          <div>
            <span>PTBA Player App</span>
            <strong>Menu</strong>
          </div>

          <button type="button" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="p2-mobile-menu-grid">
          {navItems.map(function (item) {
            const Icon = item.Icon;

            return (
              <button
                type="button"
                key={item.key}
                className={
                  "p2-nav-btn p2-nav-btn--" +
                  item.tone +
                  (activeTab === item.key ? " active" : "")
                }
                onClick={() => {
                  onPick(item.key);
                  onClose();
                }}
              >
                <div className="p2-nav-btn__icon">
                  <Icon size={18} />
                </div>

                <span>{item.label}</span>
                <ChevronRight size={14} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// CALENDAR
// ─────────────────────────────────────────────

function PaymentCalendar({ monthKey, monthAtt }) {
  const [year, month] = String(monthKey || currentMonthKey())
    .split("-")
    .map(Number);

  const firstDay = new Date(year, month - 1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const startOffset = firstDay.getDay();
  const currentToday = todayKey();

  const attMap = {};

  safeArray(monthAtt).forEach(function (item) {
    if (item.date) attMap[item.date] = item;
  });

  const cells = [];

  for (let i = 0; i < startOffset; i++) {
    cells.push({ empty: true, key: "empty-" + i });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const record = attMap[date];

    let status = "none";

    if (record?.status === "present") status = "present";
    else if (record?.status === "absent") status = "absent";
    else if (
      record?.status === "scheduled" ||
      record?.status === "upcoming" ||
      record?.status === "practice"
    ) {
      status = "upcoming";
    } else if (record && date > currentToday) {
      status = "upcoming";
    }

    cells.push({
      key: date,
      day,
      date,
      status,
      isToday: date === currentToday,
    });
  }

  return (
    <div className="p2-calendar">
      <div className="p2-calendar__week">
        {["S", "M", "T", "W", "T", "F", "S"].map(function (d, i) {
          return <span key={d + i}>{d}</span>;
        })}
      </div>

      <div className="p2-calendar__grid">
        {cells.map(function (cell) {
          if (cell.empty) {
            return <span key={cell.key} className="p2-cal-day empty" />;
          }

          return (
            <span
              key={cell.key}
              className={
                "p2-cal-day p2-cal-day--" +
                cell.status +
                (cell.isToday ? " today" : "")
              }
              title={cell.date + " · " + cell.status}
            >
              {cell.day}
            </span>
          );
        })}
      </div>

      <div className="p2-calendar__legend">
        <span className="present">Present</span>
        <span className="absent">Absent</span>
        <span className="upcoming">Upcoming</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// HOME
// ─────────────────────────────────────────────

function HomeSection({
  player,
  teammates,
  notes,
  progress,
  badges,
  allBadges,
  payments,
  attendance,
  onGo,
  onPreviewPhoto,
}) {
  const firstName = getFirstName(player?.name);
  const idNum = getIdNumber(player?.playerId);

  const month = getCurrentMonthData(attendance, payments);
  const paymentMeta = getPaymentMeta(month.paymentStatus);

  const latestNote = sortByDateDesc(notes, [
    "date",
    "createdAt",
    "updatedAt",
  ])[0];

  const latestProgress = sortByDateDesc(progress, [
    "date",
    "createdAt",
    "updatedAt",
  ])[0];

  const latestBadgeAward = sortByDateDesc(badges, [
    "dateAwarded",
    "createdAt",
  ])[0];

  const latestBadgeMeta = latestBadgeAward
    ? safeArray(allBadges).find(function (b) {
        return b.id === latestBadgeAward.badgeId;
      })
    : null;

  const latestSkill = latestProgress?.skill || "Badminton basics";
  const latestRating = latestProgress?.rating || null;
  const teammatesPreview = safeArray(teammates).slice(0, 4);

  return (
    <div className="p2-home">
      <section className="p2-welcome p2-tone-blue" data-tour="tour-home-hero">
        <div className="p2-welcome__content">
          <div className="p2-home-pride-row">
            <span>{player?.level || "Growing Player"}</span>
            <span>
              {latestBadgeMeta
                ? `${latestBadgeMeta.icon || "🏅"} ${latestBadgeMeta.name}`
                : "🏅 First badge loading"}
            </span>
          </div>

          <h1 className="p2-home-greeting">
            <small>Hi,</small>
            <span>{firstName}</span>
          </h1>

          <p>
            Train hard, learn smart, support your friends, and grow as a proud
            Sri Lankan badminton player.
          </p>

          <div className="p2-welcome__buttons">
            <button type="button" onClick={() => onGo("progress")}>
              View Progress
            </button>

            <button type="button" onClick={() => onGo("team")}>
              Watch Friends
            </button>
          </div>
        </div>

        <div className="p2-player-card" data-tour="tour-player-card">
          <div className="p2-player-card__top">
            <span>PTBA Player</span>
            <Shield size={15} />
          </div>

          <PlayerAvatar
            player={player}
            size="homeProud"
            onClick={() => onPreviewPhoto(player)}
          />

          <strong>{player?.name || "Player"}</strong>
          <p>🇱🇰 Sri Lankan Badminton</p>

          <div className="p2-player-id-badge">
            <span>PTBA ID</span>
            <strong>#{idNum || "00"}</strong>
          </div>
        </div>
      </section>

      <section className="p2-home-main-grid">
        <div className="p2-home-card p2-tone-blue" data-tour="tour-focus">
          <div className="p2-home-card__head">
            <div>
              <span>Coach Focus</span>
              <strong>Next Improvement</strong>
            </div>

            <Target size={18} />
          </div>

          <small>Current Skill</small>
          <h3>{latestSkill}</h3>

          {latestRating ? (
            <p>Latest rating: {latestRating} / 10</p>
          ) : (
            <p>Your coach will add ratings after evaluation.</p>
          )}

          <div className="p2-mini-task">
            10 min shadow movement + 20 controlled serves
          </div>
        </div>

        <div className="p2-home-card p2-tone-pink" data-tour="tour-team">
          <div className="p2-home-card__head">
            <div>
              <span>Friends</span>
              <strong>Watch Your Team</strong>
            </div>

            <Users size={18} />
          </div>

          <div className="p2-friend-stack">
            {teammatesPreview.length > 0 ? (
              teammatesPreview.map(function (tm) {
                return (
                  <PlayerAvatar
                    key={tm.id || tm.playerId}
                    player={tm}
                    size="xs"
                    onClick={() => onPreviewPhoto(tm)}
                  />
                );
              })
            ) : (
              <span className="p2-friend-empty">🏸</span>
            )}
          </div>

          <p>Watch your friends’ profiles, badges, level, and growth.</p>

          <button type="button" onClick={() => onGo("team")}>
            Watch friends <ChevronRight size={14} />
          </button>
        </div>

        <div className="p2-home-card p2-tone-green">
          <div className="p2-home-card__head">
            <div>
              <span>Coach Note</span>
              <strong>Latest Message</strong>
            </div>

            <MessageSquare size={18} />
          </div>

          {latestNote ? (
            <>
              <p>{latestNote.text}</p>
              <small>{latestNote.date || "Recent"}</small>
            </>
          ) : (
            <p className="muted">
              No coach note yet. Your coach will add feedback after reviewing
              your training.
            </p>
          )}
        </div>

        <div className="p2-home-card p2-tone-gold">
          <div className="p2-home-card__head">
            <div>
              <span>Mini Game</span>
              <strong>Rule Challenge</strong>
            </div>

            <Gamepad2 size={18} />
          </div>

          <p>Can the shuttle touch the line and still be in?</p>

          <button type="button" onClick={() => onGo("games")}>
            Play now <ChevronRight size={14} />
          </button>
        </div>
      </section>

      <section className="p2-home-bottom-grid">
        <div className="p2-home-card p2-tone-green">
          <div className="p2-home-card__head">
            <div>
              <span>This Month</span>
              <strong>{getMonthName(month.curMonth)}</strong>
            </div>

            <CalendarDays size={18} />
          </div>

          <div
            className="p2-ring"
            style={{ "--ring-deg": month.attendancePct * 3.6 + "deg" }}
          >
            <div>
              <strong>{month.attendancePct}%</strong>
              <span>Attendance</span>
            </div>
          </div>

          <div className="p2-split-row">
            <span>{month.presentDays} Present</span>
            <span>{month.absentDays} Absent</span>
          </div>
        </div>

        <div className="p2-home-card p2-tone-blue">
          <div className="p2-home-card__head">
            <div>
              <span>Parent Summary</span>
              <strong>Payment</strong>
            </div>

            <CreditCard size={18} />
          </div>

          <StatusPill status={month.paymentStatus} />

          <h3>{paymentMeta.title}</h3>
          <p>{paymentMeta.text}</p>

          <div className="p2-amount-row">
            <span>Amount</span>
            <strong>
              {month.currentPayment
                ? "LKR " +
                  (Number(month.currentPayment.finalFee) || 0).toLocaleString()
                : "Not set yet"}
            </strong>
          </div>

          <button type="button" onClick={() => onGo("parent")}>
            View fees <ChevronRight size={14} />
          </button>
        </div>
      </section>
    </div>
  );
}

// ─────────────────────────────────────────────
// PROFILE
// ─────────────────────────────────────────────

function ProfileSection({ player, onPreviewPhoto }) {
  const idNum = getIdNumber(player?.playerId);

  function InfoRow({ label, value }) {
    return (
      <div className="p2-info-row">
        <span>{label}</span>
        <strong className={!value ? "empty" : ""}>
          {value || "Not recorded yet"}
        </strong>
      </div>
    );
  }

  return (
    <div className="p2-section">
      <SectionHeader
        eyebrow="Player Identity"
        title="Profile"
        text="Player information and badminton identity details."
        icon={<User size={20} />}
      />

      <div className="p2-profile-layout">
        <div className="p2-profile-card p2-tone-blue">
          <span className="p2-profile-card__watermark">{idNum}</span>

          <div className="p2-profile-card__top">
            <span>
              <Shield size={12} /> PT Badminton Academy
            </span>
            <span>{player?.gender === "girl" ? "Girls" : "Boys"}</span>
          </div>

          <PlayerAvatar
            player={player}
            size="xl"
            onClick={() => onPreviewPhoto(player)}
          />

          <h2>{player?.name || "Player"}</h2>
          <p>{player?.playerId || "PTBA Player"}</p>

          <div className="p2-profile-pills">
            {player?.level && <span>{player.level}</span>}
            {player?.ageCategory && <span>{player.ageCategory}</span>}
            <span>🇱🇰 Sri Lankan Badminton</span>
          </div>
        </div>

        <div className="p2-card">
          <span className="p2-card-eyebrow">Details</span>

          <InfoRow label="Full Name" value={player?.name} />
          <InfoRow label="Date of Birth" value={player?.dateOfBirth} />
          <InfoRow label="Age" value={player?.age ? player.age + " yrs" : ""} />
          <InfoRow label="School" value={player?.school} />
          <InfoRow label="Age Category" value={player?.ageCategory} />
          <InfoRow label="SLBA Player ID" value={player?.slbaPlayerId} />
          <InfoRow label="National Ranking" value={player?.nationalRanking} />
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// PROGRESS
// ─────────────────────────────────────────────

function ProgressSection({ progress }) {
  const list = safeArray(progress);

  if (list.length === 0) {
    return (
      <EmptyState
        icon="📈"
        title="No progress entries yet"
        sub="Your coach will log entries after evaluating your sessions."
      />
    );
  }

  return (
    <div className="p2-section">
      <SectionHeader
        eyebrow="Growth Journey"
        title="Progress"
        text="Skill ratings, coach comments, and improvement history."
        icon={<TrendingUp size={20} />}
      />

      <div className="p2-progress-list">
        {list.map(function (entry, i) {
          const rating = Number(entry.rating) || 0;
          const width = clampPercent((rating / 10) * 100);

          return (
            <div key={entry.id || i} className="p2-progress-card">
              <div className="p2-progress-card__top">
                <div>
                  <span>{entry.date || "Recent"}</span>
                  <strong>{entry.skill || "Badminton Skill"}</strong>
                </div>

                <div className="p2-rating-pill">{rating}/10</div>
              </div>

              <div className="p2-progress-track">
                <div style={{ width: width + "%" }} />
              </div>

              {entry.comment && <p>{entry.comment}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// NOTES
// ─────────────────────────────────────────────

function NotesSection({ notes }) {
  const list = safeArray(notes);

  if (list.length === 0) {
    return (
      <EmptyState
        icon="📝"
        title="No coach notes yet"
        sub="Your coach will add analysis notes here after reviewing your performance."
      />
    );
  }

  return (
    <div className="p2-section">
      <SectionHeader
        eyebrow="Coach Feedback"
        title="Coach Notes"
        text="Personal feedback and analysis from Coach Pulindu."
        icon={<MessageSquare size={20} />}
      />

      <div className="p2-notes-list">
        {list.map(function (note, i) {
          return (
            <div key={note.id || i} className="p2-note-card">
              <div>
                <span>{note.date || "Recent"}</span>
                <strong>Coach {note.author || "Pulindu Thenura"}</strong>
              </div>

              <p>{note.text || "No note text."}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// ACHIEVEMENTS
// ─────────────────────────────────────────────

function AchievementsSection({ badges, allBadges }) {
  const earned = safeArray(badges);
  const library = safeArray(allBadges);

  const earnedIds = earned.map(function (b) {
    return b.badgeId;
  });

  const earnedBadges =
    library.length > 0
      ? library
          .filter(function (b) {
            return earnedIds.includes(b.id);
          })
          .map(function (badge) {
            return {
              ...badge,
              meta: earned.find(function (e) {
                return e.badgeId === badge.id;
              }),
            };
          })
      : earned.map(function (b) {
          return {
            id: b.badgeId || b.id,
            name: b.name || "Achievement",
            icon: b.icon || "🏅",
            color: b.color || "#fbbf24",
            meta: b,
          };
        });

  const lockedBadges = library.filter(function (b) {
    return !earnedIds.includes(b.id);
  });

  return (
    <div className="p2-section">
      <SectionHeader
        eyebrow="Rewards"
        title="Badges & Challenges"
        text="Achievements unlocked by training hard and improving."
        icon={<Award size={20} />}
      />

      {earnedBadges.length === 0 ? (
        <EmptyState
          icon="🏅"
          title="No badges yet"
          sub="Keep training hard — your coach will award badges for your achievements!"
        />
      ) : (
        <>
          <p className="p2-subtitle">Earned · {earnedBadges.length}</p>

          <div className="p2-badge-grid">
            {earnedBadges.map(function (badge) {
              return (
                <div
                  key={badge.id}
                  className="p2-badge p2-badge--earned"
                  style={{ "--badge": badge.color || "#fbbf24" }}
                >
                  <span>{badge.icon || "🏅"}</span>
                  <strong>{badge.name || "Achievement"}</strong>
                  <small>{badge.meta?.dateAwarded || "Earned"}</small>

                  {badge.meta?.note && <p>"{badge.meta.note}"</p>}
                </div>
              );
            })}
          </div>
        </>
      )}

      {lockedBadges.length > 0 && (
        <>
          <p className="p2-subtitle p2-subtitle--gap">
            Locked · keep going! ({lockedBadges.length})
          </p>

          <div className="p2-badge-grid">
            {lockedBadges.map(function (badge) {
              return (
                <div key={badge.id} className="p2-badge p2-badge--locked">
                  <span>{badge.icon || "🔒"}</span>
                  <strong>{badge.name || "Locked Badge"}</strong>
                  <small>{badge.description || "Keep training to unlock."}</small>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// PAYMENTS
// ─────────────────────────────────────────────

function PaymentsSection({ payments, attendance }) {
  const paymentList = safeArray(payments);
  const attByMonth = groupAttendanceByMonth(safeArray(attendance));
  const curMonth = currentMonthKey();

  const allMonths = Array.from(
    new Set([
      curMonth,
      ...paymentList.map(function (p) {
        return p.month;
      }),
      ...Object.keys(attByMonth),
    ])
  )
    .filter(Boolean)
    .sort(function (a, b) {
      return b.localeCompare(a);
    });

  if (allMonths.length === 0) {
    return (
      <EmptyState
        icon="💳"
        title="No payment records yet"
        sub="Your fee details will appear here once the coach sets them up."
      />
    );
  }

  return (
    <div className="p2-section">
      <SectionHeader
        eyebrow="Parent Summary"
        title="Payments & Attendance"
        text="Monthly training fee status, attendance, and practice calendar."
        icon={<CreditCard size={20} />}
      />

      <div className="p2-payments-grid">
        {allMonths.map(function (mk) {
          const payment = paymentList.find(function (p) {
            return p.month === mk;
          });

          const monthAtt = attByMonth[mk] || [];
          const status = getPaymentStatus(payment, mk);
          const meta = getPaymentMeta(status);
          const isThisMonth = mk === curMonth;

          const presentDays = monthAtt.filter(function (a) {
            return a.status === "present";
          });

          const absentDays = monthAtt.filter(function (a) {
            return a.status === "absent";
          });

          return (
            <div
              key={mk}
              className={"p2-payment-card p2-payment-card--" + meta.tone}
            >
              <div className="p2-payment-card__main">
                <div className="p2-payment-card__head">
                  <div>
                    <strong>{getMonthName(mk)}</strong>
                    {isThisMonth && <span>Current Month</span>}
                  </div>

                  <StatusPill status={status} />
                </div>

                <div className="p2-fee-box">
                  <div>
                    <span>Base Fee</span>
                    <strong>
                      LKR {(Number(payment?.baseFee) || 3500).toLocaleString()}
                    </strong>
                  </div>

                  {Number(payment?.deduction) > 0 && (
                    <div>
                      <span>Deduction</span>
                      <strong>
                        − LKR {(Number(payment.deduction) || 0).toLocaleString()}
                      </strong>
                    </div>
                  )}

                  <div>
                    <span>Amount Due</span>
                    <strong>
                      {payment
                        ? "LKR " +
                          (Number(payment.finalFee) || 0).toLocaleString()
                        : "Not set"}
                    </strong>
                  </div>
                </div>

                {payment?.feeNote && (
                  <p className="p2-fee-note">{payment.feeNote}</p>
                )}

                <div className="p2-att-summary">
                  <span>
                    <CheckCircle size={12} /> {presentDays.length} Present
                  </span>

                  <span>
                    <XCircle size={12} /> {absentDays.length} Absent
                  </span>
                </div>

                {status === "overdue" && (
                  <div className="p2-payment-warning p2-payment-warning--pink">
                    <AlertTriangle size={16} />
                    <p>
                      Payment is overdue. Please contact Coach Pulindu if you
                      have any issue.
                    </p>
                  </div>
                )}

                {status === "final_week" && (
                  <div className="p2-payment-warning p2-payment-warning--gold">
                    <Clock size={16} />
                    <p>
                      Final week reminder. Please settle before the month ends.
                    </p>
                  </div>
                )}
              </div>

              <PaymentCalendar monthKey={mk} monthAtt={monthAtt} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// LESSONS
// ─────────────────────────────────────────────

function LessonsSection() {
  const lessonCards = [
    {
      icon: "🏸",
      title: "Grip Basics",
      text: "Learn how to hold the racket correctly.",
      level: "Beginner",
    },
    {
      icon: "🚀",
      title: "High Serve",
      text: "Understand the correct high serve movement.",
      level: "Beginner",
    },
    {
      icon: "⚡",
      title: "Fast Feet",
      text: "Practise split step and movement rhythm.",
      level: "Starter",
    },
    {
      icon: "🎯",
      title: "Net Control",
      text: "Learn soft touch and racket control near the net.",
      level: "Improving",
    },
  ];

  return (
    <div className="p2-section" data-tour="tour-lessons">
      <SectionHeader
        eyebrow="Learning Area"
        title="Badminton Lessons"
        text="Video/photo lessons will appear here. This section is ready for future lesson content."
        icon={<BookOpen size={20} />}
      />

      <div className="p2-lesson-grid">
        {lessonCards.map(function (lesson) {
          return (
            <div key={lesson.title} className="p2-lesson-card">
              <span>{lesson.icon}</span>
              <strong>{lesson.title}</strong>
              <p>{lesson.text}</p>
              <small>{lesson.level}</small>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// RULES
// ─────────────────────────────────────────────

function RulesSection() {
  const rules = [
    {
      q: "Can the shuttle land on the line?",
      a: "Yes. If the shuttle touches the line, it is in.",
      ok: true,
    },
    {
      q: "Can I touch the net during a rally?",
      a: "No. Touching the net is a fault.",
      ok: false,
    },
    {
      q: "Should I serve diagonally?",
      a: "Yes. A legal serve goes diagonally.",
      ok: true,
    },
    {
      q: "Can I hit the shuttle twice?",
      a: "No. A double hit is a fault.",
      ok: false,
    },
  ];

  return (
    <div className="p2-section" data-tour="tour-rules">
      <SectionHeader
        eyebrow="Rules Zone"
        title="Learn Badminton Rules"
        text="Simple kid-friendly rule cards. Later we can turn this into a quiz game."
        icon={<HelpCircle size={20} />}
      />

      <div className="p2-rules-grid">
        {rules.map(function (rule) {
          return (
            <div key={rule.q} className="p2-rule-card">
              <span>{rule.ok ? "✅" : "❌"}</span>
              <strong>{rule.q}</strong>
              <p>{rule.a}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// MINI GAMES
// ─────────────────────────────────────────────

function MiniGamesSection() {
  const [answer, setAnswer] = useState("");

  return (
    <div className="p2-section" data-tour="tour-games">
      <SectionHeader
        eyebrow="Fun Area"
        title="Mini Games"
        text="Small games and challenges for kids. Later we can connect these to badges."
        icon={<Gamepad2 size={20} />}
      />

      <div className="p2-games-grid">
        <div className="p2-game-card p2-tone-blue">
          <span>🎯</span>
          <strong>Quick Rule Challenge</strong>
          <p>Can the shuttle land on the line and still be in?</p>

          <div className="p2-game-buttons">
            <button type="button" onClick={() => setAnswer("correct")}>
              Yes
            </button>
            <button type="button" onClick={() => setAnswer("wrong")}>
              No
            </button>
          </div>

          {answer === "correct" && (
            <div className="p2-game-result good">
              Correct! If the shuttle touches the line, it is in.
            </div>
          )}

          {answer === "wrong" && (
            <div className="p2-game-result bad">
              Not quite. The line is part of the court.
            </div>
          )}
        </div>

        <div className="p2-game-card p2-tone-gold">
          <span>⚡</span>
          <strong>Fast Feet Mission</strong>
          <p>Complete 20 split steps at home and tell your coach next session.</p>
          <small>Badge idea: Fast Feet Starter</small>
        </div>

        <div className="p2-game-card p2-tone-green">
          <span>🏸</span>
          <strong>Serve Master</strong>
          <p>Do 20 shadow serves with correct grip and smooth follow-through.</p>
          <small>Badge idea: Serve Starter</small>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// TEAM
// ─────────────────────────────────────────────

function TeammateOverlay({ teammate, onClose, onPreviewPhoto }) {
  if (!teammate) return null;

  const badgeList = safeArray(teammate.badges);
  const progressList = safeArray(teammate.progress);

  const badgeCount =
    badgeList.length ||
    Number(teammate.badgeCount) ||
    Number(teammate.earnedBadges) ||
    0;

  const progressCount =
    progressList.length ||
    Number(teammate.progressCount) ||
    Number(teammate.progressLogs) ||
    0;

  const latestProgress = sortByDateDesc(progressList, [
    "date",
    "createdAt",
    "updatedAt",
  ])[0];

  return (
    <div className="p2-overlay" onClick={onClose}>
      <div
        className="p2-overlay-card p2-overlay-card--wide"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="p2-overlay-close" onClick={onClose}>
          <X size={18} />
        </button>

        <div className="p2-friend-profile-layout">
          <div className="p2-friend-profile-main p2-tone-blue">
            <PlayerAvatar
              player={teammate}
              size="friendLarge"
              onClick={() => onPreviewPhoto(teammate)}
            />

            <h2>{teammate.name || "Player"}</h2>
            <p>{teammate.playerId || "PTBA Player"}</p>

            <div className="p2-overlay-pills">
              {teammate.level && <span>{teammate.level}</span>}
              {teammate.ageCategory && <span>{teammate.ageCategory}</span>}
              <span>🇱🇰 Sri Lankan Badminton</span>
            </div>
          </div>

          <div className="p2-friend-growth-panel">
            <h3>Growth Snapshot</h3>

            <div className="p2-overlay-stats">
              <div>
                <Trophy size={18} />
                <strong>{badgeCount}</strong>
                <span>Badges</span>
              </div>

              <div>
                <TrendingUp size={18} />
                <strong>{progressCount}</strong>
                <span>Progress Logs</span>
              </div>

              <div>
                <Dumbbell size={18} />
                <strong>{teammate.level || "Growing"}</strong>
                <span>Level</span>
              </div>
            </div>

            <div className="p2-friend-growth-card">
              <span>Latest Progress</span>
              <strong>{latestProgress?.skill || "Coach will update soon"}</strong>
              <p>
                {latestProgress?.comment ||
                  "Progress details are shown only as a friendly team highlight."}
              </p>
            </div>

            <div className="p2-friend-growth-card">
              <span>Badges</span>

              {badgeList.length > 0 ? (
                <div className="p2-mini-badge-row">
                  {badgeList.slice(0, 5).map(function (b, i) {
                    return <b key={b.id || i}>{b.icon || "🏅"}</b>;
                  })}
                </div>
              ) : (
                <p>No public badges shown yet.</p>
              )}
            </div>

            <p className="p2-overlay-note">
              Private details are hidden. This view is only for friendship,
              motivation, and team spirit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamSection({ teammates, currentPlayerId, onPreviewPhoto }) {
  const [selected, setSelected] = useState(null);
  const list = safeArray(teammates);

  const girls = list.filter(function (p) {
    return p.gender === "girl";
  });

  const boys = list.filter(function (p) {
    return p.gender === "boy";
  });

  function TeamCard({ p }) {
    const isMe = p.id === currentPlayerId;
    const isGirl = p.gender === "girl";

    return (
      <div className={"p2-team-card" + (isMe ? " p2-team-card--me" : "")}>
        {isMe && <span className="p2-you-tag">YOU</span>}

        <button
          type="button"
          className="p2-team-card__photo"
          onClick={() => onPreviewPhoto(p)}
        >
          {p.photoURL || p.profilePhotoURL ? (
            <img src={p.photoURL || p.profilePhotoURL} alt={p.name || "Player"} />
          ) : isGirl ? (
            <GirlAvatar />
          ) : (
            <BoyAvatar />
          )}
        </button>

        <strong>{p.name || "Player"}</strong>
        <span>{p.playerId || "PTBA"}</span>
        {p.level && <small>{p.level}</small>}

        <button
          type="button"
          className="p2-team-view-btn"
          onClick={() => setSelected(p)}
        >
          View Growth
        </button>
      </div>
    );
  }

  if (list.length === 0) {
    return (
      <EmptyState
        icon="👥"
        title="No teammates yet"
        sub="Your team members will appear here once your coach adds them."
      />
    );
  }

  return (
    <div className="p2-section" data-tour="tour-team-page">
      <SectionHeader
        eyebrow="Team"
        title="Watch Your Friends"
        text="See your academy friends, profile, level, badges, and progress highlights."
        icon={<Users size={20} />}
      />

      {girls.length > 0 && (
        <>
          <p className="p2-subtitle">Girls</p>
          <div className="p2-team-grid">
            {girls.map(function (p) {
              return <TeamCard key={p.id || p.playerId} p={p} />;
            })}
          </div>
        </>
      )}

      {boys.length > 0 && (
        <>
          <p className="p2-subtitle p2-subtitle--gap">Boys</p>
          <div className="p2-team-grid">
            {boys.map(function (p) {
              return <TeamCard key={p.id || p.playerId} p={p} />;
            })}
          </div>
        </>
      )}

      <TeammateOverlay
        teammate={selected}
        onClose={() => setSelected(null)}
        onPreviewPhoto={onPreviewPhoto}
      />
    </div>
  );
}

function ParentCenterSection({ player, payments, attendance, notes, progress }) {
  const storageKey = "ptba_parent_unlocked_" + (player?.playerId || "unknown");

  const [pin, setPin] = useState("");
  const [unlocked, setUnlocked] = useState(
    sessionStorage.getItem(storageKey) === "true"
  );
  const [error, setError] = useState("");

  const expectedPin = String(player?.parentPin || "").trim();

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!expectedPin) {
      setError("Parent PIN is not set yet. Please contact Coach Pulindu.");
      return;
    }

    if (pin.trim() !== expectedPin) {
      setError("Incorrect PIN. Please check the code sent by Coach Pulindu.");
      setPin("");
      return;
    }

    sessionStorage.setItem(storageKey, "true");
    setUnlocked(true);
  }

  if (!unlocked) {
    return (
      <div className="p2-section" data-tour="tour-parent">
        <SectionHeader
          eyebrow="Parents Only"
          title="Parent Center"
          text="Payments, full attendance details, and private parent advice are protected by a 4-digit PIN."
          icon={<CreditCard size={20} />}
        />

        <form className="p2-parent-pin-card p2-tone-blue" onSubmit={handleSubmit}>
          <div className="p2-parent-pin-icon">
            <Lock size={24} />
          </div>

          <h3>Enter Parent PIN</h3>
          <p>
            This area is for parents. Coach Pulindu will send the 4-digit PIN
            through WhatsApp.
          </p>

          <input
            type="password"
            inputMode="numeric"
            maxLength={4}
            value={pin}
            placeholder="••••"
            onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
          />

          {error && <div className="p2-settings-msg bad">{error}</div>}

          <button type="submit">Unlock Parent Center</button>
        </form>
      </div>
    );
  }

  const parentNotes = safeArray(notes).filter(function (note) {
    return note.parentOnly === true || note.audience === "parent";
  });

  return (
    <div className="p2-section" data-tour="tour-parent">
      <SectionHeader
        eyebrow="Parents Only"
        title="Parent Center"
        text="Attendance, payments, coach advice, and progress summary for parents."
        icon={<CreditCard size={20} />}
      />

      <div className="p2-parent-grid">
        <div className="p2-parent-card p2-tone-green">
          <strong>Attendance Summary</strong>
          <p>
            See the monthly calendar and understand how consistently your child
            is attending training.
          </p>
        </div>

        <div className="p2-parent-card p2-tone-blue">
          <strong>Progress Support</strong>
          <p>
            Help your child practise the skills highlighted by the coach at
            home.
          </p>
        </div>

        <div className="p2-parent-card p2-tone-gold">
          <strong>Coach Advice</strong>
          {parentNotes.length > 0 ? (
            parentNotes.slice(0, 3).map(function (note, i) {
              return <p key={note.id || i}>{note.text}</p>;
            })
          ) : (
            <p>Private parent advice will appear here when the coach adds it.</p>
          )}
        </div>
      </div>

      <PaymentsSection payments={payments} attendance={attendance} />
    </div>
  );
}

// ─────────────────────────────────────────────
// SETTINGS
// ─────────────────────────────────────────────

function SettingsSection({ player, authUser, onSecurityLogout }) {
  const [verified, setVerified] = useState(false);
  const [verifyPassword, setVerifyPassword] = useState("");
  const [verifyError, setVerifyError] = useState("");
  const [verifyAttempts, setVerifyAttempts] = useState(0);
  const [checkingPassword, setCheckingPassword] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleVerifyPassword(e) {
    e.preventDefault();
    setVerifyError("");
    setCheckingPassword(true);

    try {
      await verifyCurrentUserPassword(verifyPassword);
      setVerified(true);
      setVerifyPassword("");
    } catch (err) {
      const nextAttempts = verifyAttempts + 1;
      setVerifyAttempts(nextAttempts);
      setVerifyPassword("");

      if (nextAttempts >= 5) {
        onSecurityLogout(
          "Too many incorrect password attempts. You are being logged out for security."
        );
        return;
      }

      setVerifyError(
        err.message ||
          `Incorrect password. ${5 - nextAttempts} attempts remaining.`
      );
    } finally {
      setCheckingPassword(false);
    }
  }

  async function handlePasswordChange(e) {
    e.preventDefault();
    setMessage("");
    setError("");

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (newPassword !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setSaving(true);

    try {
      await changeCurrentPlayerPassword(newPassword);
      setNewPassword("");
      setConfirm("");
      setMessage("Password changed successfully.");
    } catch (err) {
      setError(
        err.message ||
          "Could not change password. Please log in again and try once more."
      );
    } finally {
      setSaving(false);
    }
  }

  if (!verified) {
    return (
      <div className="p2-section" data-tour="tour-settings">
        <SectionHeader
          eyebrow="Security Check"
          title="Confirm Password"
          text="Please re-enter your password before changing profile or account settings."
          icon={<Lock size={20} />}
        />

        <form
          className="p2-parent-pin-card p2-tone-blue"
          onSubmit={handleVerifyPassword}
        >
          <div className="p2-parent-pin-icon">
            <Lock size={24} />
          </div>

          <h3>Re-enter Password</h3>
          <p>
            This protects the player account if someone else is using the device.
          </p>

          <input
            type="password"
            value={verifyPassword}
            placeholder="Current password"
            onChange={(e) => setVerifyPassword(e.target.value)}
          />

          {verifyError && <div className="p2-settings-msg bad">{verifyError}</div>}

          <button type="submit" disabled={checkingPassword}>
            {checkingPassword ? "Checking..." : "Continue"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p2-section" data-tour="tour-settings">
      <SectionHeader
        eyebrow="Account"
        title="Settings"
        text="Manage login details. Player ID is locked because it is given by the coach."
        icon={<Settings size={20} />}
      />

      <div className="p2-settings-grid">
        <div className="p2-settings-card">
          <div className="p2-settings-card__head">
            <BadgeCheck size={18} />
            <strong>Player Identity</strong>
          </div>

          <label>
            Player ID / Username
            <input value={player?.playerId || ""} disabled />
          </label>

          <p>
            This ID cannot be changed by the player or parent. It is the official
            academy ID given by Coach Pulindu.
          </p>
        </div>

        <div className="p2-settings-card">
          <div className="p2-settings-card__head">
            <Mail size={18} />
            <strong>Email</strong>
          </div>

          <label>
            Login Email
            <input value={authUser?.email || player?.linkedEmail || ""} disabled />
          </label>

          <p>
            Email changing should be added with re-login verification. For now,
            contact Coach Pulindu if the email is wrong.
          </p>
        </div>

        <form className="p2-settings-card" onSubmit={handlePasswordChange}>
          <div className="p2-settings-card__head">
            <Lock size={18} />
            <strong>Change Password</strong>
          </div>

          <label>
            New Password
            <input
              type="password"
              placeholder="At least 6 characters"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </label>

          <label>
            Confirm Password
            <input
              type="password"
              placeholder="Re-enter password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </label>

          {message && <div className="p2-settings-msg good">{message}</div>}
          {error && <div className="p2-settings-msg bad">{error}</div>}

          <button type="submit" disabled={saving}>
            {saving ? "Changing..." : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
}


function DashboardTutorial({ playerId, activeTab, setActiveTab }) {
  const steps = [
    {
      tab: "home",
      target: "tour-home-hero",
      title: "Welcome Home",
      text: "This is your main player home. You can see your level, badge, and training focus here.",
    },
    {
      tab: "home",
      target: "tour-player-card",
      title: "Player Identity",
      text: "Tap your photo to enlarge it. This is your PTBA player identity area.",
    },
    {
      tab: "home",
      target: "tour-focus",
      title: "Coach Focus",
      text: "This shows the next skill your coach wants you to improve.",
    },
    {
      tab: "home",
      target: "tour-team",
      title: "Watch Friends",
      text: "You can view teammate profiles and learn from their growth.",
    },
    {
      tab: "parent",
      target: "tour-parent",
      title: "Parent Center",
      text: "Parents can unlock payments, attendance calendar, and private advice with a PIN.",
    },
    {
      tab: "lessons",
      target: "tour-lessons",
      title: "Lessons",
      text: "This area will contain badminton lessons, videos, and practice tasks.",
    },
    {
      tab: "rules",
      target: "tour-rules",
      title: "Rules Zone",
      text: "Learn badminton rules in a simple and fun way.",
    },
    {
      tab: "games",
      target: "tour-games",
      title: "Mini Games",
      text: "Play small badminton challenges and rule games.",
    },
    {
      tab: "team",
      target: "tour-team-page",
      title: "Team Page",
      text: "See your academy friends, badges, levels, and progress highlights.",
    },
    {
      tab: "settings",
      target: "tour-settings",
      title: "Settings",
      text: "Account settings are protected by password confirmation.",
    },
  ];

  const key = "ptba_tutorial_done_" + (playerId || "unknown");

  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  const [rect, setRect] = useState(null);

  useEffect(() => {
    if (!playerId) return;

    if (localStorage.getItem(key) !== "true") {
      const timer = setTimeout(() => setShow(true), 700);
      return () => clearTimeout(timer);
    }
  }, [playerId, key]);

  useEffect(() => {
    if (!show) return;

    const step = steps[index];

    if (step.tab && activeTab !== step.tab) {
      setActiveTab(step.tab);
      return;
    }

    const timer = setTimeout(() => {
      const el = document.querySelector(`[data-tour="${step.target}"]`);

      if (!el) {
        setRect(null);
        return;
      }

      const box = el.getBoundingClientRect();

      setRect({
        top: box.top - 8,
        left: box.left - 8,
        width: box.width + 16,
        height: box.height + 16,
      });
    }, 180);

    return () => clearTimeout(timer);
  }, [show, index, activeTab, setActiveTab]);

  if (!show) return null;

  const step = steps[index];

  function finish() {
    localStorage.setItem(key, "true");
    setShow(false);
  }

  function next() {
    if (index >= steps.length - 1) {
      finish();
      return;
    }

    setIndex(index + 1);
  }

  return (
    <div className="p2-tour">
      {rect && (
        <div
          className="p2-tour-spotlight"
          style={{
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
          }}
        />
      )}

      <div className="p2-tour-card">
        <span>
          Step {index + 1} / {steps.length}
        </span>

        <h3>{step.title}</h3>
        <p>{step.text}</p>

        <div className="p2-tour-actions">
          <button type="button" onClick={finish}>
            Skip
          </button>

          <button type="button" onClick={next}>
            {index >= steps.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
// ─────────────────────────────────────────────
// MAIN DASHBOARD
// ─────────────────────────────────────────────

export default function PlayerDashboard() {
  const navigate = useNavigate();

  const authState = usePlayerAuth();
  const linkedPlayer = authState.linkedPlayer;
  const authUser = authState.authUser;
  const authLoading = authState.loading;
  const isLoggedIn = authState.isLoggedIn;

  const dashData = usePlayerDashboard(
    linkedPlayer ? linkedPlayer.firestorePlayerId : null
  );

  const player = dashData.player;
  const teammates = safeArray(dashData.teammates);
  const notes = safeArray(dashData.notes);
  const progress = safeArray(dashData.progress);
  const badges = safeArray(dashData.badges);
  const allBadges = safeArray(dashData.allBadges);
  const payments = safeArray(dashData.payments);
  const attendance = safeArray(dashData.attendance);
  const loading = dashData.loading;

  const [activeTab, setActiveTab] = useState("home");
  const [photoPreview, setPhotoPreview] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [securityAlert, setSecurityAlert] = useState("");

  async function handleSecurityLogout(message) {
  setSecurityAlert(message);

  setTimeout(async () => {
    await logoutPlayer();
    navigate("/login", { replace: true });
  }, 1300);
}

  useEffect(
    function () {
      if (!authLoading && !isLoggedIn) {
        navigate("/login", { replace: true });
      }
    },
    [authLoading, isLoggedIn, navigate]
  );

  const accent = getAccent(player);
  const firstName = getFirstName(player?.name);
  const idNum = getIdNumber(player?.playerId);

  const month = useMemo(
    function () {
      return getCurrentMonthData(attendance, payments);
    },
    [attendance, payments]
  );

  const navItems = [
    { key: "home", label: "Home", Icon: Home, tone: "blue" },
    { key: "profile", label: "Profile", Icon: User, tone: "pink" },
    { key: "progress", label: "Progress", Icon: TrendingUp, tone: "green" },
    { key: "notes", label: "Coach Notes", Icon: MessageSquare, tone: "gold" },
    { key: "achievements", label: "Badges", Icon: Award, tone: "gold" },
    { key: "parent", label: "Parent Center", Icon: CreditCard, tone: "blue" },
    { key: "lessons", label: "Lessons", Icon: BookOpen, tone: "green" },
    { key: "rules", label: "Rules", Icon: HelpCircle, tone: "blue" },
    { key: "games", label: "Mini Games", Icon: Gamepad2, tone: "pink" },
    { key: "team", label: "Team", Icon: Users, tone: "pink" },
    { key: "settings", label: "Settings", Icon: Settings, tone: "green" },
  ];

  const mobilePriorityNav = [
    { key: "home", label: "Home", Icon: Home },
    { key: "progress", label: "Progress", Icon: TrendingUp },
    { key: "lessons", label: "Lessons", Icon: BookOpen },
    { key: "team", label: "Team", Icon: Users },
    { key: "parent", label: "Parent", Icon: CreditCard },
  ];

  async function handleLogout() {
    await logoutPlayer();
    navigate("/login", { replace: true });
  }

  if (!authLoading && !isLoggedIn) {
    return null;
  }

  if (authLoading || loading) {
    return (
      <div className="p2-loading">
        <Loader size={30} className="p2-spin" />
        <p>Loading your player app...</p>
      </div>
    );
  }

  const pageTitle =
    navItems.find(function (i) {
      return i.key === activeTab;
    })?.label || "Dashboard";

  return (
    <div
      className={"p2-app" + (activeTab === "home" ? " p2-app--home" : "")}
      style={{ "--accent": accent }}
    >
      <aside className="p2-sidebar">
        <div className="p2-brand">
          <div>
            <Shield size={17} />
          </div>

          <section>
            <strong>PTBA</strong>
            <span>Player App</span>
          </section>
        </div>

        <div className="p2-side-player">
          <PlayerAvatar player={player} size="side" />

          <div>
            <strong>{firstName}</strong>
            <span>🇱🇰 PTBA #{idNum || "00"}</span>
          </div>
        </div>

        <nav className="p2-nav">
          {navItems.map(function (item) {
            const Icon = item.Icon;

            return (
              <button
                type="button"
                key={item.key}
                className={
                  "p2-nav-btn p2-nav-btn--" +
                  item.tone +
                  (activeTab === item.key ? " active" : "")
                }
                onClick={function () {
                  setActiveTab(item.key);
                }}
              >
                <div className="p2-nav-btn__icon">
                  <Icon size={17} />
                </div>

                <span>{item.label}</span>
                <ChevronRight size={14} />
              </button>
            );
          })}
        </nav>

        <div className="p2-sidebar-bottom">
          <div>
            <span>This month</span>
            <strong>{month.presentDays} Present</strong>
          </div>

          <button type="button" onClick={handleLogout}>
            <LogOut size={16} /> Log Out
          </button>
        </div>
      </aside>

      <header className="p2-mobile-header">
        <div className="p2-mobile-player">
          <PlayerAvatar player={player} size="xs" />

          <div>
            <strong>{firstName}</strong>
            <span>🇱🇰 PTBA #{idNum || "00"}</span>
          </div>
        </div>

        <div className="p2-mobile-actions">
          <button type="button" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={18} />
          </button>

          <button type="button" onClick={handleLogout}>
            <LogOut size={16} />
          </button>
        </div>
      </header>

      {securityAlert && (
  <div className="p2-security-alert">
    <AlertTriangle size={16} />
    {securityAlert}
  </div>
)}

      <main className="p2-main">
        {activeTab !== "home" && (
          <header className="p2-topbar">
            <div>
              <span>{formatToday()}</span>
              <h1>{pageTitle}</h1>
            </div>

            <div className="p2-topbar__right">
              <StatusPill status={month.paymentStatus} />

              <div className="p2-top-mini">
                <span>Attendance</span>
                <strong>{month.attendancePct}%</strong>
              </div>
            </div>
          </header>
        )}

        <section
          className={
            "p2-content" + (activeTab === "home" ? " p2-content--home" : "")
          }
        >
          {activeTab === "home" && (
            <HomeSection
              player={player}
              teammates={teammates}
              notes={notes}
              progress={progress}
              badges={badges}
              allBadges={allBadges}
              payments={payments}
              attendance={attendance}
              onGo={setActiveTab}
              onPreviewPhoto={setPhotoPreview}
            />
          )}

          {activeTab === "profile" && (
            <ProfileSection
              player={player}
              onPreviewPhoto={setPhotoPreview}
            />
          )}

          {activeTab === "progress" && <ProgressSection progress={progress} />}

          {activeTab === "notes" && <NotesSection notes={notes} />}

          {activeTab === "achievements" && (
            <AchievementsSection badges={badges} allBadges={allBadges} />
          )}

          {activeTab === "parent" && (
  <ParentCenterSection
    player={player}
    payments={payments}
    attendance={attendance}
    notes={notes}
    progress={progress}
  />
)}

          {activeTab === "lessons" && <LessonsSection />}

          {activeTab === "rules" && <RulesSection />}

          {activeTab === "games" && <MiniGamesSection />}

          {activeTab === "team" && (
            <TeamSection
              teammates={teammates}
              currentPlayerId={player?.id || linkedPlayer?.firestorePlayerId}
              onPreviewPhoto={setPhotoPreview}
            />
          )}

          {activeTab === "settings" && (
  <SettingsSection
    player={player}
    authUser={authUser}
    onSecurityLogout={handleSecurityLogout}
  />
)}
        </section>
      </main>

      <MobileMenuOverlay
        open={mobileMenuOpen}
        navItems={navItems}
        activeTab={activeTab}
        onPick={setActiveTab}
        onClose={() => setMobileMenuOpen(false)}
      />

      <ImagePreviewOverlay
        player={photoPreview}
        onClose={() => setPhotoPreview(null)}
      />

      <DashboardTutorial
        playerId={player?.playerId}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <nav className="p2-bottom-nav">
        {mobilePriorityNav.map(function (item) {
          const Icon = item.Icon;

          return (
            <button
              type="button"
              key={item.key}
              className={activeTab === item.key ? "active" : ""}
              onClick={function () {
                setActiveTab(item.key);
              }}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}