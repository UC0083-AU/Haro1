import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Buy() {
  const [purchaseAmount, setPurchaseAmount] = useState("");

  return (
    <Card className="bg-white shadow-sm border rounded-md">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-700">🛒 Buy RET Tokens</h2>
        <input
          type="number"
          className="border p-2 w-full max-w-xs"
          placeholder="Enter token amount"
          value={purchaseAmount}
          onChange={(e) => setPurchaseAmount(e.target.value)}
        />
        <Button className="mt-2">Simulate Purchase</Button>
        {purchaseAmount && (
          <p className="text-green-700 mt-2">
            Simulated purchase of <strong>{purchaseAmount}</strong> RET tokens complete.
          </p>
        )}
      </CardContent>
    </Card>
  );
}