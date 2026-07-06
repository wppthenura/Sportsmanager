import { useState } from "react";
import { Search } from "lucide-react";
import "./Home.css";
import PlayerCard   from "../components/PlayerCard";
import { usePlayers } from "../hooks/usePlayers";
import { useNavigate } from "react-router-dom";

// ── Skeleton placeholder players shown while Firestore loads ──
const GIRL_SKELETONS = [
  { id: "sk-g1", name: "Dinuthi", gender: "girl" },
  { id: "sk-g2", name: "Lithumi", gender: "girl" },
  { id: "sk-g3", name: "Ganushi", gender: "girl" },
  { id: "sk-g4", name: "Gimashi", gender: "girl" },
];
const BOY_SKELETONS = [
  { id: "sk-b1", name: "Niveth",  gender: "boy" },
  { id: "sk-b2", name: "Chathum", gender: "boy" },
  { id: "sk-b3", name: "Ometh",   gender: "boy" },
  { id: "sk-b4", name: "Methuja", gender: "boy" },
];

export default function Home() {
  const { girls, boys, loading, error } = usePlayers();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Determine which list to render (skeleton or real)
  const displayGirls = girls;
const displayBoys  = boys;

  // Client-side search filter
  const filterList = (list) =>
    list.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );

  const filteredGirls = filterList(displayGirls);
  const filteredBoys  = filterList(displayBoys);

  return (
    <div className="home">
      {/* ── Title (hardcoded) ── */}
      <h1 className="home__title">
  <span className="home__title-ptba">PT Badminton Academy</span>
  Lets be a Professional Badminton Player
</h1>
      {/* ── Top bar (hardcoded) ── */}
      <div className="home__topbar">
        <button className="coach-btn" onClick={() => navigate("/coach")}>
  Coach Portal
</button>
<button className="attendance-btn" onClick={() => navigate("/attendance")}>
  Attendance
</button>
        <div className="coach-box">
          <span className="coach-box__name">Coach : Pulindu Thenura</span>
          <span className="coach-box__sub">( Sri Lanka Badminton )</span>
        </div>

        <div className="search-box">
          <label className="search-box__label" htmlFor="playerSearch">
            Search :
          </label>
          <input
            id="playerSearch"
            className="search-box__input"
            type="text"
            placeholder="Search players..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Search size={18} color="#aaa" />
        </div>
      </div>

      {/* ── Error state ── */}
      {error && (
        <p className="home__error">
          ⚠️ Could not load player data. Check your Firebase config. ({error})
        </p>
      )}

      {/* ── Girls Row ── */}
      <div className="section-row girls">
        <div className="cards-grid">
          {filteredGirls.map((player) => (
            <PlayerCard key={player.id} player={player} loading={loading} />
          ))}
        </div>
      </div>

      {/* ── Boys Row ── */}
      <div className="section-row boys">
        <div className="cards-grid">
          {filteredBoys.map((player) => (
            <PlayerCard key={player.id} player={player} loading={loading} />
          ))}
        </div>
      </div>
    </div>
  );
}
