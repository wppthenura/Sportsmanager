import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export function usePlayer(firestoreId) {
  const [player,  setPlayer]  = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    if (!firestoreId) return;
    setLoading(true);
    getDoc(doc(db, "players", firestoreId))
      .then((snap) => {
        if (snap.exists()) setPlayer({ id: snap.id, ...snap.data() });
        else setError("Player not found.");
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [firestoreId]);

  return { player, loading, error, setPlayer };
}