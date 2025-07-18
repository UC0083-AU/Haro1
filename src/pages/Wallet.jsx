import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Wallet() {
  return (
    <Card className="bg-white shadow-sm border rounded-md">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-700">👛 Wallet Summary</h2>
        <p>USDC Balance: <strong>320 USDC</strong></p>
        <h3 className="text-lg font-semibold mt-4">Income History</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>2025-07-01: 8.50 USDC</li>
          <li>2025-06-01: 7.90 USDC</li>
          <li>2025-05-01: 7.50 USDC</li>
        </ul>
      </CardContent>
    </Card>
  );
}