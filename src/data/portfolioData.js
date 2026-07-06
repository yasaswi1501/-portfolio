import collegeLogo from "../assets/college-logo.png";
import interLogo from "../assets/inter-logo.png";

export const education = [
  {
    degree: "B.Tech in Computer Science",
    college: "GITAM University",
    duration: "2024 - 2028",
    cgpa: "8.23 CGPA",
    logo: collegeLogo,
  },
  {
    degree: "Intermediate",
    college: "Ascent Junior College",
    duration: "2022 - 2024",
    cgpa: "94.3%",
    logo: interLogo,
  },
];


export const certificates = [
  {
    title: "Gemini for University Students",
    issuer: "Google",
    date: "Issued May 2026",
    image: null,
    link: "https://edu.google.accredible.com/790319e9-9d8c-4285-9f82-cd2cded4036c#acc.OBESvDVs",
  },
  {
    title: "Academy Accreditation - Generative AI Fundamentals",
    issuer: "Databricks",
    date: "Issued May 2026",
    image: null,
    link: "https://credentials.databricks.com/d10b3320-aa9f-449f-8ea7-a2df2a3d74b3#acc.3DgHcEKJ",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "Issued May 2026",
    image: null,
    link: "https://drive.google.com/file/d/1owBYEGaDe7jptoV6tsSX-REGp_ddKWGj/view?usp=sharing",
  },
  {
    title: "YUVA AI For All",
    issuer: "TCS iON",
    date: "Issued May 2026",
    image: null,
    link: "https://drive.google.com/file/d/1S50OAbvaHwrQZOqPguDnIQpUGSkULcy6/view?usp=sharing",
  },
  {
    title: "Google Skills",
    issuer: "Google",
    date: "Issued May 2026",
    image: null,
    link: "https://www.skills.google/profile/badges",
  },
];

export const projects = [
  {
    title: "Porsche Interactive Experience",
    description:
      "A cinematic, interactive Porsche showcase website that allows users to explore multiple models, inspect vehicle features through interactive hotspots, compare cars, view performance specifications, and experience immersive model-specific interior cockpit sequences with racing-game-inspired transitions.",
    tech: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Three.js",
      "React Three Fiber",
      "Drei",
      "GSAP",
      "Framer Motion",
      "WebGL",
      "Responsive Web Design",
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built to showcase my education, projects, skills, certificates, and resume.",
    tech: ["React", "Vite", "JavaScript", "CSS"],
    github: "#",
    live: "#",
  },
];

export const skills = {
  Languages: ["Java", "Python", "JavaScript"],
  "Core CS": ["Data Structures", "Algorithms", "OOP", "DBMS"],
  "Web Development": ["React", "Node.js", "Express.js", "MongoDB"],
  "AI/ML": ["Machine Learning", "Generative AI"],
  Tools: ["Git", "GitHub", "VS Code"],
};