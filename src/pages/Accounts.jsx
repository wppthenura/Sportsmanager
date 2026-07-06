// src/pages/Accounts.jsx
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, TrendingUp, TrendingDown, DollarSign,
  Plus, Trash2, ChevronLeft, ChevronRight
} from "lucide-react";
import "./Accounts.css";

import {
  getAllTravelLogs,
  saveMonthExpenses,
  getMonthExpenses,
  COURT_FEE_PER_SESSION
} from "../firebase/accounting";

import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useMonthPayments } from "../hooks/usePayments";

// ── Helpers ──────────────────────────────────────────────
function monthKey(y, m) {
  return `${y}-${String(m).padStart(2, "0")}`;
}

function currentMonthKey() {
  const d = new Date();
  return monthKey(d.getFullYear(), d.getMonth() + 1);
}

function displayMonth(mk) {
  const [y, m] = mk.split("-");
  return new Date(y, parseInt(m) - 1, 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

function fmt(n) {
  return "LKR " + (Number(n) || 0).toLocaleString();
}

function normalizedStatus(status) {
  return String(status || "unpaid").trim().toLowerCase();
}

// ── Month nav ────────────────────────────────────────────
function MonthNav({ value, onChange }) {
  const [y, m] = value.split("-").map(Number);
  const cur = currentMonthKey();

  const prev = () => {
    const d = new Date(y, m - 2, 1);
    onChange(monthKey(d.getFullYear(), d.getMonth() + 1));
  };

  const next = () => {
    const d = new Date(y, m, 1);
    onChange(monthKey(d.getFullYear(), d.getMonth() + 1));
  };

  return (
    <div className="acc-month-nav">
      <button className="acc-month-btn" onClick={prev}>
        <ChevronLeft size={16} />
      </button>

      <span className="acc-month-label">{displayMonth(value)}</span>

      <button className="acc-month-btn" onClick={next} disabled={value === cur}>
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

// ── P&L bar ───────────────────────────────────────────────
function PLBar({ revenue, expenses, net }) {
  const max = Math.max(revenue, expenses, 1);
  const revPct = (revenue / max) * 100;
  const expPct = (expenses / max) * 100;
  const isProfit = net >= 0;

  return (
    <div className="acc-pl-bar">
      <div className="acc-pl-bar__row">
        <span className="acc-pl-bar__lbl">Revenue</span>
        <div className="acc-pl-bar__track">
          <div
            className="acc-pl-bar__fill acc-pl-bar__fill--rev"
            style={{ width: revPct + "%" }}
          />
        </div>
        <span className="acc-pl-bar__val acc-pl-bar__val--rev">
          {fmt(revenue)}
        </span>
      </div>

      <div className="acc-pl-bar__row">
        <span className="acc-pl-bar__lbl">Expenses</span>
        <div className="acc-pl-bar__track">
          <div
            className="acc-pl-bar__fill acc-pl-bar__fill--exp"
            style={{ width: expPct + "%" }}
          />
        </div>
        <span className="acc-pl-bar__val acc-pl-bar__val--exp">
          {fmt(expenses)}
        </span>
      </div>

      <div className="acc-pl-bar__net">
        <span>Net {isProfit ? "Profit" : "Loss"}</span>
        <span className={"acc-pl-bar__net-val " + (isProfit ? "profit" : "loss")}>
          {isProfit ? "+" : ""}
          {fmt(net)}
        </span>
      </div>
    </div>
  );
}

// ── Main ─────────────────────────────────────────────────
export default function Accounts() {
  const navigate = useNavigate();

  const [month, setMonth] = useState(currentMonthKey());
  const [payments, setPayments] = useState([]);
  const [travelLogs, setTravelLogs] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [extraExpenses, setExtraExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState("");
  const [error, setError] = useState("");
  const {
  rows,
  loading: paymentsLoading,
  error: paymentsError,
  summary,
} = useMonthPayments(month, "");

  const [debug, setDebug] = useState({
    allPayments: 0,
    monthPayments: 0,
    allAttendance: 0,
    monthSessions: 0,
    allTravel: 0,
    monthTravel: 0,
  });

  const [newExpLabel, setNewExpLabel] = useState("");
  const [newExpAmount, setNewExpAmount] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const [paymentsSnap, attendanceSnap, sessionsSnap, allTravel, extras] =
        await Promise.all([
  getDocs(collection(db, "payments")),
  getDocs(collection(db, "attendance")),
  getDocs(collection(db, "practice_sessions")), // <-- ADD THIS
  getAllTravelLogs(),
  getMonthExpenses(month),
]);

      // Payments saved from Payments page
      const allPayments = paymentsSnap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));

      const monthPayments = allPayments.filter((p) => {
        return p.month === month || p.id.endsWith(`_${month}`);
      });

      // Attendance saved from Attendance page
      const allAttendance = attendanceSnap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));

      const monthAttendance = allAttendance.filter((a) => {
        return a.date && a.date.startsWith(month);
      });

      const practiceSessions = sessionsSnap.docs.map((d) => ({
  id: d.id,
  ...d.data(),
}));

      // One court fee per saved attendance date
      const monthSessions = monthAttendance
  .map((a) => {
    const linkedSession = practiceSessions.find((s) => s.id === a.sessionId);

    const hasCourtFee =
      linkedSession?.hasCourtFee !== undefined
        ? linkedSession.hasCourtFee !== false
        : a.hasCourtFee !== false;

    const courtRate = hasCourtFee
      ? Number(linkedSession?.courtRate ?? a.courtRate) || 0
      : 0;

    const courtHours = hasCourtFee
      ? Number(linkedSession?.courtHours ?? a.courtHours) || 0
      : 0;

    const courtCount = hasCourtFee
      ? Number(linkedSession?.courtCount ?? a.courtCount) || 0
      : 0;

    const calculatedCourtFee = hasCourtFee
      ? courtRate * courtHours * courtCount
      : 0;

    return {
      id: a.id,
      date: a.date,
      sessionId: a.sessionId,
      sessionName: linkedSession?.name || a.sessionName || "Unnamed Session",
      sessionType: linkedSession?.type || a.sessionType || "weekly",
      sessionTime: linkedSession?.time || a.sessionTime || "",
      sessionLocation: linkedSession?.location || a.sessionLocation || "",
      hasCourtFee,
      courtRate,
      courtHours,
      courtCount,
      courtFee: calculatedCourtFee,
    };
  })
  .sort((a, b) => a.date.localeCompare(b.date));

      // Travel saved from Attendance page
      const monthTravel = allTravel.filter((t) => {
        return t.date && t.date.startsWith(month);
      });

      setPayments(monthPayments);
      setSessions(monthSessions);   
      setTravelLogs(monthTravel);
      setExtraExpenses(Array.isArray(extras) ? extras : []);

      setDebug({
        allPayments: allPayments.length,
        monthPayments: monthPayments.length,
        allAttendance: allAttendance.length,
        monthSessions: monthSessions.length,
        allTravel: allTravel.length,
        monthTravel: monthTravel.length,
      });

      console.log("ACCOUNTS DEBUG:", {
        month,
        allPayments,
        monthPayments,
        allAttendance,
        monthAttendance,
        sessions,
        allTravel,
        monthTravel,
        extras,
      });
    } catch (err) {
      console.error("Accounts load error:", err);
      setError(err.message || "Failed to load accounts data.");
    } finally {
      setLoading(false);
    }
  }, [month]);

  useEffect(() => {
    load();
  }, [load]);

  // ── Derived numbers ──────────────────────────────────
  const revenue = rows
  .filter((r) => r.status === "paid")
  .reduce((s, r) => s + (Number(r.finalFee) || 0), 0);

const outstanding = rows
  .filter((r) => r.status === "unpaid" && Number(r.finalFee) > 0)
  .reduce((s, r) => s + (Number(r.finalFee) || 0), 0);

const expected = summary?.totalExpected || rows.reduce(
  (s, r) => s + (Number(r.finalFee) || 0),
  0
);

  const sessionCount = sessions.length;
const courtFee = sessions.reduce((s, item) => s + (Number(item.courtFee) || 0), 0);

  const travelCost = travelLogs.reduce((s, t) => {
    return s + (Number(t.toCost) || 0) + (Number(t.fromCost) || 0);
  }, 0);

  const extraTotal = extraExpenses.reduce((s, e) => {
    return s + (Number(e.amount) || 0);
  }, 0);

  const totalExpenses = courtFee + travelCost + extraTotal;
  const net = revenue - totalExpenses;

  const handleAddExpense = async () => {
    if (!newExpLabel.trim() || !newExpAmount) return;

    const updated = [
      ...extraExpenses,
      {
        label: newExpLabel.trim(),
        amount: Number(newExpAmount),
      },
    ];

    setExtraExpenses(updated);
    setNewExpLabel("");
    setNewExpAmount("");
    setSaving(true);

    try {
      await saveMonthExpenses(month, updated);
      setSavedMsg("Saved!");
      setTimeout(() => setSavedMsg(""), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteExpense = async (i) => {
    const updated = extraExpenses.filter((_, idx) => idx !== i);

    setExtraExpenses(updated);
    setSaving(true);

    try {
      await saveMonthExpenses(month, updated);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="acc-page">
      {/* Header */}
      <div className="acc-header">
        <div className="acc-header__inner">
          <button className="acc-back" onClick={() => navigate("/coach")}>
            <ArrowLeft size={15} /> Coach Portal
          </button>

          <div>
            <p className="acc-header__eyebrow">
              PT Badminton Academy · Coach Accounts
            </p>
            <h1 className="acc-header__title">Monthly P&amp;L</h1>
          </div>
        </div>
      </div>

      <div className="acc-body">
        {/* Month selector */}
        <div className="acc-top-row">
          <MonthNav value={month} onChange={setMonth} />

          {saving && <span className="acc-saving">Saving…</span>}
          {savedMsg && <span className="acc-saved">{savedMsg}</span>}
        </div>

        {error && (
          <div className="acc-card">
            <p className="acc-empty">⚠️ {error}</p>
          </div>
        )}

        {/* Temporary debug helper */}
        {!loading && (
          <div className="acc-card">
            <p className="acc-card__title">Firestore Data Check</p>
            <p className="acc-empty">
              Payments: {debug.monthPayments}/{debug.allPayments} · Attendance sessions:{" "}
              {debug.monthSessions}/{debug.allAttendance} · Travel logs:{" "}
              {debug.monthTravel}/{debug.allTravel}
            </p>
          </div>
        )}

        {loading ? (
          <div className="acc-loading">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="acc-skeleton"
                style={{ animationDelay: i * 0.07 + "s" }}
              />
            ))}
          </div>
        ) : (
          <>
            {/* Overview */}
            <div className="acc-card">
              <p className="acc-card__title">
                <TrendingUp size={14} /> Overview — {displayMonth(month)}
              </p>

              <PLBar revenue={revenue} expenses={totalExpenses} net={net} />
            </div>

            {/* Summary tiles */}
            <div className="acc-tiles">
              <div className="acc-tile acc-tile--rev">
                <span className="acc-tile__icon">
                  <DollarSign size={18} />
                </span>
                <span className="acc-tile__num">{fmt(revenue)}</span>
                <span className="acc-tile__lbl">Collected</span>
              </div>

              <div className="acc-tile acc-tile--pending">
                <span className="acc-tile__icon">
                  <TrendingDown size={18} />
                </span>
                <span className="acc-tile__num">{fmt(outstanding)}</span>
                <span className="acc-tile__lbl">Outstanding</span>
              </div>

              <div className="acc-tile acc-tile--exp">
                <span className="acc-tile__icon">
                  <TrendingDown size={18} />
                </span>
                <span className="acc-tile__num">{fmt(totalExpenses)}</span>
                <span className="acc-tile__lbl">Total Expenses</span>
              </div>

              <div className={"acc-tile " + (net >= 0 ? "acc-tile--profit" : "acc-tile--loss")}>
                <span className="acc-tile__icon">
                  {net >= 0 ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
                </span>
                <span className="acc-tile__num">
                  {net >= 0 ? "+" : ""}
                  {fmt(net)}
                </span>
                <span className="acc-tile__lbl">
                  Net {net >= 0 ? "Profit" : "Loss"}
                </span>
              </div>
            </div>

            {/* Revenue */}
            <div className="acc-card">
              <p className="acc-card__title">
                <DollarSign size={14} /> Revenue — Player Fees
              </p>

              {rows.length === 0 ? (
                <p className="acc-empty">
                  No saved payment records for this month. Go to Payments, mark a player as paid/unpaid, and press Save.
                </p>
              ) : (
                <div className="acc-table">
                  <div className="acc-table__head">
                    <span>Player</span>
                    <span>ID</span>
                    <span>Fee</span>
                    <span>Status</span>
                  </div>

                  {rows.map((r) => (
                    <div key={r.player?.id} className="acc-table__row">
  <span>{r.player?.name || "—"}</span>
  <span className="acc-mono">{r.player?.playerId || "—"}</span>
  <span>{fmt(r.finalFee)}</span>
  <span className={"acc-badge acc-badge--" + (r.status || "unpaid")}>
    {r.status || "unpaid"}
  </span>
</div>
                  ))}

                  <div className="acc-table__total">
                    <span>Expected</span>
                    <span></span>
                    <span>{fmt(expected)}</span>
                    <span></span>
                  </div>

                  <div className="acc-table__total">
                    <span>Collected</span>
                    <span></span>
                    <span className="acc-green">{fmt(revenue)}</span>
                    <span></span>
                  </div>
                </div>
              )}
            </div>

            {/* Court fees */}
            <div className="acc-card">
  <p className="acc-card__title">
    <TrendingDown size={14} /> Court Fees — Session Breakdown
  </p>

  {sessions.length === 0 ? (
    <p className="acc-note">
      No saved attendance sessions found for this month.
    </p>
  ) : (
    <div className="acc-table">
      <div className="acc-table__head">
        <span>Date</span>
        <span>Session</span>
        <span>Type</span>
        <span>Court Fee</span>
      </div>

      {sessions.map((s) => (
        <div key={s.id} className="acc-table__row">
          <span>{s.date}</span>

          <span>
            {s.sessionName}
            {s.sessionTime ? ` · ${s.sessionTime}` : ""}
            {s.sessionLocation ? ` · ${s.sessionLocation}` : ""}
          </span>

          <span className={"acc-badge acc-badge--" + (s.sessionType === "extra" ? "unpaid" : "paid")}>
            {s.sessionType === "extra" ? "Extra" : "Recurring"}
          </span>

          <span className={s.courtFee > 0 ? "acc-coral" : "acc-green"}>
           {s.hasCourtFee === false ? "No court fee" : fmt(s.courtFee)}
          </span>
        </div>
      ))}

      <div className="acc-table__total">
        <span>Total Court Fees</span>
        <span></span>
        <span></span>
        <span className="acc-coral">{fmt(courtFee)}</span>
      </div>
    </div>
  )}
</div>

            {/* Travel costs */}
            <div className="acc-card">
              <p className="acc-card__title">
                <TrendingDown size={14} /> Travel Costs
              </p>

              {travelLogs.length === 0 ? (
                <p className="acc-empty">
                  No travel logged for this month. Log travel from the Attendance page and press Save Attendance.
                </p>
              ) : (
                <div className="acc-table">
                  <div className="acc-table__head">
                    <span>Date</span>
                    <span>To Court</span>
                    <span>Return Home</span>
                    <span>Day Total</span>
                  </div>

                  {travelLogs.map((t) => {
                    const dayTotal =
                      (Number(t.toCost) || 0) + (Number(t.fromCost) || 0);

                    return (
                      <div key={t.id} className="acc-table__row">
                        <span>{t.date}</span>
                        <span>
                          {t.toMethod
                            ? `${t.toMethod} · ${fmt(t.toCost)}`
                            : "—"}
                        </span>
                        <span>
                          {t.fromMethod
                            ? `${t.fromMethod} · ${fmt(t.fromCost)}`
                            : "—"}
                        </span>
                        <span className="acc-mono">{fmt(dayTotal)}</span>
                      </div>
                    );
                  })}

                  <div className="acc-table__total">
                    <span>Total Travel</span>
                    <span></span>
                    <span></span>
                    <span className="acc-coral">{fmt(travelCost)}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Extra expenses */}
            <div className="acc-card">
              <p className="acc-card__title">
                <TrendingDown size={14} /> Other Expenses
              </p>

              {extraExpenses.length > 0 && (
                <div className="acc-table">
                  <div className="acc-table__head">
                    <span>Description</span>
                    <span>Amount</span>
                    <span></span>
                  </div>

                  {extraExpenses.map((e, i) => (
                    <div key={i} className="acc-table__row">
                      <span>{e.label}</span>
                      <span>{fmt(e.amount)}</span>

                      <button
                        className="acc-delete-btn"
                        onClick={() => handleDeleteExpense(i)}
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  ))}

                  {extraTotal > 0 && (
                    <div className="acc-table__total">
                      <span>Total Other</span>
                      <span className="acc-coral">{fmt(extraTotal)}</span>
                      <span></span>
                    </div>
                  )}
                </div>
              )}

              <div className="acc-add-expense">
                <input
                  className="acc-input"
                  placeholder="Description e.g. Shuttlecocks"
                  value={newExpLabel}
                  onChange={(e) => setNewExpLabel(e.target.value)}
                />

                <div className="acc-input-row">
                  <input
                    className="acc-input acc-input--num"
                    type="number"
                    placeholder="Amount (LKR)"
                    value={newExpAmount}
                    onChange={(e) => setNewExpAmount(e.target.value)}
                  />

                  <button
                    className="acc-add-btn"
                    onClick={handleAddExpense}
                    disabled={!newExpLabel.trim() || !newExpAmount}
                  >
                    <Plus size={14} /> Add Expense
                  </button>
                </div>
              </div>
            </div>

            {/* Final summary */}
            <div className="acc-summary-card">
              <p className="acc-summary-card__title">
                Month Summary · {displayMonth(month)}
              </p>

              <div className="acc-summary-rows">
                <div className="acc-summary-row">
                  <span>Expected Player Fees</span>
                  <span>{fmt(expected)}</span>
                </div>

                <div className="acc-summary-row">
                  <span>Fees Collected</span>
                  <span className="acc-green">{fmt(revenue)}</span>
                </div>

                <div className="acc-summary-row">
                  <span>Outstanding</span>
                  <span className="acc-amber">{fmt(outstanding)}</span>
                </div>

                <div className="acc-summary-row">
                  <span>Court Fees ({sessionCount} sessions)</span>
                  <span className="acc-coral">− {fmt(courtFee)}</span>
                </div>

                <div className="acc-summary-row">
                  <span>Travel Costs</span>
                  <span className="acc-coral">− {fmt(travelCost)}</span>
                </div>

                {extraTotal > 0 && (
                  <div className="acc-summary-row">
                    <span>Other Expenses</span>
                    <span className="acc-coral">− {fmt(extraTotal)}</span>
                  </div>
                )}

                <div className="acc-summary-divider" />

                <div className="acc-summary-row acc-summary-row--net">
                  <span>{net >= 0 ? "Net Profit" : "Net Loss"}</span>
                  <span className={net >= 0 ? "acc-green" : "acc-coral"}>
                    {net >= 0 ? "+" : ""}
                    {fmt(net)}
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}