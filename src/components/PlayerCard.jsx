import { useNavigate } from "react-router-dom";
import "./PlayerCard.css";
import GirlAvatar from "../assets/GirlAvatar";
import BoyAvatar  from "../assets/BoyAvatar";

export default function PlayerCard({ player, loading }) {
  const navigate = useNavigate();
  const isGirl   = player.gender === "girl";

  const handleClick = () => {
    if (!loading && player.id) navigate(`/player/${player.id}`);
  };

  return (
    <div
      className={`player-card ${isGirl ? "girl" : "boy"} ${!loading ? "clickable" : ""}`}
      onClick={handleClick}
      title={!loading ? `View ${player.name}'s profile` : ""}
    >
      <div className="player-card__name">
        {loading ? <span className="skeleton-text" /> : player.name}
      </div>

      <div className="player-card__body">
        <div className="player-card__avatar">
          {loading ? (
            <div className="avatar-skeleton" />
          ) : (player.photoURL || player.profilePhotoURL) ? (
            <img
              src={player.photoURL || player.profilePhotoURL}
              alt={player.name}
              className="player-photo"
              onError={(e) => { e.target.style.display = "none"; }}
            />
          ) : (
            isGirl ? <GirlAvatar /> : <BoyAvatar />
          )}
        </div>

        <div className="player-card__fields">
          <div className="field-row">
            <span className="field-label">ID :</span>
            <span className={`field-value ${loading ? "skeleton" : ""}`}>
              {!loading && (player.playerId ?? "—")}
            </span>
          </div>
          <div className="field-row">
            <span className="field-label">Age :</span>
            <span className={`field-value ${loading ? "skeleton" : ""}`}>
              {!loading && (player.age || "—")}
            </span>
          </div>
          <div className="field-row">
            <span className="field-label">School :</span>
            <span className={`field-value ${loading ? "skeleton" : ""}`}>
              {!loading && (player.school || "—")}
            </span>
          </div>
          <div className="field-row">
            <span className="field-label">Level :</span>
            <span className={`field-value ${loading ? "skeleton" : ""}`}>
              {!loading && (player.level || "—")}
            </span>
          </div>
        </div>
      </div>

      {!loading && <div className="card-arrow">→</div>}
    </div>
  );
}