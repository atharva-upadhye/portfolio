"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import IconCompoterDesktop from "./icons/icon-computer-desktop";
import IconSun from "./icons/icon-sun";
import IconMoon from "./icons/icon-moon";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const buttonClasses = (isSelected: boolean) =>
    `flex items-center justify-center rounded-lg px-4 py-1.5 text-black hover:bg-[rgba(0,0,0,0.3)] dark:text-white  dark:hover:bg-[rgba(255,255,255,0.3)] ${
      isSelected ? " bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)] " : ""
    }`;
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [mounted]);
  if (!mounted) return;
  return (
    <>
      <div
        className={
          "m-2 rounded-md p-2 flex flex-row bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(0,0,0,0.3)] gap-2 w-fit"
        }
      >
        <button
          className={buttonClasses(theme ? theme === "system" : true)}
          onClick={() => {
            setTheme("system");
          }}
          suppressHydrationWarning
        >
          <IconCompoterDesktop />
        </button>
        <button
          className={buttonClasses(theme === "light")}
          onClick={() => setTheme("light")}
          suppressHydrationWarning
        >
          <IconSun />
        </button>
        <button
          className={buttonClasses(theme === "dark")}
          onClick={() => setTheme("dark")}
          suppressHydrationWarning
        >
          <IconMoon />
        </button>
        {/* <ComputerDesktopIcon /> */}
      </div>
      {/* <select
        value={theme}
        onChange={(e) => {
          setTheme(e.target.value);
        }}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select> */}
    </>
  );
}
