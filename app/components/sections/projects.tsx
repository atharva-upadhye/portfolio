import React from "react";
import { Section } from "../section";
import { Chip } from "../chip";
import { defaultClassName } from "../../lib/utils";
type Project = {
  title: string;
  description: string;
  demoLink: string;
  sourceLink: string;
  techStack: string;
};
interface ProjectsProps {
  projects: Project[];
}
function Projects(props: ProjectsProps) {
  return (
    <Section name="Projects">
      <div className="flex flex-col gap-2">
        {props.projects.map((p) => (
          <div className="border-solid border-[1px] p-2 rounded-xl">
            <div className=" text-lg font-semibold">{p.title}</div>
            <div>{p.description}</div>

            <div className="flex flex-row gap-2">
              <a
                href={p.sourceLink}
                target="_blank"
                className={defaultClassName.a}
              >
                View Source
              </a>
              <a
                href={p.demoLink}
                target="_blank"
                className={defaultClassName.a}
              >
                View Demo
              </a>
            </div>
            {p.techStack.length ? (
              <div className="flex flex-row gap-1">
                {p.techStack.split(",").map((skill) => (
                  <Chip key={skill}>{skill}</Chip>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
