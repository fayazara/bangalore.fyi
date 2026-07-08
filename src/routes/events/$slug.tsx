import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import { Badge } from "@cloudflare/kumo/components/badge"
import { Button } from "@cloudflare/kumo/components/button"
import {
  CalendarBlankIcon,
  ClockIcon,
  MapPinIcon,
  ShareNetworkIcon,
} from "@phosphor-icons/react"
import { events, getEventBySlug } from "@/data/events"

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = getEventBySlug(params.slug)
    if (!event) throw notFound()
    return event
  },
  component: EventDetail,
})

function formatFullDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

function EventDetail() {
  const event = Route.useLoaderData()
  const others = events.filter((e) => e.slug !== event.slug).slice(0, 3)
  const spotsLeft = event.capacity - event.attendees

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-8 sm:px-6">
      <div className="aspect-[21/9] w-full overflow-hidden rounded-2xl bg-kumo-recessed ring-1 ring-black/[0.06]">
        <img
          src={event.image}
          alt={event.title}
          className="size-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-3">
        <Badge variant="outline" className="w-fit">
          {event.category}
        </Badge>
        <h1 className="text-2xl font-semibold tracking-tight text-kumo-strong sm:text-[28px]">
          {event.title}
        </h1>
        <p className="text-sm text-kumo-subtle">
          Hosted by <span className="text-kumo-default">{event.host}</span>
        </p>
      </div>

      <div className="flex flex-col gap-3 text-sm text-kumo-default">
        <div className="flex items-center gap-2.5">
          <CalendarBlankIcon size={18} className="text-kumo-subtle" />
          {formatFullDate(event.date)}
        </div>
        <div className="flex items-center gap-2.5">
          <ClockIcon size={18} className="text-kumo-subtle" />
          {event.time}
        </div>
        <div className="flex items-center gap-2.5">
          <MapPinIcon size={18} className="text-kumo-subtle" />
          {event.venue}, {event.area}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button variant="secondary" disabled={spotsLeft <= 0}>
          {spotsLeft > 0 ? "RSVP · " + event.price : "Join waitlist"}
        </Button>
        <div className="flex items-center gap-3">
          <span className="text-sm text-kumo-subtle">
            {event.attendees} going
            {spotsLeft > 0 ? ` · ${spotsLeft} spots left` : ""}
          </span>
          <Button
            variant="ghost"
            shape="square"
            icon={ShareNetworkIcon}
            aria-label="Share event"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-kumo-strong">
          About this event
        </h2>
        <p className="leading-relaxed text-kumo-default">
          {event.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {event.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold text-kumo-strong">
          More events this week
        </p>
        <div className="flex flex-col gap-1 rounded-xl bg-kumo-base p-2">
          {others.map((e) => (
            <Link
              key={e.slug}
              to="/events/$slug"
              params={{ slug: e.slug }}
              className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-kumo-tint"
            >
              <img
                src={e.image}
                alt={e.title}
                className="size-12 shrink-0 rounded-md object-cover"
              />
              <div className="flex flex-col">
                <span className="line-clamp-1 text-sm font-medium text-kumo-strong">
                  {e.title}
                </span>
                <span className="text-xs text-kumo-subtle">
                  {formatFullDate(e.date).split(",")[0]}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
