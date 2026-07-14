import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./config";

export async function fetchSessions() {
  const snapshot = await getDocs(collection(db, "practice_sessions"));

  return snapshot.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .filter((s) => s.active !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

export async function addSession(data) {
  const sessions = await fetchSessions();

  const payload = {
    name: data.name || "New Session",
    type: data.type || "weekly", // weekly | extra
    day: data.type === "extra" ? "" : data.day || "Saturday",
    date: data.type === "extra" ? data.date || "" : "",
    time: data.time || "",
    location: data.location || "Panda Multi Sports Arena",
    courtRate: data.hasCourtFee === false ? 0 : Number(data.courtRate) || 500,
courtHours: data.hasCourtFee === false ? 0 : Number(data.courtHours) || 3,
courtCount: data.hasCourtFee === false ? 0 : Number(data.courtCount) || 1,
    active: true,
    notes: data.notes || "",
    order: sessions.length + 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    hasCourtFee: data.hasCourtFee !== false,
  };

  const ref = await addDoc(collection(db, "practice_sessions"), payload);
  return { id: ref.id, ...payload };
}

export async function updateSession(sessionId, fields) {
  const hasCourtFee = fields.hasCourtFee !== false;

  await updateDoc(doc(db, "practice_sessions", sessionId), {
    ...fields,
    hasCourtFee,
    courtRate: hasCourtFee ? Number(fields.courtRate) || 500 : 0,
    courtHours: hasCourtFee ? Number(fields.courtHours) || 3 : 0,
    courtCount: hasCourtFee ? Number(fields.courtCount) || 1 : 0,
    updatedAt: new Date().toISOString(),
  });
}

export async function deleteSession(sessionId) {
  // Soft delete, so old attendance/account records do not break
  await updateDoc(doc(db, "practice_sessions", sessionId), {
    active: false,
    deletedAt: new Date().toISOString(),
  });
}