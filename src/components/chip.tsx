import { twColor } from "@/utils/tailwind";
import { ReactNode } from "react";

export function Chip({ children }: { children: ReactNode }) {
  return (
    <div
      className={` ${twColor.chip.light} ${twColor.chip.dark} rounded-xl px-4 py-1`}
    >
      {children}
    </div>
  );
}
