import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { Analytics } from '../utils/analytics'
import './Blog.css'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  readTime: string
  comingSoon?: boolean
}

function Blog() {
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

  const posts: BlogPost[] = t.blog.posts as BlogPost[]

  return (
    <main className="blog-page">
      <section className="blog-hero fade-in">
        <h1>{t.blog.title}</h1>
        <p>{t.blog.subtitle}</p>
      </section>

      <section className="blog-grid">
        {posts.map((post, index) => (
          <article key={index} className={`blog-card fade-in ${post.comingSoon ? 'coming-soon' : ''}`}>
            {post.comingSoon ? (
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h2>{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-tags">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="blog-tag">{tag}</span>
                  ))}
                </div>
                <div className="coming-soon-badge">
                  <span>🚧 {t.blog.comingSoon}</span>
                </div>
              </div>
            ) : (
              <Link 
                to={`/blog/${post.slug}`} 
                className="blog-card-link"
                onClick={() => Analytics.ctaClick(`blog-${post.slug}`)}
              >
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-tags">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="blog-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            )}
          </article>
        ))}
      </section>

      <section className="blog-cta fade-in">
        <p>{t.blog.ctaText}</p>
        <div className="blog-subscribe">
          <span className="subscribe-icon">📬</span>
          <span>{t.blog.followText}</span>
        </div>
      </section>
    </main>
  )
}

export default Blog
