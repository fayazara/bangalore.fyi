import { Link } from "@tanstack/react-router"
import { Button } from "@cloudflare/kumo/components/button"
import { PlusIcon } from "@phosphor-icons/react"
import { Logo } from "@/components/logo"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-kumo-canvas/85 backdrop-blur-sm">
      <div className="mx-auto flex h-14 w-full max-w-3xl shrink-0 items-center gap-4 px-4 sm:px-6">
        <Link to="/" className="shrink-0 transition-opacity hover:opacity-80">
          <Logo />
        </Link>

        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="secondary"
            shape="circle"
            size="sm"
            aria-label="Post something"
            icon={PlusIcon}
            className="!bg-kumo-fill !ring-0"
          />
        </div>
      </div>
    </header>
  )
}
