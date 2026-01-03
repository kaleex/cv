import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import { trackPageView, resetScrollTracking, Analytics } from './utils/analytics'
import './App.css'

interface Principle {
  name: string
  description: string
}

interface Hero {
  headline: string
  subheadline: string
  intro: string[]
}

interface Approach {
  title: string
  body: string
  principles: Principle[]
  closing: string
}

interface LakehouseArchitecture {
  title: string
  body: string
  bullets: string[]
}

interface MedallionLayer {
  name: string
  subtitle: string
  description: string
  characteristics: string[]
}

interface GovernanceSecurity {
  title: string
  body: string
  bullets: string[]
}

interface CICD {
  title: string
  body: string
  bullets: string[]
}

interface JourneyItem {
  company: string
  period: string
  description: string
}

interface Journey {
  title: string
  items: JourneyItem[]
}

interface WhatIBring {
  title: string
  bullets: string[]
}

interface CTA {
  title: string
  text: string
}

interface PersonalInfo {
  name: string
  email: string
  phone: string
  linkedin: string
  github: string
}

interface PortfolioData {
  personal_info: PersonalInfo
  hero: Hero
  approach: Approach
  lakehouse: LakehouseArchitecture
  medallion: MedallionLayer[]
  governance: GovernanceSecurity
  cicd: CICD
  journey: Journey
  what_i_bring: WhatIBring
  cta: CTA
}

function Home() {
  const [data, setData] = useState<PortfolioData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/portfolio')
      .then((res) => {
        if (!res.ok) throw new Error('Error loading data')
        return res.json()
      })
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="loading">Loading...</div>
  if (error) return <div className="error">Error: {error}</div>
  if (!data) return <div className="error">No data available</div>

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <p className="name">{data.personal_info.name}</p>
          <h1>{data.hero.headline}</h1>
          <p className="executive-summary">{data.hero.subheadline}</p>
          <div className="intro">
            {data.hero.intro.slice(0, 2).map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          <p className="tagline">{data.hero.intro[2]}</p>
        </div>
      </header>

      {/* Approach Section */}
      <section className="section approach">
        <div className="container">
          <h3>{data.approach.title}</h3>
          <p className="section-body">{data.approach.body}</p>
          <div className="principles">
            {data.approach.principles.map((principle, idx) => (
              <div key={idx} className="principle">
                <strong>{principle.name}:</strong> {principle.description}
              </div>
            ))}
          </div>
          <p className="closing">{data.approach.closing}</p>
        </div>
      </section>

      {/* Lakehouse Architecture Section */}
      <section className="section lakehouse">
        <div className="container">
          <h3>{data.lakehouse.title}</h3>
          <p className="section-body">{data.lakehouse.body}</p>
          <ul className="bullet-list">
            {data.lakehouse.bullets.map((bullet, idx) => (
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
            {data.medallion.map((layer, idx) => (
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
          <h3>{data.governance.title}</h3>
          <p className="section-body">{data.governance.body}</p>
          <ul className="bullet-list">
            {data.governance.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CI/CD Section */}
      <section className="section cicd">
        <div className="container">
          <h3>{data.cicd.title}</h3>
          <p className="section-body">{data.cicd.body}</p>
          <ul className="bullet-list">
            {data.cicd.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section journey">
        <div className="container">
          <h3>{data.journey.title}</h3>
          <div className="timeline">
            {data.journey.items.map((item, idx) => (
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
          <h3>{data.what_i_bring.title}</h3>
          <ul className="skills-list">
            {data.what_i_bring.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta">
        <div className="container">
          <h3>{data.cta.title}</h3>
          <p>{data.cta.text}</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button" onClick={() => Analytics.ctaClick('get-in-touch')}>Get in Touch</Link>
            <a href={data.personal_info.linkedin} target="_blank" rel="noopener noreferrer" className="cta-button secondary" onClick={() => Analytics.ctaClick('linkedin-cta')}>LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {data.personal_info.name}</p>
      </footer>
    </div>
  )
}

function App() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null)
  const location = useLocation()

  // Track page views on route change and reset scroll tracking
  useEffect(() => {
    trackPageView(location.pathname)
    resetScrollTracking()
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    fetch('/api/portfolio')
      .then((res) => res.json())
      .then((data) => setPersonalInfo(data.personal_info))
      .catch(() => {})
  }, [])

  return (
    <>
      <Navbar name={personalInfo?.name || 'Portfolio'} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={
          <Contact 
            email={personalInfo?.email || ''} 
            phone={personalInfo?.phone || ''} 
            linkedin={personalInfo?.linkedin || ''} 
            github={personalInfo?.github || ''} 
          />
        } />
      </Routes>
    </>
  )
}

export default App
