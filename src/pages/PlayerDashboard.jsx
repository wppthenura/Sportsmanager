import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LogOut, Loader, User, TrendingUp, MessageSquare,
  Award, Users, CreditCard, CheckCircle, Clock,
  AlertTriangle, XCircle, Shield
} from "lucide-react";
import "./PlayerDashboard.css";
import { usePlayerAuth }      from "../hooks/usePlayerAuth";
import { usePlayerDashboard } from "../hooks/usePlayerDashboard";
import { logoutPlayer }       from "../firebase/playerAuth";
import GirlAvatar from "../assets/GirlAvatar";
import BoyAvatar  from "../assets/BoyAvatar";
import {
  getPaymentStatus, getMonthName,
  currentMonthKey, groupAttendanceByMonth
} from "../utils/paymentStatus";

// ─────────────────────────────────────────────
// PROFILE
// ─────────────────────────────────────────────
function ProfileSection({ player }) {
  const isGirl = player && player.gender === "girl";
  const accent = isGirl ? "#f472b6" : "#38bdf8";
  const idNum  = (player?.playerId || "").replace("PTBA-", "");

  function InfoRow({ label, value }) {
    return (
      <div className="pdd-info-row">
        <span className="pdd-info-row__label">{label}</span>
        <span className={"pdd-info-row__value" + (!value ? " empty" : "")}>
          {value || "Not recorded yet"}
        </span>
      </div>
    );
  }

  return (
    <div className="pdd-section">
      {/* Identity hero card */}
      <div className="pdd-identity-card" style={{ "--accent": accent }}>
        <div className="pdd-identity-card__jersey" aria-hidden="true">{idNum}</div>

        <div className="pdd-identity-card__top">
          <span className="pdd-identity-card__academy-tag">
            <Shield size={11} /> PT Badminton Academy
          </span>
          <span className="pdd-identity-card__gender">
            {isGirl ? "Girls" : "Boys"}
          </span>
        </div>

        <div className="pdd-identity-card__body">
          <div className="pdd-identity-card__photo-wrap">
            <div className="pdd-identity-card__photo-ring" />
            <div className="pdd-identity-card__photo">
              {player?.profilePhotoURL
                ? <img src={player.profilePhotoURL} alt={player.name} />
                : isGirl ? <GirlAvatar /> : <BoyAvatar />
              }
            </div>
          </div>
          <div className="pdd-identity-card__text">
            <p className="pdd-identity-card__id">
              <span className="pdd-identity-card__id-prefix">PTBA</span>
              <span className="pdd-identity-card__id-num"> #{idNum}</span>
            </p>
            <h2 className="pdd-identity-card__name">{player?.name || "—"}</h2>
            <div className="pdd-identity-card__pills">
              {player?.level && (
                <span className="pdd-pill">{player.level}</span>
              )}
              {player?.ageCategory && (
                <span className="pdd-pill pdd-pill--dim">{player.ageCategory}</span>
              )}
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="pdd-identity-card__stats">
          {[
            { l: "Age",     v: player?.age ? player.age + " yrs" : null },
            { l: "School",  v: player?.school },
            { l: "SLBA ID", v: player?.slbaPlayerId },
            { l: "Ranking", v: player?.nationalRanking },
          ].map(function (s, i, arr) {
            return (
              <div key={s.l} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <div className="pdd-stat">
                  <span className="pdd-stat__val" style={{ color: accent }}>{s.v || "—"}</span>
                  <span className="pdd-stat__lbl">{s.l}</span>
                </div>
                {i < arr.length - 1 && <div className="pdd-stat-div" />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail rows */}
      <div className="pdd-card">
        <p className="pdd-card__eyebrow">Player Details</p>
        <InfoRow label="Full Name"        value={player?.name} />
        <InfoRow label="Date of Birth"    value={player?.dateOfBirth} />
        <InfoRow label="School"           value={player?.school} />
        <InfoRow label="Age Category"     value={player?.ageCategory} />
        <InfoRow label="SLBA Player ID"   value={player?.slbaPlayerId} />
        <InfoRow label="National Ranking" value={player?.nationalRanking} />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// PROGRESS
// ─────────────────────────────────────────────
function ProgressSection({ progress }) {
  if (!progress || progress.length === 0) {
    return <EmptyState icon="📈" title="No progress entries yet" sub="Your coach will log entries after evaluating your sessions." />;
  }
  return (
    <div className="pdd-section">
      <p className="pdd-section-title">Your Progress</p>
      {progress.map(function (entry, i) {
        return (
          <div key={i} className="pdd-card pdd-progress-entry">
            <div className="pdd-progress-entry__top">
              <span className="pdd-progress-skill">{entry.skill}</span>
              <span className="pdd-progress-date">{entry.date}</span>
            </div>
            <div className="pdd-rating-bar">
              <div className="pdd-rating-fill" style={{ width: ((entry.rating / 10) * 100) + "%" }} />
            </div>
            <span className="pdd-rating-num">{entry.rating} / 10</span>
            {entry.comment ? <p className="pdd-progress-comment">{entry.comment}</p> : null}
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────
// COACH NOTES
// ─────────────────────────────────────────────
function NotesSection({ notes }) {
  if (!notes || notes.length === 0) {
    return <EmptyState icon="📝" title="No coach notes yet" sub="Your coach will add analysis notes here after reviewing your performance." />;
  }
  return (
    <div className="pdd-section">
      <p className="pdd-section-title">Coach Analysis</p>
      {notes.map(function (note, i) {
        return (
          <div key={i} className="pdd-card pdd-note-card">
            <div className="pdd-note-card__header">
              <span className="pdd-note-date">{note.date}</span>
              <span className="pdd-note-author">— Coach {note.author || "Pulindu Thenura"}</span>
            </div>
            <p className="pdd-note-text">{note.text}</p>
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────
// ACHIEVEMENTS
// ─────────────────────────────────────────────
function AchievementsSection({ badges, allBadges }) {
  const earnedIds    = badges.map(function (b) { return b.badgeId; });
  const earnedBadges = allBadges.filter(function (b) { return earnedIds.indexOf(b.id) !== -1; });
  const lockedBadges = allBadges.filter(function (b) { return earnedIds.indexOf(b.id) === -1; });

  return (
    <div className="pdd-section">
      {earnedBadges.length > 0 ? (
        <div>
          <p className="pdd-section-title">Your Badges</p>
          <p className="pdd-label">Earned · {earnedBadges.length}</p>
          <div className="pdd-badges-grid">
            {earnedBadges.map(function (b) {
              var meta = badges.find(function (e) { return e.badgeId === b.id; });
              return (
                <div key={b.id} className="pdd-badge pdd-badge--earned" style={{ "--bc": b.color }}>
                  <span className="pdd-badge__icon">{b.icon}</span>
                  <span className="pdd-badge__name">{b.name}</span>
                  <span className="pdd-badge__date">{meta ? meta.dateAwarded : ""}</span>
                  {meta && meta.note ? <p className="pdd-badge__note">"{meta.note}"</p> : null}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <EmptyState icon="🏅" title="No badges yet" sub="Keep training hard — your coach will award badges for your achievements!" />
      )}

      {lockedBadges.length > 0 ? (
        <div style={{ marginTop: 24 }}>
          <p className="pdd-label">Locked · keep going! ({lockedBadges.length})</p>
          <div className="pdd-badges-grid">
            {lockedBadges.map(function (b) {
              return (
                <div key={b.id} className="pdd-badge pdd-badge--locked">
                  <span className="pdd-badge__icon">{b.icon}</span>
                  <span className="pdd-badge__name">{b.name}</span>
                  <span className="pdd-badge__desc">{b.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

// ─────────────────────────────────────────────
// PAYMENTS
// ─────────────────────────────────────────────
function PaymentStatusBadge({ status }) {
  const map = {
    paid:       { cls: "paid",    icon: <CheckCircle size={12} />,   label: "Paid" },
    waived:     { cls: "waived",  icon: <CheckCircle size={12} />,   label: "Waived" },
    overdue:    { cls: "overdue", icon: <XCircle size={12} />,       label: "Overdue" },
    final_week: { cls: "final",   icon: <AlertTriangle size={12} />, label: "Due Soon" },
    ongoing:    { cls: "ongoing", icon: <Clock size={12} />,         label: "Ongoing" },
  };
  const m = map[status] || map.ongoing;
  return (
    <span className={"pdd-pay-badge pdd-pay-badge--" + m.cls}>
      {m.icon} {m.label}
    </span>
  );
}

function PaymentsSection({ payments, attendance }) {
  const attByMonth = groupAttendanceByMonth(attendance || []);
  const curMonth   = currentMonthKey();

  const allMonths = Array.from(new Set([
    curMonth,
    ...payments.map(function (p) { return p.month; }),
    ...Object.keys(attByMonth),
  ])).sort(function (a, b) { return b.localeCompare(a); });

  if (allMonths.length === 0) {
    return <EmptyState icon="💳" title="No payment records yet" sub="Your fee details will appear here once the coach sets them up." />;
  }

  return (
    <div className="pdd-section">
      <p className="pdd-section-title">Training Fees & Attendance</p>

      {allMonths.map(function (mk) {
        const payment     = payments.find(function (p) { return p.month === mk; });
        const monthAtt    = attByMonth[mk] || [];
        const status      = getPaymentStatus(payment, mk);
        const isThisMonth = mk === curMonth;
        const presentDays = monthAtt.filter(function (a) { return a.status === "present"; });
        const absentDays  = monthAtt.filter(function (a) { return a.status === "absent"; });

        return (
          <div key={mk} className={"pdd-pay-card pdd-pay-card--" + status}>

            {/* Header */}
            <div className="pdd-pay-card__header">
              <div>
                <span className="pdd-pay-card__month">{getMonthName(mk)}</span>
                {isThisMonth && <span className="pdd-pay-card__cur-tag">Current Month</span>}
              </div>
              <PaymentStatusBadge status={status} />
            </div>

            {/* Fee breakdown */}
            <div className="pdd-pay-fees">
              {payment ? (
                <>
                  <div className="pdd-pay-fee-row">
                    <span>Base Fee</span>
                    <span>LKR {(payment.baseFee || 3500).toLocaleString()}</span>
                  </div>
                  {payment.deduction > 0 && (
                    <div className="pdd-pay-fee-row pdd-pay-fee-row--deduct">
                      <span>Deduction</span>
                      <span>− LKR {payment.deduction.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="pdd-pay-fee-row pdd-pay-fee-row--total">
                    <span>Amount Due</span>
                    <span>LKR {(payment.finalFee || 0).toLocaleString()}</span>
                  </div>
                  {payment.feeNote && (
                    <p className="pdd-pay-fee-note">{payment.feeNote}</p>
                  )}
                </>
              ) : (
                <div className="pdd-pay-fee-row pdd-pay-fee-row--total">
                  <span>Standard Fee</span>
                  <span>LKR 3,500</span>
                </div>
              )}
            </div>

            {/* Attendance dots */}
            {monthAtt.length > 0 && (
              <div className="pdd-pay-att">
                <div className="pdd-pay-att__chips">
                  <span className="pdd-att-chip pdd-att-chip--present">
                    <CheckCircle size={11} /> {presentDays.length} Present
                  </span>
                  <span className="pdd-att-chip pdd-att-chip--absent">
                    <XCircle size={11} /> {absentDays.length} Absent
                  </span>
                </div>
                <div className="pdd-pay-att__dates">
                  {monthAtt.map(function (a, i) {
                    return (
                      <span
                        key={i}
                        className={"pdd-att-dot pdd-att-dot--" + (a.status || "unmarked")}
                        title={a.date + " · " + (a.status || "—")}
                      >
                        {new Date(a.date + "T00:00:00").getDate()}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Notices */}
            {status === "overdue" && (
              <div className="pdd-notice pdd-notice--red">
                <AlertTriangle size={16} />
                <div>
                  <strong>Payment Overdue</strong>
                  <p>We give your child the best training, so please remember to do your quota on time. If you have any trouble, please contact the coach immediately.</p>
                </div>
              </div>
            )}
            {status === "final_week" && (
              <div className="pdd-notice pdd-notice--amber">
                <Clock size={16} />
                <div>
                  <strong>Final Week Reminder</strong>
                  <p>The last practice session of this month is approaching. Please ensure the training fee is paid before the month ends.</p>
                </div>
              </div>
            )}
            {status === "ongoing" && isThisMonth && presentDays.length >= 3 && (
              <div className="pdd-notice pdd-notice--blue">
                <Clock size={16} />
                <div>
                  <strong>Friendly Reminder</strong>
                  <p>You've attended {presentDays.length} sessions this month — great work! Please remember to pay your training fee before the end of the month.</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────
// TEAM
// ─────────────────────────────────────────────
function TeamSection({ teammates, currentPlayerId }) {
  const girls = teammates.filter(function (p) { return p.gender === "girl"; });
  const boys  = teammates.filter(function (p) { return p.gender === "boy"; });

  function TeamCard({ p }) {
    const isGirl = p.gender === "girl";
    const isMe   = p.id === currentPlayerId;
    return (
      <div className={"pdd-team-card" + (isMe ? " pdd-team-card--me" : "")}>
        {isMe && <span className="pdd-team-card__you">YOU</span>}
        <div className="pdd-team-card__photo">
          {(p.photoURL || p.profilePhotoURL)
            ? <img src={p.photoURL || p.profilePhotoURL} alt={p.name} />
            : isGirl ? <GirlAvatar /> : <BoyAvatar />
          }
        </div>
        <span className="pdd-team-card__name">{p.name}</span>
        <span className="pdd-team-card__pid">{p.playerId}</span>
        {p.level && <span className="pdd-team-card__level">{p.level}</span>}
      </div>
    );
  }

  return (
    <div className="pdd-section">
      <p className="pdd-section-title">Your Team</p>
      {girls.length > 0 && (
        <div style={{ marginBottom: 20 }}>
          <p className="pdd-label">🏸 Girls</p>
          <div className="pdd-team-grid">
            {girls.map(function (p) { return <TeamCard key={p.id} p={p} />; })}
          </div>
        </div>
      )}
      {boys.length > 0 && (
        <div>
          <p className="pdd-label">🏸 Boys</p>
          <div className="pdd-team-grid">
            {boys.map(function (p) { return <TeamCard key={p.id} p={p} />; })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// EMPTY STATE
// ─────────────────────────────────────────────
function EmptyState({ icon, title, sub }) {
  return (
    <div className="pdd-empty">
      <span className="pdd-empty__icon">{icon}</span>
      <p className="pdd-empty__title">{title}</p>
      <p className="pdd-empty__sub">{sub}</p>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN DASHBOARD
// ─────────────────────────────────────────────
export default function PlayerDashboard() {
  const navigate     = useNavigate();
  const authState    = usePlayerAuth();
  const linkedPlayer = authState.linkedPlayer;
  const authLoading  = authState.loading;
  const isLoggedIn   = authState.isLoggedIn;

  const dashData   = usePlayerDashboard(linkedPlayer ? linkedPlayer.firestorePlayerId : null);
  const player     = dashData.player;
  const teammates  = dashData.teammates;
  const notes      = dashData.notes;
  const progress   = dashData.progress;
  const badges     = dashData.badges;
  const allBadges  = dashData.allBadges;
  const payments   = dashData.payments;
  const attendance = dashData.attendance;
  const loading    = dashData.loading;

  const [activeTab, setActiveTab] = useState("profile");

  if (!authLoading && !isLoggedIn) {
    navigate("/login");
    return null;
  }

  if (authLoading || loading) {
    return (
      <div className="pdd-page pdd-loading">
        <Loader size={28} className="pdd-spin" />
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  const isGirl     = player && player.gender === "girl";
  const accent     = isGirl ? "#f472b6" : "#38bdf8";
  const idNum      = (player?.playerId || "").replace("PTBA-", "");
  const earnedCount = badges ? badges.length : 0;

  async function handleLogout() {
    await logoutPlayer();
    navigate("/login");
  }

  const tabs = [
    { key: "profile",      label: "Profile",     Icon: User },
    { key: "progress",     label: "Progress",    Icon: TrendingUp },
    { key: "notes",        label: "Coach Notes", Icon: MessageSquare },
    { key: "achievements", label: "Badges",      Icon: Award },
    { key: "payments",     label: "Payments",    Icon: CreditCard },
    { key: "team",         label: "My Team",     Icon: Users },
  ];

  return (
    <div className="pdd-page">

      {/* ── HERO ── */}
      <div className="pdd-hero" style={{ "--accent": accent }}>

        {/* Jersey number watermark */}
        <div className="pdd-hero__jersey" aria-hidden="true">{idNum}</div>

        {/* Top row */}
        <div className="pdd-hero__toprow">
          <div className="pdd-hero__academy-tag">
            <Shield size={11} /> PT Badminton Academy
          </div>
          <button className="pdd-logout-btn" onClick={handleLogout}>
            <LogOut size={14} /> Log Out
          </button>
        </div>

        {/* Player identity */}
        <div className="pdd-hero__identity">
          <div className="pdd-hero__photo-wrap">
            <div className="pdd-hero__photo-ring" />
            <div className="pdd-hero__photo">
              {player?.profilePhotoURL
                ? <img src={player.profilePhotoURL} alt={player?.name} />
                : isGirl ? <GirlAvatar /> : <BoyAvatar />
              }
            </div>
          </div>
          <div className="pdd-hero__text">
            <p className="pdd-hero__greeting">Welcome back 👋</p>
            <h1 className="pdd-hero__name">
              {player?.name ? player.name.split(" ")[0] : "Player"}
            </h1>
            <div className="pdd-hero__id-row">
              <span className="pdd-hero__pid">PTBA #{idNum}</span>
              {player?.level && <span className="pdd-hero__level">{player.level}</span>}
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="pdd-hero__stats">
          <div className="pdd-hero__stat">
            <span className="pdd-hero__stat-num">
              {teammates ? teammates.length : 0}
            </span>
            <span className="pdd-hero__stat-lbl">Teammates</span>
          </div>
          <div className="pdd-hero__stat-div" />
          <div className="pdd-hero__stat">
            <span className="pdd-hero__stat-num">{earnedCount}</span>
            <span className="pdd-hero__stat-lbl">Badges</span>
          </div>
          <div className="pdd-hero__stat-div" />
          <div className="pdd-hero__stat">
            <span className="pdd-hero__stat-num">
              {progress ? progress.length : 0}
            </span>
            <span className="pdd-hero__stat-lbl">Progress Logs</span>
          </div>
          <div className="pdd-hero__stat-div" />
          <div className="pdd-hero__stat">
            <span className="pdd-hero__stat-num">
              {payments ? payments.filter(function (p) { return p.status === "paid"; }).length : 0}
            </span>
            <span className="pdd-hero__stat-lbl">Paid Months</span>
          </div>
        </div>
      </div>

      {/* ── TABS ── */}
      <div className="pdd-tabs" style={{ "--tab-accent": accent }}>
        {tabs.map(function (tab) {
          const Icon = tab.Icon;
          return (
            <button
              key={tab.key}
              className={"pdd-tab" + (activeTab === tab.key ? " active" : "")}
              onClick={function () { setActiveTab(tab.key); }}
            >
              <Icon size={14} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ── CONTENT ── */}
      <div className="pdd-body">
        {activeTab === "profile"      && <ProfileSection player={player} />}
        {activeTab === "progress"     && <ProgressSection progress={progress || []} />}
        {activeTab === "notes"        && <NotesSection notes={notes || []} />}
        {activeTab === "achievements" && <AchievementsSection badges={badges || []} allBadges={allBadges || []} />}
        {activeTab === "payments"     && <PaymentsSection payments={payments || []} attendance={attendance || []} />}
        {activeTab === "team"         && <TeamSection teammates={teammates || []} currentPlayerId={player ? player.id : null} />}
      </div>

    </div>
  );
}