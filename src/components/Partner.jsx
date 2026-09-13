import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { partner } from '../data/content.js'

export default function Partner() {
  return (
    <section className="section section--partner" id="partner">
      <div className="shell">
        <SectionHeader index="07" eyebrow={partner.eyebrow} title={partner.title} />

        <div className="partner__grid">
          <div className="partner__body">
            {partner.body.map((p) => (
              <Reveal as="p" key={p} className="lede">
                {p}
              </Reveal>
            ))}
          </div>

          <div className="partner__list">
            <Reveal className="eyebrow" variant="fade">
              Typical partners
            </Reveal>
            <ul>
              {partner.partners.map((p, i) => (
                <Reveal as="li" key={p} variant="fade" delay={i * 60}>
                  <span className="tick" aria-hidden="true" />
                  {p}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
