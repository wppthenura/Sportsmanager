import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, Edit2, Save, X, Users, User, ShieldCheck,
  LayoutDashboard, Search, ChevronRight, Camera, DollarSign,
  AlertCircle, TrendingUp
} from "lucide-react";
import "./CoachProfile.css";
import { useCoach } from "../hooks/useCoach";
import { fetchAllPlayersForCoach, updatePlayer } from "../firebase/coach";
import ImageUploader from "../components/ImageUploader";
import { uploadCoachImage, uploadPlayerImage } from "../firebase/storage";

// ─────────────────────────────────────────────
// Editable field row
// ─────────────────────────────────────────────
function EditableField({ label, value, fieldKey, onSave, locked = false, textarea = false }) {
  const [editing, setEditing] = useState(false);
  const [draft,   setDraft]   = useState(value || "");

  useEffect(() => { setDraft(value || ""); }, [value]);

  const handleSave   = () => { onSave(fieldKey, draft); setEditing(false); };
  const handleCancel = () => { setDraft(value || ""); setEditing(false); };

  return (
    <div className="cp-field-row">
      <span className="cp-field-row__label">{label}</span>
      <div className="cp-field-row__right">
        {editing ? (
          <>
            {textarea
              ? <textarea className="cp-input cp-input--area" value={draft} onChange={(e) => setDraft(e.target.value)} autoFocus />
              : <input className="cp-input" value={draft} onChange={(e) => setDraft(e.target.value)} autoFocus />
            }
            <button className="cp-icon-btn cp-icon-btn--save" onClick={handleSave}><Save size={13} /></button>
            <button className="cp-icon-btn" onClick={handleCancel}><X size={13} /></button>
          </>
        ) : (
          <>
            <span className={"cp-field-row__value" + (!value ? " is-empty" : "")}>
              {value || "Not set"}
            </span>
            {!locked && (
              <button className="cp-icon-btn" onClick={() => setEditing(true)}><Edit2 size={13} /></button>
            )}
            {locked && <span className="cp-lock">LOCKED</span>}
          </>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Player edit drawer
// ─────────────────────────────────────────────
function PlayerEditDrawer({ player, onClose, onSaved }) {
  const textFields = [
    { key: "name",            label: "Name" },
    { key: "age",             label: "Age" },
    { key: "school",          label: "School" },
    { key: "level",           label: "Level" },
    { key: "gender",          label: "Gender (girl / boy)" },
    { key: "dateOfBirth",     label: "Date of Birth" },
    { key: "ageCategory",     label: "Age Category" },
    { key: "slbaPlayerId",    label: "SLBA Player ID" },
    { key: "nationalRanking", label: "National Ranking" },
  ];

  const [form,    setForm]    = useState({ ...player });
  const [saving,  setSaving]  = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (key, val) => setForm((prev) => ({ ...prev, [key]: val }));

  const handleSave = async () => {
    setSaving(true);
    try {
      await updatePlayer(player.id, form);
      setSuccess(true);
      setTimeout(() => { setSuccess(false); onSaved(player.id, form); onClose(); }, 800);
    } catch (err) {
      alert("Save failed: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="cp-drawer-overlay" onClick={onClose}>
      <div className="cp-drawer" onClick={(e) => e.stopPropagation()}>

        <div className="cp-drawer__header">
          <div>
            <span className="cp-drawer__eyebrow">Editing Roster Entry</span>
            <h3 className="cp-drawer__title">{player.name || "Unnamed Player"}</h3>
          </div>
          <button className="cp-icon-btn cp-icon-btn--lg" onClick={onClose}><X size={18} /></button>
        </div>

        <div className="cp-drawer__body">

          {/* Locked ID */}
          <div className="cp-field-row">
            <span className="cp-field-row__label">PTBA Player ID</span>
            <div className="cp-field-row__right">
              <span className="cp-field-row__value cp-mono">{player.playerId}</span>
              <span className="cp-lock">LOCKED</span>
            </div>
          </div>

          {textFields.map(({ key, label }) => (
            <div className="cp-field-row" key={key}>
              <span className="cp-field-row__label">{label}</span>
              <input
                className="cp-input cp-input--full"
                value={form[key] || ""}
                onChange={(e) => handleChange(key, e.target.value)}
              />
            </div>
          ))}

          {/* Photos */}
          <div className="cp-drawer__photo-section">
            <span className="cp-field-row__label">Homepage Photo</span>
            <ImageUploader
              label="Upload Card Photo"
              currentURL={form.photoURL}
              shape="rect"
              onUpload={(file, onProgress) =>
                uploadPlayerImage(file, player.id, "photoURL", onProgress)
                  .then((url) => { handleChange("photoURL", url); return url; })
              }
            />
          </div>

          <div className="cp-drawer__photo-section">
            <span className="cp-field-row__label">Profile Page Photo</span>
            <ImageUploader
              label="Upload Profile Photo"
              currentURL={form.profilePhotoURL}
              shape="rect"
              onUpload={(file, onProgress) =>
                uploadPlayerImage(file, player.id, "profilePhotoURL", onProgress)
                  .then((url) => { handleChange("profilePhotoURL", url); return url; })
              }
            />
          </div>

        </div>

        <div className="cp-drawer__footer">
          <button className="cp-btn cp-btn--ghost" onClick={onClose}>Cancel</button>
          <button className="cp-btn cp-btn--primary" onClick={handleSave} disabled={saving || success}>
            {success ? "Saved ✓" : saving ? "Saving…" : "Save Changes"}
          </button>
        </div>

      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Roster row (one player)
// ─────────────────────────────────────────────
function RosterRow({ player, onEdit }) {
  return (
    <button className="cp-roster-row" onClick={() => onEdit(player)}>
      <span className="cp-roster-row__thumb">
        {(player.photoURL || player.profilePhotoURL)
          ? <img src={player.photoURL || player.profilePhotoURL} alt={player.name} />
          : <span className="cp-roster-row__initial">{(player.name || "?")[0].toUpperCase()}</span>
        }
      </span>
      <span className="cp-roster-row__id cp-mono">{player.playerId || "—"}</span>
      <span className="cp-roster-row__name">{player.name || "Unnamed"}</span>
      <span className="cp-roster-row__meta">{player.age || "—"} yrs</span>
      <span className="cp-roster-row__meta cp-roster-row__meta--school">{player.school || "—"}</span>
      <span className="cp-roster-row__level">{player.level || "—"}</span>
      <ChevronRight size={15} className="cp-roster-row__chevron" />
    </button>
  );
}

// ─────────────────────────────────────────────
// MAIN — Coach Portal
// ─────────────────────────────────────────────
export default function CoachProfile() {
  const navigate = useNavigate();
  const { coach, loading, saving, saveCoach } = useCoach();

  const [players,        setPlayers]        = useState([]);
  const [playersLoading, setPlayersLoading]  = useState(true);
  const [activeSection,  setActiveSection]   = useState("roster");
  const [editingPlayer,  setEditingPlayer]   = useState(null);
  const [search,         setSearch]          = useState("");
  const [genderFilter,   setGenderFilter]    = useState("all");

  useEffect(() => {
    fetchAllPlayersForCoach()
      .then((data) => { setPlayers(data); setPlayersLoading(false); })
      .catch(() => setPlayersLoading(false));
  }, []);

  const handleCoachSave = (key, value) => saveCoach({ [key]: value });

  const handlePlayerSaved = (firestoreId, updated) => {
    setPlayers((prev) => prev.map((p) => (p.id === firestoreId ? { ...p, ...updated } : p)));
  };

  const filtered = players.filter((p) => {
    const matchesSearch =
      (p.name || "").toLowerCase().includes(search.toLowerCase()) ||
      (p.playerId || "").toLowerCase().includes(search.toLowerCase());
    const matchesGender = genderFilter === "all" || p.gender === genderFilter;
    return matchesSearch && matchesGender;
  });

  const girlsCount = players.filter((p) => p.gender === "girl").length;
  const boysCount  = players.filter((p) => p.gender === "boy").length;
  const incompleteCount = players.filter((p) => !p.name || !p.school || !p.level).length;

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric"
  });

  const navItems = [
    { key: "roster",  label: "Roster",        icon: Users },
    { key: "profile", label: "My Profile",    icon: User },
  ];

  return (
    <div className="cp-page">

      {/* ── Status strip (signature element) ── */}
      <div className="cp-status-strip">
        <div className="cp-status-strip__inner">
          <span className="cp-status-strip__date">{today}</span>
          <div className="cp-status-strip__divider" />
          <span className="cp-status-strip__stat">
            <Users size={12} /> {players.length} active players
          </span>
          {incompleteCount > 0 && (
            <>
              <div className="cp-status-strip__divider" />
              <span className="cp-status-strip__stat cp-status-strip__stat--warn">
                <AlertCircle size={12} /> {incompleteCount} profile{incompleteCount !== 1 ? "s" : ""} incomplete
              </span>
            </>
          )}
          <div className="cp-status-strip__spacer" />
          <button className="cp-status-strip__action" onClick={() => navigate("/payments")}>
  <DollarSign size={12} /> Payments
</button>

<button className="cp-status-strip__action" onClick={() => navigate("/accounts")}>
  <TrendingUp size={12} /> Accounts
</button>

<button className="cp-status-strip__action" onClick={() => navigate("/attendance")}>
  <TrendingUp size={12} /> Attendance
</button>
        </div>
      </div>

      <div className="cp-shell">

        {/* ── LEFT RAIL ── */}
        <aside className="cp-rail">

          <button className="cp-rail__back" onClick={() => navigate("/")}>
            <ArrowLeft size={14} /> Academy Home
          </button>

          {/* Identity block */}
          <div className="cp-rail__identity">
            <div className="cp-rail__avatar">
              {coach?.profilePhotoURL
                ? <img src={coach.profilePhotoURL} alt="Coach" />
                : <User size={28} color="rgba(232,234,237,0.3)" />
              }
            </div>
            <span className="cp-rail__badge">
              <ShieldCheck size={11} /> Head Coach
            </span>
            <h2 className="cp-rail__name">{coach?.name || "W.P. Pulindu Thenura"}</h2>
            <p className="cp-rail__title">{coach?.title || "PT Badminton Academy"}</p>
          </div>

          {/* Roster split stats */}
          <div className="cp-rail__stats">
            <div className="cp-rail__stat">
              <span className="cp-rail__stat-num">{girlsCount}</span>
              <span className="cp-rail__stat-lbl">Girls</span>
            </div>
            <div className="cp-rail__stat">
              <span className="cp-rail__stat-num">{boysCount}</span>
              <span className="cp-rail__stat-lbl">Boys</span>
            </div>
            <div className="cp-rail__stat">
              <span className="cp-rail__stat-num">{players.length}</span>
              <span className="cp-rail__stat-lbl">Total</span>
            </div>
          </div>

          {/* Nav */}
          <nav className="cp-rail__nav">
            {navItems.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                className={"cp-rail__nav-item" + (activeSection === key ? " active" : "")}
                onClick={() => setActiveSection(key)}
              >
                <Icon size={15} /> {label}
              </button>
            ))}
          </nav>
        </aside>

        {/* ── MAIN PANEL ── */}
        <main className="cp-main">

          {/* ── ROSTER SECTION ── */}
          {activeSection === "roster" && (
            <div className="cp-section">
              <div className="cp-section__header">
                <div>
                  <span className="cp-section__eyebrow">
                    <LayoutDashboard size={12} /> Roster Management
                  </span>
                  <h1 className="cp-section__title">Players</h1>
                </div>
              </div>

              {/* Search + filter bar */}
              <div className="cp-toolbar">
                <div className="cp-search">
                  <Search size={15} />
                  <input
                    placeholder="Search by name or PTBA ID…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="cp-filter-pills">
                  {["all", "girl", "boy"].map((g) => (
                    <button
                      key={g}
                      className={"cp-filter-pill" + (genderFilter === g ? " active" : "")}
                      onClick={() => setGenderFilter(g)}
                    >
                      {g === "all" ? "All" : g === "girl" ? "Girls" : "Boys"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Roster table */}
              {playersLoading ? (
                <div className="cp-loading-rows">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="cp-loading-row" style={{ animationDelay: i * 0.06 + "s" }} />
                  ))}
                </div>
              ) : (
                <div className="cp-roster">
                  <div className="cp-roster__head">
                    <span></span>
                    <span>ID</span>
                    <span>Name</span>
                    <span>Age</span>
                    <span>School</span>
                    <span>Level</span>
                    <span></span>
                  </div>
                  {filtered.length === 0 ? (
                    <div className="cp-roster__empty">No players match this search.</div>
                  ) : (
                    filtered.map((p) => (
                      <RosterRow key={p.id} player={p} onEdit={setEditingPlayer} />
                    ))
                  )}
                </div>
              )}
            </div>
          )}

          {/* ── PROFILE SECTION ── */}
          {activeSection === "profile" && (
            <div className="cp-section">
              <div className="cp-section__header">
                <div>
                  <span className="cp-section__eyebrow">
                    <User size={12} /> Coach Account
                  </span>
                  <h1 className="cp-section__title">My Profile</h1>
                </div>
              </div>

              <div className="cp-panel">
                <p className="cp-panel__title">Identity</p>
                <EditableField label="Coach ID"    fieldKey="coachId"     value={coach?.coachId}     onSave={handleCoachSave} />
                <EditableField label="Full Name"   fieldKey="name"        value={coach?.name}        onSave={handleCoachSave} />
                <EditableField label="Title"       fieldKey="title"       value={coach?.title}       onSave={handleCoachSave} />
                <EditableField label="Nationality" fieldKey="nationality" value={coach?.nationality} onSave={handleCoachSave} />
                <EditableField label="Category"    fieldKey="category"    value={coach?.category}    onSave={handleCoachSave} />
              </div>

              <div className="cp-panel">
                <p className="cp-panel__title">Contact</p>
                <EditableField label="Email" fieldKey="email" value={coach?.email} onSave={handleCoachSave} />
                <EditableField label="Phone" fieldKey="phone" value={coach?.phone} onSave={handleCoachSave} />
              </div>

              <div className="cp-panel">
                <p className="cp-panel__title">Bio</p>
                <EditableField label="About" fieldKey="bio" value={coach?.bio} onSave={handleCoachSave} textarea />
              </div>

              <div className="cp-panel">
                <p className="cp-panel__title">
                  <Camera size={13} style={{ marginRight: 5, verticalAlign: -2 }} />
                  Photos
                </p>
                <div className="cp-photo-grid">
                  <div>
                    <span className="cp-photo-grid__label">Profile Photo</span>
                    <ImageUploader
                      label="Upload Profile Photo"
                      currentURL={coach?.profilePhotoURL}
                      shape="circle"
                      onUpload={(file, onProgress) =>
                        uploadCoachImage(file, "profilePhotoURL", onProgress)
                          .then((url) => { saveCoach({ profilePhotoURL: url }); return url; })
                      }
                    />
                  </div>
                  <div>
                    <span className="cp-photo-grid__label">Cover Photo</span>
                    <ImageUploader
                      label="Upload Cover Photo"
                      currentURL={coach?.coverPhotoURL}
                      shape="rect"
                      onUpload={(file, onProgress) =>
                        uploadCoachImage(file, "coverPhotoURL", onProgress)
                          .then((url) => { saveCoach({ coverPhotoURL: url }); return url; })
                      }
                    />
                  </div>
                </div>
              </div>

              {saving && <p className="cp-saving-note">Saving to Firebase…</p>}
            </div>
          )}

        </main>
      </div>

      {editingPlayer && (
        <PlayerEditDrawer
          player={editingPlayer}
          onClose={() => setEditingPlayer(null)}
          onSaved={handlePlayerSaved}
        />
      )}
    </div>
  );
}