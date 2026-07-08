import type { ReactNode } from "react"
import { cn } from "@cloudflare/kumo/utils"

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  className,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  actions?: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className="flex max-w-2xl flex-col gap-2">
        {eyebrow ? (
          <p className="text-sm font-medium text-kumo-brand">{eyebrow}</p>
        ) : null}
        <h1 className="text-[28px] font-semibold tracking-tight text-kumo-strong sm:text-[32px]">
          {title}
        </h1>
        {description ? (
          <p className="text-[15px] leading-relaxed text-kumo-subtle">
            {description}
          </p>
        ) : null}
      </div>
      {actions ? (
        <div className="flex shrink-0 items-center gap-2">{actions}</div>
      ) : null}
    </div>
  )
}
