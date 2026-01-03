import { Link, useLocation } from 'react-router-dom'
import { Analytics } from '../utils/analytics'
import './Navbar.css'

interface NavbarProps {
  name: string
}

function Navbar({ name }: NavbarProps) {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={() => Analytics.navClick('home-brand')}>{name}</Link>
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
