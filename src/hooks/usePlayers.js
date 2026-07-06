import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../firebase/players";

export function usePlayers() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    fetchAllPlayers()
      .then((data) => {
        console.log("✅ Players from Firestore:", data);

        // Sort by playerId: PTBA-001, PTBA-002, etc.
        const sorted = [...data].sort((a, b) => {
          const numA = parseInt((a.playerId || "").replace("PTBA-", ""), 10) || 0;
          const numB = parseInt((b.playerId || "").replace("PTBA-", ""), 10) || 0;
          return numA - numB;
        });

        setPlayers(sorted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Firestore error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const girls = players.filter((p) => p.gender === "girl");
  const boys  = players.filter((p) => p.gender === "boy");

  return { girls, boys, loading, error };
}