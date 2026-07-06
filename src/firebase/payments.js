import { doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./config";

export function calculateFee(baseFee, absences) {
  if (absences >= 4) return { finalFee: 0,             deduction: baseFee, reason: "All 4 sessions missed — no charge" };
  if (absences === 3) return { finalFee: baseFee - 1000, deduction: 1000,  reason: "3 sessions missed — LKR 1,000 deducted" };
  if (absences === 2) return { finalFee: baseFee - 500,  deduction: 500,   reason: "2 sessions missed — LKR 500 deducted" };
  return                     { finalFee: baseFee,        deduction: 0,     reason: absences === 1 ? "1 session missed — no deduction" : "Full attendance" };
}

export function monthKey(year, month) {
  return `${year}-${String(month).padStart(2, "0")}`;
}

export function currentMonthKey() {
  const d = new Date();
  return monthKey(d.getFullYear(), d.getMonth() + 1);
}

export function formatMonthDisplay(key) {
  const [year, month] = key.split("-");
  return new Date(year, parseInt(month) - 1, 1)
    .toLocaleDateString("en-US", { year: "numeric", month: "long" });
}

// ── Count absences for a player in a month FOR A SPECIFIC SESSION ──
export async function countAbsencesForMonth(firestorePlayerId, monthK, sessionId) {
  const snapshot = await getDocs(collection(db, "attendance"));
  let absences = 0;

  snapshot.docs.forEach((d) => {
    const data = d.data();
    // Match month
    if (!data.date || !data.date.startsWith(monthK)) return;
    // If sessionId filter provided, only count that session
    if (sessionId && data.sessionId !== sessionId) return;
    const records = data.records || {};
    if (records[firestorePlayerId] === "absent") absences++;
  });

  return absences;
}

// ── Get player's custom fee setting ──────────────────────
export async function getPlayerFeeSetting(firestorePlayerId) {
  const ref  = doc(db, "player_fees", firestorePlayerId);
  const snap = await getDoc(ref);
  if (snap.exists()) return snap.data();
  return { baseFee: 3500, feeNote: "" };
}

// ── Save player's custom fee setting ─────────────────────
export async function savePlayerFeeSetting(firestorePlayerId, baseFee, feeNote) {
  await setDoc(doc(db, "player_fees", firestorePlayerId), {
    baseFee:   Number(baseFee),
    feeNote:   feeNote || "",
    updatedAt: new Date().toISOString(),
  });
}

// ── Get/save payment records ──────────────────────────────
export async function getPaymentRecord(firestorePlayerId, monthK) {
  const ref  = doc(db, "payments", `${firestorePlayerId}_${monthK}`);
  const snap = await getDoc(ref);
  if (snap.exists()) return snap.data();
  return null;
}

export async function savePaymentRecord(firestorePlayerId, monthK, data) {
  const ref = doc(db, "payments", `${firestorePlayerId}_${monthK}`);
  await setDoc(ref, {
    firestorePlayerId,
    month: monthK,
    ...data,
    updatedAt: new Date().toISOString(),
  });
}

export async function getMonthPayments(monthK) {
  const snapshot = await getDocs(collection(db, "payments"));

  return snapshot.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .filter((p) => p.month === monthK || p.id.endsWith(`_${monthK}`));
}

export async function getPlayerPaymentHistory(firestorePlayerId) {
  const snapshot = await getDocs(collection(db, "payments"));
  return snapshot.docs
    .filter((d) => d.id.startsWith(`${firestorePlayerId}_`))
    .map((d) => ({ id: d.id, ...d.data() }))
    .sort((a, b) => b.month.localeCompare(a.month));
}

