"use client"

import { FC, ReactNode } from "react"

import "@/styles/globals.css"

import { Metadata } from "next"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
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
}

interface UserLayoutProps {
  children: ReactNode
}

const Layout: FC<UserLayoutProps> = ({ children }) => {
  return (
    <AuthGuard>
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
    </AuthGuard>
  )
}

export default Layout
