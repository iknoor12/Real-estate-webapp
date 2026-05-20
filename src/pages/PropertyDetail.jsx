import { Link, useParams } from 'react-router-dom'
import { getPropertyBySlug } from '../data/properties'
import { useApp } from '../context/AppContext'

function PropertyDetail() {
  const { slug } = useParams()
  const { isWishlisted, toggleWishlist, showToast } = useApp()
  const property = getPropertyBySlug(slug)

  if (!property) {
    return (
      <div className="not-found page-content">
        <h1 className="not-found__title">Property not found</h1>
        <Link to="/" className="link-back" style={{ marginTop: '1rem' }}>
          ← Back to home
        </Link>
      </div>
    )
  }

  return (
    <div className="property-detail page-content">
      <Link to="/" className="link-back">
        ← Back to listings
      </Link>

      <div className="property-detail__grid">
        <img
          src={property.image}
          alt={property.title}
          className="property-detail__image"
        />

        <div>
          <p className="property-detail__location">{property.location}</p>
          <h1 className="property-detail__title">{property.title}</h1>
          <p className="property-detail__price">
            {property.price}
            <span> / month</span>
          </p>

          <div className="property-detail__specs">
            <span>{property.beds} Beds</span>
            <span>{property.baths} Baths</span>
            <span>{property.sqft} sqft</span>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <span className="badge badge--gray">{property.type}</span>
            <span className="badge badge--primary">{property.furnished}</span>
          </div>

          <p className="property-detail__desc">{property.description}</p>

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <button type="button" className="btn btn-primary">
              Contact owner (dummy)
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => toggleWishlist(property.slug, property.title)}
            >
              {isWishlisted(property.slug) ? '♥ Saved' : '♡ Save'}
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => showToast('Tour request sent! We’ll call you soon 📞', 'success')}
            >
              Book a tour
            </button>
          </div>
        </div>
      </div>

      <h2 className="detail-heading">Amenities</h2>
      <ul className="amenity-list">
        {property.amenities.map((item) => (
          <li key={item} className="amenity-chip">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PropertyDetail
