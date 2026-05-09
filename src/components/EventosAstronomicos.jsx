import { useMemo, useState } from 'react'
import { getProximosEventos, formatFecha } from '../lib/eventosAstronomicos'
import { useNasaApod } from '../hooks/useNasaApod'

const CATEGORIA_CONFIG = {
  luna: { color: '#a0b4d0', label: 'Lunar' },
  eclipse: { color: '#e8a4b0', label: 'Eclipse' },
  meteoros: { color: '#c9a84c', label: 'Meteoros' },
  especial: { color: '#e8d08a', label: 'Especial' },
}

function DaysUntilBadge({ days }) {
  if (days === 0) return (
    <span className="text-[10px] px-2.5 py-1 rounded-full bg-luna-rose/20 text-luna-rose border border-luna-rose/30 whitespace-nowrap">
      ¡Hoy!
    </span>
  )
  if (days === 1) return (
    <span className="text-[10px] px-2.5 py-1 rounded-full bg-luna-gold/20 text-luna-gold border border-luna-gold/30 whitespace-nowrap">
      Mañana
    </span>
  )
  if (days <= 7) return (
    <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/10 text-white/70 border border-white/10 whitespace-nowrap">
      En {days} días
    </span>
  )
  if (days <= 30) return (
    <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-white/40 border border-white/5 whitespace-nowrap">
      En {days} días
    </span>
  )
  // Más de un mes — mostrar en semanas o meses
  if (days < 60) return (
    <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-white/30 border border-white/5 whitespace-nowrap">
      En {Math.round(days / 7)} semanas
    </span>
  )
  return (
    <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-white/25 border border-white/5 whitespace-nowrap">
      En {Math.round(days / 30)} meses
    </span>
  )
}

export default function EventosAstronomicos() {
  const [showAll, setShowAll] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const { apod, loading: apodLoading } = useNasaApod()

  const eventos = useMemo(() => getProximosEventos(new Date(), 12), [])
  const visibles = showAll ? eventos : eventos.slice(0, 4)

  const nextEvent = eventos[0]

  return (
    <div className="mx-4 mb-3 space-y-3">

      {/* Próximo evento destacado */}
      {nextEvent && (
        <div className="relative overflow-hidden rounded-2xl border border-luna-rose/25 bg-gradient-to-br from-[#2a1e2e]/90 to-[#151d2a]/90 backdrop-blur-sm p-5">
          <div className="absolute inset-0 opacity-15 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 30% 50%, #e8a4b060 0%, transparent 65%)' }} />

          <div className="relative z-10">
            <div className="label-luna mb-3">
              <span>🔭</span> Próximo evento cósmico
            </div>

            <div className="flex items-center gap-4">
              <div className="text-center flex-shrink-0 bg-white/5 rounded-xl p-3 min-w-[56px]">
                <div className="font-serif text-2xl text-luna-rose leading-none">
                  {formatFecha(nextEvent.fecha).dia}
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-wider mt-1">
                  {formatFecha(nextEvent.fecha).mes}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{nextEvent.emoji}</span>
                  <h3 className="font-serif text-white text-base leading-tight">
                    {nextEvent.tipo}
                  </h3>
                </div>
                <p className="text-white/45 text-xs leading-relaxed line-clamp-2">
                  {nextEvent.descripcion}
                </p>
                <div className="mt-2">
                  <DaysUntilBadge days={nextEvent.daysUntil} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lista de eventos */}
      <div className="relative overflow-hidden rounded-2xl border border-luna-gold/20 bg-gradient-to-b from-[#1e2838]/90 to-[#151d2a]/90 backdrop-blur-sm">
        <div className="p-5">
          <div className="label-luna mb-4">
            <span>✦</span> Calendario cósmico
          </div>

          <div className="space-y-1">
            {visibles.map((evento, i) => {
              const config = CATEGORIA_CONFIG[evento.categoria] || CATEGORIA_CONFIG.luna
              const fecha = formatFecha(evento.fecha)
              const isSelected = selectedEvent === i

              return (
                <div
                  key={i}
                  className="rounded-xl cursor-pointer transition-all duration-200"
                  style={{ background: isSelected ? 'rgba(255,255,255,0.06)' : 'transparent' }}
                  onClick={() => setSelectedEvent(isSelected ? null : i)}
                >
                  <div className="flex items-center gap-3 px-3 py-2.5">
                    {/* Fecha compacta */}
                    <div className="text-center min-w-[32px] flex-shrink-0">
                      <div className="text-sm font-medium" style={{ color: config.color }}>
                        {fecha.dia}
                      </div>
                      <div className="text-[9px] text-white/25 uppercase">
                        {fecha.mes}
                      </div>
                    </div>

                    <span className="text-lg flex-shrink-0">{evento.emoji}</span>

                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-white/80 truncate">{evento.tipo}</div>
                      {evento.signo && (
                        <div className="text-[10px] text-white/30 mt-0.5">en {evento.signo}</div>
                      )}
                    </div>

                    <DaysUntilBadge days={evento.daysUntil} />
                  </div>

                  {/* Detalle expandido */}
                  {isSelected && (
                    <div className="px-4 pb-3 border-t border-white/5 pt-2 animate-fade-in">
                      <p className="text-white/50 text-xs leading-relaxed mb-2">
                        {evento.descripcion}
                      </p>
                      {/* Duración del evento */}
                      {evento.duracion && (
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="text-[10px] text-white/25">⏱ Duración:</span>
                          <span className="text-[10px]" style={{ color: config.color }}>{evento.duracion}</span>
                        </div>
                      )}
                      {evento.zhr && (
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="text-[10px] text-white/25">⭐ Intensidad:</span>
                          <span className="text-[10px]" style={{ color: config.color }}>hasta {evento.zhr} meteoros/hora</span>
                        </div>
                      )}
                      {evento.visible && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] text-white/25">📍 Visible desde:</span>
                          <span className="text-[10px] text-white/40">{evento.visible}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {eventos.length > 4 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="w-full mt-3 py-2 text-xs text-white/30 hover:text-luna-gold transition-colors border-t border-white/5 pt-3"
            >
              {showAll ? 'Ver menos ▲' : `Ver todos los eventos (${eventos.length}) ▼`}
            </button>
          )}
        </div>
      </div>

      {/* NASA imagen del día */}
      {!apodLoading && apod && apod.media_type === 'image' && (
        <div className="relative overflow-hidden rounded-2xl border border-luna-gold/20 bg-[#1e2838]/90 backdrop-blur-sm">
          <div className="label-luna p-4 pb-3">
            <span>🚀</span> NASA · Astronomy Picture of the Day
          </div>
          <div className="mx-4 rounded-xl overflow-hidden mx-auto" style={{ aspectRatio: '1/1', maxWidth: '400px' }}>
            <img src={apod.hdurl || apod.url} alt={apod.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-4 pt-3">
            <h4 className="font-serif text-white text-sm mb-2">{apod.title}</h4>
            <p className="text-white/40 text-[11px] leading-relaxed">{apod.explanation}</p>
            <p className="text-white/20 text-[10px] mt-2">
              {apod.date} · {apod.copyright ? `© ${apod.copyright}` : 'NASA / Public Domain'}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
