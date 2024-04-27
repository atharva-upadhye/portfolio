import React from "react";
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
    <div className="my-4">
      <a className=" text-2xl" href="#skills">
        Skills
      </a>
      <div className="flex flex-col gap-2 ml-2">
        {g.map((v) => (
          <div className=" flex gap-1 items-center">
            <div>{v.category}:</div>
            <div className=" flex gap-1">
              {Array.from(v.skills).map((v) => (
                <div className=" bg-blue-200 dark:bg-blue-800 dark:text-white rounded-xl px-4 py-1">
                  {v}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
