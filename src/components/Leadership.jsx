import Reveal from './Reveal.jsx'
import { leadership } from '../data/content.js'

export default function Leadership() {
  return (
    <section className="section section--leadership" id="leadership">
      <div className="shell">
        <div className="lead__grid">
          <Reveal className="lead__card">
            <div className="lead__portrait" aria-hidden="true">
              <span className="lead__initials">SS</span>
              <span className="lead__frame" />
            </div>
            <div className="lead__id">
              <span className="shead__index">06</span>
              <span className="eyebrow">{leadership.eyebrow}</span>
            </div>
          </Reveal>

          <div className="lead__body">
            <Reveal as="h2" className="lead__name" delay={60}>
              {leadership.name}
            </Reveal>
            <Reveal as="p" className="lead__role" delay={120}>
              {leadership.role}
            </Reveal>
            {leadership.body.map((p, i) => (
              <Reveal as="p" key={p} delay={180 + i * 80}>
                {p}
              </Reveal>
            ))}
            <Reveal as="blockquote" className="quote" delay={340}>
              {leadership.quote}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
