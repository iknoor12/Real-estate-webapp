export function filterProperties(properties, { neighborhood, propertyType, budget }) {
  return properties.filter((p) => {
    if (neighborhood.trim()) {
      const q = neighborhood.trim().toLowerCase()
      if (!p.location.toLowerCase().includes(q) && !p.title.toLowerCase().includes(q)) {
        return false
      }
    }

    if (propertyType && p.type !== propertyType) {
      return false
    }

    if (budget) {
      const price = p.priceValue
      if (budget === 'under-50' && price >= 50000) return false
      if (budget === '50-100' && (price < 50000 || price > 100000)) return false
      if (budget === '100-200' && (price < 100000 || price > 200000)) return false
      if (budget === 'above-200' && price <= 200000) return false
    }

    return true
  })
}
