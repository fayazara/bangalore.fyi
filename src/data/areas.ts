import { unsplash, photoIds } from "@/lib/photos"

export type Area = {
  slug: string
  name: string
  zone: "Central" | "East" | "West" | "South" | "North"
  image: string
  tagline: string
  description: string
  vibe: string[]
  avgRent1bhk: number
  avgRent2bhk: number
  stats: {
    connectivity: number
    nightlife: number
    familyFriendly: number
    walkability: number
  }
  highlights: string[]
}

export const areas: Area[] = [
  {
    slug: "indiranagar",
    name: "Indiranagar",
    zone: "East",
    image: unsplash(photoIds.city_street[1], 1200, 800),
    tagline: "Bars, boutiques and 100 Feet Road energy",
    description:
      "Bangalore's original nightlife strip, now equal parts craft coffee, D2C storefronts and rooftop bars. Busy and expensive, but everything is walkable off the metro.",
    vibe: ["Nightlife", "Shopping", "Well-connected", "Loud"],
    avgRent1bhk: 28000,
    avgRent2bhk: 45000,
    stats: { connectivity: 5, nightlife: 5, familyFriendly: 3, walkability: 4 },
    highlights: [
      "Metro station right on 100 Feet Road",
      "Highest density of cafes to work from in the city",
      "10 minutes to Domlur and the ORR tech corridor",
    ],
  },
  {
    slug: "koramangala",
    name: "Koramangala",
    zone: "South",
    image: unsplash(photoIds.city_street[3], 1200, 800),
    tagline: "Startup HQ and the city's food capital",
    description:
      "Split into numbered 'Blocks', Koramangala is where most early-stage startups set up shop. Forum Mall, Sony World Signal and a dense grid of restaurants keep it busy at all hours.",
    vibe: ["Startups", "Food", "Young crowd", "Traffic-heavy"],
    avgRent1bhk: 26000,
    avgRent2bhk: 42000,
    stats: { connectivity: 3, nightlife: 4, familyFriendly: 3, walkability: 4 },
    highlights: [
      "Highest concentration of startup offices in the city",
      "No metro yet - expect traffic on Sarjapur Road and Hosur Road",
      "Every cuisine you can think of, within 2 km",
    ],
  },
  {
    slug: "hsr-layout",
    name: "HSR Layout",
    zone: "South",
    image: unsplash(photoIds.apartment[0], 1200, 800),
    tagline: "Wide roads, new-age offices, quieter than Koramangala",
    description:
      "HSR grew up alongside Koramangala's startup boom but kept its residential character - wide sectors, parks, and a calmer pace once you're off 27th Main.",
    vibe: ["Family-friendly", "Startups", "Parks", "Planned layout"],
    avgRent1bhk: 22000,
    avgRent2bhk: 38000,
    stats: { connectivity: 3, nightlife: 3, familyFriendly: 4, walkability: 4 },
    highlights: [
      "Agara Lake and several sector parks for morning walks",
      "27th Main is the main commercial and cafe strip",
      "Close to Koramangala, Bellandur and the ORR",
    ],
  },
  {
    slug: "whitefield",
    name: "Whitefield",
    zone: "East",
    image: unsplash(photoIds.skyline[3], 1200, 800),
    tagline: "IT park country, now with a metro line",
    description:
      "Home to ITPL, EPIP Zone and a wall of tech campuses. Spread out and traffic-prone, but the Purple Line extension has made commutes far more predictable.",
    vibe: ["IT parks", "Malls", "Spread out", "Family-friendly"],
    avgRent1bhk: 18000,
    avgRent2bhk: 30000,
    stats: { connectivity: 4, nightlife: 2, familyFriendly: 4, walkability: 2 },
    highlights: [
      "Purple Line metro now connects straight to MG Road",
      "Phoenix Marketcity and VR Bengaluru for weekends",
      "Best value for larger apartments near tech campuses",
    ],
  },
  {
    slug: "jayanagar",
    name: "Jayanagar",
    zone: "South",
    image: unsplash(photoIds.park[0], 1200, 800),
    tagline: "Old Bangalore charm, tree-lined and unhurried",
    description:
      "One of Asia's largest planned suburbs when it was built. Wide avenues, legacy Udupi restaurants, and a genuinely walkable shopping complex.",
    vibe: ["Family-friendly", "Traditional", "Quiet", "Green"],
    avgRent1bhk: 19000,
    avgRent2bhk: 32000,
    stats: { connectivity: 4, nightlife: 2, familyFriendly: 5, walkability: 5 },
    highlights: [
      "Jayanagar 4th Block shopping complex, still unbeatable for essentials",
      "Two metro stations on the Green Line",
      "Some of the best filter coffee and breakfast joints in the city",
    ],
  },
  {
    slug: "malleswaram",
    name: "Malleswaram",
    zone: "West",
    image: unsplash(photoIds.park[4], 1200, 800),
    tagline: "Heritage bungalows and the Sampige Road market",
    description:
      "One of Bangalore's oldest and most traditional neighbourhoods, with tiled-roof houses, temple streets, and a produce market that's been running for decades.",
    vibe: ["Heritage", "Quiet", "Traditional", "Green"],
    avgRent1bhk: 20000,
    avgRent2bhk: 34000,
    stats: { connectivity: 4, nightlife: 1, familyFriendly: 5, walkability: 5 },
    highlights: [
      "Sampige Road and Margosa Road markets for fresh produce",
      "Direct metro access to Majestic and the tech corridor",
      "Some of the oldest filter coffee institutions in the city",
    ],
  },
  {
    slug: "electronic-city",
    name: "Electronic City",
    zone: "South",
    image: unsplash(photoIds.office[2], 1200, 800),
    tagline: "The original IT hub, split across Phase 1 and 2",
    description:
      "Sprawling tech campuses along the Hosur Road elevated expressway. Rents are the most affordable of any major tech hub, at the cost of distance from the city centre.",
    vibe: ["IT parks", "Affordable", "Spread out", "Highway access"],
    avgRent1bhk: 14000,
    avgRent2bhk: 24000,
    stats: { connectivity: 3, nightlife: 1, familyFriendly: 3, walkability: 2 },
    highlights: [
      "Elevated expressway makes the Hosur Road commute painless outside peak hours",
      "Most affordable rents among major tech corridors",
      "Metro extension under construction, expected to cut commute times",
    ],
  },
  {
    slug: "sarjapur-road",
    name: "Sarjapur Road",
    zone: "East",
    image: unsplash(photoIds.apartment[3], 1200, 800),
    tagline: "Gated communities and the newest apartment stock",
    description:
      "The corridor connecting Koramangala/HSR to Whitefield, now lined with large gated townships. Newest housing stock in the city, but still catching up on public transport.",
    vibe: ["Gated communities", "Family-friendly", "New builds", "Traffic-heavy"],
    avgRent1bhk: 20000,
    avgRent2bhk: 36000,
    stats: { connectivity: 2, nightlife: 2, familyFriendly: 4, walkability: 2 },
    highlights: [
      "Largest concentration of new gated apartment communities",
      "Closest residential corridor to the Bellandur/Sarjapur tech belt",
      "No metro yet - most residents depend on cars or cabs",
    ],
  },
  {
    slug: "hebbal",
    name: "Hebbal",
    zone: "North",
    image: unsplash(photoIds.skyline[0], 1200, 800),
    tagline: "Lakeside living with the fastest airport run",
    description:
      "Anchored by Hebbal Lake and the flyover junction, this is the go-to for anyone who flies often - Kempegowda Airport is a 30-minute drive on a good day.",
    vibe: ["Lakeside", "Airport-friendly", "New builds", "Quiet"],
    avgRent1bhk: 21000,
    avgRent2bhk: 35000,
    stats: { connectivity: 3, nightlife: 2, familyFriendly: 4, walkability: 3 },
    highlights: [
      "Closest well-developed neighbourhood to Kempegowda Airport",
      "Hebbal Lake and its walking track",
      "Growing cluster of new-age offices along Ballari Road",
    ],
  },
  {
    slug: "jp-nagar",
    name: "JP Nagar",
    zone: "South",
    image: unsplash(photoIds.apartment_bedroom[1], 1200, 800),
    tagline: "A quieter, greener alternative to Jayanagar",
    description:
      "Spread across numbered phases like HSR, JP Nagar mixes old bungalows with newer apartment blocks. Close enough to the action, calm enough to actually sleep.",
    vibe: ["Family-friendly", "Quiet", "Green", "Well-connected"],
    avgRent1bhk: 19500,
    avgRent2bhk: 33000,
    stats: { connectivity: 4, nightlife: 2, familyFriendly: 5, walkability: 4 },
    highlights: [
      "Green Line metro runs straight through the middle",
      "Close to both Jayanagar and Banashankari amenities",
      "Sarakki Lake for evening walks",
    ],
  },
]

export function getAreaBySlug(slug: string) {
  return areas.find((a) => a.slug === slug)
}
