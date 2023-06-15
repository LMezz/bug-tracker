"use client"

import Link from "next/link"
import { Github, LogOut, User } from "lucide-react"
import {
  AiFillCalendar,
  AiOutlineBell,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai"
import { FaTh } from "react-icons/fa"
import { IoIosHelpBuoy } from "react-icons/io"

import appPages from "@/config/app-pages"
import settingsPages from "@/config/settings-pages"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  // CommandShortcut,
} from "@/components/ui/command"

import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"

export function SearchBar() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline" asChild>
          <div className="flex w-32 justify-between sm:w-60 xl:w-80">
            Search
            <AiOutlineSearch className="ml-2 h-4 w-4" />
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="border-none p-0">
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <Link href="/dashboard">
                <DialogTrigger className="w-full">
                  <CommandItem>
                    <FaTh className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </CommandItem>
                </DialogTrigger>
              </Link>
              <Link href="/calendar">
                <DialogTrigger className="w-full">
                  <CommandItem>
                    <AiFillCalendar className="mr-2 h-4 w-4" />
                    <span>Calendar</span>
                  </CommandItem>
                </DialogTrigger>
              </Link>
              <Link href="/help-center">
                <DialogTrigger className="w-full">
                  <CommandItem>
                    <IoIosHelpBuoy className="mr-2 h-4 w-4" />
                    <span>Help Center</span>
                  </CommandItem>
                </DialogTrigger>
              </Link>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="App">
              {appPages.map((page, index) => {
                return (
                  <Link key={index} href={page.path}>
                    <DialogTrigger className="w-full">
                      <CommandItem>
                        <div className="mr-2 h-4 w-4">{page.icon}</div>
                        <span>{page.name}</span>
                        {/* <CommandShortcut></CommandShortcut> */}
                      </CommandItem>
                    </DialogTrigger>
                  </Link>
                )
              })}
            </CommandGroup>
            <CommandGroup heading="Account">
              <Link href="/profile">
                <DialogTrigger className="w-full">
                  <CommandItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </CommandItem>
                </DialogTrigger>
              </Link>
              <Link href="/notifications">
                <DialogTrigger className="w-full">
                  <CommandItem>
                    <AiOutlineBell className="mr-2 h-4 w-4" />
                    <span>Notifications</span>
                  </CommandItem>
                </DialogTrigger>
              </Link>
              <Link href="/settings">
                <DialogTrigger className="w-full">
                  <CommandItem>
                    <AiOutlineSetting className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </CommandItem>
                </DialogTrigger>
              </Link>
              <Link href="https://github.com/LMezz/bug-tracker">
                <DialogTrigger className="w-full">
                  <CommandItem>
                    <Github className="mr-2 h-4 w-4" />
                    <span>GitHub</span>
                  </CommandItem>
                </DialogTrigger>
              </Link>
              <DialogTrigger className="w-full">
                <CommandItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </CommandItem>
              </DialogTrigger>
            </CommandGroup>
            <CommandGroup heading="Settings">
              {settingsPages.map((section) => {
                return section.pages.map((page, index) => {
                  return (
                    <Link key={index} href={page.path}>
                      <DialogTrigger className="w-full">
                        <CommandItem>
                          <div className="mr-2 h-4 w-4">{page.icon}</div>
                          <span>{page.name} Settings</span>
                          {/* <CommandShortcut></CommandShortcut> */}
                        </CommandItem>
                      </DialogTrigger>
                    </Link>
                  )
                })
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
