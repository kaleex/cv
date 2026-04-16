import { useLanguage } from '../i18n/LanguageContext'
import { useFadeIn } from '../hooks/useFadeIn'
import { MapPinIcon } from '../components/Icons'
import './Experience.css'

interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  description: string[]
  technologies: string[]
}

/* SVG illustrations for each experience — cyberpunk style */
function ExperienceIllustration({ index }: { index: number }) {
  const stroke = 'var(--accent)'
  const stroke2 = 'var(--accent-secondary)'

  const HudCorners = () => (
    <>
      <path d="M10,10 L10,28 L28,28" stroke={stroke} strokeWidth="1.5" opacity="0.8"/>
      <path d="M150,10 L150,28 L132,28" stroke={stroke} strokeWidth="1.5" opacity="0.8"/>
      <path d="M10,150 L10,132 L28,132" stroke={stroke} strokeWidth="1.5" opacity="0.8"/>
      <path d="M150,150 L150,132 L132,132" stroke={stroke} strokeWidth="1.5" opacity="0.8"/>
    </>
  )

  switch (index) {
    /* WiZink — Decision Engine / Circuit HUD */
    case 0:
      return (
        <svg viewBox="0 0 160 160" fill="none" className="exp-svg">
          <HudCorners />
          {/* Central decision diamond */}
          <polygon points="80,38 112,70 80,102 48,70" stroke={stroke} strokeWidth="1.5" />
          <polygon points="80,52 96,70 80,88 64,70" stroke={stroke} strokeWidth="0.5" fill={stroke} fillOpacity="0.07"/>
          {/* Circuit traces — angular paths */}
          <path d="M80,102 L80,120 L48,120 L28,140" stroke={stroke} strokeWidth="1" strokeDasharray="3 2" opacity="0.7" className="cp-flow"/>
          <path d="M80,102 L80,120 L112,120 L132,140" stroke={stroke2} strokeWidth="1" strokeDasharray="3 2" opacity="0.7" className="cp-flow"/>
          <path d="M48,70 L28,70 L16,58" stroke={stroke} strokeWidth="1" strokeDasharray="3 2" opacity="0.55"/>
          <path d="M112,70 L132,70 L144,58" stroke={stroke2} strokeWidth="1" strokeDasharray="3 2" opacity="0.55"/>
          {/* Node diamonds at trace ends */}
          <rect x="24" y="136" width="8" height="8" fill={stroke} opacity="0.65" transform="rotate(45 28 140)"/>
          <rect x="128" y="136" width="8" height="8" fill={stroke2} opacity="0.65" transform="rotate(45 132 140)"/>
          {/* Core pulse */}
          <circle cx="80" cy="70" r="5" fill={stroke} opacity="0.9" className="cp-pulse"/>
          <circle cx="80" cy="70" r="10" stroke={stroke} strokeWidth="0.5" opacity="0.3" className="cp-pulse"/>
          {/* Scan line */}
          <line x1="16" y1="70" x2="144" y2="70" stroke={stroke} strokeWidth="0.4" opacity="0.12"/>
        </svg>
      )

    /* Knowmad Mood — Data Engineering / Stacked Hex Layers */
    case 1:
      return (
        <svg viewBox="0 0 160 160" fill="none" className="exp-svg">
          <HudCorners />
          {/* Top hex layer */}
          <polygon points="80,18 108,33 108,63 80,78 52,63 52,33" stroke={stroke} strokeWidth="1.5"/>
          {/* Mid hex layer (slightly offset down) */}
          <polygon points="80,50 108,65 108,95 80,110 52,95 52,65" stroke={stroke} strokeWidth="1.2" opacity="0.65"/>
          {/* Bottom hex layer */}
          <polygon points="80,82 108,97 108,127 80,142 52,127 52,97" stroke={stroke2} strokeWidth="1.5" opacity="0.8"/>
          {/* Vertical circuit connectors */}
          <line x1="52" y1="48" x2="52" y2="80" stroke={stroke} strokeWidth="0.8" strokeDasharray="2 3" opacity="0.4"/>
          <line x1="108" y1="48" x2="108" y2="80" stroke={stroke} strokeWidth="0.8" strokeDasharray="2 3" opacity="0.4"/>
          <line x1="52" y1="80" x2="52" y2="112" stroke={stroke2} strokeWidth="0.8" strokeDasharray="2 3" opacity="0.35"/>
          <line x1="108" y1="80" x2="108" y2="112" stroke={stroke2} strokeWidth="0.8" strokeDasharray="2 3" opacity="0.35"/>
          {/* Layer core dots */}
          <circle cx="80" cy="48" r="3.5" fill={stroke} opacity="0.9"/>
          <circle cx="80" cy="80" r="3.5" fill={stroke} opacity="0.65" className="cp-pulse"/>
          <circle cx="80" cy="112" r="3.5" fill={stroke2} opacity="0.85" className="cp-pulse"/>
          {/* Output trace */}
          <path d="M80,142 L80,152" stroke={stroke2} strokeWidth="1" strokeDasharray="2 2" opacity="0.5" className="cp-flow"/>
        </svg>
      )

    /* Capgemini — ML / Hexagonal Neural Grid */
    case 2:
      return (
        <svg viewBox="0 0 160 160" fill="none" className="exp-svg">
          <HudCorners />
          {/* Input hex nodes */}
          <polygon points="30,38 42,31 54,38 54,52 42,59 30,52" stroke={stroke} strokeWidth="1.2" opacity="0.75"/>
          <polygon points="30,78 42,71 54,78 54,92 42,99 30,92" stroke={stroke} strokeWidth="1.2" opacity="0.75"/>
          <polygon points="30,118 42,111 54,118 54,132 42,139 30,132" stroke={stroke} strokeWidth="1.2" opacity="0.6"/>
          {/* Hidden layer hex nodes */}
          <polygon points="66,55 78,48 90,55 90,69 78,76 66,69" stroke={stroke} strokeWidth="1.2" opacity="0.6"/>
          <polygon points="66,98 78,91 90,98 90,112 78,119 66,112" stroke={stroke2} strokeWidth="1.2" opacity="0.6"/>
          {/* Output hex */}
          <polygon points="106,68 122,59 138,68 138,86 122,95 106,86" stroke={stroke} strokeWidth="1.5"/>
          <circle cx="122" cy="77" r="6" fill={stroke} opacity="0.45" className="cp-pulse"/>
          {/* Connections: input → hidden */}
          <line x1="54" y1="45" x2="66" y2="62" stroke={stroke} strokeWidth="0.7" opacity="0.3"/>
          <line x1="54" y1="85" x2="66" y2="62" stroke={stroke} strokeWidth="0.7" opacity="0.2"/>
          <line x1="54" y1="85" x2="66" y2="105" stroke={stroke} strokeWidth="0.7" opacity="0.3"/>
          <line x1="54" y1="125" x2="66" y2="105" stroke={stroke} strokeWidth="0.7" opacity="0.2"/>
          {/* Connections: hidden → output (dashed flow) */}
          <line x1="90" y1="62" x2="106" y2="72" stroke={stroke} strokeWidth="1" strokeDasharray="3 2" opacity="0.5" className="cp-flow"/>
          <line x1="90" y1="105" x2="106" y2="82" stroke={stroke2} strokeWidth="1" strokeDasharray="3 2" opacity="0.5" className="cp-flow"/>
        </svg>
      )

    /* Capgemini Innovation — Radial API Hub */
    case 3:
      return (
        <svg viewBox="0 0 160 160" fill="none" className="exp-svg">
          <HudCorners />
          {/* Outer dashed orbit */}
          <circle cx="80" cy="80" r="56" stroke={stroke} strokeWidth="0.5" strokeDasharray="4 8" opacity="0.25"/>
          {/* Central hex hub */}
          <polygon points="80,56 98,66 98,86 80,96 62,86 62,66" stroke={stroke} strokeWidth="1.5"/>
          <polygon points="80,64 92,71 92,85 80,92 68,85 68,71" fill={stroke} fillOpacity="0.08" stroke={stroke} strokeWidth="0.5"/>
          <circle cx="80" cy="76" r="5" fill={stroke} opacity="0.75" className="cp-pulse"/>
          {/* Circuit spokes — angular */}
          <path d="M80,56 L80,26" stroke={stroke} strokeWidth="1" strokeDasharray="3 2" opacity="0.6"/>
          <path d="M98,66 L120,42" stroke={stroke2} strokeWidth="1" strokeDasharray="3 2" opacity="0.6"/>
          <path d="M98,86 L120,110" stroke={stroke} strokeWidth="1" strokeDasharray="3 2" opacity="0.6"/>
          <path d="M80,96 L80,126" stroke={stroke2} strokeWidth="1" strokeDasharray="3 2" opacity="0.6"/>
          <path d="M62,86 L40,110" stroke={stroke} strokeWidth="1" strokeDasharray="3 2" opacity="0.6"/>
          <path d="M62,66 L40,42" stroke={stroke2} strokeWidth="1" strokeDasharray="3 2" opacity="0.6"/>
          {/* Outer node shapes — alternating diamond / circle */}
          <rect x="76" y="22" width="8" height="8" fill={stroke} opacity="0.6" transform="rotate(45 80 26)"/>
          <circle cx="122" cy="40" r="4" stroke={stroke2} strokeWidth="1.2" opacity="0.7"/>
          <rect x="116" y="106" width="8" height="8" fill={stroke} opacity="0.55" transform="rotate(45 120 110)"/>
          <circle cx="80" cy="128" r="4" stroke={stroke2} strokeWidth="1.2" opacity="0.7" className="cp-pulse"/>
          <rect x="36" y="106" width="8" height="8" fill={stroke} opacity="0.55" transform="rotate(45 40 110)"/>
          <circle cx="38" cy="40" r="4" stroke={stroke2} strokeWidth="1.2" opacity="0.7"/>
        </svg>
      )

    default:
      return null
  }
}

function Experience() {
  const { t } = useLanguage()
  useFadeIn()

  const experiences: ExperienceItem[] = t.experience.timeline as ExperienceItem[]

  return (
    <main className="experience-page">
      <header className="experience-header">
        <h1>{t.experience.title}</h1>
        <p>{t.experience.subtitle}</p>
      </header>

      <div className="experience-content">
        <section className="timeline-section fade-in">
        <div className="timeline">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="company">{exp.company}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <h4 className="role">{exp.role}</h4>
                <p className="location"><MapPinIcon className="location-icon" /> {exp.location}</p>
                <ul className="description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="technologies">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-illustration" aria-hidden="true">
                <ExperienceIllustration index={index} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-cta fade-in">
        <p>{t.experience.cta}</p>
      </section>
      </div>
    </main>
  )
}

export default Experience
