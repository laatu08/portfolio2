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

import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoGreenApex from '/public/images/logos/logo-greenapex.svg';
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
  TWITTER: 'https://twitter.com/shahsagarm',
  FIGMA: 'https://www.figma.com/@shahsagarm',
  FIGMA_FILE:
    'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
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
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'CSS',
    logo: LogoCSS,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
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
    label: 'C/C++',
    logo: LogoC,
    url: 'https://www.figma.com/',
  },
  {
    label: 'Python',
    logo: LogoPython,
    url: 'https://www.cypress.io/',
  },
  {
    label: 'React Native',
    logo: LogoNative,
    url: 'https://storybook.js.org/',
  },
  {
    label: 'Git/Github',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'BitBucket',
    logo: LogoBucket,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoUpwork,
    logoAlt: 'Upwork logo',
    position: 'Full Stack Developer Intern at Smartifai',
    startDate: new Date(2025, 5),
    currentlyWorkHere: true,
    summary: [
      'Explore a dynamic affiliate product fetcher using third-party APIs to enhance product discovery',
      'Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, Tailwindcss, Git, Bitbucket, and others.',
    ],
  },
  {
    logo: LogoGreenApex,
    darkModeLogo: LogoGreenApexLight,
    logoAlt: 'Greenapex logo',
    position: 'Backend Development Intern at Macbell Infotech Pvt. Ltd.',
    startDate: new Date(2025, 2),
    endDate: new Date(2025, 4),
    summary: [
      'Developed and maintained scalable backend services using Node.js, Express, and PostgreSQL, focusing on performance and clean API design.',
      'Implemented RESTful APIs, modify database schema and optimized database queries to enhance application efficiency. ',
    ],
  },
  {
    logo: LogoDotnpixel,
    darkModeLogo: LogoDotnpixelLight,
    logoAlt: 'Dotnpixel logo',
    position: 'Intern at TechSaksham',
    startDate: new Date(2025, 1),
    endDate: new Date(2025, 2),
    summary: ['Built a full-stack Medical Diagnostic System integrating a custom ML model for disease prediction using patient data and health metrics. ',
      'Developed the backend with Python, enabling accurate analysis, user input processing, and real-time prediction delivery. '
    ],
  },
  {
    logo: LogoDotnpixel,
    darkModeLogo: LogoDotnpixelLight,
    logoAlt: 'Dotnpixel logo',
    position: 'Research Intern at National Institute of Technology, Agartala',
    startDate: new Date(2024,5),
    endDate: new Date(2024, 6),
    summary: ['Explored AI techniques like LLMs and RAG for advanced applications.',
      'Configured and worked with Anserini for efficient large-scale dataset retrieval.',
      'Utilized Weaviate to enhance semantic search with vector embeddings.'
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'BrightMind',
    description:
      'A platform for creating, managing, and delivering engaging digital learning content, enabling seamless course development and structured knowledge sharing in just a few clicks.',
    url: 'https://github.com/laatu08/lcms',
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
    name: 'Legal House',
    description:
      'A tool for efficiently summarizing legal case documents, transforming complex legal texts into clear, actionable insights in seconds.',
    url: 'https://github.com/laatu08/SEMICOLON',
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
    name: 'ExamEase',
    description:
      'A secure and user-friendly platform for conducting, managing, and evaluating online examinations with automated grading and instant results.',
    url: 'https://github.com/laatu08/online_exam_certification_system',
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
    previewImage: Med,
    technologies: [
      'React.js',
      'Javascript',
      'Python',
      'FastAPI',
      'Machine Learning',
    ],
  },
  {
    name: 'Socially',
    description:
      'A dynamic platform for sharing thoughts, photos, and updates, allowing users to connect, post, and engage with their community in real time.',
    url: 'https://github.com/laatu08/next.js-social-app',
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
