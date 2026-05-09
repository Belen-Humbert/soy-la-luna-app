// ═══════════════════════════════════════════
// RITUALES POR DÍA DE LA SEMANA (planeta regente)
// ═══════════════════════════════════════════

export const RITUALES_POR_DIA = {
  0: { // Domingo
    planeta: 'El Sol',
    emoji: '☀️',
    color: '#f5c842',
    temas: ['Éxito', 'Vitalidad', 'Claridad', 'Confianza', 'Prosperidad'],
    descripcion: 'El Sol rige el domingo. Día ideal para conectar con tu propósito, brillar y trabajar en tu autoconfianza.',
    rituales: [
      { nombre: 'Baño solar', emoji: '🛁', descripcion: 'Bañate con sal gruesa, naranja y miel para atraer éxito y limpiar energías densas.' },
      { nombre: 'Meditación al amanecer', emoji: '🌅', descripcion: 'Medita mirando hacia el este mientras el sol sale. Visualizá tu propósito brillando.' },
      { nombre: 'Afirmaciones de poder', emoji: '✨', descripcion: 'Frente al espejo, declará en voz alta tres cosas que lográs esta semana.' },
      { nombre: 'Vela amarilla o dorada', emoji: '🕯️', descripcion: 'Encendé una vela amarilla con intención de éxito y claridad mental.' },
    ]
  },
  1: { // Lunes
    planeta: 'La Luna',
    emoji: '🌙',
    color: '#a0b4d0',
    temas: ['Intuición', 'Emociones', 'Sueños', 'Memoria', 'Ciclos'],
    descripcion: 'La Luna rige el lunes. Día de escuchar hacia adentro, trabajar las emociones y conectar con lo intuitivo.',
    rituales: [
      { nombre: 'Diario de sueños', emoji: '📓', descripcion: 'Al despertar escribí todo lo que soñaste. Los sueños del lunes tienen mensajes especiales.' },
      { nombre: 'Baño de luna llena', emoji: '🌊', descripcion: 'Agregá agua de luna (agua expuesta toda la noche) a tu baño para potenciar la intuición.' },
      { nombre: 'Meditación emocional', emoji: '💧', descripcion: 'Sentate en silencio y permití que las emociones fluyan sin juzgarlas. Solo observálas.' },
      { nombre: 'Cristal de selenita', emoji: '💎', descripcion: 'Cargá tu selenita al sol y tenela cerca para claridad emocional durante el día.' },
    ]
  },
  2: { // Martes
    planeta: 'Marte',
    emoji: '♂️',
    color: '#e06060',
    temas: ['Acción', 'Fuerza', 'Valentía', 'Protección', 'Energía'],
    descripcion: 'Marte rige el martes. Día para la acción decidida, los inicios valientes y la protección personal.',
    rituales: [
      { nombre: 'Ritual de protección', emoji: '🛡️', descripcion: 'Rodeate de sal negra en los umbrales. Visualizá una luz roja protegiéndote.' },
      { nombre: 'Ejercicio con intención', emoji: '💪', descripcion: 'Antes de entrenar, establecé una intención. El movimiento físico mueve también la energía.' },
      { nombre: 'Cortar lazos', emoji: '✂️', descripcion: 'Escribí en un papel algo que querés cortar. Quemálo con seguridad visualizando la liberación.' },
      { nombre: 'Aceite de canela', emoji: '🌶️', descripcion: 'Untá una gota de aceite de canela en tus muñecas para activar tu energía y valentía.' },
    ]
  },
  3: { // Miércoles
    planeta: 'Mercurio',
    emoji: '☿',
    color: '#80d0a0',
    temas: ['Comunicación', 'Mente', 'Estudio', 'Viajes', 'Negocios'],
    descripcion: 'Mercurio rige el miércoles. Día ideal para comunicarte, estudiar, firmar contratos y hacer trámites.',
    rituales: [
      { nombre: 'Escritura automática', emoji: '✍️', descripcion: 'Escribí durante 10 minutos sin parar ni pensar. Dejá que la pluma lleve lo que necesita salir.' },
      { nombre: 'Limpieza con incienso', emoji: '🪄', descripcion: 'Sahúma tu espacio con lavanda o palo santo para limpiar la energía mental y favorecer el estudio.' },
      { nombre: 'Afirmaciones de comunicación', emoji: '🗣️', descripcion: 'Declará en voz alta: "Me expreso con claridad y facilidad. Mis palabras son poderosas."' },
      { nombre: 'Cristal de fluorita', emoji: '💜', descripcion: 'Colocá fluorita sobre tu escritorio para potenciar la concentración y el aprendizaje.' },
    ]
  },
  4: { // Jueves
    planeta: 'Júpiter',
    emoji: '♃',
    color: '#c9a84c',
    temas: ['Abundancia', 'Expansión', 'Suerte', 'Prosperidad', 'Sabiduría'],
    descripcion: 'Júpiter rige el jueves. El día más poderoso para rituales de abundancia, expansión y atracción de oportunidades.',
    rituales: [
      { nombre: 'Manifestación con escritura', emoji: '📝', descripcion: 'Escribí tus deseos en papel dorado o amarillo como si ya se cumplieron. Guardálos bajo una vela verde.' },
      { nombre: 'Ritual del dinero', emoji: '💰', descripcion: 'Colocá monedas bajo la luna, frotálas con aceite de canela y guardalas en un frasco con arroz.' },
      { nombre: 'Ofrenda de agradecimiento', emoji: '🌿', descripcion: 'Prepará una pequeña ofrenda (flores, frutas, agua) como gratitud por lo que ya tenés.' },
      { nombre: 'Baño de prosperidad', emoji: '🛁', descripcion: 'Bañate con albahaca, miel y canela. Visualizá abundancia fluyendo hacia vos mientras te bañás.' },
    ]
  },
  5: { // Viernes
    planeta: 'Venus',
    emoji: '♀️',
    color: '#e8a4b0',
    temas: ['Amor', 'Belleza', 'Armonía', 'Relaciones', 'Placer'],
    descripcion: 'Venus rige el viernes. Día perfecto para rituales de amor propio, atracción, belleza y armonía en relaciones.',
    rituales: [
      { nombre: 'Ritual de amor propio', emoji: '💕', descripcion: 'Bañate con pétalos de rosa, aceite de rosa y sal rosada. Decláte amor en voz alta.' },
      { nombre: 'Altar de Venus', emoji: '🌹', descripcion: 'Armá un altar con flores rosas, cristales de cuarzo rosa y una foto tuya que te encante.' },
      { nombre: 'Tónico de atracción', emoji: '✨', descripcion: 'Mezclá agua de rosas con unas gotas de aceite de jazmín. Aplicálo en tu cuello y muñecas.' },
      { nombre: 'Carta al amor', emoji: '💌', descripcion: 'Escribí una carta describiendo el amor que querés recibir — de otros o de vos misma.' },
    ]
  },
  6: { // Sábado
    planeta: 'Saturno',
    emoji: '♄',
    color: '#8080a0',
    temas: ['Protección', 'Límites', 'Karma', 'Disciplina', 'Limpieza profunda'],
    descripcion: 'Saturno rige el sábado. Día de limpieza energética profunda, establecer límites y trabajar el karma.',
    rituales: [
      { nombre: 'Gran limpieza energética', emoji: '🧹', descripcion: 'Limpiá tu espacio físico y energético. Sahúma cada rincón con romero y sal gruesa.' },
      { nombre: 'Ritual de límites', emoji: '🛑', descripcion: 'Escribí los límites que querés establecer. Leélos en voz alta y quemá el papel.' },
      { nombre: 'Baño de devolución', emoji: '🌊', descripcion: 'Bañate con sal negra y limón para devolver toda energía que no te pertenece.' },
      { nombre: 'Meditación kármica', emoji: '🔮', descripcion: 'Meditá en lo que querés saldar o transformar. Perdonar libera nudos kármicos.' },
    ]
  },
}

// ═══════════════════════════════════════════
// RITUALES POR FASE LUNAR
// ═══════════════════════════════════════════

export const RITUALES_POR_FASE = {
  'Luna Nueva': {
    potencia: 'Intención y siembra',
    emoji: '🌑',
    intensidad: 95,
    descripcion: 'La luna nueva es el momento más poderoso para sembrar intenciones. El cielo oscuro amplifica el magnetismo de tus deseos.',
    rituales: [
      { nombre: 'Ritual de intenciones', emoji: '📜', descripcion: 'Escribí 10 deseos en presente como si ya se cumplieron. Guardálos en un sobre y abrilo en la próxima luna llena.' },
      { nombre: 'Meditación en oscuridad', emoji: '🕯️', descripcion: 'Con una sola vela negra, meditá en el silencio. Visualizá la semilla de lo que querés crear.' },
      { nombre: 'Limpieza de inicio', emoji: '🌿', descripcion: 'Comenzá el ciclo con una limpieza completa de cuerpo y espacio. Estrenás energías.' },
    ]
  },
  'Luna Creciente': {
    potencia: 'Acción y atracción',
    emoji: '🌒',
    intensidad: 70,
    descripcion: 'La luna crece y con ella tu capacidad de atraer. Cada acción que tomes ahora tiene mayor impulso energético.',
    rituales: [
      { nombre: 'Lista de pasos concretos', emoji: '📋', descripcion: 'Escribí 3 acciones concretas para acercarte a tu intención. Hacé al menos una hoy.' },
      { nombre: 'Cristales al sol', emoji: '💎', descripcion: 'Cargá tus cristales de atracción (citrino, cuarzo rosa) a la luz del día para potenciarlos.' },
    ]
  },
  'Cuarto Creciente': {
    potencia: 'Decisión y compromiso',
    emoji: '🌓',
    intensidad: 75,
    descripcion: 'Momento de decisiones. La tensión del cuarto creciente te pide que te comprometas con tu camino.',
    rituales: [
      { nombre: 'Ritual de decisión', emoji: '⚖️', descripcion: 'Escribí los pros y contras de la decisión que postergás. Quemá el papel del camino que no elegís.' },
      { nombre: 'Ofrenda de compromiso', emoji: '🕯️', descripcion: 'Enciende una vela del color de tu intención y renovás tu compromiso en voz alta.' },
    ]
  },
  'Luna Gibosa Creciente': {
    potencia: 'Refinamiento y paciencia',
    emoji: '🌔',
    intensidad: 80,
    descripcion: 'Casi llegamos a la plenitud. Momento de refinar, ajustar y confiar en el proceso.',
    rituales: [
      { nombre: 'Revisión de intenciones', emoji: '🔍', descripcion: 'Releé las intenciones de luna nueva. ¿Qué ajuste necesitan? Modificálas con honestidad.' },
      { nombre: 'Gratitud anticipada', emoji: '🙏', descripcion: 'Agradecé como si tus deseos ya se cumplieron. La gratitud anticipada acelera la manifestación.' },
    ]
  },
  'Luna Llena': {
    potencia: 'Culminación y liberación',
    emoji: '🌕',
    intensidad: 100,
    descripcion: 'Máxima potencia lunar. Todo se amplifica. Momento cumbre para manifestar, agradecer y soltar lo que ya no sirve.',
    rituales: [
      { nombre: 'Carta a la luna', emoji: '📝', descripcion: 'Escribí una carta de gratitud a la luna por lo que llegó en este ciclo. Leéla bajo la luz lunar.' },
      { nombre: 'Ritual de liberación', emoji: '🔥', descripcion: 'Escribí lo que querés soltar en un papel. Quemálo con seguridad visualizando la liberación total.' },
      { nombre: 'Baño de luna llena', emoji: '🛁', descripcion: 'Dejá recipientes con agua bajo la luna toda la noche. Úsala para baños, plantas o altares.' },
      { nombre: 'Carga de cristales', emoji: '💎', descripcion: 'Dejá todos tus cristales bajo la luna para que se limpien y carguen con la energía plena.' },
    ]
  },
  'Luna Gibosa Menguante': {
    potencia: 'Gratitud y compartir',
    emoji: '🌖',
    intensidad: 75,
    descripcion: 'La luna empieza a soltar su luz. Momento de agradecer y comenzar a compartir lo recibido.',
    rituales: [
      { nombre: 'Lista de gratitudes', emoji: '💛', descripcion: 'Escribí 20 cosas por las que estás agradecida. Sin repetir. El agradecimiento abre flujos nuevos.' },
      { nombre: 'Dar para recibir', emoji: '🤝', descripcion: 'Doná algo, ayudá a alguien o comparte lo que tenés. El flujo de dar activa el flujo de recibir.' },
    ]
  },
  'Cuarto Menguante': {
    potencia: 'Soltar y perdonar',
    emoji: '🌗',
    intensidad: 70,
    descripcion: 'Momento de rendición y entrega. Lo que ya cumplió su ciclo pide ser liberado.',
    rituales: [
      { nombre: 'Ritual de perdón', emoji: '🕊️', descripcion: 'Escribí el nombre de quien necesitás perdonar (incluida vos misma). Quemá el papel con amor.' },
      { nombre: 'Limpieza con sal', emoji: '🧂', descripcion: 'Poné sal en las esquinas de tu hogar durante la noche para absorber energías densas. Tirala al día siguiente.' },
    ]
  },
  'Luna Menguante': {
    potencia: 'Descanso e integración',
    emoji: '🌘',
    intensidad: 60,
    descripcion: 'La luna se retira hacia la oscuridad. Momento de descanso, integración y preparación para el nuevo ciclo.',
    rituales: [
      { nombre: 'Journaling de cierre', emoji: '📓', descripcion: 'Escribí sobre el ciclo que cierra: ¿qué aprendiste? ¿qué cambió? ¿qué querés diferente?' },
      { nombre: 'Baño de descanso', emoji: '🛁', descripcion: 'Bañate con lavanda y sal del himalaya para relajar y preparar el cuerpo para el nuevo ciclo.' },
    ]
  },
}

// ═══════════════════════════════════════════
// FUNCIÓN: Obtener rituales del día cruzados
// ═══════════════════════════════════════════

export function getRitualesDelDia(moonPhaseName, dayOfWeek) {
  const ritualDia = RITUALES_POR_DIA[dayOfWeek]
  const ritualFase = RITUALES_POR_FASE[moonPhaseName] || RITUALES_POR_FASE['Luna Menguante']

  // Calcular sinergia entre fase y día
  const sinergias = getSinergia(moonPhaseName, dayOfWeek)

  return {
    dia: ritualDia,
    fase: ritualFase,
    sinergias,
    intensidadTotal: Math.round((ritualFase.intensidad + 50) / 2),
  }
}

function getSinergia(fase, dia) {
  const sinergias = []

  if (fase === 'Luna Nueva' && dia === 1) {
    sinergias.push({ nivel: 'máxima', texto: '🌑🌙 Luna Nueva en día de La Luna — potencia de manifestación extraordinaria. El momento más poderoso del mes para sembrar intenciones.' })
  }
  if (fase === 'Luna Llena' && dia === 4) {
    sinergias.push({ nivel: 'máxima', texto: '🌕♃ Luna Llena en día de Júpiter — combinación mítica para abundancia. Todo lo que pedís hoy llega amplificado.' })
  }
  if (fase === 'Luna Llena' && dia === 5) {
    sinergias.push({ nivel: 'máxima', texto: '🌕♀️ Luna Llena en día de Venus — amor y manifestación en su punto más alto. Ritual de amor poderoso esta noche.' })
  }
  if (fase === 'Luna Nueva' && dia === 4) {
    sinergias.push({ nivel: 'alta', texto: '🌑♃ Luna Nueva en día de Júpiter — siembra intenciones de abundancia. El terreno está especialmente fértil.' })
  }
  if ((fase === 'Cuarto Menguante' || fase === 'Luna Menguante') && dia === 6) {
    sinergias.push({ nivel: 'alta', texto: '🌗♄ Luna menguante en día de Saturno — limpieza kármica profunda. El momento ideal para cortar lazos y limpiar energías.' })
  }
  if (fase === 'Luna Creciente' && dia === 5) {
    sinergias.push({ nivel: 'alta', texto: '🌒♀️ Luna creciente en día de Venus — atracción amorosa potenciada. Excelente para rituales de amor propio y relaciones.' })
  }

  return sinergias
}
