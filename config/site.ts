export type Project = {
  title: string;
  blurb: string;
  story?: string;
  stack: string[];
  year: string;
  links: { live?: string; source?: string };
  featured?: boolean;
  status?: string;
  image?: string;
  categories?: ("Frontend" | "Backend" | "Fullstack")[];
};

export type Job = {
  company: string;
  role: string;
  period: string;
  blurb: string;
  url?: string;
};

export type Post = {
  title: string;
  summary: string;
  date: string;
  url: string;
  readingTime?: string;
};

export const site = {
  name: "Vaibhav Singh",
  url: "https://vaibhavsinghprofile.vercel.app",
  profileImages: [
    "/profile.jpg",
    "/profile2.png",
  ],
  bannerImage: "/banner.png",
  socialBannerImage: "/social-banner.png",
  initials: "VS",
  role: "Full Stack Developer",
  location: "Kurukshetra, India",
  timezone: "Asia/Kolkata",
  email: "vaibhavsingh.work.29@gmail.com",
  greeting: "Hey, I'm Vaibhav",
  tagline: "I build clean, modern websites and web apps where design, functionality, and even the smallest details matter.",
  about: [
    "Hey, I'm Vaibhav, a full stack developer who loves building clean, modern websites and apps where design, functionality, and even the smallest details matter, with a focus on making products that are both practical and visually satisfying.",
    "I spend most of my time in the terminal, the browser, or scribbling on a whiteboard. I lean backend,not because I don't like frontend, but because I enjoy making polished things actually hold up.",
    "I don't ship junk. Maintainability isn't optional. And I build best when I'm curious.",
  ],
  tldr: [
    "Building products.",
    "Learning technologies.",
    "Shipping consistently.",
    "Obsessed with clean code.",
  ],
  status: {
    available: true,
    availableText: "open to opportunities",
    nowLearning: "Backend Engineering • System Design • DSA • DevOps",
    nowBuilding: "DoodleDash",
    nowListening: "focus playlists",
  },
  socials: {
    github: "https://github.com/vaibhav29-ed",
    twitter: "https://x.com/devxninja",
    linkedin: "https://www.linkedin.com/in/vaibhav-singh-680910217/",
    email: "mailto:vaibhavsingh.work.29@gmail.com",
    resume: "",
    medium: "https://medium.com/@vaibhavsingh292005",
  },
  experience: [
     {
      company: "ECELL UIET KUK",
      role: "Tech Team Co-Lead & Full-Stack Developer",
      period: "2024 – 2026",
      blurb:
        "Building and deploying full-stack web applications, SaaS platforms, and backend systems. Working across APIs, authentication, databases, real-time systems, and modern web infrastructure.",
      url: "",
    },

  ] as Job[],
  projects: [
    {
      title: "FrameLabs",
      blurb:
        "A creative tool that turns static card generation into a reactive, real-time design experience. Users can switch between retro palettes and layouts on the fly, with zero jank—because every state transition is memoized and component-driven.",
      story:
        "The frontend is built with React's compositional model, styled atomically with Tailwind CSS, and powered by Zustand for predictable, lean state management. Icons from lucide-react keep the UI crisp and accessible. The result: a minimal surface area with a maximal creative ceiling.\n\n*Designed for speed • Engineered for feel.*",
      stack: ["React.js", "Tailwind CSS", "Zustand", "lucide-react"],
      year: "2026",
      links: {
        live: "https://framelabs.vercel.app/",
        source: "https://github.com/nodeanurag/FrameLabs",
      },
      featured: true,
      image: "/project-images/framelabs.png",
      categories: ["Frontend"],
    },

    {
      title: "SwiftPoll",
      blurb:
        "A real-time anonymous polling application built for maximum creation and voting speed without user registration friction.",
      story:
        "Uses Supabase Realtime DB and server actions for lightning-fast voting updates and creator actions. Features browser-stored secret admin tokens for accountless close/delete operations, server-side IP hashing spam de-duplication, full keyboard accessibility, and optimistic client voting counts.",
      stack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS v4", "Zod", "Vitest"],
      year: "2026",
      links: {
        source: "https://github.com/nodeanurag/swiftpoll",
      },
      featured: true,
      image: "/project-images/swiftpoll.png",
      categories: ["Fullstack"],
    },
    {
      title: "DoodleDash",
      blurb:
        "A real-time multiplayer drawing and guessing game (Skribbl.io clone) built as a TypeScript monorepo with absolute dimension-independent drawing synchronization.",
      story:
        "Engineered using Socket.IO WebSockets for bidirectional event mapping. Features a zero-trust server validation engine (timers, guessing logic, turn loops managed strictly on the server), spectator rooms, and a custom canvas-to-image engine for client-side PNG sharing. Strikethroughs and drawing vectors are normalized to relative coordinates to ensure cross-device consistency.",
      stack: ["React.js", "Node.js", "Socket.IO", "TypeScript", "Tailwind CSS v4", "Zustand"],
      year: "2026",
      links: {
        live: "https://doodledash.pages.dev/",
        source: "https://github.com/nodeanurag/DoodleDash",
      },
            featured: false,
      status: "In Progress",
      image: "/project-images/doodledash.png",
      categories: ["Fullstack", "Backend"],
    },

  ] as Project[],
  skills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Shadcn UI",
    "MongoDB",
    "Prisma",
    "Supabase",
    "Firebase",
    "REST APIs",
    "Git",
    "GitHub",
    "Vercel",
    "Figma",
    "C++",
    "Python",
  ],
  writing: [] as Post[],
  github: {
    username: "vaibhav29-ed",
    contributionsLastYear: "500+",
  },
  footerNote: "Built with ❤️ and hardwork "
} as const;

export type Site = typeof site;
