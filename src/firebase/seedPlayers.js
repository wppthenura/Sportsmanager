import { collection, addDoc, getDocs, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./config";

const defaultPlayers = [
  { name: "Player 1", age: 0, school: "", level: "", gender: "girl", photoURL: "", playerId: "", profilePhotoURL: "", dateOfBirth: "", ageCategory: "", slbaPlayerId: "", nationalRanking: "" },
  { name: "Player 2", age: 0, school: "", level: "", gender: "girl", photoURL: "", playerId: "", profilePhotoURL: "", dateOfBirth: "", ageCategory: "", slbaPlayerId: "", nationalRanking: "" },
  { name: "Player 3", age: 0, school: "", level: "", gender: "girl", photoURL: "", playerId: "", profilePhotoURL: "", dateOfBirth: "", ageCategory: "", slbaPlayerId: "", nationalRanking: "" },
  { name: "Player 4", age: 0, school: "", level: "", gender: "girl", photoURL: "", playerId: "", profilePhotoURL: "", dateOfBirth: "", ageCategory: "", slbaPlayerId: "", nationalRanking: "" },
  { name: "Player 5", age: 0, school: "", level: "", gender: "boy",  photoURL: "", playerId: "", profilePhotoURL: "", dateOfBirth: "", ageCategory: "", slbaPlayerId: "", nationalRanking: "" },
  { name: "Player 6", age: 0, school: "", level: "", gender: "boy",  photoURL: "", playerId: "", profilePhotoURL: "", dateOfBirth: "", ageCategory: "", slbaPlayerId: "", nationalRanking: "" },
  { name: "Player 7", age: 0, school: "", level: "", gender: "boy",  photoURL: "", playerId: "", profilePhotoURL: "", dateOfBirth: "", ageCategory: "", slbaPlayerId: "", nationalRanking: "" },
  { name: "Player 8", age: 0, school: "", level: "", gender: "boy",  photoURL: "", playerId: "", profilePhotoURL: "", dateOfBirth: "", ageCategory: "", slbaPlayerId: "", nationalRanking: "" },
];

export async function autoSeedIfEmpty() {
  // Check a dedicated lock document first — prevents duplicate seeding
  const lockRef  = doc(db, "academy", "seed_lock");
  const lockSnap = await getDoc(lockRef);

  if (lockSnap.exists()) {
    console.log("✅ Seed lock exists — skipping seed.");
    return;
  }

  // Write the lock FIRST before adding any players
  await setDoc(lockRef, { seeded: true, seededAt: new Date().toISOString() });
  console.log("🔒 Seed lock created.");

  console.log("🌱 Seeding 8 default player slots...");
  for (let i = 0; i < defaultPlayers.length; i++) {
    const playerId = `PTBA-${String(i + 1).padStart(3, "0")}`;
    await addDoc(collection(db, "players"), { ...defaultPlayers[i], playerId });
    console.log(`✅ Added: ${playerId}`);
  }
  console.log("🎉 Done seeding!");
}

export async function generateNextPlayerId() {
  const snapshot = await getDocs(collection(db, "players"));
  let maxNum = 0;
  snapshot.docs.forEach((d) => {
    const pid   = d.data().playerId || "";
    const match = pid.match(/^PTBA-(\d+)$/);
    if (match) {
      const num = parseInt(match[1], 10);
      if (num > maxNum) maxNum = num;
    }
  });
  return `PTBA-${String(maxNum + 1).padStart(3, "0")}`;
}

export async function addNewPlayer(playerData) {
  const playerId = await generateNextPlayerId();
  const newPlayer = {
    name: "", age: 0, school: "", level: "",
    gender: "boy", photoURL: "", profilePhotoURL: "",
    dateOfBirth: "", ageCategory: "", slbaPlayerId: "", nationalRanking: "",
    ...playerData,
    playerId,
  };
  const docRef = await addDoc(collection(db, "players"), newPlayer);
  console.log(`✅ New player added with ID: ${playerId}`);
  return { id: docRef.id, ...newPlayer };
}