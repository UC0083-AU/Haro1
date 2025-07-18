import React, { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

export default function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const location = useLocation();
  const tabs = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Property", path: "/property" },
    { name: "Buy", path: "/buy" },
    { name: "Wallet", path: "/wallet" },
    { name: "Charts", path: "/charts" }
  ];

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
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fed7aa 0%, #fdb74a 50%, #fd922a 100%)"
      }}
      className="text-gray-800 font-sans"
    >
      <header className="text-center py-6 bg-white shadow-md rounded-b-lg mb-4">
        <h1 className="text-4xl font-extrabold text-orange-700 mb-2">Haro Real Estate</h1>
        <p className="text-sm text-orange-500 italic">Demo Only – No Real Transactions</p>
        {!walletConnected ? (
          <Button
            onClick={() => setWalletConnected(true)}
            className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded"
          >
            Connect Wallet (Simulated)
          </Button>
        ) : (
          <p className="text-green-700 mt-4">Wallet Connected: 0x123...789</p>
        )}
      </header>

      <nav className="flex justify-center gap-2 py-4 bg-orange-50 flex-wrap">
        {tabs.map((tab) => (
          <Link key={tab.path} to={tab.path}>
            <button
              className={`px-4 py-2 rounded ${
                location.pathname === tab.path
                  ? "bg-orange-600 text-white"
                  : "bg-white border border-orange-300 hover:bg-orange-100"
              }`}
            >
              {tab.name}
            </button>
          </Link>
        ))}
      </nav>

      <main className="max-w-5xl mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}
