import { useState } from 'react'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { pillars } from '../data/content.js'

export default function Pillars() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section section--pillars" id="pillars">
      <div className="shell">
        <SectionHeader
          index="04"
          eyebrow={pillars.eyebrow}
          title={pillars.title}
          lead="Each pillar sits where commercial return and industrial necessity overlap."
        />

        <div className="pillars">
          {pillars.items.map((p, i) => {
            const isOpen = open === i
            return (
              <Reveal
                key={p.n}
                className={`pillar ${isOpen ? 'is-open' : ''}`}
                variant="fade"
                delay={i * 60}
              >
                <button
                  className="pillar__head"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="pillar__n">{p.n}</span>
                  <span className="pillar__title">{p.title}</span>
                  <span className="pillar__kicker">{p.kicker}</span>
                  <span className="pillar__sign" aria-hidden="true" />
                </button>
                <div className="pillar__body">
                  <div className="pillar__bodyInner">
                    {p.body.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
