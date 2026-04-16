import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { Analytics } from '../utils/analytics'
import { features } from '../config/features'
import { ArrowRightIcon, LinkedInIcon, GitHubIcon } from './Icons'
import './Footer.css'

function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className={`footer-main ${!features.showCopyright ? 'no-bottom' : ''}`}>
          <div className="footer-brand">
            <span className="footer-name">Alejandro Quílez</span>
            <span className="footer-role">{t.footer.role}</span>
          </div>
          
          <div className="footer-cta">
            <p>{t.footer.ctaText}</p>
            <Link
              to="/contact"
              className="footer-contact-btn"
              onClick={() => Analytics.ctaClick('footer-contact')}
            >
              {t.nav.contact} <ArrowRightIcon className="footer-arrow-icon" />
            </Link>
          </div>

          <div className="footer-social">
            <a
              href="https://linkedin.com/in/alejandro-quílez-asensio-2799a5121"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              onClick={() => Analytics.ctaClick('footer-linkedin')}
            >
              <LinkedInIcon className="social-icon" />
            </a>
            <a
              href="https://github.com/kaleex"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              onClick={() => Analytics.ctaClick('footer-github')}
            >
              <GitHubIcon className="social-icon" />
            </a>
          </div>
        </div>

        {features.showCopyright && (
          <div className="footer-bottom">
            <p>{t.footer.copyright} {currentYear} Alejandro Quílez Asensio. {t.footer.rights}</p>
          </div>
        )}
      </div>
    </footer>
  )
}

export default Footer
