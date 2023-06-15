"use client"

import { Chart as ChartJS, registerables } from "chart.js"
import { Bar } from "react-chartjs-2"

import { RGBAColour, rgbaGradient } from "@/lib/utils"

import ChartWidget from "../widget"

ChartJS.register(...registerables)

export default function TicketsByPriority() {
  const backgroundColor: string[] = RGBAColour.stringsFrom(
    rgbaGradient(
      new RGBAColour(46, 110, 140, 1),
      new RGBAColour(101, 182, 219, 1),
      4 // Number of assignees being displayed
    )
  )

  const data = {
    labels: ["None", "Low", "Medium", "High"],
    datasets: [
      {
        label: "# of Tickets",
        data: [9, 19, 5, 3],
        backgroundColor,
        borderColor: backgroundColor,
        borderWidth: 1,
      },
    ],
  }

  return (
    <ChartWidget>
      <Bar
        data={data}
        options={{
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "Tickets by Priority",
            },
          },
        }}
      />
    </ChartWidget>
  )
}
