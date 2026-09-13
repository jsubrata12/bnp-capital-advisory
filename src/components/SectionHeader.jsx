import Reveal, { RevealWords } from './Reveal.jsx'

export default function SectionHeader({ index, eyebrow, title, lead, align = 'left' }) {
  return (
    <header className={`shead shead--${align}`}>
      <Reveal className="shead__meta" variant="fade">
        <span className="shead__index">{index}</span>
        <span className="rule" />
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      {title && <RevealWords as="h2" className="shead__title" text={title} delay={60} />}
      {lead && (
        <Reveal as="p" className="shead__lead" delay={180}>
          {lead}
        </Reveal>
      )}
    </header>
  )
}
