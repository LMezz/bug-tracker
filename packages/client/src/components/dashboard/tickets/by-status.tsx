"use client"

import { Chart as ChartJS, registerables } from "chart.js"
import { Bar } from "react-chartjs-2"

import ChartWidget from "../widget"

ChartJS.register(...registerables)

export default function TicketsByStatus() {
  const data = {
    labels: ["None", "Open", "In Progress", "Resolved", "More Info Needed"],
    datasets: [
      {
        label: "# of Tickets",
        data: [5, 8, 12, 6, 5],
        backgroundColor: [
          "rgba(46, 110, 140, 1)",
          "rgba(60, 127, 159, 1)",
          "rgba(73, 145, 179, 1)",
          "rgba(87, 163, 199, 1)",
          "rgba(101, 182, 219, 1)",
        ],
        borderColor: [
          "rgba(46, 110, 140, 1)",
          "rgba(60, 127, 159, 1)",
          "rgba(73, 145, 179, 1)",
          "rgba(87, 163, 199, 1)",
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
              text: "Tickets by Status",
            },
          },
        }}
      />
    </ChartWidget>
  )
}
