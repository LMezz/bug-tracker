import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AppearancePage() {
  return (
    <div>
      <h1 className="text-2xl">Appearance</h1>
      <Separator className="my-2" />
      <ThemeToggle />
    </div>
  )
}
