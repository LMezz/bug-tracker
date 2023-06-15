import { columns, Ticket } from "@/components/ticket-list/columns"
import { TicketListTable } from "@/components/ticket-list/ticket-list"

async function getData(): Promise<Ticket[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      issue: "Fetched data invisible",
      reporter: "LMezz",
      created: "14/06/2023",
      status: "in-progress",
      assignee: "Marcus",
      priority: "high",
    },
    {
      id: "20374o827",
      issue: "Test issue",
      reporter: "NewProgrammer83",
      created: "8/05/2023",
      status: "resolved",
      assignee: "Bob",
      priority: "medium",
    },
    // ...
  ]
}

export default async function TicketsPage() {
  const data = await getData()
  return (
    <section className="container grid py-[1.5em]">
      <div className="py-2">
        <TicketListTable columns={columns} data={data} />
      </div>
    </section>
  )
}
