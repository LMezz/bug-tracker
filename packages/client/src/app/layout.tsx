"use client"

import { FC, ReactNode } from "react"
import { AuthProvider } from "@/context/AuthContext"
import { ThemeProvider } from "next-themes"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

interface RootLayoutProps {
  children?: ReactNode
}

const Layout: FC<RootLayoutProps> = ({ children }) => {
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
            <AuthProvider>{children}</AuthProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

export default Layout
