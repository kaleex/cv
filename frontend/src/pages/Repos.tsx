import { useLanguage } from '../i18n/LanguageContext'
import { useFadeIn } from '../hooks/useFadeIn'
import { Analytics } from '../utils/analytics'
import { GitHubIcon, WrenchScrewdriverIcon } from '../components/Icons'
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
  useFadeIn()

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
      <header className="repos-header">
        <h1>{t.repos.title}</h1>
        <p>{t.repos.subtitle}</p>
      </header>

      <div className="repos-content">
        <section className="repos-grid fade-in">
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
                <GitHubIcon className="repo-github-icon" />
                {t.repos.viewOnGithub}
              </a>
            )}

            {!repo.url && repo.status === 'in-progress' && (
              <div className="repo-coming-soon">
                <WrenchScrewdriverIcon className="coming-soon-icon" /> {t.repos.comingSoon}
              </div>
            )}
          </article>
        ))}
        </section>

        <section className="repos-cta fade-in">
        <p>{t.repos.ctaText}</p>
        <a
          href="https://github.com/kaleex"
          target="_blank"
          rel="noopener noreferrer"
          className="github-profile-link"
          onClick={() => Analytics.ctaClick('github-profile')}
        >
          <GitHubIcon className="github-profile-icon" />
          {t.repos.viewAllRepos}
        </a>
        </section>
      </div>
    </main>
  )
}

export default Repos
