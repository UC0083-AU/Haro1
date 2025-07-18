import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <Card className="bg-white shadow-md">
      <CardContent className="space-y-4 p-6">
        <h2 className="text-xl font-semibold text-indigo-700">📊 Dashboard</h2>
        <p>You own 500 tokens in Sydney. Monthly yield: 35.5 USDC</p>
        <p>You own 750 tokens in Brisbane. Monthly yield: 49.5 USDC</p>
      </CardContent>
    </Card>
  );
}