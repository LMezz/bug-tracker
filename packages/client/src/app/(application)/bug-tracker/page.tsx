import { columns, Issue } from "@/components/issue-list/columns"
import { IssueListTable } from "@/components/issue-list/issue-list"

async function getData(): Promise<Issue[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      bug: "Fetched data invisible",
      reporter: "LMezz",
      created: "14/06/2023",
      status: "in-progress",
      assignee: "Marcus",
      priority: "high",
    },
    {
      id: "20374o827",
      bug: "Test issue",
      reporter: "NewProgrammer83",
      created: "8/05/2023",
      status: "resolved",
      assignee: "Bob",
      priority: "medium",
    },
    // ...
  ]
}

export default async function BugTrackerPage() {
  const data = await getData()
  return (
    <section className="container grid py-[1.5em]">
      <div className="py-2">
        <IssueListTable columns={columns} data={data} />
      </div>
    </section>
  )
}
