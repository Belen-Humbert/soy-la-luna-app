import { useState, useMemo } from 'react'
import { getMoonPhase } from '../lib/moonPhase'
import { getRitualesDelDia } from '../lib/rituales'

export default function RitualesCard() {
  const [expanded, setExpanded] = useState(null)
  const [activeTab, setActiveTab] = useState('dia') // 'dia' | 'fase'

  const today = useMemo(() => new Date(), [])
  const moonData = useMemo(() => getMoonPhase(today), [today])
  const ritualesData = useMemo(() =>
    getRitualesDelDia(moonData.name, today.getDay()), [moonData, today])

  const { dia, fase, sinergias, intensidadTotal } = ritualesData

  const toggleRitual = (key) => setExpanded(expanded === key ? null : key)

  return (
    <div className="mx-4 mb-3">
      <div className="relative overflow-hidden rounded-2xl border border-luna-gold/20 bg-gradient-to-b from-[#1e2838]/90 to-[#151d2a]/90 backdrop-blur-sm">

        {/* Glow de fondo con color del planeta */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 80% 20%, ${dia.color}cc 0%, transparent 60%)` }} />

        <div className="relative z-10 p-5">

          {/* Header */}
          <div className="label-luna mb-1">
            <span>✨</span> Rituales del día
          </div>

          {/* Título cruzado */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-serif text-white text-lg leading-tight">
                {dia.emoji} {dia.planeta} · {moonData.emoji} {moonData.name}
              </h3>
              <p className="text-white/35 text-xs mt-0.5">
                Intensidad energética del día
              </p>
            </div>
            {/* Intensidad */}
            <div className="text-right ml-3">
              <div className="font-serif text-2xl" style={{ color: dia.color }}>
                {intensidadTotal}%
              </div>
            </div>
          </div>

          {/* Barra de intensidad */}
          <div className="h-1 bg-white/8 rounded-full overflow-hidden mb-4">
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{
                width: `${intensidadTotal}%`,
                background: `linear-gradient(90deg, ${dia.color}, #e8a4b0)`
              }}
            />
          </div>

          {/* Sinergia especial (si hay) */}
          {sinergias.length > 0 && (
            <div className="mb-4 p-3 rounded-xl border"
              style={{
                background: `${dia.color}12`,
                borderColor: `${dia.color}30`,
              }}>
              {sinergias.map((s, i) => (
                <p key={i} className="text-xs leading-relaxed" style={{ color: `${dia.color}dd` }}>
                  {s.texto}
                </p>
              ))}
            </div>
          )}

          {/* Temas del día */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {dia.temas.map((t, i) => (
              <span key={i} className="text-[9px] px-2 py-0.5 rounded-full"
                style={{
                  background: `${dia.color}15`,
                  color: dia.color,
                  border: `0.5px solid ${dia.color}30`
                }}>
                {t}
              </span>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setActiveTab('dia')}
              className={`flex-1 py-2 rounded-xl text-xs transition-all ${activeTab === 'dia'
                ? 'bg-white/10 text-white'
                : 'text-white/30 hover:text-white/50'
                }`}
            >
              {dia.emoji} Rituales del día
            </button>
            <button
              onClick={() => setActiveTab('fase')}
              className={`flex-1 py-2 rounded-xl text-xs transition-all ${activeTab === 'fase'
                ? 'bg-white/10 text-white'
                : 'text-white/30 hover:text-white/50'
                }`}
            >
              {moonData.emoji} Rituales de la fase
            </button>
          </div>

          {/* Lista de rituales */}
          <div className="space-y-2">
            {(activeTab === 'dia' ? dia.rituales : fase.rituales).map((ritual, i) => {
              const key = `${activeTab}-${i}`
              const isOpen = expanded === key
              return (
                <div
                  key={key}
                  className="rounded-xl overflow-hidden border border-white/5 cursor-pointer transition-all"
                  style={{ background: isOpen ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)' }}
                  onClick={() => toggleRitual(key)}
                >
                  <div className="flex items-center gap-3 px-3 py-2.5">
                    <span className="text-xl flex-shrink-0">{ritual.emoji}</span>
                    <span className="text-sm text-white/80 flex-1">{ritual.nombre}</span>
                    <span className={`text-white/25 text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                      ▾
                    </span>
                  </div>
                  {isOpen && (
                    <div className="px-4 pb-3 pt-0">
                      <p className="text-white/50 text-xs leading-relaxed border-t border-white/5 pt-2.5">
                        {ritual.descripcion}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Descripción de la fase */}
          <div className="mt-4 pt-4 border-t border-white/5">
            <p className="text-[9px] text-luna-gold tracking-wider uppercase mb-2">
              Energía de la {moonData.name}
            </p>
            <p className="text-white/40 text-xs leading-relaxed">
              {fase.descripcion}
            </p>
            <div className="mt-2 flex items-center gap-1.5">
              <span className="text-[9px] text-white/20 uppercase tracking-wider">Potencia:</span>
              <span className="text-[9px]" style={{ color: dia.color }}>{fase.potencia}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
