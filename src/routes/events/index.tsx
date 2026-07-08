import { useMemo, useState } from "react"
import { createFileRoute } from "@tanstack/react-router"
import { Badge } from "@cloudflare/kumo/components/badge"
import { Empty } from "@cloudflare/kumo/components/empty"
import { cn } from "@cloudflare/kumo/utils"
import { PageHeader } from "@/components/page-header"
import { ListContainer, ListRow, ListRowImage } from "@/components/list-row"
import { events, eventCategories, type EventCategory } from "@/data/events"

export const Route = createFileRoute("/events/")({
  component: EventsIndex,
})

function formatEventDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  })
}

function EventsIndex() {
  const [activeCategory, setActiveCategory] = useState<EventCategory | "All">(
    "All",
  )

  const filtered = useMemo(() => {
    const list =
      activeCategory === "All"
        ? events
        : events.filter((e) => e.category === activeCategory)
    return [...list].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    )
  }, [activeCategory])

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Events"
        title="What's happening in Bangalore"
        description="Meetups, markets, gigs, workshops and everything in between — posted by the people running them."
      />

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("All")}
          className={cn(
            "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
            activeCategory === "All"
              ? "bg-kumo-contrast text-white"
              : "bg-kumo-tint text-kumo-default hover:bg-kumo-fill",
          )}
        >
          All events
        </button>
        {eventCategories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
              activeCategory === cat.name
                ? "bg-kumo-contrast text-white"
                : "bg-kumo-tint text-kumo-default hover:bg-kumo-fill",
            )}
          >
            <span aria-hidden>{cat.icon}</span>
            {cat.name}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <Empty
          title="No events in this category yet"
          description="Check back soon, or browse all events."
        />
      ) : (
        <ListContainer>
          {filtered.map((event) => (
            <ListRow
              key={event.slug}
              href={`/events/${event.slug}`}
              className="items-stretch"
            >
              <ListRowImage src={event.image} alt={event.title} />
              <div className="flex flex-1 flex-col justify-between gap-1">
                <Badge variant="outline" className="w-fit">
                  {event.category}
                </Badge>
                <div>
                  <p className="text-[15px] font-semibold text-kumo-strong">
                    {event.title}
                  </p>
                  <p className="text-sm text-kumo-subtle">
                    {event.venue}, {event.area}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 text-right sm:block">
                <p className="text-sm font-medium text-kumo-strong">
                  {formatEventDate(event.date)}
                </p>
                <p className="text-sm text-kumo-subtle">{event.price}</p>
              </div>
            </ListRow>
          ))}
        </ListContainer>
      )}
    </div>
  )
}
