import { doc, getDoc, setDoc, updateDoc, collection, getDocs, updateDoc as update } from "firebase/firestore";
import { db } from "./config";

const COACH_DOC = "coach_profile"; // single document in "academy" collection

// Fetch coach profile
export async function fetchCoachProfile() {
  const ref  = doc(db, "academy", COACH_DOC);
  const snap = await getDoc(ref);
  if (snap.exists()) return { id: snap.id, ...snap.data() };

  // Auto-create empty profile if it doesn't exist yet
  const empty = {
    coachId:        "",
    name:           "W.P. Pulindu Thenura",
    title:          "Head Coach — PT Badminton Academy",
    nationality:    "Sri Lankan",
    category:       "National Elite / Professional",
    email:          "",
    phone:          "",
    bio:            "",
    profilePhotoURL:"",
    coverPhotoURL:  "",
  };
  await setDoc(ref, empty);
  return { id: COACH_DOC, ...empty };
}

// Update coach profile fields
export async function updateCoachProfile(fields) {
  const ref = doc(db, "academy", COACH_DOC);
  await updateDoc(ref, fields);
}

// Fetch all players (for coach dashboard)
export async function fetchAllPlayersForCoach() {
  const snapshot = await getDocs(collection(db, "players"));
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
    .sort((a, b) => {
      const na = parseInt((a.playerId || "").replace("PTBA-", ""), 10) || 0;
      const nb = parseInt((b.playerId || "").replace("PTBA-", ""), 10) || 0;
      return na - nb;
    });
}

// Update a single player document (everything except playerId)
export async function updatePlayer(firestoreId, fields) {
  const { playerId, ...safeFields } = fields; // strip playerId — it's locked
  const ref = doc(db, "players", firestoreId);
  await update(ref, safeFields);
}