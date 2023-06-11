"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AiFillCalendar, AiFillProject } from "react-icons/ai"
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi"
import { BsListTask } from "react-icons/bs"
import { FaBug, FaTh } from "react-icons/fa"
import { IoIosHelpBuoy, IoIosSettings } from "react-icons/io"

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
      path: "/settings",
      name: "Settings",
      icon: <IoIosSettings />,
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
    console.log("canOpen")
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
      <div className="flex h-16 w-full items-center bg-secondary">
        <Avatar className="fixed left-2">
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
      <div className="grow">
        {menuItems.map((item, index) => {
          return (
            <div className="flex h-12 w-full justify-start">
              {pathname === item.path ? (
                <div className="h-full w-1 bg-card-foreground"></div>
              ) : (
                <></>
              )}
              <div
                className={
                  "h-12 w-full flex items-center justify-start hover:bg-blue-500 transition-colors " +
                  (pathname === item.path ? "bg-blue-500" : "")
                }
              >
                <Link
                  href={item.path}
                  className="link flex items-center justify-start p-5"
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
