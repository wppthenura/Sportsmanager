import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home             from "./pages/Home";
import PlayerProfile    from "./pages/PlayerProfile";
import CoachProfile     from "./pages/CoachProfile";
import Attendance       from "./pages/Attendance";
import Payments         from "./pages/Payments";
import PlayerLogin      from "./pages/PlayerLogin";
import PlayerSignup     from "./pages/PlayerSignup";
import PlayerDashboard  from "./pages/PlayerDashboard";
import "./App.css";
import { autoSeedIfEmpty } from "./firebase/seedPlayers";
import { seedBadgesIfEmpty } from "./firebase/badges";
import Accounts from "./pages/Accounts";

export default function App() {
  const seeded = useRef(false);

  useEffect(() => {
    if (seeded.current) return;
    seeded.current = true;
    autoSeedIfEmpty();
    seedBadgesIfEmpty();
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/player/:id" element={<PlayerProfile />} />
          <Route path="/coach"      element={<CoachProfile />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/payments"   element={<Payments />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/login"      element={<PlayerLogin />} />
          <Route path="/signup"     element={<PlayerSignup />} />
          <Route path="/dashboard"  element={<PlayerDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}