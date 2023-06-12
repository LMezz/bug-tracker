"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AiFillCalendar, AiFillProject } from "react-icons/ai"
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi"
import { BsListTask } from "react-icons/bs"
import { FaBug, FaTh } from "react-icons/fa"
import { IoIosHelpBuoy, IoIosSettings } from "react-icons/io"
import { RiAdminFill } from "react-icons/ri"

import { cn } from "@/lib/utils"
import useWindowSize from "@/hooks/use-window-size"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button, buttonVariants } from "./ui/button"

interface AppNavMenuProps {
  sidebarState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

export function AppNavMenu({ sidebarState }: AppNavMenuProps) {
  const menuItems = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/bug-tracker",
      name: "Bug Tracker",
      icon: <FaBug />,
    },
    {
      path: "/projects",
      name: "Projects",
      icon: <AiFillProject />,
    },
    {
      path: "/tasks",
      name: "My Tasks",
      icon: <BsListTask />,
    },
    {
      path: "/calendar",
      name: "Calendar",
      icon: <AiFillCalendar />,
    },
    {
      path: "/help-center",
      name: "Help Center",
      icon: <IoIosHelpBuoy />,
    },
    {
      path: "/administration",
      name: "Administration",
      icon: <RiAdminFill className="fill-destructive" />,
    },
  ]

  const pathname = usePathname()

  const windowSize = useWindowSize()

  const [isOpen, setIsOpen] = sidebarState
  const [canOpen, setCanOpen] = useState(true)
  const toggleIsOpen = () => setIsOpen(!isOpen)

  if (windowSize.width < 800) {
    if (isOpen) setIsOpen(false)
    if (canOpen) setCanOpen(false)
  } else {
    if (!canOpen) {
      setCanOpen(true)
      setIsOpen(true)
    }
  }

  return (
    <div
      className="sticky left-0 top-0 flex h-screen flex-col border-r-[1px] bg-primary-foreground transition-all"
      style={{ width: isOpen ? "16rem" : "56px" }}
    >
      <div className="bg-second flex h-12 w-full items-center bg-secondary">
        <Avatar className="fixed left-3 h-8 w-8">
          {/* Company Image Here */}
          <AvatarImage src="" alt="company name" />
          <AvatarFallback className="bg-card-foreground text-card">
            CN
          </AvatarFallback>
        </Avatar>
        <h1
          className="fixed left-14 font-medium text-card-foreground transition-all"
          style={{ opacity: isOpen ? 1 : 0 }}
        >
          Company Name
        </h1>
      </div>
      <div className="mt-1 grow">
        {menuItems.map((item, index) => {
          return (
            <div className="flex h-12 w-full justify-start">
              <div className="flex h-12 w-full items-center justify-center">
                <Link
                  href={item.path}
                  className={cn(
                    buttonVariants({ size: "sm", variant: "ghost" }),
                    "link flex h-[calc(100%-8px)] w-[calc(100%-16px)] items-center justify-start p-5 pl-[13px]",
                    pathname === item.path ? "bg-accent" : "hover:bg-primary/10"
                  )}
                >
                  <div>{item.icon}</div>
                  <div
                    className="fixed left-[50px] transition-all"
                    style={{
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    {item.name}
                  </div>
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex items-center justify-end border-t-[1px] p-2">
        <Button
          variant="ghost"
          className="p-3 transition-all"
          onClick={toggleIsOpen}
          disabled={!canOpen}
        >
          {isOpen ? (
            <BiArrowToLeft className="h-5 w-5" />
          ) : (
            <BiArrowToRight className="h-5 w-5" />
          )}
        </Button>
      </div>
    </div>
  )
}
