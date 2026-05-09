import { useState, useEffect } from 'react'
import {
  requestNotificationPermission,
  saveNotificationPrefs,
  getNotificationPrefs,
  scheduleNotification,
} from '../lib/notifications'
import { getMoonPhase } from '../lib/moonPhase'
import { getCardOfTheDay } from '../lib/tarotCards'

export default function NotificacionesConfig({ user, onClose }) {
  const [prefs, setPrefs] = useState(getNotificationPrefs())
  const [permission, setPermission] = useState(Notification?.permission || 'default')
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(false)

  const moonPhase = getMoonPhase(new Date())
  const card = user ? getCardOfTheDay(user.id) : null

  const handleEnable = async () => {
    setLoading(true)
    const result = await requestNotificationPermission()
    if (result.granted) {
      setPermission('granted')
      const newPrefs = { ...prefs, enabled: true }
      setPrefs(newPrefs)
      saveNotificationPrefs(newPrefs)
      if (card) scheduleNotification(card, moonPhase, newPrefs)
    } else {
      setPermission('denied')
    }
    setLoading(false)
  }

  const handleSave = () => {
    saveNotificationPrefs(prefs)
    if (prefs.enabled && card) {
      scheduleNotification(card, moonPhase, prefs)
    }
    setSaved(true)
    setTimeout(() => {
      setSaved(false)
      onClose?.()
    }, 1500)
  }

  const updateHour = (val) => setPrefs(p => ({ ...p, hour: parseInt(val) }))
  const updateMinute = (val) => setPrefs(p => ({ ...p, minute: parseInt(val) }))

  const HOURS = Array.from({ length: 24 }, (_, i) => i)
  const MINUTES = [0, 15, 30, 45]

  const formatHour = (h) => `${String(h).padStart(2, '0')}:${String(prefs.minute).padStart(2, '0')} hs`

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
      onClick={e => e.target === e.currentTarget && onClose?.()}
    >
      <div className="w-full max-w-sm bg-[#1a2030] border border-luna-gold/20 rounded-t-2xl sm:rounded-2xl p-6 animate-fade-up">

        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="font-serif text-white text-lg">Notificaciones</h3>
            <p className="text-white/30 text-xs mt-0.5">Dejate guiar por la luna</p>
          </div>
          <button onClick={onClose} className="text-white/30 hover:text-white/60 text-xl transition-colors">×</button>
        </div>

        {/* Estado del permiso */}
        {permission === 'denied' && (
          <div className="mb-4 p-3 rounded-xl bg-red-400/10 border border-red-400/20">
            <p className="text-red-400/80 text-xs">
              Bloqueaste las notificaciones. Para activarlas entrá a la configuración de tu navegador y habilitálas para este sitio.
            </p>
          </div>
        )}

        {/* Activar/desactivar */}
        <div className="card-luna mb-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-sm">Notificación diaria</p>
              <p className="text-white/30 text-xs mt-0.5">Arcano + fase lunar del día</p>
            </div>
            {permission !== 'granted' ? (
              <button
                onClick={handleEnable}
                disabled={loading || permission === 'denied'}
                className="px-4 py-2 rounded-full bg-luna-rose text-luna-bg text-xs font-medium disabled:opacity-40 transition-all"
              >
                {loading ? '...' : 'Activar'}
              </button>
            ) : (
              <button
                onClick={() => setPrefs(p => ({ ...p, enabled: !p.enabled }))}
                className={`w-12 h-6 rounded-full transition-all relative ${prefs.enabled ? 'bg-luna-gold' : 'bg-white/15'}`}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${prefs.enabled ? 'left-7' : 'left-1'}`} />
              </button>
            )}
          </div>
        </div>

        {/* Hora */}
        {permission === 'granted' && prefs.enabled && (
          <div className="card-luna mb-4 animate-fade-in">
            <p className="text-white/50 text-xs mb-3">¿A qué hora querés recibirla?</p>

            <div className="text-center mb-4">
              <span className="font-serif text-luna-gold text-3xl">{formatHour(prefs.hour)}</span>
            </div>

            {/* Selector de hora */}
            <div className="mb-3">
              <p className="text-white/30 text-[10px] mb-2 uppercase tracking-wider">Hora</p>
              <div className="grid grid-cols-6 gap-1">
                {HOURS.map(h => (
                  <button
                    key={h}
                    onClick={() => updateHour(h)}
                    className={`py-1.5 rounded-lg text-xs transition-all ${prefs.hour === h
                      ? 'bg-luna-gold text-luna-bg font-medium'
                      : 'bg-white/5 text-white/40 hover:bg-white/10'
                      }`}
                  >
                    {String(h).padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>

            {/* Selector de minutos */}
            <div>
              <p className="text-white/30 text-[10px] mb-2 uppercase tracking-wider">Minutos</p>
              <div className="grid grid-cols-4 gap-1">
                {MINUTES.map(m => (
                  <button
                    key={m}
                    onClick={() => updateMinute(m)}
                    className={`py-1.5 rounded-lg text-xs transition-all ${prefs.minute === m
                      ? 'bg-luna-gold text-luna-bg font-medium'
                      : 'bg-white/5 text-white/40 hover:bg-white/10'
                      }`}
                  >
                    :{String(m).padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Eventos cósmicos */}
        {permission === 'granted' && (
          <div className="card-luna mb-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm">Alertas de eventos cósmicos</p>
                <p className="text-white/30 text-xs mt-0.5">Eclipses, superlunas, meteoros</p>
              </div>
              <button
                onClick={() => setPrefs(p => ({ ...p, eventos: !p.eventos }))}
                className={`w-12 h-6 rounded-full transition-all relative ${prefs.eventos ? 'bg-luna-gold' : 'bg-white/15'}`}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${prefs.eventos ? 'left-7' : 'left-1'}`} />
              </button>
            </div>
          </div>
        )}

        {/* Guardar */}
        <button
          onClick={handleSave}
          className="btn-primary"
        >
          {saved ? '✓ Guardado' : 'Guardar preferencias'}
        </button>

        {/* Nota PWA */}
        <p className="text-white/20 text-[10px] text-center mt-3 leading-relaxed">
          Para recibir notificaciones aunque la app esté cerrada, instalála en tu celular: tocá "Compartir" → "Agregar a pantalla de inicio"
        </p>
      </div>
    </div>
  )
}
