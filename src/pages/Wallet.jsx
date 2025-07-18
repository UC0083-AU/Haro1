import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Wallet() {
  return (
    <Card className="bg-white shadow-md">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">👛 Wallet Overview</h2>
        <p>USDC Balance: <strong>320</strong></p>
        <h3 className="mt-4 font-semibold text-gray-700">Transaction History</h3>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
          <li>2025-07-01: +8.50 USDC rental income</li>
          <li>2025-06-21: -100 USDC token purchase</li>
          <li>2025-06-01: +7.90 USDC rental income</li>
          <li>2025-05-01: +7.50 USDC rental income</li>
        </ul>
      </CardContent>
    </Card>
  );
}