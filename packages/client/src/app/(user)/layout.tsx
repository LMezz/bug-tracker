import { FC, ReactNode } from "react"

import "@/styles/globals.css"
import { Metadata } from "next"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface UserLayoutProps {
  children: ReactNode
}

const Layout: FC<UserLayoutProps> = ({ children }) => {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        {/*eslint-disable-next-line @next/next/no-head-element*/}
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <div className="border-b">
                <SiteHeader>
                  <div className="w-10">
                    <Link
                      className={buttonVariants({
                        size: "sm",
                        variant: "ghost",
                      })}
                      href="/dashboard"
                    >
                      Dashboard
                    </Link>
                  </div>
                </SiteHeader>
              </div>
              <div className="mt-[4rem] flex-1 px-5 py-7">{children}</div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

export default Layout
