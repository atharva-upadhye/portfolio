import React from "react";
import { Section } from "./section";

interface SocialHandlesProps {
  handles: { title: string; link: string; hoverText?: string }[];
}
function SocialHandles(props: SocialHandlesProps) {
  return (
    <Section name="Social handles">
      <div className="flex flex-row gap-2">
        {props.handles.map((h, i) => (
          <div className="group flex relative">
            <a
              target="_blank"
              key={i}
              className="text-blue-500 hover:text-blue-800"
              href={h.link}
            >
              {h.title}
            </a>
            <span className="absolute text-nowrap whitespace-nowrap transition-all invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-full">
              {h.hoverText}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default SocialHandles;
