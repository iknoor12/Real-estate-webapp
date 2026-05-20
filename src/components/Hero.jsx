import { useState } from 'react'
import { useApp } from '../context/AppContext'

const budgetOptions = [
  { value: '', label: 'Any budget' },
  { value: 'under-50', label: 'Under ₹50,000' },
  { value: '50-100', label: '₹50,000 – ₹1,00,000' },
  { value: '100-200', label: '₹1,00,000 – ₹2,00,000' },
  { value: 'above-200', label: 'Above ₹2,00,000' },
]

const typeOptions = [
  { value: '', label: 'Any type' },
  { value: 'Apartment', label: 'Apartment' },
  { value: 'High-rise Apartment', label: 'High-rise' },
  { value: 'Independent Villa', label: 'Villa' },
]

function Hero() {
  const { applySearch } = useApp()
  const [neighborhood, setNeighborhood] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [budget, setBudget] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    applySearch({ neighborhood, propertyType, budget })
  }

  return (
    <section
      className="hero hero--animated"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title animate-fade-down">
          The Smart Way to Find Your Next Home in Bangalore.
        </h1>
        <p className="hero-subtitle animate-fade-down" style={{ animationDelay: '0.2s' }}>
          Verified properties, data-driven insights, and the ultimate trust signal for modern professionals.
        </p>

        <form className="search-bar animate-fade-up" style={{ animationDelay: '0.35s' }} onSubmit={handleSearch}>
          <div className="search-bar__field">
            <span className="search-bar__icon" aria-hidden>📍</span>
            <input
              type="text"
              placeholder="Neighborhood"
              className="input-field"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
            />
          </div>
          <div className="search-bar__field">
            <span className="search-bar__icon" aria-hidden>🏠</span>
            <select
              className="input-field input-field--select"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              {typeOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div className="search-bar__field">
            <span className="search-bar__icon" aria-hidden>₹</span>
            <select
              className="input-field input-field--select"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            >
              {budgetOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary search-bar__btn">
            <span className="search-bar__btn-icon" aria-hidden>🔍</span>
            Search
          </button>
        </form>

        <div className="hero-quick animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <span className="hero-quick__label">Quick picks:</span>
          {['Indiranagar', 'Villa', 'Under ₹1L'].map((tag) => (
            <button
              key={tag}
              type="button"
              className="hero-quick__chip"
              onClick={() => {
                if (tag === 'Indiranagar') applySearch({ neighborhood: 'Indiranagar', propertyType: '', budget: '' })
                else if (tag === 'Villa') applySearch({ neighborhood: '', propertyType: 'Independent Villa', budget: '' })
                else applySearch({ neighborhood: '', propertyType: '', budget: '50-100' })
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
