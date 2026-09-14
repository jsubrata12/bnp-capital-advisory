import Mark from './Mark.jsx'
import { company, disclosure } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <Mark variant="footer" subtitle={company.tagline} />
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
