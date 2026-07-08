import { unsplash, photoIds } from "@/lib/photos"

export type Cafe = {
  slug: string
  name: string
  area: string
  address: string
  image: string
  gallery: string[]
  priceRange: "₹" | "₹₹" | "₹₹₹"
  rating: number
  reviewCount: number
  openHours: string
  tags: string[]
  ratings: {
    wifi: number
    wifiSpeedMbps: number
    power: number
    noise: number
    food: number
    seating: number
  }
  description: string
  reviews: {
    author: string
    rating: number
    date: string
    body: string
  }[]
}

export const cafes: Cafe[] = [
  {
    slug: "kaapi-days-indiranagar",
    name: "Kaapi Days",
    area: "Indiranagar",
    address: "12th Main, HAL 2nd Stage, Indiranagar",
    image: unsplash(photoIds.cafe[0], 1000, 750),
    gallery: [
      unsplash(photoIds.cafe[0], 1200, 800),
      unsplash(photoIds.coffee[0], 1200, 800),
      unsplash(photoIds.coworking[0], 1200, 800),
    ],
    priceRange: "₹₹",
    rating: 4.6,
    reviewCount: 214,
    openHours: "8:00 AM – 10:00 PM",
    tags: ["Great for calls", "Strong AC", "Outdoor seating"],
    ratings: { wifi: 5, wifiSpeedMbps: 120, power: 4, noise: 2, food: 4, seating: 4 },
    description:
      "A two-floor cafe with a dedicated 'quiet floor' upstairs that's unofficially become Indiranagar's WFH living room. Filter coffee is excellent, and the wifi rarely drops below 100 Mbps even at peak hours.",
    reviews: [
      {
        author: "Ritika S.",
        rating: 5,
        date: "2026-06-02",
        body: "Been coming here 3x a week for over a year. Upstairs is dead quiet before noon, perfect for calls.",
      },
      {
        author: "Arjun M.",
        rating: 4,
        date: "2026-05-14",
        body: "Wifi is genuinely fast. Gets loud downstairs after 4pm though, so grab a table upstairs early.",
      },
      {
        author: "Fatima K.",
        rating: 5,
        date: "2026-04-22",
        body: "Every seat near the window has a power outlet. Rare to find that combo in this city.",
      },
    ],
  },
  {
    slug: "the-reading-table-koramangala",
    name: "The Reading Table",
    area: "Koramangala",
    address: "80 Feet Road, Koramangala 4th Block",
    image: unsplash(photoIds.cafe[1], 1000, 750),
    gallery: [
      unsplash(photoIds.cafe[1], 1200, 800),
      unsplash(photoIds.book_club[0], 1200, 800),
      unsplash(photoIds.coffee[1], 1200, 800),
    ],
    priceRange: "₹₹",
    rating: 4.4,
    reviewCount: 168,
    openHours: "9:00 AM – 11:00 PM",
    tags: ["Bookshelves", "Late night", "Vegetarian menu"],
    ratings: { wifi: 4, wifiSpeedMbps: 80, power: 3, noise: 3, food: 5, seating: 5 },
    description:
      "Half bookstore, half cafe - you can pick a novel off the shelf while you wait for your cold brew. Gets a founder-and-laptop crowd on weekday afternoons, more social in the evenings.",
    reviews: [
      {
        author: "Devansh P.",
        rating: 4,
        date: "2026-05-30",
        body: "Food menu punches way above a typical cafe. Wifi is solid but power points are limited, come early.",
      },
      {
        author: "Meera R.",
        rating: 5,
        date: "2026-05-02",
        body: "My favourite place to read on a Sunday morning before the lunch crowd arrives.",
      },
    ],
  },
  {
    slug: "blue-door-coffee-hsr",
    name: "Blue Door Coffee",
    area: "HSR Layout",
    address: "27th Main, HSR Layout Sector 2",
    image: unsplash(photoIds.cafe[2], 1000, 750),
    gallery: [
      unsplash(photoIds.cafe[2], 1200, 800),
      unsplash(photoIds.coworking[1], 1200, 800),
      unsplash(photoIds.coffee[2], 1200, 800),
    ],
    priceRange: "₹₹",
    rating: 4.7,
    reviewCount: 301,
    openHours: "7:30 AM – 9:00 PM",
    tags: ["Standing desks", "Fast wifi", "Great espresso"],
    ratings: { wifi: 5, wifiSpeedMbps: 150, power: 5, noise: 2, food: 3, seating: 3 },
    description:
      "Built for people who actually work here - every table has two outlets, there's a bank of standing desks by the window, and the espresso is roasted in-house. Seating fills up fast after 10am.",
    reviews: [
      {
        author: "Kabir N.",
        rating: 5,
        date: "2026-06-10",
        body: "Fastest, most reliable wifi of any cafe I've worked from in HSR. Standing desks are a great touch.",
      },
      {
        author: "Sneha V.",
        rating: 4,
        date: "2026-05-18",
        body: "Come before 10am or you won't find a seat. Coffee is worth it though.",
      },
    ],
  },
  {
    slug: "filter-and-fern-jayanagar",
    name: "Filter & Fern",
    area: "Jayanagar",
    address: "11th Main, Jayanagar 4th Block",
    image: unsplash(photoIds.cafe[3], 1000, 750),
    gallery: [
      unsplash(photoIds.cafe[3], 1200, 800),
      unsplash(photoIds.park[1], 1200, 800),
      unsplash(photoIds.coffee[3], 1200, 800),
    ],
    priceRange: "₹",
    rating: 4.5,
    reviewCount: 142,
    openHours: "7:00 AM – 8:30 PM",
    tags: ["Plant-filled", "Traditional filter coffee", "Budget-friendly"],
    ratings: { wifi: 3, wifiSpeedMbps: 40, power: 3, noise: 2, food: 4, seating: 4 },
    description:
      "A quiet, plant-covered courtyard cafe that leans traditional - proper filter coffee in steel tumblers, alongside a small work-friendly indoor section. Wifi is decent but not built for video calls.",
    reviews: [
      {
        author: "Lakshmi G.",
        rating: 5,
        date: "2026-05-25",
        body: "Best filter coffee in South Bangalore, and the courtyard is so peaceful in the mornings.",
      },
      {
        author: "Rohan T.",
        rating: 4,
        date: "2026-04-30",
        body: "Great for reading or light work. Wouldn't rely on it for a big video call though.",
      },
    ],
  },
  {
    slug: "workbench-whitefield",
    name: "Workbench",
    area: "Whitefield",
    address: "ITPL Main Road, Whitefield",
    image: unsplash(photoIds.coworking[2], 1000, 750),
    gallery: [
      unsplash(photoIds.coworking[2], 1200, 800),
      unsplash(photoIds.office[0], 1200, 800),
      unsplash(photoIds.coffee[4], 1200, 800),
    ],
    priceRange: "₹₹₹",
    rating: 4.3,
    reviewCount: 96,
    openHours: "8:00 AM – 9:00 PM",
    tags: ["Meeting rooms", "Day passes", "Printer on-site"],
    ratings: { wifi: 5, wifiSpeedMbps: 200, power: 5, noise: 3, food: 3, seating: 5 },
    description:
      "More coworking space than cafe, but the counter serves genuinely good coffee and food. Popular with ITPL employees who want a change of scenery without leaving the tech park.",
    reviews: [
      {
        author: "Priyanka D.",
        rating: 4,
        date: "2026-05-08",
        body: "Book a meeting room in advance, they go fast. Solid wifi and plenty of outlets everywhere.",
      },
      {
        author: "Vikram S.",
        rating: 4,
        date: "2026-04-12",
        body: "Pricier than a typical cafe but you're really paying for the coworking-grade infrastructure.",
      },
    ],
  },
  {
    slug: "sampige-roast-malleswaram",
    name: "Sampige Roast House",
    area: "Malleswaram",
    address: "Sampige Road, Malleswaram",
    image: unsplash(photoIds.cafe[4], 1000, 750),
    gallery: [
      unsplash(photoIds.cafe[4], 1200, 800),
      unsplash(photoIds.food_market[0], 1200, 800),
      unsplash(photoIds.coffee[0], 1200, 800),
    ],
    priceRange: "₹",
    rating: 4.2,
    reviewCount: 88,
    openHours: "7:00 AM – 8:00 PM",
    tags: ["Heritage building", "Filter coffee", "Morning crowd"],
    ratings: { wifi: 3, wifiSpeedMbps: 35, power: 2, noise: 3, food: 4, seating: 3 },
    description:
      "A small, old-school coffee house that roasts its own beans on-site. Not built for laptops - outlets are scarce - but a great spot for a short work sprint over excellent coffee.",
    reviews: [
      {
        author: "Ganesh K.",
        rating: 4,
        date: "2026-03-28",
        body: "Coffee is unbeatable for the price. Just don't expect to camp out here for a full workday.",
      },
    ],
  },
]

export function getCafeBySlug(slug: string) {
  return cafes.find((c) => c.slug === slug)
}
