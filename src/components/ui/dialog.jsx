import { useState } from "react";

export function Dialog({ children }) {
  return children;
}

export function DialogTrigger({ children, onClick }) {
  return <span onClick={onClick}>{children}</span>;
}

export function DialogContent({ children }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">{children}</div>
    </div>
  );
}

export function DialogHeader({ children }) {
  return <div className="mb-2">{children}</div>;
}

export function DialogTitle({ children }) {
  return <h3 className="text-lg font-semibold">{children}</h3>;
}