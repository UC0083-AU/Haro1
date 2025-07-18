import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Property() {
  const [amountSydney, setAmountSydney] = useState("");
  const [amountBrisbane, setAmountBrisbane] = useState("");
  const [amountMelbourne, setAmountMelbourne] = useState("");

  return (
    <div className="space-y-10 bg-gray-50 min-h-screen py-10 px-4 font-sans text-gray-900">
      {/* Sydney Property */}
      <Card className="bg-white shadow-sm border rounded-md">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-700">🏠 Sydney Apartment – 99 George St</h2>
          <p>Price per Token: <strong>50 USDC</strong></p>
          <p>Total Tokens: 10,000</p>
          <p>Yield: 7.5% / year</p>

          <div className="mt-4 space-y-2 bg-indigo-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-indigo-800">Buy Tokens</h3>
            <input
              type="number"
              placeholder="Enter amount"
              className="border p-2 w-full max-w-xs"
              value={amountSydney}
              onChange={(e) => setAmountSydney(e.target.value)}
            />
            <Button className="mt-2">Simulate Purchase</Button>
            {amountSydney && (
              <p className="text-green-700 mt-2">
                Simulated purchase of <strong>{amountSydney}</strong> Sydney tokens complete.
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Brisbane Property */}
      <Card className="bg-white shadow-sm border rounded-md">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-pink-700">🏢 Brisbane Apartment – Riverfront Views</h2>
          <p>Price per Token: <strong>45 USDC</strong></p>
          <p>Total Tokens: 12,000</p>
          <p>Yield: 8.1% / year</p>

          <div className="mt-4 space-y-2 bg-pink-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-pink-800">Buy Tokens</h3>
            <input
              type="number"
              placeholder="Enter amount"
              className="border p-2 w-full max-w-xs"
              value={amountBrisbane}
              onChange={(e) => setAmountBrisbane(e.target.value)}
            />
            <Button className="mt-2">Simulate Purchase</Button>
            {amountBrisbane && (
              <p className="text-green-700 mt-2">
                Simulated purchase of <strong>{amountBrisbane}</strong> Brisbane tokens complete.
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Melbourne Property */}
      <Card className="bg-white shadow-sm border rounded-md">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-purple-700">🏬 Melbourne Apartment – Central Business District</h2>
          <p>Price per Token: <strong>48 USDC</strong></p>
          <p>Total Tokens: 11,000</p>
          <p>Yield: 7.9% / year</p>

          <div className="mt-4 space-y-2 bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-purple-800">Buy Tokens</h3>
            <input
              type="number"
              placeholder="Enter amount"
              className="border p-2 w-full max-w-xs"
              value={amountMelbourne}
              onChange={(e) => setAmountMelbourne(e.target.value)}
            />
            <Button className="mt-2">Simulate Purchase</Button>
            {amountMelbourne && (
              <p className="text-green-700 mt-2">
                Simulated purchase of <strong>{amountMelbourne}</strong> Melbourne tokens complete.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}