import { useState, useEffect } from "react";
import { onPlayerAuthChange, getLinkedPlayer } from "../firebase/playerAuth";

/**
 * Tracks the logged-in player's auth state and links it to their
 * Firestore player record. Use this at the top of player-facing pages.
 */
export function usePlayerAuth() {
  const [authUser,    setAuthUser]    = useState(null);
  const [linkedPlayer, setLinkedPlayer] = useState(null);
  const [loading,      setLoading]      = useState(true);

  useEffect(() => {
    const unsub = onPlayerAuthChange(async (user) => {
      setAuthUser(user);
      if (user) {
        try {
          const linked = await getLinkedPlayer(user.uid);
          setLinkedPlayer(linked);
        } catch {
          setLinkedPlayer(null);
        }
      } else {
        setLinkedPlayer(null);
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  return { authUser, linkedPlayer, loading, isLoggedIn: !!authUser };
}