import ScrollReveal from './ScrollReveal'

const steps = [
  { num: '01', title: 'Search smart', text: 'Filter by area, budget & type in seconds.' },
  { num: '02', title: 'Verify trust', text: 'Every owner & listing is cross-checked.' },
  { num: '03', title: 'Book a visit', text: 'Schedule tours with one tap (dummy flow).' },
  { num: '04', title: 'Move in happy', text: 'Standardized leases, zero hidden surprises.' },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="section section--alt">
      <div className="section-inner">
        <ScrollReveal>
          <h2 className="section-title">How Luxe Bangalore works</h2>
          <p className="section-subtitle">
            Four simple steps from browsing to your new doorstep.
          </p>
        </ScrollReveal>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 100}>
              <article className="step-card">
                <span className="step-card__num">{step.num}</span>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__text">{step.text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
