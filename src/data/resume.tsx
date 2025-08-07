import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Target, Instagram } from "lucide-react";

export const DATA = {
  name: "Bhavsagar",
  initials: "BS",
  url: "https://bhavsagar.com",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/NewDelhi",

  description: "🔥 React Frontend Developer | Architecting Interfaces That Move & Speak",

  summary: "By day, I craft **rich, interactive UIs** as a **React Developer**, building next-gen learning experiences at a fast-moving product company. **My toolkit?** A precise blend of **Next.js**, **TypeScript**, and just enough animation magic to make things *feel right*. But that’s just the surface. Behind the scenes, I’m quietly exploring the crossroads of **design, motion, and intelligence**—experimenting with **AI agents**, deep UI systems, and building tools that don't just work, but *respond*. I occasionally share what I learn—when it’s ready. Until then, let’s just say I’m building something worth *clicking twice*.",

  avatarUrl: "/me.png",
  skills: [
    // 🧠 Core Frontend
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "Tailwind CSS",
    "Figma",
  
    // 🛠️ Motion & UI Systems
    "Framer Motion",
    "GSAP",
    "Radix UI",
    "shadcn/ui",

    // 🔧 Backend & Databases
    "Node.js",
    "Express",
    "MongoDB",
    "Firebase",
  
    // 🌐 APIs & Integrations
    "REST APIs",
    "GraphQL",
    "Stripe API",
    'Razorpay API',
  
    // 🚢 DevOps & Tooling
    "Git",
    "Docker",
    "Microservices",
  
    // 🧪 Testing
    "Jest",
    "Snapshot Testing",
  
    // 🤖 AI & Emerging Tech
    "AI Agents",
    "LangChain",
    "OpenAI API",
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
        navbar: false,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/codewithbhav/",
        icon: Instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:bhavsagar92@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  
  work: [
    {
      company: "INTELNEST INNOVATIONS PRIVATE LIMITED [Prospello technologies]",
      href: "https://www.prospello.tech/",
      badges: [],
      location: "Bangalore, Karnataka",
      title: "React Developer",
      logoUrl: "/prospello.png",
      start: "March 2025",
      end: "Present",
      description:
        "Leading frontend development at a fast-paced product company, building dynamic LMS platforms that scale. I craft pixel-perfect, animated UIs using React, Next.js, Tailwind CSS, and Framer Motion. From transforming complex Figma designs into performant layouts to building reusable component libraries and integrating REST APIs—everything is designed to be smooth, accessible, and real-time ready.",
    },
    {
      company: "UpWork",
      href: "https://www.upwork.com/",
      badges: [],
      location: "Remote",
      title: "Freelance MERN Developer",
      logoUrl: "/upwork.svg",
      start: "Aug 2024",
      end: "Present",
      description:
        "Collaborated with international clients to deliver end-to-end MERN stack solutions. Worked on scalable dashboards, CMS systems, and B2B tools. Used TypeScript, GraphQL, and Docker to build and ship robust, containerized web apps. Focused on client satisfaction through rapid iteration and clean, modular code.",
    },
    {
      company: "GeeksForGeeks",
      href: "https://www.geeksforgeeks.org/",
      badges: [],
      location: "Noida, Uttar Pradesh",
      title: "Fullstack MERN Developer",
      logoUrl: "/gfg.svg",
      start: "April 2024",
      end: "Aug 2024",
      description:
        "Built full-stack features using MongoDB, Express.js, React, and Node.js. Integrated JWT/OAuth authentication and state management with Redux Toolkit. Gained hands-on experience in debugging, RESTful API integration, and backend performance tuning.",
    },
    {
      company: "Allen Digital",
      href: "https://digital.allen.ac.in/",
      badges: [],
      location: "Kota, Rajasthan",
      title: "Software Engineer (Consultant)",
      logoUrl: "/allen.svg",
      start: "July 2021",
      end: "March 2022",
      description:
        "Contributed to a national-scale ed-tech platform used by thousands of students daily. Worked on React-based UI modules, API integration, and performance optimizations like lazy loading and code splitting. Collaborated closely with the UI/UX team to bring interactive classroom experiences to life.",
    },
    {
      company: "Speedwell IT Solutions",
      href: "https://www.speedwellitsolutions.com/index.php",
      badges: [],
      location: "Noida, Uttar Pradesh",
      title: "Frontend Developer",
      logoUrl: "/speedwell.png",
      start: "Feb 2021",
      end: "June 2021",
      description:
        "Designed and developed the MVP of an internal admin dashboard using React and Redux. Worked on data visualization, A/B testing UI, and real-time API integrations. Focused on clean architecture and rapid delivery in a startup environment.",
    },
  ],
  
  education: [
    {
      school: "Coursera",
      href: "https://www.coursera.org/",
      degree: "AI and Machine Learning Course",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7q6y7rIYcXU2l7jqz93eSqTyMQtGkHC1UA&s",
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
      description:
        "Completed multiple courses on JavaScript, React, Next.js, and advanced front-end development. Strengthened knowledge of modern frameworks, state management, and performance optimization.",
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

  projects: [
    {
      title: "Digital Marketing Webiste",
      href: "https://cognitive-creations.vercel.app/",
      dates: "Aug 2024 - Sep 2024",
      active: true,
      description:
        "Built a responsive digital marketing website using React, featuring smooth navigation, dynamic components, and modern UI with TailwindCSS and Daisy UI",
      technologies: [
        "React",
        "React Router",
        "Daisy UI",
        "TailwindCSS",
        "JavaScript",
        "Shadcn UI",
        "Magic UI",
        "Lazy Loading",
      ],
      links: [
        {
          type: "Website",
          href: "https://cognitive-creations.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/itsbhavsagar/CognitiveCreations",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://itsbhavsagar.github.io/video-hosting/website.mp4",
    },
    {
      title: "Admin Dashboard",
      href: "https://admin-dashboard-wheat-zeta.vercel.app/",
      dates: "Sep 2024 - Sep 2024",
      active: true,
      description:
        "Built a fully responsive admin dashboard, featuring a clean and modern user interface. The dashboard includes intuitive navigation, interactive data tables, customizable widgets, and detailed analytics displays to streamline data management and enhance user experience.",
      technologies: [
        "Typescript",
        "HTML",
        "TailwindCSS",
        "Responsive Design",
        "Data Management",
      ],
      links: [
        {
          type: "Website",
          href: "https://admin-dashboard-wheat-zeta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/itsbhavsagar/Admin_Dashboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://itsbhavsagar.github.io/video-hosting/dashboard.mp4",
    },
    {
      title: "Workflow Builder with ReactFlow",
      href: "#",
      dates: "Aug 2024 - Sep 2024",
      active: true,
      description:
        "Built a pipeline builder using ReactFlow, Python, and FastAPI to help users design and visualize workflows. It features dynamic text nodes with variable support, real-time DAG validation, and a polished, user-friendly interface.",
      technologies: [
        "React",
        "React Flow",
        "Python",
        "FastAPI",
        "TailwindCSS",
        "Real-Time Feedback",
        "DAG Validation",
        "Dynamic Node Interactions",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/itsbhavsagar/VectorShift_technical_assessment",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/FastAPI.gif",
      video: "",
    },

    {
      title: "Full-Stack E-Commerce Platform",
      href: "https://ecommerce-xi-swart.vercel.app/",
      dates: "April 2024 - Aug 2024",
      active: true,
      description:
        "Developed a feature-rich E-commerce platform using the MERN stack. The platform offers seamless product browsing, user authentication, secure payment integration, and real-time search functionality. Ensuring a responsive and optimized user experience across all devices.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux Toolkit",
        "JWT Authentication",
        "TailwindCSS",
        "Context API",
        "Mongoose",
        "Daisy UI",
        "Lazy Loading",
      ],
      links: [
        {
          type: "Website",
          href: "https://ecommerce-website-lilac-ten.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: " https://github.com/itsbhavsagar/ecommerce-website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://itsbhavsagar.github.io/video-hosting/Ecomm-MERN.mp4",
    },
  ],
} as const;
