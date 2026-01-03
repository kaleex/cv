import { skills, roadmap } from '../data/portfolio'
import { useLanguage } from '../i18n/LanguageContext'
import './Skills.css'

function Skills() {
  const { t } = useLanguage()

  const getLevelLabel = (level: number) => {
    if (level >= 90) return t.skills.levels.expert.split(' ')[0]
    if (level >= 75) return t.skills.levels.advanced.split(' ')[0]
    if (level >= 60) return t.skills.levels.intermediate.split(' ')[0]
    return 'Learning'
  }

  return (
    <div className="skills-page">
      <header className="skills-header">
        <h1>{t.skills.title}</h1>
        <p>{t.skills.subtitle}</p>
      </header>

      <div className="skills-container">
        {skills.map((category, idx) => (
          <section key={idx} className="skill-category">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h2>{category.category}</h2>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="skill-card">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-label">{getLevelLabel(skill.level)}</span>
                  </div>
                  <div className="skill-bar-container">
                    <div 
                      className="skill-bar-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="skills-legend">
        <h3>{t.skills.proficiency}</h3>
        <div className="legend-items">
          <div className="legend-item">
            <span className="legend-dot expert"></span>
            <span>{t.skills.levels.expert}</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot advanced"></span>
            <span>{t.skills.levels.advanced}</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot intermediate"></span>
            <span>{t.skills.levels.intermediate}</span>
          </div>
        </div>
      </div>

      <div className="roadmap-section">
        <h2>🎯 {t.roadmap.title}</h2>
        <div className="roadmap-content">
          <div className="roadmap-column">
            <h3>{t.roadmap.inProgress}</h3>
            <ul className="roadmap-list in-progress">
              {roadmap.inProgress.map((item, idx) => (
                <li key={idx}>
                  <span className="roadmap-icon">🔄</span>
                  <div className="roadmap-item-content">
                    <span className="roadmap-name">{item.name}</span>
                    <span className="roadmap-target">{item.target}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="roadmap-column">
            <h3>{t.roadmap.upcoming}</h3>
            <ul className="roadmap-list upcoming">
              {roadmap.upcoming.map((item, idx) => (
                <li key={idx}>
                  <span className="roadmap-icon">📋</span>
                  <span className="roadmap-name">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
