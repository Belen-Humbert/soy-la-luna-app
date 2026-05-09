import { useEffect, useRef } from 'react'

export default function StarsCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const stars = Array.from({ length: 140 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.3 + 0.2,
      baseOpacity: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.003 + 0.001,
      phase: Math.random() * Math.PI * 2,
    }))

    // Algunas constelaciones simples (líneas entre puntos fijos)
    const constellationPoints = [
      { x: 0.1, y: 0.15 }, { x: 0.15, y: 0.12 }, { x: 0.22, y: 0.18 }, { x: 0.18, y: 0.25 },
      { x: 0.75, y: 0.08 }, { x: 0.82, y: 0.12 }, { x: 0.78, y: 0.2 },
      { x: 0.6, y: 0.6 }, { x: 0.65, y: 0.55 }, { x: 0.72, y: 0.58 }, { x: 0.68, y: 0.65 },
      { x: 0.3, y: 0.7 }, { x: 0.35, y: 0.65 }, { x: 0.4, y: 0.72 },
    ]
    const constellationLines = [
      [0,1],[1,2],[2,3],[3,0],
      [4,5],[5,6],[6,4],
      [7,8],[8,9],[9,10],[10,7],
      [11,12],[12,13],
    ]

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function draw(t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Constelaciones
      ctx.strokeStyle = 'rgba(201,168,76,0.08)'
      ctx.lineWidth = 0.5
      constellationLines.forEach(([a, b]) => {
        const pa = constellationPoints[a]
        const pb = constellationPoints[b]
        ctx.beginPath()
        ctx.moveTo(pa.x * canvas.width, pa.y * canvas.height)
        ctx.lineTo(pb.x * canvas.width, pb.y * canvas.height)
        ctx.stroke()
      })

      // Puntos de constelación
      constellationPoints.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x * canvas.width, p.y * canvas.height, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(201,168,76,0.4)'
        ctx.fill()
      })

      // Estrellas
      stars.forEach(s => {
        const opacity = s.baseOpacity * (0.6 + 0.4 * Math.sin(t * s.speed * 1000 + s.phase))
        ctx.beginPath()
        ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${opacity})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="stars-canvas" />
}
