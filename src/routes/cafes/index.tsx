import { useMemo, useState } from "react"
import { createFileRoute } from "@tanstack/react-router"
import { Input } from "@cloudflare/kumo/components/input"
import { Select } from "@cloudflare/kumo/components/select"
import { Badge } from "@cloudflare/kumo/components/badge"
import { Empty } from "@cloudflare/kumo/components/empty"
import {
  MagnifyingGlassIcon,
  PlugIcon,
  SpeakerHighIcon,
  WifiHighIcon,
} from "@phosphor-icons/react"
import { PageHeader } from "@/components/page-header"
import { ListContainer, ListRow, ListRowImage } from "@/components/list-row"
import { RatingStars } from "@/components/rating-stars"
import { StatPill } from "@/components/stat-pill"
import { cafes } from "@/data/cafes"

export const Route = createFileRoute("/cafes/")({
  component: CafesIndex,
})

const areaOptions = ["All areas", ...Array.from(new Set(cafes.map((c) => c.area)))]
const sortOptions = ["Top rated", "Fastest wifi", "Quietest"] as const

function CafesIndex() {
  const [query, setQuery] = useState("")
  const [area, setArea] = useState("All areas")
  const [sort, setSort] = useState<(typeof sortOptions)[number]>("Top rated")

  const filtered = useMemo(() => {
    let list = cafes.filter((c) => {
      const matchesQuery =
        query.trim().length === 0 ||
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      const matchesArea = area === "All areas" || c.area === area
      return matchesQuery && matchesArea
    })

    list = [...list].sort((a, b) => {
      if (sort === "Fastest wifi") return b.ratings.wifiSpeedMbps - a.ratings.wifiSpeedMbps
      if (sort === "Quietest") return a.ratings.noise - b.ratings.noise
      return b.rating - a.rating
    })

    return list
  }, [query, area, sort])

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Cafes"
        title="Cafes to work from"
        description="Rated on wifi speed, power outlets, noise level and food - by people who've actually spent a workday there."
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or vibe (e.g. quiet, fast wifi)"
          aria-label="Search cafes"
          className="sm:max-w-xs"
        />
        <div className="flex gap-2">
          <Select
            aria-label="Filter by area"
            value={area}
            onValueChange={(v) => setArea(v as string)}
            className="w-40"
          >
            {areaOptions.map((a) => (
              <Select.Option key={a} value={a}>
                {a}
              </Select.Option>
            ))}
          </Select>
          <Select
            aria-label="Sort cafes"
            value={sort}
            onValueChange={(v) => setSort(v as (typeof sortOptions)[number])}
            className="w-40"
          >
            {sortOptions.map((s) => (
              <Select.Option key={s} value={s}>
                {s}
              </Select.Option>
            ))}
          </Select>
        </div>
        <p className="text-sm text-kumo-subtle sm:ml-auto">
          {filtered.length} cafe{filtered.length === 1 ? "" : "s"}
        </p>
      </div>

      {filtered.length === 0 ? (
        <Empty
          title="No cafes match your search"
          description="Try a different area or clear your search."
        />
      ) : (
        <ListContainer>
          {filtered.map((cafe) => (
            <ListRow
              key={cafe.slug}
              href={`/cafes/${cafe.slug}`}
              className="items-stretch"
            >
              <ListRowImage src={cafe.image} alt={cafe.name} />
              <div className="flex flex-1 flex-col justify-between gap-1.5">
                <Badge variant="outline" className="w-fit">
                  {cafe.tags[0]}
                </Badge>
                <div>
                  <p className="text-[15px] font-semibold text-kumo-strong">
                    {cafe.name}
                  </p>
                  <p className="text-sm text-kumo-subtle">{cafe.area}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <StatPill icon={WifiHighIcon} label={`${cafe.ratings.wifiSpeedMbps} Mbps`} />
                    <StatPill
                      icon={PlugIcon}
                      label={cafe.ratings.power >= 4 ? "Plenty of outlets" : "Some outlets"}
                    />
                    <StatPill
                      icon={SpeakerHighIcon}
                      label={cafe.ratings.noise <= 2 ? "Quiet" : "Buzzy"}
                    />
                  </div>
                </div>
              </div>
              <div className="hidden shrink-0 text-right sm:block">
                <div className="flex items-center justify-end gap-1.5">
                  <RatingStars value={cafe.rating} />
                  <span className="text-xs text-kumo-subtle">
                    {cafe.rating}
                  </span>
                </div>
                <p className="text-sm text-kumo-subtle">{cafe.priceRange}</p>
              </div>
            </ListRow>
          ))}
        </ListContainer>
      )}

      <p className="flex items-center gap-1.5 text-sm text-kumo-subtle">
        <MagnifyingGlassIcon size={14} />
        Know a cafe that should be here? Suggestions open once accounts ship.
      </p>
    </div>
  )
}
