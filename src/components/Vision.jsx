import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { vision } from '../data/content.js'

export default function Vision() {
  return (
    <section className="section section--vision" id="vision">
      <div className="shell">
        <SectionHeader index="10" eyebrow={vision.eyebrow} title={vision.title} />

        <div className="vision__body">
          {vision.body.map((p) => (
            <Reveal as="p" key={p} className="lede">
              {p}
            </Reveal>
          ))}
        </div>

        <div className="pairs">
          {vision.pairs.map(([a, b], i) => (
            <Reveal className="pair" key={a} variant="fade" delay={i * 80}>
              <span className="pair__a">{a}</span>
              <span className="pair__link" aria-hidden="true">
                <span className="pair__line" />
                <span className="pair__plus">with</span>
                <span className="pair__line" />
              </span>
              <span className="pair__b">{b}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
