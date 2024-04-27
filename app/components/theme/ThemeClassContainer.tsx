import React, { ReactNode } from "react";
import { useThemeContext } from "./themeContext";

function ThemeClassContainer({ children }: { children: ReactNode }) {
  const { theme } = useThemeContext();
  return <div className={`${theme === "dark" ? "dark" : ""}`}> {children}</div>;
}

export default ThemeClassContainer;
