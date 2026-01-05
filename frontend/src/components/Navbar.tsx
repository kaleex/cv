import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Analytics } from '../utils/analytics'
import { useLanguage } from '../i18n/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { features } from '../config/features'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [navbarVisible, setNavbarVisible] = useState(true)
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
  )

  // Detectar móvil
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Mostrar/ocultar navbar en móvil al hacer scroll
  useEffect(() => {
    if (!isMobile) {
      setNavbarVisible(true)
      return
    }

    // En móvil, ocultar inicialmente si estamos en la página principal
    if (location.pathname === '/') {
      setNavbarVisible(false)
    } else {
      setNavbarVisible(true)
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Mostrar navbar si se ha hecho scroll hacia abajo (más de 50px)
      if (currentScrollY > 50) {
        setNavbarVisible(true)
      } else if (location.pathname === '/') {
        // Ocultar si volvemos arriba en la página principal
        setNavbarVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile, location.pathname])

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
    <nav className={`navbar ${!navbarVisible ? 'navbar-hidden' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={() => handleNavClick('home-brand')} aria-label="Alejandro Quílez - Home">
          <svg viewBox="0 0 100 100" className="brand-logo" aria-hidden="true">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#60a5fa'}}/>
                <stop offset="100%" style={{stopColor:'#a78bfa'}}/>
              </linearGradient>
            </defs>
            <rect x="5" y="5" width="90" height="90" rx="16" fill="#0f172a"/>
            <path d="M20 30 L10 50 L20 70" stroke="url(#grad)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M80 30 L90 50 L80 70" stroke="url(#grad)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <text x="50" y="58" fontFamily="monospace" fontSize="28" fontWeight="600" fill="url(#grad)" textAnchor="middle">AQ</text>
          </svg>
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
          <Link to="/contact" className={`navbar-cta ${location.pathname === '/contact' ? 'active' : ''}`} onClick={() => handleNavClick('contact')}>
            {t.nav.contact}
          </Link>
          <div className="navbar-toggles">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
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
