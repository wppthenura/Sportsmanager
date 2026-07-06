import { useState, useEffect } from "react";
import {
  getPlayerRecord, getAllTeammates,
  getCoachNotes, getProgressLogs,
  getPlayerPayments, getPlayerAttendance
} from "../firebase/playerData";
import { getAllBadges, getPlayerBadges } from "../firebase/badges";

export function usePlayerDashboard(firestorePlayerId) {
  const [player,    setPlayer]    = useState(null);
  const [teammates, setTeammates] = useState([]);
  const [notes,     setNotes]     = useState([]);
  const [progress,  setProgress]  = useState([]);
  const [badges,    setBadges]    = useState([]);
  const [allBadges, setAllBadges] = useState([]);
  const [payments,  setPayments]  = useState([]);
  const [attendance,setAttendance]= useState([]);
  const [loading,   setLoading]   = useState(true);
  const [error,     setError]     = useState(null);

  useEffect(() => {
    if (!firestorePlayerId) return;
    setLoading(true);
    Promise.all([
      getPlayerRecord(firestorePlayerId),
      getAllTeammates(),
      getCoachNotes(firestorePlayerId),
      getProgressLogs(firestorePlayerId),
      getPlayerBadges(firestorePlayerId),
      getAllBadges(),
      getPlayerPayments(firestorePlayerId),
      getPlayerAttendance(firestorePlayerId),
    ])
      .then(([p, team, n, prog, earned, all, pays, att]) => {
        setPlayer(p);
        setTeammates(team);
        setNotes(n);
        setProgress(prog);
        setBadges(earned);
        setAllBadges(all);
        setPayments(pays);
        setAttendance(att);
        setLoading(false);
      })
      .catch((err) => { setError(err.message); setLoading(false); });
  }, [firestorePlayerId]);

  return {
    player, teammates, notes, progress,
    badges, allBadges, payments, attendance,
    loading, error
  };
}