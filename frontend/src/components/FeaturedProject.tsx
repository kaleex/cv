import { useLanguage } from '../i18n/LanguageContext'
import './FeaturedProject.css'

export default function FeaturedProject() {
  const { t } = useLanguage()
  const project = t.featuredProject

  return (
    <section className="featured-project" aria-labelledby="featured-project-title">
      <div className="container">
        <p className="featured-project-eyebrow">{project.eyebrow}</p>
        <h2 id="featured-project-title">{project.title}</h2>
        <p className="featured-project-summary">{project.summary}</p>
        <dl className="featured-project-facts">
          {project.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
        <div className="featured-project-responsibilities">
          {project.responsibilities.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
