import { useEffect, useRef } from 'react'

function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let rafId = null
    let particles = []
    const DPR = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      canvas.width = window.innerWidth * DPR
      canvas.height = window.innerHeight * DPR
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      init()
    }

    const init = () => {
      const count = Math.min(Math.floor(window.innerWidth / 16), 90)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 2 + 0.6,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -(Math.random() * 0.3 + 0.08),
        opacity: Math.random() * 0.5 + 0.15,
        hue: Math.random() > 0.5 ? 275 : 315,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.y < -10) {
          p.y = window.innerHeight + 10
          p.x = Math.random() * window.innerWidth
        }
        if (p.x < -10) p.x = window.innerWidth + 10
        if (p.x > window.innerWidth + 10) p.x = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 90%, 75%, ${p.opacity})`
        ctx.shadowBlur = 8
        ctx.shadowColor = `hsla(${p.hue}, 90%, 70%, 0.8)`
        ctx.fill()
      }
      ctx.shadowBlur = 0

      if (!reduce) {
        rafId = requestAnimationFrame(draw)
      }
    }

    resize()
    draw()

    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return <canvas ref={canvasRef} className="particles" aria-hidden="true" />
}

export default Particles
