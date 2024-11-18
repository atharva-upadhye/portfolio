import { Chip } from "@/components/chip";
import { Section } from "@/components/section";
import { projects } from "@/constants/content";
import { defaultClassName } from "@/utils/tailwind";
import React from "react";

export default function ProjectsPage() {
  return projects.length ? (
    <Section name="Projects">
      <div className="gap-2 grid grid-cols-1 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="border-solid border-[1px] border-gray-500 p-2 rounded-xl flex flex-col"
          >
            <div className="text-lg font-semibold">{p.title}</div>
            <div className="flex-grow">{p.description}</div>

            <div className="flex flex-row gap-2">
              <a
                title="source code"
                href={p.sourceLink}
                target="_blank"
                className={defaultClassName.a}
              >
                View Source
              </a>
              <a
                title="demo link"
                href={p.demoLink}
                target="_blank"
                className={defaultClassName.a}
              >
                View Demo
              </a>
            </div>
            {p.techStack.length ? (
              <div className="flex flex-row gap-1 flex-wrap">
                {p.techStack.map((skill) => (
                  <Chip key={skill}>{skill}</Chip>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  ) : null;
}
