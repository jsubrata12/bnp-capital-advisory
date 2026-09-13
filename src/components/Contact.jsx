import Reveal, { RevealWords } from './Reveal.jsx'
import { company, contact } from '../data/content.js'

export default function Contact() {
  return (
    <section className="section section--contact" id="contact">
      <div className="shell">
        <Reveal className="shead__meta" variant="fade">
          <span className="shead__index">11</span>
          <span className="rule" />
          <span className="eyebrow">{contact.eyebrow}</span>
        </Reveal>

        <RevealWords as="h2" className="contact__title" text={contact.title} delay={60} step={90} />

        <div className="contact__grid">
          <Reveal as="p" className="contact__lede" delay={120}>
            {contact.body}
          </Reveal>

          <div className="contact__details">
            <Reveal className="card" delay={160}>
              <span className="eyebrow">Office</span>
              <p className="card__strong">
                {company.name}
                <br />
                <em>{company.legal}</em>
              </p>
              <address>
                {company.address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
            </Reveal>

            <Reveal className="card" delay={240}>
              <span className="eyebrow">Enquiries</span>
              <a className="card__link" href={`mailto:${company.email}`}>
                {company.email}
              </a>
              <a className="card__link" href="https://bnp-capital.com" rel="noreferrer">
                {company.domain}
              </a>
              <a className="btn btn--solid card__btn" href={`mailto:${company.email}`}>
                Start a conversation
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
