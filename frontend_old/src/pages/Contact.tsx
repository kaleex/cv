import { Analytics } from '../utils/analytics'
import { useLanguage } from '../i18n/LanguageContext'
import { EnvelopeIcon, BriefcaseIcon, CodeBracketIcon, DocumentArrowDownIcon } from '../components/Icons'
import './Contact.css'

interface ContactProps {
  email: string
  linkedin: string
  github: string
}

function Contact({ email, linkedin, github }: ContactProps) {
  const { t } = useLanguage()

  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>{t.contact.title}</h1>
        <p>{t.contact.subtitle}</p>
      </header>

      <div className="contact-container">
        <div className="contact-methods">
          <a href={`mailto:${email}`} className="contact-card" onClick={() => Analytics.emailClick()}>
            <EnvelopeIcon className="contact-icon" />
            <h3>{t.contact.email}</h3>
            <p>{email}</p>
          </a>

          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-card" onClick={() => Analytics.linkedinClick()}>
            <BriefcaseIcon className="contact-icon" />
            <h3>{t.contact.linkedin}</h3>
            <p>View Profile</p>
          </a>

          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="contact-card" onClick={() => Analytics.githubClick()}>
              <CodeBracketIcon className="contact-icon" />
              <h3>{t.contact.github}</h3>
              <p>View Projects</p>
            </a>
          )}

          <a href="/cv.pdf" download="CV-Alejandro-Quilez.pdf" className="contact-card cv-download" onClick={() => Analytics.ctaClick('cv-download-contact')}>
            <DocumentArrowDownIcon className="contact-icon" />
            <h3>{t.contact.downloadCV}</h3>
            <p>{t.contact.downloadCVSub}</p>
          </a>
        </div>

        <div className="contact-message">
          <h2>{t.cta.title}</h2>
          <p>
            {t.cta.text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
