// Cálculo de fase lunar basado en el ciclo sinódico real (29.53 días)

export const MOON_PHASES = [
  {
    name: 'Luna Nueva',
    emoji: '🌑',
    icon: 'new',
    range: [0, 0.025],
    description: 'Momento de intención y nuevos comienzos. El cielo oscuro invita a plantar semillas internas.',
    energy: 'Introspección · Nuevos comienzos · Intención',
    ritual: 'Ideal para escribir deseos, meditar en silencio y plantearte metas nuevas.',
    color: '#1a1a2e',
  },
  {
    name: 'Luna Creciente',
    emoji: '🌒',
    icon: 'waxing-crescent',
    range: [0.025, 0.25],
    description: 'La luz comienza a crecer. Es tiempo de tomar acción hacia lo que sembraste.',
    energy: 'Acción · Movimiento · Esperanza',
    ritual: 'Perfecto para iniciar proyectos, hacer listas de pasos concretos y avanzar.',
    color: '#2d1b69',
  },
  {
    name: 'Cuarto Creciente',
    emoji: '🌓',
    icon: 'first-quarter',
    range: [0.25, 0.275],
    description: 'Momento de decisión y compromiso. La tensión entre lo viejo y lo nuevo se hace sentir.',
    energy: 'Determinación · Decisión · Fuerza',
    ritual: 'Buen momento para superar obstáculos y reafirmar tu compromiso con tus metas.',
    color: '#3d2b8e',
  },
  {
    name: 'Luna Gibosa Creciente',
    emoji: '🌔',
    icon: 'waxing-gibbous',
    range: [0.275, 0.5],
    description: 'La energía se intensifica. Refiná y ajustá lo que estás construyendo.',
    energy: 'Refinamiento · Paciencia · Perfeccionamiento',
    ritual: 'Ideal para revisar, editar y mejorar proyectos en curso.',
    color: '#4a3aa0',
  },
  {
    name: 'Luna Llena',
    emoji: '🌕',
    icon: 'full',
    range: [0.5, 0.525],
    description: 'Máxima iluminación y energía. Todo se amplifica: emociones, intuición y manifestaciones.',
    energy: 'Culminación · Gratitud · Liberación',
    ritual: 'Momento poderoso para agradecer, soltar lo que no sirve y celebrar logros.',
    color: '#c9a84c',
  },
  {
    name: 'Luna Gibosa Menguante',
    emoji: '🌖',
    icon: 'waning-gibbous',
    range: [0.525, 0.75],
    description: 'Tiempo de compartir y transmitir. La energía comienza a volverse hacia adentro.',
    energy: 'Gratitud · Compartir · Reflexión',
    ritual: 'Ideal para agradecer, compartir con otros y comenzar a soltar.',
    color: '#8a7ab0',
  },
  {
    name: 'Cuarto Menguante',
    emoji: '🌗',
    icon: 'last-quarter',
    range: [0.75, 0.775],
    description: 'Momento de rendición y entrega. Soltá lo que ya cumplió su ciclo.',
    energy: 'Liberación · Perdón · Soltar',
    ritual: 'Perfecto para limpiezas energéticas, perdonar y dejar ir.',
    color: '#6b5b9a',
  },
  {
    name: 'Luna Menguante',
    emoji: '🌘',
    icon: 'waning-crescent',
    range: [0.775, 0.975],
    description: 'La luna se retira. Es tiempo de descanso, integración y preparación para el nuevo ciclo.',
    energy: 'Descanso · Integración · Preparación',
    ritual: 'Ideal para descansar, meditar profundo y prepararte para el próximo ciclo.',
    color: '#3d3560',
  },
  {
    name: 'Luna Nueva',
    emoji: '🌑',
    icon: 'new',
    range: [0.975, 1],
    description: 'Momento de intención y nuevos comienzos. El cielo oscuro invita a plantar semillas internas.',
    energy: 'Introspección · Nuevos comienzos · Intención',
    ritual: 'Ideal para escribir deseos, meditar en silencio y plantearte metas nuevas.',
    color: '#1a1a2e',
  },
]

/**
 * Calcula la fase lunar para una fecha dada
 * Retorna un objeto con toda la info de la fase
 */
export function getMoonPhase(date = new Date()) {
  // Luna nueva de referencia conocida: 6 de enero de 2000 a las 18:14 UTC
  const knownNewMoon = new Date('2000-01-06T18:14:00Z')
  const synodicMonth = 29.53058770576 // días

  const diffMs = date.getTime() - knownNewMoon.getTime()
  const diffDays = diffMs / (1000 * 60 * 60 * 24)

  // Fase como fracción de 0 a 1
  let phase = (diffDays % synodicMonth) / synodicMonth
  if (phase < 0) phase += 1

  // Día del ciclo lunar (0 a 29.5)
  const dayOfCycle = Math.round(phase * synodicMonth)

  // Encontrar la fase correspondiente
  const phaseInfo = MOON_PHASES.find(p => phase >= p.range[0] && phase < p.range[1])
    || MOON_PHASES[0]

  // Iluminación aproximada (0% a 100%)
  const illumination = phase <= 0.5
    ? Math.round(phase * 2 * 100)
    : Math.round((1 - phase) * 2 * 100)

  return {
    ...phaseInfo,
    phase,
    dayOfCycle,
    illumination,
  }
}

/**
 * SVG de la luna según su fase
 * phase: número de 0 a 1
 */
export function getMoonSvgPath(phase) {
  // Determina si está creciendo o menguando
  const isWaxing = phase < 0.5
  const adjustedPhase = isWaxing ? phase * 2 : (phase - 0.5) * 2

  // Radio de la luna
  const r = 40
  const cx = 50
  const cy = 50

  if (phase < 0.03 || phase > 0.97) {
    // Luna nueva: círculo oscuro
    return { type: 'new', path: null }
  }

  if (phase > 0.47 && phase < 0.53) {
    // Luna llena: círculo completo iluminado
    return { type: 'full', path: null }
  }

  // Calcular la elipse del terminador
  const termX = r * Math.cos(Math.PI * adjustedPhase)
  const sweep = isWaxing ? 1 : 0
  const termSweep = isWaxing ? (adjustedPhase < 0.5 ? 0 : 1) : (adjustedPhase < 0.5 ? 1 : 0)

  return {
    type: 'partial',
    isWaxing,
    adjustedPhase,
    r,
    cx,
    cy,
    termX: termX.toFixed(2),
    sweep,
    termSweep,
  }
}
