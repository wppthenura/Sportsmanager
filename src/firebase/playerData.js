import { doc, getDoc, collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "./config";

// ── Get payment history for a player ─────────────────────
export async function getPlayerPayments(firestorePlayerId) {
  const snapshot = await getDocs(collection(db, "payments"));
  return snapshot.docs
    .filter((d) => d.id.startsWith(firestorePlayerId + "_"))
    .map((d) => ({ id: d.id, ...d.data() }))
    .sort((a, b) => b.month.localeCompare(a.month));
}

// ── Get attendance history for a player ──────────────────
export async function getPlayerAttendance(firestorePlayerId) {
  const snapshot = await getDocs(collection(db, "attendance"));
  const result = [];
  snapshot.docs.forEach((d) => {
    const data = d.data();
    const records = data.records || {};
    if (firestorePlayerId in records) {
      result.push({
        docId: d.id,
        date: data.date,
        sessionId: data.sessionId,
        status: records[firestorePlayerId],
      });
    }
  });
  return result.sort((a, b) => b.date.localeCompare(a.date));
}

// ── Get full player record by Firestore doc ID ───────────
export async function getPlayerRecord(firestorePlayerId) {
  const snap = await getDoc(doc(db, "players", firestorePlayerId));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}

// ── Get all teammates (everyone under this coach) ────────
export async function getAllTeammates() {
  const snapshot = await getDocs(collection(db, "players"));
  return snapshot.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .sort((a, b) => {
      const na = parseInt((a.playerId || "").replace("PTBA-", ""), 10) || 0;
      const nb = parseInt((b.playerId || "").replace("PTBA-", ""), 10) || 0;
      return na - nb;
    });
}

// ── Coach analysis notes for a player ─────────────────────
// Stored as subcollection: coach_notes/{firestorePlayerId} → notes: [{text, date, author}]
export async function getCoachNotes(firestorePlayerId) {
  const snap = await getDoc(doc(db, "coach_notes", firestorePlayerId));
  if (!snap.exists()) return [];
  return (snap.data().notes || []).sort((a, b) => b.date.localeCompare(a.date));
}

// ── Progress entries for a player ─────────────────────────
// Stored as: progress_logs/{firestorePlayerId} → entries: [{date, skill, rating, comment}]
export async function getProgressLogs(firestorePlayerId) {
  const snap = await getDoc(doc(db, "progress_logs", firestorePlayerId));
  if (!snap.exists()) return [];
  return (snap.data().entries || []).sort((a, b) => b.date.localeCompare(a.date));
}