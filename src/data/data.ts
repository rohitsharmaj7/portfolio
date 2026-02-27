import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const personalData = {
  name: "Rohit Sharma",
  initials: "RS",
  url: "https://www.rohitsharmaj7.vercel/",
  location: "Chandigarh, India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Full Stack Software Engineer at SearchUnify. I build web applications with a focus on performance and scalability.",
  summary:
    "I'm a Software Engineer with **5 years of experience**, currently working in the Engineering team at SearchUnify. I specialise in building scalable systems, and solving platform-wide productivity and performance challenges across products like Searchnify - used by **60+ clients**. I hold a **Bachelor's degree in Computer Science** from Lovely Professional University. I enjoy exploring new tech in my free time.",
  avatarUrl: "/me.png",
} as const;

export const skillsData = [
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "SQL", icon: "ph:file-sql" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MySQL", icon: "logos:mysql-icon" },
      { name: "REST APIs", icon: "lucide:cloud-cog" },
      { name: "GraphQL", icon: "logos:graphql" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Redux", icon: "logos:redux" },
      { name: "HTML5", icon: "logos:html-5" },
      { name: "CSS3", icon: "logos:css-3" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Webpack", icon: "logos:webpack" },
      { name: "Single Page Applications", icon: "material-symbols:web" },
      { name: "Responsive Design", icon: "material-symbols:responsive-layout" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "AWS", icon: "logos:aws" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Kubernetes", icon: "logos:kubernetes" },
      { name: "Jenkins", icon: "logos:jenkins" },
      { name: "GitHub Actions", icon: "logos:github-actions" },
      { name: "CI/CD", icon: "material-symbols:sync" },
    ],
  },
  {
    category: "Practices",
    skills: [
      { name: "Database design", icon: "material-symbols:database" },
      { name: "Agile", icon: "lucide:repeat" },
      { name: "Scrum", icon: "material-symbols:group" },
      {
        name: "OOP",
        icon: "material-symbols:code",
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "Sentry", icon: "logos:sentry-icon" },
      { name: "New Relic", icon: "logos:new-relic-icon" },
      { name: "Grafana", icon: "logos:grafana" },
      {
        name: "Sumo Logic",
        icon: "material-symbols:analytics",
      },
    ],
  },
] as const;

export const navbarData = [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "https://dev.to/rohitsharmaj7", icon: NotebookIcon, label: "Blog" },
] as const;

export const contactData = {
  email: "hello@example.com",
  tel: "+123456789",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/rohitsharmaj7",
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rohitsharmaj7/",
      icon: Icons.linkedin,
      navbar: true,
    },
    Email: {
      name: "Email",
      url: "/#contact",
      icon: Icons.email,
      navbar: true,
    },
  },
} as const;

export const experiencesData = [
  {
    company: "SearchUnify",
    href: "https://searchunify.com",
    location: "Panchkula, India",
    title: "Senior Software Engineer",
    logoUrl: "/su.png",
    start: "Feb 2023",
    end: "Present",
    description: [
      "Contributed to the development and evolution of an enterprise search SaaS platform used by 50+ enterprise customers, focusing on frontend architecture, performance, and maintainability",
      "Re-architected a core internal “Designer Tab” module, reducing client search-page customization time by 50% and significantly improving usability for Professional Services teams.",
      "Led end-to-end delivery for 1–2 high-impact features per quarter, coordinating API contracts, rollout strategy, and backward compatibility with backend teams.",
      "Designed and implemented a config-driven UI framework, enabling backend-controlled layouts and behavior, which reduced frontend change turnaround from 3–5 days to under 1 working day.",
      "Mentored interns and junior engineers through architecture reviews, PR feedback, and debugging sessions, improving code quality and reducing sprint rework.",
      "Setup ESLint and Prettier in CI/CD pipelines to enforce coding standards and consistent code quality across teams.",
    ],
  },
  {
    company: "eClerx",
    href: "https://eclerx.com",
    location: "Chandigarh, India",
    title: "Software Engineer",
    logoUrl: "/eclerx.png",
    start: "Aug 2019",
    end: "Jan 2023",
    description: [
      "Led frontend development of a component-based email builder enabling users to export production-ready HTML templates reducing campaign creation time by 70% by introducing modular components and standardized layout patterns.",
      "Collaborated with backend engineers and designers to deliver scalable, maintainable frontend solutions while adhering to business and performance requirements.",
      "Designed and developed reusable React components adopted across multiple production projects, cutting development effort by 50% and ensuring consistent UI standards.",
      "Took ownership of feature delivery, bug resolution, and incremental refactoring in a multi-project production environment.",
      "Developed React components for the design system to reuse across different applications.",
    ],
  },
] as const;

export const educationData = [
  {
    school: "Lovely Professional University, India",
    href: "https://www.lpu.in",
    degree: "Bachelor of Information Technology (Computer Science)",
    logoUrl: "/lpu.png",
    start: "Feb 2016",
    end: "Aug 2020",
    description: [
      "GPA 8.8/10",
      "Major in Computer Science",
      "Minor in Full Stack Web Development",
    ],
  },
] as const;

export const awardsData = [
  {
    title: "Monthly Recognition",
    issuer: "SearchUnify",
    href: "",
    logoUrl: "/award.png",
    date: "Nov 2023",
    description: [
      "Recognized for outstanding contributions to the SearchUnify Product during the month of November.",
    ],
  },
  {
    title: "Star Performer",
    issuer: "SearchUnify",
    href: "",
    logoUrl: "/star.png",
    date: "October 2025",
    description: [
      "Awarded for key contributions to the Agentic Suite(A GenAI Product by SearchUnify) and SearchUnify",
    ],
  },
  {
    title: "Trainer of the Month - AI Powered Productivity Tools",
    issuer: "SearchUnify",
    href: "",
    logoUrl: "/training.png",
    date: "April 2025",
    description: [
      "Awarded for leading trainer award for delivering an engaging training on AI powered productivity tools.",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "ChronoAge",
    href: "https://rohitsharmaj7-chronoage.vercel.app/",
    dates: "2022",
    active: true,
    description:
      "A clean and accurate age calculator that computes age down to days, built with modern React practices.",
    detailedDescription: `A React-based age calculation app that computes exact age in years, months, and days using optimized date logic and a clean, responsive UI.`,
    keyFeatures: [
      "Exact Age Calculation: Calculates age in years, months, and days",
      "Leap Year Support: Handles leap years and all edge cases correctly",
      "Input Validation: Real-time validation with helpful error messages",
      "Smooth Animations: Framer Motion animations with spring physics",
      "Mobile-First Design: Responsive layout with glassmorphism styling",
    ],
    technologies: [
      { name: "React", icon: "logos:react" },
      { name: "Typescript", icon: "logos:typescript-icon" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/rohitsharmaj7/chronoage",
        icon: "github",
      },
    ],
    image: "/chrono-age.png",
    images: ["/chrono-age.png"],
    video: "",
  },
] as const;
