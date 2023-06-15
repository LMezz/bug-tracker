import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"

interface AuthGuardProps {
  children?: JSX.Element
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { currentUser, loading, setRedirect } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!loading && !currentUser && setRedirect) {
      setRedirect(pathname)
      router.push("/login")
    }
  }, [currentUser, loading, setRedirect, pathname, router])

  if (loading) return <div></div>

  console.log(currentUser)
  if (!loading && currentUser) return <>{children}</>

  return null
}
