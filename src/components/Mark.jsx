import logo from '../assets/bnp-mark.webp'
import { company } from '../data/content.js'

/**
 * The wordmark lockup. The logo file carries its own stacked "BNP CAPITAL
 * ADVISORY" type, but at nav size that would be illegible and would repeat the
 * text beside it, so only the cube monogram is used and the name is set in the
 * page's own typeface. On ink backgrounds the mark is reversed to a solid
 * silhouette — the letterforms are transparent knockouts, so they survive it,
 * whereas the navy face of the cube would otherwise disappear.
 */
export default function Mark({ variant = 'nav', subtitle, onClick }) {
  return (
    <a
      className={`mark${variant === 'footer' ? ' mark--footer' : ''}`}
      href="#top"
      onClick={onClick}
      aria-label={`${company.name} — home`}
    >
      <img className="mark__glyph" src={logo} width="222" height="240" alt="" />
      <span className="mark__text">
        <strong>{company.name}</strong>
        <em>{subtitle}</em>
      </span>
    </a>
  )
}
