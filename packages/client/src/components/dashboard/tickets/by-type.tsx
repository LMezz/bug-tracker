"use client"

import { Chart as ChartJS, registerables } from "chart.js"
import { useTheme } from "next-themes"
import { Doughnut } from "react-chartjs-2"

import ChartWidget from "../widget"

ChartJS.register(...registerables)

export default function TicketsByType() {
  const theme = useTheme()
  console.log(theme.theme)

  const data = {
    labels: ["Bug", "Feature Request"],
    datasets: [
      {
        label: "Tickets by Type",
        data: [32, 4],
        backgroundColor: ["rgb(46, 110, 140)", "rgb(101, 182, 219)"],
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
