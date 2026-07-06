import { useState, useEffect } from "react";
import {
  fetchSessions,
  addSession,
  updateSession,
  deleteSession,
} from "../firebase/sessions";

export function useSessions() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    fetchSessions()
      .then((data) => {
        setSessions(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const add = async (data) => {
    const s = await addSession(data);
    setSessions((prev) => [...prev, s]);
    return s;
  };

  const update = async (id, fields) => {
    await updateSession(id, fields);
    setSessions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...fields } : s))
    );
  };

  const remove = async (id) => {
    await deleteSession(id);
    setSessions((prev) => prev.filter((s) => s.id !== id));
  };

  return { sessions, loading, add, update, remove, reload: load };
}