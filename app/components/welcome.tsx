"use client";
import React from "react";
import { defaultClassName } from "../lib/utils";
import { useRevealComponent } from "../hooks/useRevealComponent";

export function Welcome() {
  const { ref } = useRevealComponent();
  return (
    <div className=" h-screen flex flex-col justify-center gap-2" ref={ref}>
      <div className=" text-2xl">Hello 👋🏽, I'm</div>
      <div className=" text-5xl">Atharva Upadhye</div>
      <div className=" text-2xl">I build web and mobile apps.</div>
      <div>
        I'm a software developer based in India, specializing in building
        exceptional websites and mobile applications, and everything in between.
      </div>
      <div className="flex flex-col gap-1 py-2">
        <div>You can jump to the following sections:</div>
        <div className="flex flex-row gap-2 flex-wrap">
          {[
            "Social handles",
            "Skills",
            "Projects",
            "Certificates",
            "Blogs",
            "Timeline",
          ].map((v) => (
            <a
              key={v}
              href={`#${v}`}
              className={defaultClassName.a + "text-nowrap whitespace-nowrap"}
            >
              #{v}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
