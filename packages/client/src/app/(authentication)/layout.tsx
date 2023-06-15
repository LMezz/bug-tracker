import "@/styles/globals.css"

import { FC, ReactNode } from "react"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
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

interface AuthLayoutProps {
  children: ReactNode
}

const Layout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="flex-1">{children}</div>
    </div>
  )
}

export default Layout
