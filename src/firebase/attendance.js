import {
  doc, getDoc, setDoc, collection, getDocs
} from "firebase/firestore";
import { db } from "./config";

export function todayKey() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
export function formatDisplayDate(dateKey) {
  const d = new Date(dateKey + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getDocId(dateKey, sessionId) {
  return `${dateKey}_${sessionId}`;
}

// ── Get attendance for a date + session ───────────────────
// doc ID: "2026-06-07_sessionId"
export async function getAttendanceSheet(dateKey, sessionId) {
  if (!sessionId) {
    return {
      date: dateKey,
      sessionId: null,
      records: {},
      totalPresent: 0,
      totalAbsent: 0,
    };
  }

  const docId = `${dateKey}_${sessionId}`;
  const ref = doc(db, "attendance", docId);
  const snap = await getDoc(ref);

  if (snap.exists()) return snap.data();

  return {
    date: dateKey,
    sessionId,
    records: {},
    totalPresent: 0,
    totalAbsent: 0,
  };
}

export async function saveAttendanceSheet(
  dateKey,
  sessionId,
  records,
  sessionMeta = {}
) {
  if (!sessionId) throw new Error("Session is required");

  const docId = `${dateKey}_${sessionId}`;

  const values = Object.values(records);
  const totalPresent = values.filter((v) => v === "present").length;
  const totalAbsent = values.filter((v) => v === "absent").length;

  const hasCourtFee = sessionMeta.hasCourtFee !== false;

const courtRate = hasCourtFee ? Number(sessionMeta.courtRate) || 500 : 0;
const courtHours = hasCourtFee ? Number(sessionMeta.courtHours) || 3 : 0;
const courtCount = hasCourtFee ? Number(sessionMeta.courtCount) || 1 : 0;
const courtFee = hasCourtFee ? courtRate * courtHours * courtCount : 0;

  const data = {
    date: dateKey,
    sessionId,

    sessionName: sessionMeta.name || "",
    sessionType: sessionMeta.type || "weekly",
    sessionDay: sessionMeta.day || "",
    sessionTime: sessionMeta.time || "",
    sessionLocation: sessionMeta.location || "Panda Multi Sports Arena",

    courtRate,
    courtHours,
    courtCount,
    courtFee,
    hasCourtFee,

    records,
    totalPresent,
    totalAbsent,

    updatedAt: new Date().toISOString(),
  };

  await setDoc(doc(db, "attendance", docId), data);
  return data;
}

// ── Get all past attendance dates ─────────────────────────
export async function getAttendanceDates() {
  const snapshot = await getDocs(collection(db, "attendance"));
  // Return unique date+session combos
  return snapshot.docs
    .map((d) => ({ docId: d.id, ...d.data() }))
    .sort((a, b) => b.date.localeCompare(a.date));
}