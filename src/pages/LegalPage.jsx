import { Link } from 'react-router-dom'

function LegalPage({ title, children }) {
  return (
    <article className="legal-page page-content">
      <div className="legal-page__inner">
        <Link to="/" className="link-back legal-page__back">
          ← Back to home
        </Link>
        <h1 className="legal-page__title">{title}</h1>
        <p className="legal-page__meta">Last updated: May 2026 · Luxe Bangalore (demo)</p>
        <div className="legal-page__body">{children}</div>
      </div>
    </article>
  )
}

export default LegalPage
