import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LogIn, Loader } from "lucide-react";
import "./PlayerAuth.css";
import { loginPlayer } from "../firebase/playerAuth";

export default function PlayerLogin() {
  const navigate = useNavigate();
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [loading,  setLoading]  = useState(false);
  const [error,    setError]    = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await loginPlayer(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError("Incorrect email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-badge">PT Badminton Academy</div>
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-sub">Log in to view your profile, progress, and achievements.</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <label className="auth-label">
            Email Address
            <input
              className="auth-input"
              type="email"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          {error && <p className="auth-error">⚠️ {error}</p>}

          <button className="auth-submit-btn" type="submit" disabled={loading}>
            {loading ? <Loader size={16} className="spin" /> : <LogIn size={16} />}
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="auth-footer">
          New here? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  );
}