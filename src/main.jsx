import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Property from "./pages/Property";
import Buy from "./pages/Buy";
import Wallet from "./pages/Wallet";
import Charts from "./pages/Charts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="property" element={<Property />} />
          <Route path="buy" element={<Buy />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="charts" element={<Charts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
