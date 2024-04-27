import React from "react";
import Certifications from "./components/sections/certifications";
import Skills, { SkillCategory } from "./components/sections/skills";
import Projects from "./components/sections/projects";
import Blogs from "./components/blogs";
import SocialHandles from "./components/social-handles";
import Timeline from "./components/sections/timeline";
import { Welcome } from "./components/welcome";

export default function page() {
  return (
    <main className="flex flex-col gap-4 max-w-2xl m-auto p-2 py-4">
      <Welcome />
      <SocialHandles
        handles={[
          {
            title: "GitHub",
            link: "https://github.com/AtharvaUpadhye",
            hoverText: "AtharvaUpadhye",
          },
          {
            title: "Twitter",
            link: "https://twitter.com/_ath_x",
            hoverText: "_ath_x",
          },
          {
            title: "LinkedIn",
            link: "https://linkedin.com/in/atharva-upadhye",
            hoverText: "atharva-upadhye",
          },
        ]}
      />
      <Skills
        skills={[
          { name: "Angular", categories: [] },
          { name: "Arduino", categories: [] },
          { name: "C", categories: [SkillCategory.pLang] },
          { name: "C++", categories: [SkillCategory.pLang] },
          { name: "CSS3", categories: [] },
          { name: "Docker", categories: [] },
          { name: "Express", categories: [] },
          { name: "ExpressJS", categories: [] },
          { name: "Figma", categories: [SkillCategory.tool] },
          { name: "Firebase", categories: [] },
          { name: "Firebase", categories: [] },
          { name: "Git", categories: [SkillCategory.tool] },
          { name: "GitHub", categories: [] },
          { name: "HTML5", categories: [] },
          { name: "Java", categories: [SkillCategory.pLang] },
          { name: "JavaScript", categories: [SkillCategory.pLang] },
          { name: "Jest", categories: [SkillCategory.framework] },
          { name: "Linux", categories: [] },
          { name: "MongoDB", categories: [] },
          { name: "NodeJS", categories: [] },
          { name: "Python", categories: [] },
          { name: "React", categories: [SkillCategory.lib] },
          { name: "Redux", categories: [] },
          { name: "Sass", categories: [] },
        ]}
      />

      <Projects
        projects={[
          {
            title: "Android app launcher",
            description:
              "A quick app launcher with feeds similar to Google Now and Xiaomi App Vault.",
            demoLink: "",
            sourceLink: "",
            techStack: "Flutter, Dart, Android",
          },
          {
            title: "Auth from scratch",
            description: "used express, react, JWT",
            demoLink: "https://react-auth-123.herokuapp.com/",
            sourceLink:
              "https://github.com/AtharvaUpadhye/auth-in-express-react",
            techStack: "ReactJS, ExpressJS, MongoDB",
          },
          {
            title: "Script to copy missing files",
            description:
              "Copies missing files of source directory to destination directory by comparing filenames. Also has custom settings to exclude files",
            techStack: "NodeJS",
            demoLink: "https://github.com/atharva-u-01/copy_missing_files",
            sourceLink: "https://github.com/atharva-u-01/copy_missing_files",
          },
        ]}
      />
      <Certifications
        certificates={
          [
            // {
            //   name: "Responsive Web Design",
            //   url: "https://www.freecodecamp.org/certification/atharva-u-01/responsive-web-design",
            // },
            // {
            //   name: "BEC Preliminary",
            //   url: "https://drive.google.com/file/d/1Bz4UFhJgNbtE0QmxzxDLMjNl3Y1qsphe/view?usp=sharing",
            // },
            // {
            //   name: "JavaScript Algorithms and DS",
            //   url: "https://www.freecodecamp.org/certification/atharva-u-01/javascript-algorithms-and-data-structures",
            // },
          ]
        }
      />

      <Blogs />

      <Timeline
        events={[
          {
            from: new Date(2016, 6, 1),
            to: new Date(2018, 3, 1),
            title: "Somalwar High School Nikalas branch, Nagpur",
            description: "Completed my SSC",
          },
          {
            from: new Date(2020, 11, 29),
            to: new Date(2021, 0, 8),
            title: "HITK-TECH Community Open Source Contribution",
            description: "",
          },
          {
            from: new Date(2018, 6, 1),
            to: new Date(2022, 3, 1),
            title: "Somalwar High School Nikalas branch, Nagpur",
            description: "Completed my SSC",
          },
          {
            from: new Date(2020, 10, 5),
            to: new Date(2021, 0, 8),
            title: "Cracked Infosys interview",
            description: "exam: hackwithinfy",
          },
        ]}
      />
    </main>
  );
}
