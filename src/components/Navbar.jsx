import { Link, useLocation } from 'react-router-dom'
import { useApp } from '../context/AppContext'

function Navbar() {
  const { wishlist } = useApp()
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Luxe Bangalore
      </Link>

      <div className="navbar-links">
        <a href="/#recommended" className={isHome ? 'navbar-link--active' : ''}>
          Browse
        </a>
        <a href="/#trust">Verified</a>
        <a href="/#neighborhoods">Neighborhoods</a>
        <a href="/#cta">Invest</a>
        {wishlist.length > 0 && (
          <a href="/#saved" className="navbar-wishlist">
            Saved <span className="navbar-wishlist__count">{wishlist.length}</span>
          </a>
        )}
      </div>

      <div className="navbar-actions">
        <button type="button" className="btn btn-ghost">
          Sign In
        </button>
        <button type="button" className="btn btn-primary">
          Post Property
        </button>
      </div>
    </nav>
  )
}

export default Navbar
