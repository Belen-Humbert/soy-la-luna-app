import { useAuth } from '../hooks/useAuth'
import StarsCanvas from '../components/StarsCanvas'

export default function Home() {
  const { user, signOut } = useAuth()
  const name = user?.user_metadata?.name || user?.email?.split('@')[0] || 'Luna'

  return (
    <div className="relative min-h-screen pb-24">
      <StarsCanvas />

      {/* Nav */}
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

      <div className="relative z-10 px-4 pt-8 text-center animate-fade-up">
        <p className="text-[10px] tracking-[3px] uppercase text-luna-gold mb-2">✦ Tu cosmos ✦</p>
        <h1 className="font-serif italic text-luna-rose text-4xl">Hola, {name}</h1>
        <p className="text-white/30 text-xs mt-2">Las features están en camino 🌙</p>

        <div className="mt-12 card-luna max-w-xs mx-auto">
          <p className="text-white/50 text-sm text-center">
            Base del proyecto lista ✦<br />
            <span className="text-luna-gold text-xs">Próximo: Fase lunar del día</span>
          </p>
        </div>
      </div>
    </div>
  )
}
