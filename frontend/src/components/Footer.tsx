import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { Analytics } from '../utils/analytics'
import { features } from '../config/features'
import { SunIcon, MoonIcon, ArrowRightIcon, LinkedInIcon, GitHubIcon } from './Icons'
import './Footer.css'

function Footer() {
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const currentYear = new Date().getFullYear()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className={`footer-main ${!features.showCopyright ? 'no-bottom' : ''}`}>
          <div className="footer-brand">
            <span className="footer-name">Alejandro Quílez</span>
            <span className="footer-role">Data Engineer</span>
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

          {/* Theme & Language toggles for mobile */}
          <div className="footer-toggles">
            <button className="footer-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <SunIcon className="icon-md" /> : <MoonIcon className="icon-md" />}
            </button>
            <button className="footer-toggle" onClick={toggleLanguage} aria-label="Toggle language">
              {language === 'en' ? 'ES' : 'EN'}
            </button>
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
