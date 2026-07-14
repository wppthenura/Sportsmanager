import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AuthEntry from "./pages/AuthEntry";
import CoachRoute from "./pages/CoachRoute";
import CoachLogin from "./pages/CoachLogin";

import Home from "./pages/Home";
import PlayerProfile from "./pages/PlayerProfile";
import CoachProfile from "./pages/CoachProfile";
import Attendance from "./pages/Attendance";
import Payments from "./pages/Payments";
import Accounts from "./pages/Accounts";

import PlayerLogin from "./pages/PlayerLogin";
import PlayerSignup from "./pages/PlayerSignup";
import PlayerDashboard from "./pages/PlayerDashboard";

import "./App.css";

import { autoSeedIfEmpty } from "./firebase/seedPlayers";
import { seedBadgesIfEmpty } from "./firebase/badges";
import { keepUserLoggedIn } from "./firebase/playerAuth";

export default function App() {
  const seeded = useRef(false);

  useEffect(() => {
    keepUserLoggedIn().catch(console.error);

    if (seeded.current) return;
    seeded.current = true;

    autoSeedIfEmpty();
    seedBadgesIfEmpty();
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
  <Route path="/" element={<AuthEntry />} />
  <Route path="/home" element={<Navigate to="/coach" replace />} />

  <Route path="/login" element={<PlayerLogin />} />
  <Route path="/signup" element={<PlayerSignup />} />
  <Route path="/dashboard" element={<PlayerDashboard />} />

  <Route path="/coach-login" element={<CoachLogin />} />

  <Route
    path="/coach"
    element={
      <CoachRoute>
        <Home />
      </CoachRoute> 
    }
  />

          <Route
            path="/coach/profile"
            element={
              <CoachRoute>
                <CoachProfile />
              </CoachRoute>
            }
          />

          <Route
            path="/player/:id"
            element={
              <CoachRoute>
                <PlayerProfile />
              </CoachRoute>
            }
          />

          <Route
            path="/attendance"
            element={
              <CoachRoute>
                <Attendance />
              </CoachRoute>
            }
          />

          <Route
            path="/payments"
            element={
              <CoachRoute>
                <Payments />
              </CoachRoute>
            }
          />

          <Route
            path="/accounts"
            element={
              <CoachRoute>
                <Accounts />
              </CoachRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}