import { useAuth } from '../hooks/useAuth'
import StarsCanvas from '../components/StarsCanvas'
import MoonPhaseCard from '../components/MoonPhaseCard'
import TarotDailyCard from '../components/TarotDailyCard'

export default function Home() {
  const { user, signOut } = useAuth()
  const name = user?.user_metadata?.name || user?.email?.split('@')[0] || 'Luna'

  const hora = new Date().getHours()
  const saludo = hora < 12 ? 'Buenos días' : hora < 19 ? 'Buenas tardes' : 'Buenas noches'

  return (
    <div className="relative min-h-screen pb-24">
      <StarsCanvas />

      <nav className="sticky top-0 z-20 flex justify-between items-center px-5 py-4 border-b border-luna-gold/10 bg-luna-bg/70 backdrop-blur-md">
        <div className="font-serif italic text-luna-gold text-lg flex items-center gap-2">
          🌙 Soy La Luna
        </div>
        <button
          onClick={signOut}
          className="text-white/30 text-xs hover:text-white/60 transition-colors"
        >
          Salir
        </button>
      </nav>

      <div className="relative z-10">
        <div className="text-center px-4 pt-7 pb-5">
          <p className="text-[10px] tracking-[3px] uppercase text-luna-gold mb-1">
            ✦ Tu cosmos de hoy ✦
          </p>
          <h1 className="font-serif italic text-luna-rose text-3xl">
            {saludo}, {name}
          </h1>
        </div>

        <MoonPhaseCard />
        <TarotDailyCard user={user} />

        <div className="mx-4 mt-2">
          <div className="card-luna opacity-50">
            <div className="label-luna">
              <span>✨</span> Rituales del día
            </div>
            <p className="text-white/30 text-sm mt-1">Próximamente...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
