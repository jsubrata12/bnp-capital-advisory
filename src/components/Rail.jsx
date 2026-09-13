import { sections } from '../data/content.js'

/** Fixed left survey rail: section ticks with the active label written out. */
export default function Rail({ active }) {
  return (
    <aside className="rail" aria-hidden="true">
      <span className="rail__cap">Index</span>
      <ol className="rail__list">
        {sections.map((s) => (
          <li key={s.id} className={active === s.id ? 'is-active' : undefined}>
            <a href={`#${s.id}`} tabIndex={-1}>
              <i className="rail__tick" />
              <span className="rail__num">{s.index}</span>
              <span className="rail__label">{s.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </aside>
  )
}
