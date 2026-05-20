import { useCountUp } from '../hooks/useCountUp'
import ScrollReveal from './ScrollReveal'

function StatItem({ end, suffix = '', label }) {
  const { value, ref } = useCountUp(end)

  return (
    <div ref={ref} className="stat-banner__item">
      <p className="stat-banner__number">
        {value.toLocaleString('en-IN')}
        {suffix}
      </p>
      <p className="stat-banner__label">{label}</p>
    </div>
  )
}

function StatsSection() {
  return (
    <section className="stat-banner section--alt">
      <div className="section-inner">
        <ScrollReveal>
          <p className="stat-banner__intro">Trusted by Bangalore renters</p>
        </ScrollReveal>
        <div className="stat-banner__grid">
          <ScrollReveal delay={80}>
            <StatItem end={5000} suffix="+" label="Happy renters" />
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <StatItem end={438} suffix="+" label="Verified listings" />
          </ScrollReveal>
          <ScrollReveal delay={240}>
            <StatItem end={94} suffix="%" label="Trust score avg." />
          </ScrollReveal>
          <ScrollReveal delay={320}>
            <StatItem end={12} suffix="" label="Neighborhoods" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
