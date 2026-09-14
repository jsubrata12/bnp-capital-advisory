import lockup from '../assets/bnp-lockup.webp'
import { company } from '../data/content.js'

/**
 * The logo lockup. The artwork carries its own wordmark, so the name is no
 * longer set in type beside it — that would duplicate it. The file is trimmed
 * to its content box, so the declared height is the visible height.
 *
 * Sizing is deliberate: "ADVISORY" is only 13.9% of the artwork's height, so
 * below roughly 40px it stops being readable. See the height rules in the
 * stylesheet before shrinking it.
 *
 * On ink backgrounds the lockup is reversed to a flat ivory silhouette; the
 * navy wordmark and cube face would otherwise disappear, and the letterforms
 * are transparent knockouts so they survive the treatment.
 */
export default function Mark({ variant = 'nav', subtitle, onClick }) {
  return (
    <a
      className={`mark${variant === 'footer' ? ' mark--footer' : ''}`}
      href="#top"
      onClick={onClick}
      aria-label={`${company.name} — home`}
    >
      <img className="mark__lockup" src={lockup} width="685" height="221" alt="" />
      {subtitle && <span className="mark__sub">{subtitle}</span>}
    </a>
  )
}
