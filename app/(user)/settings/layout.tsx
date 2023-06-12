"use client"

import { FC, ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AiOutlineBell, AiOutlineMail, AiOutlineSetting } from "react-icons/ai"
import { BiPaint } from "react-icons/bi"
import { BsPerson, BsShieldCheck, BsShieldFillCheck } from "react-icons/bs"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"

interface SettingsLayoutProps {
  children?: ReactNode
}

const Layout: FC<SettingsLayoutProps> = ({ children }) => {
  const sections = [
    {
      name: "General",
      pages: [
        {
          name: "Profile",
          path: "/settings/profile",
          icon: <BsPerson />,
        },
        {
          name: "Account",
          path: "/settings/account",
          icon: <AiOutlineSetting />,
        },
        {
          name: "Appearance",
          path: "/settings/appearance",
          icon: <BiPaint />,
        },
        {
          name: "Notifications",
          path: "/settings/notifications",
          icon: <AiOutlineBell />,
        },
      ],
    },
    {
      name: "Access",
      pages: [
        {
          name: "Emails",
          path: "/settings/emails",
          icon: <AiOutlineMail />,
        },
        {
          name: "Password and authentication",
          path: "/settings/security",
          icon: <BsShieldCheck />,
        },
      ],
    },
  ]

  const pathname = usePathname()

  return (
    <div className="container flex items-start gap-6">
      <div className="w-[18rem] space-y-2">
        <div className="flex h-16 w-full items-center justify-start space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://github.com/LMezz.png" alt="@user" />
            <AvatarFallback>LM</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl">LMez</h1>
            <p className="text-sm">Your personal account</p>
          </div>
        </div>
        <div>
          {sections.map((section, sectionIndex) => {
            return (
              <div>
                {sectionIndex == 0 ? (
                  <></>
                ) : (
                  <Separator className="mb-8 mt-2" />
                )}
                {section.name ? (
                  <h1 className="mb-2">{section.name}</h1>
                ) : (
                  <></>
                )}
                <div className="flex flex-col gap-y-1">
                  {section.pages.map((page, pageIndex) => {
                    return (
                      <Link
                        className={cn(
                          buttonVariants({
                            size: "sm",
                            variant: "ghost",
                          }),
                          "flex w-full items-center justify-start hover:bg-primary/10",
                          pathname === page.path
                            ? "bg-accent hover:bg-accent"
                            : ""
                        )}
                        href={page.path}
                      >
                        <div className="justify-left ph-2 flex items-center gap-x-2">
                          {page.icon}
                          <h1>{page.name}</h1>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="mt-8 h-full w-[calc(100%-18rem)]">{children}</div>
    </div>
  )
}

export default Layout
