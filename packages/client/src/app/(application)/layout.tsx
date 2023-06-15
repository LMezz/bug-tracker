"use client"

import "@/styles/globals.css"

import React, { useState } from "react"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { AppNavMenu } from "@/components/app-nav-menu"
import { AuthGuard } from "@/components/authorisation/auth-guard"
import { SiteHeader } from "@/components/site-header"

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

interface ApplicationLayoutProps {
  children: React.ReactNode
}

export default function ApplicationLayout({
  children,
}: ApplicationLayoutProps) {
  const sidebarState = useState(false)
  const [sidebarIsOpen] = sidebarState

  return (
    <AuthGuard>
      <div className="relative flex min-h-screen flex-col">
        <div className="flex">
          <AppNavMenu sidebarState={sidebarState} />
          <div className="w-[calc(100%-16rem)]">
            <SiteHeader sidebarState={sidebarState} />
            <div
              className={cn(
                "mt-[4rem] transition-all",
                sidebarIsOpen
                  ? "ml-[17rem] w-[calc(100%+56px-5.5rem)]"
                  : "ml-[calc(56px+1rem)] w-[calc(100%+10.5rem)]"
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
