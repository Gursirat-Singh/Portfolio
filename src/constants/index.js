export const myProjects = [
  {
    id: 1,
    title: "Sirastay (Mini Airbnb)",
    description:
      "A full-stack accommodation booking platform inspired by Airbnb, enabling users to browse, list, and manage rental properties with secure authentication.",
    subDescription: [
      "Built a full-stack MERN application with React on the frontend and Node.js, Express, and MongoDB on the backend.",
      "Implemented user authentication and authorization using sessions and middleware to protect routes and user data.",
      "Designed dynamic property listings with image uploads, detailed descriptions, and pricing information.",
      "Added CRUD functionality for listings and reviews, allowing users to create, edit, and delete their own content.",
    ],
    href: "https://miniairbnb-aom0.onrender.com/",
    github: "https://github.com/Gursirat-Singh/MiniAirbnb",
    logo: "",
    image: "/assets/projects/SiraStay.png",
    tags: [
      {
        id: 1,
        name: "HTML/EJS",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        id: 4,
        name: "Express",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Innopulse",
    description:
      "A web platform designed to showcase and manage innovation-driven ideas and projects in a structured and user-friendly manner.",
    subDescription: [
      "Developed a responsive frontend using React and Tailwind CSS for clean UI and smooth user experience.",
      "Structured components for scalability and maintainability using modern React practices.",
      "Focused on clear information hierarchy and reusable UI components to support future feature expansion.",
      "Integrated routing and state management to handle multiple views and interactions efficiently.",
    ],
    href: "https://innopulse-puce.vercel.app",
    github: "https://github.com/Gursirat-Singh/Innopulse",
    logo: "",
    image: "/assets/projects/InnoPulse.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "Vite",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 3,
    title: "VestPulse",
    description:
      "A full-stack AI investment research platform with a 7-node fan-out/fan-in workflow that parallelized financial, news, competitor, and risk analysis.",
    subDescription: [
      "Built a full-stack AI investment research platform using Next.js, TypeScript, LangGraph.js, Gemini API, and RESTful APIs with a 7-node fan-out/fan-in workflow that parallelized financial, news, competitor, and risk analysis, reducing pipeline latency by 60%.",
      "Consolidated seven sequential Gemini API calls into a single structured-output workflow using Zod validation, reducing external API usage by 85% while improving performance and reliability.",
      "Secured REST API integrations with schema validation, Redis-backed rate limiting (5 requests/min/IP), and input verification.",
      "Deployed on Vercel with multi-provider financial data failover, client-side PDF export, responsive UI, and Lighthouse scores of 99 Performance, 100 Accessibility, 100 Best Practices, and 100 SEO.",
    ],
    href: "https://vest-pulse.vercel.app",
    github: "https://github.com/Gursirat-Singh/VestPulse",
    logo: "",
    image: "/assets/projects/VestPulse.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        id: 3,
        name: "LangGraph",
        path: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='18' cy='5' r='3'></circle><circle cx='6' cy='12' r='3'></circle><circle cx='18' cy='19' r='3'></circle><line x1='8.59' y1='13.51' x2='15.42' y2='17.49'></line><line x1='15.41' y1='6.51' x2='8.59' y2='10.49'></line></svg>",
      },
      {
        id: 4,
        name: "Gemini",
        path: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff'><path d='M12 2L15 9l7 3-7 3-3 7-3-7-7-3 7-3z'/></svg>",
      },
      {
        id: 5,
        name: "Redis",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
    ],
  },
];

export const experiences = [
  {
    title: "Software Development, DSA & Engineering Practices",
    job: "Advanced Projects & Skill Development",
    date: "2024 – Present",
    contents: [
      "Actively developing real-world projects with an emphasis on scalability, performance, and maintainability.",
      "Focused on Data Structures and Algorithms using Java and C++, solving interview-oriented problems.",
      "Exploring software engineering practices including testing fundamentals, backend optimization, and system reliability.",
      "Learning cloud computing fundamentals and deployment concepts, with exposure to AWS services.",
      "Continuously improving problem-solving ability, code quality, and architectural thinking through hands-on development.",
    ],
  },
  {
    title: "Full-Stack Web Development",
    job: "Undergraduate Studies",
    date: "2023 – 2024",
    contents: [
      "Entered college and transitioned into full-stack web development with a focus on practical project-based learning.",
      "Built multiple web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
      "Implemented RESTful APIs, authentication, CRUD operations, and responsive user interfaces.",
      "Worked extensively with Git and GitHub for version control and project management.",
      "Strengthened understanding of SDLC, backend–frontend integration, and clean code practices.",
    ],
  },
  {
    title: "Programming Foundations & Early Projects",
    job: "Higher Secondary (Class 12)",
    date: "2022 – 2023",
    contents: [
      "Started coding with Python and built basic school-level projects to understand programming fundamentals.",
      "Learned core concepts such as variables, control flow, functions, and basic data structures.",
      "Developed small applications integrating Python with simple databases, focusing on logic building and problem-solving.",
      "Established a strong foundation in computational thinking and debugging practices.",
    ],
  },

];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];

export const mySocials = [
  {
    name: "LinkedIn",
    icon: "/assets/socials/linkedIn.svg",
    href: "https://www.linkedin.com/in/gursirat-singh",
  },
  {
    name: "Instagram",
    icon: "/assets/socials/instagram.svg",
    href: "#",
  },
  {
    name: "WhatsApp",
    icon: "/assets/socials/whatsApp.svg",
    href: "#",
  },
];
