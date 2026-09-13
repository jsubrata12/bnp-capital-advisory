import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { about } from '../data/content.js'

export default function About() {
  return (
    <section className="section section--about" id="about">
      <div className="shell">
        <SectionHeader index="05" eyebrow={about.eyebrow} title="Two decades of Indonesian cycles." />

        <div className="about__grid">
          <div className="about__body">
            {about.body.map((p, i) => (
              <Reveal as="p" key={p} delay={i * 80} className={i === 0 ? 'lede' : undefined}>
                {p}
              </Reveal>
            ))}
            <Reveal className="pull pull--tight" delay={120}>
              <p>{about.title}</p>
            </Reveal>
          </div>

          <ol className="timeline">
            {about.eras.map((e, i) => (
              <Reveal as="li" key={e.year} variant="right" delay={i * 90}>
                <span className="timeline__year">{e.year}</span>
                <span className="timeline__label">{e.label}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
