import { Github, Twitter, Figma, Linkedin, Mail } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoSocket from "/public/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoHTML from "../../public/images/logos/icons8-html-5.svg";
import LogoCSS from "../../public/images/logos/icons8-css3.svg";
import LogoC from "../../public/images/logos/icons8-c++.svg";
import LogoPython from "../../public/images/logos/icons8-python.svg";
import LogoNative from "../../public/images/logos/icons8-react-native.svg";

import LogoGo from "../../public/images/logos/go-svgrepo-com.svg";

import LogoUpwork from "/public/images/logos/image1.png";
import LogoGreenApex from "/public/images/logos/image2.png";
import LogoGreenApexLight from "/public/images/logos/image2.png";
import LogoDotnpixel from "/public/images/logos/image.png";
import LogoDotnpixelLight from "/public/images/logos/image.png";



import AvatarKrisztian from "/public/images/avatar-krisztian.png";
import AvatarEugen from "/public/images/avatar-eugen.png";

import BrightMind from "../../public/images/project/ems.png";
import Legal from "../../public/images/project/vault.png";
import Socially from "../../public/images/project/image.png";
import Shopper from "../../public/images/project/dts.png";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/laatu08",
  LINKEDIN: "https://www.linkedin.com/in/partha-borah-293005270/",
  GITHUB_REPO: "https://github.com/laatu08",
  TWITTER: "https://www.linkedin.com/in/partha-borah-293005270/",
  FIGMA: "https://www.linkedin.com/in/partha-borah-293005270/",
  FIGMA_FILE: "https://www.linkedin.com/in/partha-borah-293005270/",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skill",
    href: "#skill",
  },
  {
    label: "Experience",
    href: "#work",
  },
  {
    label: "Project",
    href: "#project",
  },
  {
    label: "Achievement",
    href: "#achievement",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/laatu08",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/partha-borah-293005270/",
  },
  {
    icon: Mail,
    url: "mailto:partha2002borah@gmail.com",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "HTML",
    logo: LogoHTML,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    label: "CSS",
    logo: LogoCSS,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "Socket.io",
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: "https://socket.io/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "C++",
    logo: LogoC,
    url: "https://cplusplus.com/doc/tutorial/",
  },
  {
    label: "Python",
    logo: LogoPython,
    url: "https://docs.python.org/3/",
  },
  {
    label: "React Native",
    logo: LogoNative,
    darkModeLogo: LogoReact,
    url: "https://reactnative.dev/docs/getting-started",
  },
  {
    label: "Go",
    logo: LogoGo,
    url: "https://go.dev/doc/",
  },
  {
    label: "Git/Github",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoUpwork,
    logoAlt: "Smartifai logo",
    position: "Full Stack Developer Intern at Smartifai",
    startDate: new Date(2025, 5),
    endDate: new Date(2025, 9),
    summary: [
      "Designed and implemented microservice-oriented backend systems to integrate Rakuten and Shopify affiliate APIs, improving product ingestion throughput by ~30% through optimized data models and batch processing.",
      "Led initial system design efforts for extending a Twitch-based platform, defining service boundaries and OAuth-based authentication flows while integrating additional platforms like YouTube and Kick, achieving 99% API reliability.",
      "Worked in a production environment using Git and Bitbucket, following version control best practices and contributing to iterative feature development and debugging.",
    ],
  },
  {
    logo: LogoGreenApex,
    darkModeLogo: LogoGreenApexLight,
    logoAlt: "Macbell logo",
    position: "Backend Developer Intern at Macbell Infotech Pvt. Ltd.",
    startDate: new Date(2025, 2),
    endDate: new Date(2025, 4),
    summary: [
      "Developed and maintained backend APIs using Node.js, Express, and PostgreSQL, focusing on clean service structure, readability, and long-term maintainability.",
      "Designed API logic with a strong emphasis on data consistency, error handling, and modular code organization.",
      "Collaborated with team members to debug production issues, improve endpoint reliability, and support feature enhancements.",
      "Gained hands-on experience working in a real-world backend development workflow, including schema design, API testing, and deployment-oriented thinking.",
    ],
  },
  {
    logo: LogoDotnpixel,
    darkModeLogo: LogoDotnpixelLight,
    logoAlt: "NIT logo",
    position: "Research Intern at National Institute of Technology, Agartala",
    startDate: new Date(2024, 5),
    endDate: new Date(2024, 6),
    summary: [
      "Conducted hands-on research on AI-driven information retrieval systems, exploring Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) for scalable, real-world applications.",
      "Configured and evaluated Anserini for high-performance document retrieval across datasets exceeding 1M+ documents, achieving a ~40% reduction in query response time.",
      "Experimented with retrieval strategies and indexing techniques to balance latency, accuracy, and scalability in large-scale search systems.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Event Monitoring System",
    description:
      "A production-grade observability platform that centralizes logs, detects errors in real time, manages incidents intelligently, and provides actionable insights across distributed systems.",
    url: "https://github.com/laatu08/Event-Monitoring-System",
    url2: "https://project-manager-lovat-iota.vercel.app/projects/695d268633058032b75dc96f",
    previewImage: BrightMind,
    technologies: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Elasticsearch",
      "Redis",
      "BullMQ",
      "Zod",
      "React",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Recharts",
      "Axios",
      "Docker",
      "Docker Compose",
    ],
  },
  {
    name: "Distributed Task Scheduler",
    description:
      "A fault-tolerant, distributed task scheduler written in Go that provides at-most-once task execution guarantees through leader election, epoch-based fencing, and automatic failure recovery.",
    url: "https://github.com/laatu08/Distributed-Task-Scheduler",
    // url2: 'https://e-commerce-1-10wy.onrender.com/',
    previewImage: Shopper,
    technologies: ["Go", "SQL"],
  },
  {
    name: "VaultGuard",
    description:
      "A comprehensive secure data sharing platform that enables users to safely share their financial data with trusted fintech applications through advanced tokenization, granular consent management, policy-based access control, and real-time anomaly detection.",
    url: "https://github.com/laatu08/cyberhack",
    url2: "https://project-manager-lovat-iota.vercel.app/projects/69342ee78bf32d0048445d65",
    previewImage: Legal,
    technologies: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Docker",
      "React",
      "Tailwind CSS",
      "JWT",
      "Open Policy Agent (OPA)",
      "Elasticsearch",
      "Kibana",
      "Nodemailer",
      "Microservices Architecture",
    ],
  },
  {
    name: "Personal Full-Stack Portfolio Management Platform",
    description:
      "A full-stack project portfolio management system with a public gallery showcase and admin dashboard. Built for developers to showcase their work with rich media support, advanced search capabilities, and a modern UI.",
    url: "https://github.com/laatu08/project-manager",
    url2: "https://project-manager-lovat-iota.vercel.app/",
    previewImage: Socially,
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Multer",
      "Cloudinary",
      "React",
      "TailwindCSS",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: AvatarKrisztian,
    title: "Founder - inboxgenie.io",
    testimonial:
      "Secured 1st place in Code Clash 2.0, a coding competition organized by Jorhat Engineering College. ",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: AvatarEugen,
    title: "Founder - shosho.design",
    testimonial:
      "Secured Top 5 in Fiercest Competitor 4.0, a Cyber & Risk Hackathon organized by PwC AC India.",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: AvatarEugen,
    title: "Founder - shosho.design",
    testimonial:
      "Secured 1st Place in Rishikesh Borpujari Coding Competition organized by Jorhat Engineering College.",
  },
];
