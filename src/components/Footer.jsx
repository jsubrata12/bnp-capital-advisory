import { company, disclosure } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <a className="mark mark--footer" href="#top">
            <span className="mark__glyph" aria-hidden="true">
              <svg viewBox="0 0 28 32" fill="none">
                <path d="M4 3h11a6.5 6.5 0 0 1 0 13H4z" stroke="currentColor" strokeWidth="1.6" />
                <path d="M4 16h12.5a6.5 6.5 0 0 1 0 13H4z" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
            <span className="mark__text">
              <strong>BNP Capital Advisory</strong>
              <em>{company.tagline}</em>
            </span>
          </a>
          <a className="footer__back" href="#top">
            Back to top
          </a>
        </div>

        <div className="disclosure">
          <span className="eyebrow">{disclosure.title}</span>
          <p className="disclosure__statement">{disclosure.statement}</p>
          <p className="disclosure__id">{disclosure.id}</p>
          <p className="disclosure__note">{disclosure.note}</p>
        </div>

        <div className="footer__base">
          <span>
            © {new Date().getFullYear()} {company.legal}
          </span>
          <span>
            {company.address[1]}, Jakarta 12870 · Indonesia
          </span>
          <span>{company.domain}</span>
        </div>
      </div>
    </footer>
  )
}
