import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { Analytics } from '../utils/analytics'
import './Badges.css'

const DEFAULT_BADGE_IMAGE = '/badges/default-badge.svg'

interface Badge {
  name: string
  issuer: string
  date: string
  credentialId?: string
  credentialUrl?: string
  image: string
  status: 'earned' | 'in-progress' | 'planned'
}

function Badges() {
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

  const badges: Badge[] = t.badges.certifications as Badge[]

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'earned': { class: 'status-earned', label: t.badges.statusLabels.earned },
      'in-progress': { class: 'status-progress', label: t.badges.statusLabels.inProgress },
      'planned': { class: 'status-planned', label: t.badges.statusLabels.planned }
    }
    const config = statusConfig[status as keyof typeof statusConfig]
    return <span className={`cert-status ${config.class}`}>{config.label}</span>
  }

  const earnedBadges = badges.filter(b => b.status === 'earned')
  const inProgressBadges = badges.filter(b => b.status === 'in-progress')
  const plannedBadges = badges.filter(b => b.status === 'planned')

  return (
    <main className="badges-page">
      <section className="badges-hero fade-in">
        <h1>{t.badges.title}</h1>
        <p>{t.badges.subtitle}</p>
      </section>

      {earnedBadges.length > 0 && (
        <section className="badges-section fade-in">
          <h2 className="section-title">
            <span className="section-icon">🏆</span>
            {t.badges.earnedTitle}
          </h2>
          <div className="badges-grid">
            {earnedBadges.map((badge, index) => (
              <article key={index} className="badge-card earned">
                <div className="badge-image">
                  <img 
                    src={badge.image || DEFAULT_BADGE_IMAGE} 
                    alt={badge.name}
                    onError={(e) => { e.currentTarget.src = DEFAULT_BADGE_IMAGE }}
                  />
                </div>
                <div className="badge-info">
                  <h3>{badge.name}</h3>
                  <p className="badge-issuer">{badge.issuer}</p>
                  <p className="badge-date">{badge.date}</p>
                  {getStatusBadge(badge.status)}
                  {badge.credentialUrl && (
                    <a 
                      href={badge.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="verify-link"
                      onClick={() => Analytics.ctaClick(`badge-verify-${badge.name}`)}
                    >
                      {t.badges.verifyCredential}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {inProgressBadges.length > 0 && (
        <section className="badges-section fade-in">
          <h2 className="section-title">
            <span className="section-icon">📚</span>
            {t.badges.inProgressTitle}
          </h2>
          <div className="badges-grid">
            {inProgressBadges.map((badge, index) => (
              <article key={index} className="badge-card in-progress">
                <div className="badge-image placeholder">
                  <img 
                    src={badge.image || DEFAULT_BADGE_IMAGE} 
                    alt={badge.name}
                    onError={(e) => { e.currentTarget.src = DEFAULT_BADGE_IMAGE }}
                  />
                </div>
                <div className="badge-info">
                  <h3>{badge.name}</h3>
                  <p className="badge-issuer">{badge.issuer}</p>
                  <p className="badge-date">{badge.date}</p>
                  {getStatusBadge(badge.status)}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {plannedBadges.length > 0 && (
        <section className="badges-section fade-in">
          <h2 className="section-title">
            <span className="section-icon">🎯</span>
            {t.badges.plannedTitle}
          </h2>
          <div className="badges-grid planned-grid">
            {plannedBadges.map((badge, index) => (
              <article key={index} className="badge-card planned">
                <div className="badge-image placeholder">
                  <img 
                    src={badge.image || DEFAULT_BADGE_IMAGE} 
                    alt={badge.name}
                    onError={(e) => { e.currentTarget.src = DEFAULT_BADGE_IMAGE }}
                  />
                </div>
                <div className="badge-info">
                  <h3>{badge.name}</h3>
                  <p className="badge-issuer">{badge.issuer}</p>
                  <p className="badge-date">{badge.date}</p>
                  {getStatusBadge(badge.status)}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="badges-cta fade-in">
        <p>{t.badges.ctaText}</p>
      </section>
    </main>
  )
}

export default Badges
