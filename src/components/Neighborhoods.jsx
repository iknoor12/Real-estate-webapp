import { Link } from 'react-router-dom'
import { neighborhoods } from '../data/neighborhoods'

function Neighborhoods() {
  return (
    <section id="neighborhoods" className="section section--dark section-neighborhoods">
      <div className="section-inner">
        <h2 className="section-title">Verified Neighborhoods</h2>

        <div className="grid-3" style={{ marginTop: '2.5rem' }}>
          {neighborhoods.map((item) => (
            <Link
              key={item.slug}
              to={`/neighborhood/${item.slug}`}
              className="card-neighborhood"
            >
              <img
                src={item.image}
                alt={item.name}
                className="card-neighborhood__image"
              />
              <div className="card-neighborhood__overlay" />
              <h3 className="card-neighborhood__title">{item.name}</h3>
              <span className="card-neighborhood__hint">View details →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Neighborhoods
