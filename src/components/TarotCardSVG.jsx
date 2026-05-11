// Ilustraciones SVG detalladas para cada arcano del Tarot Rider-Waite
// Inspiradas fielmente en los símbolos originales de la baraja

const PALO_COLORS = {
  mayor: '#c9a84c',
  Copas: '#e8a4b0',
  Oros: '#c9a84c',
  Espadas: '#a0b4d0',
  Bastos: '#c4a882',
}

// Ilustraciones SVG por índice de carta
const ILUSTRACIONES = {
  // ═══ ARCANOS MAYORES ═══

  0: ( // El Loco
    <g>
      <circle cx="36" cy="18" r="11" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.7"/>
      <circle cx="36" cy="18" r="7" fill="rgba(255,255,255,0.06)"/>
      {[0,45,90,135,180,225,270,315].map((a,i) => (
        <line key={i} x1={36+11*Math.cos(a*Math.PI/180)} y1={18+11*Math.sin(a*Math.PI/180)}
          x2={36+14*Math.cos(a*Math.PI/180)} y2={18+14*Math.sin(a*Math.PI/180)}
          stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      ))}
      <circle cx="36" cy="46" r="6" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.8"/>
      <line x1="36" y1="52" x2="36" y2="66" stroke="currentColor" strokeWidth="0.8"/>
      <line x1="27" y1="58" x2="45" y2="58" stroke="currentColor" strokeWidth="0.7"/>
      <line x1="36" y1="66" x2="30" y2="76" stroke="currentColor" strokeWidth="0.7"/>
      <line x1="36" y1="66" x2="42" y2="76" stroke="currentColor" strokeWidth="0.7"/>
      <line x1="43" y1="55" x2="54" y2="44" stroke="currentColor" strokeWidth="0.8"/>
      <circle cx="54" cy="42" r="4" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <path d="M 14 72 Q 20 68 22 74 Q 18 78 14 72" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <circle cx="13" cy="66" r="3" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
      <path d="M 22 68 L 24 60" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    </g>
  ),

  1: ( // El Mago
    <g>
      <path d="M 18 16 Q 36 10 54 16" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.7"/>
      <path d="M 36 10 L 36 6" stroke="currentColor" strokeWidth="0.8"/>
      <circle cx="36" cy="5" r="3" fill="none" stroke="currentColor" strokeWidth="0.7"/>
      <circle cx="36" cy="32" r="8" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.7"/>
      <line x1="36" y1="24" x2="36" y2="20" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M 28 38 Q 30 50 28 62" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.7"/>
      <path d="M 44 38 Q 42 50 44 62" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.7"/>
      <line x1="28" y1="50" x2="44" y2="50" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <rect x="16" y="68" width="8" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <circle cx="28" cy="70" r="3" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 36 66 L 32 72 L 36 70 L 40 72 Z" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 46 66 Q 48 70 44 74" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 20 38 Q 14 42 16 50 Q 22 48 24 42" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <path d="M 52 38 Q 58 42 56 50 Q 50 48 48 42" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    </g>
  ),

  2: ( // La Sacerdotisa
    <g>
      <rect x="24" y="14" width="5" height="20" rx="1" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <rect x="43" y="14" width="5" height="20" rx="1" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <text x="27" y="26" textAnchor="middle" fontSize="7" fill="currentColor" opacity="0.6">B</text>
      <text x="45" y="26" textAnchor="middle" fontSize="7" fill="currentColor" opacity="0.6">J</text>
      <circle cx="36" cy="30" r="10" fill="rgba(255,255,255,0.04)" stroke="currentColor" strokeWidth="0.7"/>
      <circle cx="36" cy="30" r="5" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
      <path d="M 28 36 Q 32 48 30 62" fill="none" stroke="currentColor" strokeWidth="0.7"/>
      <path d="M 44 36 Q 40 48 42 62" fill="none" stroke="currentColor" strokeWidth="0.7"/>
      <line x1="28" y1="62" x2="42" y2="62" stroke="currentColor" strokeWidth="0.6"/>
      <path d="M 26 48 Q 36 56 46 48" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" strokeDasharray="2 2"/>
      <path d="M 32 16 Q 36 10 40 16" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <circle cx="36" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <path d="M 22 70 Q 36 78 50 70" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    </g>
  ),

  3: ( // La Emperatriz
    <g>
      <path d="M 24 16 L 28 10 L 36 14 L 44 10 L 48 16 L 44 20 L 36 18 L 28 20 Z" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.7"/>
      <circle cx="36" cy="32" r="9" fill="rgba(255,255,255,0.05)" stroke="currentColor" strokeWidth="0.7"/>
      <circle cx="36" cy="32" r="5" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
      <path d="M 24 42 Q 22 56 24 72" fill="none" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M 48 42 Q 50 56 48 72" fill="none" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M 24 42 Q 36 50 48 42" fill="rgba(255,255,255,0.05)" stroke="currentColor" strokeWidth="0.7"/>
      <path d="M 24 72 Q 36 80 48 72" fill="none" stroke="currentColor" strokeWidth="0.6"/>
      <path d="M 16 55 Q 12 52 14 46 Q 18 48 18 54" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <path d="M 56 55 Q 60 52 58 46 Q 54 48 54 54" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <path d="M 14 60 Q 10 58 12 52 Q 16 54 16 60" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <path d="M 58 60 Q 62 58 60 52 Q 56 54 56 60" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <path d="M 30 56 Q 36 60 42 56" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
      <circle cx="36" cy="64" r="4" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    </g>
  ),

  4: ( // El Emperador
    <g>
      <path d="M 22 12 L 26 8 L 36 12 L 46 8 L 50 12 L 44 16 L 36 14 L 28 16 Z" fill="rgba(255,255,255,0.05)" stroke="currentColor" strokeWidth="0.7"/>
      <circle cx="36" cy="30" r="8" fill="none" stroke="currentColor" strokeWidth="0.8"/>
      <rect x="24" y="38" width="24" height="28" rx="2" fill="rgba(255,255,255,0.04)" stroke="currentColor" strokeWidth="0.7"/>
      <line x1="24" y1="66" x2="48" y2="66" stroke="currentColor" strokeWidth="0.6"/>
      <rect x="14" y="56" width="10" height="14" rx="1" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <rect x="48" y="56" width="10" height="14" rx="1" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 46 42 L 54 34" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
      <path d="M 54 30 L 58 26 L 56 34 L 52 32 Z" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <path d="M 28 52 L 32 48 L 36 50 L 40 48 L 44 52" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
      <path d="M 28 58 Q 36 62 44 58" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <line x1="20" y1="70" x2="20" y2="78" stroke="currentColor" strokeWidth="0.6" opacity="0.4"/>
      <line x1="52" y1="70" x2="52" y2="78" stroke="currentColor" strokeWidth="0.6" opacity="0.4"/>
    </g>
  ),

  5: ( // El Hierofante
    <g>
      <path d="M 28 8 L 28 4 L 36 8 L 44 4 L 44 8" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <rect x="22" y="12" width="28" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.7"/>
      <circle cx="36" cy="28" r="8" fill="none" stroke="currentColor" strokeWidth="0.7"/>
      <path d="M 36 20 L 36 15" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M 32 20 L 36 15 L 40 20" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <rect x="26" y="12" width="4" height="22" rx="1" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <rect x="42" y="12" width="4" height="22" rx="1" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 28 36 Q 26 50 28 64" fill="none" stroke="currentColor" strokeWidth="0.7"/>
      <path d="M 44 36 Q 46 50 44 64" fill="none" stroke="currentColor" strokeWidth="0.7"/>
      <path d="M 28 64 Q 36 70 44 64" fill="none" stroke="currentColor" strokeWidth="0.6"/>
      <rect x="18" y="56" width="12" height="16" rx="1" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <rect x="42" y="56" width="12" height="16" rx="1" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <line x1="30" y1="72" x2="30" y2="80" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <line x1="42" y1="72" x2="42" y2="80" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    </g>
  ),

  6: ( // Los Amantes
    <g>
      <circle cx="36" cy="12" r="7" fill="rgba(255,255,255,0.06)" stroke="currentColor" strokeWidth="0.7" opacity="0.7"/>
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((a,i) => (
        <line key={i} x1={36+7*Math.cos(a*Math.PI/180)} y1={12+7*Math.sin(a*Math.PI/180)}
          x2={36+10*Math.cos(a*Math.PI/180)} y2={12+10*Math.sin(a*Math.PI/180)}
          stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      ))}
      <circle cx="22" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="0.7"/>
      <line x1="22" y1="48" x2="22" y2="62" stroke="currentColor" strokeWidth="0.7"/>
      <line x1="16" y1="54" x2="28" y2="54" stroke="currentColor" strokeWidth="0.6"/>
      <circle cx="50" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="0.7"/>
      <line x1="50" y1="48" x2="50" y2="62" stroke="currentColor" strokeWidth="0.7"/>
      <line x1="44" y1="54" x2="56" y2="54" stroke="currentColor" strokeWidth="0.6"/>
      <path d="M 29 36 Q 36 28 43 36" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 14 68 Q 22 72 22 78" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <path d="M 16 66 Q 20 64 22 68" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <path d="M 58 68 Q 50 72 50 78" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <path d="M 48 64 Q 52 62 56 66" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <path d="M 28 20 Q 36 24 44 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" strokeDasharray="2 2"/>
    </g>
  ),

  7: ( // El Carro
    <g>
      <rect x="18" y="28" width="36" height="26" rx="2" fill="rgba(255,255,255,0.04)" stroke="currentColor" strokeWidth="0.8"/>
      <line x1="18" y1="36" x2="54" y2="36" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <circle cx="36" cy="22" r="7" fill="none" stroke="currentColor" strokeWidth="0.7"/>
      <path d="M 22 28 L 22 22 L 50 22 L 50 28" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <path d="M 28 22 L 28 16" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
      <path d="M 44 22 L 44 16" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
      <path d="M 24 16 L 48 16" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <path d="M 28 16 Q 36 8 44 16" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <ellipse cx="26" cy="58" rx="8" ry="5" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.7"/>
      <ellipse cx="46" cy="58" rx="8" ry="5" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.7"/>
      <path d="M 22 54 Q 20 60 18 66" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <path d="M 50 54 Q 52 60 54 66" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <circle cx="26" cy="40" r="5" fill="rgba(255,255,255,0.05)" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <circle cx="46" cy="40" r="5" fill="rgba(255,255,255,0.05)" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
    </g>
  ),

  8: ( // La Fuerza
    <g>
      <path d="M 24 12 Q 36 6 48 12" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <circle cx="36" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="0.7"/>
      <path d="M 36 15 L 36 10" stroke="currentColor" strokeWidth="0.7"/>
      <path d="M 32 10 Q 36 6 40 10" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <path d="M 18 50 Q 14 38 20 30 Q 28 24 36 26 Q 44 24 52 30 Q 58 38 54 50" fill="rgba(255,255,255,0.04)" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M 22 46 Q 26 38 36 40 Q 46 38 50 46" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <path d="M 30 26 Q 28 30 26 28" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 42 26 Q 44 30 46 28" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 22 50 Q 18 58 20 68" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <path d="M 50 50 Q 54 58 52 68" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <path d="M 20 68 Q 28 74 36 72 Q 44 74 52 68" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 28 32 Q 26 36 28 40 Q 32 36 36 38 Q 40 36 44 40 Q 46 36 44 32" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    </g>
  ),

  9: ( // El Ermitaño
    <g>
      <path d="M 28 14 Q 30 8 36 10 Q 40 8 42 14" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <circle cx="36" cy="24" r="8" fill="none" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M 28 32 Q 24 44 22 58" fill="none" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M 44 32 Q 48 44 50 58" fill="none" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M 22 58 Q 36 66 50 58" fill="none" stroke="currentColor" strokeWidth="0.7"/>
      <path d="M 44 36 L 56 30" stroke="currentColor" strokeWidth="0.8" opacity="0.7"/>
      <path d="M 54 26 L 60 20 L 58 30 L 52 28 Z" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.7"/>
      <circle cx="56" cy="22" r="4" fill="rgba(255,255,255,0.1)" stroke="currentColor" strokeWidth="0.6" opacity="0.8"/>
      {[0,60,120,180,240,300].map((a,i) => (
        <line key={i} x1={56+4*Math.cos(a*Math.PI/180)} y1={22+4*Math.sin(a*Math.PI/180)}
          x2={56+6*Math.cos(a*Math.PI/180)} y2={22+6*Math.sin(a*Math.PI/180)}
          stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
      ))}
      <path d="M 24 46 Q 20 50 22 54" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <path d="M 30 66 Q 36 70 42 66" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    </g>
  ),

  10: ( // La Rueda de la Fortuna
    <g>
      <circle cx="36" cy="40" r="22" fill="none" stroke="currentColor" strokeWidth="0.8"/>
      <circle cx="36" cy="40" r="14" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <circle cx="36" cy="40" r="5" fill="rgba(255,255,255,0.06)" stroke="currentColor" strokeWidth="0.6"/>
      {[0,45,90,135,180,225,270,315].map((a,i) => (
        <line key={i} x1={36+5*Math.cos(a*Math.PI/180)} y1={40+5*Math.sin(a*Math.PI/180)}
          x2={36+14*Math.cos(a*Math.PI/180)} y2={40+14*Math.sin(a*Math.PI/180)}
          stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
      ))}
      <text x="29" y="25" fontSize="7" fill="currentColor" opacity="0.5">T</text>
      <text x="21" y="42" fontSize="7" fill="currentColor" opacity="0.5">A</text>
      <text x="29" y="58" fontSize="7" fill="currentColor" opacity="0.5">R</text>
      <text x="44" y="42" fontSize="7" fill="currentColor" opacity="0.5">O</text>
      <path d="M 52 20 Q 60 36 52 52" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 20 20 Q 12 36 20 52" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 50 18 Q 54 14 56 18" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <path d="M 16 54 Q 14 60 18 62" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    </g>
  ),

  11: ( // La Justicia
    <g>
      <rect x="24" y="56" width="24" height="4" rx="1" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <line x1="36" y1="56" x2="36" y2="28" stroke="currentColor" strokeWidth="0.8"/>
      <line x1="20" y1="36" x2="52" y2="36" stroke="currentColor" strokeWidth="0.7" opacity="0.7"/>
      <path d="M 20 36 L 14 44 L 26 44 Z" fill="rgba(255,255,255,0.05)" stroke="currentColor" strokeWidth="0.6"/>
      <path d="M 52 36 L 46 44 L 58 44 Z" fill="rgba(255,255,255,0.05)" stroke="currentColor" strokeWidth="0.6"/>
      <circle cx="36" cy="22" r="7" fill="none" stroke="currentColor" strokeWidth="0.7"/>
      <path d="M 30 14 L 36 10 L 42 14" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <line x1="44" y1="24" x2="54" y2="16" stroke="currentColor" strokeWidth="0.8" opacity="0.7"/>
      <path d="M 54 12 L 58 8 L 56 16 L 52 14 Z" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.7"/>
      <rect x="26" y="60" width="20" height="16" rx="1" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <line x1="26" y1="70" x2="46" y2="70" stroke="currentColor" strokeWidth="0.4" opacity="0.3"/>
    </g>
  ),

  12: ( // El Colgado
    <g>
      <line x1="20" y1="16" x2="52" y2="16" stroke="currentColor" strokeWidth="0.8"/>
      <line x1="20" y1="10" x2="20" y2="30" stroke="currentColor" strokeWidth="0.8"/>
      <line x1="52" y1="10" x2="52" y2="30" stroke="currentColor" strokeWidth="0.8"/>
      <line x1="36" y1="16" x2="36" y2="26" stroke="currentColor" strokeWidth="0.7"/>
      <circle cx="36" cy="34" r="7" fill="none" stroke="currentColor" strokeWidth="0.8"/>
      {[0,45,90,135,180,225,270,315].map((a,i) => (
        <line key={i} x1={36+7*Math.cos(a*Math.PI/180)} y1={34+7*Math.sin(a*Math.PI/180)}
          x2={36+10*Math.cos(a*Math.PI/180)} y2={34+10*Math.sin(a*Math.PI/180)}
          stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      ))}
      <path d="M 28 42 Q 22 52 24 62" fill="none" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M 44 42 Q 50 52 48 62" fill="none" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M 24 62 Q 36 68 48 62" fill="none" stroke="currentColor" strokeWidth="0.7"/>
      <path d="M 44 44 Q 50 48 54 44" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 28 44 Q 22 48 18 44" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
    </g>
  ),

  13: ( // La Muerte
    <g>
      <path d="M 20 50 Q 22 34 36 28 Q 50 34 52 50 Q 50 64 36 70 Q 22 64 20 50" fill="rgba(255,255,255,0.04)" stroke="currentColor" strokeWidth="0.8"/>
      <circle cx="36" cy="28" r="6" fill="none" stroke="currentColor" strokeWidth="0.7"/>
      <line x1="28" y1="32" x2="24" y2="38" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <line x1="44" y1="32" x2="48" y2="38" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 28 48 L 22 54 L 28 60" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <path d="M 44 48 L 50 54 L 44 60" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <path d="M 28 48 Q 36 44 44 48" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <path d="M 28 60 Q 36 64 44 60" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <path d="M 30 62 Q 28 72 32 76 Q 36 78 40 76 Q 44 72 42 62" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 22 70 Q 16 68 14 62 Q 20 60 22 66" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <path d="M 50 70 Q 56 68 58 62 Q 52 60 50 66" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    </g>
  ),

  14: ( // La Templanza
    <g>
      <circle cx="36" cy="24" r="10" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.7"/>
      {[0,45,90,135,180,225,270,315].map((a,i) => (
        <line key={i} x1={36+10*Math.cos(a*Math.PI/180)} y1={24+10*Math.sin(a*Math.PI/180)}
          x2={36+13*Math.cos(a*Math.PI/180)} y2={24+13*Math.sin(a*Math.PI/180)}
          stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      ))}
      <path d="M 24 40 L 22 60 L 36 54 L 50 60 L 48 40" fill="rgba(255,255,255,0.04)" stroke="currentColor" strokeWidth="0.7"/>
      <path d="M 22 52 Q 36 58 50 52" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
      <path d="M 26 44 L 46 44" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <path d="M 24 60 Q 30 72 36 74" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 48 60 Q 42 72 36 74" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 26 36 Q 22 30 26 26" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 46 36 Q 50 30 46 26" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 30 36 Q 36 32 42 36" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" strokeDasharray="2 2"/>
    </g>
  ),

  15: ( // El Diablo
    <g>
      <path d="M 24 14 L 20 8 L 28 14 L 36 8 L 44 14 L 52 8 L 48 14" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <circle cx="36" cy="26" r="9" fill="rgba(255,255,255,0.04)" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M 30 22 L 28 26 L 32 24 L 36 28 L 40 24 L 44 26 L 42 22" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <rect x="30" y="36" width="12" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 24 44 L 18 56 L 26 52" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <path d="M 48 44 L 54 56 L 46 52" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <ellipse cx="22" cy="62" rx="8" ry="5" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <circle cx="22" cy="56" r="5" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <ellipse cx="50" cy="62" rx="8" ry="5" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <circle cx="50" cy="56" r="5" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <path d="M 28 64 Q 22 72 28 76" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <path d="M 44 64 Q 50 72 44 76" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    </g>
  ),

  16: ( // La Torre
    <g>
      <rect x="24" y="22" width="24" height="40" rx="1" fill="rgba(255,255,255,0.04)" stroke="currentColor" strokeWidth="0.8"/>
      <rect x="22" y="16" width="28" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="0.7"/>
      <path d="M 30 14 L 36 8 L 42 14" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.7"/>
      <circle cx="36" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.7"/>
      <path d="M 36 8 L 28 6" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 36 8 L 44 6" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <line x1="30" y1="36" x2="42" y2="36" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <rect x="32" y="48" width="8" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <circle cx="22" cy="28" r="3" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
      <circle cx="50" cy="28" r="3" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
      <path d="M 16 32 L 10 44" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <circle cx="16" cy="30" r="2" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
      <path d="M 56 32 L 62 44" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <circle cx="56" cy="30" r="2" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
      <path d="M 12 56 L 8 66" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 60 56 L 64 66" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
    </g>
  ),

  17: ( // La Estrella
    <g>
      {[0,51,103,154,206,257,309].map((a,i) => (
        <g key={i}>
          <line x1={36+18*Math.cos((a-90)*Math.PI/180)} y1={26+18*Math.sin((a-90)*Math.PI/180)}
            x2={36+22*Math.cos((a-90)*Math.PI/180)} y2={26+22*Math.sin((a-90)*Math.PI/180)}
            stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
          <circle cx={36+20*Math.cos((a-90)*Math.PI/180)} cy={26+20*Math.sin((a-90)*Math.PI/180)} r="1.5"
            fill="currentColor" opacity="0.3"/>
        </g>
      ))}
      <circle cx="36" cy="26" r="8" fill="rgba(255,255,255,0.08)" stroke="currentColor" strokeWidth="0.8"/>
      {[0,60,120,180,240,300].map((a,i) => (
        <line key={i} x1={36+8*Math.cos(a*Math.PI/180)} y1={26+8*Math.sin(a*Math.PI/180)}
          x2={36+12*Math.cos(a*Math.PI/180)} y2={26+12*Math.sin(a*Math.PI/180)}
          stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      ))}
      <circle cx="36" cy="52" r="8" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <path d="M 28 52 Q 28 60 24 66" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 44 52 Q 44 60 48 66" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <path d="M 20 68 Q 36 76 52 68" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.4"/>
      <path d="M 28 44 Q 24 40 26 36" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <path d="M 44 44 Q 48 40 46 36" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    </g>
  ),

  18: ( // La Luna
    <g>
      <circle cx="36" cy="16" r="12" fill="rgba(255,255,255,0.05)" stroke="currentColor" strokeWidth="0.8"/>
      <circle cx="42" cy="12" r="9" fill="#0f0e1a"/>
      <circle cx="42" cy="12" r="9" fill="rgba(0,0,0,0)" stroke="currentColor" strokeWidth="0.4" opacity="0.3"/>
      {[-90,-60,-120,-150].map((a,i) => (
        <line key={i} x1={36+12*Math.cos(a*Math.PI/180)} y1={16+12*Math.sin(a*Math.PI/180)}
          x2={36+15*Math.cos(a*Math.PI/180)} y2={16+15*Math.sin(a*Math.PI/180)}
          stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      ))}
      <ellipse cx="36" cy="72" rx="18" ry="5" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
      <path d="M 22 58 Q 30 50 36 46 Q 42 50 50 58" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.5"/>
      <rect x="12" y="44" width="8" height="16" rx="1" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <rect x="52" y="44" width="8" height="16" rx="1" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <ellipse cx="20" cy="64" rx="6" ry="4" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <circle cx="14" cy="59" r="3" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
      <ellipse cx="52" cy="64" rx="6" ry="4" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
      <circle cx="58" cy="59" r="3" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
      <ellipse cx="36" cy="70" rx="5" ry="3" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.4"/>
      <line x1="31" y1="68" x2="27" y2="64" stroke="currentColor" strokeWidth="0.4" opacity="0.4"/>
      <line x1="41" y1="68" x2="45" y2="64" stroke="currentColor" strokeWidth="0.4" opacity="0.4"/>
    </g>
  ),

  19: ( // El Sol
    <g>
      <circle cx="36" cy="28" r="14" fill="rgba(255,255,255,0.08)" stroke="currentColor" strokeWidth="0.9"/>
      <circle cx="36" cy="28" r="8" fill="rgba(255,255,255,0.05)"/>
      {[0,22.5,45,67.5,90,112.5,135,157.5,180,202.5,225,247.5,270,292.5,315,337.5].map((a,i) => (
        <line key={i} x1={36+14*Math.cos(a*Math.PI/180)} y1={28+14*Math.sin(a*Math.PI/180)}
          x2={36+(i%2===0?20:18)*Math.cos(a*Math.PI/180)} y2={28+(i%2===0?20:18)*Math.sin(a*Math.PI/180)}
          stroke="currentColor" strokeWidth={i%2===0?"0.7":"0.4"} opacity={i%2===0?"0.7":"0.4"}/>
      ))}
      <circle cx="36" cy="56" r="6" fill="none" stroke="currentColor" strokeWidth="0.7"/>
      <line x1="36" y1="62" x2="36" y2="74" stroke="currentColor" strokeWidth="0.7"/>
      <line x1="28" y1="67" x2="44" y2="67" stroke="currentColor" strokeWidth="0.6"/>
      <line x1="36" y1="74" x2="30" y2="82" stroke="currentColor" strokeWidth="0.6"/>
      <line x1="36" y1="74" x2="42" y2="82" stroke="currentColor" strokeWidth="0.6"/>
      <path d="M 18 46 Q 14 50 18 54" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" strokeDasharray="2 2"/>
      <path d="M 54 46 Q 58 50 54 54" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" strokeDasharray="2 2"/>
    </g>
  ),

  20: ( // El Juicio
    <g>
      <path d="M 20 22 Q 36 14 52 22" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <path d="M 34 14 L 38 6 L 42 14" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <rect x="32" y="14" width="8" height="12" rx="1" fill="rgba(255,255,255,0.06)" stroke="currentColor" strokeWidth="0.7"/>
      <circle cx="36" cy="10" r="4" fill="rgba(255,255,255,0.08)" stroke="currentColor" strokeWidth="0.6" opacity="0.7"/>
      <path d="M 20 22 L 16 36" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <path d="M 52 22 L 56 36" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <rect x="12" y="48" width="14" height="24" rx="1" fill="rgba(255,255,255,0.04)" stroke="currentColor" strokeWidth="0.6" opacity="0.7"/>
      <circle cx="19" cy="44" r="5" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.7"/>
      <path d="M 14 70 L 10 78" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <path d="M 24" y2="70" x2="28" y2="78" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <rect x="46" y="48" width="14" height="24" rx="1" fill="rgba(255,255,255,0.04)" stroke="currentColor" strokeWidth="0.6" opacity="0.7"/>
      <circle cx="53" cy="44" r="5" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.7"/>
      <rect x="29" y="54" width="14" height="20" rx="1" fill="rgba(255,255,255,0.04)" stroke="currentColor" strokeWidth="0.6" opacity="0.7"/>
      <circle cx="36" cy="50" r="5" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.7"/>
    </g>
  ),

  21: ( // El Mundo
    <g>
      <ellipse cx="36" cy="42" rx="20" ry="28" fill="none" stroke="currentColor" strokeWidth="0.8"/>
      <ellipse cx="36" cy="42" rx="14" ry="22" fill="rgba(255,255,255,0.04)" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
      <circle cx="36" cy="42" r="7" fill="none" stroke="currentColor" strokeWidth="0.7"/>
      <line x1="36" y1="35" x2="36" y2="14" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <line x1="36" y1="49" x2="36" y2="70" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <path d="M 32 38 L 28 42 L 32 46" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <path d="M 40 38 L 44 42 L 40 46" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
      <path d="M 16 20 Q 10 26 14 32" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
      <path d="M 56 20 Q 62 26 58 32" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
      <path d="M 16 60 Q 10 54 14 48" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
      <path d="M 56 60 Q 62 54 58 48" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
      <path d="M 24 14 Q 20 10 24 6 Q 28 10 26 14" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
      <path d="M 48 14 Q 52 10 48 6 Q 44 10 46 14" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
    </g>
  ),
}

// Ilustración genérica para arcanos menores según palo y número
function getIlustracionMenor(card) {
  const color = PALO_COLORS[card.palo] || '#c9a84c'
  const n = card.index

  if (card.palo === 'Copas') {
    const count = Math.min((card.index - 21), 10)
    return (
      <g>
        <path d="M 28 38 Q 26 28 22 20 Q 30 16 36 16 Q 42 16 50 20 Q 46 28 44 38 Z"
          fill="rgba(255,255,255,0.06)" stroke="currentColor" strokeWidth="0.8"/>
        <line x1="36" y1="38" x2="36" y2="50" stroke="currentColor" strokeWidth="0.8"/>
        <path d="M 26 50 Q 36 54 46 50" fill="rgba(255,255,255,0.04)" stroke="currentColor" strokeWidth="0.8"/>
        {count > 1 && <path d="M 16 52 Q 14 42 16 32 Q 22 28 24 36 Q 22 44 20 52 Z" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>}
        {count > 2 && <path d="M 56 52 Q 58 42 56 32 Q 50 28 48 36 Q 50 44 52 52 Z" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>}
        <path d="M 28 22 Q 36 18 44 22 Q 40 30 36 26 Q 32 30 28 22" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
        <path d="M 20 62 Q 36 68 52 62" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
        {count >= 5 && [0,1,2,3,4].map(i => (
          <circle key={i} cx={18+i*12} cy={72} r="2.5" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
        ))}
      </g>
    )
  }

  if (card.palo === 'Oros') {
    const count = Math.min((card.index - 35), 10)
    const rows = count <= 3 ? 1 : count <= 6 ? 2 : 3
    return (
      <g>
        {Array.from({length: Math.min(count, 9)}).map((_, i) => {
          const row = Math.floor(i / 3)
          const col = i % 3
          return (
            <g key={i}>
              <circle cx={22+col*14} cy={22+row*18} r="7" fill="rgba(255,255,255,0.05)" stroke="currentColor" strokeWidth="0.7"/>
              <circle cx={22+col*14} cy={22+row*18} r="4" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.4"/>
            </g>
          )
        })}
        {count === 1 && <circle cx="36" cy="40" r="14" fill="rgba(255,255,255,0.06)" stroke="currentColor" strokeWidth="0.9"/>}
        {count === 1 && <circle cx="36" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>}
        <path d="M 18 74 Q 36 80 54 74" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
      </g>
    )
  }

  if (card.palo === 'Espadas') {
    const count = Math.min((card.index - 49), 10)
    return (
      <g>
        {Array.from({length: Math.min(count, 5)}).map((_, i) => (
          <g key={i}>
            <line x1={20+i*10} y1="20" x2={20+i*10} y2="72" stroke="currentColor" strokeWidth="0.7" opacity="0.7"/>
            <path d={`M ${20+i*10} 20 L ${16+i*10} 28 L ${20+i*10} 26 L ${24+i*10} 28 Z`}
              fill="rgba(255,255,255,0.06)" stroke="currentColor" strokeWidth="0.5"/>
            <line x1={14+i*10} y1="58" x2={26+i*10} y2="58" stroke="currentColor" strokeWidth="0.7"/>
          </g>
        ))}
        {count > 5 && Array.from({length: count-5}).map((_, i) => (
          <line key={i} x1={22+i*10} y1="22" x2={22+i*10} y2="70" stroke="currentColor" strokeWidth="0.5" opacity="0.4" strokeDasharray="3 3"/>
        ))}
      </g>
    )
  }

  if (card.palo === 'Bastos') {
    const count = Math.min((card.index - 63), 10)
    return (
      <g>
        {Array.from({length: Math.min(count, 5)}).map((_, i) => (
          <g key={i}>
            <line x1={18+i*10} y1="18" x2={20+i*10} y2="74" stroke="currentColor" strokeWidth="0.9" opacity="0.7"/>
            <path d={`M ${15+i*10} 18 Q ${20+i*10} 12 ${25+i*10} 18`} fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
            <path d={`M ${15+i*10} 74 Q ${20+i*10} 80 ${25+i*10} 74`} fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
            <circle cx={19+i*10} cy={32} r="2" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.4"/>
            <circle cx={19+i*10} cy={56} r="2" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.4"/>
          </g>
        ))}
      </g>
    )
  }

  return <circle cx="36" cy="42" r="12" fill="none" stroke="currentColor" strokeWidth="0.7"/>
}

// Ilustración para figuras de la corte
function getIlustracionCorte(card) {
  const esPaje = card.nombre.includes('Paje')
  const esCaballero = card.nombre.includes('Caballero')
  const esReina = card.nombre.includes('Reina')
  const esRey = card.nombre.includes('Rey')

  return (
    <g>
      {(esRey || esReina) && (
        <path d={esRey
          ? "M 22 18 L 26 10 L 36 16 L 46 10 L 50 18 L 44 22 L 36 20 L 28 22 Z"
          : "M 24 20 L 28 14 L 36 18 L 44 14 L 48 20 L 42 24 L 36 22 L 30 24 Z"}
          fill="rgba(255,255,255,0.06)" stroke="currentColor" strokeWidth="0.7"/>
      )}
      {esPaje && <rect x="28" y="12" width="16" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>}
      {esCaballero && (
        <g>
          <ellipse cx="36" cy="54" rx="16" ry="10" fill="rgba(255,255,255,0.04)" stroke="currentColor" strokeWidth="0.7" opacity="0.7"/>
          <circle cx="22" cy="54" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
          <circle cx="50" cy="54" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
        </g>
      )}
      <circle cx="36" cy={esRey ? 32 : esCaballero ? 30 : 28} r="8" fill="none" stroke="currentColor" strokeWidth="0.8"/>
      {!esCaballero && (
        <>
          <path d={`M 28 ${esRey?40:36} Q 24 52 26 64`} fill="none" stroke="currentColor" strokeWidth="0.7"/>
          <path d={`M 44 ${esRey?40:36} Q 48 52 46 64`} fill="none" stroke="currentColor" strokeWidth="0.7"/>
          <path d={`M 26 64 Q 36 70 46 64`} fill="none" stroke="currentColor" strokeWidth="0.6"/>
          <path d={`M 28 ${esRey?40:36} Q 36 44 44 ${esRey?40:36}`} fill="rgba(255,255,255,0.04)" stroke="currentColor" strokeWidth="0.6"/>
        </>
      )}
      {esCaballero && (
        <>
          <line x1="36" y1="38" x2="36" y2="44" stroke="currentColor" strokeWidth="0.7"/>
          <path d="M 28 40 Q 22 44 24 50" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
          <path d="M 44 40 Q 50 44 48 50" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
        </>
      )}
      {(esRey || esReina) && (
        <path d="M 44 36 L 54 28" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
      )}
    </g>
  )
}

export default function TarotCardSVG({ card, size = 'md' }) {
  if (!card) return null

  const color = PALO_COLORS[card.arcano === 'mayor' ? 'mayor' : card.palo] || '#c9a84c'

  const sizes = {
    sm: { w: 40, h: 64 },
    md: { w: 120, h: 190 },
    lg: { w: 160, h: 256 },
  }
  const s = sizes[size] || sizes.md

  const scale = s.w / 72

  const ilustracion = card.arcano === 'mayor'
    ? ILUSTRACIONES[card.index]
    : (card.nombre.includes('Paje') || card.nombre.includes('Caballero') ||
       card.nombre.includes('Reina') || card.nombre.includes('Rey'))
      ? getIlustracionCorte(card)
      : getIlustracionMenor(card)

  return (
    <svg
      width={s.w}
      height={s.h}
      viewBox="0 0 72 114"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <defs>
        <clipPath id={`clip-${card.index}`}>
          <rect x="1" y="1" width="70" height="112" rx="5"/>
        </clipPath>
      </defs>

      {/* Fondo */}
      <rect x="0" y="0" width="72" height="114" rx="6"
        fill="#0f0e1a" stroke={color} strokeWidth="0.8"/>
      {/* Marco interior */}
      <rect x="4" y="4" width="64" height="106" rx="4"
        fill="none" stroke={color} strokeOpacity="0.25" strokeWidth="0.5"/>
      {/* Marco doble interior */}
      <rect x="7" y="7" width="58" height="100" rx="3"
        fill="none" stroke={color} strokeOpacity="0.12" strokeWidth="0.4"/>

      {/* Numeral arriba — solo para arcanos con numeral corto */}
      {!['Paje','Caballero','Reina','Rey','As'].includes(card.numeral) && (
        <text x="36" y="13" textAnchor="middle"
          fontSize="6" fontFamily="Georgia, serif"
          fill={color} opacity="0.9">
          {card.numeral}
        </text>
      )}
      {card.numeral === 'As' && (
        <text x="36" y="13" textAnchor="middle"
          fontSize="6" fontFamily="Georgia, serif"
          fill={color} opacity="0.9">
          As
        </text>
      )}

      {/* Ilustración — área central */}
      <g transform="translate(0, 14)" color={color} style={{ color }} clipPath={`url(#clip-${card.index})`}>
        <g style={{ stroke: color, fill: 'none' }}>
          {ilustracion}
        </g>
      </g>

      {/* Separador y texto — dentro del clip */}
      <g clipPath={`url(#clip-${card.index})`}>
        <line x1="12" y1="97" x2="60" y2="97"
          stroke={color} strokeWidth="0.3" opacity="0.3"/>
        <text x="36" y="104" textAnchor="middle"
          fontSize="5" fontFamily="Georgia, serif"
          fill={color} opacity="0.9" letterSpacing="0.3">
          {card.nombre.toUpperCase()}
        </text>
        {card.palo && (
          <text x="36" y="110" textAnchor="middle"
            fontSize="4.5" fontFamily="Georgia, serif"
            fill={color} opacity="0.4" letterSpacing="0.5">
            {card.palo.toUpperCase()}
          </text>
        )}
      </g>
    </svg>
  )
}

// Dorso de la carta — se muestra antes de revelar
export function TarotCardBack({ size = 'lg' }) {
  const sizes = {
    sm: { w: 40, h: 64 },
    md: { w: 120, h: 190 },
    lg: { w: 160, h: 256 },
  }
  const s = sizes[size] || sizes.lg

  return (
    <svg width={s.w} height={s.h} viewBox="0 0 72 114" xmlns="http://www.w3.org/2000/svg">
      {/* Fondo */}
      <rect x="0" y="0" width="72" height="114" rx="6" fill="#0d111a" stroke="#c9a84c" strokeWidth="0.8"/>
      {/* Marco doble */}
      <rect x="4" y="4" width="64" height="106" rx="4" fill="none" stroke="rgba(201,168,76,0.25)" strokeWidth="0.5"/>
      <rect x="7" y="7" width="58" height="100" rx="3" fill="none" stroke="rgba(201,168,76,0.12)" strokeWidth="0.4"/>

      {/* Patrón de fondo — rombos */}
      {Array.from({length: 7}).map((_, row) =>
        Array.from({length: 5}).map((_, col) => (
          <rect key={`${row}-${col}`}
            x={10 + col * 12} y={12 + row * 14}
            width="6" height="6"
            rx="0.5"
            transform={`rotate(45, ${13 + col * 12}, ${15 + row * 14})`}
            fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="0.4"/>
        ))
      )}

      {/* Luna creciente central */}
      <circle cx="36" cy="50" r="16" fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.3)" strokeWidth="0.6"/>
      <circle cx="41" cy="46" r="13" fill="#0d111a"/>
      <circle cx="41" cy="46" r="13" fill="none" stroke="rgba(201,168,76,0.1)" strokeWidth="0.3"/>

      {/* Estrellas alrededor */}
      {[
        [36, 26], [50, 34], [56, 50], [50, 66], [36, 74],
        [22, 66], [16, 50], [22, 34]
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.2" fill="rgba(201,168,76,0.4)"/>
      ))}

      {/* Líneas decorativas */}
      <line x1="36" y1="30" x2="36" y2="24" stroke="rgba(201,168,76,0.2)" strokeWidth="0.4"/>
      <line x1="36" y1="70" x2="36" y2="76" stroke="rgba(201,168,76,0.2)" strokeWidth="0.4"/>
      <line x1="20" y1="50" x2="14" y2="50" stroke="rgba(201,168,76,0.2)" strokeWidth="0.4"/>
      <line x1="52" y1="50" x2="58" y2="50" stroke="rgba(201,168,76,0.2)" strokeWidth="0.4"/>

      {/* Texto inferior */}
      <text x="36" y="107" textAnchor="middle"
        fontSize="5.5" fontFamily="Georgia, serif"
        fill="rgba(201,168,76,0.4)" letterSpacing="1.5">
        SOY LA LUNA
      </text>
    </svg>
  )
}
