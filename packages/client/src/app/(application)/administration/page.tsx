import { columns, UserData } from "@/components/user-list/columns"
import { UserListTable } from "@/components/user-list/user-list"

async function getData(): Promise<UserData[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1234",
      username: "LMezz",
      email: "lmez4@gmail.com",
      role: "administrator",
    },
    {
      id: "12a34",
      username: "Marcus",
      email: "marcusr@hotmail.com",
      role: "project-manager",
    },
  ]
}

export default async function AdministrationPage() {
  const data = await getData()

  return (
    <section className="container gap-2 py-[1.5em]">
      <div className="py-2">
        <UserListTable columns={columns} data={data} />
      </div>
    </section>
  )
}
