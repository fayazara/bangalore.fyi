import type { ReactNode } from "react"
import { Link } from "@tanstack/react-router"
import { cn } from "@cloudflare/kumo/utils"

/**
 * Container for a vertical list of rows (used on every index/listing page
 * instead of a card grid). Grouped purely by background contrast against
 * the page canvas -- no borders or dividers.
 */
export function ListContainer({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-xl bg-kumo-base",
        className,
      )}
    >
      {children}
    </div>
  )
}

export function ListRow({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-4 p-5 transition-colors hover:bg-kumo-tint",
        className,
      )}
    >
      {children}
    </Link>
  )
}

export function ListRowImage({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={cn(
        "size-20 shrink-0 rounded-lg object-cover ring-1 ring-black/[0.06] sm:size-24",
        className,
      )}
    />
  )
}
