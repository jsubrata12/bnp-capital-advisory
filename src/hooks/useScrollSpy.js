import { useEffect, useState } from 'react'

/** Tracks which section id currently owns the viewport, plus overall scroll progress. */
export function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const doc = document.documentElement
        const max = doc.scrollHeight - window.innerHeight
        setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)

        const anchor = window.innerHeight * 0.38
        let current = ids[0]
        for (const id of ids) {
          const el = document.getElementById(id)
          if (el && el.getBoundingClientRect().top <= anchor) current = id
        }
        setActive(current)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ids])

  return { active, progress }
}
