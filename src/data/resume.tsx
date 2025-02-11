import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Target } from "lucide-react";

export const DATA = {
name: "Bhavsagar",
  initials: "BS",
  url: "https://bhavsagar.com",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/NewDelhi",
  description:
    "Full-Stack Developer passionate about AI-driven solutions and scalable web applications.",
  summary:
    "Full-Stack MERN Developer with 2+ years of experience in building scalable, high-performance applications. Currently transitioning into AI Agent Development, leveraging JavaScript, TypeScript, and modern AI technologies. Skilled in building intuitive UIs, optimizing back-end performance, and implementing DevOps best practices.",
  avatarUrl: "https://avatars.githubusercontent.com/u/46781035?v=4",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Redux",
    "Git",
    "Docker",
    "Jest",
    "Microservices",
    "REST APIs",
    "GraphQL",
    "Tailwind CSS",
    "Figma",
    "AI Agents",
    "LangChain",
    "OpenAI API"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "bhavsagar92@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/itsbhavsagar",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/itsbhavsagar/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/itsbhavsagar",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
     {
  company: "UpWork",
  href: "https://www.upwork.com/",
  badges: [],
  location: "Noida, Uttar Pradesh",
  title: "React Developer, Freelance",
  logoUrl: "/upwork.svg",
  start: "September 2024",
  end: "Present",
  description:
    "Developed and maintained scalable web applications using React and TypeScript for clients across various industries. Built reusable UI components and optimized front-end performance. Integrated RESTful APIs and GraphQL for efficient data fetching and state management. Utilized Docker and Kubernetes for containerized deployments. Designed and implemented robust testing strategies using Jest and React Testing Library.",
},
{
  company: "GeeksForGeeks",
  href: "https://www.geeksforgeeks.org/",
  badges: [],
  location: "Noida, Uttar Pradesh",
  title: "Student FullStack-MERN Intern",
  logoUrl: "/gfg.svg",
  start: "April 2024",
  end: "August 2024",
  description:
    "Built full-stack web applications using MongoDB, Express.js, React, and Node.js. Developed interactive and responsive UI components with React and Redux Toolkit. Implemented authentication and authorization using JWT and OAuth. Optimized database queries and back-end performance for scalability. Collaborated with senior developers to debug, test, and deploy production-ready applications.",
},
{
  company: "Allen Digital",
  href: "https://digital.allen.ac.in/",
  badges: [],
  location: "Kota, Rajasthan",
  title: "Software Engineer",
  logoUrl: "/allen.svg",
  start: "July 2021",
  end: "March 2022",
  description:
    "Designed and implemented front-end features for an ed-tech platform serving thousands of students. Built reusable UI components using React and integrated them with back-end APIs. Improved application performance by optimizing rendering and implementing lazy loading. Worked closely with designers to translate UI/UX wireframes into high-quality code.",
},
{
  company: "Speedwell IT Solutions",
  href: "https://www.speedwellitsolutions.com/index.php",
  badges: [],
  location: "Noida, Uttar Pradesh",
  title: "Web Developer",
  logoUrl: "https://www.speedwellitsolutions.com/assets/images/logo/speedwell_logo.webp",
  start: "February 2021",
  end: "June 2021",
  description:
    "Developed and maintained responsive web applications using React, Redux, and TypeScript. Architected and built the MVP of an internal admin and A/B testing dashboard. Integrated APIs for real-time data updates and analytics. Optimized front-end performance and ensured cross-browser compatibility.",
},
  ],
  education: [
      {
      school: "Coursera",
      href: "https://www.coursera.org/",
      degree: "AI and Machine Learning Course",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7q6y7rIYcXU2l7jqz93eSqTyMQtGkHC1UA&s",
      start: "2024",
      end: "Present",
    },
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "AI Agent Development (s3, s4, sf1, s5)",
      logoUrl: "/buildspace.jpg",
      start: "2024",
      end: "Present",
    },
    {
      school: "GeeksForGeeks",
      href: "https://www.geeksforgeeks.org/",
      degree: "Full-Stack Web Development (MERN Stack)",
      logoUrl: "/gfg.svg",
      start: "2024",
      end: "2024",
    },
    {
      school: "Udemy",
      href: "https://www.udemy.com/",
      degree: "The Ultimate React Course, Complete JavaScript Course",
      logoUrl: "/udemy.svg",
      start: "2023",
      end: "2024",
      description: "Completed multiple courses on JavaScript, React, Next.js, and advanced front-end development. Strengthened knowledge of modern frameworks, state management, and performance optimization.",
    },
      {
      school: "Bharati Vidyapeeth Deemed University",
      href: "https://www.bvusde.com/",
      degree: "Bachelor of Computer Applications (B.C.A)",
      logoUrl: "/bvu.png",
      start: "2010",
      end: "2013",
    },

  ],

  // projects: [
  //   {
  //     title: "Chat Collect",
  //     href: "https://chatcollect.com",
  //     dates: "Jan 2024 - Feb 2024",
  //     active: true,
  //     description:
  //       "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
  //     technologies: [
  //       "Next.js",
  //       "Typescript",
  //       "PostgreSQL",
  //       "Prisma",
  //       "TailwindCSS",
  //       "Stripe",
  //       "Shadcn UI",
  //       "Magic UI",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://chatcollect.com",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //     ],
  //     image: "",
  //     video:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
  //   },
  //   {
  //     title: "Magic UI",
  //     href: "https://magicui.design",
  //     dates: "June 2023 - Present",
  //     active: true,
  //     description:
  //       "Designed, developed and sold animated UI components for developers.",
  //     technologies: [
  //       "Next.js",
  //       "Typescript",
  //       "PostgreSQL",
  //       "Prisma",
  //       "TailwindCSS",
  //       "Stripe",
  //       "Shadcn UI",
  //       "Magic UI",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://magicui.design",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //       {
  //         type: "Source",
  //         href: "https://github.com/magicuidesign/magicui",
  //         icon: <Icons.github className="size-3" />,
  //       },
  //     ],
  //     image: "",
  //     video: "https://cdn.magicui.design/bento-grid.mp4",
  //   },
  //   {
  //     title: "llm.report",
  //     href: "https://llm.report",
  //     dates: "April 2023 - September 2023",
  //     active: true,
  //     description:
  //       "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
  //     technologies: [
  //       "Next.js",
  //       "Typescript",
  //       "PostgreSQL",
  //       "Prisma",
  //       "TailwindCSS",
  //       "Shadcn UI",
  //       "Magic UI",
  //       "Stripe",
  //       "Cloudflare Workers",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://llm.report",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //       {
  //         type: "Source",
  //         href: "https://github.com/dillionverma/llm.report",
  //         icon: <Icons.github className="size-3" />,
  //       },
  //     ],
  //     image: "",
  //     video: "https://cdn.llm.report/openai-demo.mp4",
  //   },
  //   {
  //     title: "Automatic Chat",
  //     href: "https://automatic.chat",
  //     dates: "April 2023 - March 2024",
  //     active: true,
  //     description:
  //       "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
  //     technologies: [
  //       "Next.js",
  //       "Typescript",
  //       "PostgreSQL",
  //       "Prisma",
  //       "TailwindCSS",
  //       "Shadcn UI",
  //       "Magic UI",
  //       "Stripe",
  //       "Cloudflare Workers",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://automatic.chat",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //     ],
  //     image: "",
  //     video:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
  //   },
  // ],

} as const;
