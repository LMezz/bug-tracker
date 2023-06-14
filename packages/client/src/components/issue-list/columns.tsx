"use client"

import { ColumnDef } from "@tanstack/react-table"

import Tag from "@/components/tag"

import { DataTableColumnHeader } from "../data-table-column-header"

export type IssueStatus =
  | "none"
  | "open"
  | "in-progress"
  | "resolved"
  | "more-info-needed"

export type IssuePriority = "none" | "low" | "medium" | "high"

export type Issue = {
  id: string
  bug: string
  reporter: string
  created: string
  status: IssueStatus
  assignee: string
  priority: IssuePriority
}

function statusComponent(status: IssueStatus) {
  switch (status) {
    case "none":
      return <Tag bg="bg-primary" text="None" />
    case "open":
      return <Tag bg="bg-yellow-400" text="Open" />
    case "in-progress":
      return <Tag bg="bg-red-500" text="In Progress" />
    case "resolved":
      return <Tag bg="bg-lime-500" text="Resolved" />
    case "more-info-needed":
      return <Tag bg="bg-orange-900" text="More Info Needed" />
  }
}

function priorityComponent(priority: IssuePriority) {
  switch (priority) {
    case "none":
      return <Tag bg="bg-primary/10" text="None" />
    case "low":
      return <Tag bg="bg-yellow-400" text="Low" />
    case "medium":
      return <Tag bg="bg-orange-400" text="Medium" />
    case "high":
      return <Tag bg="bg-red-600" text="High" />
  }
}

export const columns: ColumnDef<Issue>[] = [
  {
    accessorKey: "bug",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title={"Bug"} />
    },
    cell: ({ row }) => {
      return <div className="text-left font-medium">{row.getValue("bug")}</div>
    },
  },
  {
    accessorKey: "reporter",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title={"Reporter"} />
    },
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">{row.getValue("reporter")}</div>
      )
    },
  },
  {
    accessorKey: "created",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title={"Created"} />
    },
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">{row.getValue("created")}</div>
      )
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title={"Status"} />
    },
    cell: ({ row }) => {
      return statusComponent(row.getValue("status"))
    },
  },
  {
    accessorKey: "assignee",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title={"Assignee"} />
    },
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">{row.getValue("assignee")}</div>
      )
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title={"Priority"} />
    },
    cell: ({ row }) => {
      return priorityComponent(row.getValue("priority"))
    },
  },
]
