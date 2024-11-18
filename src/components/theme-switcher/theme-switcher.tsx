"use client";
import React from "react";
import { IconCompoterDesktop, IconMoon, IconSun } from "../icons";
import { twColor, defaultClassName, cn } from "@/utils/tailwind";
// import { useTheme } from "./use-theme";
import { useTheme } from "next-themes";
export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <div
      className={cn("w-full", twColor.button.dark.active, "dark:text-white")}
    >
      <div
        className={`rounded-md p-2 m-3 flex flex-col items-center ${
          twColor.button.light.bg
        } ${twColor.button.dark.bg} gap-2 w-fit right-0 top-0 ${
          "absolute"
          // "fixed"
        }`}
      >
        <div className="-mb-2">Theme</div>
        <div className="flex gap-2">
          <button
            title="system"
            className={defaultClassName.button(
              theme ? theme === "system" : true
            )}
            onClick={() => {
              setTheme("system");
            }}
          >
            <IconCompoterDesktop />
          </button>
          <button
            title="light"
            className={defaultClassName.button(theme === "light")}
            onClick={() => setTheme("light")}
          >
            <IconSun />
          </button>
          <button
            title="dark"
            className={defaultClassName.button(theme === "dark")}
            onClick={() => setTheme("dark")}
          >
            <IconMoon />
          </button>
        </div>
      </div>
    </div>
  );
}
