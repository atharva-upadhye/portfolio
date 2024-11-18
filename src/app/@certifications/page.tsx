import React from "react";
import { Section } from "@/components/section";
import { certificates } from "@/constants/content";
import { defaultClassName } from "@/utils/tailwind";

export default function page() {
  return (
    <Section name="Certificates">
      <ul className="flex flex-col gap-3">
        {certificates.map((c) => (
          <li key={c.name}>
            <a
              className={`${defaultClassName.a} ${
                c.url ? "" : "pointer-events-none"
              }`}
              target="_blank"
              href={c.url || ""}
            >
              {c.name}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
