import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import { Badge } from "@cloudflare/kumo/components/badge"
import { LinkButton } from "@cloudflare/kumo/components/button"
import { Breadcrumbs } from "@cloudflare/kumo/components/breadcrumbs"
import {
  ClockIcon,
  MapPinIcon,
  NavigationArrowIcon,
} from "@phosphor-icons/react"
import { RatingStars } from "@/components/rating-stars"
import { AttributeMeter } from "@/components/attribute-meter"
import { cafes, getCafeBySlug } from "@/data/cafes"

export const Route = createFileRoute("/cafes/$slug")({
  loader: ({ params }) => {
    const cafe = getCafeBySlug(params.slug)
    if (!cafe) throw notFound()
    return cafe
  },
  component: CafeDetail,
})

function CafeDetail() {
  const cafe = Route.useLoaderData()
  const others = cafes.filter((c) => c.slug !== cafe.slug).slice(0, 3)

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-8 sm:px-6">
      <Breadcrumbs>
        <Breadcrumbs.Link href="/cafes">Cafes</Breadcrumbs.Link>
        <Breadcrumbs.Separator />
        <Breadcrumbs.Current>{cafe.name}</Breadcrumbs.Current>
      </Breadcrumbs>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 sm:grid-rows-2">
        <div className="aspect-[4/3] overflow-hidden rounded-xl bg-kumo-recessed ring-1 ring-black/[0.06] sm:col-span-2 sm:row-span-2 sm:aspect-auto">
          <img
            src={cafe.gallery[0]}
            alt={cafe.name}
            className="size-full object-cover"
          />
        </div>
        {cafe.gallery.slice(1, 3).map((src, i) => (
          <div
            key={i}
            className="aspect-[4/3] overflow-hidden rounded-xl bg-kumo-recessed ring-1 ring-black/[0.06] sm:col-span-2 sm:aspect-auto"
          >
            <img src={src} alt="" className="size-full object-cover" />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-kumo-strong sm:text-[28px]">
              {cafe.name}
            </h1>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-kumo-subtle">
              <MapPinIcon size={14} />
              {cafe.address}
            </p>
          </div>
          <span className="text-lg font-medium text-kumo-subtle">
            {cafe.priceRange}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <RatingStars value={cafe.rating} size={16} />
          <span className="text-sm font-medium text-kumo-strong">
            {cafe.rating}
          </span>
          <span className="text-sm text-kumo-subtle">
            ({cafe.reviewCount} reviews)
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {cafe.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="leading-relaxed text-kumo-default">{cafe.description}</p>
      </div>

      <div className="flex flex-col gap-3 rounded-xl bg-kumo-base p-5">
        <div className="flex items-center gap-2 text-sm text-kumo-default">
          <ClockIcon size={16} className="text-kumo-subtle" />
          {cafe.openHours}
        </div>
        <div className="flex items-center gap-2 text-sm text-kumo-default">
          <MapPinIcon size={16} className="text-kumo-subtle" />
          {cafe.area}
        </div>
        <LinkButton
          href={`https://maps.google.com/?q=${encodeURIComponent(cafe.address)}`}
          external
          variant="primary"
          icon={NavigationArrowIcon}
          className="mt-1 justify-center"
        >
          Get directions
        </LinkButton>
      </div>

      <div className="flex flex-col gap-4 rounded-xl bg-kumo-base p-5">
        <h2 className="text-sm font-semibold text-kumo-strong">
          Work-from-here ratings
        </h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          <AttributeMeter
            label="Wifi"
            value={cafe.ratings.wifi}
            customValue={`${cafe.ratings.wifiSpeedMbps} Mbps avg`}
          />
          <AttributeMeter label="Power outlets" value={cafe.ratings.power} />
          <AttributeMeter
            label="Noise level"
            value={6 - cafe.ratings.noise}
            customValue={
              cafe.ratings.noise <= 2
                ? "Quiet"
                : cafe.ratings.noise === 3
                  ? "Moderate"
                  : "Buzzy"
            }
          />
          <AttributeMeter label="Food quality" value={cafe.ratings.food} />
          <AttributeMeter label="Seating availability" value={cafe.ratings.seating} />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-kumo-strong">
          Reviews ({cafe.reviews.length})
        </h2>
        <div className="flex flex-col gap-5">
          {cafe.reviews.map((review, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-medium text-kumo-strong">
                  {review.author}
                </p>
                <span className="text-xs text-kumo-subtle">
                  {new Date(review.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
              <RatingStars value={review.rating} size={12} />
              <p className="text-sm leading-relaxed text-kumo-default">
                {review.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold text-kumo-strong">
          More cafes nearby
        </p>
        <div className="flex flex-col gap-1 rounded-xl bg-kumo-base p-2">
          {others.map((c) => (
            <Link
              key={c.slug}
              to="/cafes/$slug"
              params={{ slug: c.slug }}
              className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-kumo-tint"
            >
              <img
                src={c.image}
                alt={c.name}
                className="size-12 shrink-0 rounded-md object-cover"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-kumo-strong">
                  {c.name}
                </span>
                <span className="text-xs text-kumo-subtle">{c.area}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
