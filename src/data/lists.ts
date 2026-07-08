import { unsplash, photoIds } from "@/lib/photos"

export type CuratedList = {
  slug: string
  title: string
  category: "Food" | "Cafes" | "Nightlife" | "Shopping" | "Outdoors"
  coverImage: string
  curator: { name: string; role: string }
  description: string
  likes: number
  updatedAt: string
  items: {
    rank: number
    name: string
    area: string
    image: string
    note: string
  }[]
}

export const lists: CuratedList[] = [
  {
    slug: "top-shawarmas-by-jaspreet",
    title: "Top Shawarmas in Bangalore",
    category: "Food",
    coverImage: unsplash(photoIds.street_food[0], 1200, 800),
    curator: { name: "Jaspreet S.", role: "Runs a food Instagram, 40K followers" },
    description:
      "Eight years, hundreds of shawarma rolls, one very opinionated list. Ranked purely on the roll - sauce ratio, meat quality and that all-important crunch.",
    likes: 812,
    updatedAt: "2026-06-20",
    items: [
      {
        rank: 1,
        name: "Al Baik Shawarma Corner",
        area: "Frazer Town",
        image: unsplash(photoIds.street_food[1], 800, 600),
        note: "The garlic sauce alone is worth the trip. Ask for extra pickles.",
      },
      {
        rank: 2,
        name: "Beirut Xpress",
        area: "Koramangala",
        image: unsplash(photoIds.street_food[2], 800, 600),
        note: "Best chicken-to-bread ratio in the city, never soggy.",
      },
      {
        rank: 3,
        name: "Habibi Grills",
        area: "Shivaji Nagar",
        image: unsplash(photoIds.street_food[3], 800, 600),
        note: "Late-night institution. Go after 11pm to skip the queue.",
      },
      {
        rank: 4,
        name: "Damascus Corner",
        area: "Indiranagar",
        image: unsplash(photoIds.street_food[4], 800, 600),
        note: "Slightly pricier but the lamb version is unmatched.",
      },
    ],
  },
  {
    slug: "best-dosas-by-fayaz",
    title: "Best Dosas in Bangalore",
    category: "Food",
    coverImage: unsplash(photoIds.food_market[3], 1200, 800),
    curator: { name: "Fayaz A.", role: "Lived here 10+ years, seriously about dosas" },
    description:
      "A decade of hunting down the crispest, most evenly-cooked dosas in the city. This list favours the classics over anything too fusion.",
    likes: 1204,
    updatedAt: "2026-06-28",
    items: [
      {
        rank: 1,
        name: "Vidyarthi Bhavan",
        area: "Basavanagudi",
        image: unsplash(photoIds.food_market[4], 800, 600),
        note: "The benchmark. Go early, the queue is part of the experience.",
      },
      {
        rank: 2,
        name: "CTR (Central Tiffin Room)",
        area: "Malleswaram",
        image: unsplash(photoIds.market[2], 800, 600),
        note: "Benne masala dosa done right - order it 'extra crispy'.",
      },
      {
        rank: 3,
        name: "Veena Stores",
        area: "Malleswaram",
        image: unsplash(photoIds.market[3], 800, 600),
        note: "Standing-only, cash-only, and completely worth the hassle.",
      },
      {
        rank: 4,
        name: "SLV Adigas",
        area: "Multiple locations",
        image: unsplash(photoIds.market[4], 800, 600),
        note: "Consistent quality if you can't make it to the old-school spots.",
      },
      {
        rank: 5,
        name: "Brahmin's Coffee Bar",
        area: "Basavanagudi",
        image: unsplash(photoIds.food_market[0], 800, 600),
        note: "Order the idli-dosa combo - trust the aunty behind the counter.",
      },
    ],
  },
  {
    slug: "quietest-rooftop-bars-by-meher",
    title: "Quietest Rooftop Bars to Actually Talk",
    category: "Nightlife",
    coverImage: unsplash(photoIds.concert[2], 1200, 800),
    curator: { name: "Meher I.", role: "Bartender turned nightlife writer" },
    description:
      "Rooftops where the music doesn't drown out conversation. Sorted for first dates, catch-ups, and anyone who's outgrown shouting over EDM.",
    likes: 456,
    updatedAt: "2026-06-15",
    items: [
      {
        rank: 1,
        name: "Skyye Lounge",
        area: "UB City",
        image: unsplash(photoIds.concert[3], 800, 600),
        note: "Best skyline view in the city, arrive before 7pm for a good table.",
      },
      {
        rank: 2,
        name: "Toit Rooftop",
        area: "Indiranagar",
        image: unsplash(photoIds.concert[4], 800, 600),
        note: "Weekday evenings only - weekends get loud fast.",
      },
      {
        rank: 3,
        name: "High Ultra Lounge",
        area: "Church Street",
        image: unsplash(photoIds.concert[0], 800, 600),
        note: "Great for winding down after work, solid small plates menu.",
      },
    ],
  },
  {
    slug: "sunday-flea-markets-by-ananya",
    title: "Sunday Flea Markets Worth the Drive",
    category: "Shopping",
    coverImage: unsplash(photoIds.market[0], 1200, 800),
    curator: { name: "Ananya D.", role: "Vintage collector and thrift enthusiast" },
    description:
      "Where to actually find things - vinyl, vintage denim, plants, and the occasional genuinely rare find. Go early, the good stuff disappears by 10am.",
    likes: 298,
    updatedAt: "2026-06-10",
    items: [
      {
        rank: 1,
        name: "Chickpet Sunday Bazaar",
        area: "Chickpet",
        image: unsplash(photoIds.market[1], 800, 600),
        note: "Fabric and vintage jewellery, bargain hard.",
      },
      {
        rank: 2,
        name: "Jayanagar Farmers Market",
        area: "Jayanagar",
        image: unsplash(photoIds.food_market[1], 800, 600),
        note: "More produce than flea, but the plant stalls are excellent.",
      },
      {
        rank: 3,
        name: "Church Street Sunday Soul Sante",
        area: "Church Street",
        image: unsplash(photoIds.market[3], 800, 600),
        note: "Independent designers and local art, once a month only.",
      },
    ],
  },
]

export function getListBySlug(slug: string) {
  return lists.find((l) => l.slug === slug)
}
