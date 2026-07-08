import { cn } from "@cloudflare/kumo/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 font-medium tracking-tight text-kumo-strong",
        className,
      )}
    >
      bangalore
      <span className="inline-block size-1 rounded-full bg-black" />
      fyi
    </span>
  )
}
