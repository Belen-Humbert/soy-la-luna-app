import { useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import StarsCanvas from '../components/StarsCanvas'
import Navbar from '../components/Navbar'
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
  const { user } = useAuth()
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

      {/* Navbar con links de sección */}
      <Navbar onNotifClick={() => setShowNotifConfig(true)} />

      <div className="relative z-10 pt-24">
        {/* Saludo */}
        <div className="text-center px-4 pb-5">
          <p className="text-[10px] tracking-[3px] uppercase text-luna-gold mb-1">
            ✦ La luna nos guía ✦
          </p>
          <h1 className="font-serif italic text-luna-rose text-3xl">
            {saludo}, {name}
          </h1>
        </div>

        {/* Sección: Luna */}
        <div id="section-luna">
          <MoonPhaseCard />
          <DatoCurioso />
        </div>

        {/* Sección: Tarot */}
        <div id="section-tarot">
          <TarotDailyCard user={user} />
        </div>

        {/* Sección: Rituales */}
        <div id="section-rituales">
          <RitualesCard />
        </div>

        {/* Sección: Eventos */}
        <div id="section-eventos">
          <EventosAstronomicos />
        </div>

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
