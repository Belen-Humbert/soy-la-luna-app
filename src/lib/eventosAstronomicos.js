// ═══════════════════════════════════════════════════════
// EVENTOS ASTRONÓMICOS 2025-2026
// Fuentes: NASA, TimeandDate, Astronomical Almanac
// Combinado con cálculo de fases lunares en tiempo real
// ═══════════════════════════════════════════════════════

// Lluvias de meteoros anuales (fechas fijas cada año)
export const LLUVIAS_METEORITOS = [
  { nombre: 'Cuadrántidas', emoji: '⭐', pico: { mes: 1, dia: 4 }, descripcion: 'Una de las más intensas del año. Hasta 120 meteoros/hora en su pico máximo.', zhr: 120 },
  { nombre: 'Líridas', emoji: '✨', pico: { mes: 4, dia: 22 }, descripcion: 'Lluvia antigua y confiable. Los meteoros dejan estelas luminosas duraderas.', zhr: 20 },
  { nombre: 'Eta Acuáridas', emoji: '💫', pico: { mes: 5, dia: 6 }, descripcion: 'Restos del cometa Halley. Especialmente visible desde el hemisferio sur.', zhr: 50 },
  { nombre: 'Delta Acuáridas', emoji: '🌠', pico: { mes: 7, dia: 30 }, descripcion: 'Lluvia lenta y constante visible desde el hemisferio sur.', zhr: 25 },
  { nombre: 'Perseidas', emoji: '🌟', pico: { mes: 8, dia: 12 }, descripcion: 'La más famosa del año. Brillantes y veloces, dejan largas estelas.', zhr: 100 },
  { nombre: 'Oriónidas', emoji: '⭐', pico: { mes: 10, dia: 21 }, descripcion: 'También del cometa Halley. Meteoros rápidos y brillantes.', zhr: 20 },
  { nombre: 'Leónidas', emoji: '🔥', pico: { mes: 11, dia: 17 }, descripcion: 'Conocidas por sus tormentas de meteoros históricas. Muy veloces.', zhr: 15 },
  { nombre: 'Gemínidas', emoji: '💎', pico: { mes: 12, dia: 14 }, descripcion: 'La mejor lluvia del año para el hemisferio sur. Hasta 150 meteoros/hora.', zhr: 150 },
  { nombre: 'Úrsidas', emoji: '❄️', pico: { mes: 12, dia: 22 }, descripcion: 'Lluvia modesta pero visible cerca del solsticio de invierno norte.', zhr: 10 },
]

// Eclipses 2025-2026
export const ECLIPSES = [
  {
    fecha: new Date('2025-03-14'),
    tipo: 'Eclipse lunar total',
    emoji: '🌑🔴',
    subtipo: 'Luna de Sangre',
    descripcion: 'Eclipse lunar total visible desde América. La luna se tiñe de rojo intenso durante la totalidad.',
    visible: 'Américas, Europa occidental',
    duracion: '65 minutos de totalidad',
    especial: true,
  },
  {
    fecha: new Date('2025-03-29'),
    tipo: 'Eclipse solar parcial',
    emoji: '🌑☀️',
    subtipo: 'Eclipse solar',
    descripcion: 'Eclipse solar parcial visible desde el noroeste de Europa y noroeste de África.',
    visible: 'Europa, noroeste de África',
    duracion: 'Parcial',
    especial: false,
  },
  {
    fecha: new Date('2025-09-07'),
    tipo: 'Eclipse lunar total',
    emoji: '🌑🔴',
    subtipo: 'Luna de Sangre',
    descripcion: 'Segundo eclipse lunar total del año. Visible desde Europa, África, Asia y Australia.',
    visible: 'Europa, África, Asia, Australia',
    duracion: '82 minutos de totalidad',
    especial: true,
  },
  {
    fecha: new Date('2025-09-21'),
    tipo: 'Eclipse solar anular',
    emoji: '💍☀️',
    subtipo: 'Anillo de fuego',
    descripcion: 'Eclipse solar anular con el característico "anillo de fuego". Visible desde el Pacífico sur y Nueva Zelanda.',
    visible: 'Pacífico sur, Nueva Zelanda',
    duracion: 'Anular',
    especial: true,
  },
  {
    fecha: new Date('2026-02-17'),
    tipo: 'Eclipse solar anular',
    emoji: '💍☀️',
    subtipo: 'Anillo de fuego',
    descripcion: 'Eclipse solar anular visible desde el sur de América del Sur, incluyendo Argentina y Chile.',
    visible: 'Sur de Argentina y Chile, Antártida',
    duracion: 'Anular',
    especial: true,
  },
  {
    fecha: new Date('2026-08-12'),
    tipo: 'Eclipse solar total',
    emoji: '🌑☀️✨',
    subtipo: 'Eclipse total',
    descripcion: 'Eclipse solar total visible desde el norte de África y España. El más esperado de la década.',
    visible: 'Groenlandia, Islandia, España, norte de África',
    duracion: 'Total',
    especial: true,
  },
]

// Eventos especiales de la luna 2025-2026
export const EVENTOS_LUNARES_ESPECIALES = [
  { fecha: new Date('2025-10-07'), tipo: 'Superluna', emoji: '🌕✨', descripcion: 'La Luna Llena más cercana a la Tierra del año. Aparece 14% más grande y 30% más brillante.' },
  { fecha: new Date('2025-11-05'), tipo: 'Superluna', emoji: '🌕✨', descripcion: 'Segunda superluna del otoño. Gran noche para observación lunar.' },
  { fecha: new Date('2025-12-04'), tipo: 'Superluna', emoji: '🌕✨', descripcion: 'Tercera superluna consecutiva. La luna llena más grande del año 2025.' },
  { fecha: new Date('2026-01-03'), tipo: 'Microluna', emoji: '🌕', descripcion: 'La Luna Llena más lejana del año. Aparece más pequeña pero igualmente hermosa.' },
  { fecha: new Date('2026-09-15'), tipo: 'Superluna', emoji: '🌕✨', descripcion: 'La superluna más grande de 2026. Espectacular visibilidad desde el hemisferio sur.' },
]

// ═══════════════════════════════════════════════════════
// CÁLCULO DE LUNAS LLENAS Y NUEVAS (tiempo real)
// ═══════════════════════════════════════════════════════

const SYNODIC_MONTH = 29.53058770576
const KNOWN_NEW_MOON = new Date('2000-01-06T18:14:00Z')

function getMoonAge(date) {
  const diffMs = date.getTime() - KNOWN_NEW_MOON.getTime()
  const diffDays = diffMs / (1000 * 60 * 60 * 24)
  let age = diffDays % SYNODIC_MONTH
  if (age < 0) age += SYNODIC_MONTH
  return age
}

function getNextMoonEvent(date, targetAge, label, emoji, descripcion) {
  const currentAge = getMoonAge(date)
  let daysUntil = targetAge - currentAge
  if (daysUntil <= 0) daysUntil += SYNODIC_MONTH

  const eventDate = new Date(date.getTime() + daysUntil * 24 * 60 * 60 * 1000)

  // Nombre del signo zodiacal aproximado
  const month = eventDate.getMonth()
  const signos = ['Capricornio', 'Acuario', 'Piscis', 'Aries', 'Tauro', 'Géminis',
    'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario']
  const signo = signos[month]

  return {
    fecha: eventDate,
    tipo: label,
    emoji,
    descripcion: `${descripcion} en ${signo}. ${getSignoMensaje(signo, label)}`,
    signo,
    daysUntil: Math.round(daysUntil),
    esFuturo: daysUntil > 0,
  }
}

function getSignoMensaje(signo, tipo) {
  const mensajes = {
    'Aries': tipo.includes('Llena') ? 'Energía de acción e independencia.' : 'Iniciá proyectos con valentía.',
    'Tauro': tipo.includes('Llena') ? 'Culminaciones en lo material y sensorial.' : 'Sembrá intenciones de abundancia.',
    'Géminis': tipo.includes('Llena') ? 'Plenitud en comunicación e ideas.' : 'Nuevos comienzos mentales y sociales.',
    'Cáncer': tipo.includes('Llena') ? 'Emociones a flor de piel. Hogar y familia.' : 'Intenciones de cuidado y nutrición.',
    'Leo': tipo.includes('Llena') ? 'Brillo personal y creatividad en su punto.' : 'Sembrá deseos de reconocimiento.',
    'Virgo': tipo.includes('Llena') ? 'Culminaciones en salud y organización.' : 'Intenciones de mejora y detalle.',
    'Libra': tipo.includes('Llena') ? 'Plenitud en relaciones y armonía.' : 'Nuevos inicios en vínculos y equilibrio.',
    'Escorpio': tipo.includes('Llena') ? 'Liberación profunda. Transformación poderosa.' : 'Sembrá intenciones de transformación.',
    'Sagitario': tipo.includes('Llena') ? 'Expansión y búsqueda de significado.' : 'Nuevos horizontes y aventuras.',
    'Capricornio': tipo.includes('Llena') ? 'Logros y estructuras culminan.' : 'Intenciones de disciplina y metas.',
    'Acuario': tipo.includes('Llena') ? 'Revelaciones colectivas y libertad.' : 'Sembrá intenciones innovadoras.',
    'Piscis': tipo.includes('Llena') ? 'Sueños, espiritualidad y compasión.' : 'Intenciones de sanación y fe.',
  }
  return mensajes[signo] || ''
}

// ═══════════════════════════════════════════════════════
// FUNCIÓN PRINCIPAL: obtener todos los próximos eventos
// ═══════════════════════════════════════════════════════

export function getProximosEventos(desde = new Date(), cantidad = 8) {
  const eventos = []
  const ahora = desde.getTime()

  // 1. Próximas lunas llenas y nuevas (próximos 6 meses)
  for (let i = 0; i < 7; i++) {
    const offsetDays = i * SYNODIC_MONTH
    const baseDate = new Date(ahora + offsetDays * 24 * 60 * 60 * 1000)

    const lunaLlena = getNextMoonEvent(
      baseDate, 14.77, 'Luna Llena', '🌕',
      'Máxima energía lunar. Momento de culminación y liberación'
    )
    const lunaNueva = getNextMoonEvent(
      baseDate, 0, 'Luna Nueva', '🌑',
      'Inicio de ciclo. Momento ideal para nuevas intenciones'
    )

    if (lunaLlena.fecha.getTime() > ahora) eventos.push({ ...lunaLlena, categoria: 'luna' })
    if (lunaNueva.fecha.getTime() > ahora) eventos.push({ ...lunaNueva, categoria: 'luna' })
  }

  // 2. Eclipses futuros
  ECLIPSES.forEach(eclipse => {
    if (eclipse.fecha.getTime() > ahora) {
      eventos.push({
        ...eclipse,
        categoria: 'eclipse',
        daysUntil: Math.round((eclipse.fecha.getTime() - ahora) / (1000 * 60 * 60 * 24)),
      })
    }
  })

  // 3. Lluvias de meteoros (próximos 12 meses)
  const currentYear = desde.getFullYear()
  ;[currentYear, currentYear + 1].forEach(year => {
    LLUVIAS_METEORITOS.forEach(lluvia => {
      const fecha = new Date(year, lluvia.pico.mes - 1, lluvia.pico.dia)
      if (fecha.getTime() > ahora) {
        eventos.push({
          fecha,
          tipo: `Lluvia de meteoros · ${lluvia.nombre}`,
          emoji: lluvia.emoji,
          descripcion: lluvia.descripcion,
          categoria: 'meteoros',
          zhr: lluvia.zhr,
          daysUntil: Math.round((fecha.getTime() - ahora) / (1000 * 60 * 60 * 24)),
        })
      }
    })
  })

  // 4. Eventos lunares especiales
  EVENTOS_LUNARES_ESPECIALES.forEach(evento => {
    if (evento.fecha.getTime() > ahora) {
      eventos.push({
        ...evento,
        categoria: 'especial',
        daysUntil: Math.round((evento.fecha.getTime() - ahora) / (1000 * 60 * 60 * 24)),
      })
    }
  })

  // Ordenar por fecha y tomar los primeros N
  return eventos
    .sort((a, b) => a.fecha.getTime() - b.fecha.getTime())
    .slice(0, cantidad)
}

// Formato de fecha en español
export function formatFecha(date) {
  const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun',
    'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
  const DIAS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
  return {
    dia: date.getDate(),
    mes: MESES[date.getMonth()],
    diaSemana: DIAS[date.getDay()],
    mesNum: date.getMonth() + 1,
  }
}
