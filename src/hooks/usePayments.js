import { useState, useEffect, useCallback } from "react";
import {
  getMonthPayments, savePaymentRecord, calculateFee,
  countAbsencesForMonth, getPlayerFeeSetting, savePlayerFeeSetting,
} from "../firebase/payments";
import { fetchAllPlayers } from "../firebase/players";

export function useMonthPayments(monthK, sessionId) {
  const [rows,    setRows]    = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving,  setSaving]  = useState(false);
  const [error,   setError]   = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [players, existing] = await Promise.all([
        fetchAllPlayers(),
        getMonthPayments(monthK),
      ]);

      const sorted = [...players].sort((a, b) => {
        const na = parseInt((a.playerId || "").replace("PTBA-", ""), 10) || 0;
        const nb = parseInt((b.playerId || "").replace("PTBA-", ""), 10) || 0;
        return na - nb;
      });

      const built = await Promise.all(
        sorted.map(async (p) => {
          const saved      = existing.find((e) => e.firestorePlayerId === p.id);
          const feeSetting = await getPlayerFeeSetting(p.id);
          const baseFee    = saved?.baseFee ?? feeSetting.baseFee ?? 3500;
          const feeNote    = saved?.feeNote ?? feeSetting.feeNote ?? "";
          const absences   = await countAbsencesForMonth(p.id, monthK, sessionId || null);
          const calc       = calculateFee(baseFee, absences);

          return {
            player:    p,
            baseFee,
            feeNote,
            absences,
            ...calc,
            status:    saved?.status || "unpaid",
            notes:     saved?.notes  || "",
            savedData: saved || null,
          };
        })
      );

      setRows(built);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [monthK, sessionId]);

  useEffect(() => { load(); }, [load]);

  const saveRow = async (firestorePlayerId, updates) => {
    setSaving(true);
    try {
      const row = rows.find((r) => r.player.id === firestorePlayerId);

      // If baseFee changed, save to player_fees collection too
      if (updates.baseFee !== undefined && updates.baseFee !== row.baseFee) {
        await savePlayerFeeSetting(
          firestorePlayerId,
          updates.baseFee,
          updates.feeNote ?? row.feeNote
        );
      }

      const newBaseFee  = updates.baseFee ?? row.baseFee;
      const newCalc     = calculateFee(newBaseFee, row.absences);

      await savePaymentRecord(firestorePlayerId, monthK, {
        baseFee:    newBaseFee,
        feeNote:    updates.feeNote   ?? row.feeNote,
        finalFee:   newCalc.finalFee,
        deduction:  newCalc.deduction,
        absences:   row.absences,
        reason:     newCalc.reason,
        status:     updates.status    ?? row.status,
        notes:      updates.notes     ?? row.notes,
        playerName: row.player.name,
        playerId:   row.player.playerId,
        sessionId:  sessionId || null,
      });

      setRows((prev) =>
        prev.map((r) =>
          r.player.id === firestorePlayerId
            ? { ...r, ...updates, ...newCalc, baseFee: newBaseFee }
            : r
        )
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const totalExpected  = rows.reduce((s, r) => s + r.finalFee, 0);
  const totalCollected = rows.filter((r) => r.status === "paid").reduce((s, r) => s + r.finalFee, 0);
  const totalPending   = rows.filter((r) => r.status === "unpaid" && r.finalFee > 0).reduce((s, r) => s + r.finalFee, 0);
  const paidCount      = rows.filter((r) => r.status === "paid").length;
  const unpaidCount    = rows.filter((r) => r.status === "unpaid" && r.finalFee > 0).length;
  const waivedCount    = rows.filter((r) => r.status === "waived" || r.finalFee === 0).length;

  return {
    rows, loading, saving, error, saveRow, reload: load,
    summary: { totalExpected, totalCollected, totalPending, paidCount, unpaidCount, waivedCount },
  };
}