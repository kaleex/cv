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

/* SVG illustrations for each experience — one per role */
function ExperienceIllustration({ index }: { index: number }) {
  const stroke = 'var(--accent)'
  const stroke2 = 'var(--accent-secondary)'

  switch (index) {
    /* WiZink — Decision Engine / Fintech flow */
    case 0:
      return (
        <svg viewBox="0 0 160 160" fill="none" className="exp-svg">
          {/* Decision diamond */}
          <rect x="68" y="8" width="24" height="24" rx="2"
            transform="rotate(45 80 20)" stroke={stroke} strokeWidth="1.5" />
          {/* Process nodes */}
          <rect x="15" y="70" width="40" height="24" rx="6"
            stroke={stroke} strokeWidth="1.5" opacity="0.7" />
          <rect x="105" y="70" width="40" height="24" rx="6"
            stroke={stroke} strokeWidth="1.5" opacity="0.7" />
          {/* Result */}
          <rect x="50" y="125" width="60" height="24" rx="6"
            stroke={stroke2} strokeWidth="1.5" opacity="0.6" />
          {/* Connections */}
          <path d="M70 34 L40 70" stroke={stroke} strokeWidth="1" opacity="0.35" />
          <path d="M90 34 L120 70" stroke={stroke} strokeWidth="1" opacity="0.35" />
          <path d="M40 94 L65 125" stroke={stroke} strokeWidth="1" opacity="0.3" />
          <path d="M120 94 L95 125" stroke={stroke} strokeWidth="1" opacity="0.3" />
          {/* Accent dots */}
          <circle cx="80" cy="20" r="3" fill={stroke} opacity="0.6" />
          <circle cx="35" cy="82" r="2.5" fill={stroke} opacity="0.5" />
          <circle cx="125" cy="82" r="2.5" fill={stroke} opacity="0.5" />
          <circle cx="80" cy="137" r="2.5" fill={stroke2} opacity="0.5" />
        </svg>
      )

    /* Generali — Data Platform / Warehouse layers */
    case 1:
      return (
        <svg viewBox="0 0 160 160" fill="none" className="exp-svg">
          {/* Database cylinders */}
          <ellipse cx="80" cy="30" rx="42" ry="12" stroke={stroke} strokeWidth="1.5" />
          <ellipse cx="80" cy="60" rx="42" ry="12" stroke={stroke} strokeWidth="1.5" opacity="0.7" />
          <ellipse cx="80" cy="90" rx="42" ry="12" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
          {/* Vertical connections */}
          <line x1="38" y1="30" x2="38" y2="90" stroke={stroke} strokeWidth="1.2" opacity="0.25" />
          <line x1="122" y1="30" x2="122" y2="90" stroke={stroke} strokeWidth="1.2" opacity="0.25" />
          {/* Data output dots */}
          <circle cx="60" cy="120" r="4" fill={stroke} opacity="0.35" />
          <circle cx="80" cy="126" r="3.5" fill={stroke2} opacity="0.35" />
          <circle cx="100" cy="120" r="4" fill={stroke} opacity="0.35" />
          {/* Flow lines */}
          <path d="M65 102 L62 116" stroke={stroke} strokeWidth="1" opacity="0.25" />
          <path d="M80 102 L80 122" stroke={stroke} strokeWidth="1" opacity="0.25" />
          <path d="M95 102 L98 116" stroke={stroke} strokeWidth="1" opacity="0.25" />
          {/* Small sparkle */}
          <circle cx="80" cy="30" r="2" fill={stroke} opacity="0.5" />
        </svg>
      )

    /* Capgemini — ML / Neural Network */
    case 2:
      return (
        <svg viewBox="0 0 160 160" fill="none" className="exp-svg">
          {/* Input layer */}
          <circle cx="25" cy="40" r="7" stroke={stroke} strokeWidth="1.5" opacity="0.6" />
          <circle cx="25" cy="80" r="7" stroke={stroke} strokeWidth="1.5" opacity="0.6" />
          <circle cx="25" cy="120" r="7" stroke={stroke} strokeWidth="1.5" opacity="0.6" />
          {/* Hidden layer */}
          <circle cx="80" cy="50" r="8" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
          <circle cx="80" cy="90" r="8" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
          <circle cx="80" cy="130" r="8" stroke={stroke2} strokeWidth="1.5" opacity="0.5" />
          {/* Output */}
          <circle cx="135" cy="80" r="10" stroke={stroke} strokeWidth="1.5" />
          <circle cx="135" cy="80" r="4" fill={stroke} opacity="0.45" />
          {/* Connections input→hidden */}
          <line x1="32" y1="42" x2="72" y2="50" stroke={stroke} strokeWidth="0.8" opacity="0.25" />
          <line x1="32" y1="42" x2="72" y2="88" stroke={stroke} strokeWidth="0.8" opacity="0.15" />
          <line x1="32" y1="80" x2="72" y2="52" stroke={stroke} strokeWidth="0.8" opacity="0.15" />
          <line x1="32" y1="80" x2="72" y2="90" stroke={stroke} strokeWidth="0.8" opacity="0.25" />
          <line x1="32" y1="120" x2="72" y2="90" stroke={stroke} strokeWidth="0.8" opacity="0.15" />
          <line x1="32" y1="120" x2="72" y2="128" stroke={stroke} strokeWidth="0.8" opacity="0.25" />
          {/* Connections hidden→output */}
          <line x1="88" y1="52" x2="125" y2="78" stroke={stroke} strokeWidth="0.8" opacity="0.25" />
          <line x1="88" y1="90" x2="125" y2="80" stroke={stroke} strokeWidth="0.8" opacity="0.25" />
          <line x1="88" y1="128" x2="125" y2="82" stroke={stroke} strokeWidth="0.8" opacity="0.15" />
        </svg>
      )

    /* Capgemini Innovation — Hub & spoke / API */
    case 3:
      return (
        <svg viewBox="0 0 160 160" fill="none" className="exp-svg">
          {/* Central hub */}
          <circle cx="80" cy="80" r="18" stroke={stroke} strokeWidth="1.5" />
          <circle cx="80" cy="80" r="6" fill={stroke} opacity="0.3" />
          {/* Outer nodes */}
          <circle cx="80" cy="20" r="7" stroke={stroke} strokeWidth="1.5" opacity="0.6" />
          <circle cx="132" cy="50" r="7" stroke={stroke2} strokeWidth="1.5" opacity="0.6" />
          <circle cx="132" cy="110" r="7" stroke={stroke} strokeWidth="1.5" opacity="0.6" />
          <circle cx="80" cy="140" r="7" stroke={stroke2} strokeWidth="1.5" opacity="0.6" />
          <circle cx="28" cy="110" r="7" stroke={stroke} strokeWidth="1.5" opacity="0.6" />
          <circle cx="28" cy="50" r="7" stroke={stroke2} strokeWidth="1.5" opacity="0.6" />
          {/* Spokes */}
          <line x1="80" y1="27" x2="80" y2="62" stroke={stroke} strokeWidth="1" opacity="0.3" />
          <line x1="126" y1="54" x2="96" y2="70" stroke={stroke} strokeWidth="1" opacity="0.3" />
          <line x1="126" y1="106" x2="96" y2="90" stroke={stroke} strokeWidth="1" opacity="0.3" />
          <line x1="80" y1="98" x2="80" y2="133" stroke={stroke} strokeWidth="1" opacity="0.3" />
          <line x1="34" y1="106" x2="64" y2="90" stroke={stroke} strokeWidth="1" opacity="0.3" />
          <line x1="34" y1="54" x2="64" y2="70" stroke={stroke} strokeWidth="1" opacity="0.3" />
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
