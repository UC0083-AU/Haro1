import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  const tabs = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Property", path: "/property" },
    { name: "Buy", path: "/buy" },
    { name: "Wallet", path: "/wallet" },
    { name: "Charts", path: "/charts" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="text-center py-6 bg-white shadow-md">
        <h1 className="text-4xl font-bold text-indigo-700">Haro Real Estate</h1>
        <p className="italic text-gray-500">Demo Only – No Real Transactions</p>
      </header>

      <nav className="flex justify-center gap-2 py-4 bg-gray-100 flex-wrap">
        {tabs.map(tab => (
          <Link key={tab.path} to={tab.path}>
            <button className={`px-4 py-2 rounded ${location.pathname === tab.path ? "bg-indigo-600 text-white" : "bg-white border border-gray-300 hover:bg-indigo-50"}`}>
              {tab.name}
            </button>
          </Link>
        ))}
      </nav>

      <main className="max-w-5xl mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}