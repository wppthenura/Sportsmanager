// ─────────────────────────────────────────────────────────
//  Firestore helpers for Players
//
//  Expected Firestore structure:
//  Collection: "players"
//  Document fields:
//    name   : string   e.g. "Dinuthi"
//    age    : number   e.g. 13
//    school : string   e.g. "Royal College"
//    level  : string   e.g. "Intermediate"
//    gender : string   "girl" | "boy"
//    order  : number   (1–8, controls display order)
// ─────────────────────────────────────────────────────────
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

export async function fetchAllPlayers() {
  const snapshot = await getDocs(collection(db, "players"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
