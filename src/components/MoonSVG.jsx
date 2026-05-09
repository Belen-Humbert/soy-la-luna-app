/**
 * Componente que dibuja la luna según su fase
 * phase: 0 a 1 (0 = luna nueva, 0.5 = luna llena)
 */
export default function MoonSVG({ phase, size = 120 }) {
  const r = 38
  const cx = 50
  const cy = 50

  const isNew = phase < 0.03 || phase > 0.97
  const isFull = phase > 0.47 && phase < 0.53
  const isWaxing = phase <= 0.5

  // Fase normalizada para el dibujo (0 a 1 dentro de cada mitad)
  const normalizedPhase = isWaxing ? phase / 0.5 : (phase - 0.5) / 0.5

  // El terminador se mueve de derecha a izquierda (creciente) o izquierda a derecha (menguante)
  // rx del elipse del terminador: va de r a 0 a -r
  const termRx = r * Math.abs(Math.cos(Math.PI * normalizedPhase))
  const termRxStr = termRx.toFixed(2)

  // Para creciente: lado iluminado es derecha
  // Para menguante: lado iluminado es izquierda
  const lightOnRight = isWaxing

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glow exterior */}
        <radialGradient id={`moonGlow_${Math.round(phase * 100)}`} cx="50%" cy="50%">
          <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.2" />
          <stop offset="60%" stopColor="#c9a84c" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
        </radialGradient>

        {/* Superficie lunar iluminada */}
        <radialGradient id={`moonLight_${Math.round(phase * 100)}`} cx="40%" cy="35%">
          <stop offset="0%" stopColor="#f5e6c0" />
          <stop offset="50%" stopColor="#e8d08a" />
          <stop offset="100%" stopColor="#c9a84c" />
        </radialGradient>

        {/* Superficie lunar en sombra */}
        <radialGradient id={`moonDark_${Math.round(phase * 100)}`} cx="50%" cy="50%">
          <stop offset="0%" stopColor="#1e2535" />
          <stop offset="100%" stopColor="#0d1117" />
        </radialGradient>

        {/* Clip para que el terminador no salga del círculo */}
        <clipPath id={`moonClip_${Math.round(phase * 100)}`}>
          <circle cx={cx} cy={cy} r={r} />
        </clipPath>
      </defs>

      {/* Halo exterior */}
      <circle cx={cx} cy={cy} r={r + 10} fill={`url(#moonGlow_${Math.round(phase * 100)})`} />

      {isNew && (
        <>
          {/* Luna nueva: todo oscuro con borde sutil */}
          <circle cx={cx} cy={cy} r={r} fill={`url(#moonDark_${Math.round(phase * 100)})`} />
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5" />
          {/* Crateritos sutiles */}
          <circle cx="38" cy="42" r="3" fill="rgba(255,255,255,0.03)" />
          <circle cx="58" cy="35" r="2" fill="rgba(255,255,255,0.03)" />
          <circle cx="45" cy="58" r="2.5" fill="rgba(255,255,255,0.03)" />
        </>
      )}

      {isFull && (
        <>
          {/* Luna llena: completamente iluminada */}
          <circle cx={cx} cy={cy} r={r} fill={`url(#moonLight_${Math.round(phase * 100)})`} />
          {/* Mares lunares */}
          <ellipse cx="42" cy="40" rx="9" ry="7" fill="rgba(180,140,60,0.3)" />
          <ellipse cx="58" cy="52" rx="7" ry="5" fill="rgba(180,140,60,0.25)" />
          <ellipse cx="38" cy="58" rx="5" ry="4" fill="rgba(180,140,60,0.2)" />
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5" />
        </>
      )}

      {!isNew && !isFull && (
        <g clipPath={`url(#moonClip_${Math.round(phase * 100)})`}>
          {/* Fondo oscuro (toda la luna) */}
          <circle cx={cx} cy={cy} r={r} fill={`url(#moonDark_${Math.round(phase * 100)})`} />

          {/* Parte iluminada usando elipse */}
          {lightOnRight ? (
            // Creciente: iluminado a la derecha
            normalizedPhase <= 0.5 ? (
              // Primera mitad creciente: semicírculo derecho + elipse convexa
              <path
                d={`M ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx} ${cy + r} A ${termRxStr} ${r} 0 0 0 ${cx} ${cy - r} Z`}
                fill={`url(#moonLight_${Math.round(phase * 100)})`}
              />
            ) : (
              // Segunda mitad creciente: semicírculo derecho + elipse cóncava
              <path
                d={`M ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx} ${cy + r} A ${termRxStr} ${r} 0 0 1 ${cx} ${cy - r} Z`}
                fill={`url(#moonLight_${Math.round(phase * 100)})`}
              />
            )
          ) : (
            // Menguante: iluminado a la izquierda
            normalizedPhase <= 0.5 ? (
              <path
                d={`M ${cx} ${cy - r} A ${r} ${r} 0 0 0 ${cx} ${cy + r} A ${termRxStr} ${r} 0 0 1 ${cx} ${cy - r} Z`}
                fill={`url(#moonLight_${Math.round(phase * 100)})`}
              />
            ) : (
              <path
                d={`M ${cx} ${cy - r} A ${r} ${r} 0 0 0 ${cx} ${cy + r} A ${termRxStr} ${r} 0 0 0 ${cx} ${cy - r} Z`}
                fill={`url(#moonLight_${Math.round(phase * 100)})`}
              />
            )
          )}

          {/* Mares lunares sutiles en parte iluminada */}
          <ellipse cx="42" cy="40" rx="9" ry="7" fill="rgba(180,140,60,0.15)" />
          <ellipse cx="58" cy="52" rx="7" ry="5" fill="rgba(180,140,60,0.12)" />
        </g>
      )}

      {/* Borde exterior */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(201,168,76,0.25)" strokeWidth="0.5" />
    </svg>
  )
}
