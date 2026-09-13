import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { edge } from '../data/content.js'

export default function Edge() {
  return (
    <section className="section section--edge" id="edge">
      <div className="shell">
        <SectionHeader index="02" eyebrow={edge.eyebrow} title={edge.title} />

        <div className="edge__grid">
          <div className="edge__body">
            {edge.body.map((p) => (
              <Reveal as="p" key={p} className="lede">
                {p}
              </Reveal>
            ))}
          </div>

          <div className="edge__approach">
            <Reveal className="eyebrow" variant="fade">
              Our approach combines
            </Reveal>
            <ul className="ledger">
              {edge.approach.map((item, i) => (
                <Reveal as="li" key={item} variant="right" delay={i * 70}>
                  <span className="ledger__n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="ledger__text">{item}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <Reveal className="pull" delay={60}>
          <p>{edge.pull}</p>
        </Reveal>
      </div>
    </section>
  )
}
