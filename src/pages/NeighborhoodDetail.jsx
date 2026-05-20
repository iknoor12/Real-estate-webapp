import { Link, useParams } from 'react-router-dom'
import { getNeighborhoodBySlug } from '../data/neighborhoods'

function NeighborhoodDetail() {
  const { slug } = useParams()
  const neighborhood = getNeighborhoodBySlug(slug)

  if (!neighborhood) {
    return (
      <div className="not-found page-content">
        <h1 className="not-found__title">Neighborhood not found</h1>
        <Link to="/" className="link-back" style={{ marginTop: '1rem' }}>
          ← Back to home
        </Link>
      </div>
    )
  }

  return (
    <div className="page-content">
      <header className="detail-hero">
        <img
          src={neighborhood.image}
          alt={neighborhood.name}
          className="detail-hero__image"
        />
        <div className="detail-hero__overlay" />
        <div className="detail-hero__content">
          <Link to="/" className="link-back" style={{ color: '#e5e7eb' }}>
            ← Home
          </Link>
          <h1 className="detail-hero__title">{neighborhood.name}</h1>
          <p className="detail-hero__tagline">{neighborhood.tagline}</p>
        </div>
      </header>

      <div className="detail-body">
        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          <div className="stat-card">
            <p className="stat-card__label">Avg. rent</p>
            <p className="stat-card__value">{neighborhood.avgRent}</p>
          </div>
          <div className="stat-card">
            <p className="stat-card__label">Verified listings</p>
            <p className="stat-card__value">{neighborhood.listings}</p>
          </div>
          <div className="stat-card stat-card--accent">
            <p className="stat-card__label">Trust score</p>
            <p className="stat-card__value">{neighborhood.trustScore}%</p>
          </div>
        </div>

        <p className="detail-description">{neighborhood.description}</p>

        <h2 className="detail-heading">Why renters choose this area</h2>
        <ul className="grid-3" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {neighborhood.highlights.map((item) => (
            <li key={item} className="highlight-item">
              <span className="highlight-item__check">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="detail-heading">Sample listings (dummy)</h2>
        <div className="grid-3">
          {neighborhood.sampleProperties.map((prop) => (
            <article key={prop.title} className="mini-listing">
              <h3 className="mini-listing__title">{prop.title}</h3>
              <p className="mini-listing__meta">{prop.beds} Beds</p>
              <p className="mini-listing__price">{prop.rent} / mo</p>
              <button type="button" className="btn btn-outline" style={{ width: '100%', marginTop: '1rem' }}>
                Request tour
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NeighborhoodDetail
