import { useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import StarsCanvas from '../components/StarsCanvas'
import MoonPhaseCard from '../components/MoonPhaseCard'
import TarotDailyCard from '../components/TarotDailyCard'
import RitualesCard from '../components/RitualesCard'
import EventosAstronomicos from '../components/EventosAstronomicos'
import DatoCurioso from '../components/DatoCurioso'
import Footer from '../components/Footer'
import NotificacionesConfig from '../components/NotificacionesConfig'
import { getNotificationPrefs, checkUpcomingEvents } from '../lib/notifications'
import { getProximosEventos } from '../lib/eventosAstronomicos'

export default function Home() {
  const { user, signOut } = useAuth()
  const [showNotifConfig, setShowNotifConfig] = useState(false)
  const name = user?.user_metadata?.name || user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Luna'

  const hora = new Date().getHours()
  const saludo = hora < 12 ? 'Buenos días' : hora < 19 ? 'Buenas tardes' : 'Buenas noches'

  useEffect(() => {
    const prefs = getNotificationPrefs()
    if (prefs.enabled && prefs.eventos) {
      const eventos = getProximosEventos(new Date(), 12)
      checkUpcomingEvents(eventos)
    }
  }, [])

  return (
    <div className="relative min-h-screen pb-6 pb-safe">
      <StarsCanvas />

      <nav className="sticky top-0 z-20 flex justify-between items-center px-5 py-4 border-b border-luna-gold/10 bg-luna-bg/70 backdrop-blur-md">
        <div className="font-serif italic text-luna-gold text-lg flex items-center gap-2">
          🌙 Soy La Luna
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowNotifConfig(true)}
            className="text-white/30 hover:text-luna-gold transition-colors text-lg"
            title="Notificaciones"
          >
            🔔
          </button>
          <button
            onClick={signOut}
            className="text-white/30 text-xs hover:text-white/60 transition-colors"
          >
            Salir
          </button>
        </div>
      </nav>

      <div className="relative z-10">
        <div className="text-center px-4 pt-7 pb-5">
          <p className="text-[10px] tracking-[3px] uppercase text-luna-gold mb-1">
            ✦ La luna nos guía ✦
          </p>
          <h1 className="font-serif italic text-luna-rose text-3xl">
            {saludo}, {name}
          </h1>
        </div>

        <MoonPhaseCard />
        <DatoCurioso />
        <TarotDailyCard user={user} />
        <RitualesCard />
        <EventosAstronomicos />
        <Footer />
      </div>

      {showNotifConfig && (
        <NotificacionesConfig
          user={user}
          onClose={() => setShowNotifConfig(false)}
        />
      )}
    </div>
  )
}
