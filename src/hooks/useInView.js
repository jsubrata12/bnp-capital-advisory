import { useEffect, useRef, useState } from 'react'

export function useInView({ threshold = 0.2, rootMargin = '0px 0px -10% 0px', once = true } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        // An element already scrolled past never intersects, so it would sit
        // at opacity 0 forever — which is what happens when the browser
        // restores scroll position on reload, or on back-navigation. Treat
        // anything above the viewport as already revealed.
        const scrolledPast = entry.boundingClientRect.bottom <= (entry.rootBounds?.top ?? 0)
        if (entry.isIntersecting || scrolledPast) {
          setInView(true)
          if (once) io.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, inView]
}
