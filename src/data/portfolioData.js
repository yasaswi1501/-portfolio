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

export const internships = [
  {
    company: "DecodeLabs",
    role: "Full Stack Development Intern",
    type: "Virtual Internship",
    duration: "May 20, 2026 – June 20, 2026",
    location: "Remote",
    description:
      "Completed a virtual Full Stack Development internship focused on hands-on problem solving, collaborative software development, and building real-world web applications using modern development practices.",
    tech: [
      "Full Stack Development",
      "JavaScript",
      "Web Development",
      "Problem Solving",
    ],
    certificate:
      "https://drive.google.com/file/d/1K4QtiW4k03O3_LUIKv7_OLtoV7mWA7NR/view?usp=sharing",
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
  title: "Generative AI Mastermind",
  issuer: "Outskill",
  date: "Issued 2026",
  image: null,
  link: "https://drive.google.com/file/d/1jhEGcRAYdYIN4eJww4RXFjNO-3At95c2/view?usp=sharing",
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
    category: "AI / Machine Learning",
    items: [
      {
        title: "Attrix - Enterprise Workforce Intelligence Platform",
        description:
          "A production-ready enterprise workforce intelligence platform that transforms employee data into interactive executive dashboards and evidence-based organizational insights. Attrix supports analysis across departments, job roles, demographics, tenure, workload, mobility, and organizational risk hotspots using dynamic filtering, advanced visualizations, and real-time analytical summaries.",
        tech: [
          "Python",
          "Streamlit",
          "Pandas",
          "NumPy",
          "Plotly",
          "SciPy",
          "Statsmodels",
          "Pytest",
          "Data Visualization",
          "Statistical Analysis",
          "Interactive Dashboards",
          "Responsive UI",
          "Component-Based Architecture",
        ],
        github: "https://github.com/yasaswi1501/Attrix",
        live: "https://attrix.streamlit.app/",
      },
    ],
  },
  {
    category: "Web Development",
    items: [
      {
        title: "Portfolio Website",
        description:
          "A modern, responsive portfolio website showcasing my education, internships, projects, technical skills, certifications, and resume through a clean, professional, and interactive user experience.",
        tech: [
          "React.js",
          "JavaScript",
          "Vite",
          "HTML5",
          "CSS3",
          "Responsive Web Design",
          "Data-Driven Components",
          "Git",
          "GitHub",
          "Vercel",
        ],
        github: "https://github.com/yasaswi1501/-portfolio",
        live: "https://portfolio-beta-sandy-60.vercel.app/",
      },
    ],
  },
  {
    category: "Interactive Experiences",
    items: [
      {
        title: "NEUN11",
        description:
          "A cinematic, interactive automotive experience featuring multi-model exploration, vehicle-specific hotspots, performance comparisons, immersive cockpit sequences, engineering storytelling, sound experiences, and scroll-driven visual interactions.",
        tech: [
          "React.js",
          "JavaScript",
          "Vite",
          "Framer Motion",
          "Interactive UI",
          "Scroll Animations",
          "Responsive Web Design",
          "Data-Driven Components",
          "React Three Fiber",
          "Drei",
          "GSAP",
        ],
        github: "https://github.com/yasaswi1501/NEUN11",
        live: "https://neun-11.vercel.app",
      },
    ],
  },
];

export const skills = {
  Languages: ["Java", "Python", "JavaScript"],
  "Core CS": ["Data Structures", "Algorithms", "OOP", "DBMS"],
  "Web Development": ["React", "Node.js", "Express.js", "MongoDB"],
  "AI/ML": [
    "Machine Learning",
    "Generative AI",
    "Pandas",
    "NumPy",
    "Plotly",
    "Streamlit",
  ],
  Tools: ["Git", "GitHub", "VS Code", "Vite", "Vercel"],
};