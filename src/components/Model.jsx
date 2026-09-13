import { useState } from 'react'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { model } from '../data/content.js'

export default function Model() {
  const [active, setActive] = useState(0)
  const step = model.steps[active]
  const fill = ((active + 1) / model.steps.length) * 100

  return (
    <section className="section section--model" id="model">
      <div className="shell">
        <SectionHeader
          index="03"
          eyebrow={model.eyebrow}
          title={model.title}
          lead="A sequential process that carries an idea from thesis to a package institutional capital can underwrite."
        />

        <Reveal className="stepper" delay={80}>
          <div className="stepper__track" aria-hidden="true">
            <span className="stepper__fill" style={{ width: `${fill}%` }} />
          </div>

          <div className="stepper__nodes" role="tablist" aria-label="Origination stages">
            {model.steps.map((s, i) => (
              <button
                key={s.n}
                role="tab"
                aria-selected={i === active}
                className={`node ${i === active ? 'is-active' : ''} ${i < active ? 'is-done' : ''}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
              >
                <span className="node__dot" />
                <span className="node__n">Stage {s.n}</span>
                <span className="node__title">{s.title}</span>
              </button>
            ))}
          </div>

          <div className="stepper__panel" key={step.n}>
            <div className="panel__left">
              <span className="panel__ghost" aria-hidden="true">
                {step.n}
              </span>
              <h3 className="panel__title">{step.title}</h3>
              <p className="panel__summary">{step.summary}</p>
            </div>
            <div className="panel__right">
              <p className="panel__body">{step.body}</p>
              <ul className="chips">
                {step.markers.map((m, i) => (
                  <li key={m} style={{ '--reveal-delay': `${i * 70}ms` }}>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
