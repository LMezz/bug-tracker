import { cn } from "@/lib/utils"

interface TagProps {
  bg: string
  text: string
}

const Tag = ({ bg, text }: TagProps) => {
  return (
    <p
      className={cn(
        "align-self flex-start flex items-center justify-center rounded-full text-white",
        bg
      )}
    >
      {text}
    </p>
  )
}

export default Tag
