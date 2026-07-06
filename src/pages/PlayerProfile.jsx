import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, Star, BookOpen, Trophy } from "lucide-react";
import "./PlayerProfile.css";
import { usePlayer } from "../hooks/usePlayer";
import GirlAvatar from "../assets/GirlAvatar";
import BoyAvatar from "../assets/BoyAvatar";

// ── Stat pill ─────────────────────────────────────────────
function StatPill({ label, value, accent }) {
  return (
    <div className="pp-stat" style={{ "--accent": accent }}>
      <span className="pp-stat__val">{value || "—"}</span>
      <span className="pp-stat__lbl">{label}</span>
    </div>
  );
}

// ── Info row ──────────────────────────────────────────────
function InfoRow({ label, value }) {
  return (
    <div className="pp-info-row">
      <span className="pp-info-row__label">{label}</span>
      <span className={"pp-info-row__value" + (!value ? " empty" : "")}>
        {value || "Not recorded yet"}
      </span>
    </div>
  );
}

// ── PROFILE TAB ───────────────────────────────────────────
function ProfileTab({ player, loading }) {
  const isGirl = player?.gender === "girl";
  const accentColor = isGirl ? "#f472b6" : "#38bdf8";
  const idNum = (player?.playerId || "").replace("PTBA-", "");

  if (loading) {
    return (
      <div className="pp-loading">
        <div className="pp-skeleton pp-skeleton--hero" />
        <div className="pp-skeleton-grid">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="pp-skeleton pp-skeleton--row" style={{ animationDelay: i * 0.07 + "s" }} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pp-profile-wrap">

      {/* ── HERO ── */}
      <div className="pp-hero" style={{ "--player-accent": accentColor }}>

        {/* Jersey number watermark */}
        <div className="pp-hero__jersey-bg" aria-hidden="true">{idNum}</div>

        {/* Top nav strip */}
        <div className="pp-hero__topbar">
          <div className="pp-hero__academy-tag">
            <Shield size={12} />
            PT Badminton Academy
          </div>
          <div className="pp-hero__gender-tag">
            {isGirl ? "Girls" : "Boys"}
          </div>
        </div>

        {/* Player identity */}
        <div className="pp-hero__identity">
          <div className="pp-hero__photo-wrap">
            <div className="pp-hero__photo-ring" />
            <div className="pp-hero__photo">
              {player?.profilePhotoURL ? (
                <img src={player.profilePhotoURL} alt={player.name} />
              ) : isGirl ? (
                <GirlAvatar />
              ) : (
                <BoyAvatar />
              )}
            </div>
          </div>

          <div className="pp-hero__text">
            <p className="pp-hero__ptba-id">
              <span className="pp-hero__id-prefix">PTBA</span>
              <span className="pp-hero__id-num">#{idNum}</span>
            </p>
            <h1 className="pp-hero__name">{player?.name || "—"}</h1>
            <div className="pp-hero__pills">
              {player?.level && (
                <span className="pp-hero__pill">{player.level}</span>
              )}
              {player?.ageCategory && (
                <span className="pp-hero__pill pp-hero__pill--dim">{player.ageCategory}</span>
              )}
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="pp-hero__stats">
          <StatPill label="Age" value={player?.age ? player.age + " yrs" : null} accent={accentColor} />
          <div className="pp-hero__stat-divider" />
          <StatPill label="Level" value={player?.level} accent={accentColor} />
          <div className="pp-hero__stat-divider" />
          <StatPill label="SLBA ID" value={player?.slbaPlayerId} accent={accentColor} />
          <div className="pp-hero__stat-divider" />
          <StatPill label="Ranking" value={player?.nationalRanking} accent={accentColor} />
        </div>
      </div>

      {/* ── INFO CARD ── */}
      <div className="pp-info-card">
        <div className="pp-info-card__header">
          <span className="pp-info-card__eyebrow">Player Details</span>
        </div>
        <div className="pp-info-rows">
          <InfoRow label="Full Name"       value={player?.name} />
          <InfoRow label="Date of Birth"   value={player?.dateOfBirth} />
          <InfoRow label="School"          value={player?.school} />
          <InfoRow label="Age Category"    value={player?.ageCategory} />
          <InfoRow label="SLBA Player ID"  value={player?.slbaPlayerId} />
          <InfoRow label="National Ranking" value={player?.nationalRanking} />
        </div>
      </div>

      {/* ── COACH CARD ── */}
      <div className="pp-coach-card">
        <Shield size={18} className="pp-coach-card__icon" />
        <div>
          <p className="pp-coach-card__name">Coach Pulindu Thenura</p>
          <p className="pp-coach-card__sub">Sri Lanka National Badminton · PT Badminton Academy</p>
        </div>
      </div>

    </div>
  );
}

// ── PROGRESS TAB ──────────────────────────────────────────
function ProgressTab() {
  return (
    <div className="pp-coming">
      <div className="pp-coming__visual">📈</div>
      <h3 className="pp-coming__title">Progress Tracker</h3>
      <p className="pp-coming__sub">
        Training progress, skill evaluations and performance charts<br />
        will appear here once your coach logs entries.
      </p>
    </div>
  );
}

// ── ACHIEVEMENTS TAB ──────────────────────────────────────
function AchievementsTab() {
  return (
    <div className="pp-coming">
      <div className="pp-coming__visual">🏆</div>
      <h3 className="pp-coming__title">Achievements</h3>
      <p className="pp-coming__sub">
        Tournament results, medals, badges and milestones<br />
        awarded by your coach will appear here.
      </p>
    </div>
  );
}

// ── MAIN ─────────────────────────────────────────────────
export default function PlayerProfile() {
  const { id }   = useParams();
  const navigate = useNavigate();
  const { player, loading, error } = usePlayer(id);
  const [activeTab, setActiveTab]  = useState("profile");

  const isGirl = player?.gender === "girl";
  const accentColor = isGirl ? "#f472b6" : "#38bdf8";

  const tabs = [
    { key: "profile",      label: "Profile",      Icon: Shield },
    { key: "progress",     label: "Progress",     Icon: Star },
    { key: "achievements", label: "Achievements", Icon: Trophy },
  ];

  return (
    <div className="pp-page">

      {/* Back bar */}
      <div className="pp-topbar">
        <button className="pp-topbar__back" onClick={() => navigate("/")}>
          <ArrowLeft size={16} /> Academy
        </button>
        <span className="pp-topbar__title">Player Profile</span>
        <div style={{ width: 80 }} />
      </div>

      {/* Tab strip */}
      <div className="pp-tabs" style={{ "--tab-accent": accentColor }}>
        {tabs.map(({ key, label, Icon }) => (
          <button
            key={key}
            className={"pp-tab" + (activeTab === key ? " active" : "")}
            onClick={() => setActiveTab(key)}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="pp-body">
        {error && <p className="pp-error">⚠️ {error}</p>}
        {activeTab === "profile"      && <ProfileTab player={player} loading={loading} />}
        {activeTab === "progress"     && <ProgressTab />}
        {activeTab === "achievements" && <AchievementsTab />}
      </div>

    </div>
  );
}