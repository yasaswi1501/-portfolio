import collegeLogo from "../assets/college-logo.png";
import interLogo from "../assets/inter-logo.png";

import attrixOverview from "../assets/projects/attrix-overview.png";
import neun11Overview from "../assets/projects/neun11-overview.png";
import portfolioOverview from "../assets/projects/portfolio-overview.png";

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

export const hackathons = [
  {
    title: "GDG on Campus GITAM Wonder of Wonders — WOWFest 2026",
    organizer: "Google Developer Groups on Campus GITAM",
    role: "Backend Developer & ML Integration Engineer",
    duration: "4 Jul 2026 – 5 Jul 2026",
    project: "MetroMind | AI & Machine Learning-Powered Smart City Digital Twin",
    projectId: "metromind-project",
    description:
      "Collaborated in a 3-member engineering team to design and build MetroMind, an AI & Machine Learning-powered Smart City Digital Twin during GDG WOWFest 2026. Contributed to backend engineering, REST API development, Python ML integration, and MongoDB schema design.",
    highlights: [
      "3-Member Engineering Team",
      "AI/ML-Powered Smart City Digital Twin",
      "REST API Development",
      "Python ML Service Integration",
      "MongoDB Schema Design",
      "Backend Integration",
      "API Testing",
      "Technical Presentation",
      "Hackathon Delivery",
      "Deployment Support",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Python",
      "Flask",
      "Machine Learning",
      "MongoDB",
      "REST APIs",
      "Vercel",
    ],
    certificate:
      "https://drive.google.com/file/d/1PLBMcXIHV2hHArsiGdEZz3xfNRp0hBgX/view?usp=sharing",
  },
  {
    title: "Smart India Hackathon",
    organizer: "GITAM University",
    role: "Application Developer",
    duration: "2025",
    project: "StudyFlow.ai | Smart AI Scheduler",
    description:
      "Collaborated in a 4-member engineering team to design and develop Smart AI Scheduler for the Smart India Hackathon. Contributed to software architecture, implementation, testing, and solution presentation within strict hackathon timelines.",
    highlights: [
      "4-Member Engineering Team",
      "Software Architecture",
      "Application Development",
      "Testing",
      "Team Collaboration",
      "Problem Solving",
      "Technical Presentation",
      "Smart India Hackathon",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
    certificate:
      "https://drive.google.com/file/d/1iSTpgMvp6WTd2jHC1fwHRPcpz-B9tOvu/view?usp=sharing",
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
        id: "metromind-project",
        title: "MetroMind | AI & Machine Learning-Powered Smart City Digital Twin",
        subtitle: "Team Project — 3 Members",
        image: null,
        imageAlt:
          "MetroMind Smart City Digital Twin dashboard displaying urban analytics and operational intelligence",
        description:
          "Collaborated in a 3-member engineering team to develop an AI & Machine Learning-powered Smart City Digital Twin that centralizes transportation, environmental, weather, water, energy, and public safety intelligence into a unified operational platform.\n\nDesigned and developed scalable REST APIs using Node.js and Express.js, enabling seamless communication between the frontend, Machine Learning services, and database.\n\nIntegrated Python-based Machine Learning services to process urban datasets, perform anomaly detection, identify operational patterns, and generate predictive insights for intelligent city management.\n\nDesigned and implemented MongoDB database schemas to efficiently manage multi-domain smart-city data, ensuring scalability, data integrity, and efficient querying.\n\nBuilt interactive dashboards with real-time visualizations, KPIs, and geographic analytics, transforming complex infrastructure data into actionable intelligence.\n\nContributed to a modular architecture that supports the seamless integration of new smart-city services and Machine Learning capabilities without impacting existing modules.\n\nParticipated in end-to-end development, including backend integration, API testing, deployment, and production release on Vercel.",
        myContributions: [
          "Designed and developed REST APIs using Node.js and Express.js",
          "Integrated Python-based Machine Learning services",
          "Designed MongoDB database schemas",
          "Contributed to backend engineering",
          "Supported frontend and backend integration",
          "Participated in API testing",
          "Participated in deployment and production release",
        ],
        highlights: [
          "3-Member Engineering Team",
          "REST API Development",
          "Python ML Integration",
          "MongoDB Schema Design",
          "Backend Engineering",
          "API Testing",
          "Interactive Dashboards",
          "Real-Time Analytics",
          "Geospatial Analytics",
          "Production Deployment",
        ],
        tech: [
          "React.js",
          "Node.js",
          "Express.js",
          "Python",
          "Flask",
          "Machine Learning",
          "MongoDB",
          "REST APIs",
          "Vercel",
        ],
        github: null,
        live: null,
        featured: true,
      },
      {
        title: "Attrix — Enterprise Workforce Intelligence Platform",
        image: null,
        imageAlt:
          "MetroMind AI & Machine Learning-Powered Smart City Digital Twin",
        description:
          "Collaborated in a 3-member engineering team to develop an AI & Machine Learning-powered Smart City Digital Twin that centralizes transportation, environmental, weather, water, energy, and public safety intelligence into a unified operational platform.",
        highlights: [
          "Designed and developed scalable REST APIs using Node.js and Express.js, enabling seamless communication between the frontend, machine learning services, and database.",
          "Integrated Python-based Machine Learning services to process urban datasets, perform anomaly detection, identify operational patterns, and generate predictive insights for intelligent city management.",
          "Designed and implemented MongoDB database schemas to efficiently manage multi-domain smart-city data, ensuring scalability, data integrity, and efficient querying.",
          "Built interactive dashboards with real-time visualizations, KPIs, and geographic analytics, transforming complex infrastructure data into actionable intelligence.",
          "Contributed to a modular architecture that supports seamless integration of additional smart-city services and machine learning capabilities without affecting existing modules.",
          "Participated in backend integration, API testing, deployment, and production release on Vercel.",
        ],
        contributions: [
          "REST API Development using Node.js and Express.js",
          "Python Machine Learning Integration",
          "MongoDB Schema Design",
          "Backend Engineering",
          "Interactive Dashboard Development",
          "Backend Integration",
          "API Testing",
          "Deployment",
        ],
        tech: [
          "React.js",
          "Node.js",
          "Express.js",
          "Python",
          "Flask",
          "Machine Learning",
          "MongoDB",
          "REST APIs",
          "Vercel",
        ],
        github: null,
        live: null,
        featured: true,
      },
      {
        title: "Attrix — Enterprise Workforce Intelligence Platform",
        image: attrixOverview,
        imageAlt:
          "Attrix enterprise workforce intelligence executive dashboard",
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
        featured: true,
      },
    ],
  },
  {
    category: "Web Development",
    items: [
      {
        title: "Portfolio Website",
        image: portfolioOverview,
        imageAlt: "Yasaswi Vadrevu personal portfolio website",
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
        image: neun11Overview,
        imageAlt: "NEUN11 interactive automotive experience",
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