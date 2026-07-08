import { unsplash, photoIds } from "@/lib/photos"

export type ClassifiedCategory =
  | "Electronics"
  | "Furniture"
  | "Vehicles"
  | "Home & Living"
  | "Fashion"
  | "Books & Hobbies"
  | "Free Stuff"

export type Classified = {
  slug: string
  title: string
  category: ClassifiedCategory
  price: number | "Free"
  condition: "New" | "Like new" | "Good" | "Fair"
  area: string
  image: string
  gallery: string[]
  postedAt: string
  description: string
  seller: { name: string; memberSince: string; rating: number }
}

export const classifiedCategories: { name: ClassifiedCategory; count: number }[] =
  [
    { name: "Electronics", count: 58 },
    { name: "Furniture", count: 41 },
    { name: "Vehicles", count: 23 },
    { name: "Home & Living", count: 36 },
    { name: "Fashion", count: 19 },
    { name: "Books & Hobbies", count: 14 },
    { name: "Free Stuff", count: 8 },
  ]

export const classifieds: Classified[] = [
  {
    slug: "ikea-study-desk-hsr",
    title: "IKEA study desk with drawer - barely used",
    category: "Furniture",
    price: 3200,
    condition: "Like new",
    area: "HSR Layout",
    image: unsplash(photoIds.apartment[2], 900, 700),
    gallery: [
      unsplash(photoIds.apartment[2], 1200, 900),
      unsplash(photoIds.apartment_bedroom[2], 1200, 900),
    ],
    postedAt: "2026-07-05",
    description:
      "Moving out and selling my IKEA MICKE desk with drawer. Used for about 8 months, no scratches or damage. Self pickup from HSR Sector 2, can help load into a cab.",
    seller: { name: "Ananya R.", memberSince: "2024", rating: 4.8 },
  },
  {
    slug: "royal-enfield-classic-350-2021",
    title: "Royal Enfield Classic 350 (2021), single owner",
    category: "Vehicles",
    price: 138000,
    condition: "Good",
    area: "Jayanagar",
    image: unsplash(photoIds.city_street[2], 900, 700),
    gallery: [unsplash(photoIds.city_street[2], 1200, 900)],
    postedAt: "2026-07-03",
    description:
      "18,400 km driven, all services done at authorized RE service center - full history available. New tyres fitted in March. Selling due to relocation out of India.",
    seller: { name: "Manoj K.", memberSince: "2022", rating: 4.9 },
  },
  {
    slug: "macbook-air-m2-2023",
    title: "MacBook Air M2, 8/256GB, with AppleCare",
    category: "Electronics",
    price: 74000,
    condition: "Like new",
    area: "Koramangala",
    image: unsplash(photoIds.coworking[3], 900, 700),
    gallery: [unsplash(photoIds.coworking[3], 1200, 900)],
    postedAt: "2026-07-06",
    description:
      "Bought Dec 2023, box and charger included. AppleCare+ valid till Dec 2026 - transferable. Battery cycle count under 120. No dents or scratches.",
    seller: { name: "Sameer D.", memberSince: "2023", rating: 5.0 },
  },
  {
    slug: "sofa-set-3-seater-whitefield",
    title: "3-seater fabric sofa, grey, good condition",
    category: "Furniture",
    price: 8500,
    condition: "Good",
    area: "Whitefield",
    image: unsplash(photoIds.apartment[4], 900, 700),
    gallery: [unsplash(photoIds.apartment[4], 1200, 900)],
    postedAt: "2026-06-29",
    description:
      "Comfortable 3-seater sofa, minor wear on armrests but otherwise in great shape. Selling because we're upgrading to an L-shape. Delivery within Whitefield possible for a small fee.",
    seller: { name: "The Guptas", memberSince: "2021", rating: 4.7 },
  },
  {
    slug: "canon-m50-mark-ii-kit",
    title: "Canon EOS M50 Mark II with 15-45mm kit lens",
    category: "Electronics",
    price: 42000,
    condition: "Good",
    area: "Indiranagar",
    image: unsplash(photoIds.art[3], 900, 700),
    gallery: [unsplash(photoIds.art[3], 1200, 900)],
    postedAt: "2026-06-27",
    description:
      "Great beginner mirrorless camera, used for a few weekend shoots and a couple of trips. Comes with original box, two batteries and a 64GB SD card.",
    seller: { name: "Nikhil V.", memberSince: "2020", rating: 4.6 },
  },
  {
    slug: "cast-iron-kadai-set-free",
    title: "Free: pre-seasoned cast iron kadai + tawa",
    category: "Free Stuff",
    price: "Free",
    condition: "Good",
    area: "Malleswaram",
    image: unsplash(photoIds.food_market[2], 900, 700),
    gallery: [unsplash(photoIds.food_market[2], 1200, 900)],
    postedAt: "2026-07-01",
    description:
      "Relocating and can't carry these. Both well-seasoned and ready to cook with, just need a good scrub. First come first served, pickup only.",
    seller: { name: "Deepa S.", memberSince: "2019", rating: 4.9 },
  },
  {
    slug: "road-bike-trek-fx2",
    title: "Trek FX 2 hybrid bike, 2022 model",
    category: "Vehicles",
    price: 22000,
    condition: "Good",
    area: "JP Nagar",
    image: unsplash(photoIds.run_club[3], 900, 700),
    gallery: [unsplash(photoIds.run_club[3], 1200, 900)],
    postedAt: "2026-06-25",
    description:
      "Great condition hybrid bike, serviced two months ago. Comes with a rear rack and mudguards fitted. Ideal for weekend Nandi Hills rides or daily commutes.",
    seller: { name: "Arvind P.", memberSince: "2023", rating: 4.8 },
  },
  {
    slug: "designer-sarees-lot-of-4",
    title: "Lot of 4 lightly worn designer sarees",
    category: "Fashion",
    price: 6000,
    condition: "Like new",
    area: "Jayanagar",
    image: unsplash(photoIds.art[1], 900, 700),
    gallery: [unsplash(photoIds.art[1], 1200, 900)],
    postedAt: "2026-06-30",
    description:
      "Worn once or twice for weddings, dry-cleaned and stored properly. Mix of Kanjeevaram and Banarasi silk. Happy to send individual photos on request.",
    seller: { name: "Kavya M.", memberSince: "2022", rating: 4.9 },
  },
]

export function getClassifiedBySlug(slug: string) {
  return classifieds.find((c) => c.slug === slug)
}
