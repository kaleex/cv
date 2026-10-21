import { useLanguage } from '../i18n/LanguageContext'
import { useFadeIn } from '../hooks/useFadeIn'
import { MapPinIcon } from '../components/Icons'
import FeaturedProject from '../components/FeaturedProject'
import './Experience.css'

interface ExperienceItem {
  company: string
  role: string
  period: string
  location?: string
  description: string[]
  technologies: string[]
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

      <FeaturedProject />

      <div className="experience-content">
        <section className="timeline-section fade-in">
        <div className="timeline">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className="timeline-item"
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="company">{exp.company}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <h4 className="role">{exp.role}</h4>
                {exp.location && <p className="location"><MapPinIcon className="location-icon" /> {exp.location}</p>}
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
