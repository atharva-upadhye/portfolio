"use client";
import { useShowScrollToTop } from "@/hooks/use-show-scroll-to-top";
import React from "react";
import { IconArrowUpCircle } from "./icons";
import { twColor, defaultClassName } from "@/utils/tailwind";

export default function ScrollToTop() {
  const { show } = useShowScrollToTop();
  return (
    <div
      className={`flex flex-row fixed bottom-0 right-0 ${
        show ? "" : "translate-y-full"
      } transition-all`}
    >
      <div
        className={`${twColor.button.light.bg} ${twColor.button.dark.bg} m-3 p-2 rounded-md`}
      >
        <a
          href="#"
          title="scroll to top"
          className={`rounded-md p-2 ${defaultClassName.button()} `}
        >
          <IconArrowUpCircle />
        </a>
      </div>
    </div>
  );
}
