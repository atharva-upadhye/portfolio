import {
	Certificate,
	Project,
	SkillsData,
	SocialHandle,
	TimelineEvent,
} from "./types";
const certificates: Certificate[] = [
	{
		name: "Responsive Web Design",
		url: "https://www.freecodecamp.org/certification/atharva-u-01/responsive-web-design",
	},
	// TODO
	// {
	//   name: "BEC Preliminary",
	//   url: null,
	// },
	{
		name: "JavaScript Algorithms and Data structures",
		url: "https://www.freecodecamp.org/certification/atharva-u-01/javascript-algorithms-and-data-structures",
	},
];
const projects: Project[] = [
	// TODO
	{
		title: "Android app launcher",
		description:
			"A quick app launcher with feeds similar to Google Now and Xiaomi App Vault.",
		demoLink: "",
		sourceLink: "",
		techStack: ["Flutter", "Dart", "Android"],
	},
	// TODO
	{
		title: "Auth from scratch",
		description: "used express, react, JWT",
		demoLink: "",
		sourceLink: "",
		techStack: ["ReactJS", "ExpressJS", "MongoDB"],
	},
	// TODO
	// {
	//   title: "Script to copy missing files",
	//   description:
	//     "Copies missing files of source directory to destination directory by comparing filenames. Also has custom settings to exclude files",
	//   techStack: ["NodeJS"],
	//   demoLink: null,
	//   sourceLink: null,
	// },
];
const skillsData: SkillsData = [
	{
		category: "Languages",
		skills: [
			{
				name: "JavaScript",
				certificateLink:
					"https://www.freecodecamp.org/certification/atharva-u-01/javascript-algorithms-and-data-structures",
			},
			"TypeScript",
			"C++",
			"Java",
			"Python",
			"HTML",
			"CSS",
		],
	},
	{ category: "Database", skills: ["PostgresDB", "MongoDB"] },
	{ category: "DevOps", skills: ["GitHub Actions", "Docker", "Kubernetes"] },
	{ category: "Tools", skills: ["VSCode", "Git", "Figma", "Linux"] },
	{ category: "Testing", skills: ["Jest", "React Testing Library"] },
	{
		category: "Libraries",
		skills: [
			"React",
			"Material UI",
			"Tanstack React Query",
			"Firebase",
			"Redux",
			"Sass",
			"Express",
		],
	},
	{ category: "Frameworks", skills: ["Next", "Angular"] },
	{ category: "Cloud Solutions", skills: ["Firebase"] },
	{
		category: "Other",
		skills: [
			{
				name: "Responsive Web Design",
				certificateLink:
					"https://www.freecodecamp.org/certification/atharva-u-01/responsive-web-design",
			},
			"Arduino",
			"Node",
			"SaSS",
			"GitHub",
		],
	},
];

// {
//   soft: ["collaborative", "assertive"],
//   technical: {
//     Languages: [
//       {
//         name: "JavaScript",
//         certificateLink:
//           "https://www.freecodecamp.org/certification/atharva-u-01/javascript-algorithms-and-data-structures",
//       },
//       "TypeScript",
//       "C++",
//       "Java",
//       "Python",
//       "HTML",
//       "CSS",
//     ],
//
//   },
// };
const socialHandles: SocialHandle[] = [
	{
		title: "GitHub",
		link: "https://github.com/atharva-upadhye",
		hoverText: "atharva-upadhye",
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
];
const timelineEvents: TimelineEvent[] = [
	{
		from: new Date(2016, 6, 1),
		to: new Date(2018, 3, 1),
		title: "Somalwar High School Nikalas branch, Nagpur",
		description: "Completed my HSC",
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
		title: "G. H. Raisoni College of Engineering, Nagpur",
		description: "Bachelors in Computer Science Engineering",
	},
	{
		from: new Date(2020, 10, 5),
		to: new Date(2021, 0, 8),
		title: "Got placed at Infosys",
		description:
			"Cracked hackwithinfy exam which focuses on DSA and problem solving skills",
	},
	{
		from: new Date(2022, 6, 21),
		to: "Ongoing",
		title: "Infosys",
		description: [
			"SDE 1 | Power Programmer | Full Stack Developer",
			"Worked on large scale app with micro-frontend micro-services with event driven achitecture deployed using CI/CD, automation test and logs",
		],
	},
	{
		from: new Date(2021, 5),
		to: new Date(2022, 2),
		title: "Nche Advocacy Foundation",
		description: [
			"Full stack developer (Internship)",
			"Developed an attendance and worklog management tool for the NGO",
		],
	},
];
const whatIDo = "I build web and mobile apps";
const whoAmI =
	"I'm a software developer based in India, specializing in building exceptional websites and mobile applications, and everything in between";
export {
	certificates,
	projects,
	skillsData,
	socialHandles,
	timelineEvents,
	whatIDo,
	whoAmI,
};
