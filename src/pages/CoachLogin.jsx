import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  browserLocalPersistence,
  setPersistence,
} from "firebase/auth";
import { Loader, Shield, Mail, Lock } from "lucide-react";

import { auth } from "../firebase/config";
import { isCoachEmail } from "../config/coachAccess";
import "./PlayerAuth.css";

const googleProvider = new GoogleAuthProvider();

export default function CoachLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function finishCoachLogin(user) {
    if (!isCoachEmail(user.email)) {
      await signOut(auth);
      throw new Error("This login is only allowed for Coach Pulindu.");
    }

    navigate("/coach", { replace: true });
  }

  async function handleEmailLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await setPersistence(auth, browserLocalPersistence);
      const cred = await signInWithEmailAndPassword(
        auth,
        email.trim().toLowerCase(),
        password
      );

      await finishCoachLogin(cred.user);
    } catch (err) {
      setError(err.message || "Coach login failed.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleLogin() {
    setError("");
    setLoading(true);

    try {
      await setPersistence(auth, browserLocalPersistence);
      const cred = await signInWithPopup(auth, googleProvider);
      await finishCoachLogin(cred.user);
    } catch (err) {
      setError(err.message || "Coach Google login failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-shell">
        <section className="auth-hero-panel">
          <div className="auth-brand-pill">
            <Shield size={15} /> Coach Access
          </div>

          <h1>PT Badminton Academy</h1>
          <p>
            Hidden coach login. Only the registered coach email can access the
            management dashboard.
          </p>
        </section>

        <section className="auth-card">
          <div className="auth-badge">
            <Shield size={15} /> Coach Login
          </div>

          <h2 className="auth-title">Welcome Coach</h2>
          <p className="auth-sub">Sign in with your private coach account.</p>

          <form className="auth-form" onSubmit={handleEmailLogin}>
            <label className="auth-label">Email</label>
            <div className="auth-input-wrap">
              <Mail size={17} />
              <input
                className="auth-input"
                type="email"
                value={email}
                placeholder="coach@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <label className="auth-label">Password</label>
            <div className="auth-input-wrap">
              <Lock size={17} />
              <input
                className="auth-input"
                type="password"
                value={password}
                placeholder="Coach password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <div className="auth-error">{error}</div>}

            <button className="auth-submit-btn" type="submit" disabled={loading}>
              {loading ? <Loader size={17} className="spin" /> : "Log In"}
            </button>
          </form>

          <div className="auth-divider">or</div>

          <button
            type="button"
            className="auth-google-btn"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            Continue with Google as Coach
          </button>
        </section>
      </div>
    </div>
  );
}