import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Users,
  UserRound,
  CalendarCheck,
  CreditCard,
  Wallet,
  BarChart3,
  ClipboardList,
  TrendingUp,
  Award,
  Shield,
  Sparkles,
  Bell,
  Clock,
  ChevronRight,
  LogOut,
  Plus,
  AlertTriangle,
} from "lucide-react";

import "./Home.css";
import PlayerCard from "../components/PlayerCard";
import { usePlayers } from "../hooks/usePlayers";
import { logoutPlayer } from "../firebase/playerAuth";

// ── Skeleton placeholder players shown while Firestore loads ──
const GIRL_SKELETONS = [
  { id: "sk-g1", name: "Dinuthi", gender: "girl" },
  { id: "sk-g2", name: "Lithumi", gender: "girl" },
  { id: "sk-g3", name: "Ganushi", gender: "girl" },
  { id: "sk-g4", name: "Gimashi", gender: "girl" },
];

const BOY_SKELETONS = [
  { id: "sk-b1", name: "Niveth", gender: "boy" },
  { id: "sk-b2", name: "Chathum", gender: "boy" },
  { id: "sk-b3", name: "Ometh", gender: "boy" },
  { id: "sk-b4", name: "Methuja", gender: "boy" },
];

function todayLabel() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function safeText(value) {
  return String(value || "").trim().toLowerCase();
}

function StatCard({ icon, label, value, sub, tone }) {
  return (
    <div className={"coachdash-stat coachdash-stat--" + tone}>
      <div className="coachdash-stat__icon">{icon}</div>

      <div>
        <span>{label}</span>
        <strong>{value}</strong>
        {sub && <small>{sub}</small>}
      </div>
    </div>
  );
}

function ActionCard({ icon, title, text, button, tone, onClick }) {
  return (
    <button
      type="button"
      className={"coachdash-action coachdash-action--" + tone}
      onClick={onClick}
    >
      <div className="coachdash-action__icon">{icon}</div>

      <div className="coachdash-action__body">
        <strong>{title}</strong>
        <p>{text}</p>
        <span>
          {button} <ChevronRight size={14} />
        </span>
      </div>
    </button>
  );
}

function SmallInsight({ icon, title, text }) {
  return (
    <div className="coachdash-insight">
      <div>{icon}</div>

      <section>
        <strong>{title}</strong>
        <p>{text}</p>
      </section>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const { girls, boys, loading, error } = usePlayers();

  const [query, setQuery] = useState("");

  const displayGirls = loading ? GIRL_SKELETONS : girls;
  const displayBoys = loading ? BOY_SKELETONS : boys;

  const allPlayers = useMemo(
    function () {
      return [...displayGirls, ...displayBoys];
    },
    [displayGirls, displayBoys]
  );

  const filteredGirls = useMemo(
    function () {
      return displayGirls.filter(function (p) {
        return safeText(p.name).includes(safeText(query));
      });
    },
    [displayGirls, query]
  );

  const filteredBoys = useMemo(
    function () {
      return displayBoys.filter(function (p) {
        return safeText(p.name).includes(safeText(query));
      });
    },
    [displayBoys, query]
  );

  const totalPlayers = allPlayers.length;
  const girlCount = displayGirls.length;
  const boyCount = displayBoys.length;

  const missingInfoCount = allPlayers.filter(function (p) {
    return !p.age || !p.school || !p.level;
  }).length;

  const beginnerCount = allPlayers.filter(function (p) {
    return safeText(p.level).includes("beginner");
  }).length;

  async function handleLogout() {
    await logoutPlayer();
    navigate("/coach-login", { replace: true });
  }

  return (
    <div className="coachdash">
      <section className="coachdash-hero">
        <div className="coachdash-hero__left">
          <div className="coachdash-brand-pill">
            <Shield size={15} />
            Coach Dashboard
          </div>

          <h1>
            PT Badminton
            <span>Academy Control Center</span>
          </h1>

          <p>
            Manage players, attendance, payments, accounts, progress, parent
            communication, and academy growth from one professional workspace.
          </p>

          <div className="coachdash-hero__meta">
            <span>
              <Clock size={14} />
              {todayLabel()}
            </span>

            <span>
              <Sparkles size={14} />
              Coach Pulindu Thenura
            </span>

            <span>
              <Award size={14} />
              Sri Lanka Badminton
            </span>
          </div>
        </div>

        <div className="coachdash-hero__right">
          <div className="coachdash-profile-card">
            <div className="coachdash-profile-card__top">
              <span>Head Coach</span>
              <Shield size={16} />
            </div>

            <div className="coachdash-profile-avatar">PT</div>

            <strong>Pulindu Thenura</strong>
            <p>Professional Badminton Player & Coach</p>

            <div className="coachdash-profile-actions">
              <button type="button" onClick={() => navigate("/coach/profile")}>
                Coach Profile
              </button>

              <button type="button" onClick={handleLogout}>
                <LogOut size={14} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="coachdash-stats">
        <StatCard
          tone="blue"
          icon={<Users size={22} />}
          label="Total Players"
          value={totalPlayers}
          sub="Active academy players"
        />

        <StatCard
          tone="pink"
          icon={<UserRound size={22} />}
          label="Girls"
          value={girlCount}
          sub="Girls training group"
        />

        <StatCard
          tone="green"
          icon={<UserRound size={22} />}
          label="Boys"
          value={boyCount}
          sub="Boys training group"
        />

        <StatCard
          tone="gold"
          icon={<AlertTriangle size={22} />}
          label="Profile Updates"
          value={missingInfoCount}
          sub="Missing age, school, or level"
        />
      </section>

      <section className="coachdash-main-grid">
        <div className="coachdash-panel coachdash-panel--actions">
          <div className="coachdash-panel__head">
            <div>
              <span>Coach Tools</span>
              <h2>Quick Actions</h2>
            </div>

            <Plus size={20} />
          </div>

          <div className="coachdash-actions-grid">
            <ActionCard
              tone="green"
              icon={<CalendarCheck size={22} />}
              title="Attendance"
              text="Mark session attendance, view dates, and manage training records."
              button="Open Attendance"
              onClick={() => navigate("/attendance")}
            />

            <ActionCard
              tone="blue"
              icon={<CreditCard size={22} />}
              title="Payments"
              text="Update monthly fees, deductions, paid status, and parent records."
              button="Open Payments"
              onClick={() => navigate("/payments")}
            />

            <ActionCard
              tone="gold"
              icon={<Wallet size={22} />}
              title="Accounts"
              text="Track revenue, expenses, travel logs, profit, and monthly summaries."
              button="Open Accounts"
              onClick={() => navigate("/accounts")}
            />

            <ActionCard
              tone="pink"
              icon={<ClipboardList size={22} />}
              title="Coach Profile"
              text="View academy identity, coach information, and profile area."
              button="Open Profile"
              onClick={() => navigate("/coach/profile")}
            />
          </div>
        </div>

        <div className="coachdash-panel coachdash-panel--insights">
          <div className="coachdash-panel__head">
            <div>
              <span>Academy Pulse</span>
              <h2>Today’s Focus</h2>
            </div>

            <BarChart3 size={20} />
          </div>

          <div className="coachdash-insights-list">
            <SmallInsight
              icon={<CalendarCheck size={18} />}
              title="Next Coaching Priority"
              text="Keep technical basics, movement, and confidence games balanced for the under-11 group."
            />

            <SmallInsight
              icon={<TrendingUp size={18} />}
              title="Development Watch"
              text={`${beginnerCount || "Several"} players may need close technical foundation tracking.`}
            />

            <SmallInsight
              icon={<Bell size={18} />}
              title="Parent Communication"
              text="Use Parent Center for private advice, payment updates, and progress guidance."
            />

            <SmallInsight
              icon={<Award size={18} />}
              title="Motivation System"
              text="Badges and mini challenges can help kids feel proud of improvement."
            />
          </div>
        </div>
      </section>

      <section className="coachdash-player-workspace">
        <div className="coachdash-player-head">
          <div>
            <span>Player Management</span>
            <h2>Academy Players</h2>
            <p>
              Search, review, and open player profiles. Girls and boys are kept
              clearly separated for easier coaching management.
            </p>
          </div>

          <div className="coachdash-search">
            <Search size={18} />
            <input
              id="playerSearch"
              type="text"
              placeholder="Search players..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        {error && (
          <div className="coachdash-error">
            ⚠️ Could not load player data. Check your Firebase config. ({error})
          </div>
        )}

        <div className="coachdash-group">
          <div className="coachdash-group__head">
            <div>
              <span>Girls Group</span>
              <strong>{filteredGirls.length} Players</strong>
            </div>
          </div>

          <div className="coachdash-cards-grid">
            {filteredGirls.length > 0 ? (
              filteredGirls.map(function (player) {
                return (
                  <PlayerCard
                    key={player.id}
                    player={player}
                    loading={loading}
                  />
                );
              })
            ) : (
              <div className="coachdash-empty">No girls match your search.</div>
            )}
          </div>
        </div>

        <div className="coachdash-group">
          <div className="coachdash-group__head">
            <div>
              <span>Boys Group</span>
              <strong>{filteredBoys.length} Players</strong>
            </div>
          </div>

          <div className="coachdash-cards-grid">
            {filteredBoys.length > 0 ? (
              filteredBoys.map(function (player) {
                return (
                  <PlayerCard
                    key={player.id}
                    player={player}
                    loading={loading}
                  />
                );
              })
            ) : (
              <div className="coachdash-empty">No boys match your search.</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}