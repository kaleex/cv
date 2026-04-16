import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Analytics } from '../utils/analytics'
import { useLanguage } from '../i18n/LanguageContext'
import { features } from '../config/features'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  const { language, setLanguage, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const handleNavClick = (section: string) => {
    Analytics.navClick(section)
    closeMenu()
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={() => handleNavClick('home-brand')} aria-label="Alejandro Quílez - Home">
          <div className="brand-logo-text">
            <span className="bracket">&lt;</span>
            <span className="initials">AQ</span>
            <span className="bracket">&gt;</span>
          </div>
        </Link>

        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {menuOpen && (
          <div 
            className="navbar-overlay" 
            onClick={closeMenu}
            onTouchStart={closeMenu}
          ></div>
        )}

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => handleNavClick('home')}>
            {t.nav.home}
          </Link>
          <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''} onClick={() => handleNavClick('skills')}>
            {t.nav.skills}
          </Link>
          {features.experience && (
            <Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''} onClick={() => handleNavClick('experience')}>
              {t.nav.experience}
            </Link>
          )}
          {features.projects && (
            <Link to="/repos" className={location.pathname === '/repos' ? 'active' : ''} onClick={() => handleNavClick('repos')}>
              {t.nav.repos}
            </Link>
          )}
          {features.certifications && (
            <Link to="/badges" className={location.pathname === '/badges' ? 'active' : ''} onClick={() => handleNavClick('badges')}>
              {t.nav.badges}
            </Link>
          )}
          {features.blog && (
            <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''} onClick={() => handleNavClick('blog')}>
              {t.nav.blog}
            </Link>
          )}
          {features.card && (
            <Link to="/card" className={location.pathname === '/card' ? 'active' : ''} onClick={() => handleNavClick('card')}>
              {t.nav.card}
            </Link>
          )}
          <Link to="/contact" className={`navbar-cta ${location.pathname === '/contact' ? 'active' : ''}`} onClick={() => handleNavClick('contact')}>
            {t.nav.contact}
          </Link>
          <div className="navbar-toggles">
            <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle language">
              {language === 'en' ? 'EN' : 'ES'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
