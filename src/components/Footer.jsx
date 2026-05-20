import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner grid-3">
        <div>
          <p className="footer__brand">Luxe Bangalore</p>
          <p className="footer__tagline">The Smart Way To Find Real Estate.</p>
        </div>

        <div>
          <p className="footer__heading">Company</p>
          <div className="footer__links">
            <Link to="/about">About Us</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>

        <div>
          <p className="footer__heading">Support</p>
          <div className="footer__links">
            <Link to="/contact">Contact</Link>
            <Link to="/help">Help Center</Link>
            <Link to="/faq">FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
