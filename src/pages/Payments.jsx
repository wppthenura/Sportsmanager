import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, ChevronLeft, ChevronRight,
  CheckCircle, Clock, Gift, Edit2, Save, X, TrendingUp
} from "lucide-react";
import "./Payments.css";
import { useMonthPayments } from "../hooks/usePayments";
import { currentMonthKey, formatMonthDisplay, monthKey } from "../firebase/payments";
import { useSessions } from "../hooks/useSessions";

// ── Month navigator ───────────────────────────────────────
function MonthNav({ value, onChange }) {
  const [year, month] = value.split("-").map(Number);

  const prev = () => {
    const d = new Date(year, month - 2, 1);
    onChange(monthKey(d.getFullYear(), d.getMonth() + 1));
  };
  const next = () => {
    const d = new Date(year, month, 1);
    onChange(monthKey(d.getFullYear(), d.getMonth() + 1));
  };

  const isCurrentMonth = value === currentMonthKey();

  return (
    <div className="month-nav">
      <button className="month-nav__btn" onClick={prev}><ChevronLeft size={18} /></button>
      <span className="month-nav__label">{formatMonthDisplay(value)}</span>
      <button className="month-nav__btn" onClick={next} disabled={isCurrentMonth}>
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

// ── Status badge ─────────────────────────────────────────
function StatusBadge({ status, finalFee }) {
  if (finalFee === 0)        return <span className="badge badge--waived">No Charge</span>;
  if (status === "paid")     return <span className="badge badge--paid">Paid</span>;
  if (status === "waived")   return <span className="badge badge--waived">Waived</span>;
  return                            <span className="badge badge--unpaid">Unpaid</span>;
}

// ── Single payment row ────────────────────────────────────
function PaymentRow({ row, onSave, index }) {
  const [editing,  setEditing]  = useState(false);
  const [baseFee,  setBaseFee]  = useState(row.baseFee);
  const [notes,    setNotes]    = useState(row.notes || "");
  const [status,   setStatus]   = useState(row.status);
  const [saving,   setSaving]   = useState(false);

  const { player, absences, finalFee, deduction, reason } = row;

  const handleSave = async () => {
    setSaving(true);
    await onSave(player.id, {
      baseFee:  Number(baseFee),
      status,
      notes,
      finalFee: row.finalFee,
    });
    setSaving(false);
    setEditing(false);
  };

  const handleCancel = () => {
    setBaseFee(row.baseFee);
    setNotes(row.notes || "");
    setStatus(row.status);
    setEditing(false);
  };

  return (
    <div
      className={`pay-row pay-row--${finalFee === 0 ? "waived" : status}`}
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      {/* Player info */}
      <div className="pay-row__player">
        <span className="pay-row__pid">{player.playerId}</span>
        <span className="pay-row__name">{player.name || "—"}</span>
      </div>

      {/* Attendance summary */}
      <div className="pay-row__att">
        <div className={`absence-pip ${absences === 0 ? "full" : absences >= 4 ? "none" : "partial"}`}>
          {absences === 0 ? "✓ Full" : `${absences} absent`}
        </div>
        <span className="pay-row__reason">{reason}</span>
      </div>

      {/* Fee breakdown */}
      <div className="pay-row__fees">
        {editing ? (
          <input
            className="fee-input"
            type="number"
            value={baseFee}
            onChange={(e) => setBaseFee(e.target.value)}
            min="0"
          />
        ) : (
          <span className="pay-row__base">LKR {row.baseFee.toLocaleString()}</span>
        )}

        {deduction > 0 && (
          <span className="pay-row__deduction">− LKR {deduction.toLocaleString()}</span>
        )}

        <span className={`pay-row__final ${finalFee === 0 ? "zero" : ""}`}>
          {finalFee === 0 ? "LKR 0" : `LKR ${finalFee.toLocaleString()}`}
        </span>
      </div>

      {/* Status */}
      <div className="pay-row__status">
        {editing ? (
          <select
            className="status-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="unpaid">Unpaid</option>
            <option value="paid">Paid</option>
            <option value="waived">Waived</option>
          </select>
        ) : (
          <StatusBadge status={status} finalFee={finalFee} />
        )}
      </div>

      {/* Notes */}
      <div className="pay-row__notes">
        {editing ? (
          <input
            className="notes-input"
            placeholder="Add note..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        ) : (
          <span className="pay-row__note-text">{notes || "—"}</span>
        )}
      </div>

      {/* Actions */}
      <div className="pay-row__actions">
        {editing ? (
          <>
            <button className="pay-btn pay-btn--save" onClick={handleSave} disabled={saving}>
              <Save size={13} /> {saving ? "..." : "Save"}
            </button>
            <button className="pay-btn pay-btn--cancel" onClick={handleCancel}>
              <X size={13} />
            </button>
          </>
        ) : (
          <button className="pay-btn pay-btn--edit" onClick={() => setEditing(true)}>
            <Edit2 size={13} /> Edit
          </button>
        )}
      </div>
    </div>
  );
}

// ── Summary cards ─────────────────────────────────────────
function SummaryCards({ summary }) {
  const cards = [
    {
      label: "Expected",
      value: `LKR ${summary.totalExpected.toLocaleString()}`,
      sub:   `${summary.rows} players`,
      color: "neutral",
      icon:  <TrendingUp size={20} />,
    },
    {
      label: "Collected",
      value: `LKR ${summary.totalCollected.toLocaleString()}`,
      sub:   `${summary.paidCount} paid`,
      color: "green",
      icon:  <CheckCircle size={20} />,
    },
    {
      label: "Pending",
      value: `LKR ${summary.totalPending.toLocaleString()}`,
      sub:   `${summary.unpaidCount} unpaid`,
      color: "amber",
      icon:  <Clock size={20} />,
    },
    {
      label: "No Charge",
      value: `${summary.waivedCount} players`,
      sub:   "waived / full absence",
      color: "blue",
      icon:  <Gift size={20} />,
    },
  ];

  return (
    <div className="summary-cards">
      {cards.map((c) => (
        <div key={c.label} className={`summary-card summary-card--${c.color}`}>
          <div className="summary-card__icon">{c.icon}</div>
          <div>
            <p className="summary-card__value">{c.value}</p>
            <p className="summary-card__label">{c.label}</p>
            <p className="summary-card__sub">{c.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Deduction rules reference ─────────────────────────────
function RulesCard() {
  return (
    <div className="rules-card">
      <h4 className="rules-card__title">📋 Fee Deduction Rules</h4>
      <div className="rules-grid">
        <div className="rule rule--green">
          <span className="rule__sessions">0 – 1 absent</span>
          <span className="rule__result">Full fee</span>
        </div>
        <div className="rule rule--amber">
          <span className="rule__sessions">2 absent</span>
          <span className="rule__result">− LKR 500</span>
        </div>
        <div className="rule rule--orange">
          <span className="rule__sessions">3 absent</span>
          <span className="rule__result">− LKR 1,000</span>
        </div>
        <div className="rule rule--red">
          <span className="rule__sessions">4 absent</span>
          <span className="rule__result">No charge</span>
        </div>
      </div>
      <p className="rules-card__note">
        Default monthly fee: <strong>LKR 3,500</strong> · Custom fees per player can be set by editing each row.
        Absence count is pulled automatically from your attendance records.
      </p>
    </div>
  );
}

// ── Main Payments page ────────────────────────────────────
export default function Payments() {
  const navigate   = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState(currentMonthKey());
  const [filterStatus,  setFilterStatus]  = useState("all");
  const { sessions } = useSessions();
  const [selectedSession, setSelectedSession] = useState("");

  const { rows, loading, saving, error, saveRow, summary } = useMonthPayments(selectedMonth, selectedSession);

  const girls = rows.filter((r) => r.player.gender === "girl");
  const boys  = rows.filter((r) => r.player.gender === "boy");

  const filterRow = (r) => {
    if (filterStatus === "all")    return true;
    if (filterStatus === "paid")   return r.status === "paid";
    if (filterStatus === "unpaid") return r.status === "unpaid" && r.finalFee > 0;
    if (filterStatus === "waived") return r.status === "waived" || r.finalFee === 0;
    return true;
  };

  const filteredGirls = girls.filter(filterRow);
  const filteredBoys  = boys.filter(filterRow);

  return (
    <div className="pay-page">

      {/* ── Header ── */}
      <div className="pay-header">
        <div className="pay-header__inner">
          <button className="pay-back-btn" onClick={() => navigate("/coach")}>
            <ArrowLeft size={16} /> Back to Coach Portal
          </button>
          <div>
            <p className="pay-header__academy">PT Badminton Academy</p>
            <h1 className="pay-header__title">Payment Management</h1>
          </div>
        </div>
      </div>

      {/* ── Controls ── */}
      <div className="pay-controls">
        <MonthNav value={selectedMonth} onChange={setSelectedMonth} />

        <div className="filter-tabs">
          {["all", "paid", "unpaid", "waived"].map((f) => (
            <button
              key={f}
              className={`filter-tab ${filterStatus === f ? "active" : ""}`}
              onClick={() => setFilterStatus(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        <div className="pay-session-filter">
  <select
    className="pay-session-select"
    value={selectedSession}
    onChange={(e) => setSelectedSession(e.target.value)}
  >
    <option value="">All Sessions</option>
    {sessions.map((s) => (
      <option key={s.id} value={s.id}>{s.name}</option>
    ))}
  </select>
</div>
      </div>

      {/* ── Summary ── */}
      {!loading && (
        <div className="pay-main">
          <SummaryCards summary={{ ...summary, rows: rows.length }} />
          <RulesCard />
        </div>
      )}

      {/* ── Table ── */}
      <div className="pay-sheet">
        {error && <p className="pay-error">⚠️ {error}</p>}

        {loading ? (
          <div className="pay-loading">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="pay-skeleton" style={{ animationDelay: `${i * 0.05}s` }} />
            ))}
          </div>
        ) : (
          <>
            {/* Table header */}
            <div className="pay-table-header">
              <span>Player</span>
              <span>Attendance</span>
              <span>Fee Breakdown</span>
              <span>Status</span>
              <span>Notes</span>
              <span>Actions</span>
            </div>

            {/* Girls */}
            {filteredGirls.length > 0 && (
              <div className="pay-group">
                <div className="pay-group__label girls">🏸 Girls</div>
                {filteredGirls.map((r, i) => (
                  <PaymentRow key={r.player.id} row={r} onSave={saveRow} index={i} />
                ))}
              </div>
            )}

            {/* Boys */}
            {filteredBoys.length > 0 && (
              <div className="pay-group">
                <div className="pay-group__label boys">🏸 Boys</div>
                {filteredBoys.map((r, i) => (
                  <PaymentRow key={r.player.id} row={r} onSave={saveRow} index={i + filteredGirls.length} />
                ))}
              </div>
            )}

            {filteredGirls.length === 0 && filteredBoys.length === 0 && (
              <p className="pay-empty">No records match this filter.</p>
            )}
          </>
        )}
      </div>

      {saving && <div className="pay-saving-toast">💾 Saving...</div>}
    </div>
  );
}