import { useEffect } from 'react'

const STORAGE_KEY = 'soy-la-luna-promo-last-shown'

// Verifica si hay que mostrar el modal hoy
export function shouldShowPromo() {
  try {
    const last = localStorage.getItem(STORAGE_KEY)
    if (!last) return true
    const lastDate = new Date(last).toDateString()
    const today = new Date().toDateString()
    return lastDate !== today
  } catch {
    return true
  }
}

export function markPromoShown() {
  try {
    localStorage.setItem(STORAGE_KEY, new Date().toISOString())
  } catch {}
}

export default function PromoModal({ onClose }) {
  useEffect(() => {
    markPromoShown()
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center p-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-sm animate-fade-up"
        style={{ background: 'linear-gradient(160deg, #1a2035, #0f1420)', border: '1px solid rgba(201,168,76,0.35)', borderRadius: '20px', overflow: 'hidden' }}>

        {/* Glow superior */}
        <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, #e8a4b0, #c9a84c, transparent)' }}/>

        <div className="p-6">
          {/* Ícono y título */}
          <div className="text-center mb-5">
            <div className="text-4xl mb-3">🔮</div>
            <h3 className="font-serif italic text-luna-rose text-2xl mb-1">
              ¿Querés una lectura?
            </h3>
            <p className="text-white/40 text-xs tracking-widest uppercase">
              Lecturas conscientes · La Luna
            </p>
          </div>

          {/* Texto */}
          <p className="text-white/60 text-sm text-center leading-relaxed mb-6">
            Las cartas tienen mucho más para decirte. Reservá una lectura personalizada y encontrá claridad en lo que más importa.
          </p>

          {/* Botones de acción */}
          <div className="space-y-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/542617038693?text=Hola%20Belén!%20Vi%20la%20app%20Soy%20La%20Luna%20y%20me%20gustaría%20reservar%20una%20lectura%20de%20tarot%20🌙"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3 px-5 rounded-xl transition-all duration-200 active:scale-95"
              style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.35)', color: '#25d366' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="text-sm font-medium">Reservar por WhatsApp</span>
            </a>

            {/* La Luna */}
            <a
              href="https://belen-humbert.github.io/Soy-La-Luna-LandingPage/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3 px-5 rounded-xl transition-all duration-200 active:scale-95"
              style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.35)', color: '#c9a84c' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
              </svg>
              <span className="text-sm font-medium">Ver lecturas disponibles</span>
            </a>
          </div>

          {/* Cerrar */}
          <button
            onClick={onClose}
            className="w-full mt-4 py-2 text-xs text-white/25 hover:text-white/50 transition-colors"
          >
            Ahora no, gracias
          </button>
        </div>
      </div>
    </div>
  )
}
