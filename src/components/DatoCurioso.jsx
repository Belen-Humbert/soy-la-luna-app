import { useMemo } from 'react'
import { getDatoCuriosoDelDia } from '../lib/datosCuriosos'

export default function DatoCurioso() {
  const dato = useMemo(() => getDatoCuriosoDelDia(new Date()), [])

  return (
    <div className="mx-4 mb-3">
      <div className="relative overflow-hidden rounded-2xl border border-luna-gold/20 bg-gradient-to-b from-[#1e2838]/90 to-[#151d2a]/90 backdrop-blur-sm">

        {/* Glow sutil */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, #c9a84c60 0%, transparent 70%)' }} />

        <div className="relative z-10 p-5">
          <div className="label-luna mb-3">
            <span>🔭</span> Dato curioso del día
          </div>

          <div className="flex gap-3 items-start">
            <span className="text-3xl flex-shrink-0 mt-0.5">{dato.emoji}</span>
            <p className="text-white/70 text-sm leading-relaxed">
              {dato.texto}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
