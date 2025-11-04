export function CyberStartLogo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-neon-glow"
    >
      {/* Outer geometric frame */}
      <defs>
        <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B23CFF" stopOpacity="1" />
          <stop offset="100%" stopColor="#00C8C8" stopOpacity="1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer diamond shape */}
      <path
        d="M 20 2 L 38 20 L 20 38 L 2 20 Z"
        stroke="url(#neonGradient)"
        strokeWidth="1.5"
        fill="none"
        filter="url(#glow)"
      />

      {/* Inner geometric shape - circle with angular elements */}
      <circle cx="20" cy="20" r="12" stroke="#00C8C8" strokeWidth="1" fill="none" filter="url(#glow)" />

      {/* Center accent - C for Cyber Start */}
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fontSize="18"
        fontWeight="bold"
        fill="#B23CFF"
        filter="url(#glow)"
        fontFamily="Arial, sans-serif"
        letterSpacing="0"
      >
        C
      </text>

      {/* Corner accents */}
      <circle cx="6" cy="6" r="1.5" fill="#B23CFF" filter="url(#glow)" />
      <circle cx="34" cy="6" r="1.5" fill="#00C8C8" filter="url(#glow)" />
      <circle cx="34" cy="34" r="1.5" fill="#B23CFF" filter="url(#glow)" />
      <circle cx="6" cy="34" r="1.5" fill="#00C8C8" filter="url(#glow)" />
    </svg>
  )
}
