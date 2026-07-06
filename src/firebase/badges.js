import {
  collection, getDocs, doc, getDoc, setDoc, addDoc
} from "firebase/firestore";
import { db } from "./config";

// ── Starter badge set — seeded automatically ──────────────
const STARTER_BADGES = [
  { id: "perfect_attendance", name: "Perfect Attendance",  icon: "🎯", color: "#16a34a", description: "Attended every session in a month" },
  { id: "most_improved",      name: "Most Improved",        icon: "📈", color: "#2563eb", description: "Significant skill improvement noticed by coach" },
  { id: "rising_star",        name: "Rising Star",          icon: "⭐", color: "#d97706", description: "Outstanding promise and potential" },
  { id: "team_spirit",        name: "Team Spirit",          icon: "🤝", color: "#9333ea", description: "Great attitude and support for teammates" },
  { id: "first_tournament",   name: "First Tournament",     icon: "🏆", color: "#dc2626", description: "Competed in their first official tournament" },
  { id: "iron_will",          name: "Iron Will",            icon: "💪", color: "#0891b2", description: "Showed exceptional discipline and determination" },
  { id: "smash_master",       name: "Smash Master",         icon: "🏸", color: "#ea580c", description: "Mastered a powerful smash technique" },
  { id: "footwork_pro",       name: "Footwork Pro",         icon: "👟", color: "#4338ca", description: "Excellent court movement and footwork" },
];

// ── Seed starter badges if "badges" collection is empty ───
export async function seedBadgesIfEmpty() {
  const snapshot = await getDocs(collection(db, "badges"));
  if (!snapshot.empty) return;

  for (const badge of STARTER_BADGES) {
    await setDoc(doc(db, "badges", badge.id), badge);
  }
}

// ── Get all available badges (starter + custom) ──────────
export async function getAllBadges() {
  const snapshot = await getDocs(collection(db, "badges"));
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

// ── Add a custom badge ──────────────────────────────────────
export async function addCustomBadge(badge) {
  const ref = await addDoc(collection(db, "badges"), badge);
  return { id: ref.id, ...badge };
}

// ── Get badges earned by a specific player ────────────────
// Stored as: player_badges/{firestorePlayerId} → earned: [{badgeId, dateAwarded, note}]
export async function getPlayerBadges(firestorePlayerId) {
  const snap = await getDoc(doc(db, "player_badges", firestorePlayerId));
  if (!snap.exists()) return [];
  return snap.data().earned || [];
}

// ── Award a badge to a player ──────────────────────────────
export async function awardBadge(firestorePlayerId, badgeId, note = "") {
  const ref  = doc(db, "player_badges", firestorePlayerId);
  const snap = await getDoc(ref);
  const existing = snap.exists() ? (snap.data().earned || []) : [];

  // Don't duplicate
  if (existing.some((e) => e.badgeId === badgeId)) return existing;

  const updated = [
    ...existing,
    { badgeId, dateAwarded: new Date().toISOString().split("T")[0], note },
  ];

  await setDoc(ref, { earned: updated });
  return updated;
}

// ── Revoke a badge ─────────────────────────────────────────
export async function revokeBadge(firestorePlayerId, badgeId) {
  const ref  = doc(db, "player_badges", firestorePlayerId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return [];

  const updated = (snap.data().earned || []).filter((e) => e.badgeId !== badgeId);
  await setDoc(ref, { earned: updated });
  return updated;
}