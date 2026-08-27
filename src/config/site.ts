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
  firstName: "Vaibhav",
  url: "https://vaibhavsingh.vercel.app",
  quote: {
    text: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
  },
  profileImages: [
    "/PortfolioPic2.jpg",
    "/Profilepic.jpg",
  ],
  bannerImage: "/bannerpic.png",
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
    "I spend most of my time in the terminal, the browser, or scribbling on a whiteboard. I lean backend, not because I don't like frontend, but because I enjoy making polished things actually hold up.",
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
    nowBuilding: "ConvoAi",
    nowListening: "Karan Aujla",
  },
  socials: {
    github: "https://github.com/vaibhav29-ed",
    twitter: "https://x.com/devxninja",
    linkedin: "https://www.linkedin.com/in/vaibhav-singh-680910217/",
    email: "mailto:vaibhavsingh.work.29@gmail.com",
    resume: "/RESUMEE.pdf",
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
      title: "Convo.Ai",
      blurb:
        "Convo AI is an AI-powered chatbot that allows users to upload PDF documents and interact with their content through natural language conversations",
      story:
        "Convo AI turns static PDFs into interactive conversations. Upload a document, ask questions in natural language, and get context-aware answers grounded in your files. Built to make information easier to explore, understand, and access without digging through pages.\n\n*Designed for speed • Engineered for feel.*",
      stack: ["React.js", "Tailwind CSS", "Nvidia-LLMs API", "PDF Processing"],
      year: "2026",
      links: {
        live: "Soon",
        source: "https://github.com/vaibhav29-ed",
      }, featured: false,
      status: "In Progress",
      image: "/convoai.png",
      categories: ["Fullstack"],
    },

    {
      title: "Virtual Oscilloscope",
      blurb:
        "An interactive web-based oscilloscope that lets users visualize, analyze, and explore digital waveforms in real time through an intuitive interface.",
      story:
        "Virtual Oscilloscope is an interactive web-based application that allows users to visualize and analyze digital waveforms in real time. It simulates the core functionality of a traditional oscilloscope, making it easier to explore signals, observe waveform behavior, and understand key properties through an intuitive interface.",
      stack: ["Javascript", "Web Audio API", "Canvas API", "HTML5",],
      year: "2025",
      links: {
        live: "https://virtual-oscilloscope-ov3h.vercel.app/",
        source: "https://github.com/vaibhav29-ed/Virtual-Oscilloscope",
      },
      featured: true,
      image: "/vcproject.png",
      categories: ["Backend"],
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
  writing: [
    {
      title: "Fundamental mathematics requirements for Artificial Intelligence.",
      summary: "In this article, I’m going to break down the essential math you need for AI and machine learning.",
      date: "July 10, 2026",
      readingTime: "20 min read",
      url: "https://medium.com/@vaibhavsingh292005/the-math-needed-for-ai-ml-228e80287d22?sharedUserId=vaibhavsingh292005",
    },

  ] as Post[],
  github: {
    username: "vaibhav29-ed",
    contributionsLastYear: "500+",
  },
  footerNote: "Built with ❤️ and hardwork"
} as const;

export type Site = typeof site;
