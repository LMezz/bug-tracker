"use client"

import { Chart as ChartJS, registerables } from "chart.js"
import { useTheme } from "next-themes"
import { Doughnut } from "react-chartjs-2"

import { RGBAColour, rgbaGradient } from "@/lib/utils"

import ChartWidget from "../widget"

ChartJS.register(...registerables)

export default function TicketsByType() {
  const theme = useTheme()
  const backgroundColor: string[] = RGBAColour.stringsFrom(
    rgbaGradient(
      new RGBAColour(101, 182, 219, 1),
      new RGBAColour(46, 110, 140, 1),
      2 // Number of assignees being displayed
    )
  )

  const data = {
    labels: ["Bug", "Feature Request"],
    datasets: [
      {
        label: "Tickets by Type",
        data: [32, 4],
        backgroundColor,
        borderColor: [
          theme.theme === "dark" ? "rgb(0, 0, 0, 1)" : "rgb(255, 255, 255, 1)",
        ],
        hoverOffset: 4,
      },
    ],
  }

  return (
    <ChartWidget>
      <Doughnut
        data={data}
        options={{
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "Tickets by Type",
            },
          },
        }}
      />
    </ChartWidget>
  )
}
