import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Buy() {
  return (
    <Card className="bg-white shadow-md">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-xl font-semibold text-indigo-700">💸 Buy Tokens</h2>
        <input
          type="number"
          placeholder="Enter token amount"
          className="border p-2 w-full max-w-xs"
        />
        <Button>Simulate Purchase</Button>
      </CardContent>
    </Card>
  );
}