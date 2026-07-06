import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserPlus, Loader } from "lucide-react";
import "./PlayerAuth.css";
import { signUpPlayer } from "../firebase/playerAuth";

export default function PlayerSignup() {
  const navigate = useNavigate();
  const [playerId, setPlayerId] = useState("");
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [confirm,  setConfirm]  = useState("");
  const [loading,  setLoading]  = useState(false);
  const [error,    setError]    = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Passwords don't match.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      await signUpPlayer(playerId, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-badge">PT Badminton Academy</div>
        <h1 className="auth-title">Create Your Player Account</h1>
        <p className="auth-sub">Link your account to your PTBA Player ID to access your profile, progress, and achievements.</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <label className="auth-label">
            PTBA Player ID
            <input
              className="auth-input"
              placeholder="e.g. PTBA-001"
              value={playerId}
              onChange={(e) => setPlayerId(e.target.value)}
              required
            />
          </label>

          <label className="auth-label">
            Email Address
            <input
              className="auth-input"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="auth-label">
            Password
            <input
              className="auth-input"
              type="password"
              placeholder="At least 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <label className="auth-label">
            Confirm Password
            <input
              className="auth-input"
              type="password"
              placeholder="Re-enter password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
          </label>

          {error && <p className="auth-error">⚠️ {error}</p>}

          <button className="auth-submit-btn" type="submit" disabled={loading}>
            {loading ? <Loader size={16} className="spin" /> : <UserPlus size={16} />}
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Log in here</Link>
        </p>
        <p className="auth-footer-note">
          Don't know your PTBA ID? Ask your coach.
        </p>
      </div>
    </div>
  );
}