import { useEffect, useRef } from 'react'

/**
 * Slow-drifting topographic contour field — an architectural survey drawing
 * rather than decoration. Static single frame when reduced motion is requested.
 */
export default function Contours({ lines = 26 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let w = 0
    let h = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h)
      const gap = h / (lines + 1)
      for (let i = 0; i <= lines; i++) {
        const baseY = gap * (i + 0.5)
        const depth = i / lines
        ctx.beginPath()
        for (let x = 0; x <= w; x += 6) {
          const nx = x / w
          const y =
            baseY +
            Math.sin(nx * 3.1 + i * 0.38 + t * 0.00016) * (26 + depth * 44) +
            Math.sin(nx * 7.7 - i * 0.22 + t * 0.00011) * (10 + depth * 18) +
            Math.sin(nx * 13.3 + i * 0.11 - t * 0.00007) * 5
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.strokeStyle = `rgba(20, 24, 28, ${0.05 + depth * 0.11})`
        ctx.lineWidth = i % 5 === 0 ? 1.1 : 0.6
        ctx.stroke()
      }
    }

    const loop = (t) => {
      draw(t)
      raf = requestAnimationFrame(loop)
    }

    const onResize = () => {
      resize()
      if (reduce) draw(0)
    }

    resize()
    if (reduce) draw(0)
    else raf = requestAnimationFrame(loop)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [lines])

  return <canvas className="contours" ref={canvasRef} aria-hidden="true" />
}
