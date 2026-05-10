import { useState } from 'react'
import { useTarotDaily } from '../hooks/useTarotDaily'
import TarotCardSVG from './TarotCardSVG'

const PALO_COLORS = {
  'Copas': '#e8a4b0',
  'Oros': '#c9a84c',
  'Espadas': '#a0b4d0',
  'Bastos': '#c4a882',
}

export default function TarotDailyCard({ user }) {
  const { card, history, loading, saving, revealed, revealCard } = useTarotDaily(user)
  const [showHistory, setShowHistory] = useState(false)
  const [isFlipping, setIsFlipping] = useState(false)

  const DIAS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
  const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']

  const handleReveal = async () => {
    if (revealed) return
    setIsFlipping(true)
    setTimeout(() => {
      revealCard()
      setIsFlipping(false)
    }, 400)
  }

  const color = card?.palo ? PALO_COLORS[card.palo] : '#c9a84c'

  if (loading) {
    return (
      <div className="card-luna mx-4 mb-3 flex items-center justify-center py-8">
        <div className="text-luna-gold animate-pulse text-2xl">✦</div>
      </div>
    )
  }

  return (
    <div className="mx-4 mb-3">
      <div className="relative overflow-hidden rounded-2xl border border-luna-gold/20 bg-gradient-to-b from-[#1e2838]/90 to-[#151d2a]/90 backdrop-blur-sm">

        <div className="absolute inset-0 opacity-15 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 30% 50%, ${color}80 0%, transparent 65%)` }} />

        <div className="relative z-10 p-5">
          <div className="label-luna mb-4">
            <span>✦</span> Tu arcano del día
            {history.length > 1 && (
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="ml-auto text-[9px] text-white/30 hover:text-luna-gold transition-colors"
              >
                {showHistory ? 'Ocultar historial' : `Ver historial (${history.length})`}
              </button>
            )}
          </div>

          {!revealed ? (
            <div className="flex flex-col items-center py-4">
              {/* Carta boca abajo */}
              <div
                className={`cursor-pointer transition-transform duration-300 ${isFlipping ? 'scale-x-0' : 'scale-x-100'}`}
                onClick={handleReveal}
                style={{ filter: 'brightness(0.3)' }}
              >
                <TarotCardSVG card={card} size="lg" />
              </div>
              <p className="text-white/30 text-xs mt-4 text-center">
                Tocá la carta para revelar tu arcano de hoy
              </p>
              <button
                onClick={handleReveal}
                disabled={saving}
                className="mt-3 btn-primary max-w-[200px]"
              >
                {saving ? 'Revelando...' : 'Revelar mi carta ✦'}
              </button>
            </div>
          ) : (
            <div>
              <div className="flex gap-4 items-start">
                {/* Carta ilustrada */}
                <div className="flex-shrink-0 animate-fade-up">
                  <TarotCardSVG card={card} size="lg" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 animate-fade-up"
                  style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>

                  <div className="text-[9px] tracking-widest uppercase mb-1"
                    style={{ color }}>
                    {card?.arcano === 'mayor' ? 'Arcano Mayor' : `Arcano Menor · ${card?.palo}`}
                  </div>

                  <h3 className="font-serif text-white text-lg leading-tight mb-2">
                    {card?.nombre}
                  </h3>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {card?.palabrasClave?.slice(0, 3).map((kw, i) => (
                      <span key={i} className="text-[9px] px-2 py-0.5 rounded-full"
                        style={{
                          background: `${color}18`,
                          color,
                          border: `0.5px solid ${color}30`,
                        }}>
                        {kw}
                      </span>
                    ))}
                  </div>

                  <p className="text-white/45 text-[11px] leading-relaxed">
                    {card?.descripcion}
                  </p>
                </div>
              </div>

              {/* Mensaje oráculo */}
              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="text-[9px] text-luna-gold tracking-wider uppercase mb-2 flex items-center gap-1.5">
                  <span>🔮</span> Mensaje del oráculo
                </p>
                <p className="text-white/65 text-xs leading-relaxed italic">
                  "{card?.mensaje}"
                </p>
              </div>

              {/* Palabras clave completas */}
              <div className="mt-3 pt-3 border-t border-white/5">
                <p className="text-[9px] text-white/25 mb-2">Todas las palabras clave</p>
                <div className="flex flex-wrap gap-1">
                  {card?.palabrasClave?.map((kw, i) => (
                    <span key={i} className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-white/40">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Historial */}
      {showHistory && history.length > 0 && (
        <div className="mt-2 card-luna animate-fade-up">
          <div className="label-luna mb-3">
            <span>📜</span> Historial de arcanos
          </div>
          <div className="space-y-0">
            {history.map((row, i) => {
              const date = new Date(row.drawn_date + 'T12:00:00')
              const isToday = row.drawn_date === new Date().toISOString().split('T')[0]
              return (
                <div key={i} className="flex items-center gap-3 py-2.5 border-b border-white/5 last:border-0">
                  <TarotCardSVG card={row.card} size="sm" />
                  <div className="flex-1">
                    <div className="text-xs text-white">{row.card?.nombre}</div>
                    <div className="text-[10px] text-white/30 mt-0.5">
                      {isToday ? 'Hoy' : `${DIAS[date.getDay()]} ${date.getDate()} ${MESES[date.getMonth()]}`}
                    </div>
                  </div>
                  <div className="text-[10px] text-white/20 font-serif italic">
                    {row.card?.numeral}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
