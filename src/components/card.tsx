import type { ReactNode } from "react"
import { Link } from "@tanstack/react-router"
import { cn } from "@cloudflare/kumo/utils"

/**
 * Base card surface shared by every listing card across the site
 * (cafes, events, classifieds, lists, jobs, flats...).
 *
 * When `href` is provided, the whole card is a link with a subtle
 * hover/press affordance. Otherwise it's a plain container.
 */
export function Card({
  href,
  horizontal = false,
  children,
  className,
}: {
  href?: string
  /** Lay children out as a row (image beside content) instead of stacked. */
  horizontal?: boolean
  children: ReactNode
  className?: string
}) {
  const classes = cn(
    "group relative flex overflow-hidden rounded-xl bg-kumo-base transition-all duration-150",
    horizontal ? "flex-row" : "flex-col",
    href && "hover:-translate-y-0.5 hover:shadow-md active:translate-y-0",
    className,
  )

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    )
  }

  return <div className={classes}>{children}</div>
}

export function CardImage({
  src,
  alt,
  aspect = "aspect-[4/3]",
  className,
}: {
  src: string
  alt: string
  aspect?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-kumo-recessed",
        aspect,
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="size-full object-cover ring-1 ring-inset ring-black/[0.06] transition-transform duration-300 group-hover:scale-[1.03]"
      />
    </div>
  )
}
