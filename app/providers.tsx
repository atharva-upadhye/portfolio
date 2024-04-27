import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <div>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </div>
  );
}
