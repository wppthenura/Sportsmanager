import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from "../firebase/config";
import { isCoachEmail } from "../config/coachAccess";

export default function CoachRoute({ children }) {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/coach-login", { replace: true });
        return;
      }

      if (!isCoachEmail(user.email)) {
        await signOut(auth);
        navigate("/login", { replace: true });
        return;
      }

      setChecking(false);
    });

    return unsub;
  }, [navigate]);

  if (checking) {
    return (
      <div className="p2-loading">
        <Loader size={30} className="p2-spin" />
        <p>Checking coach access...</p>
      </div>
    );
  }

  return children;
}