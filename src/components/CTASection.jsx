import { useState } from 'react'
import { useApp } from '../context/AppContext'
import ScrollReveal from './ScrollReveal'

function CTASection() {
  const { showToast } = useApp()
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) {
      showToast('Please enter your email 📧', 'info')
      return
    }
    showToast('Welcome! We’ll send curated homes soon 🏠', 'success')
    setEmail('')
  }

  return (
    <section id="cta" className="section section--dark">
      <div className="section-inner">
        <ScrollReveal>
          <div className="cta-box">
            <h2 className="cta-box__title">Ready to make your move?</h2>
            <p className="cta-box__text">
              Join 5,000+ professionals who found their perfect home.
            </p>

            <form className="cta-box__form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field cta-box__input"
                style={{ width: '100%', maxWidth: '22rem' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-primary cta-box__submit">
                Get Started
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default CTASection
