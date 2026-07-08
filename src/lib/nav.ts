import type { Icon } from "@phosphor-icons/react"
import {
  ArmchairIcon,
  BuildingsIcon,
  CalendarBlankIcon,
  ChatCircleTextIcon,
  CompassIcon,
  ListChecksIcon,
  MapTrifoldIcon,
  StorefrontIcon,
  SuitcaseIcon,
  TagIcon,
} from "@phosphor-icons/react"

export type NavItem = {
  label: string
  href: string
  description: string
  icon: Icon
  /** Pale card background + matching icon color, used on the homepage explore grid. */
  tint: { card: string; icon: string }
}

/**
 * The ten pillars of bangalore.fyi. Shared by the footer and the homepage
 * "explore" grid so everything stays in one place.
 */
export const navItems: NavItem[] = [
  {
    label: "Cafes",
    href: "/cafes",
    description: "Work-friendly cafes with wifi, power & noise ratings",
    icon: StorefrontIcon,
    tint: { card: "bg-amber-50", icon: "text-amber-600" },
  },
  {
    label: "Events",
    href: "/events",
    description: "What's happening in the city this week",
    icon: CalendarBlankIcon,
    tint: { card: "bg-sky-50", icon: "text-sky-600" },
  },
  {
    label: "Classifieds",
    href: "/classifieds",
    description: "Buy, sell & trade with people nearby",
    icon: TagIcon,
    tint: { card: "bg-orange-50", icon: "text-orange-600" },
  },
  {
    label: "Lists",
    href: "/lists",
    description: "Curated lists from real Bangaloreans",
    icon: ListChecksIcon,
    tint: { card: "bg-violet-50", icon: "text-violet-600" },
  },
  {
    label: "Areas",
    href: "/areas",
    description: "Guides to every locality in the city",
    icon: MapTrifoldIcon,
    tint: { card: "bg-emerald-50", icon: "text-emerald-600" },
  },
  {
    label: "Q&A",
    href: "/qna",
    description: "Ask anything about living in Bangalore",
    icon: ChatCircleTextIcon,
    tint: { card: "bg-pink-50", icon: "text-pink-600" },
  },
  {
    label: "Guides",
    href: "/guides",
    description: "Moving here? Start with these",
    icon: CompassIcon,
    tint: { card: "bg-teal-50", icon: "text-teal-600" },
  },
  {
    label: "Rent Heatmap",
    href: "/rent",
    description: "See how rent compares across the city",
    icon: BuildingsIcon,
    tint: { card: "bg-indigo-50", icon: "text-indigo-600" },
  },
  {
    label: "Flats & Flatmates",
    href: "/flats",
    description: "Find a place, or a person to share it with",
    icon: ArmchairIcon,
    tint: { card: "bg-rose-50", icon: "text-rose-600" },
  },
  {
    label: "Jobs",
    href: "/jobs",
    description: "Roles at companies building out of Bangalore",
    icon: SuitcaseIcon,
    tint: { card: "bg-cyan-50", icon: "text-cyan-600" },
  },
]
