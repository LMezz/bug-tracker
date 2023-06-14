"use client"

import { Chart as ChartJS, registerables } from "chart.js"
import { Chart, Bar } from "react-chartjs-2"

import ChartWidget from "../widget"

ChartJS.register(...registerables)

interface TicketsByPriorityProps {}

export default function TicketsByPriority({}: TicketsByPriorityProps) {
  const data = {
    labels: ["None", "Low", "Medium", "High"],
    datasets: [
      {
        label: "# of Tickets",
        data: [9, 19, 5, 3],
        backgroundColor: [
          "rgba(46, 110, 140, 1)",
          "rgba(64, 133, 166, 1)",
          "rgba(83, 157, 192, 1)",
          "rgba(101, 182, 219, 1)",
        ],
        borderColor: [
          "rgba(46, 110, 140, 1)",
          "rgba(64, 133, 166, 1)",
          "rgba(83, 157, 192, 1)",
          "rgba(101, 182, 219, 1)",
        ],
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
