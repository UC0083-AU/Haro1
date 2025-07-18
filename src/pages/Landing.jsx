import React from "react";
import { Button } from "@/components/ui/button";

export default function Landing({ onEnterDashboard }) {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 font-sans text-gray-900">
      <div className="max-w-4xl mx-auto bg-white shadow-sm border rounded-md p-8 space-y-6 text-center">
        <h1 className="text-4xl font-bold text-indigo-700">🏡 Welcome to Haro Real Estate</h1>
        <p className="text-lg text-gray-700">
          Invest in premium Australian real estate through tokenized assets. Simple. Secure. Decentralized.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mt-6">
          <div className="bg-indigo-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-indigo-800 text-lg">🏙️ Fractional Ownership</h3>
            <p className="text-sm text-gray-600 mt-2">
              Start with as little as one token and own a share in top-tier property.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-green-800 text-lg">💰 Passive Income</h3>
            <p className="text-sm text-gray-600 mt-2">
              Earn monthly rental income in stablecoins like USDC.
            </p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-yellow-800 text-lg">🔗 100% On-Chain</h3>
            <p className="text-sm text-gray-600 mt-2">
              Transparent, blockchain-secured property investments.
            </p>
          </div>
        </div>

        <Button
          className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          onClick={onEnterDashboard}
        >
          Enter Dashboard
        </Button>
      </div>
    </div>
  );
}