import { StarIcon } from "@phosphor-icons/react"
import { cn } from "@cloudflare/kumo/utils"

export function RatingStars({
  value,
  size = 14,
  className,
}: {
  value: number
  size?: number
  className?: string
}) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = value >= i + 1
        const half = !filled && value > i && value < i + 1
        return (
          <StarIcon
            key={i}
            size={size}
            weight={filled || half ? "fill" : "regular"}
            className={filled || half ? "text-kumo-brand" : "text-kumo-subtle/50"}
          />
        )
      })}
    </span>
  )
}
