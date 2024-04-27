import React from "react";
import { Section } from "../section";
import { Chip } from "../chip";
export enum SkillCategory {
  pLang = "Programming Language",
  tool = "Tool",
  lib = "Library",
  framework = "Framework",
}

interface SkillsProps {
  skills: { name: string; categories: string[] }[];
}

function Skills(props: SkillsProps) {
  function transformSkills(skills: { name: string; categories: string[] }[]): {
    category: string;
    skills: Set<string>;
  }[] {
    let result: { category: string; skills: Set<string> }[] = [];
    skills.forEach((skill) => {
      skill.categories.forEach((category) => {
        const idx = result.findIndex((v) => v.category === category);
        if (idx < 0) {
          result.push({ category: category, skills: new Set([skill.name]) });
        } else result[idx]?.skills.add(skill.name);
      });
    });
    return result;
  }

  const g = transformSkills(props.skills);

  return (
    <Section name={"Skills"}>
      <div className="flex flex-col gap-2">
        {g.map((v) => (
          <div className=" flex gap-1 items-center">
            <div>{v.category}:</div>
            <div className=" flex gap-1">
              {Array.from(v.skills).map((v) => (
                <Chip key={v}>{v}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
