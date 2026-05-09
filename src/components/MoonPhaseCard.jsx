import { useMemo } from 'react'
import { getMoonPhase } from '../lib/moonPhase'
import MoonSVG from './MoonSVG'

// Nombres de días y meses en español
const DIAS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
const MESES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
]

export default function MoonPhaseCard() {
  const today = useMemo(() => new Date(), [])
  const moonData = useMemo(() => getMoonPhase(today), [today])

  const diaSemana = DIAS[today.getDay()]
  const diaNum = today.getDate()
  const mes = MESES[today.getMonth()]
  const anio = today.getFullYear()

  return (
    <div className="relative overflow-hidden rounded-2xl border border-luna-gold/20 bg-gradient-to-b from-[#1e2838]/90 to-[#151d2a]/90 backdrop-blur-sm mx-4 mb-3">

      {/* Fondo con glow sutil según fase */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${moonData.color}88 0%, transparent 70%)`
        }}
      />

      <div className="relative z-10 p-5">
        {/* Fecha */}
        <div className="label-luna mb-4">
          <span>✦</span>
          <span>{diaSemana}, {diaNum} de {mes} de {anio}</span>
        </div>

        {/* Contenido principal */}
        <div className="flex items-center gap-5">
          {/* Luna SVG */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <MoonSVG phase={moonData.phase} size={100} />
            {/* Barra de iluminación */}
            <div className="mt-2 w-[100px]">
              <div className="flex justify-between text-[9px] text-white/30 mb-1">
                <span>Iluminación</span>
                <span>{moonData.illumination}%</span>
              </div>
              <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${moonData.illumination}%`,
                    background: 'linear-gradient(90deg, #c9a84c, #e8d08a)'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Info de la fase */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{moonData.emoji}</span>
              <h2 className="font-serif text-white text-lg leading-tight">{moonData.name}</h2>
            </div>

            <p className="text-white/50 text-xs leading-relaxed mb-3">
              {moonData.description}
            </p>

            {/* Energía del día */}
            <div className="bg-white/5 rounded-xl px-3 py-2">
              <p className="text-[9px] text-luna-gold tracking-wider uppercase mb-1">Energía</p>
              <p className="text-white/70 text-xs">{moonData.energy}</p>
            </div>
          </div>
        </div>

        {/* Ritual del día */}
        <div className="mt-4 pt-4 border-t border-white/5">
          <p className="text-[9px] text-luna-gold tracking-wider uppercase mb-2 flex items-center gap-1.5">
            <span>✨</span> Ritual sugerido
          </p>
          <p className="text-white/50 text-xs leading-relaxed">
            {moonData.ritual}
          </p>
        </div>

        {/* Día del ciclo lunar */}
        <div className="mt-3 flex items-center justify-between">
          <p className="text-[10px] text-white/20">
            Día {moonData.dayOfCycle} del ciclo lunar
          </p>
          <div className="flex gap-0.5">
            {Array.from({ length: 8 }).map((_, i) => {
              const filled = i < Math.round((moonData.phase * 8))
              return (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${filled ? 'bg-luna-gold' : 'bg-white/10'}`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
