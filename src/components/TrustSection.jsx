function TrustSection() {
  const features = [
    {
      icon: '🛡️',
      title: 'Verified Owners',
      text: 'Every listing is cross-verified.',
    },
    {
      icon: '📸',
      title: 'Visual Inspection',
      text: 'Real images and property reviews.',
    },
    {
      icon: '📄',
      title: 'Standardized Leases',
      text: 'Transparent agreements for everyone.',
    },
  ]

  return (
    <section id="trust" className="section section--beige" style={{ textAlign: 'center' }}>
      <div className="section-inner">
        <h2 className="section-title">The Trust Signal Difference</h2>
        <p className="section-subtitle">
          We solve the chaos of the Bangalore rental market.
        </p>

        <div className="grid-3" style={{ marginTop: '3.5rem' }}>
          {features.map((item) => (
            <div key={item.title} className="card-trust">
              <div className="card-trust__icon">{item.icon}</div>
              <h3 className="card-trust__title">{item.title}</h3>
              <p className="card-trust__text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustSection
