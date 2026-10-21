import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import {
  CloudIcon,
  CircleStackIcon,
  CommandLineIcon,
  CogIcon,
  ArrowPathIcon,
  UserGroupIcon,
  ArrowRightIcon,
} from '../components/Icons'
import './Skills.css'

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  architecture: UserGroupIcon,
  cloud: CloudIcon,
  compute: CogIcon,
  data: CircleStackIcon,
  delivery: ArrowPathIcon,
  software: CommandLineIcon,
}

function Skills() {
  const { t } = useLanguage()

  return (
    <main className="skills-page">
      <header className="skills-header">
        <h1>{t.skills.title}</h1>
        <p>{t.skills.subtitle}</p>
        <Link to="/experience" className="skills-experience-link">
          {t.skills.experienceAction} <ArrowRightIcon className="icon-sm" />
        </Link>
      </header>

      <div className="skills-container">
        {t.skills.categories.map((category) => {
          const IconComponent = categoryIcons[category.id] || CloudIcon
          return (
            <section key={category.id} className="skill-category">
              <div className="category-header">
                <IconComponent className="category-icon" />
                <h2>{category.title}</h2>
              </div>
              <p className="skill-evidence">{category.description}</p>
              <ul className="skill-tools">
                {category.tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
            </section>
          )
        })}
      </div>

      <details className="roadmap-section">
        <summary>{t.roadmap.title}</summary>
        <div className="roadmap-content">
          <section className="roadmap-column">
            <h2>{t.roadmap.completed}</h2>
            <ul className="roadmap-list completed">
              {t.roadmap.completedItems.map((name) => <li key={name}>{name}</li>)}
            </ul>
          </section>
          <section className="roadmap-column">
            <h2>{t.roadmap.inProgress}</h2>
            <ul className="roadmap-list in-progress">
              {t.roadmap.inProgressItems.map((item) => (
                <li key={item.name}>
                  <div className="roadmap-item-content">
                    <span>{item.name}</span>
                    <span className="roadmap-target">{item.target}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section className="roadmap-column">
            <h2>{t.roadmap.upcoming}</h2>
            <ul className="roadmap-list upcoming">
              {t.roadmap.upcomingItems.map((name) => <li key={name}>{name}</li>)}
            </ul>
          </section>
        </div>
      </details>

      <div className="skills-contact">
        <Link to="/contact" className="skills-contact-link">
          {t.skills.contactAction} <ArrowRightIcon className="icon-sm" />
        </Link>
      </div>
    </main>
  )
}

export default Skills
