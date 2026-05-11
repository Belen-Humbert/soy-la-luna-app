import { useState, useEffect } from 'react'

const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY || 'DEMO_KEY'

export function useNasaApod() {
  const [apod, setApod] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchApod()
  }, [])

  const fetchApod = async () => {
    // Clave de caché basada en la fecha de hoy
    const today = new Date().toISOString().split('T')[0]
    const cacheKey = `nasa-apod-${today}`

    // Intentar cargar desde caché primero
    try {
      const cached = localStorage.getItem(cacheKey)
      if (cached) {
        setApod(JSON.parse(cached))
        setLoading(false)
        return
      }
    } catch {}

    try {
      // Pedir la imagen de HOY específicamente
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${today}`
      )
      if (!res.ok) throw new Error('Error NASA API')
      const data = await res.json()

      if (data.media_type === 'image') {
        // Guardar en caché para todo el día
        try { localStorage.setItem(cacheKey, JSON.stringify(data)) } catch {}
        setApod(data)
      } else {
        // Hoy es video — buscar la última imagen reciente
        // Probamos los últimos 7 días hasta encontrar una imagen
        let found = false
        for (let i = 1; i <= 7 && !found; i++) {
          const d = new Date()
          d.setDate(d.getDate() - i)
          const dateStr = d.toISOString().split('T')[0]
          try {
            const r2 = await fetch(
              `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${dateStr}`
            )
            if (!r2.ok) continue
            const d2 = await r2.json()
            if (d2.media_type === 'image') {
              try { localStorage.setItem(cacheKey, JSON.stringify(d2)) } catch {}
              setApod(d2)
              found = true
            }
          } catch {}
        }
        if (!found) setError('No image available')
      }
    } catch (e) {
      setError(e.message)
    }
    setLoading(false)
  }

  return { apod, loading, error }
}
