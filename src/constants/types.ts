export type Certificate = {
  name: string;
  url: string | null;
};
export type Project = {
  title: string;
  description: string;
  demoLink: string;
  sourceLink: string;
  techStack: string[];
};
type SkillData = string | { name: string; certificateLink: string };
export type SkillsData = {
  category: string;
  skills: SkillData[];
}[];
export type SocialHandle = {
  title: string;
  link: string;
  hoverText: string;
};
export type TimelineEvent = {
  from: Date;
  to: Date | "Ongoing";
  title: string;
  description: string | string[];
};
