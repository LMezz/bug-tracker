import { ReactNode } from "react"

import { Card } from "../ui/card"

interface ChartWidgetProps {
  children?: ReactNode
}

export default function ChartWidget({ children }: ChartWidgetProps) {
  return (
    <Card
      className="flex w-full flex-col"
      style={{ width: "100%", height: 300 }}
    >
      <div className="p-2" style={{ width: "100%", height: "100%" }}>
        {children}
      </div>
    </Card>
  )
}
