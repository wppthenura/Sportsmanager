import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Save,
  CheckCircle,
  XCircle,
  Users,
  Plus,
  Settings,
  Trash2,
  CalendarDays,
  Car,
  Home,
  Edit2,
  X,
  Repeat,
  Sparkles,
  MapPin,
  Clock,
  Wallet,
  CalendarPlus,
} from "lucide-react";

import "./Attendance.css";

import { useAttendance, useAttendanceDates } from "../hooks/useAttendance";
import { todayKey, formatDisplayDate } from "../firebase/attendance";
import { useSessions } from "../hooks/useSessions";
import CoachCalendar from "../components/CoachCalendar";
import GirlAvatar from "../assets/GirlAvatar";
import BoyAvatar from "../assets/BoyAvatar";

import {
  TRAVEL_METHODS,
  saveTravelLog,
  getTravelLog,
} from "../firebase/accounting";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const LOCATION_SUGGESTIONS = [
  "Panda Multi Sports Arena - Biyagama",
  "Panda Multi Sports Arena",
  "Beach Training",
  "Ground Training",
  "Public Ground",
  "School Ground",
  "Other",
];

function getDayName(dateKey) {
  const d = new Date(dateKey + "T00:00:00");
  return d.toLocaleDateString("en-US", { weekday: "long" });
}

function fmt(n) {
  return "LKR " + (Number(n) || 0).toLocaleString();
}

function normalizeSession(session = {}) {
  const hasCourtFee = session.hasCourtFee !== false;

  return {
    ...session,
    type: session.type || "weekly",
    day: session.day || "Saturday",
    date: session.date || "",
    time: session.time || "",
    location: session.location || "Panda Multi Sports Arena - Biyagama",
    hasCourtFee,
    courtRate: hasCourtFee ? Number(session.courtRate) || 500 : 0,
    courtHours: hasCourtFee ? Number(session.courtHours) || 3 : 0,
    courtCount: hasCourtFee ? Number(session.courtCount) || 1 : 0,
    notes: session.notes || "",
  };
}

function getCourtFee(session) {
  const s = normalizeSession(session);

  if (!s.hasCourtFee) return 0;

  return (
    (Number(s.courtRate) || 0) *
    (Number(s.courtHours) || 0) *
    (Number(s.courtCount) || 0)
  );
}

function emptySessionForm(dateKey) {
  return {
    name: "",
    type: "weekly",
    day: getDayName(dateKey),
    date: dateKey,
    time: "",
    location: "Panda Multi Sports Arena - Biyagama",
    hasCourtFee: true,
    courtRate: 500,
    courtHours: 3,
    courtCount: 1,
    notes: "",
  };
}

function buildSessionSnapshot(session) {
  const s = normalizeSession(session);
  const fee = getCourtFee(s);

  return {
    id: s.id,
    name: s.name || "",
    type: s.type || "weekly",
    day: s.day || "",
    date: s.date || "",
    time: s.time || "",
    location: s.location || "Panda Multi Sports Arena - Biyagama",
    hasCourtFee: s.hasCourtFee,
    courtRate: s.hasCourtFee ? Number(s.courtRate) || 0 : 0,
    courtHours: s.hasCourtFee ? Number(s.courtHours) || 0 : 0,
    courtCount: s.hasCourtFee ? Number(s.courtCount) || 0 : 0,
    courtFee: fee,
    notes: s.notes || "",
  };
}

/*───────────────────────────────────────────────────────────
  Session Manager
───────────────────────────────────────────────────────────*/

function SessionManager({
  sessions,
  selectedDate,
  onAdd,
  onUpdate,
  onDelete,
  onClose,
}) {
  const [form, setForm] = useState(emptySessionForm(selectedDate));
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);

  const weeklySessions = sessions
    .map(normalizeSession)
    .filter((s) => s.type === "weekly");

  const extraSessions = sessions
    .map(normalizeSession)
    .filter((s) => s.type === "extra");

  const updateField = (key, value) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value };

      if (key === "type" && value === "weekly") {
        next.date = "";
        next.day = getDayName(selectedDate);
      }

      if (key === "type" && value === "extra") {
        next.date = selectedDate;
        next.day = "";
      }

      if (key === "date" && next.type === "extra") {
        next.day = "";
      }

      if (key === "hasCourtFee" && value === false) {
        next.courtRate = 0;
        next.courtHours = 0;
        next.courtCount = 0;
      }

      if (key === "hasCourtFee" && value === true) {
        next.courtRate = prev.courtRate || 500;
        next.courtHours = prev.courtHours || 3;
        next.courtCount = prev.courtCount || 1;
      }

      return next;
    });
  };

  const resetForm = () => {
    setEditingId(null);
    setForm(emptySessionForm(selectedDate));
  };

  const startEdit = (session) => {
    const s = normalizeSession(session);

    setEditingId(s.id);
    setForm({
      name: s.name || "",
      type: s.type || "weekly",
      day: s.type === "weekly" ? s.day || getDayName(selectedDate) : "",
      date: s.type === "extra" ? s.date || selectedDate : "",
      time: s.time || "",
      location: s.location || "Panda Multi Sports Arena - Biyagama",
      hasCourtFee: s.hasCourtFee,
      courtRate: s.hasCourtFee ? Number(s.courtRate) || 500 : 0,
      courtHours: s.hasCourtFee ? Number(s.courtHours) || 3 : 0,
      courtCount: s.hasCourtFee ? Number(s.courtCount) || 1 : 0,
      notes: s.notes || "",
    });
  };

  const handleSubmit = async () => {
    if (!form.name.trim()) return;

    setSaving(true);

    const hasCourtFee = form.hasCourtFee !== false;

    const payload = {
      name: form.name.trim(),
      type: form.type || "weekly",
      day: form.type === "weekly" ? form.day || "Saturday" : "",
      date: form.type === "extra" ? form.date || selectedDate : "",
      time: form.time || "",
      location: form.location || "Panda Multi Sports Arena - Biyagama",
      hasCourtFee,
      courtRate: hasCourtFee ? Number(form.courtRate) || 500 : 0,
      courtHours: hasCourtFee ? Number(form.courtHours) || 3 : 0,
      courtCount: hasCourtFee ? Number(form.courtCount) || 1 : 0,
      notes: form.notes || "",
    };

    try {
      if (editingId) {
        await onUpdate(editingId, payload);
      } else {
        await onAdd(payload);
      }

      resetForm();
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    await onDelete(id);
    if (editingId === id) resetForm();
  };

  const renderSession = (session) => {
    const s = normalizeSession(session);
    const fee = getCourtFee(s);

    return (
      <div key={s.id} className="session-item session-item--rich">
        <div className="session-item__info">
          <span className="session-item__name">{s.name}</span>

          <span className="session-item__meta">
            {s.type === "weekly"
              ? `${s.day} · Repeats weekly`
              : `${s.date} · Extra session`}
            {s.time ? ` · ${s.time}` : ""}
          </span>

          <span className="session-item__meta">
            {s.location} · {s.hasCourtFee ? fmt(fee) : "No court fee"}
          </span>
        </div>

        <div className="session-item__actions">
          <button
            className="session-edit-btn"
            onClick={() => startEdit(s)}
            title="Edit session"
          >
            <Edit2 size={13} />
          </button>

          <button
            className="session-delete-btn"
            onClick={() => handleDelete(s.id)}
            title="Remove session"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="session-modal session-modal--wide"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="session-modal__header">
          <div>
            <h3>Practice Sessions</h3>
            <p className="session-modal__sub">
              Manage weekly repeating sessions and one-day extra practices.
            </p>
          </div>

          <button className="modal-x" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="session-manager-grid">
          <div className="session-manager-list">
            <div className="session-section">
              <p className="session-section__title">🔁 Weekly Sessions</p>

              {weeklySessions.length === 0 ? (
                <p className="session-empty">No weekly sessions yet.</p>
              ) : (
                <div className="session-list session-list--compact">
                  {weeklySessions.map(renderSession)}
                </div>
              )}
            </div>

            <div className="session-section">
              <p className="session-section__title">✨ Extra Sessions</p>

              {extraSessions.length === 0 ? (
                <p className="session-empty">No extra sessions yet.</p>
              ) : (
                <div className="session-list session-list--compact">
                  {extraSessions.map(renderSession)}
                </div>
              )}
            </div>
          </div>
                    <div className="session-add session-add--panel">
            <div className="session-add__top">
              <p className="session-add__title">
                {editingId ? "Edit Session" : "Add New Session"}
              </p>

              {editingId && (
                <button className="session-clear-edit" onClick={resetForm}>
                  <X size={13} /> Cancel
                </button>
              )}
            </div>

            <div className="session-type-toggle">
              <button
                className={
                  "session-type-btn " +
                  (form.type === "weekly" ? "active" : "")
                }
                onClick={() => updateField("type", "weekly")}
              >
                <Repeat size={14} /> Weekly
              </button>

              <button
                className={
                  "session-type-btn " +
                  (form.type === "extra" ? "active" : "")
                }
                onClick={() => updateField("type", "extra")}
              >
                <Sparkles size={14} /> Extra
              </button>
            </div>

            <input
              className="session-input"
              placeholder="e.g. PTBA Camp 1"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
            />

            <div className="session-add__row">
              {form.type === "weekly" ? (
                <select
                  className="session-select"
                  value={form.day}
                  onChange={(e) => updateField("day", e.target.value)}
                >
                  {DAYS.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              ) : (
                <input
                  className="session-input"
                  type="date"
                  value={form.date}
                  onChange={(e) => updateField("date", e.target.value)}
                />
              )}

              <input
                className="session-input session-input--time"
                placeholder="e.g. 6:30 PM - 9:30 PM"
                value={form.time}
                onChange={(e) => updateField("time", e.target.value)}
              />
            </div>

            <input
              className="session-input"
              list="location-suggestions"
              placeholder="Location"
              value={form.location}
              onChange={(e) => updateField("location", e.target.value)}
            />

            <datalist id="location-suggestions">
              {LOCATION_SUGGESTIONS.map((location) => (
                <option key={location} value={location} />
              ))}
            </datalist>

            <label className="session-check-row">
              <input
                type="checkbox"
                checked={form.hasCourtFee}
                onChange={(e) =>
                  updateField("hasCourtFee", e.target.checked)
                }
              />

              <span>This session has court fee</span>
            </label>

            {form.hasCourtFee && (
              <div className="session-add__row">
                <input
                  className="session-input"
                  type="number"
                  placeholder="Rate / hour"
                  value={form.courtRate}
                  onChange={(e) =>
                    updateField("courtRate", e.target.value)
                  }
                />

                <input
                  className="session-input"
                  type="number"
                  placeholder="Hours"
                  value={form.courtHours}
                  onChange={(e) =>
                    updateField("courtHours", e.target.value)
                  }
                />

                <input
                  className="session-input"
                  type="number"
                  placeholder="Courts"
                  value={form.courtCount}
                  onChange={(e) =>
                    updateField("courtCount", e.target.value)
                  }
                />
              </div>
            )}

            <textarea
              className="session-input session-input--area"
              placeholder="Notes"
              value={form.notes}
              onChange={(e) => updateField("notes", e.target.value)}
            />

            <div className="session-fee-preview">
              <span>{form.hasCourtFee ? "Court Fee" : "No Court Fee"}</span>
              <strong>{form.hasCourtFee ? fmt(getCourtFee(form)) : "LKR 0"}</strong>
            </div>

            <button
              className="session-add-btn"
              onClick={handleSubmit}
              disabled={saving || !form.name.trim()}
            >
              <Plus size={14} />
              {saving
                ? "Saving..."
                : editingId
                ? "Update Session"
                : "Add Session"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/*───────────────────────────────────────────────────────────
  Player Row
───────────────────────────────────────────────────────────*/

function PlayerRow({ player, status, onMark, index }) {
  const isGirl = player.gender === "girl";

  return (
    <div
      className={"att-row att-row--" + (status || "unmarked")}
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      <div className="att-row__player">
        <div className="att-row__avatar">
          {player.photoURL ? (
            <img src={player.photoURL} alt={player.name} />
          ) : isGirl ? (
            <GirlAvatar />
          ) : (
            <BoyAvatar />
          )}
        </div>

        <div className="att-row__info">
          <span className="att-row__name">{player.name || "—"}</span>
          <span className="att-row__id">{player.playerId}</span>
        </div>
      </div>

      <div className="att-row__actions">
        <button
          className={
            "att-btn att-btn--present " +
            (status === "present" ? "active" : "")
          }
          onClick={() =>
            onMark(player.id, status === "present" ? "" : "present")
          }
        >
          <CheckCircle size={15} /> Present
        </button>

        <button
          className={
            "att-btn att-btn--absent " +
            (status === "absent" ? "active" : "")
          }
          onClick={() =>
            onMark(player.id, status === "absent" ? "" : "absent")
          }
        >
          <XCircle size={15} /> Absent
        </button>
      </div>

      <div className="att-row__status">
        {status === "present" && (
          <span className="status-pill present">✓ Present</span>
        )}

        {status === "absent" && (
          <span className="status-pill absent">✗ Absent</span>
        )}

        {!status && (
          <span className="status-pill unmarked">— Unmarked</span>
        )}
      </div>
    </div>
  );
}

/*───────────────────────────────────────────────────────────
  Attendance Page
───────────────────────────────────────────────────────────*/

export default function Attendance() {
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(todayKey());
  const [selectedSession, setSelectedSession] = useState("");
  const [showManager, setShowManager] = useState(false);
  const [showCal, setShowCal] = useState(true);

  const [toMethod, setToMethod] = useState("");
  const [toCost, setToCost] = useState("");
  const [fromMethod, setFromMethod] = useState("");
  const [fromCost, setFromCost] = useState("");
  const [travelSaving, setTravelSaving] = useState(false);
  const [travelError, setTravelError] = useState("");

  const {
    sessions,
    loading: sessionsLoading,
    add,
    update,
    remove,
  } = useSessions();

  const selectedDay = getDayName(selectedDate);

  const availableSessions = useMemo(() => {
    return sessions
      .map(normalizeSession)
      .filter((session) => {
        if (session.active === false) return false;

        if (session.type === "extra") {
          return session.date === selectedDate;
        }

        return session.day === selectedDay;
      })
      .sort((a, b) => {
        const orderA = Number(a.order) || 0;
        const orderB = Number(b.order) || 0;
        return orderA - orderB;
      });
  }, [sessions, selectedDate, selectedDay]);

  useEffect(() => {
    if (availableSessions.length === 0) {
      setSelectedSession("");
      return;
    }

    const currentStillExists = availableSessions.some(
      (session) => session.id === selectedSession
    );

    if (!currentStillExists) {
      setSelectedSession(availableSessions[0].id);
    }
  }, [availableSessions, selectedSession]);

  const selectedSessionObj =
    availableSessions.find((session) => session.id === selectedSession) ||
    null;

  const selectedSessionSnapshot = selectedSessionObj
    ? buildSessionSnapshot(selectedSessionObj)
    : null;

  const {
    players,
    records,
    stats,
    loading,
    saving,
    saved,
    error,
    mark,
    save,
  } = useAttendance(selectedDate, selectedSession);

  const { history } = useAttendanceDates();

  const girls = players.filter((player) => player.gender === "girl");
  const boys = players.filter((player) => player.gender === "boy");

  const total = players.length;
  const markedCount = stats.totalPresent + stats.totalAbsent;
  const unmarked = total - markedCount;

  const markedDates = history.map((item) => item.date);

  useEffect(() => {
    async function loadTravel() {
      setTravelError("");

      if (!selectedSession) {
        setToMethod("");
        setToCost("");
        setFromMethod("");
        setFromCost("");
        return;
      }

      try {
        const travel = await getTravelLog(selectedDate, selectedSession);

        if (!travel) {
          setToMethod("");
          setToCost("");
          setFromMethod("");
          setFromCost("");
          return;
        }

        setToMethod(travel.toMethod || "");
        setToCost(travel.toCost ?? "");
        setFromMethod(travel.fromMethod || "");
        setFromCost(travel.fromCost ?? "");
      } catch (err) {
        console.error("Failed loading travel log", err);
        setTravelError(err.message || "Failed loading travel log");
      }
    }

    loadTravel();
  }, [selectedDate, selectedSession]);

  const handleToMethod = (value) => {
    setToMethod(value);

    const method = TRAVEL_METHODS.find((item) => item.label === value);

    if (method) {
      setToCost(method.defaultCost);
    }
  };

  const handleFromMethod = (value) => {
    setFromMethod(value);

    const method = TRAVEL_METHODS.find((item) => item.label === value);

    if (method) {
      setFromCost(method.defaultCost);
    }
  };
    const handleDateSelect = (date) => {
    setSelectedDate(date);

    if (window.innerWidth < 900) {
      setShowCal(false);
    }
  };

  const handleSaveAll = async () => {
    if (!selectedSession || !selectedSessionSnapshot) return;

    setTravelSaving(true);
    setTravelError("");

    try {
      await save(selectedSessionSnapshot);

      await saveTravelLog(selectedDate, selectedSession, {
        sessionId: selectedSessionSnapshot.id,
        sessionName: selectedSessionSnapshot.name,
        sessionType: selectedSessionSnapshot.type,
        sessionTime: selectedSessionSnapshot.time,
        sessionLocation: selectedSessionSnapshot.location,

        hasCourtFee: selectedSessionSnapshot.hasCourtFee,
        courtRate: selectedSessionSnapshot.courtRate,
        courtHours: selectedSessionSnapshot.courtHours,
        courtCount: selectedSessionSnapshot.courtCount,
        courtFee: selectedSessionSnapshot.courtFee,

        toMethod,
        toCost: Number(toCost) || 0,
        fromMethod,
        fromCost: Number(fromCost) || 0,
      });
    } catch (err) {
      console.error("Save failed", err);
      setTravelError(err.message || "Save failed");
    } finally {
      setTravelSaving(false);
    }
  };

  return (
    <div className="att-page">
      <div className="att-header">
        <div className="att-header__top">
          <button className="att-back-btn" onClick={() => navigate("/")}>
            <ArrowLeft size={16} /> Back
          </button>

          <div className="att-header__title">
            <span className="att-header__badge">PT Badminton Academy</span>
            <h1>Attendance 2.0</h1>
          </div>

          <button
            className="att-manage-btn"
            onClick={() => setShowManager(true)}
          >
            <Settings size={15} /> Sessions
          </button>
        </div>
      </div>

      <div className="att-main att-main--wide">
        <div className="att-sidebar att-sidebar--wide">
          <button
            className="att-cal-toggle"
            onClick={() => setShowCal((value) => !value)}
          >
            <CalendarDays size={16} />
            {showCal ? "Hide Calendar" : "Pick Date"}
            <span className="att-cal-toggle__date">{selectedDate}</span>
          </button>

          {showCal && (
            <CoachCalendar
              selectedDate={selectedDate}
              onSelect={handleDateSelect}
              markedDates={markedDates}
            />
          )}

          <div className="att-session-box att-session-box--schedule">
            <p className="att-session-box__title">
              <CalendarPlus size={13} /> Sessions for {selectedDay}
            </p>

            {sessionsLoading ? (
              <p className="att-loading-text">Loading sessions...</p>
            ) : availableSessions.length === 0 ? (
              <div className="att-empty-session">
                <p>No session scheduled for this date.</p>

                <button
                  className="att-create-session-btn"
                  onClick={() => setShowManager(true)}
                >
                  <Plus size={14} /> Add Session
                </button>
              </div>
            ) : (
              <div className="att-session-pills">
                {availableSessions.map((session) => {
                  const snapshot = buildSessionSnapshot(session);

                  return (
                    <button
                      key={snapshot.id}
                      className={
                        "att-session-pill att-session-pill--rich " +
                        (selectedSession === snapshot.id ? "active" : "")
                      }
                      onClick={() => setSelectedSession(snapshot.id)}
                    >
                      <span className="att-session-pill__name">
                        {snapshot.name}
                      </span>

                      <span className="att-session-pill__day">
                        {snapshot.type === "weekly" ? "Weekly" : "Extra"} ·{" "}
                        {snapshot.time || "No time set"}
                      </span>

                      <span className="att-session-pill__day">
                        {snapshot.location} ·{" "}
                        {snapshot.hasCourtFee
                          ? fmt(snapshot.courtFee)
                          : "No court fee"}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {selectedSessionSnapshot && (
            <div className="att-session-detail-card">
              <p className="att-session-box__title">Selected Session</p>

              <h3>{selectedSessionSnapshot.name}</h3>

              <div className="att-session-detail-grid">
                <span>
                  <Clock size={13} />
                  {selectedSessionSnapshot.time || "No time"}
                </span>

                <span>
                  <MapPin size={13} />
                  {selectedSessionSnapshot.location}
                </span>

                <span>
                  {selectedSessionSnapshot.type === "weekly" ? (
                    <Repeat size={13} />
                  ) : (
                    <Sparkles size={13} />
                  )}
                  {selectedSessionSnapshot.type === "weekly"
                    ? "Repeats weekly"
                    : "Extra session"}
                </span>

                <span>
                  <Wallet size={13} />
                  {selectedSessionSnapshot.hasCourtFee
                    ? `${fmt(selectedSessionSnapshot.courtFee)} court fee`
                    : "No court fee"}
                </span>
              </div>
            </div>
          )}

          <div className="att-travel-grid">
            <div className="att-travel-box">
              <p className="att-travel-box__title">
                <Car size={14} /> Travel To Court
              </p>

              <label className="att-travel-label">Method</label>

              <select
                className="att-travel-select"
                value={toMethod}
                onChange={(event) => handleToMethod(event.target.value)}
                disabled={!selectedSession}
              >
                <option value="">Select method</option>

                {TRAVEL_METHODS.map((method) => (
                  <option key={method.key} value={method.label}>
                    {method.emoji} {method.label}
                  </option>
                ))}
              </select>

              <label className="att-travel-label">Cost</label>

              <div className="att-travel-cost-row">
                <span className="att-travel-currency">LKR</span>

                <input
                  className="att-travel-input"
                  type="number"
                  value={toCost}
                  onChange={(event) => setToCost(event.target.value)}
                  disabled={!selectedSession}
                  placeholder="0"
                />
              </div>
            </div>

            <div className="att-travel-box">
              <p className="att-travel-box__title">
                <Home size={14} /> Return Home
              </p>

              <label className="att-travel-label">Method</label>

              <select
                className="att-travel-select"
                value={fromMethod}
                onChange={(event) => handleFromMethod(event.target.value)}
                disabled={!selectedSession}
              >
                <option value="">Select method</option>

                {TRAVEL_METHODS.map((method) => (
                  <option key={method.key} value={method.label}>
                    {method.emoji} {method.label}
                  </option>
                ))}
              </select>

              <label className="att-travel-label">Cost</label>

              <div className="att-travel-cost-row">
                <span className="att-travel-currency">LKR</span>

                <input
                  className="att-travel-input"
                  type="number"
                  value={fromCost}
                  onChange={(event) => setFromCost(event.target.value)}
                  disabled={!selectedSession}
                  placeholder="0"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="att-sheet-area">
          <div className="att-sheet-heading att-sheet-heading--wide">
            <div>
              <h2 className="att-sheet-date">
                {formatDisplayDate(selectedDate)}
              </h2>

              {selectedSessionSnapshot && (
                <span className="att-sheet-session">
                  {selectedSessionSnapshot.name} ·{" "}
                  {selectedSessionSnapshot.time || "No time"}
                </span>
              )}
            </div>

            <div className="att-stats-box att-stats-box--inline">
              <div className="att-stat-item total">
                <Users size={16} />
                <span className="att-stat-item__num">{total}</span>
                <span className="att-stat-item__lbl">Total</span>
              </div>

              <div className="att-stat-item present">
                <CheckCircle size={16} />
                <span className="att-stat-item__num">
                  {stats.totalPresent}
                </span>
                <span className="att-stat-item__lbl">Present</span>
              </div>

              <div className="att-stat-item absent">
                <XCircle size={16} />
                <span className="att-stat-item__num">
                  {stats.totalAbsent}
                </span>
                <span className="att-stat-item__lbl">Absent</span>
              </div>

              <div className="att-stat-item unmarked">
                <span className="att-stat-item__dash">—</span>
                <span className="att-stat-item__num">{unmarked}</span>
                <span className="att-stat-item__lbl">Unmarked</span>
              </div>
            </div>
          </div>

          {!selectedSession && !sessionsLoading && availableSessions.length > 0 && (
            <div className="att-warn">
              ⚠️ Select a practice session before marking attendance.
            </div>
          )}

          {!sessionsLoading && availableSessions.length === 0 && (
            <div className="att-warn">
              ⚠️ No session exists for this date. Add a weekly or extra session
              first.
            </div>
          )}

          {error && <div className="att-error-msg">⚠️ {error}</div>}
          {travelError && (
            <div className="att-error-msg">⚠️ {travelError}</div>
          )}

          <div className="att-sheet">
            {loading ? (
              <div className="att-loading">
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="att-skeleton"
                    style={{ animationDelay: `${index * 0.06}s` }}
                  />
                ))}
              </div>
            ) : (
              <>
                {girls.length > 0 && (
                  <div className="att-group">
                    <div className="att-group__header girls">
                      🏸 Girls — {girls.length} players
                    </div>

                    {girls.map((player, index) => (
                      <PlayerRow
                        key={player.id}
                        player={player}
                        status={records[player.id] || ""}
                        onMark={mark}
                        index={index}
                      />
                    ))}
                  </div>
                )}

                {boys.length > 0 && (
                  <div className="att-group">
                    <div className="att-group__header boys">
                      🏸 Boys — {boys.length} players
                    </div>

                    {boys.map((player, index) => (
                      <PlayerRow
                        key={player.id}
                        player={player}
                        status={records[player.id] || ""}
                        onMark={mark}
                        index={index + girls.length}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="att-save-bar">
        <div className="att-save-bar__inner">
          <p className="att-save-bar__info">
            {saved
              ? "✅ Attendance, session snapshot and travel saved."
              : selectedSessionSnapshot
              ? `${markedCount} of ${total} marked · ${
                  selectedSessionSnapshot.name
                } · ${
                  selectedSessionSnapshot.hasCourtFee
                    ? fmt(selectedSessionSnapshot.courtFee)
                    : "No court fee"
                }`
              : `${markedCount} of ${total} marked · ${formatDisplayDate(
                  selectedDate
                )}`}
          </p>

          <button
            className={"att-save-btn " + (saved ? "saved" : "")}
            onClick={handleSaveAll}
            disabled={saving || travelSaving || !selectedSession}
          >
            <Save size={16} />

            {saved
              ? "Saved!"
              : saving || travelSaving
              ? "Saving..."
              : "Save Attendance"}
          </button>
        </div>
      </div>

      {showManager && (
        <SessionManager
          sessions={sessions}
          selectedDate={selectedDate}
          onAdd={add}
          onUpdate={update}
          onDelete={remove}
          onClose={() => setShowManager(false)}
        />
      )}
    </div>
  );
}