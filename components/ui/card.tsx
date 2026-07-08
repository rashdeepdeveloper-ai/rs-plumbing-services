import { HTMLAttributes } from "react";

export function Card({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-lg border border-navy-100 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}
      {...props}
    />
  );
}
