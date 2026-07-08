import type { Icon } from "@phosphor-icons/react"
import { cn } from "@cloudflare/kumo/utils"

/**
 * Small icon + label pill used to summarize a rating-style attribute
 * (wifi, power outlets, noise level...) on listing cards.
 */
export function StatPill({
  icon: IconCmp,
  label,
  className,
}: {
  icon: Icon
  label: string
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-kumo-tint px-2 py-0.5 text-xs font-medium text-kumo-default",
        className,
      )}
    >
      <IconCmp size={12} weight="bold" />
      {label}
    </span>
  )
}
