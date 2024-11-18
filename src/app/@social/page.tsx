import { Section } from "@/components/section";
import { socialHandles } from "@/constants/content";
import { defaultClassName } from "@/utils/tailwind";
import React from "react";

export default function Social() {
  return (
    <Section name="Social handles">
      <div className="flex flex-row gap-2">
        {socialHandles.map((h, i) => (
          <div key={h.title} className="group flex relative">
            <a
              title={h.hoverText}
              target="_blank"
              key={i}
              className={defaultClassName.a}
              href={h.link}
            >
              {h.title}
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
