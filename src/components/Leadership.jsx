import Reveal from './Reveal.jsx'
import { leadership } from '../data/content.js'
import portrait from '../assets/sony-subrata.webp'

export default function Leadership() {
  return (
    <section className="section section--leadership" id="leadership">
      <div className="shell">
        <div className="lead__grid">
          <Reveal className="lead__card">
            <figure className="lead__portrait">
              <img
                className="lead__img"
                src={portrait}
                width="1200"
                height="1274"
                loading="lazy"
                decoding="async"
                alt={`${leadership.name}, ${leadership.role}`}
              />
              <span className="lead__frame" aria-hidden="true" />
            </figure>
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
