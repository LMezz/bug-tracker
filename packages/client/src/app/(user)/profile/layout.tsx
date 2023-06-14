"use client"

import { FC, ReactNode } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProfileLayoutProps {
  children?: ReactNode
}

const Layout: FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <div className="container flex items-start gap-6">
      <div className="w-[18rem] space-y-2">
        <div className="h-16 w-full items-center justify-start">
          <Avatar className="mb-4 h-32 w-32">
            <AvatarImage src="https://github.com/LMezz.png" alt="@user" />
            <AvatarFallback>LM</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl">LMezz</h1>
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Layout
