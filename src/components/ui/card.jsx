export function Card({ children, className = "" }) {
  return <div className={`rounded-xl border shadow-md bg-white ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}