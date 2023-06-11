import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function DashboardPage() {
  return (
    <section className="container gap-2 py-[2em]">
      Settings
      <ThemeToggle />
    </section>
  )
}
