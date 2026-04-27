const NHSLogo = ({ size = 56, color = 'currentColor', accent = '#a5915f' }) => (
  <svg width={size} height={size} viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Torch handle */}
    <rect x="24" y="44" width="8" height="22" rx="2" fill={color} />
    {/* Handle grip lines */}
    <line x1="24" y1="50" x2="32" y2="50" stroke={accent} strokeWidth="1" />
    <line x1="24" y1="54" x2="32" y2="54" stroke={accent} strokeWidth="1" />
    <line x1="24" y1="58" x2="32" y2="58" stroke={accent} strokeWidth="1" />
    {/* Torch cup */}
    <path d="M18 44 Q18 38 28 38 Q38 38 38 44 L34 44 Q34 41 28 41 Q22 41 22 44 Z" fill={color} />
    {/* Flame outer */}
    <path d="M28 4 C20 10 16 18 18 26 C20 32 24 36 28 38 C32 36 36 32 38 26 C40 18 36 10 28 4 Z" fill={accent} />
    {/* Flame inner highlight */}
    <path d="M28 12 C24 17 22 22 23 27 C24 31 26 34 28 36 C30 34 32 31 33 27 C34 22 32 17 28 12 Z" fill={color} opacity="0.6" />
    {/* Flame core */}
    <path d="M28 20 C26 23 25 26 26 29 C27 31 28 33 28 33 C28 33 29 31 30 29 C31 26 30 23 28 20 Z" fill={accent} opacity="0.9" />
  </svg>
);

export default NHSLogo;
