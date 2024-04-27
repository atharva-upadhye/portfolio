import React from "react";
import About from "./components/sections/about";
import Certifications from "./components/sections/certifications";
import Skills, { SkillCategory } from "./components/skills";
import Projects from "./components/projects";
import Blogs from "./components/blogs";
import SocialHandles from "./components/social-handles";
import Timeline from "./components/timeline";

export default function page() {
  return (
    <main>
      Hello 👋🏽 <br />
      I am Atharva Upadhye, <br />
      a Software Developer from India
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
            description: "created using flutter",
            demoLink: "",
            sourceLink: "",
          },
          {
            title: "Auth from scratch",
            description: "used express, react, JWT",
            demoLink: "",
            sourceLink:
              "https://github.com/AtharvaUpadhye/auth-in-express-react",
          },
        ]}
      />
      <Blogs />
      <SocialHandles
        handles={[
          {
            title: "github",
            link: "https://github.com/AtharvaUpadhye",
            hoverText: "AtharvaUpadhye",
          },
          {
            title: "twitter",
            link: "https://twitter.com/_ath_x",
            hoverText: "_ath_x",
          },
          {
            title: "linkedIn",
            link: "https://linkedin.com/in/atharva-upadhye",
            hoverText: "atharva-upadhye",
          },
        ]}
      />
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
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Certifications /> */}
    </main>
  );
}
