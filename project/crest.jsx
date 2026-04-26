// Original typographic monogram — VC (Viking Chapter) inside a square frame
// with a gold rule. No shield, no laurels, no resemblance to existing logos.
const Crest = ({ size = 56, color = 'currentColor', accent = '#a5915f' }) => (
  <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-hidden="true">
    {/* Square frame */}
    <rect x="2" y="2" width="52" height="52" stroke={color} strokeWidth="2" fill="none" />
    {/* Inner gold rule */}
    <line x1="6" y1="42" x2="50" y2="42" stroke={accent} strokeWidth="1.2" />
    {/* VC monogram */}
    <text
      x="28"
      y="34"
      fontFamily="'Playfair Display', Georgia, serif"
      fontSize="24"
      fontWeight="700"
      textAnchor="middle"
      fill={color}
      letterSpacing="-1"
    >VC</text>
    {/* Tiny stars on the gold rule */}
    <circle cx="14" cy="48" r="1" fill={accent} />
    <circle cx="28" cy="48" r="1" fill={accent} />
    <circle cx="42" cy="48" r="1" fill={accent} />
  </svg>
);

window.Crest = Crest;
