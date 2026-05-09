// Servicio de notificaciones push para Soy La Luna

/**
 * Solicita permiso de notificaciones al usuario
 */
export async function requestNotificationPermission() {
  if (!('Notification' in window)) {
    return { granted: false, reason: 'not_supported' }
  }
  if (Notification.permission === 'granted') {
    return { granted: true }
  }
  const permission = await Notification.requestPermission()
  return { granted: permission === 'granted' }
}

/**
 * Guarda la preferencia de hora de notificación en localStorage
 */
export function saveNotificationPrefs(prefs) {
  localStorage.setItem('soy-la-luna-notif-prefs', JSON.stringify(prefs))
}

export function getNotificationPrefs() {
  try {
    const saved = localStorage.getItem('soy-la-luna-notif-prefs')
    return saved ? JSON.parse(saved) : { enabled: false, hour: 8, minute: 0, eventos: true }
  } catch {
    return { enabled: false, hour: 8, minute: 0, eventos: true }
  }
}

/**
 * Programa la notificación diaria usando setTimeout
 * (funciona mientras la app está abierta/instalada como PWA)
 */
export function scheduleNotification(card, moonPhase, prefs) {
  if (!prefs.enabled || Notification.permission !== 'granted') return

  const now = new Date()
  const scheduled = new Date()
  scheduled.setHours(prefs.hour, prefs.minute, 0, 0)

  // Si la hora ya pasó hoy, programar para mañana
  if (scheduled <= now) {
    scheduled.setDate(scheduled.getDate() + 1)
  }

  const msUntil = scheduled.getTime() - now.getTime()

  // Limpiar timeout anterior si existe
  const existingTimeout = window._lunaNotifTimeout
  if (existingTimeout) clearTimeout(existingTimeout)

  window._lunaNotifTimeout = setTimeout(() => {
    showDailyNotification(card, moonPhase)
    // Reprogramar para el día siguiente
    scheduleNotification(card, moonPhase, prefs)
  }, msUntil)

  return scheduled
}

/**
 * Muestra la notificación diaria
 */
export function showDailyNotification(card, moonPhase) {
  if (Notification.permission !== 'granted') return

  new Notification('🌙 Soy La Luna — Tu cosmos de hoy', {
    body: `${moonPhase.emoji} ${moonPhase.name} · ${card.emoji} ${card.nombre}\n"${card.mensaje.substring(0, 80)}..."`,
    icon: '/moon-192.png',
    badge: '/moon-192.png',
    tag: 'soy-la-luna-daily',
    renotify: true,
  })
}

/**
 * Muestra notificación de evento cósmico
 */
export function showEventNotification(evento) {
  if (Notification.permission !== 'granted') return

  new Notification(`${evento.emoji} Mañana: ${evento.tipo}`, {
    body: evento.descripcion.substring(0, 120),
    icon: '/moon-192.png',
    badge: '/moon-192.png',
    tag: `soy-la-luna-evento-${evento.fecha}`,
  })
}

/**
 * Verifica si hay eventos cósmicos mañana y notifica
 */
export function checkUpcomingEvents(eventos) {
  if (Notification.permission !== 'granted') return

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const tomorrowStr = tomorrow.toDateString()

  eventos.forEach(evento => {
    if (evento.fecha.toDateString() === tomorrowStr && evento.categoria !== 'luna') {
      setTimeout(() => showEventNotification(evento), 2000)
    }
  })
}
