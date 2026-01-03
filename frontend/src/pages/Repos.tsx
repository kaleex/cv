import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { Analytics } from '../utils/analytics'
import './Repos.css'

interface Repo {
  name: string
  description: string
  tech: string[]
  status: string
  url?: string
  highlights: string[]
}

function Repos() {
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

  const repos: Repo[] = t.repos.projects as Repo[]

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'completed': { class: 'status-completed', label: t.repos.statusLabels.completed },
      'in-progress': { class: 'status-progress', label: t.repos.statusLabels.inProgress },
      'planned': { class: 'status-planned', label: t.repos.statusLabels.planned }
    }
    const config = statusConfig[status as keyof typeof statusConfig]
    return <span className={`status-badge ${config.class}`}>{config.label}</span>
  }

  return (
    <main className="repos-page">
      <section className="repos-hero fade-in">
        <h1>{t.repos.title}</h1>
        <p>{t.repos.subtitle}</p>
      </section>

      <section className="repos-grid">
        {repos.map((repo, index) => (
          <article key={index} className="repo-card fade-in">
            <div className="repo-header">
              <div className="repo-title-row">
                <h2>{repo.name}</h2>
                {getStatusBadge(repo.status)}
              </div>
              <p className="repo-description">{repo.description}</p>
            </div>

            <div className="repo-tech">
              {repo.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="repo-highlights">
              <h3>{t.repos.highlightsLabel}</h3>
              <ul>
                {repo.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>

            {repo.url && (
              <a 
                href={repo.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="repo-link"
                onClick={() => Analytics.ctaClick(`repo-${repo.name}`)}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                {t.repos.viewOnGithub}
              </a>
            )}

            {!repo.url && repo.status === 'in-progress' && (
              <div className="repo-coming-soon">
                <span>🚧 {t.repos.comingSoon}</span>
              </div>
            )}
          </article>
        ))}
      </section>

      <section className="repos-cta fade-in">
        <p>{t.repos.ctaText}</p>
        <a 
          href="https://github.com/Killex94" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-profile-link"
          onClick={() => Analytics.ctaClick('github-profile')}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          {t.repos.viewAllRepos}
        </a>
      </section>
    </main>
  )
}

export default Repos
