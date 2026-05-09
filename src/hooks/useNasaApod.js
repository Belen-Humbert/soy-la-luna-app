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
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
      )
      if (!res.ok) throw new Error('Error NASA API')
      const data = await res.json()
      setApod(data)
    } catch (e) {
      setError(e.message)
    }
    setLoading(false)
  }

  return { apod, loading, error }
}
