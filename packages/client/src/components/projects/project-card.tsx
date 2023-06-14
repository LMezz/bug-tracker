import Image from "next/image"
import Link from "next/link"

import { ProjectData } from "@/types/projects"
import { cn } from "@/lib/utils"

import { buttonVariants } from "../ui/button"
import { Card } from "../ui/card"

interface ProjectCardProps {
  data: ProjectData
}

export default function ProjectCard({ data }: ProjectCardProps) {
  const { id, name, thumbnail } = data

  return (
    <Card key={id} className="h-[50%] w-full">
      <Link
        href={"/projects/" + name}
        className={cn(
          buttonVariants({ size: "sm", variant: "ghost" }),
          "flex h-full w-full flex-col items-center justify-center p-2"
        )}
      >
        <Image
          src={thumbnail}
          alt="project thumbnail"
          className="h-full w-full"
          width="100"
          height="100"
          sizes="100%"
          style={{ width: "100%", height: "100%" }}
        />
        <h1 className="justify-left items-center border-t p-2 text-xl">
          {name}
        </h1>
      </Link>
    </Card>
  )
}
