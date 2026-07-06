import { useState, useEffect } from "react";
import { fetchCoachProfile, updateCoachProfile } from "../firebase/coach";

export function useCoach() {
  const [coach,   setCoach]   = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving,  setSaving]  = useState(false);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    fetchCoachProfile()
      .then((data) => { setCoach(data); setLoading(false); })
      .catch((err) => { setError(err.message); setLoading(false); });
  }, []);

  const saveCoach = async (fields) => {
    setSaving(true);
    try {
      await updateCoachProfile(fields);
      setCoach((prev) => ({ ...prev, ...fields }));
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return { coach, loading, saving, error, saveCoach };
}