export default function MountainScene({ className = "" }) {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a2a1e" />
          <stop offset="35%" stopColor="#8a4a2c" />
          <stop offset="60%" stopColor="#e8823c" />
          <stop offset="100%" stopColor="#f5a05c" />
        </linearGradient>
        <linearGradient id="far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7a4a34" />
          <stop offset="100%" stopColor="#4a2f24" />
        </linearGradient>
        <linearGradient id="mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a2620" />
          <stop offset="100%" stopColor="#241914" />
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#sky)" />
      <circle cx="1180" cy="330" r="120" fill="#f5d0a0" opacity="0.85" />
      <polygon
        points="0,620 220,340 420,560 620,300 900,600 1150,380 1400,560 1600,460 1600,900 0,900"
        fill="url(#far)"
        opacity="0.9"
      />
      <polygon
        points="0,780 260,520 520,720 780,460 1050,740 1320,540 1600,700 1600,900 0,900"
        fill="url(#mid)"
      />
      <polygon points="770,470 800,415 830,470" fill="#0f0b09" opacity="0.9" />
      <g stroke="#0f0b09" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.95">
        <circle cx="799" cy="398" r="4" fill="#0f0b09" stroke="none" />
        <path d="M799 402 v10" />
        <path d="M799 405 l-7 -8 M799 405 l7 -8" />
        <path d="M799 412 l-6 8 M799 412 l6 8" />
      </g>
    </svg>
  );
}
