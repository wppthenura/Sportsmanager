import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from "../firebase/config";
import { getLinkedPlayer } from "../firebase/playerAuth";
import { isCoachEmail } from "../config/coachAccess";

export default function AuthEntry() {
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;

    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!active) return;

      if (!user) {
        navigate("/login", { replace: true });
        return;
      }

      if (isCoachEmail(user.email)) {
        navigate("/coach", { replace: true });
        return;
      }

      const linked = await getLinkedPlayer(user.uid);

      if (linked?.role === "player") {
        navigate("/dashboard", { replace: true });
        return;
      }

      await signOut(auth);
      navigate("/login", { replace: true });
    });

    return () => {
      active = false;
      unsub();
    };
  }, [navigate]);

  return (
    <div className="p2-loading">
      <Loader size={30} className="p2-spin" />
      <p>Opening PT Badminton Academy...</p>
    </div>
  );
}