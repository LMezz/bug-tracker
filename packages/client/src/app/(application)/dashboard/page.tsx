import TicketsByPriority from "@/components/dashboard/tickets/by-priority"
import TicketsByStatus from "@/components/dashboard/tickets/by-status"
import TicketsByType from "@/components/dashboard/tickets/by-type"
import ChartWidget from "@/components/dashboard/widget"

export default function DashboardPage() {
  return (
    <section className="container grid grid-cols-2 gap-4 py-[1.5em]">
      <TicketsByPriority />
      <TicketsByType />
      <TicketsByStatus />
      <ChartWidget />
    </section>
  )
}
