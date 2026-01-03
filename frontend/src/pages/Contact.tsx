import { Analytics } from '../utils/analytics'
import { useLanguage } from '../i18n/LanguageContext'
import './Contact.css'

interface ContactProps {
  email: string
  phone: string
  linkedin: string
  github: string
}

function Contact({ email, phone, linkedin, github }: ContactProps) {
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
            <span className="contact-icon">📧</span>
            <h3>{t.contact.email}</h3>
            <p>{email}</p>
          </a>

          <a href={`tel:${phone.replace(/\s/g, '')}`} className="contact-card" onClick={() => Analytics.phoneClick()}>
            <span className="contact-icon">📞</span>
            <h3>{t.contact.phone}</h3>
            <p>{phone}</p>
          </a>

          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-card" onClick={() => Analytics.linkedinClick()}>
            <span className="contact-icon">💼</span>
            <h3>{t.contact.linkedin}</h3>
            <p>View Profile</p>
          </a>

          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="contact-card" onClick={() => Analytics.githubClick()}>
              <span className="contact-icon">💻</span>
              <h3>{t.contact.github}</h3>
              <p>View Projects</p>
            </a>
          )}
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
