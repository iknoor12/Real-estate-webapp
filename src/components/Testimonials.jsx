import { useEffect, useState } from 'react'
import ScrollReveal from './ScrollReveal'

const reviews = [
  {
    name: 'Priya M.',
    role: 'Product Manager, Indiranagar',
    text: 'Found my 3BHK in a week. The verified badge gave me peace of mind — no broker drama.',
    stars: 5,
  },
  {
    name: 'Rahul K.',
    role: 'Founder, Whitefield',
    text: 'Luxe Bangalore feels premium but honest. Photos matched reality on the first visit.',
    stars: 5,
  },
  {
    name: 'Ananya S.',
    role: 'Designer, Koramangala',
    text: 'Wishlist + search made comparing homes fun. My roommate and I shortlisted in one evening.',
    stars: 5,
  },
]

function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const review = reviews[index]

  return (
    <section id="testimonials" className="section section--alt testimonials">
      <div className="section-inner testimonials__inner">
        <ScrollReveal>
          <h2 className="section-title testimonials__title">What renters say</h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <blockquote className="testimonial-card testimonial-card--animate" key={index}>
            <div className="testimonial-card__stars" aria-hidden>
              {'★'.repeat(review.stars)}
            </div>
            <p className="testimonial-card__text">&ldquo;{review.text}&rdquo;</p>
            <footer className="testimonial-card__author">
              <strong>{review.name}</strong>
              <span>{review.role}</span>
            </footer>
          </blockquote>
        </ScrollReveal>

        <div className="testimonials__controls">
          <button
            type="button"
            className="testimonials__arrow"
            onClick={() => setIndex((i) => (i - 1 + reviews.length) % reviews.length)}
            aria-label="Previous review"
          >
            ←
          </button>
          <div className="testimonials__dots">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`testimonials__dot ${i === index ? 'testimonials__dot--active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            className="testimonials__arrow"
            onClick={() => setIndex((i) => (i + 1) % reviews.length)}
            aria-label="Next review"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
