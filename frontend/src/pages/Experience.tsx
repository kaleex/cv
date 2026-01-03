import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import './Experience.css'

interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  description: string[]
  technologies: string[]
}

function Experience() {
  const { t } = useLanguage()

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

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const experiences: ExperienceItem[] = t.experience.timeline as ExperienceItem[]

  return (
    <main className="experience-page">
      <section className="experience-hero fade-in">
        <h1>{t.experience.title}</h1>
        <p>{t.experience.subtitle}</p>
      </section>

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
                <p className="location">📍 {exp.location}</p>
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
    </main>
  )
}

export default Experience
