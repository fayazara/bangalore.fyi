export type RentDatum = {
  area: string
  slug: string
  zone: string
  rent1bhk: number
  rent2bhk: number
  rent3bhk: number
  momChange: number
}

export const rentData: RentDatum[] = [
  { area: "Indiranagar", slug: "indiranagar", zone: "East", rent1bhk: 28000, rent2bhk: 45000, rent3bhk: 68000, momChange: 1.2 },
  { area: "Koramangala", slug: "koramangala", zone: "South", rent1bhk: 26000, rent2bhk: 42000, rent3bhk: 65000, momChange: 0.8 },
  { area: "HSR Layout", slug: "hsr-layout", zone: "South", rent1bhk: 22000, rent2bhk: 38000, rent3bhk: 58000, momChange: 1.5 },
  { area: "Whitefield", slug: "whitefield", zone: "East", rent1bhk: 18000, rent2bhk: 30000, rent3bhk: 46000, momChange: 2.1 },
  { area: "Jayanagar", slug: "jayanagar", zone: "South", rent1bhk: 19000, rent2bhk: 32000, rent3bhk: 48000, momChange: 0.3 },
  { area: "Malleswaram", slug: "malleswaram", zone: "West", rent1bhk: 20000, rent2bhk: 34000, rent3bhk: 50000, momChange: 0.5 },
  { area: "Electronic City", slug: "electronic-city", zone: "South", rent1bhk: 14000, rent2bhk: 24000, rent3bhk: 36000, momChange: -0.4 },
  { area: "Sarjapur Road", slug: "sarjapur-road", zone: "East", rent1bhk: 20000, rent2bhk: 36000, rent3bhk: 55000, momChange: 2.8 },
  { area: "Hebbal", slug: "hebbal", zone: "North", rent1bhk: 21000, rent2bhk: 35000, rent3bhk: 52000, momChange: 1.0 },
  { area: "JP Nagar", slug: "jp-nagar", zone: "South", rent1bhk: 19500, rent2bhk: 33000, rent3bhk: 49000, momChange: 0.6 },
  { area: "Marathahalli", slug: "marathahalli", zone: "East", rent1bhk: 17500, rent2bhk: 29000, rent3bhk: 44000, momChange: 1.8 },
  { area: "BTM Layout", slug: "btm-layout", zone: "South", rent1bhk: 18500, rent2bhk: 29500, rent3bhk: 43000, momChange: 0.9 },
  { area: "Yelahanka", slug: "yelahanka", zone: "North", rent1bhk: 14500, rent2bhk: 23000, rent3bhk: 34000, momChange: 1.1 },
  { area: "Banashankari", slug: "banashankari", zone: "South", rent1bhk: 16000, rent2bhk: 26000, rent3bhk: 38000, momChange: 0.2 },
  { area: "Bellandur", slug: "bellandur", zone: "East", rent1bhk: 21000, rent2bhk: 36500, rent3bhk: 54000, momChange: 2.4 },
]

export function rentBucket(rent: number, kind: "1bhk" | "2bhk" | "3bhk") {
  const values = rentData.map((d) =>
    kind === "1bhk" ? d.rent1bhk : kind === "2bhk" ? d.rent2bhk : d.rent3bhk,
  )
  const min = Math.min(...values)
  const max = Math.max(...values)
  const pct = (rent - min) / (max - min)
  if (pct < 0.2) return 0
  if (pct < 0.4) return 1
  if (pct < 0.6) return 2
  if (pct < 0.8) return 3
  return 4
}

export const heatColors = [
  "bg-kumo-brand/10 text-kumo-default",
  "bg-kumo-brand/25 text-kumo-default",
  "bg-kumo-brand/45 text-kumo-strong",
  "bg-kumo-brand/70 text-white",
  "bg-kumo-brand text-white",
]
