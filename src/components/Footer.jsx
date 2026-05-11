export default function Footer() {
  return (
    <footer className="relative z-10 mx-4 mb-6 mt-2">
      <div className="relative overflow-hidden rounded-2xl border border-luna-gold/20 bg-gradient-to-b from-[#1e2838]/90 to-[#151d2a]/90 backdrop-blur-sm p-5">

        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 100%, #c9a84c40 0%, transparent 70%)' }} />

        <div className="relative z-10">
          <div className="text-center mb-4">
            <p className="font-serif italic text-luna-rose text-lg mb-0.5">🌙 La Luna</p>
            <p className="text-white/30 text-[10px] tracking-widest uppercase">
              Lecturas honestas que nos guían ✦
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <a href="https://instagram.com/brujita.lavallina"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-luna-rose/30 transition-all text-white/50 hover:text-luna-rose text-xs">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
              @brujita.lavallina
            </a>

            <a href="https://wa.me/542617038693"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-green-400/30 transition-all text-white/50 hover:text-green-400 text-xs">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>

            <a href="mailto:labrujitalavallina@gmail.com"
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-luna-gold/30 transition-all text-white/50 hover:text-luna-gold text-xs">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <polyline points="2,4 12,13 22,4"/>
              </svg>
              labrujitalavallina@gmail.com
            </a>

            <a href="https://belen-humbert.github.io/Soy-La-Luna-LandingPage/"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-luna-gold/20 hover:bg-luna-gold/10 hover:border-luna-gold/40 transition-all text-luna-gold/60 hover:text-luna-gold text-xs">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
              </svg>
              La Luna — Lecturas de Tarot
            </a>
          </div>

          <div className="h-px bg-white/5 mb-3"/>

          <p className="text-center text-white/20 text-[10px] tracking-wider">
            © 2025 La Luna — Belén Humbert ✦
          </p>
        </div>
      </div>
    </footer>
  )
}
