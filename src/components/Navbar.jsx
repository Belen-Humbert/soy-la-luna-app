import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../hooks/useAuth'

const SECTIONS = [
  { id: 'luna',     label: 'Luna',     emoji: '🌒' },
  { id: 'tarot',    label: 'Tarot',    emoji: '🃏' },
  { id: 'rituales', label: 'Rituales', emoji: '✨' },
  { id: 'eventos',  label: 'Eventos',  emoji: '🔭' },
]

export default function Navbar({ onNotifClick }) {
  const { signOut } = useAuth()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('luna')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)

      // Detectar sección activa según scroll
      const offsets = SECTIONS.map(s => {
        const el = document.getElementById(`section-${s.id}`)
        return { id: s.id, top: el ? el.getBoundingClientRect().top : 9999 }
      })

      const visible = offsets.filter(s => s.top <= 120)
      if (visible.length > 0) {
        setActiveSection(visible[visible.length - 1].id)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(`section-${id}`)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(13,17,23,0.15)'
          : 'rgba(13,17,23,0.95)',
        borderBottom: scrolled
          ? '0.5px solid rgba(201,168,76,0.06)'
          : '0.5px solid rgba(201,168,76,0.25)',
        backdropFilter: scrolled ? 'blur(4px)' : 'blur(12px)',
      }}
    >
      {/* Fila superior: logo + acciones */}
      <div className="flex justify-between items-center px-5 pt-3 pb-1.5">
        <div className="font-serif italic text-luna-gold text-base flex items-center gap-1.5">
          🌙 Soy La Luna
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onNotifClick}
            className="text-white/30 hover:text-luna-gold transition-colors text-base"
          >
            🔔
          </button>
          <button
            onClick={signOut}
            className="text-white/25 text-xs hover:text-white/50 transition-colors"
          >
            Salir
          </button>
        </div>
      </div>

      {/* Fila inferior: links de sección */}
      <div
        className="flex justify-between items-center px-4 pb-2.5 transition-all duration-500"
        style={{ opacity: scrolled ? 0.4 : 1 }}
      >
        {SECTIONS.map(s => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] tracking-wider uppercase transition-all duration-200"
            style={{
              color: activeSection === s.id ? '#c9a84c' : 'rgba(255,255,255,0.35)',
              background: activeSection === s.id ? 'rgba(201,168,76,0.1)' : 'transparent',
              border: activeSection === s.id
                ? '0.5px solid rgba(201,168,76,0.3)'
                : '0.5px solid transparent',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            <span>{s.emoji}</span>
            <span>{s.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
