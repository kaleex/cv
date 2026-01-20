import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { EnvelopeIcon, BriefcaseIcon, DocumentArrowDownIcon, InboxIcon, GitHubIcon } from '../components/Icons'
import './Card.css'

function Card() {
  const [isFlipped, setIsFlipped] = useState(false)
  const { t } = useLanguage()

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <main className="card-page">
      <div className="card-container">
        <p className="card-instruction">{t.card?.instruction || 'Click to flip'}</p>
        
        <div 
          className={`business-card ${isFlipped ? 'flipped' : ''}`}
          onClick={handleFlip}
        >
          {/* Front Side */}
          <div className="card-face card-front">
            <div className="card-logo">
              <span className="bracket">&lt;</span>
              <span className="initials">AQ</span>
              <span className="bracket">&gt;</span>
            </div>
            <div className="card-info">
              <h1 className="card-name">Alejandro Quilez</h1>
              <p className="card-title">Senior Data Engineer</p>
              <p className="card-tagline">{t.card?.tagline || 'Data Platforms That Actually Work'}</p>
            </div>
            <div className="card-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-dots">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="card-face card-back">
            <div className="card-contact">
              <a href="mailto:alexquilezz@hotmail.com" className="contact-item" onClick={(e) => e.stopPropagation()}>
                <EnvelopeIcon className="contact-icon" />
                <span className="contact-text">alexquilezz@hotmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/alejandro-quílez-asensio-2799a5121" target="_blank" rel="noopener noreferrer" className="contact-item" onClick={(e) => e.stopPropagation()}>
                <BriefcaseIcon className="contact-icon" />
                <span className="contact-text">LinkedIn</span>
              </a>
              <a href="https://github.com/kaleex" target="_blank" rel="noopener noreferrer" className="contact-item" onClick={(e) => e.stopPropagation()}>
                <GitHubIcon className="contact-icon" />
                <span className="contact-text">GitHub</span>
              </a>
            </div>
            <div className="card-qr-hint">
              <span className="flip-hint">{t.card?.flipBack || 'Tap to flip back'}</span>
            </div>
          </div>
        </div>

        <div className="card-actions">
          <a href="/cv.pdf" download="CV-Alejandro-Quilez.pdf" className="card-action-btn">
            <DocumentArrowDownIcon className="card-action-icon" /> {t.card?.downloadCV || 'Download CV'}
          </a>
          <a href="/contact" className="card-action-btn">
            <InboxIcon className="card-action-icon" /> {t.card?.contact || 'Contact'}
          </a>
        </div>
      </div>
    </main>
  )
}

export default Card
