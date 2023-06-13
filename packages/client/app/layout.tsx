import { FC, ReactNode } from "react"

interface RootLayoutProps {
  children?: ReactNode
}

const Layout: FC<RootLayoutProps> = ({ children }) => {
  return <>{children}</>
}

export default Layout
