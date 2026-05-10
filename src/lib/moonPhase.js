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

// ═══════════════════════════════════════════════════════
// DATOS CIENTÍFICOS ASTRONÓMICOS EN TIEMPO REAL
// ═══════════════════════════════════════════════════════

const SYNODIC_MONTH = 29.53058770576
const KNOWN_NEW_MOON = new Date('2000-01-06T18:14:00Z')

// Distancia media y variación de la Luna
const MOON_MEAN_DISTANCE = 384400 // km
const MOON_PERIGEE = 356500       // km (punto más cercano)
const MOON_APOGEE = 406700        // km (punto más lejano)

// Constelaciones zodiacales y sus rangos de longitud eclíptica
const CONSTELACIONES_ZODIACALES = [
  { nombre: 'Aries', emoji: '♈', inicio: 0 },
  { nombre: 'Tauro', emoji: '♉', inicio: 30 },
  { nombre: 'Géminis', emoji: '♊', inicio: 60 },
  { nombre: 'Cáncer', emoji: '♋', inicio: 90 },
  { nombre: 'Leo', emoji: '♌', inicio: 120 },
  { nombre: 'Virgo', emoji: '♍', inicio: 150 },
  { nombre: 'Libra', emoji: '♎', inicio: 180 },
  { nombre: 'Escorpio', emoji: '♏', inicio: 210 },
  { nombre: 'Sagitario', emoji: '♐', inicio: 240 },
  { nombre: 'Capricornio', emoji: '♑', inicio: 270 },
  { nombre: 'Acuario', emoji: '♒', inicio: 300 },
  { nombre: 'Piscis', emoji: '♓', inicio: 330 },
]

/**
 * Calcula la longitud eclíptica aproximada de la Luna
 * Basado en el ángulo de fase respecto al Sol
 */
function getLunarEclipticLongitude(date) {
  const diffMs = date.getTime() - KNOWN_NEW_MOON.getTime()
  const diffDays = diffMs / (1000 * 60 * 60 * 24)
  const phase = ((diffDays % SYNODIC_MONTH) / SYNODIC_MONTH + 1) % 1

  // Longitud solar aproximada basada en el día del año
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000)
  const solarLongitude = ((dayOfYear - 80) / 365.25) * 360

  // Longitud lunar = longitud solar + ángulo de fase
  const lunarLongitude = (solarLongitude + phase * 360) % 360
  return lunarLongitude < 0 ? lunarLongitude + 360 : lunarLongitude
}

/**
 * Obtiene la constelación en la que se encuentra la Luna hoy
 */
function getConstelacionLunar(date) {
  const longitud = getLunarEclipticLongitude(date)
  const idx = Math.floor(longitud / 30) % 12
  return CONSTELACIONES_ZODIACALES[idx]
}

/**
 * Calcula la distancia aproximada de la Luna en km
 * Varía entre perigeo y apogeo según la fase del ciclo anomalístico
 */
function getDistanciaLunar(date) {
  const diffMs = date.getTime() - KNOWN_NEW_MOON.getTime()
  const diffDays = diffMs / (1000 * 60 * 60 * 24)

  // Ciclo anomalístico: 27.55 días (período entre perigeos)
  const anomalisticMonth = 27.554551
  const anomaly = ((diffDays % anomalisticMonth) / anomalisticMonth) * Math.PI * 2

  // Distancia varía sinusoidalmente entre perigeo y apogeo
  const variacion = (MOON_APOGEE - MOON_PERIGEE) / 2
  const media = (MOON_APOGEE + MOON_PERIGEE) / 2
  const distancia = media - variacion * Math.cos(anomaly)

  return Math.round(distancia)
}

/**
 * Calcula la velocidad orbital de la Luna (km/s)
 * Varía entre ~0.97 km/s en apogeo y ~1.08 km/s en perigeo
 */
function getVelocidadOrbital(distanciaKm) {
  // Velocidad orbital circular: v = sqrt(GM/r)
  // GM lunar ≈ 4.9048695e12 m³/s²
  const GM_TIERRA = 3.986e14 // m³/s²
  const r = distanciaKm * 1000 // metros
  const velocidad = Math.sqrt(GM_TIERRA / r) / 1000 // km/s
  return velocidad.toFixed(2)
}

/**
 * Determina si es Superluna o Microluna
 */
function getTipoDistancia(distanciaKm, phase) {
  const esFaseLlena = phase > 0.45 && phase < 0.55
  const esFaseNueva = phase < 0.05 || phase > 0.95

  if (distanciaKm < 362000) {
    if (esFaseLlena) return { tipo: '🌕✨ Superluna', descripcion: 'La Luna llena más cercana y grande del año' }
    if (esFaseNueva) return { tipo: '🌑✨ Superperigeo', descripcion: 'Luna nueva en su punto más cercano' }
  }
  if (distanciaKm > 400000) {
    if (esFaseLlena) return { tipo: '🌕 Microluna', descripcion: 'La Luna llena más lejana y pequeña' }
  }
  return null
}

/**
 * Calcula días hasta la próxima luna llena o nueva
 */
function getDiasHastaProximaFase(date) {
  const diffMs = date.getTime() - KNOWN_NEW_MOON.getTime()
  const diffDays = diffMs / (1000 * 60 * 60 * 24)
  const phase = ((diffDays % SYNODIC_MONTH) / SYNODIC_MONTH + 1) % 1

  let diasHastaLlena = ((0.5 - phase) * SYNODIC_MONTH + SYNODIC_MONTH) % SYNODIC_MONTH
  let diasHastaNueva = ((1 - phase) * SYNODIC_MONTH + SYNODIC_MONTH) % SYNODIC_MONTH

  if (diasHastaLlena < 0.5) diasHastaLlena = 0
  if (diasHastaNueva < 0.5) diasHastaNueva = 0

  return {
    diasHastaLlena: Math.round(diasHastaLlena),
    diasHastaNueva: Math.round(diasHastaNueva),
  }
}

/**
 * Función principal: retorna todos los datos científicos de la Luna para hoy
 */
export function getDatosAstronomicosDeLuna(date = new Date()) {
  const diffMs = date.getTime() - KNOWN_NEW_MOON.getTime()
  const diffDays = diffMs / (1000 * 60 * 60 * 24)
  const phase = ((diffDays % SYNODIC_MONTH) / SYNODIC_MONTH + 1) % 1

  const distancia = getDistanciaLunar(date)
  const velocidad = getVelocidadOrbital(distancia)
  const constelacion = getConstelacionLunar(date)
  const tipoDistancia = getTipoDistancia(distancia, phase)
  const proximaFase = getDiasHastaProximaFase(date)

  // Tamaño angular aparente (diámetro angular en arcominutos)
  // Diámetro real Luna = 3474 km
  const diametroAngular = ((3474 / distancia) * (180 / Math.PI) * 60).toFixed(1)

  // Energía de marea (relativa, mayor en perigeo)
  const fuerzaMareal = ((MOON_MEAN_DISTANCE / distancia) ** 3 * 100).toFixed(1)

  return {
    distanciaKm: distancia.toLocaleString('es-AR'),
    distanciaKmNum: distancia,
    velocidadKms: velocidad,
    constelacion,
    tipoDistancia,
    diametroAngular,
    fuerzaMareal,
    diasHastaLlena: proximaFase.diasHastaLlena,
    diasHastaNueva: proximaFase.diasHastaNueva,
    esCercana: distancia < 370000,
    esLejana: distancia > 400000,
  }
}
