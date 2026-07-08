export type Question = {
  slug: string
  title: string
  body: string
  askedBy: string
  askedAt: string
  tags: string[]
  views: number
  votes: number
  answers: {
    author: string
    votes: number
    isAccepted: boolean
    createdAt: string
    body: string
  }[]
}

export const qnaTags = [
  "Moving here",
  "Traffic",
  "Rent",
  "Weather",
  "Food",
  "Jobs",
  "Transport",
  "Areas",
]

export const questions: Question[] = [
  {
    slug: "best-area-for-remote-worker-no-car",
    title:
      "Best area to live in as a remote worker who doesn't drive?",
    body: "Moving from Pune for a fully remote job. I don't own a car and would rather not buy one. Want to be near good cafes to work from, and not too dependent on cabs for groceries. HSR, Indiranagar or somewhere else?",
    askedBy: "remote_raj",
    askedAt: "2026-06-18",
    tags: ["Moving here", "Areas", "Transport"],
    views: 3400,
    votes: 42,
    answers: [
      {
        author: "blr_local_10yrs",
        votes: 58,
        isAccepted: true,
        createdAt: "2026-06-18",
        body: "Indiranagar or Jayanagar, in that order, if you don't drive. Both have metro access, walkable grocery options, and a genuinely high density of cafes. HSR is great but you'll want a two-wheeler eventually - it's more spread out and metro hasn't reached it yet.",
      },
      {
        author: "coffeeshop_regular",
        votes: 21,
        isAccepted: false,
        createdAt: "2026-06-19",
        body: "Seconding Indiranagar. I've worked from cafes there for 3 years without a vehicle. Metro + auto for anything further covers 95% of my needs.",
      },
      {
        author: "jayanagar_aunty",
        votes: 14,
        isAccepted: false,
        createdAt: "2026-06-19",
        body: "Jayanagar 4th Block is extremely walkable - everything from groceries to a decent hospital within 10 minutes on foot. Quieter than Indiranagar too if that matters to you.",
      },
    ],
  },
  {
    slug: "how-bad-is-traffic-really-sarjapur",
    title: "How bad is the Sarjapur Road traffic, actually?",
    body: "Got an offer to work out of an office near Bellandur. Considering renting on Sarjapur Road. Everyone online says the traffic is terrible but I want a realistic answer, not internet exaggeration.",
    askedBy: "confused_movr",
    askedAt: "2026-06-10",
    tags: ["Traffic", "Areas"],
    views: 5200,
    votes: 67,
    answers: [
      {
        author: "sarjapur_survivor",
        votes: 89,
        isAccepted: true,
        createdAt: "2026-06-10",
        body: "It's not exaggerated. A 6km stretch can take 45-60 minutes between 8:30-10:30am and 6-8:30pm. Outside those windows it's totally fine, 15 minutes tops. If your office has flexible hours, it's very manageable. If you're stuck on a 9-6 with fixed hours, budget for the pain.",
      },
      {
        author: "wfh_convert",
        votes: 34,
        isAccepted: false,
        createdAt: "2026-06-11",
        body: "Moved here for the same reason 2 years ago. Ended up renting closer to Bellandur specifically to cut the commute. Worth the slightly higher rent honestly.",
      },
    ],
  },
  {
    slug: "rent-negotiate-2bhk-fair-price",
    title: "Is it normal to negotiate rent in Bangalore?",
    body: "Broker quoted ₹42,000 for a 2BHK in Koramangala 5th Block. Is that a fair starting point, and is negotiating even a thing here or is it a fixed-price market?",
    askedBy: "first_time_renter",
    askedAt: "2026-06-25",
    tags: ["Rent", "Moving here"],
    views: 1800,
    votes: 29,
    answers: [
      {
        author: "landlord_whisperer",
        votes: 41,
        isAccepted: true,
        createdAt: "2026-06-25",
        body: "Negotiation is normal, especially if the place has been vacant a while. ₹42k for Koramangala 5th Block 2BHK sounds slightly high but not unreasonable - ask about the deposit terms too, that's often more negotiable than the monthly rent itself. 10 months deposit is standard, but 6-8 is achievable with the right landlord.",
      },
      {
        author: "renter_2025",
        votes: 12,
        isAccepted: false,
        createdAt: "2026-06-26",
        body: "Check bangalore.fyi's rent heatmap for the area average before you commit - helped me realize I was being overcharged by about 15%.",
      },
    ],
  },
  {
    slug: "monsoon-what-to-expect",
    title: "What should I actually expect during Bangalore monsoon?",
    body: "First monsoon here. Heard mixed things - some say it's mild and pleasant, others say certain areas flood badly. What's the real picture?",
    askedBy: "weather_curious",
    askedAt: "2026-05-30",
    tags: ["Weather", "Moving here"],
    views: 2100,
    votes: 33,
    answers: [
      {
        author: "monsoon_veteran",
        votes: 47,
        isAccepted: true,
        createdAt: "2026-05-30",
        body: "Overall it's genuinely pleasant - much milder than Mumbai or Chennai monsoons, more like frequent evening showers than continuous downpours. That said, low-lying pockets near Bellandur, Sarjapur and parts of the Outer Ring Road do flood after heavy spells. Check drainage history of a specific building before signing a lease if you're in those areas.",
      },
    ],
  },
  {
    slug: "good-schools-whitefield-families",
    title: "Recommendations for good schools near Whitefield?",
    body: "Relocating with two kids (ages 6 and 9) for a role at an ITPL company. Looking for CBSE schools with a good reputation within a reasonable commute of Whitefield.",
    askedBy: "relocating_family",
    askedAt: "2026-06-05",
    tags: ["Moving here", "Areas"],
    views: 1450,
    votes: 18,
    answers: [
      {
        author: "whitefield_parent",
        votes: 25,
        isAccepted: true,
        createdAt: "2026-06-06",
        body: "Greenwood High and Vydehi School of Excellence are both well regarded and within 15-20 minutes of most Whitefield addresses. Admissions for the new academic year usually open around December, so plan ahead.",
      },
    ],
  },
]

export function getQuestionBySlug(slug: string) {
  return questions.find((q) => q.slug === slug)
}
