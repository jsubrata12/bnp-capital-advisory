import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { derisk } from '../data/content.js'

export default function Derisk() {
  return (
    <section className="section section--derisk band" id="derisk">
      <div className="shell">
        <SectionHeader
          index="08"
          eyebrow={derisk.eyebrow}
          title={derisk.title}
          lead={derisk.body}
        />

        <div className="matrix">
          {derisk.items.map((item, i) => (
            <Reveal className="cell" key={item} variant="fade" delay={i * 55}>
              <span className="cell__n">{String(i + 1).padStart(2, '0')}</span>
              <span className="cell__label">{item}</span>
              <span className="cell__bar" aria-hidden="true" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
