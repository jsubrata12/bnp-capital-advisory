import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { thesis } from '../data/content.js'

export default function Thesis() {
  return (
    <section className="section section--thesis" id="thesis">
      <div className="shell">
        <SectionHeader index="01" eyebrow={thesis.eyebrow} title="Capital is not the constraint." />

        <div className="thesis__grid">
          <div className="thesis__body">
            {thesis.body.map((p, i) => (
              <Reveal as="p" key={p} className={i === 0 ? 'lede' : undefined} delay={i * 90}>
                {p}
              </Reveal>
            ))}
          </div>

          <Reveal className="mandate" delay={120}>
            <span className="eyebrow">Our role is simple</span>
            <ol className="mandate__list">
              {thesis.mandate.map((step, i) => (
                <li key={step} style={{ '--reveal-delay': `${200 + i * 110}ms` }}>
                  <span className="mandate__n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="mandate__text">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal className="note" delay={80}>
          <span className="note__bar" />
          <p>{thesis.note}</p>
        </Reveal>
      </div>
    </section>
  )
}
