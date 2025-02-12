import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon, Target } from 'lucide-react';

export const DATA = {
  name: 'Bhavsagar',
  initials: 'BS',
  url: 'https://bhavsagar.com',
  location: 'New Delhi, India',
  locationLink: 'https://www.google.com/maps/place/NewDelhi',
  description:
    'Full-Stack Developer passionate about AI-driven solutions and scalable web applications.',
  summary:
    'Full-Stack MERN Developer with 2+ years of experience in building scalable, high-performance applications. Currently transitioning into AI Agent Development, leveraging JavaScript, TypeScript, and modern AI technologies. Skilled in building intuitive UIs, optimizing back-end performance, and implementing DevOps best practices.',
  avatarUrl: '/me.png',
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'Redux',
    'Git',
    'Docker',
    'Jest',
    'Microservices',
    'REST APIs',
    'GraphQL',
    'Tailwind CSS',
    'Figma',
    'AI Agents',
    'LangChain',
    'OpenAI API',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'bhavsagar92@gmail.com',
    tel: '+123456789',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/itsbhavsagar',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/itsbhavsagar/',
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://x.com/itsbhavsagar',
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: 'Youtube',
        url: '#',
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'UpWork',
      href: 'https://www.upwork.com/',
      badges: [],
      location: 'Noida, Uttar Pradesh',
      title: 'React Developer, Freelance',
      logoUrl: '/upwork.svg',
      start: 'April 2022',
      end: 'Present',
      description:
        'Developed and maintained scalable web applications using React and TypeScript for clients across various industries. Built reusable UI components and optimized front-end performance. Integrated RESTful APIs and GraphQL for efficient data fetching and state management. Utilized Docker and Kubernetes for containerized deployments. Designed and implemented robust testing strategies using Jest and React Testing Library.',
    },
    {
      company: 'GeeksForGeeks',
      href: 'https://www.geeksforgeeks.org/',
      badges: [],
      location: 'Noida, Uttar Pradesh',
      title: 'Student FullStack-MERN Intern',
      logoUrl: '/gfg.svg',
      start: 'April 2024',
      end: 'August 2024',
      description:
        'Built full-stack web applications using MongoDB, Express.js, React, and Node.js. Developed interactive and responsive UI components with React and Redux Toolkit. Implemented authentication and authorization using JWT and OAuth. Optimized database queries and back-end performance for scalability. Collaborated with senior developers to debug, test, and deploy production-ready applications.',
    },
    {
      company: 'Allen Digital',
      href: 'https://digital.allen.ac.in/',
      badges: [],
      location: 'Kota, Rajasthan',
      title: 'Software Engineer',
      logoUrl: '/allen.svg',
      start: 'July 2021',
      end: 'March 2022',
      description:
        'Designed and implemented front-end features for an ed-tech platform serving thousands of students. Built reusable UI components using React and integrated them with back-end APIs. Improved application performance by optimizing rendering and implementing lazy loading. Worked closely with designers to translate UI/UX wireframes into high-quality code.',
    },
    {
      company: 'Speedwell IT Solutions',
      href: 'https://www.speedwellitsolutions.com/index.php',
      badges: [],
      location: 'Noida, Uttar Pradesh',
      title: 'Web Developer',
      logoUrl:
        'https://www.speedwellitsolutions.com/assets/images/logo/speedwell_logo.webp',
      start: 'February 2021',
      end: 'June 2021',
      description:
        'Developed and maintained responsive web applications using React, Redux, and TypeScript. Architected and built the MVP of an internal admin and A/B testing dashboard. Integrated APIs for real-time data updates and analytics. Optimized front-end performance and ensured cross-browser compatibility.',
    },
  ],
  education: [
    {
      school: 'Coursera',
      href: 'https://www.coursera.org/',
      degree: 'AI and Machine Learning Course',
      logoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7q6y7rIYcXU2l7jqz93eSqTyMQtGkHC1UA&s',
      start: '2024',
      end: 'Present',
    },
    {
      school: 'Buildspace',
      href: 'https://buildspace.so',
      degree: 'AI Agent Development (s3, s4, sf1, s5)',
      logoUrl: '/buildspace.jpg',
      start: '2024',
      end: 'Present',
    },
    {
      school: 'GeeksForGeeks',
      href: 'https://www.geeksforgeeks.org/',
      degree: 'Full-Stack Web Development (MERN Stack)',
      logoUrl: '/gfg.svg',
      start: '2024',
      end: '2024',
    },
    {
      school: 'Udemy',
      href: 'https://www.udemy.com/',
      degree: 'The Ultimate React Course, Complete JavaScript Course',
      logoUrl: '/udemy.svg',
      start: '2023',
      end: '2024',
      description:
        'Completed multiple courses on JavaScript, React, Next.js, and advanced front-end development. Strengthened knowledge of modern frameworks, state management, and performance optimization.',
    },
    {
      school: 'Bharati Vidyapeeth Deemed University',
      href: 'https://www.bvusde.com/',
      degree: 'Bachelor of Computer Applications (B.C.A)',
      logoUrl: '/bvu.png',
      start: '2010',
      end: '2013',
    },
  ],

  projects: [
    {
      title: 'Workflow Builder with ReactFlow',
      href: '#',
      dates: 'Aug 2024 - Sep 2024',
      active: true,
      description:
        'Built a pipeline builder using ReactFlow, Python, and FastAPI to help users design and visualize workflows. It features dynamic text nodes with variable support, real-time DAG validation, and a polished, user-friendly interface.',
      technologies: [
        'React',
        'React Flow',
        'Python',
        'FastAPI',
        'TailwindCSS',
        'Real-Time Feedback',
        'DAG Validation',
        'Dynamic Node Interactions',
      ],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/itsbhavsagar/VectorShift_technical_assessment',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/FastAPI.gif',
      video: '',
    },
    {
      title: 'Digital Marketing Webiste',
      href: 'https://cognitive-creations.vercel.app/',
      dates: 'August 2024 - September 2024',
      active: true,
      description:
        'Built a responsive digital marketing website using React, featuring smooth navigation, dynamic components, and modern UI with TailwindCSS and Daisy UI',
      technologies: [
        'React',
        'React Router',
        'Daisy UI',
        'TailwindCSS',
        'JavaScript',
        'Shadcn UI',
        'Magic UI',
        'Stripe',
        'Cloudflare Workers',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://cognitive-creations.vercel.app/',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/itsbhavsagar/CognitiveCreations',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video: 'https://itsbhavsagar.github.io/video-hosting/website.mp4',
    },
    {
      title: 'Admin Dashboard',
      href: 'https://admin-dashboard-wheat-zeta.vercel.app/',
      dates: 'Sep 2024 - Sep 2024',
      active: true,
      description:
        'Built a fully responsive admin dashboard, featuring a clean and modern user interface. The dashboard includes intuitive navigation, interactive data tables, customizable widgets, and detailed analytics displays to streamline data management and enhance user experience.',
      technologies: [
        'Typescript',
        'HTML',
        'TailwindCSS',
        'Responsive Design',
        'Data Management',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://admin-dashboard-wheat-zeta.vercel.app/',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/itsbhavsagar/Admin_Dashboard',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video: 'https://itsbhavsagar.github.io/video-hosting/dashboard.mp4',
    },

    {
      title: 'Automatic Chat',
      href: 'https://automatic.chat',
      dates: 'April 2023 - March 2024',
      active: true,
      description:
        'Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.',
      technologies: [
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'Prisma',
        'TailwindCSS',
        'Shadcn UI',
        'Magic UI',
        'Stripe',
        'Cloudflare Workers',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://automatic.chat',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '',
      video:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4',
    },
  ],
} as const;
