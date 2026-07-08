import { Link } from "@tanstack/react-router"
import { Input } from "@cloudflare/kumo/components/input"
import { Button } from "@cloudflare/kumo/components/button"
import { ArrowRightIcon } from "@phosphor-icons/react"
import { Logo } from "@/components/logo"
import { navItems } from "@/lib/nav"

const aboutLinks = [
  { label: "About", href: "/about" },
  { label: "API docs", href: "/api" },
  { label: "Guidelines", href: "/guidelines" },
  { label: "Contact", href: "/contact" },
]

export function SiteFooter() {
  return (
    <footer className="bg-kumo-base">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-3 lg:col-span-2">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-kumo-subtle">
              A community-powered hub for everyone living in, working in, or
              moving to Bangalore. Built by a local, for locals.
            </p>
            <form
              className="mt-1 flex max-w-xs gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="you@example.com"
                aria-label="Email address"
                className="flex-1"
              />
              <Button
                type="submit"
                variant="primary"
                shape="square"
                aria-label="Subscribe"
                icon={ArrowRightIcon}
              />
            </form>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-kumo-strong">Explore</p>
            {navItems.slice(0, 5).map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-kumo-subtle hover:text-kumo-strong"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-kumo-strong">More</p>
            {navItems.slice(5).map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-kumo-subtle hover:text-kumo-strong"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-kumo-strong">bangalore.fyi</p>
            {aboutLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-kumo-subtle hover:text-kumo-strong"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 pt-6 text-xs text-kumo-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} bangalore.fyi. Made in Bangalore.</p>
          <p>
            Every listing here is open data -{" "}
            <Link to="/api" className="text-kumo-link hover:underline">
              read the API docs
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
