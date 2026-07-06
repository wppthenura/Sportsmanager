// Inline SVG avatar – Boy character
export default function BoyAvatar() {
  return (
    <svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg" width="88" height="100">
      {/* Hair */}
      <ellipse cx="50" cy="36" rx="23" ry="20" fill="#7b4a1e"/>
      <path d="M27,36 Q28,20 50,17 Q72,20 73,36 Q66,24 50,22 Q34,24 27,36Z" fill="#5c3510"/>
      {/* Neck */}
      <rect x="43" y="62" width="14" height="12" rx="5" fill="#f5c5a3"/>
      {/* Head */}
      <ellipse cx="50" cy="42" rx="22" ry="24" fill="#f5c5a3"/>
      {/* Ears */}
      <ellipse cx="28" cy="44" rx="4" ry="5" fill="#f5c5a3"/>
      <ellipse cx="72" cy="44" rx="4" ry="5" fill="#f5c5a3"/>
      {/* Eyes */}
      <circle cx="41" cy="42" r="3" fill="#fff"/>
      <circle cx="59" cy="42" r="3" fill="#fff"/>
      <circle cx="42" cy="42" r="1.8" fill="#3b2012"/>
      <circle cx="60" cy="42" r="1.8" fill="#3b2012"/>
      {/* Smile */}
      <path d="M44,53 Q50,59 56,53" stroke="#c0622a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Blush */}
      <ellipse cx="37" cy="50" rx="5" ry="3" fill="#fca5a5" opacity="0.45"/>
      <ellipse cx="63" cy="50" rx="5" ry="3" fill="#fca5a5" opacity="0.45"/>
      {/* Body / shirt */}
      <path d="M18,110 Q20,74 50,72 Q80,74 82,110Z" fill="#3b82f6"/>
      {/* Collar */}
      <path d="M43,72 L50,82 L57,72" fill="#fff" opacity="0.35"/>
    </svg>
  );
}
