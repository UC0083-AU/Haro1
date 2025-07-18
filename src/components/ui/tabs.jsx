import React, { useState } from "react";

export function Tabs({ defaultValue, children, className = "" }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { value, setValue })
      )}
    </div>
  );
}

export function TabsList({ children, className = "" }) {
  return <div className={`flex gap-2 mb-2 ${className}`}>{children}</div>;
}

export function TabsTrigger({ value: tabValue, children, value, setValue, className = "" }) {
  const isActive = tabValue === value;
  return (
    <button
      onClick={() => setValue(tabValue)}
      className={`px-4 py-2 rounded ${isActive ? "bg-blue-600 text-white" : "bg-gray-200"} ${className}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value: tabValue, children, value }) {
  return tabValue === value ? <div>{children}</div> : null;
}