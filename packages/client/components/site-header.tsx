import { ReactNode } from "react"
import Link from "next/link"
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import useWindowSize from "@/hooks/use-window-size"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

import { SearchBar } from "./search-bar"
import { Input } from "./ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"
import { UserMenu } from "./user-menu"

interface SiteHeaderProps {
  children?: ReactNode
  sidebarState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

export function SiteHeader({ children, sidebarState }: SiteHeaderProps) {
  var sidebarIsOpen = undefined
  if (sidebarState) [sidebarIsOpen] = sidebarState
  else sidebarIsOpen = false

  return (
    <header
      className={cn(
        "fixed top-0 z-40 transition-all",
        sidebarIsOpen
          ? "left-[16rem] w-[calc(100%-16rem)]"
          : "left-[56px] w-[calc(100%-56px)]"
      )}
    >
      <div className="container flex h-12 items-center space-x-4 bg-background sm:max-w-none sm:justify-between sm:space-x-0">
        <div className="flex items-center justify-center gap-4">
          <SearchBar />
          {children}
        </div>
        <div className="flex items-center justify-center gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className={cn(
                    buttonVariants({ size: "sm", variant: "ghost" }),
                    "h-6 w-6 p-0"
                  )}
                  href="/notifications"
                >
                  <AiOutlineBell className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>No new notifications</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="flex h-6 w-6 items-center justify-center">
            <Avatar className="h-6 w-6 rounded-full p-0">
              <AvatarImage src="https://github.com/LMezz.png" alt="@user" />
              <AvatarFallback className="bg-card-foreground text-sm text-card">
                LM
              </AvatarFallback>
            </Avatar>
            <div className="fixed top-3 items-center justify-center">
              <UserMenu />
            </div>
          </div>
        </div>

        {/* <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
          </nav>
        </div> */}
      </div>
    </header>
  )
}
