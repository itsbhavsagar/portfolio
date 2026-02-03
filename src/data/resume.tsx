import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon, Target, Instagram } from 'lucide-react';

export const DATA = {
  name: 'Bhavsagar',
  initials: 'BS',
  url: 'https://bhavsagar.com',
  location: 'New Delhi, India',
  locationLink: 'https://www.google.com/maps/place/NewDelhi',

  description: '🔥 Frontend / Product Engineer | React • React Native • TypeScript • Next.js • PWA',
  summary:
    "I’m a Frontend / Product Engineer with 3+ years of experience building production-grade web and mobile applications for startups. I specialize in React, Next.js, React Native, and TypeScript, and have owned frontend and mobile development end-to-end — from architecture and UI/UX to performance optimization and production delivery.\n\nAt my current role, I’m part of the founding engineering team, where I’ve built multi-role SaaS platforms, real-time video systems, subscription flows, admin dashboards, and mobile apps used by thousands of daily users. I often work without detailed specs or designers, translating PRDs directly into scalable, user-friendly interfaces.\n\nI care deeply about clean architecture, performance, accessibility, and building products that real users rely on.",

  avatarUrl: '/me.png',
  skills: [
    'React', 'Next.js', 'React Native', 'Expo', 'TypeScript', 'JavaScript (ES6+)',
    'Redux Toolkit', 'RTK Query', 'TanStack Query', 'Tailwind CSS', 'HTML5', 'CSS3',
    'Responsive Design', 'Mobile-First Design', 'Accessibility (WCAG)', 'Design Systems',
    'Component Architecture', 'Figma', 'Framer Motion', 'GSAP', 'Radix UI', 'shadcn/ui', 'Material UI',
    'Node.js', 'Express', 'MongoDB', 'Mongoose', 'REST APIs', 'GraphQL',
    'Razorpay', 'Stripe', 'LiveKit SDK', 'Zoom Video SDK', 'WebSockets', 'Push Notifications',
    'PWA', 'Performance Optimization (LCP, CLS, INP)', 'Code Splitting', 'Lazy Loading',
    'Memoization', 'API Caching', 'Docker', 'Git', 'Vercel', 'AWS'
  ]
  ,

  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'bhavsagar92@gmail.com',
    tel: '+91 9899006810',
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
        navbar: false,
      },
      Instagram: {
        name: 'Instagram',
        url: 'https://www.instagram.com/codewithbhav/',
        icon: Instagram,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: 'mailto:bhavsagar92@gmail.com',
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: 'Prospello Technologies',
      href: 'https://www.prospello.tech/',
      badges: [],
      location: 'Bangalore, Karnataka',
      title: 'Frontend Developer',
      logoUrl: '/prospello.png',
      start: 'March 2025',
      end: 'Present',
      description:
        'Core member of the founding engineering team, owning frontend and mobile development end-to-end for multiple production-grade SaaS and LMS platforms. Built large-scale, multi-role systems (students, teachers, parents, admins, clients) including real-time virtual classrooms, subscriptions, scheduling, dashboards, and role-based access control. Implemented live video workflows using LiveKit and Zoom Video SDK, and developed cross-platform mobile apps with React Native (Expo → Native CLI) including push notifications and native integrations. Led frontend architecture, performance optimization, and PWA conversion for offline-first and mobile-first experiences. Independently handled UI/UX design and design systems in the absence of a designer, ensuring accessibility and consistency. Collaborated closely with backend teams on Node.js and MongoDB APIs, authentication, and system design. Platforms are actively used by thousands of students daily across institutes in India.'
    },
    {
      company: 'UpWork',
      href: 'https://www.upwork.com/',
      badges: [],
      location: 'Remote',
      title: 'Freelance MERN Developer',
      logoUrl: '/upwork.svg',
      start: 'Aug 2024',
      end: 'Feb 2025',
      description:
        'Collaborated with international clients to deliver end-to-end MERN stack solutions. Worked on scalable dashboards, CMS systems, and B2B tools. Used TypeScript, GraphQL, and Docker to build and ship robust, containerized web apps. Focused on client satisfaction through rapid iteration and clean, modular code.',
    },
    {
      company: 'GeeksForGeeks',
      href: 'https://www.geeksforgeeks.org/',
      badges: [],
      location: 'Noida, Uttar Pradesh',
      title: 'Fullstack MERN Developer',
      logoUrl: '/gfg.svg',
      start: 'April 2024',
      end: 'Aug 2024',
      description:
        'Developed a full-stack e-commerce application using React.js, Redux, Node.js, Express.js, and MongoDB. Built key features including user authentication, product management, and a fully functional shopping cart. Used Formik and Yup for robust form handling and validation, improving overall user experience and input reliability. Collaborated with team members to design and integrate responsive UI components and connect frontend with backend REST APIs. Participated in team meetings, sprint planning, and collaborative coding sessions, gaining hands-on experience in agile workflows, peer reviews, and effective team communication.',
    },
    {
      company: 'Allen Digital',
      href: 'https://digital.allen.ac.in/',
      badges: [],
      location: 'Kota, Rajasthan',
      title: 'Frontend Developer (React.js)',
      logoUrl: '/allen.svg',
      start: 'July 2021',
      end: 'Sept 2022',
      description:
        'Built and maintained responsive, component-based interfaces with React.js and modern JavaScript (ES6+). Integrated RESTful APIs to deliver real-time data and seamless user experiences. Implemented user authentication and authorization workflows in the frontend, ensuring secure access control. Optimized application performance through code splitting, lazy loading, and efficient state management using Redux and RTK Query. Collaborated closely with designers to deliver pixel-perfect, accessible, and cross-browser compatible UI. Managed version control with Git, supporting smooth team collaboration and consistent code quality.',
    },
    {
      company: 'Speedwell IT Solutions',
      href: 'https://www.speedwellitsolutions.com/index.php',
      badges: [],
      location: 'Noida, Uttar Pradesh',
      title: 'Frontend Web Developer',
      logoUrl: '/speedwell.png',
      start: 'June 2020',
      end: 'June 2021',
      description:
        'Translated PSD and Figma designs into fully responsive, pixel-perfect websites with cross-browser compatibility. Collaborated with UI/UX designers and developers to implement features that enhanced usability and performance. Interfaced directly with clients and coordinated with internal teams to ensure timely delivery of project requirements. Used Git for version control, maintaining clean code practices and enabling smooth team collaboration',
    },
  ],

  education: [
    {
      school: 'Udemy',
      href: 'https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/',
      degree: 'AI Engineer Agentic Track: The Complete Agent & MCP Course',
      logoUrl: '/udemy.svg',
      start: '2026',
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
      title: 'Learning Management System (LMS)',
      href: 'https://lms-frontend-7m6f.onrender.com/',
      dates: '2025',
      active: true,
      description:
        'Full ownership side project: complete frontend architecture, UI/UX design, backend APIs, authentication, role-based access control, and data modeling using React and Node.js.',
      technologies: [
        'React', 'TypeScript', 'Vite', 'Redux Toolkit', 'React Router', 'Tailwind CSS',
        'Radix UI', 'Framer Motion', 'GSAP', 'Node.js', 'Express', 'MongoDB', 'Mongoose',
        'JWT Authentication', 'bcrypt', 'REST APIs', 'Axios',
      ],
      links: [
        { type: 'Website', href: 'https://lms-frontend-7m6f.onrender.com/', icon: <Icons.globe className="size-3" /> },
        { type: 'Source', href: 'https://github.com/itsbhavsagar/lms', icon: <Icons.github className="size-3" /> },
      ],
      image: '',
      video: 'https://itsbhavsagar.github.io/video-hosting/LeranHub-LMS.mp4',
    },

    {
      title: 'Digital Marketing Webiste',
      href: 'https://cognitive-creations.vercel.app/',
      dates: 'Aug 2024 - Sep 2024',
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
        'Lazy Loading',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://cognitive-creations.vercel.app/',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'Source',
          href: 'https://github.com/itsbhavsagar/CognitiveCreations',
          icon: <Icons.github className='size-3' />,
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
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'Source',
          href: 'https://github.com/itsbhavsagar/Admin_Dashboard',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '',
      video: 'https://itsbhavsagar.github.io/video-hosting/dashboard.mp4',
    },
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
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '/FastAPI.gif',
      video: '',
    },

    {
      title: 'Full-Stack E-Commerce Platform',
      href: 'https://ecommerce-xi-swart.vercel.app/',
      dates: 'April 2024 - Aug 2024',
      active: true,
      description:
        'Developed a feature-rich E-commerce platform using the MERN stack. The platform offers seamless product browsing, user authentication, secure payment integration, and real-time search functionality. Ensuring a responsive and optimized user experience across all devices.',
      technologies: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Redux Toolkit',
        'JWT Authentication',
        'TailwindCSS',
        'Context API',
        'Mongoose',
        'Daisy UI',
        'Lazy Loading',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://ecommerce-website-lilac-ten.vercel.app/',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'Source',
          href: ' https://github.com/itsbhavsagar/ecommerce-website',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '',
      video: 'https://itsbhavsagar.github.io/video-hosting/Ecomm-MERN.mp4',
    },
  ],
} as const;
