import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { governance } from '../data/content.js'

export default function Governance() {
  return (
    <section className="section section--governance" id="governance">
      <div className="shell">
        <SectionHeader index="09" eyebrow={governance.eyebrow} title={governance.title} />

        <div className="gov__grid">
          <div className="gov__body">
            {governance.body.map((p) => (
              <Reveal as="p" key={p} className="lede">
                {p}
              </Reveal>
            ))}
            <Reveal className="stamp" delay={140}>
              <span className="stamp__line">Proprietary balance sheet</span>
              <span className="stamp__line">No public funds</span>
              <span className="stamp__line">Principal investor</span>
            </Reveal>
          </div>

          <div className="gov__principles">
            <Reveal className="eyebrow" variant="fade">
              Our investment approach emphasizes
            </Reveal>
            <ul>
              {governance.principles.map((p, i) => (
                <Reveal as="li" key={p} variant="right" delay={i * 65}>
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
