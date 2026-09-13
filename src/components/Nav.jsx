import { useEffect, useState } from 'react'
import { sections } from '../data/content.js'

const links = sections.filter((s) => s.nav)

export default function Nav({ active, progress }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('is-locked', open)
    return () => document.body.classList.remove('is-locked')
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav__inner">
        <a className="mark" href="#top" onClick={() => setOpen(false)}>
          <span className="mark__glyph" aria-hidden="true">
            <svg viewBox="0 0 28 32" fill="none">
              <path d="M4 3h11a6.5 6.5 0 0 1 0 13H4z" stroke="currentColor" strokeWidth="1.6" />
              <path d="M4 16h12.5a6.5 6.5 0 0 1 0 13H4z" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
          <span className="mark__text">
            <strong>BNP Capital Advisory</strong>
            <em>PT Brata Nusa Pratama</em>
          </span>
        </a>

        <nav className="nav__links" aria-label="Sections">
          {links.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'is-active' : undefined}>
              <span className="nav__num">{s.index}</span>
              {s.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--ghost nav__cta" href="#contact">
          Build with us
        </a>

        <button
          className={`burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>

      <div className="nav__progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />

      <div className={`sheet ${open ? 'is-open' : ''}`}>
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} onClick={() => setOpen(false)}>
            <span className="nav__num">{s.index}</span>
            {s.label}
          </a>
        ))}
      </div>
    </header>
  )
}
