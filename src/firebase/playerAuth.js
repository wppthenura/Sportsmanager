import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, onAuthStateChanged
} from "firebase/auth";
import {
  collection, query, where, getDocs, doc, setDoc, getDoc
} from "firebase/firestore";
import { auth, db } from "./config";

// ── Find a player by their PTBA ID (used during signup) ──
export async function findPlayerByPTBAId(playerId) {
  const q = query(collection(db, "players"), where("playerId", "==", playerId.trim().toUpperCase()));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  const docSnap = snapshot.docs[0];
  return { id: docSnap.id, ...docSnap.data() };
}

// ── Check if a PTBA ID is already linked to an account ───
export async function isPlayerIdLinked(playerId) {
  const ref  = doc(db, "player_accounts", playerId.trim().toUpperCase());
  const snap = await getDoc(ref);
  return snap.exists();
}

// ── Sign up a player ──────────────────────────────────────
// 1. Verify PTBA ID exists in players collection
// 2. Verify it's not already linked to another account
// 3. Create Firebase Auth user
// 4. Create player_accounts/{playerId} → { uid, firestorePlayerId, email }
export async function signUpPlayer(playerId, email, password) {
  const cleanId = playerId.trim().toUpperCase();

  const player = await findPlayerByPTBAId(cleanId);
  if (!player) throw new Error("No player found with that PTBA ID. Please check with your coach.");

  const alreadyLinked = await isPlayerIdLinked(cleanId);
  if (alreadyLinked) throw new Error("This PTBA ID is already linked to an account. Try logging in instead.");

  const cred = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "player_accounts", cleanId), {
    uid: cred.user.uid,
    firestorePlayerId: player.id,
    playerId: cleanId,
    email,
    createdAt: new Date().toISOString(),
  });

  return { uid: cred.user.uid, firestorePlayerId: player.id, playerId: cleanId };
}

// ── Log in ─────────────────────────────────────────────────
export async function loginPlayer(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

// ── Log out ────────────────────────────────────────────────
export async function logoutPlayer() {
  await signOut(auth);
}

// ── Get the linked player record for a logged-in user ─────
export async function getLinkedPlayer(uid) {
  const q = query(collection(db, "player_accounts"), where("uid", "==", uid));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  return snapshot.docs[0].data(); // { uid, firestorePlayerId, playerId, email }
}

// ── Auth state listener ───────────────────────────────────
export function onPlayerAuthChange(callback) {
  return onAuthStateChanged(auth, callback);
}