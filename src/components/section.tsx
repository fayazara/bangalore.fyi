import type { ReactNode } from "react"
import { Link } from "@tanstack/react-router"
import { ArrowRightIcon } from "@phosphor-icons/react"
import { cn } from "@cloudflare/kumo/utils"

export function Section({
  title,
  description,
  viewAllHref,
  children,
  className,
}: {
  title: ReactNode
  description?: ReactNode
  viewAllHref?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={cn("flex flex-col gap-4", className)}>
      <div className="flex items-end justify-between gap-4 px-6">
        <div className="flex flex-col gap-1">
          <h2 className="font-medium tracking-tight text-kumo-strong">
            {title}
          </h2>
          {description ? (
            <p className="text-sm text-kumo-subtle">{description}</p>
          ) : null}
        </div>
        {viewAllHref ? (
          <Link
            to={viewAllHref}
            className="group flex shrink-0 items-center gap-1 text-sm font-medium text-kumo-default hover:text-kumo-strong"
          >
            View all
            <ArrowRightIcon
              size={14}
              weight="bold"
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        ) : null}
      </div>
      {children}
    </section>
  )
}
