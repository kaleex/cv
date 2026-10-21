import { useEffect, useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FeaturedProject from './components/FeaturedProject'
import { SwipeWrapper } from './components/SwipeWrapper'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Repos from './pages/Repos'
import Badges from './pages/Badges'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Card from './pages/Card'
import { useLanguage } from './i18n/LanguageContext'
import { useTheme } from './context/ThemeContext'
import { features } from './config/features'
import { trackPageView, resetScrollTracking, Analytics } from './utils/analytics'
import * as portfolio from './data/portfolio'
import { ChevronUpIcon, ChevronDownIcon, ArrowRightIcon, WrenchScrewdriverIcon, DocumentArrowDownIcon } from './components/Icons'
import './App.css'

function getExperienceYearsLabel() {
  const startDate = new Date(2020, 9, 1) // Career timeline starts in October 2020
  const today = new Date()
  let years = today.getFullYear() - startDate.getFullYear()
  const hasReachedAnniversary =
    today.getMonth() > startDate.getMonth() ||
    (today.getMonth() === startDate.getMonth() && today.getDate() >= startDate.getDate())

  if (!hasReachedAnniversary) {
    years -= 1
  }

  return `${Math.max(0, years)}+`
}

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
      <ChevronUpIcon className="icon-md" />
    </button>
  )
}

function Home() {
  const { t } = useLanguage()
  useTheme()
  const experienceYearsLabel = getExperienceYearsLabel()

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
      <header className="hero snap-section">
        {/* Circuit board background */}
        <div className="hero-background">
          <svg className="hero-circuit-svg" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#C8A000" strokeWidth="0.8" fill="none">
              <line x1="0" y1="80" x2="250" y2="80"/><line x1="310" y1="80" x2="550" y2="80"/>
              <line x1="600" y1="80" x2="820" y2="80"/><line x1="880" y1="80" x2="1200" y2="80"/>
              <line x1="0" y1="200" x2="180" y2="200"/><line x1="240" y1="200" x2="480" y2="200"/>
              <line x1="540" y1="200" x2="760" y2="200"/><line x1="820" y1="200" x2="1000" y2="200"/>
              <line x1="1060" y1="200" x2="1200" y2="200"/>
              <line x1="0" y1="320" x2="300" y2="320"/><line x1="370" y1="320" x2="600" y2="320"/>
              <line x1="650" y1="320" x2="900" y2="320"/><line x1="960" y1="320" x2="1200" y2="320"/>
              <line x1="0" y1="430" x2="200" y2="430"/><line x1="260" y1="430" x2="500" y2="430"/>
              <line x1="550" y1="430" x2="780" y2="430"/><line x1="840" y1="430" x2="1200" y2="430"/>
              <line x1="180" y1="80" x2="180" y2="200"/><line x1="250" y1="80" x2="250" y2="0"/>
              <line x1="540" y1="80" x2="540" y2="200"/><line x1="820" y1="80" x2="820" y2="0"/>
              <line x1="240" y1="200" x2="240" y2="320"/><line x1="760" y1="200" x2="760" y2="80"/>
              <line x1="370" y1="320" x2="370" y2="200"/><line x1="960" y1="320" x2="960" y2="200"/>
              <line x1="260" y1="430" x2="260" y2="320"/><line x1="650" y1="430" x2="650" y2="320"/>
              <line x1="900" y1="320" x2="900" y2="430"/><line x1="1060" y1="200" x2="1060" y2="320"/>
              <circle cx="180" cy="80" r="4" fill="#C8A000"/>
              <circle cx="540" cy="80" r="4" fill="#C8A000"/>
              <circle cx="240" cy="200" r="4" fill="#C8A000"/>
              <circle cx="760" cy="200" r="4" fill="#C8A000"/>
              <circle cx="370" cy="320" r="4" fill="#C8A000"/>
              <circle cx="900" cy="320" r="4" fill="#C8A000"/>
              <circle cx="820" cy="80" r="4" fill="#00D4C8"/>
              <circle cx="540" cy="200" r="4" fill="#00D4C8"/>
              <circle cx="960" cy="200" r="4" fill="#00D4C8"/>
              <circle cx="260" cy="430" r="4" fill="#00D4C8"/>
              <circle cx="650" cy="430" r="4" fill="#00D4C8"/>
              <circle cx="1060" cy="320" r="4" fill="#00D4C8"/>
              <rect x="310" y="68" width="60" height="24" stroke="#C8A000" strokeWidth="1.2"/>
              <rect x="600" y="68" width="50" height="24" stroke="#00D4C8" strokeWidth="1.2"/>
              <rect x="480" y="188" width="60" height="24" stroke="#C8A000" strokeWidth="1.2"/>
              <rect x="820" y="188" width="50" height="24" stroke="#00D4C8" strokeWidth="1.2"/>
              <rect x="600" y="308" width="50" height="24" stroke="#C8A000" strokeWidth="1"/>
              <rect x="500" y="418" width="50" height="24" stroke="#00D4C8" strokeWidth="1"/>
              <rect x="840" y="418" width="60" height="24" stroke="#C8A000" strokeWidth="1"/>
            </g>
          </svg>
        </div>
        {/* Vignette */}
        <div className="hero-vignette"></div>
        {/* Scanlines + animated bar */}
        <div className="hero-scanlines"></div>
        <div className="hero-scan-bar"></div>
        {/* HUD corners */}
        <div className="hud-corner hud-tl"></div>
        <div className="hud-corner hud-tr"></div>
        <div className="hud-corner hud-bl"></div>
        <div className="hud-corner hud-br"></div>
        <div className="hero-content">
          {features.showConstructionBanner && (
            <div className="under-construction">
              <WrenchScrewdriverIcon className="construction-icon" />
              <span className="construction-text">UNDER CONSTRUCTION - HERE BE DRAGONS</span>
              <WrenchScrewdriverIcon className="construction-icon" />
            </div>
          )}
          <p className="name" data-text={portfolio.personalInfo.name}>{portfolio.personalInfo.name}</p>
          <div className="hero-cert-badge">{portfolio.heroCertBadge}</div>
          <h1>{t.hero.headline}</h1>
          <p className="hero-positioning">{t.hero.subheadline}</p>
          <div className="hero-proof-strip">
            {t.hero.proofPoints.map((point, idx) => (
              <span key={idx} className="hero-proof-chip">{point}</span>
            ))}
          </div>
          <div className="hero-actions">
            <Link to="/contact" className="hero-btn" onClick={() => Analytics.ctaClick('hero-contact')}>
              {t.hero.contactAction}
            </Link>
            <a
              href="/cv.pdf"
              download="CV-Alejandro-Quilez.pdf"
              className="hero-btn secondary"
              onClick={() => Analytics.ctaClick('hero-download-cv')}
            >
              <DocumentArrowDownIcon className="icon-md" />
              {t.hero.downloadCV}
            </a>
          </div>
          <Link to="/experience" className="hero-experience-link">{t.hero.experienceAction} <ArrowRightIcon className="icon-sm" /></Link>
        </div>
        <div className="scroll-indicator">
          <ChevronDownIcon className="icon-lg" />
        </div>
      </header>

      <section className="portfolio-overview" aria-label={t.hero.experienceAction}>
        <div className="container">
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">{experienceYearsLabel}</span>
              <span className="stat-label">{t.stats.years}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">PB</span>
              <span className="stat-label">{t.stats.scale}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">HPC</span>
              <span className="stat-label">{t.stats.compute}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">{t.stats.industries}</span>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProject />

      <section className="section delivery-evidence" aria-labelledby="delivery-evidence-title">
        <div className="container">
          <h2 id="delivery-evidence-title">{t.deliveryEvidence.title}</h2>
          <p className="section-body">{t.deliveryEvidence.intro}</p>
          <div className="delivery-evidence-grid">
            {t.deliveryEvidence.items.map((item) => (
              <article key={item.sector} className="delivery-evidence-card">
                <p className="evidence-sector">{item.sector}</p>
                <h3>{item.metric}</h3>
                <p className="evidence-label">{item.label}</p>
                <p>{item.description}</p>
                <p className="evidence-technologies">{item.technologies}</p>
              </article>
            ))}
          </div>
          <Link to="/experience" className="evidence-link">{t.deliveryEvidence.link} <ArrowRightIcon className="icon-sm" /></Link>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section approach fade-in snap-section">
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

      {/* Architecture Diagram Section */}
      <section className="section arch-diagram-section fade-in snap-section">
        <div className="container">
          <h2>{t.architectureDetail.title}</h2>
          <details className="architecture-details">
            <summary>{t.architectureDetail.summary}</summary>
          <p className="section-body">{t.architectureDetail.description}</p>
          <div className="arch-diagram-desktop">
            <div className="arch-diagram-wrapper">
              <svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg" className="arch-diagram-svg" role="img" aria-label="Azure Data Platform Architecture Diagram">
                {/* CAF outer border */}
                <rect x="2" y="2" width="856" height="396" fill="none" stroke="#C8A000" strokeWidth="1" strokeDasharray="6 3" opacity="0.5"/>
                <text x="430" y="17" textAnchor="middle" fill="#C8A000" fontSize="9" fontFamily="'JetBrains Mono',monospace" letterSpacing="3" opacity="0.7">CAF ENTERPRISE SCALE LANDING ZONE</text>

                {/* Zone 1: Connectivity */}
                <rect x="10" y="25" width="840" height="70" fill="rgba(200,160,0,0.025)" stroke="#2a1f00" strokeWidth="1"/>
                <text x="20" y="42" fill="#C8A000" fontSize="8" fontFamily="'JetBrains Mono',monospace" letterSpacing="2">CONNECTIVITY ZONE</text>
                <text x="840" y="42" textAnchor="end" fill="#00D4C8" fontSize="7.5" fontFamily="'JetBrains Mono',monospace">WAF: Security</text>
                <text x="20" y="60" fill="#706030" fontSize="7.5" fontFamily="'JetBrains Mono',monospace">Hub VNet  ·  Private Endpoints  ·  NSG  ·  Private DNS  ·  Azure Firewall  ·  ExpressRoute / VPN Gateway</text>
                <text x="20" y="77" fill="#706030" fontSize="7.5" fontFamily="'JetBrains Mono',monospace">Hub-Spoke Topology  ·  Zero-Trust Network Access  ·  DDoS Protection</text>

                {/* Zone 2: Identity */}
                <rect x="10" y="100" width="840" height="68" fill="rgba(0,212,200,0.015)" stroke="#2a1f00" strokeWidth="1"/>
                <text x="20" y="117" fill="#C8A000" fontSize="8" fontFamily="'JetBrains Mono',monospace" letterSpacing="2">IDENTITY ZONE</text>
                <text x="840" y="117" textAnchor="end" fill="#00D4C8" fontSize="7.5" fontFamily="'JetBrains Mono',monospace">WAF: Security</text>
                <text x="20" y="135" fill="#706030" fontSize="7.5" fontFamily="'JetBrains Mono',monospace">Entra ID  ·  RBAC  ·  Managed Identity  ·  Unity Catalog  ·  Row-Level Security  ·  Column Masking</text>
                <text x="20" y="153" fill="#706030" fontSize="7.5" fontFamily="'JetBrains Mono',monospace">Automated PII Detection  ·  Data Lineage  ·  Audit Trails  ·  Zero-Trust Identity</text>

                {/* Zone 3: Data */}
                <rect x="10" y="173" width="840" height="125" fill="rgba(200,160,0,0.04)" stroke="#C8A000" strokeWidth="1.2" opacity="0.8"/>
                <text x="20" y="191" fill="#C8A000" fontSize="8" fontFamily="'JetBrains Mono',monospace" letterSpacing="2">DATA ZONE</text>
                <text x="840" y="191" textAnchor="end" fill="#00D4C8" fontSize="7.5" fontFamily="'JetBrains Mono',monospace">WAF: Reliability · Performance Efficiency</text>

                {/* Node: Sources */}
                <rect x="25" y="200" width="100" height="50" fill="#0d0b00" stroke="#2a1f00" strokeWidth="1"/>
                <text x="75" y="221" textAnchor="middle" fill="#a08040" fontSize="7.5" fontFamily="'JetBrains Mono',monospace" letterSpacing="1">SOURCES</text>
                <text x="75" y="235" textAnchor="middle" fill="#706030" fontSize="7" fontFamily="'JetBrains Mono',monospace">APIs · On-prem</text>
                <text x="75" y="247" textAnchor="middle" fill="#706030" fontSize="7" fontFamily="'JetBrains Mono',monospace">Streaming · Files</text>

                {/* Arrow 1 */}
                <line x1="125" y1="225" x2="162" y2="225" stroke="#C8A000" strokeWidth="1.5" className="arch-flow"/>
                <polygon points="162,221 170,225 162,229" fill="#C8A000"/>

                {/* Node: Ingest */}
                <rect x="170" y="200" width="115" height="50" fill="#0d0b00" stroke="#2a1f00" strokeWidth="1"/>
                <text x="227" y="221" textAnchor="middle" fill="#a08040" fontSize="7.5" fontFamily="'JetBrains Mono',monospace" letterSpacing="1">INGEST</text>
                <text x="227" y="235" textAnchor="middle" fill="#706030" fontSize="7" fontFamily="'JetBrains Mono',monospace">ADF · Event Hubs</text>
                <text x="227" y="247" textAnchor="middle" fill="#706030" fontSize="7" fontFamily="'JetBrains Mono',monospace">Auto Loader</text>

                {/* Arrow 2 */}
                <line x1="285" y1="225" x2="322" y2="225" stroke="#C8A000" strokeWidth="1.5" className="arch-flow"/>
                <polygon points="322,221 330,225 322,229" fill="#C8A000"/>

                {/* Node: Storage */}
                <rect x="330" y="200" width="115" height="50" fill="#0d0b00" stroke="#2a1f00" strokeWidth="1"/>
                <text x="387" y="221" textAnchor="middle" fill="#a08040" fontSize="7.5" fontFamily="'JetBrains Mono',monospace" letterSpacing="1">STORAGE</text>
                <text x="387" y="235" textAnchor="middle" fill="#706030" fontSize="7" fontFamily="'JetBrains Mono',monospace">ADLS Gen2</text>
                <text x="387" y="247" textAnchor="middle" fill="#706030" fontSize="7" fontFamily="'JetBrains Mono',monospace">Bronze Layer</text>

                {/* Arrow 3 */}
                <line x1="445" y1="225" x2="482" y2="225" stroke="#C8A000" strokeWidth="1.5" className="arch-flow"/>
                <polygon points="482,221 490,225 482,229" fill="#C8A000"/>

                {/* Node: Processing */}
                <rect x="490" y="200" width="130" height="50" fill="#0d0b00" stroke="#C8A000" strokeWidth="1.5"/>
                <text x="555" y="221" textAnchor="middle" fill="#C8A000" fontSize="7.5" fontFamily="'JetBrains Mono',monospace" letterSpacing="1">PROCESSING</text>
                <text x="555" y="235" textAnchor="middle" fill="#706030" fontSize="7" fontFamily="'JetBrains Mono',monospace">Databricks · Spark</text>
                <text x="555" y="247" textAnchor="middle" fill="#706030" fontSize="7" fontFamily="'JetBrains Mono',monospace">Silver · Gold · DLT</text>

                {/* Arrow 4 */}
                <line x1="620" y1="225" x2="657" y2="225" stroke="#00D4C8" strokeWidth="1.5" className="arch-flow"/>
                <polygon points="657,221 665,225 657,229" fill="#00D4C8"/>

                {/* Node: Serving */}
                <rect x="665" y="200" width="115" height="50" fill="#0d0b00" stroke="#00D4C8" strokeWidth="1.5"/>
                <text x="722" y="221" textAnchor="middle" fill="#00D4C8" fontSize="7.5" fontFamily="'JetBrains Mono',monospace" letterSpacing="1">SERVING</text>
                <text x="722" y="235" textAnchor="middle" fill="#706030" fontSize="7" fontFamily="'JetBrains Mono',monospace">Databricks SQL</text>
                <text x="722" y="247" textAnchor="middle" fill="#706030" fontSize="7" fontFamily="'JetBrains Mono',monospace">Analytics · ML APIs</text>

                {/* Layer labels */}
                <text x="387" y="278" textAnchor="middle" fill="#C8A000" fontSize="6.5" fontFamily="'JetBrains Mono',monospace" opacity="0.5">▲ BRONZE</text>
                <text x="555" y="278" textAnchor="middle" fill="#C8A000" fontSize="6.5" fontFamily="'JetBrains Mono',monospace" opacity="0.5">▲ SILVER · GOLD</text>
                <text x="722" y="278" textAnchor="middle" fill="#00D4C8" fontSize="6.5" fontFamily="'JetBrains Mono',monospace" opacity="0.5">▲ CONSUME</text>

                {/* Zone 4: Management */}
                <rect x="10" y="303" width="840" height="90" fill="rgba(0,212,200,0.015)" stroke="#2a1f00" strokeWidth="1"/>
                <text x="20" y="321" fill="#C8A000" fontSize="8" fontFamily="'JetBrains Mono',monospace" letterSpacing="2">MANAGEMENT ZONE</text>
                <text x="840" y="321" textAnchor="end" fill="#00D4C8" fontSize="7.5" fontFamily="'JetBrains Mono',monospace">WAF: Operational Excellence · Cost Optimization</text>
                <text x="20" y="341" fill="#706030" fontSize="7.5" fontFamily="'JetBrains Mono',monospace">Azure Monitor  ·  Log Analytics Workspace  ·  Application Insights  ·  Cost Management + Billing</text>
                <text x="20" y="359" fill="#706030" fontSize="7.5" fontFamily="'JetBrains Mono',monospace">Data Quality Dashboards  ·  Pipeline Alerting  ·  SLA Monitoring  ·  Automation Accounts</text>
                <text x="20" y="377" fill="#706030" fontSize="7.5" fontFamily="'JetBrains Mono',monospace">Terraform State Backend  ·  Azure DevOps / GitHub Actions  ·  Policy Compliance</text>
              </svg>
            </div>
          </div>
          <div className="arch-diagram-mobile" aria-label="Azure Data Platform Architecture Overview">
            <div className="arch-mobile-label">CAF ENTERPRISE SCALE LANDING ZONE</div>
            <div className="arch-mobile-zones">
              <article className="arch-mobile-zone arch-mobile-gold">
                <div className="arch-mobile-zone-head">
                  <h3>Connectivity Zone</h3>
                  <span className="arch-mobile-waf">WAF: Security</span>
                </div>
                <p className="arch-mobile-copy">Hub VNet, private endpoints, NSG, private DNS, Azure Firewall, ExpressRoute or VPN Gateway.</p>
                <p className="arch-mobile-copy">Hub-spoke topology, zero-trust network access, and DDoS protection from the edge inward.</p>
              </article>

              <article className="arch-mobile-zone arch-mobile-cyan">
                <div className="arch-mobile-zone-head">
                  <h3>Identity Zone</h3>
                  <span className="arch-mobile-waf">WAF: Security</span>
                </div>
                <p className="arch-mobile-copy">Entra ID, RBAC, managed identities, Unity Catalog, row-level security, and column masking.</p>
                <p className="arch-mobile-copy">Automated PII detection, lineage, audit trails, and zero-trust identity controls.</p>
              </article>

              <article className="arch-mobile-zone arch-mobile-gold">
                <div className="arch-mobile-zone-head">
                  <h3>Data Zone</h3>
                  <span className="arch-mobile-waf">WAF: Reliability + Performance</span>
                </div>
                <p className="arch-mobile-copy">Domain-oriented data products built on shared platform standards, with ownership kept close to the business context.</p>
                <div className="arch-mobile-flow">
                  <div className="arch-mobile-node">
                    <strong>Sources</strong>
                    <span>APIs, on-prem, streaming, files</span>
                  </div>
                  <div className="arch-mobile-arrow">v</div>
                  <div className="arch-mobile-node">
                    <strong>Ingest</strong>
                    <span>ADF, Event Hubs, Auto Loader</span>
                  </div>
                  <div className="arch-mobile-arrow">v</div>
                  <div className="arch-mobile-node">
                    <strong>Storage</strong>
                    <span>ADLS Gen2, Bronze layer</span>
                  </div>
                  <div className="arch-mobile-arrow">v</div>
                  <div className="arch-mobile-node">
                    <strong>Processing</strong>
                    <span>Databricks, Spark, Silver, Gold, DLT</span>
                  </div>
                  <div className="arch-mobile-arrow arch-mobile-arrow-cyan">v</div>
                  <div className="arch-mobile-node arch-mobile-node-cyan">
                    <strong>Serving</strong>
                    <span>Databricks SQL, analytics, ML APIs</span>
                  </div>
                </div>
              </article>

              <article className="arch-mobile-zone arch-mobile-cyan">
                <div className="arch-mobile-zone-head">
                  <h3>Management Zone</h3>
                  <span className="arch-mobile-waf">WAF: OpEx + Cost</span>
                </div>
                <p className="arch-mobile-copy">Azure Monitor, Log Analytics, Application Insights, cost management, and SLA alerting.</p>
                <p className="arch-mobile-copy">Terraform state backend, Azure DevOps or GitHub Actions, policy compliance, federated governance, and quality dashboards.</p>
              </article>
            </div>
          </div>
          </details>
        </div>
      </section>

      {/* CTA + Footer Section */}
      <section className="cta-footer-section snap-section">
        <div className="section cta">
          <div className="container">
            <h2>{t.cta.title}</h2>
            <p>{t.cta.text}</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button" onClick={() => Analytics.ctaClick('get-in-touch')}>{t.nav.contact}</Link>
              <a href={portfolio.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="cta-button secondary" onClick={() => Analytics.ctaClick('linkedin-cta')} aria-label="Visit LinkedIn profile">LinkedIn</a>
            </div>
          </div>
        </div>
        <Footer />
        <div className="swipe-next-hint">
          <ArrowRightIcon className="icon-md" />
          <span className="swipe-next-text">{t.nav.skills}</span>
        </div>
      </section>
    </main>
  )
}

function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

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
              linkedin={portfolio.personalInfo.linkedin} 
              github={portfolio.personalInfo.github} 
            />
          } />
          <Route path="/card" element={<Card />} />
        </Routes>
      </SwipeWrapper>
      {!isHome && <Footer />}
      <BackToTop />
    </>
  )
}

export default App
