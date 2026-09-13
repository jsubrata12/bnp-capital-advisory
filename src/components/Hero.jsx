import Contours from './Contours.jsx'
import Reveal from './Reveal.jsx'
import { company, heroStats } from '../data/content.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__field">
        <Contours />
        <div className="grid-lines" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="hero__inner">
        <Reveal className="hero__eyebrow" variant="fade">
          <span className="dot" />
          {company.legal} · {company.city} · Est. {company.founded}
        </Reveal>

        <h1 className="hero__title">
          <span className="line">
            <span style={{ '--reveal-delay': '80ms' }}>Indonesia has</span>
          </span>
          <span className="line">
            <span style={{ '--reveal-delay': '200ms' }}>opportunity.</span>
          </span>
          <span className="line">
            <span className="accent" style={{ '--reveal-delay': '340ms' }}>
              We make it investable.
            </span>
          </span>
        </h1>

        <div className="hero__base">
          <Reveal as="p" className="hero__lead" delay={520}>
            A proprietary investment and project origination firm, working at the pre-Final
            Investment Decision stage — where attractive concepts must become technically credible,
            commercially viable and institutionally investable.
          </Reveal>

          <Reveal className="hero__actions" delay={640}>
            <a className="btn btn--solid" href="#model">
              Our origination model
            </a>
            <a className="btn btn--text" href="#pillars">
              Investment pillars
            </a>
          </Reveal>
        </div>

        <Reveal className="hero__stats" delay={760}>
          {heroStats.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scrollLabel">Scroll</span>
        <span className="hero__scrollLine" />
      </div>
    </section>
  )
}
