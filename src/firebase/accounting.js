// src/firebase/accounting.js
import { doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./config";

// ── Travel method defaults ─────────────────────────────
export const TRAVEL_METHODS = [
  { key: "pickme_bike",     label: "Pickme Bike",      emoji: "🏍️", defaultCost: 300 },
  { key: "pickme_three",    label: "Pickme Threewheel", emoji: "🛺", defaultCost: 400 },
  { key: "bus",             label: "Bus",               emoji: "🚌", defaultCost: 50  },
  { key: "with_players",    label: "With Players' Parents", emoji: "🚗", defaultCost: 0 },
  { key: "other",           label: "Other",             emoji: "🚶", defaultCost: 0   },
];

// ── Court fee constants ─────────────────────────────────
export const COURT_RATE_PER_HOUR = 500;  // LKR per hour per court
export const COURT_HOURS_PER_SESSION = 3; // hours per Saturday session
export const COURT_FEE_PER_SESSION = COURT_RATE_PER_HOUR * COURT_HOURS_PER_SESSION; // 1500

// ── Save travel log for a session date ─────────────────
// docId: "travel_{dateKey}_{sessionId}"
export async function saveTravelLog(dateKey, sessionId, data) {
  const docId = `travel_${dateKey}_${sessionId || "default"}`;
  await setDoc(doc(db, "travel_logs", docId), {
    date: dateKey,
    sessionId: sessionId || null,
    ...data,
    updatedAt: new Date().toISOString(),
  });
}

// ── Get travel log for a session ───────────────────────
export async function getTravelLog(dateKey, sessionId) {
  const docId = `travel_${dateKey}_${sessionId || "default"}`;
  const snap  = await getDoc(doc(db, "travel_logs", docId));
  return snap.exists() ? snap.data() : null;
}

// ── Get all travel logs ─────────────────────────────────
export async function getAllTravelLogs() {
  const snapshot = await getDocs(collection(db, "travel_logs"));
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

// ── Save extra expense ──────────────────────────────────
export async function saveMonthExpenses(monthKey, expenses) {
  await setDoc(doc(db, "monthly_expenses", monthKey), {
    month: monthKey,
    expenses,
    updatedAt: new Date().toISOString(),
  });
}

// ── Get extra expenses for a month ─────────────────────
export async function getMonthExpenses(monthKey) {
  const snap = await getDoc(doc(db, "monthly_expenses", monthKey));
  return snap.exists() ? snap.data().expenses || [] : [];
}