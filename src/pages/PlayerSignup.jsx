// src/pages/PlayerSignup.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  UserPlus,
  Loader,
  ShieldCheck,
  KeyRound,
  Mail,
  Lock,
  BadgeCheck,
  Eye,
  EyeOff,
} from "lucide-react";
import "./PlayerAuth.css";

import {
  claimPlayerWithEmail,
  claimPlayerWithGoogle,
  normalizePlayerId,
} from "../firebase/playerAuth";

export default function PlayerSignup() {
  const navigate = useNavigate();

  const [playerId, setPlayerId] = useState("");
  const [activationCode, setActivationCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [error, setError] = useState("");

  const cleanPlayerId = () => {
    setPlayerId((prev) => normalizePlayerId(prev));
  };

  const validateClaimFields = () => {
    if (!playerId.trim()) {
      setError("Please enter the Player ID sent by Coach Pulindu.");
      return false;
    }

    if (!activationCode.trim()) {
      setError("Please enter the activation code sent by Coach Pulindu.");
      return false;
    }

    return true;
  };

  const handleEmailClaim = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateClaimFields()) return;

    if (!email.trim()) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirm) {
      setError("Passwords don't match.");
      return;
    }

    setLoadingEmail(true);

    try {
      await claimPlayerWithEmail({
        playerId,
        activationCode,
        email,
        password,
      });

      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Failed to claim player account.");
    } finally {
      setLoadingEmail(false);
    }
  };

  const handleGoogleClaim = async () => {
    setError("");

    if (!validateClaimFields()) return;

    setLoadingGoogle(true);

    try {
      await claimPlayerWithGoogle({
        playerId,
        activationCode,
      });

      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Failed to claim player account with Google.");
    } finally {
      setLoadingGoogle(false);
    }
  };

  const busy = loadingEmail || loadingGoogle;

  return (
    <div className="auth-page auth-page--claim">
      <div className="auth-shell">
        <section className="auth-hero-panel">
          <div className="auth-brand-pill">
            <ShieldCheck size={14} />
            PT Badminton Academy
          </div>

          <h1>Claim Your Player Account</h1>

          <p>
            Enter the Player ID and activation code given by Coach Pulindu to
            connect your login account with your badminton profile.
          </p>

          <div className="auth-steps">
            <div className="auth-step active">
              <span>1</span>
              <div>
                <strong>Enter Player ID</strong>
                <p>Example: PTBA-001</p>
              </div>
            </div>

            <div className="auth-step active">
              <span>2</span>
              <div>
                <strong>Enter Activation Code</strong>
                <p>Private code sent through WhatsApp</p>
              </div>
            </div>

            <div className="auth-step">
              <span>3</span>
              <div>
                <strong>Create Login</strong>
                <p>Email/password or Google</p>
              </div>
            </div>
          </div>

          <div className="auth-help-box">
            <strong>Don’t know your details?</strong>
            <p>
              Please contact Mr. Pulindu. Only players already registered inside
              the academy can claim an account.
            </p>
          </div>
        </section>

        <section className="auth-card auth-card--wide">
          <div className="auth-badge">Secure Player Claim</div>

          <h2 className="auth-title">Create Your Login</h2>

          <p className="auth-sub">
            This will link your parent/player login to your existing PTBA player
            profile.
          </p>

          <form onSubmit={handleEmailClaim} className="auth-form">
            <label className="auth-label">
              Player ID
              <div className="auth-input-wrap">
                <BadgeCheck size={16} />
                <input
                  className="auth-input"
                  placeholder="e.g. PTBA-001"
                  value={playerId}
                  onBlur={cleanPlayerId}
                  onChange={(e) => setPlayerId(e.target.value)}
                  disabled={busy}
                  required
                />
              </div>
            </label>

            <label className="auth-label">
              Activation Code
              <div className="auth-input-wrap">
                <KeyRound size={16} />
                <input
                  className="auth-input"
                  placeholder="e.g. 7K4P92"
                  value={activationCode}
                  onChange={(e) => setActivationCode(e.target.value.toUpperCase())}
                  disabled={busy}
                  required
                />
              </div>
            </label>

            <div className="auth-divider">
              <span>Choose login method</span>
            </div>

            <button
              type="button"
              className="auth-google-btn"
              onClick={handleGoogleClaim}
              disabled={busy}
            >
              {loadingGoogle ? (
                <Loader size={16} className="spin" />
              ) : (
                <span className="auth-google-mark">G</span>
              )}
              {loadingGoogle ? "Connecting Google..." : "Continue with Google"}
            </button>

            <div className="auth-divider auth-divider--soft">
              <span>or create with email</span>
            </div>

            <label className="auth-label">
              Email Address
              <div className="auth-input-wrap">
                <Mail size={16} />
                <input
                  className="auth-input"
                  type="email"
                  placeholder="parent@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={busy}
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
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={busy}
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

            <label className="auth-label">
              Confirm Password
              <div className="auth-input-wrap">
                <Lock size={16} />
                <input
                  className="auth-input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Re-enter password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  disabled={busy}
                />
              </div>
            </label>

            {error && <p className="auth-error">⚠️ {error}</p>}

            <button
              className="auth-submit-btn"
              type="submit"
              disabled={busy}
            >
              {loadingEmail ? (
                <Loader size={16} className="spin" />
              ) : (
                <UserPlus size={16} />
              )}
              {loadingEmail ? "Creating account..." : "Create with Email"}
            </button>
          </form>

          <p className="auth-footer">
            Already claimed your account? <Link to="/login">Log in here</Link>
          </p>

          <p className="auth-footer-note">
            Your activation code is private. Do not share it with other players.
          </p>
        </section>
      </div>
    </div>
  );
}