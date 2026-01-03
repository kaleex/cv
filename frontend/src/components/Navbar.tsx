import { Link, useLocation } from 'react-router-dom'
import { Analytics } from '../utils/analytics'
import { useLanguage } from '../i18n/LanguageContext'
import { features } from '../config/features'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={() => Analytics.navClick('home-brand')}>
          <svg viewBox="0 0 100 100" className="brand-logo">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#3b82f6'}}/>
                <stop offset="100%" style={{stopColor:'#8b5cf6'}}/>
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="20" fill="url(#grad)"/>
            <text x="50" y="68" fontFamily="Arial, sans-serif" fontSize="45" fontWeight="bold" fill="white" textAnchor="middle">AQ</text>
          </svg>
        </Link>
        <div className="navbar-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => Analytics.navClick('home')}>
            {t.nav.home}
          </Link>
          <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''} onClick={() => Analytics.navClick('skills')}>
            {t.nav.skills}
          </Link>
          {features.projects && (
            <Link to="/repos" className={location.pathname === '/repos' ? 'active' : ''} onClick={() => Analytics.navClick('repos')}>
              {t.nav.repos}
            </Link>
          )}
          {features.certifications && (
            <Link to="/badges" className={location.pathname === '/badges' ? 'active' : ''} onClick={() => Analytics.navClick('badges')}>
              {t.nav.badges}
            </Link>
          )}
          {features.blog && (
            <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''} onClick={() => Analytics.navClick('blog')}>
              {t.nav.blog}
            </Link>
          )}
          <Link to="/contact" className={`navbar-cta ${location.pathname === '/contact' ? 'active' : ''}`} onClick={() => Analytics.navClick('contact')}>
            {t.nav.contact}
          </Link>
          <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle language">
            {language === 'en' ? '🇪🇸' : '🇬🇧'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
