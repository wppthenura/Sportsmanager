// Inline SVG avatar – Girl character
export default function GirlAvatar() {
  return (
    <svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg" width="88" height="100">
      {/* Hair back */}
      <ellipse cx="50" cy="38" rx="26" ry="28" fill="#c0622a"/>
      {/* Ponytail */}
      <path d="M72,52 Q85,60 80,80 Q75,88 68,82 Q74,68 68,55Z" fill="#c0622a"/>
      {/* Neck */}
      <rect x="43" y="62" width="14" height="12" rx="5" fill="#f5c5a3"/>
      {/* Head */}
      <ellipse cx="50" cy="42" rx="22" ry="24" fill="#f5c5a3"/>
      {/* Hair front */}
      <path d="M28,35 Q30,18 50,16 Q70,18 72,35 Q68,24 50,22 Q32,24 28,35Z" fill="#c0622a"/>
      {/* Hair clip */}
      <rect x="68" y="44" width="7" height="5" rx="2" fill="#a78bfa"/>
      {/* Eyes */}
      <circle cx="41" cy="42" r="3" fill="#fff"/>
      <circle cx="59" cy="42" r="3" fill="#fff"/>
      <circle cx="42" cy="42" r="1.8" fill="#3b2012"/>
      <circle cx="60" cy="42" r="1.8" fill="#3b2012"/>
      {/* Smile */}
      <path d="M44,53 Q50,58 56,53" stroke="#c0622a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Blush */}
      <ellipse cx="38" cy="50" rx="5" ry="3" fill="#f9a8d4" opacity="0.5"/>
      <ellipse cx="62" cy="50" rx="5" ry="3" fill="#f9a8d4" opacity="0.5"/>
      {/* Body / shirt */}
      <path d="M20,110 Q22,74 50,72 Q78,74 80,110Z" fill="#a78bfa"/>
      {/* Collar */}
      <path d="M44,72 L50,80 L56,72" fill="#fff" opacity="0.4"/>
    </svg>
  );
}
