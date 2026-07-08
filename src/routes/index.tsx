import { createFileRoute, Link } from "@tanstack/react-router"
import { Badge } from "@cloudflare/kumo/components/badge"
import { LinkButton } from "@cloudflare/kumo/components/button"
import { cn } from "@cloudflare/kumo/utils"
import { ArrowRightIcon } from "@phosphor-icons/react"
import { ListContainer, ListRow, ListRowImage } from "@/components/list-row"
import { Section } from "@/components/section"
import { RatingStars } from "@/components/rating-stars"
import { navItems } from "@/lib/nav"
import { cafes } from "@/data/cafes"
import { events } from "@/data/events"
import { lists } from "@/data/lists"
import { questions } from "@/data/qna"

export const Route = createFileRoute("/")({
  component: Home,
})

function formatEventDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  })
}

function timeAgo(iso: string) {
  const days = Math.round(
    (Date.now() - new Date(iso).getTime()) / (1000 * 60 * 60 * 24)
  )
  if (days <= 0) return "today"
  if (days === 1) return "1 day ago"
  return `${days} days ago`
}

function Home() {
  return (
    <div className="flex flex-col gap-16 pt-8 pb-20 sm:gap-20">
      {/* Hero */}
      <section>
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="relative h-64 rounded-3xl bg-white px-4 pt-6 ring-1 ring-neutral-100 sm:px-6 overflow-hidden">
            <h1
              className="max-w-2xl text-4xl leading-[1.15] font-semibold text-neutral-700"
              style={{ fontFamily: "SF Compact Display" }}
            >
              Everything you need to live well in Bangalore
            </h1>
            <span className="absolute right-4 bottom-4 size-3.5 rounded-full bg-neutral-600"></span>
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-3xl flex-col gap-16 px-4 sm:gap-32 sm:px-6">
        {/* Explore grid */}
        <Section title="Explore bangalore.fyi">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex items-center gap-4 rounded-2xl bg-kumo-base p-5 ring-1 ring-neutral-100"
              >
                <span
                  className={cn(
                    "flex size-11 shrink-0 items-center justify-center rounded-xl",
                    item.tint.card
                  )}
                >
                  <item.icon
                    size={22}
                    weight="regular"
                    className={item.tint.icon}
                  />
                </span>
                <div className="flex flex-1 flex-col gap-0.5">
                  <p className="text-base font-semibold text-kumo-strong">
                    {item.label}
                  </p>
                  <p className="text-sm text-kumo-subtle">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Section>

        {/* This week's events */}
        <Section title="This week in Bangalore" viewAllHref="/events">
          <ListContainer>
            {events.slice(0, 5).map((event) => (
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
        </Section>

        {/* Cafes */}
        <Section title="Cafes to work from" viewAllHref="/cafes">
          <ListContainer>
            {cafes.slice(0, 4).map((cafe) => (
              <ListRow
                key={cafe.slug}
                href={`/cafes/${cafe.slug}`}
                className="items-stretch"
              >
                <ListRowImage src={cafe.image} alt={cafe.name} />
                <div className="flex flex-1 flex-col justify-between gap-1">
                  <Badge variant="outline" className="w-fit">
                    {cafe.tags[0]}
                  </Badge>
                  <div>
                    <p className="text-[15px] font-semibold text-kumo-strong">
                      {cafe.name}
                    </p>
                    <p className="text-sm text-kumo-subtle">{cafe.area}</p>
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
        </Section>

        {/* Curated lists */}
        <Section title="Curated by locals" viewAllHref="/lists">
          <ListContainer>
            {lists.slice(0, 3).map((list) => (
              <ListRow key={list.slug} href={`/lists/${list.slug}`}>
                <ListRowImage src={list.coverImage} alt={list.title} />
                <div className="flex flex-1 flex-col gap-1">
                  <p className="text-[15px] font-semibold text-kumo-strong">
                    {list.title}
                  </p>
                  <p className="text-sm text-kumo-subtle">
                    by {list.curator.name} · {list.items.length} picks
                  </p>
                </div>
              </ListRow>
            ))}
          </ListContainer>
        </Section>

        {/* Q&A */}
        <Section title="Recently asked" viewAllHref="/qna">
          <ListContainer>
            {questions.slice(0, 4).map((q) => (
              <ListRow key={q.slug} href={`/qna/${q.slug}`}>
                <div className="flex flex-1 flex-col gap-1">
                  <p className="text-[15px] font-medium text-kumo-strong">
                    {q.title}
                  </p>
                  <p className="text-sm text-kumo-subtle">
                    {q.answers.length} answers · {timeAgo(q.askedAt)}
                  </p>
                </div>
              </ListRow>
            ))}
          </ListContainer>
        </Section>

        {/* CTA */}
        <div className="items-start gap-4 rounded-2xl bg-kumo-base p-6 ring-1 ring-neutral-100 sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-8 flex flex-col gap-1.5">
            <h2 className="text-xl font-semibold text-kumo-strong">
              Know something the city should know?
            </h2>
            <p className="max-w-md tracking-tight text-kumo-subtle">
              Post a classified, review a cafe, or write a curated list.
              Everything on bangalore.fyi comes from people like you.
            </p>
          </div>
          <LinkButton
            href="/classifieds/new"
            variant="secondary"
          >
            Submit
          </LinkButton>
        </div>
      </div>
    </div>
  )
}
