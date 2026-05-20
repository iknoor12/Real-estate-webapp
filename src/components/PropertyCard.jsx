import { useApp } from '../context/AppContext'

function PropertyCard({ slug, image, title, price, location, beds, baths, sqft }) {
  const { isWishlisted, toggleWishlist } = useApp()
  const saved = isWishlisted(slug)

  const onHeartClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    toggleWishlist(slug, title)
  }

  return (
    <article className="card-property-wrap">
      <div className="card-property">
        <div className="card-property__image-wrap">
          <span className="card-property__verified">✓ Verified</span>
          <img src={image} alt={title} className="card-property__image" />
          <button
            type="button"
            className={`card-property__heart ${saved ? 'card-property__heart--active' : ''}`}
            onClick={onHeartClick}
            aria-label={saved ? 'Remove from wishlist' : 'Save to wishlist'}
          >
            {saved ? '♥' : '♡'}
          </button>
        </div>

        <div className="card-property__body">
          <p className="card-property__price">{price}</p>
          <p className="card-property__title">{title}</p>
          <p className="card-property__location">{location}</p>

          <div className="card-property__meta">
            <span>{beds} Beds</span>
            <span>{baths} Baths</span>
            <span>{sqft} sqft</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PropertyCard
