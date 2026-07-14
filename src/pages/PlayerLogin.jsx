// src/pages/PlayerLogin.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  LogIn,
  Loader,
  ShieldCheck,
  BadgeCheck,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import "./PlayerAuth.css";

import {
  loginPlayer,
  loginPlayerWithGoogle,
  normalizePlayerId,
} from "../firebase/playerAuth";

export default function PlayerLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [error, setError] = useState("");

  const cleanUsername = () => {
    setUsername((prev) => normalizePlayerId(prev));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username.trim()) {
      setError("Please enter your Player ID.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    setLoadingLogin(true);

    try {
      await loginPlayer(username, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Incorrect Player ID or password.");
    } finally {
      setLoadingLogin(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoadingGoogle(true);

    try {
      await loginPlayerWithGoogle();
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Google login failed.");
    } finally {
      setLoadingGoogle(false);
    }
  };

  const busy = loadingLogin || loadingGoogle;

  return (
    <div className="auth-page auth-page--login">
      <div className="auth-shell auth-shell--login">
        <section className="auth-hero-panel auth-hero-panel--compact">
          <div className="auth-brand-pill">
            <ShieldCheck size={14} />
            PT Badminton Academy
          </div>

          <h1>Welcome Back</h1>

          <p>
            Log in using your Player ID and password to view your badminton
            profile, progress, lessons, badges, team updates, and payments.
          </p>

          <div className="auth-login-preview">
            <span>Username</span>
            <strong>PTBA-001</strong>
            <small>Your academy Player ID</small>
          </div>
        </section>

        <section className="auth-card">
          <div className="auth-badge">Player Login</div>

          <h2 className="auth-title">Log In</h2>

          <p className="auth-sub">
            Use your Player ID as the username.
          </p>

          <form onSubmit={handleSubmit} className="auth-form">
            <label className="auth-label">
              Username / Player ID
              <div className="auth-input-wrap">
                <BadgeCheck size={16} />
                <input
                  className="auth-input"
                  placeholder="e.g. PTBA-001"
                  value={username}
                  onBlur={cleanUsername}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={busy}
                  required
                />
              </div>
            </label>

            <label className="auth-label">
              Password
              <div className="auth-input-wrap">
                <Lock size={16} />
                <input
                  className="auth-input"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={busy}
                  required
                />

                <button
                  type="button"
                  className="auth-eye-btn"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </label>

            {error && <p className="auth-error">⚠️ {error}</p>}

            <button
              className="auth-submit-btn"
              type="submit"
              disabled={busy}
            >
              {loadingLogin ? (
                <Loader size={16} className="spin" />
              ) : (
                <LogIn size={16} />
              )}
              {loadingLogin ? "Logging in..." : "Log In"}
            </button>

            <div className="auth-divider auth-divider--soft">
              <span>or</span>
            </div>

            <button
              type="button"
              className="auth-google-btn"
              onClick={handleGoogleLogin}
              disabled={busy}
            >
              {loadingGoogle ? (
                <Loader size={16} className="spin" />
              ) : (
                <span className="auth-google-mark">G</span>
              )}
              {loadingGoogle ? "Connecting Google..." : "Continue with Google"}
            </button>
          </form>

          <p className="auth-footer">
            New here? <Link to="/signup">Claim your player account</Link>
          </p>

          <p className="auth-footer-note">
            If your Player ID is not accepted, please contact Coach Pulindu.
          </p>
        </section>
      </div>
    </div>
  );
}