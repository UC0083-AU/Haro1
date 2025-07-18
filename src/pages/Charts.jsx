import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Charts() {
  const data = {
    labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Monthly Income (USDC)",
        data: [5.2, 5.8, 6.1, 6.5, 6.9, 7.3],
        borderColor: "#4f46e5",
        backgroundColor: "rgba(99, 102, 241, 0.2)"
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Your Rental Income Over Time"
      }
    }
  };

  return (
    <Card className="bg-white shadow-md">
      <CardContent className="p-6">
        <Line data={data} options={options} />
      </CardContent>
    </Card>
  );
}