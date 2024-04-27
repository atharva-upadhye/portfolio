"use client";
import React, { useEffect, useState } from "react";
import { ThemeSwitcher } from "./theme-switcher/theme-switcher";
import useShowOnScrollTop from "../hooks/useShowOnScrollTop";
import { IconHome } from "./icons/icon-home";

export default function Navbar() {
  const { show } = useShowOnScrollTop();
  return (
    <>
      {
        <div
          className={`flex p-2 gap-2 flex-row h-[64px] rounded-md bg-slate-200 dark:bg-slate-900 fixed top-0 ${
            show ? "" : "translate-y-[-64px]"
          } transition-all`}
        >
          <a href="#" className="p-2 m-1">
            <IconHome />
          </a>
          <ThemeSwitcher />
        </div>
      }
    </>
  );
}
