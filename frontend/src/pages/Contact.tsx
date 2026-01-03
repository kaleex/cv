import { Analytics } from '../utils/analytics'
import './Contact.css'

interface ContactProps {
  email: string
  phone: string
  linkedin: string
  github: string
}

function Contact({ email, phone, linkedin, github }: ContactProps) {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Get in Touch</h1>
        <p>I'd love to hear about your project or opportunity</p>
      </header>

      <div className="contact-container">
        <div className="contact-methods">
          <a href={`mailto:${email}`} className="contact-card" onClick={() => Analytics.emailClick()}>
            <span className="contact-icon">📧</span>
            <h3>Email</h3>
            <p>{email}</p>
          </a>

          <a href={`tel:${phone.replace(/\s/g, '')}`} className="contact-card" onClick={() => Analytics.phoneClick()}>
            <span className="contact-icon">📞</span>
            <h3>Phone</h3>
            <p>{phone}</p>
          </a>

          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-card" onClick={() => Analytics.linkedinClick()}>
            <span className="contact-icon">💼</span>
            <h3>LinkedIn</h3>
            <p>View Profile</p>
          </a>

          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="contact-card" onClick={() => Analytics.githubClick()}>
              <span className="contact-icon">💻</span>
              <h3>GitHub</h3>
              <p>View Projects</p>
            </a>
          )}
        </div>

        <div className="contact-message">
          <h2>Let's Build Something Great</h2>
          <p>
            Whether you're looking to modernize your data platform, implement governance at scale, 
            or need expertise in Azure and Databricks — I'm here to help.
          </p>
          <p>
            Feel free to reach out via any of the channels above. I typically respond within 24 hours.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
