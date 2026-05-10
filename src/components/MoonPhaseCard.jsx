import { useMemo, useState } from 'react'
import { getMoonPhase, getDatosAstronomicosDeLuna } from '../lib/moonPhase'
import MoonSVG from './MoonSVG'

const DIAS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

function DatoTecnico({ label, valor, sub }) {
  return (
    <div className="bg-white/5 rounded-xl px-3 py-2.5 flex flex-col">
      <span className="text-[9px] text-luna-gold uppercase tracking-wider mb-0.5">{label}</span>
      <span className="text-white text-sm font-medium">{valor}</span>
      {sub && <span className="text-white/30 text-[10px] mt-0.5">{sub}</span>}
    </div>
  )
}

export default function MoonPhaseCard() {
  const [showCientifico, setShowCientifico] = useState(false)
  const today = useMemo(() => new Date(), [])
  const moonData = useMemo(() => getMoonPhase(today), [today])
  const datosAstro = useMemo(() => getDatosAstronomicosDeLuna(today), [today])

  const diaSemana = DIAS[today.getDay()]
  const diaNum = today.getDate()
  const mes = MESES[today.getMonth()]
  const anio = today.getFullYear()

  return (
    <div className="relative overflow-hidden rounded-2xl border border-luna-gold/20 bg-gradient-to-b from-[#1e2838]/90 to-[#151d2a]/90 backdrop-blur-sm mx-4 mb-3">

      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 70% 50%, ${moonData.color}88 0%, transparent 70%)` }} />

      <div className="relative z-10 p-5">
        {/* Fecha */}
        <div className="label-luna mb-4">
          <span>✦</span>
          <span>{diaSemana}, {diaNum} de {mes} de {anio}</span>
        </div>

        {/* Superluna / Microluna badge */}
        {datosAstro.tipoDistancia && (
          <div className="mb-3 px-3 py-2 rounded-xl border text-xs"
            style={{ background: 'rgba(201,168,76,0.1)', borderColor: 'rgba(201,168,76,0.3)', color: '#c9a84c' }}>
            {datosAstro.tipoDistancia.tipo} · {datosAstro.tipoDistancia.descripcion}
          </div>
        )}

        {/* Contenido principal */}
        <div className="flex items-center gap-5">
          <div className="flex-shrink-0 flex flex-col items-center">
            <MoonSVG phase={moonData.phase} size={100} />
            <div className="mt-2 w-[100px]">
              <div className="flex justify-between text-[9px] text-white/30 mb-1">
                <span>Iluminación</span>
                <span>{moonData.illumination}%</span>
              </div>
              <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-1000"
                  style={{ width: `${moonData.illumination}%`, background: 'linear-gradient(90deg, #c9a84c, #e8d08a)' }} />
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{moonData.emoji}</span>
              <h2 className="font-serif text-white text-lg leading-tight">{moonData.name}</h2>
            </div>

            <p className="text-white/50 text-xs leading-relaxed mb-3">
              {moonData.description}
            </p>

            {/* Constelación */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">{datosAstro.constelacion.emoji}</span>
              <div>
                <p className="text-[9px] text-luna-gold uppercase tracking-wider">Constelación</p>
                <p className="text-white/70 text-xs">Luna en {datosAstro.constelacion.nombre}</p>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl px-3 py-2">
              <p className="text-[9px] text-luna-gold tracking-wider uppercase mb-1">Energía</p>
              <p className="text-white/70 text-xs">{moonData.energy}</p>
            </div>
          </div>
        </div>

        {/* Ritual */}
        <div className="mt-4 pt-4 border-t border-white/5">
          <p className="text-[9px] text-luna-gold tracking-wider uppercase mb-2 flex items-center gap-1.5">
            <span>✨</span> Ritual sugerido
          </p>
          <p className="text-white/50 text-xs leading-relaxed">{moonData.ritual}</p>
        </div>

        {/* Toggle datos científicos */}
        <button
          onClick={() => setShowCientifico(!showCientifico)}
          className="mt-4 w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-white/5 hover:bg-white/8 border border-white/8 transition-all text-xs text-white/40 hover:text-white/60"
        >
          <span>🔭</span>
          {showCientifico ? 'Ocultar datos científicos ▲' : 'Ver datos científicos ▼'}
        </button>

        {/* Datos científicos expandibles */}
        {showCientifico && (
          <div className="mt-3 animate-fade-in">
            <p className="text-[9px] text-luna-gold uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>🔭</span> Datos astronómicos en tiempo real
            </p>

            <div className="grid grid-cols-2 gap-2 mb-2">
              <DatoTecnico
                label="Distancia"
                valor={`${datosAstro.distanciaKm} km`}
                sub={datosAstro.esCercana ? 'Más cerca de lo normal' : datosAstro.esLejana ? 'Más lejos de lo normal' : 'Distancia media'}
              />
              <DatoTecnico
                label="Velocidad orbital"
                valor={`${datosAstro.velocidadKms} km/s`}
                sub="Respecto a la Tierra"
              />
              <DatoTecnico
                label="Diámetro aparente"
                valor={`${datosAstro.diametroAngular}'`}
                sub="Arcominutos en el cielo"
              />
              <DatoTecnico
                label="Fuerza mareal"
                valor={`${datosAstro.fuerzaMareal}%`}
                sub="Relativa a la media"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <DatoTecnico
                label="Próxima luna llena"
                valor={datosAstro.diasHastaLlena === 0 ? '¡Hoy!' : `En ${datosAstro.diasHastaLlena} días`}
                sub={datosAstro.diasHastaLlena === 0 ? 'Máxima energía lunar' : undefined}
              />
              <DatoTecnico
                label="Próxima luna nueva"
                valor={datosAstro.diasHastaNueva === 0 ? '¡Hoy!' : `En ${datosAstro.diasHastaNueva} días`}
                sub={datosAstro.diasHastaNueva === 0 ? 'Nuevo ciclo lunar' : undefined}
              />
            </div>

            <p className="text-[9px] text-white/20 mt-3 leading-relaxed text-center">
              Calculado con mecánica orbital real · Ciclo sinódico 29.53 días
            </p>
          </div>
        )}

        {/* Día del ciclo */}
        <div className="mt-3 flex items-center justify-between">
          <p className="text-[10px] text-white/20">Día {moonData.dayOfCycle} del ciclo lunar</p>
          <div className="flex gap-0.5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i < Math.round(moonData.phase * 8) ? 'bg-luna-gold' : 'bg-white/10'}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
