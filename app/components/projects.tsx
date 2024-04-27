import React from "react";
type Project = {
  title: string;
  description: string;
  demoLink: string;
  sourceLink: string;
};
interface ProjectsProps {
  projects: Project[];
}
function Projects(props: ProjectsProps) {
  return (
    <div>
      Projects
      <br />
      <div className="flex flex-row gap-2 ml-2">
        {props.projects.map((p) => (
          <div className="border-solid border-2 p-2 rounded-xl">
            <div>{p.title}</div>
            <div>{p.description}</div>
            <div>{p.demoLink}</div>
            <a
              href={p.sourceLink}
              target="_blank"
              className=" text-blue-500 hover:text-blue-800"
            >
              View Source
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
