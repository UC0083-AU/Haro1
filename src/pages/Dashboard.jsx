import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  const [propertyTokens] = useState({
    sydney: { tokens: 500, income: 35.5 },
    brisbane: { tokens: 750, income: 49.5 },
    melbourne: { tokens: 620, income: 43.8 }
  });

  return (
    <Card className="bg-white shadow-sm border rounded-md">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-700">📊 Your Property Portfolio</h2>
        {Object.entries(propertyTokens).map(([city, { tokens, income }]) => (
          <div key={city} className="border-b pb-2">
            <p className="capitalize font-medium">{city} Tokens: <strong>{tokens}</strong></p>
            <p>Monthly Income: <strong>{income.toFixed(2)} USDC</strong></p>
          </div>
        ))}
        <p>Total Estimated USDC Income (Monthly): <strong>{
          Object.values(propertyTokens).reduce((sum, p) => sum + p.income, 0).toFixed(2)
        } USDC</strong></p>
      </CardContent>
    </Card>
  );
}