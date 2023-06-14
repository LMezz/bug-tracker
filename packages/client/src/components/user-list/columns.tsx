"use client"

import Link from "next/link"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import UserRole from "@/types/roles"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { DataTableColumnHeader } from "../data-table-column-header"
import { Button } from "../ui/button"

export type UserData = {
  id: string
  username: string
  email: string
  role: UserRole
}

function roleComponent(role: UserRole) {
  switch (role) {
    case "user":
      return <p>User</p>
    case "tester":
      return <p>Tester</p>
    case "developer":
      return <p>Developer</p>
    case "project-manager":
      return <p>Project Manager</p>
    case "administrator":
      return <p>Administrator</p>
  }
}

export const columns: ColumnDef<UserData>[] = [
  {
    accessorKey: "username",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title={"Username"} />
    },
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">{row.getValue("username")}</div>
      )
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title={"Email"} />
    },
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">{row.getValue("email")}</div>
      )
    },
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title={"Role"} />
    },
    cell: ({ row }) => {
      return roleComponent(row.getValue("role"))
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const email: string = row.getValue("email")
      const username: string = row.getValue("username")

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(email)}
            >
              Copy Email
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link href={"/" + username}>
              <DropdownMenuItem>View profile</DropdownMenuItem>
            </Link>
            <DropdownMenuItem>Manage</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
