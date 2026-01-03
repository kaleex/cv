import { useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import { trackPageView, resetScrollTracking, Analytics } from './utils/analytics'
import * as portfolio from './data/portfolio'
import './App.css'

function Home() {
  return (
    <div className="portfolio">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <p className="name">{portfolio.personalInfo.name}</p>
          <h1>{portfolio.hero.headline}</h1>
          <p className="executive-summary">{portfolio.hero.subheadline}</p>
          <div className="intro">
            {portfolio.hero.intro.slice(0, 2).map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          <p className="tagline">{portfolio.hero.intro[2]}</p>
        </div>
      </header>

      {/* Approach Section */}
      <section className="section approach">
        <div className="container">
          <h3>{portfolio.approach.title}</h3>
          <p className="section-body">{portfolio.approach.body}</p>
          <div className="principles">
            {portfolio.approach.principles.map((principle, idx) => (
              <div key={idx} className="principle">
                <strong>{principle.name}:</strong> {principle.description}
              </div>
            ))}
          </div>
          <p className="closing">{portfolio.approach.closing}</p>
        </div>
      </section>

      {/* Lakehouse Architecture Section */}
      <section className="section lakehouse">
        <div className="container">
          <h3>{portfolio.lakehouse.title}</h3>
          <p className="section-body">{portfolio.lakehouse.body}</p>
          <ul className="bullet-list">
            {portfolio.lakehouse.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Medallion Architecture Section */}
      <section className="section medallion">
        <div className="container">
          <h3>Medallion Architecture</h3>
          <div className="medallion-layers">
            {portfolio.medallion.map((layer, idx) => (
              <div key={idx} className={`layer layer-${layer.name.split(' ')[0].toLowerCase()}`}>
                <div className="layer-header">
                  <h4>{layer.name}</h4>
                  <span className="subtitle">{layer.subtitle}</span>
                </div>
                <p>{layer.description}</p>
                <ul>
                  {layer.characteristics.map((char, charIdx) => (
                    <li key={charIdx}>{char}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Security Section */}
      <section className="section governance">
        <div className="container">
          <h3>{portfolio.governance.title}</h3>
          <p className="section-body">{portfolio.governance.body}</p>
          <ul className="bullet-list">
            {portfolio.governance.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CI/CD Section */}
      <section className="section cicd">
        <div className="container">
          <h3>{portfolio.cicd.title}</h3>
          <p className="section-body">{portfolio.cicd.body}</p>
          <ul className="bullet-list">
            {portfolio.cicd.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section journey">
        <div className="container">
          <h3>{portfolio.journey.title}</h3>
          <div className="timeline">
            {portfolio.journey.items.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>{item.company}</h4>
                  <span className="period">{item.period}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Bring Section */}
      <section className="section what-i-bring">
        <div className="container">
          <h3>{portfolio.whatIBring.title}</h3>
          <ul className="skills-list">
            {portfolio.whatIBring.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Publications Section */}
      <section className="section publications">
        <div className="container">
          <h3>{portfolio.publications.title}</h3>
          <div className="publications-list">
            {portfolio.publications.items.map((pub, idx) => (
              <a key={idx} href={pub.url} target="_blank" rel="noopener noreferrer" className="publication-card">
                <span className="pub-type">{pub.type}</span>
                <h4>{pub.title}</h4>
                <span className="pub-link">View on Semantic Scholar →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta">
        <div className="container">
          <h3>{portfolio.cta.title}</h3>
          <p>{portfolio.cta.text}</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button" onClick={() => Analytics.ctaClick('get-in-touch')}>Get in Touch</Link>
            <a href={portfolio.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="cta-button secondary" onClick={() => Analytics.ctaClick('linkedin-cta')}>LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {portfolio.personalInfo.name}</p>
      </footer>
    </div>
  )
}

function App() {
  const location = useLocation()

  // Track page views on route change and reset scroll tracking
  useEffect(() => {
    trackPageView(location.pathname)
    resetScrollTracking()
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <Navbar name={portfolio.personalInfo.name} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={
          <Contact 
            email={portfolio.personalInfo.email} 
            phone={portfolio.personalInfo.phone} 
            linkedin={portfolio.personalInfo.linkedin} 
            github={portfolio.personalInfo.github} 
          />
        } />
      </Routes>
    </>
  )
}

export default App
