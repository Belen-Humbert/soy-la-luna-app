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
    try {
      // Intentar con la imagen de hoy
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
      )
      if (!res.ok) throw new Error('Error NASA API')
      const data = await res.json()

      if (data.media_type === 'image') {
        setApod(data)
      } else {
        // Si hoy es video, buscar las últimas 5 y tomar la primera imagen
        const res2 = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&count=5`
        )
        if (!res2.ok) throw new Error('Error NASA API fallback')
        const items = await res2.json()
        const imageItem = items.find(i => i.media_type === 'image')
        if (imageItem) setApod(imageItem)
        else setError('No image available')
      }
    } catch (e) {
      setError(e.message)
    }
    setLoading(false)
  }

  return { apod, loading, error }
}
