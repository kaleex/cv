import { Link, useLocation } from 'react-router-dom'
import { Analytics } from '../utils/analytics'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

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
            Home
          </Link>
          <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''} onClick={() => Analytics.navClick('skills')}>
            Skills
          </Link>
          <Link to="/contact" className={`navbar-cta ${location.pathname === '/contact' ? 'active' : ''}`} onClick={() => Analytics.navClick('contact')}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
