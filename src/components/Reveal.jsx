import { useInView } from '../hooks/useInView.js'

/**
 * Scroll-triggered reveal. `variant` picks the transform, `delay` staggers in ms.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  ...rest
}) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${inView ? 'is-in' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Splits a string into per-word spans so display headings can rise in sequence. */
export function RevealWords({ text, as: Tag = 'span', delay = 0, step = 55, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.15 })
  return (
    <Tag ref={ref} className={`words ${inView ? 'is-in' : ''} ${className}`.trim()}>
      {text.split(' ').map((word, i) => (
        <span className="words__mask" key={`${word}-${i}`}>
          <span className="words__word" style={{ '--reveal-delay': `${delay + i * step}ms` }}>
            {word}
          </span>
        </span>
      ))}
    </Tag>
  )
}
