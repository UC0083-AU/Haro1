import React, { useState } from "react";
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
  const [activeTab, setActiveTab] = useState("dashboard");
  const chartData = {
    labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
      label: "USDC Income",
      data: [7.2, 7.5, 7.9, 8.3, 8.6, 9.1],
      borderColor: "#00A8A5",
      backgroundColor: "#00A8A540",
    }]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly USDC Income Trend" }
    }
  };

  const renderTab = () => {
    switch (activeTab) {
      case "dashboard":
        return <div><h2>Your Portfolio</h2><p>Total RET Tokens: <strong>1,250 RET</strong></p><p>Estimated USDC Income (Monthly): <strong>85 USDC</strong></p><p>Annual Yield: <strong>8.2%</strong></p></div>;
      case "property":
        return <div><h2>Sydney Apartment – 99 George St</h2><p>Price per Token: 50 USDC</p><p>Total Tokens: 10,000</p><p>Yield: 7.5% / year</p><p>Description: Modern 2-bedroom unit near CBD with high rental demand.</p></div>;
      case "buy":
        return <div><h2>Buy RET Tokens</h2><input placeholder="e.g. 100" /><button style={{ display: 'block', marginTop: '10px' }}>Simulate Purchase</button></div>;
      case "wallet":
        return <div><h2>Wallet Summary</h2><p>USDC Balance: <strong>320 USDC</strong></p><ul><li>2025-07-01: 8.50 USDC</li><li>2025-06-01: 7.90 USDC</li><li>2025-05-01: 7.50 USDC</li></ul></div>;
      case "charts":
        return <Line options={chartOptions} data={chartData} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: '16px', fontFamily: 'Arial' }}>
      <h1>Haro Real Estate (Demo)</h1>
      <p style={{ color: 'red', fontSize: '14px' }}>Demo Only – No Real Transactions</p>
      {!walletConnected ? (
        <button onClick={() => setWalletConnected(true)}>Connect Wallet (Simulated)</button>
      ) : (
        <p style={{ color: 'green' }}>Wallet Connected: 0x123...789</p>
      )}

      <nav style={{ margin: '20px 0' }}>
        {["dashboard", "property", "buy", "wallet", "charts"].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{ marginRight: '8px' }}>{tab}</button>
        ))}
      </nav>

      <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '8px' }}>
        {renderTab()}
      </div>
    </div>
  );
}
