import { useEffect, useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { SwipeWrapper } from './components/SwipeWrapper'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Repos from './pages/Repos'
import Badges from './pages/Badges'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import { useLanguage } from './i18n/LanguageContext'
import { features } from './config/features'
import { trackPageView, resetScrollTracking, Analytics } from './utils/analytics'
import * as portfolio from './data/portfolio'
import './App.css'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', toggleVisible)
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button 
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}

function Home() {
  const { t } = useLanguage()
  const [typingText, setTypingText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const words = t.hero.typingWords as string[]
    const currentWord = words[wordIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    const handleTyping = () => {
      if (!isDeleting && typingText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime)
        return
      }
      if (isDeleting && typingText === '') {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
        return
      }

      const nextText = isDeleting
        ? currentWord.substring(0, typingText.length - 1)
        : currentWord.substring(0, typingText.length + 1)
      setTypingText(nextText)
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [typingText, wordIndex, isDeleting, t.hero.typingWords])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="portfolio">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="under-construction">
            <span className="construction-icon">🚧</span>
            <span className="construction-text">UNDER CONSTRUCTION - HERE BE DRAGONS</span>
            <span className="construction-icon">🐉</span>
          </div>
          <p className="name">{portfolio.personalInfo.name}</p>
          <h1>
            {t.hero.headline}
            <span className="typing-container">
              <span className="typing-text">{typingText}</span>
              <span className="typing-cursor">|</span>
            </span>
          </h1>
          <p className="executive-summary">{t.hero.subheadline}</p>
          <div className="intro">
            {t.hero.intro.slice(0, 2).map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          <p className="tagline">{t.hero.intro[2]}</p>
          <a href="/cv.pdf" download className="download-cv-btn">
            {t.hero.downloadCV}
          </a>
        </div>
      </header>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">4+</span>
            <span className="stat-label">{t.stats.years}</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">{t.stats.industries}</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2TB</span>
            <span className="stat-label">{t.stats.daily}</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">{t.stats.requests}</span>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section approach fade-in">
        <div className="container">
          <h2>{t.approach.title}</h2>
          <p className="section-body">{t.approach.body}</p>
          <div className="principles">
            {t.approach.principles.map((principle, idx) => (
              <div key={idx} className="principle">
                <strong>{principle.name}:</strong> {principle.description}
              </div>
            ))}
          </div>
          <p className="closing">{t.approach.closing}</p>
        </div>
      </section>

      {/* Lakehouse Architecture Section */}
      <section className="section lakehouse fade-in">
        <div className="container">
          <h2>{t.lakehouse.title}</h2>
          <p className="section-body">{t.lakehouse.body}</p>
          <ul className="bullet-list">
            {t.lakehouse.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Medallion Architecture Section */}
      <section className="section medallion fade-in">
        <div className="container">
          <h2>Medallion Architecture</h2>
          <div className="medallion-layers">
            {t.medallion.map((layer, idx) => (
              <div key={idx} className={`layer layer-${idx === 0 ? 'bronze' : idx === 1 ? 'silver' : 'gold'}`}>
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
      <section className="section governance fade-in">
        <div className="container">
          <h2>{t.governance.title}</h2>
          <p className="section-body">{t.governance.body}</p>
          <ul className="bullet-list">
            {t.governance.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CI/CD Section */}
      <section className="section cicd fade-in">
        <div className="container">
          <h2>{t.cicd.title}</h2>
          <p className="section-body">{t.cicd.body}</p>
          <ul className="bullet-list">
            {t.cicd.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section journey fade-in">
        <div className="container">
          <h2>{t.journey.title}</h2>
          <div className="timeline">
            {t.journey.items.map((item, idx) => (
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
      <section className="section what-i-bring fade-in">
        <div className="container">
          <h2>{t.whatIBring.title}</h2>
          <ul className="skills-list">
            {t.whatIBring.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Publications Section */}
      <section className="section publications fade-in">
        <div className="container">
          <h2>{t.publications.title}</h2>
          <div className="publications-list">
            {portfolio.publications.items.map((pub, idx) => (
              <a key={idx} href={pub.url} target="_blank" rel="noopener noreferrer" className="publication-card" aria-label={`Read ${pub.title} on ${pub.type}`}>
                <span className="pub-type">{pub.type}</span>
                <h3>{pub.title}</h3>
                <span className="pub-link">{t.publications.viewOn}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta fade-in">
        <div className="container">
          <h2>{t.cta.title}</h2>
          <p>{t.cta.text}</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button" onClick={() => Analytics.ctaClick('get-in-touch')}>{t.nav.contact}</Link>
            <a href={portfolio.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="cta-button secondary" onClick={() => Analytics.ctaClick('linkedin-cta')} aria-label="Visit LinkedIn profile">LinkedIn</a>
          </div>
        </div>
      </section>
    </main>
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
      <Navbar />
      <SwipeWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          {features.experience && <Route path="/experience" element={<Experience />} />}
          {features.projects && <Route path="/repos" element={<Repos />} />}
          {features.certifications && <Route path="/badges" element={<Badges />} />}
          {features.blog && <Route path="/blog" element={<Blog />} />}
          <Route path="/contact" element={
            <Contact 
              email={portfolio.personalInfo.email} 
              phone={portfolio.personalInfo.phone} 
              linkedin={portfolio.personalInfo.linkedin} 
              github={portfolio.personalInfo.github} 
            />
          } />
        </Routes>
      </SwipeWrapper>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
