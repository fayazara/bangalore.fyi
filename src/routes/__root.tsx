import {
  HeadContent,
  Link as RouterLink,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router"
import { forwardRef } from "react"
import { LinkProvider, type LinkComponentProps } from "@cloudflare/kumo/utils"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import appCss from "../styles.css?url"

/**
 * Bridges Kumo's framework-agnostic `<Link>` / `<LinkButton>` to TanStack
 * Router so internal navigation is client-side.
 */
const AppLink = forwardRef<HTMLAnchorElement, LinkComponentProps>(
  ({ href, to, ...rest }, ref) => {
    const dest = href ?? to ?? "#"
    const isExternal = /^https?:\/\//.test(dest) || dest.startsWith("mailto:")
    if (isExternal) {
      return <a ref={ref} href={dest} {...rest} />
    }
    return <RouterLink ref={ref} to={dest} {...rest} />
  },
)
AppLink.displayName = "AppLink"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "bangalore.fyi - the community hub for Bangalore",
      },
      {
        name: "description",
        content:
          "Cafes to work from, what's on, classifieds, curated lists, area guides, flats & flatmates, jobs, and more - all built by and for people living in Bangalore.",
      },
      { name: "theme-color", content: "#fafaf9" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-kumo-canvas text-kumo-default antialiased">
        <LinkProvider component={AppLink}>
          <div className="flex min-h-svh flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </LinkProvider>
        <Scripts />
      </body>
    </html>
  )
}
