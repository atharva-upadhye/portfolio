import React, { ReactNode } from "react";

export function Chip({ children }: { children: ReactNode }) {
  return (
    <div className=" bg-blue-200 dark:bg-blue-800 dark:text-white rounded-xl px-4 py-1">
      {children}
    </div>
  );
}
