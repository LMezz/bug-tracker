"use client"

import "@/styles/globals.css"
import React, { useState } from "react"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { AppNavMenu } from "@/components/app-nav-menu"
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const sidebarState = useState(false)
  const [sidebarIsOpen] = sidebarState

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        {/*eslint-disable-next-line @next/next/no-head-element*/}
        <head />
        <body
          className={cn(
            "bg-background min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <div className="flex">
                <AppNavMenu sidebarState={sidebarState} />
                <div className="w-[calc(100%-16rem)]">
                  <SiteHeader sidebarState={sidebarState} />
                  <div
                    className={cn(
                      "mt-[4rem] transition-all",
                      sidebarIsOpen ? "ml-[17rem]" : "ml-[calc(56px+1rem)]"
                    )}
                  >
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
