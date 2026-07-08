import { unsplash, photoIds } from "@/lib/photos"

export type EventCategory =
  | "Tech"
  | "Food & Drink"
  | "Music"
  | "Art & Culture"
  | "Startups"
  | "Wellness"
  | "Sports"

export type Event = {
  slug: string
  title: string
  category: EventCategory
  image: string
  date: string
  time: string
  venue: string
  area: string
  price: string
  host: string
  attendees: number
  capacity: number
  description: string
  tags: string[]
}

export const eventCategories: {
  name: EventCategory
  icon: string
  count: number
}[] = [
  { name: "Tech", icon: "💻", count: 42 },
  { name: "Startups", icon: "🚀", count: 27 },
  { name: "Food & Drink", icon: "🍜", count: 19 },
  { name: "Music", icon: "🎵", count: 15 },
  { name: "Art & Culture", icon: "🎨", count: 12 },
  { name: "Wellness", icon: "🧘", count: 9 },
  { name: "Sports", icon: "🏃", count: 8 },
]

export const events: Event[] = [
  {
    slug: "namma-devs-monthly-meetup",
    title: "Namma Devs: Monthly Meetup #34",
    category: "Tech",
    image: unsplash(photoIds.tech_meetup[0], 1200, 800),
    date: "2026-07-10",
    time: "6:30 PM – 9:00 PM",
    venue: "Awfis Residency Square",
    area: "Koramangala",
    price: "Free",
    host: "Namma Devs Community",
    attendees: 186,
    capacity: 220,
    description:
      "Bangalore's longest-running developer meetup. This month: two lightning talks on local-first apps, an open mic for job openings, and the usual post-event beers on the terrace.",
    tags: ["Networking", "Talks", "Beginner-friendly"],
  },
  {
    slug: "sunrise-run-club-cubbon-park",
    title: "Sunrise Run Club - Cubbon Park",
    category: "Sports",
    image: unsplash(photoIds.run_club[0], 1200, 800),
    date: "2026-07-09",
    time: "6:00 AM – 7:15 AM",
    venue: "Cubbon Park, Bandstand Gate",
    area: "MG Road",
    price: "Free",
    host: "Bengaluru Runners Collective",
    attendees: 74,
    capacity: 100,
    description:
      "A 5K social run through Cubbon Park before the traffic wakes up. All paces welcome - there's a fast pack and a chatty pack. Filter coffee afterwards at the park cafe.",
    tags: ["Running", "Outdoors", "Free"],
  },
  {
    slug: "founders-fireside-scaling-in-india",
    title: "Founders Fireside: Scaling in India",
    category: "Startups",
    image: unsplash(photoIds.tech_meetup[3], 1200, 800),
    date: "2026-07-11",
    time: "5:00 PM – 7:30 PM",
    venue: "WeWork Prestige Atlanta",
    area: "Koramangala",
    price: "₹499",
    host: "Peak XV Scouts",
    attendees: 92,
    capacity: 150,
    description:
      "Three founders who've taken Indian D2C and SaaS companies past ₹100 Cr in revenue talk hiring, cash flow discipline, and what breaks first when you scale too fast.",
    tags: ["Panel discussion", "Startups", "Networking"],
  },
  {
    slug: "bangalore-vinyl-and-vibes",
    title: "Vinyl & Vibes: Open Deck Night",
    category: "Music",
    image: unsplash(photoIds.concert[1], 1200, 800),
    date: "2026-07-11",
    time: "8:00 PM – 12:00 AM",
    venue: "The Humming Tree",
    area: "Indiranagar",
    price: "₹300",
    host: "Deep Groove Collective",
    attendees: 140,
    capacity: 180,
    description:
      "Bring your own vinyl and get 15 minutes on the decks, or just come for the listening bar vibe. Expect funk, soul, and a lot of Bangalore's underground DJ scene in one room.",
    tags: ["Music", "Nightlife", "Community"],
  },
  {
    slug: "clay-and-conversation-pottery",
    title: "Clay & Conversation: Pottery for Beginners",
    category: "Art & Culture",
    image: unsplash(photoIds.art[0], 1200, 800),
    date: "2026-07-12",
    time: "11:00 AM – 1:30 PM",
    venue: "Sandur Studio",
    area: "Indiranagar",
    price: "₹1,200",
    host: "Sandur Studio",
    attendees: 12,
    capacity: 14,
    description:
      "A hands-on wheel-throwing session for complete beginners, materials included. Small batch size so everyone gets proper one-on-one time with the instructor.",
    tags: ["Workshop", "Small group", "Hands-on"],
  },
  {
    slug: "sunday-farmers-market-jayanagar",
    title: "Sunday Farmers Market",
    category: "Food & Drink",
    image: unsplash(photoIds.market[1], 1200, 800),
    date: "2026-07-12",
    time: "8:00 AM – 12:00 PM",
    venue: "Jayanagar 4th Block Park",
    area: "Jayanagar",
    price: "Free entry",
    host: "Bengaluru Farmers Market Collective",
    attendees: 410,
    capacity: 600,
    description:
      "Organic produce, home bakers, cold-pressed oils and a genuinely good coffee cart. A weekly ritual for a lot of South Bangalore households.",
    tags: ["Market", "Family-friendly", "Weekly"],
  },
  {
    slug: "sound-bath-sunset-sessions",
    title: "Sound Bath: Sunset Sessions",
    category: "Wellness",
    image: unsplash(photoIds.park[2], 1200, 800),
    date: "2026-07-13",
    time: "6:00 PM – 7:15 PM",
    venue: "Karnataka Chitrakala Parishath lawns",
    area: "MG Road",
    price: "₹700",
    host: "Still Water Sound Healing",
    attendees: 38,
    capacity: 45,
    description:
      "An hour-long guided sound bath with Tibetan bowls and gongs, outdoors as the sun sets. Mats provided, just bring yourself and a light shawl.",
    tags: ["Wellness", "Outdoors", "Small group"],
  },
  {
    slug: "ai-infra-day-bangalore",
    title: "AI Infra Day: Bangalore Edition",
    category: "Tech",
    image: unsplash(photoIds.tech_meetup[1], 1200, 800),
    date: "2026-07-14",
    time: "9:30 AM – 5:00 PM",
    venue: "Prestige Minsk Square",
    area: "Domlur",
    price: "₹999",
    host: "InfraStack Community",
    attendees: 260,
    capacity: 300,
    description:
      "A full-day track on serving, fine-tuning and evaluating models at scale, with speakers from local infra teams and a few visiting engineers. Lunch and swag included.",
    tags: ["Conference", "AI", "Full-day"],
  },
]

export function getEventBySlug(slug: string) {
  return events.find((e) => e.slug === slug)
}
