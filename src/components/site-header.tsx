import { Link, useMatches } from "@tanstack/react-router"
import { Button } from "@cloudflare/kumo/components/button"
import { CaretRightIcon, PlusIcon } from "@phosphor-icons/react"
import { Logo } from "@/components/logo"

const SECTION_LABELS: Record<string, string> = {
  cafes: "Cafes",
  events: "Events",
  classifieds: "Classifieds",
  lists: "Lists",
  areas: "Areas",
  qna: "Q&A",
  guides: "Guides",
  rent: "Rent Heatmap",
  flats: "Flats & Flatmates",
  jobs: "Jobs",
}

/** Pulls a human-readable title out of whatever a detail route's loader returned. */
function getDetailLabel(data: unknown, fallback: string): string {
  if (data && typeof data === "object") {
    const d = data as Record<string, unknown>
    if (typeof d.name === "string") return d.name
    if (typeof d.title === "string") return d.title
    if (typeof d.question === "string") return d.question
  }
  return fallback
}

type Crumb = { label: string; href?: string }

/**
 * Derives a breadcrumb trail from the current route match, e.g.
 * `Cafes > Blue Door Coffee`. Used instead of a separate breadcrumb bar --
 * the header logo itself acts as the root ("bangalore.fyi") crumb.
 */
function useBreadcrumbTrail(): Crumb[] {
  const matches = useMatches()
  const last = matches[matches.length - 1]
  const pathname = last?.pathname ?? "/"
  const segments = pathname.split("/").filter(Boolean)
  if (segments.length === 0) return []

  const section = segments[0]
  const sectionLabel = SECTION_LABELS[section]
  if (!sectionLabel) return []

  const isDetailPage = segments.length > 1
  const trail: Crumb[] = [
    { label: sectionLabel, href: isDetailPage ? `/${section}` : undefined },
  ]

  if (isDetailPage) {
    trail.push({ label: getDetailLabel(last?.loaderData, segments[1]) })
  }

  return trail
}

export function SiteHeader() {
  const trail = useBreadcrumbTrail()

  return (
    <header className="sticky top-0 z-40 bg-kumo-canvas/85 backdrop-blur-sm">
      <div className="mx-auto flex h-14 w-full max-w-3xl min-w-0 shrink-0 items-center gap-2 px-4 sm:px-6">
        <Link to="/" className="shrink-0 transition-opacity hover:opacity-80">
          <Logo />
        </Link>

        {trail.length > 0 ? (
          <nav className="hidden min-w-0 items-center gap-2 text-sm sm:flex">
            {trail.map((crumb, i) => (
              <span key={i} className="flex min-w-0 items-center gap-2">
                <CaretRightIcon
                  size={12}
                  className="shrink-0 text-kumo-subtle/60"
                />
                {crumb.href ? (
                  <Link
                    to={crumb.href}
                    className="text-kumo-subtle hover:text-kumo-strong"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="truncate font-medium text-kumo-strong">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        ) : null}

        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="ghost"
            shape="circle"
            size="sm"
            aria-label="Post something"
            icon={<PlusIcon weight="bold"/>}
            className="bg-neutral-200 text-neutral-600"
          />
        </div>
      </div>
    </header>
  )
}
