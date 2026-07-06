import { useState, useEffect, useCallback } from "react";
import {
  getAttendanceSheet,
  saveAttendanceSheet,
  getAttendanceDates,
} from "../firebase/attendance";
import { fetchAllPlayers } from "../firebase/players";

export function useAttendance(dateKey, sessionId) {
  const [players, setPlayers] = useState([]);
  const [records, setRecords] = useState({});
  const [stats, setStats] = useState({ totalPresent: 0, totalAbsent: 0 });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState(null);

  // ── Load data ───────────────────────────────────────────
  const load = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const allPlayersPromise = fetchAllPlayers();

      // ✅ IMPORTANT: always return safe empty sheet if no session
      const sheetPromise = sessionId
        ? getAttendanceSheet(dateKey, sessionId)
        : Promise.resolve({
            records: {},
            totalPresent: 0,
            totalAbsent: 0,
          });

      const [allPlayers, sheet] = await Promise.all([
        allPlayersPromise,
        sheetPromise,
      ]);

      const sorted = [...allPlayers].sort((a, b) => {
        const na =
          parseInt((a.playerId || "").replace("PTBA-", ""), 10) || 0;
        const nb =
          parseInt((b.playerId || "").replace("PTBA-", ""), 10) || 0;
        return na - nb;
      });

      setPlayers(sorted);

      setRecords(sheet.records || {});
      setStats({
        totalPresent: sheet.totalPresent || 0,
        totalAbsent: sheet.totalAbsent || 0,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [dateKey, sessionId]);

  useEffect(() => {
    load();
  }, [load]);

  // ── Mark attendance ─────────────────────────────────────
  const mark = (playerId, status) => {
    setSaved(false);

    setRecords((prev) => {
      const updated = { ...prev };

      if (!status) {
        delete updated[playerId];
      } else {
        updated[playerId] = status;
      }

      const vals = Object.values(updated);

      setStats({
        totalPresent: vals.filter((v) => v === "present").length,
        totalAbsent: vals.filter((v) => v === "absent").length,
      });

      return updated;
    });
  };

  // ── Save attendance ─────────────────────────────────────
  const save = async (sessionMeta = {}) => {
    if (!sessionId) {
      setError("Please select a practice session first.");
      return;
    }

    setSaving(true);
    setError(null);

    try {
      await saveAttendanceSheet(dateKey, sessionId, records, sessionMeta);
      setSaved(true);

      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return {
    players,
    records,
    stats,
    loading,
    saving,
    saved,
    error,
    mark,
    save,
  };
}

// ── Attendance history ───────────────────────────────────
export function useAttendanceDates() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAttendanceDates()
      .then((d) => {
        setHistory(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return { history, loading };
}