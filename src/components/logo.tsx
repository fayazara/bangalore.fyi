import { cn } from "@cloudflare/kumo/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-[17px] font-semibold tracking-tight text-kumo-strong",
        className,
      )}
    >
      bangalore
      <span className="inline-block size-1 rounded-full bg-kumo-brand" />
      fyi
    </span>
  )
}
