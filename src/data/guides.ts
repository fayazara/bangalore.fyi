import { unsplash, photoIds } from "@/lib/photos"

export type Guide = {
  slug: string
  title: string
  category: "Moving Here" | "Transport" | "Food" | "Lifestyle" | "Money"
  coverImage: string
  author: string
  updatedAt: string
  readTime: string
  excerpt: string
  sections: { heading: string; body: string[] }[]
}

export const guides: Guide[] = [
  {
    slug: "moving-to-bangalore-first-30-days",
    title: "Moving to Bangalore: Your First 30 Days",
    category: "Moving Here",
    coverImage: unsplash(photoIds.moving[0], 1400, 800),
    author: "bangalore.fyi team",
    updatedAt: "2026-06-15",
    readTime: "9 min read",
    excerpt:
      "The practical checklist nobody hands you on day one - from picking an area to setting up your first electricity connection.",
    sections: [
      {
        heading: "Pick a temporary base first",
        body: [
          "Don't commit to a 12-month lease before you've spent at least two weeks in the city. Book a serviced apartment or long-stay Airbnb in a central area like Indiranagar or Koramangala, and use that time to actually visit neighbourhoods at rush hour, not just on a Sunday afternoon showing.",
          "Traffic patterns in Bangalore vary wildly by time of day - a commute that looks like 20 minutes on Google Maps can take 50 at 9am. Test it before you sign anything.",
        ],
      },
      {
        heading: "Getting your paperwork in order",
        body: [
          "You'll need a local address for most things - bank account updates, SIM card registration, and eventually your rental agreement itself. Aadhaar address updates can be done online but take a few weeks to reflect.",
          "If you're renting, insist on a registered rental agreement (not just notarized) if the monthly rent crosses ₹15,000 - it protects both parties and is increasingly expected by landlords anyway.",
        ],
      },
      {
        heading: "Setting up utilities",
        body: [
          "Most apartments already have a BESCOM (electricity) connection under the landlord's name - you'll just settle bills directly, sometimes bundled into your rent. For broadband, ACT Fibernet and JioFiber both have wide coverage; check what's actually wired into your specific building before committing to a plan.",
          "Cooking gas is typically an LPG cylinder unless your building has piped gas - ask your landlord to transfer the connection or help you register a new one.",
        ],
      },
      {
        heading: "Get on the local apps early",
        body: [
          "Namma Yatri and Rapido are the two auto-rickshaw apps that actually work reliably here, often cheaper than Uber/Ola autos. For groceries, Swiggy Instamart, Blinkit and Zepto all deliver within 15-20 minutes in most established neighbourhoods.",
        ],
      },
    ],
  },
  {
    slug: "surviving-bangalore-traffic",
    title: "Surviving Bangalore Traffic: A Realistic Guide",
    category: "Transport",
    coverImage: unsplash(photoIds.traffic[1], 1400, 800),
    author: "bangalore.fyi team",
    updatedAt: "2026-06-08",
    readTime: "7 min read",
    excerpt:
      "Traffic here isn't going away. Here's how locals actually plan their day around it instead of fighting it.",
    sections: [
      {
        heading: "Know your two rush hours",
        body: [
          "Morning rush is roughly 8:30-10:30am, evening is 6-8:30pm, worse on Fridays. Outside these windows, most cross-city drives are dramatically faster - a Koramangala to Whitefield trip can be 30 minutes at 11am and over an hour at 6:30pm.",
        ],
      },
      {
        heading: "The metro is genuinely improving",
        body: [
          "The Purple and Green lines now cover a meaningful chunk of the city, and the airport line extension has cut a notoriously bad drive down to a predictable 40-minute ride. If your commute can be planned around a metro station, it's worth the minor inconvenience over sitting in a cab.",
        ],
      },
      {
        heading: "Two-wheelers change everything",
        body: [
          "A large share of long-term residents eventually get a scooter or bike, mainly because it turns unpredictable 45-60 minute drives into consistent 20-25 minute rides by filtering through traffic. Not for everyone, but worth considering if your commute is over 8km daily.",
        ],
      },
    ],
  },
  {
    slug: "bangalore-food-scene-beyond-restaurants",
    title: "The Bangalore Food Scene, Beyond Restaurant Lists",
    category: "Food",
    coverImage: unsplash(photoIds.food_market[4], 1400, 800),
    author: "bangalore.fyi team",
    updatedAt: "2026-05-28",
    readTime: "6 min read",
    excerpt:
      "Darshinis, tiffin rooms, and the unwritten etiquette of ordering filter coffee like a local.",
    sections: [
      {
        heading: "Darshinis are underrated",
        body: [
          "Standing-counter darshinis (quick-service vegetarian eateries) are where a huge amount of the city actually eats breakfast - fast, cheap, and often better than sit-down restaurants for classics like idli, vada and dosa.",
        ],
      },
      {
        heading: "Filter coffee etiquette",
        body: [
          "Order it 'strong' if you actually want it strong - the default can be milder than you expect. And don't be surprised if it's served in a steel tumbler-and-dabarah set rather than a mug; the pouring-back-and-forth is meant to cool and aerate it.",
        ],
      },
    ],
  },
  {
    slug: "understanding-rent-deposits-bangalore",
    title: "Understanding Rent Deposits in Bangalore",
    category: "Money",
    coverImage: unsplash(photoIds.apartment[1], 1400, 800),
    author: "bangalore.fyi team",
    updatedAt: "2026-06-01",
    readTime: "5 min read",
    excerpt:
      "Why deposits here are so much higher than most cities, and what's actually negotiable.",
    sections: [
      {
        heading: "Why deposits are so high",
        body: [
          "It's common for landlords in Bangalore to ask for 6-10 months' rent as a refundable security deposit - far higher than most other Indian cities. This traces back to older lending norms where landlords effectively treated the deposit as an interest-free loan. It's slowly shifting, especially with newer gated communities, but still the norm in most independent houses.",
        ],
      },
      {
        heading: "What's negotiable",
        body: [
          "The deposit amount is usually more negotiable than the monthly rent itself, especially if you can pay a lump sum upfront or sign a longer lease. Always get deposit refund terms in writing, including the timeline for return after move-out.",
        ],
      },
    ],
  },
]

export function getGuideBySlug(slug: string) {
  return guides.find((g) => g.slug === slug)
}
