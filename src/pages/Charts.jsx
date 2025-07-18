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
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Charts() {
  const chartData = {
    labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "USDC Income",
        data: [7.2, 7.5, 7.9, 8.3, 8.6, 9.1],
        borderColor: "#00A8A5",
        backgroundColor: "#00A8A540",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly USDC Income Trend" },
    },
  };

  return (
    <Card className="bg-white shadow-sm border rounded-md">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">📈 Income Chart</h2>
        <Line options={chartOptions} data={chartData} />
      </CardContent>
    </Card>
  );
}