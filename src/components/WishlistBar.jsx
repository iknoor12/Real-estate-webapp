import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { properties } from '../data/properties'
import ScrollReveal from './ScrollReveal'

function WishlistBar() {
  const { wishlist } = useApp()
  const saved = properties.filter((p) => wishlist.includes(p.slug))

  if (saved.length === 0) return null

  return (
    <section id="saved" className="section section--dark wishlist-bar">
      <div className="section-inner">
        <ScrollReveal>
          <h2 className="section-title">Your saved homes ❤️</h2>
          <p className="section-subtitle">{saved.length} propert{saved.length === 1 ? 'y' : 'ies'} in wishlist</p>
        </ScrollReveal>
        <div className="wishlist-bar__chips">
          {saved.map((p) => (
            <Link key={p.slug} to={`/property/${p.slug}`} className="wishlist-chip">
              {p.title} · {p.price}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WishlistBar
