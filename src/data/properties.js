export const properties = [
  {
    slug: 'skyline-residency',
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1973&auto=format&fit=crop',
    title: 'Skyline Residency',
    price: '₹85,000',
    priceValue: 85000,
    location: 'Indiranagar',
    beds: 3,
    baths: 2,
    sqft: 2400,
    type: 'Apartment',
    furnished: 'Semi-furnished',
    description:
      'Spacious 3BHK on the 8th floor with city views, modular kitchen, and covered parking. Building has gym, pool, and 24/7 security. Owner verified via Luxe Bangalore.',
    amenities: ['Lift', 'Power backup', 'Gym', 'Pool', 'Parking'],
  },
  {
    slug: 'prestige-villa',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1974&auto=format&fit=crop',
    title: 'Prestige Villa',
    price: '₹2,45,000',
    priceValue: 245000,
    location: 'North Bangalore',
    beds: 4,
    baths: 4,
    sqft: 4200,
    type: 'Independent Villa',
    furnished: 'Fully furnished',
    description:
      'Premium 4BHK villa with private garden, home theatre, and smart-home features. Ideal for executives relocating to Bangalore. Lease terms negotiable.',
    amenities: ['Garden', 'Smart home', 'Servant quarter', 'Security', 'Club access'],
  },
  {
    slug: 'embassy-heights',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1974&auto=format&fit=crop',
    title: 'Embassy Heights',
    price: '₹1,10,000',
    priceValue: 110000,
    location: 'Koramangala',
    beds: 3,
    baths: 3,
    sqft: 2100,
    type: 'High-rise Apartment',
    furnished: 'Unfurnished',
    description:
      'Corner-unit 3BHK with floor-to-ceiling windows and two balconies. Walking distance to cafes and coworking spaces. Visual inspection completed last week.',
    amenities: ['Balcony', 'Clubhouse', 'Visitor parking', 'CCTV', 'Water softener'],
  },
]

export function getPropertyBySlug(slug) {
  return properties.find((p) => p.slug === slug)
}
