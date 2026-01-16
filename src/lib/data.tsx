import { Github, Twitter, Figma, Linkedin,Mail } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoNest from '/public/images/logos/icon-nest.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoCypress from '/public/images/logos/icon-cypress.svg';
import LogoCypressLight from '/public/images/logos/icon-cypress-light.svg';
import LogoStorybook from '/public/images/logos/icon-storybook.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoHTML from '../../public/images/logos/icons8-html-5.svg'
import LogoCSS from '../../public/images/logos/icons8-css3.svg'
import LogoC from '../../public/images/logos/icons8-c++.svg'
import LogoPython from '../../public/images/logos/icons8-python.svg'
import LogoNative from '../../public/images/logos/icons8-react-native.svg'
import LogoGithub from '../../public/images/logos/icons8-github-logo.svg'
import LogoBucket from '../../public/images/logos/icons8-bitbucket-logo.svg'
import LogoGo from "../../public/images/logos/go-svgrepo-com.svg"

import LogoUpwork from '/public/images/logos/image1.png';
import LogoGreenApex from '/public/images/logos/image2.png';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';

import ProjectFiskil from '/public/images/project-fiskil.png';
import ProjectWingie from '/public/images/project-wingie.png';
import ProjectPepehousing from '/public/images/project-pepehousing.png';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import BrightMind from '../../public/images/project/lcms.png'
import Exam from '../../public/images/project/exam.png'
import Legal from '../../public/images/project/legalhouse.png'
import Med from '../../public/images/project/m1.png'
import Socially from '../../public/images/project/socially.png'
import Shopper from "../../public/images/project/shopper.png"

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/laatu08',
  LINKEDIN:'https://www.linkedin.com/in/partha-borah-293005270/',
  GITHUB_REPO: 'https://github.com/laatu08',
  TWITTER: 'https://www.linkedin.com/in/partha-borah-293005270/',
  FIGMA: 'https://www.linkedin.com/in/partha-borah-293005270/',
  FIGMA_FILE:
    'https://www.linkedin.com/in/partha-borah-293005270/',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skill',
    href: '#skill',
  },
  {
    label: 'Experience',
    href: '#work',
  },
  {
    label: 'Project',
    href: '#project',
  },
  {
    label: 'Achievement',
    href: '#achievement',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/laatu08',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/partha-borah-293005270/',
  },
  {
    icon: Mail,
    url: 'mailto:partha2002borah@gmail.com',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'HTML',
    logo: LogoHTML,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    label: 'CSS',
    logo: LogoCSS,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'Socket.io',
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: 'https://socket.io/',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'C++',
    logo: LogoC,
    url: 'https://cplusplus.com/doc/tutorial/',
  },
  {
    label: 'Python',
    logo: LogoPython,
    url: 'https://docs.python.org/3/',
  },
  {
    label: 'React Native',
    logo: LogoNative,
    darkModeLogo: LogoReact,
    url: 'https://reactnative.dev/docs/getting-started',
  },
  {
    label: 'Go',
    logo: LogoGo  ,
    url: 'https://go.dev/doc/',
  },
  {
    label: 'Git/Github',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoUpwork,
    logoAlt: 'Smartifai logo',
    position: 'Full Stack Developer Intern at Smartifai',
    startDate: new Date(2025, 5),
    endDate: new Date(2025, 9),
    summary: [
      'Designed and implemented microservice-oriented backend systems to integrate Rakuten and Shopify affiliate APIs, improving product ingestion throughput by ~30% through optimized data models and batch processing.',
      'Led initial system design efforts for extending a Twitch-based platform, defining service boundaries and OAuth-based authentication flows while integrating additional platforms like YouTube and Kick, achieving 99% API reliability.',
      'Worked in a production environment using Git and Bitbucket, following version control best practices and contributing to iterative feature development and debugging.'
    ],
  },
  {
    logo: LogoGreenApex,
    darkModeLogo: LogoGreenApexLight,
    logoAlt: 'Macbell logo',
    position: 'Backend Developer Intern at Macbell Infotech Pvt. Ltd.',
    startDate: new Date(2025, 2),
    endDate: new Date(2025, 4),
    summary: [
      'Developed and maintained backend APIs using Node.js, Express, and PostgreSQL, focusing on clean service structure, readability, and long-term maintainability.',
      'Designed API logic with a strong emphasis on data consistency, error handling, and modular code organization.',
      'Collaborated with team members to debug production issues, improve endpoint reliability, and support feature enhancements.',
      'Gained hands-on experience working in a real-world backend development workflow, including schema design, API testing, and deployment-oriented thinking.'
    ],
  },
  {
    logo: LogoDotnpixel,
    darkModeLogo: LogoDotnpixelLight,
    logoAlt: 'NIT logo',
    position: 'Research Intern at National Institute of Technology, Agartala',
    startDate: new Date(2024,5),
    endDate: new Date(2024, 6),
    summary: ['Conducted hands-on research on AI-driven information retrieval systems, exploring Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) for scalable, real-world applications.',
      'Configured and evaluated Anserini for high-performance document retrieval across datasets exceeding 1M+ documents, achieving a ~40% reduction in query response time.',
      'Experimented with retrieval strategies and indexing techniques to balance latency, accuracy, and scalability in large-scale search systems.'
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'BrightMind',
    description:
      'A platform for creating, managing, and delivering engaging digital learning content, enabling seamless course development and structured knowledge sharing in just a few clicks.',
    url: 'https://github.com/laatu08/lcms',
    url2: 'https://lcms-1.onrender.com/',
    previewImage: BrightMind,
    technologies: [
      'React.js',
      'Javascript',
      'TailwindCSS',
      'ShadCN UI',
      'Node.js',
      'Express.js',
      'MongoDB',
      'RTK Query',
      'Cloudinary',
    ],
  },
  {
    name: 'Shopper',
    description:
      'A platform for Fashion marketplace along with admin dashboard',
    url: 'https://github.com/laatu08/E-commerce',
    url2: 'https://e-commerce-1-10wy.onrender.com/',
    previewImage: Shopper,
    technologies: [
      'React.js',
      'Javascript',
      'CSS3',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Multer',
    ],
  },
  {
    name: 'Legal House',
    description:
      'A tool for efficiently summarizing legal case documents, transforming complex legal texts into clear, actionable insights in seconds.',
    url: 'https://github.com/laatu08/SEMICOLON',
    url2: 'https://semicolon-1.onrender.com/',
    previewImage: Legal,
    technologies: [
      'React.js',
      'Javascript',
      'Tailwindcss',
      'Material UI',
      'ShadCN UI',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Multer',
    ],
  },
  {
    name: 'Conviya',
    description:
      'A dynamic platform for sharing thoughts, photos, and updates, allowing users to connect, post, and engage with their community in real time.',
    url: 'https://github.com/laatu08/next.js-social-app',
    url2: 'https://next-js-social-app-lime.vercel.app/',
    previewImage: Socially,
    technologies: [
      'Next.js',
      'Typescript',
      'PostgreSQL',
      'Prisma ORM',
      'Clerk',
      'ShadCN UI',
      'TailwindCSS'
    ],
  },
  {
    name: 'ExamEase',
    description:
      'A secure and user-friendly platform for conducting, managing, and evaluating online examinations with automated grading and instant results.',
    url: 'https://github.com/laatu08/online_exam_certification_system',
    url2: 'https://github.com/laatu08/online_exam_certification_system',
    previewImage: Exam,
    technologies: [
      'React.js',
      'Node.js',
      'Javascript',
      'CSS3',
      'Express.js',
      'PostgreSQL',
      'PDF-kit',
    ],
  },
  {
    name: 'PMDA',
    description:
      'A smart platform for analyzing patient data and symptoms to assist in accurate and timely medical diagnoses, supporting better clinical decision-making.',
    url: 'https://github.com/laatu08/medical_diagnostic_system',
    url2: 'https://github.com/laatu08/medical_diagnostic_system',
    previewImage: Med,
    technologies: [
      'React.js',
      'Javascript',
      'Python',
      'FastAPI',
      'Machine Learning',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Krisztian Gyuris',
    personAvatar: AvatarKrisztian,
    title: 'Founder - inboxgenie.io',
    testimonial:
      'Secured 1st place in Code Clash 2.0, a coding competition organized by Jorhat Engineering College. ',
  },
  {
    personName: 'Eugen Esanu',
    personAvatar: AvatarEugen,
    title: 'Founder - shosho.design',
    testimonial:
      'Selected for the PwC Launchpad Program, a competitive upskilling initiative for emerging tech talent.',
  },

];
