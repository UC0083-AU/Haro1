import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="text-center space-y-6 bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-indigo-700">🏡 Welcome to Haro Real Estate</h1>
      <p className="text-gray-600">Invest in Australian property via blockchain.</p>
      <Button onClick={() => navigate("/dashboard")}>Go to Dashboard</Button>
    </div>
  );
}