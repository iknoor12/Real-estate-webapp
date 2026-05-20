export const neighborhoods = [
  {
    slug: 'indiranagar',
    name: 'Indiranagar',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1974&auto=format&fit=crop',
    tagline: 'Upscale living in the heart of East Bangalore',
    avgRent: '₹45,000 – ₹1,20,000 / month',
    listings: 128,
    trustScore: 94,
    highlights: [
      '100m Metro connectivity',
      'Premium cafes & nightlife',
      'Top schools within 2 km',
    ],
    description:
      'Indiranagar is one of Bangalore’s most sought-after neighborhoods, known for tree-lined streets, boutique retail, and a vibrant food scene. Our verified listings here are hand-picked for quality and transparent pricing.',
    sampleProperties: [
      { title: 'Skyline Residency', beds: 3, rent: '₹85,000' },
      { title: 'CMH Road Apartment', beds: 2, rent: '₹52,000' },
      { title: '12th Main Villa', beds: 4, rent: '₹1,45,000' },
    ],
  },
  {
    slug: 'whitefield',
    name: 'Whitefield',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1974&auto=format&fit=crop',
    tagline: 'IT hub meets suburban comfort',
    avgRent: '₹28,000 – ₹95,000 / month',
    listings: 214,
    trustScore: 91,
    highlights: [
      'Major tech parks nearby',
      'Gated communities & villas',
      'Phoenix Marketcity access',
    ],
    description:
      'Whitefield offers spacious homes popular with IT professionals and families. Expect modern apartments, villa communities, and strong rental demand year-round.',
    sampleProperties: [
      { title: 'Prestige Villa', beds: 4, rent: '₹2,45,000' },
      { title: 'ITPL Greens Flat', beds: 2, rent: '₹38,000' },
      { title: 'Hope Farm Layout Home', beds: 3, rent: '₹65,000' },
    ],
  },
  {
    slug: 'sarjapur',
    name: 'Sarjapur',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1974&auto=format&fit=crop',
    tagline: 'Growing corridor with value picks',
    avgRent: '₹22,000 – ₹75,000 / month',
    listings: 96,
    trustScore: 89,
    highlights: [
      'New developments & layouts',
      'Good schools & hospitals',
      'ORR access in 15 mins',
    ],
    description:
      'Sarjapur Road has emerged as a balanced choice for renters who want space without central Bangalore premiums. Verified owners and standardized leases make browsing here stress-free.',
    sampleProperties: [
      { title: 'Embassy Heights', beds: 3, rent: '₹1,10,000' },
      { title: 'Sarjapur Social Flat', beds: 2, rent: '₹32,000' },
      { title: 'Greenwood Enclave', beds: 3, rent: '₹48,000' },
    ],
  },
]

export function getNeighborhoodBySlug(slug) {
  return neighborhoods.find((n) => n.slug === slug)
}
