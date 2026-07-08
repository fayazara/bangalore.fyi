import { unsplash, photoIds } from "@/lib/photos"

export type FlatListing = {
  slug: string
  type: "flat-available" | "looking-for-flatmate" | "looking-for-flat"
  title: string
  area: string
  rent: number
  deposit: string
  bhk: string
  genderPreference: "Any" | "Male" | "Female"
  moveInDate: string
  image: string
  amenities: string[]
  description: string
  postedBy: string
  postedAt: string
}

export const flatListings: FlatListing[] = [
  {
    slug: "2bhk-koramangala-5th-block-flatmate",
    type: "looking-for-flatmate",
    title: "Looking for a flatmate - 2BHK in Koramangala 5th Block",
    area: "Koramangala",
    rent: 15000,
    deposit: "2 months",
    bhk: "2 BHK (sharing one room)",
    genderPreference: "Any",
    moveInDate: "2026-08-01",
    image: unsplash(photoIds.apartment[0], 1000, 750),
    amenities: ["Fully furnished", "WiFi included", "AC", "Balcony"],
    description:
      "Spacious 2BHK, one room already occupied by me (28, product designer, quiet during weekdays). Looking for someone clean, non-smoker preferred. Society has a small gym and 24/7 security.",
    postedBy: "Rahul M.",
    postedAt: "2026-07-02",
  },
  {
    slug: "1bhk-hsr-sector-2-full-flat",
    type: "flat-available",
    title: "1BHK for rent - HSR Layout Sector 2",
    area: "HSR Layout",
    rent: 24000,
    deposit: "10 months",
    bhk: "1 BHK",
    genderPreference: "Any",
    moveInDate: "2026-07-20",
    image: unsplash(photoIds.apartment_bedroom[0], 1000, 750),
    amenities: ["Semi-furnished", "Covered parking", "Power backup", "Lift"],
    description:
      "Bright 1BHK on the 3rd floor, west-facing with good ventilation. Modular kitchen, geyser and wardrobes included. Walking distance to 27th Main cafes and Agara Lake.",
    postedBy: "Prestige Realty (Owner-listed)",
    postedAt: "2026-06-28",
  },
  {
    slug: "female-flatmate-indiranagar",
    type: "looking-for-flatmate",
    title: "Female flatmate wanted - 3BHK Indiranagar",
    area: "Indiranagar",
    rent: 18000,
    deposit: "1 month",
    bhk: "3 BHK (private room)",
    genderPreference: "Female",
    moveInDate: "2026-08-05",
    image: unsplash(photoIds.apartment_bedroom[3], 1000, 750),
    amenities: ["Fully furnished", "Attached bathroom", "Housekeeping", "WiFi included"],
    description:
      "2 of us already living here, both working professionals in our late 20s. Private room with attached bath, common living area and kitchen. Looking for someone respectful of shared spaces and quiet hours after 11pm.",
    postedBy: "Ishita & Priya",
    postedAt: "2026-07-01",
  },
  {
    slug: "looking-for-1bhk-whitefield",
    type: "looking-for-flat",
    title: "Looking for a 1BHK near ITPL, Whitefield",
    area: "Whitefield",
    rent: 20000,
    deposit: "Flexible",
    bhk: "1 BHK",
    genderPreference: "Any",
    moveInDate: "2026-08-15",
    image: unsplash(photoIds.office[3], 1000, 750),
    amenities: ["Prefer semi-furnished", "Needs covered parking"],
    description:
      "Relocating for a new job at ITPL, starting mid-August. Looking for a 1BHK within 3km of the tech park, budget up to ₹22,000. Open to gated communities or independent buildings.",
    postedBy: "Tarun B.",
    postedAt: "2026-07-04",
  },
  {
    slug: "2bhk-jayanagar-full-flat",
    type: "flat-available",
    title: "2BHK for rent - Jayanagar 4th Block",
    area: "Jayanagar",
    rent: 32000,
    deposit: "8 months",
    bhk: "2 BHK",
    genderPreference: "Any",
    moveInDate: "2026-08-01",
    image: unsplash(photoIds.apartment[3], 1000, 750),
    amenities: ["Unfurnished", "Car parking", "Terrace access", "Pet-friendly"],
    description:
      "Independent house, ground floor with a small private terrace. Quiet residential street, 5 minutes' walk to the shopping complex and metro station. Pets welcome.",
    postedBy: "Suresh Kumar (Owner)",
    postedAt: "2026-06-25",
  },
  {
    slug: "male-flatmate-hsr-sector-1",
    type: "looking-for-flatmate",
    title: "Male flatmate wanted - 2BHK HSR Sector 1",
    area: "HSR Layout",
    rent: 13500,
    deposit: "1 month",
    bhk: "2 BHK (private room)",
    genderPreference: "Male",
    moveInDate: "2026-07-25",
    image: unsplash(photoIds.apartment_bedroom[4], 1000, 750),
    amenities: ["Furnished room", "WiFi included", "Gym in society"],
    description:
      "I work in tech, mostly WFH with occasional office days. Looking for someone similarly low-key. Society has a decent gym and a small park. No strict food restrictions but I don't cook non-veg at home.",
    postedBy: "Karthik R.",
    postedAt: "2026-06-30",
  },
]

export function getFlatBySlug(slug: string) {
  return flatListings.find((f) => f.slug === slug)
}
