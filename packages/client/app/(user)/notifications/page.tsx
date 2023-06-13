"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { AiOutlineCheck, AiOutlineInbox } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function NotificationsPage() {
  const filters = [
    {
      name: "Inbox",
      params: "",
      icon: <AiOutlineInbox />,
    },
    {
      name: "Saved",
      params: "query=is%3Asaved",
      icon: <BsBookmark />,
    },
    {
      name: "Done",
      params: "query=is%3Adone",
      icon: <AiOutlineCheck />,
    },
  ]

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const query = searchParams.get("query")

  return (
    <div className="container flex items-start gap-6">
      <Card className="flex w-[18rem] flex-col space-y-1 p-2">
        {filters.map((filter, index) => {
          return (
            <Link
              key={index}
              href={"/notifications?" + filter.params}
              className={cn(
                buttonVariants({ size: "sm", variant: "ghost" }),
                "flex w-full items-center justify-start hover:bg-primary/10",
                searchParams.toString() === filter.params
                  ? "bg-accent hover:bg-accent"
                  : ""
              )}
            >
              <div className="flex items-center justify-start gap-x-2">
                {filter.icon}
                <h1>{filter.name}</h1>
              </div>
            </Link>
          )
        })}
      </Card>
      <div className="grow">
        <div>
          <Input type="filter" placeholder="filter notifications" />
        </div>
      </div>
    </div>
  )
}
