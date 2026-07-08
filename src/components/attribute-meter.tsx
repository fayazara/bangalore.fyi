import { Meter } from "@cloudflare/kumo/components/meter"

const SCALE_LABELS = ["Poor", "Fair", "Okay", "Good", "Excellent"]

/**
 * Renders a 1-5 rating as a Kumo Meter with a plain-English label,
 * used for cafe attributes like wifi, power outlets, noise and food.
 */
export function AttributeMeter({
  label,
  value,
  customValue,
}: {
  label: string
  value: number
  customValue?: string
}) {
  const clamped = Math.min(5, Math.max(1, Math.round(value)))
  return (
    <Meter
      label={label}
      value={clamped * 20}
      showValue={false}
      customValue={customValue ?? SCALE_LABELS[clamped - 1]}
    />
  )
}
