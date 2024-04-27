import React from "react";

export default function Projects() {
  const projects: {
    name: string;
    desc: string;
    techStack: string;
    liveLink: string;
    source: string;
  }[] = [
    {
      name: "Authentication Project",
      desc: "To learn how authentication works.",
      techStack: "ReactJS, ExpressJS, MongoDB",
      liveLink: "https://react-auth-123.herokuapp.com/",
      source: "https://github.com/atharva-u-01/auth-in-express-react",
    },
    {
      name: "Launcher App",
      desc: "A quick app launcher with feeds similar to Google Now and Xiaomi App Vault.",
      techStack: "Flutter, ExressJS",
      liveLink:
        "https://drive.google.com/drive/folders/1BeKIp-pKRziNFuP4qhXsm3K27sR-Jy5g?usp=sharing",
      source: "https://github.com/atharva-u-01/app_launcher",
    },
    {
      name: "Script to copy missing files",
      desc: "Copies missing files of source directory to destination directory by comparing filenames. Also has custom settings to exclude files",
      techStack: "NodeJS",
      liveLink: "https://github.com/atharva-u-01/copy_missing_files",
      source: "https://github.com/atharva-u-01/copy_missing_files",
    },
  ];
  return (
    <section
      className="p-8 bg-slate-200 dark:bg-slate-800 projects"
      id="projects"
    >
      <h2>
        These are some of the projects I have made while learning different
        technologies
      </h2>
      <div className=" grid">
        <ul className=" list-none flex flex-wrap gap-2">
          {projects.map((project, i) => (
            <li key={i} className="p-4 border-[1px]">
              <h3 className="mb-4">{project.name}</h3>
              <p>{project.desc}</p>
              <p>
                Tech Stack: <span className="badge">{project.techStack}</span>
              </p>
              <button className=" border-none rounded-lg cursor-pointer text-blue-500 p-2">
                <a
                  href={project.liveLink}
                  className="link"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  View Project
                </a>
              </button>
              <button className="border-none rounded-lg cursor-pointer bg-blue-800 text-white p-2">
                <a
                  href={project.source}
                  className="link"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  View Source
                </a>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
