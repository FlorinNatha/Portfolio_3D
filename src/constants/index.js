import { href } from "react-router-dom";
import { contain } from "three/src/extras/TextureUtils.js";
import Contact from "../sections/Contact";
import CertificationsPage from "../sections/Certifications";

/*export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];*/
export const navLinks = [
  { id: 1, name: "Home", href: "/", icon: "bx-home" },
  { id: 2, name: "About", href: "/about", icon: "bx-user" },
  { id: 3, name: "Projects", href: "/projects", icon: "bxs-briefcase" },
  { id: 4, name: "Certifications", href: "/certifications", icon: "bx-certification" },
  { id: 5, name: "Skills", href: "/skills", icon: "bxs-hand" },
  { id: 6, name: "Blog", href: "/blog", icon: "bx-news" },
  { id: 7, name: "Feedback", href: "/client", icon: "bx-group" },
  { id: 8, name: "Contac", href: "/contact", icon: "bx-envelope" },
  { id: 9, name: "Achievements", href: "/achievements", icon: "bx-trophy" },
];

export const blogPosts = [
  {
    id: 1,
    title: 'Introduction to Docker: Why Every Developer (and ML Engineer) Must Learn It',
    desc: 'Learn why Docker is a game-changer for building and running applications, solving the "it works on my machine" problem, and its essential role in MLOps & DevOps.',
    date: 'April 8, 2026',
    image: 'assets/blog/blog1.png',
    link: 'https://medium.com/@nathashaflorin2001/introduction-to-docker-why-every-developer-and-ml-engineer-must-learn-it-99edce581eeb',
  },
  {
    id: 2,
    title: 'Docker Architecture Explained: Understanding Core Components (Beginner → Pro)',
    desc: 'Dive deep into Docker internals: Client-Server architecture, Docker Daemon, Images vs Containers, and how they interact to build real-world systems.',
    date: 'April 13, 2026',
    image: 'assets/blog/blog2.png',
    link: 'https://medium.com/p/c13e3051c22b?postPublishedType=initial',
  },
  {
    id: 3,
    title: 'Getting Hands-On with Docker: Build and Run Your First Container',
    desc: 'Moving from theory to practice: pulling images, creating containers, and writing your first Dockerfile to package and run applications.',
    date: 'April 21, 2026',
    image: 'assets/blog/blog3.png',
    link: 'https://medium.com/@nathashaflorin2001/getting-hands-on-with-docker-build-and-run-your-first-container-5b1e0fbc9133',
  },
  {
    id: 4,
    title: 'Building a Complete CI/CD Pipeline with GitHub, Docker, and Jenkins',
    desc: 'Automating the entire software delivery workflow: from GitHub commits to Jenkins builds and Docker Hub deployments.',
    date: 'April 21, 2026',
    image: 'assets/blog/blog4.png',
    link: 'https://medium.com/@nathashaflorin2001/building-a-complete-ci-cd-pipeline-with-github-docker-and-jenkins-ffa880b635d2',
  },
  {
    id: 5,
    title: 'Auto Deploy Node.js REST API on AWS EC2 | CI/CD Pipeline using GitHub Actions',
    desc: 'From code to cloud: a step-by-step tutorial on automating Node.js deployments to AWS EC2 using GitHub Actions, Nginx, and PM2.',
    date: 'May 2, 2026',
    image: 'assets/blog/blog5.png',
    link: 'https://medium.com/@nathashaflorin2001/auto-deploy-node-js-rest-api-on-aws-ec2-ci-cd-pipeline-using-github-actions-7e97405568a7',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: ' HealthSphere - Hospital Management',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'HealthSphere is a comprehensive Hospital Management System designed to facilitate smooth interactions between Patients, Doctors, and Admins. Built using the MERN (MySQL, Express, React, Node.js) stack, HealthSphere supports various features like patient management, doctor scheduling, and system administration to streamline healthcare operations.',
    href: 'https://github.com/thathsarabandara/HealthSphereProject-',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Bootstrap',
        path: 'assets/Bootstrap.png',
      },
      {
        id: 3,
        name: 'Node JS',
        path: '/assets/node-js.png',
      },
      {
        id: 4,
        name: 'My SQL',
        path: '/assets/mysql.svg',
      },
    ],
  },
  {
    title: 'A 3D Dev Portfolio',
    desc: 'Built with React.js for handling the user interface, Three.js for rendering 3D elements, and styled with TailwindCSS, the 3D Minimalistic portfolio is a website project.',
    subdesc:
      'Node.js, React.js,Three.js, React Three Fiber,React Three Drei,Email JS,Vite,Tailwind CSS ',
    href: 'https://github.com/FlorinNatha/Portfolio_3D',
    texture: '/textures/project/project1.mp4',  //computer ekat dala tina video eka
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Threejs',
        path: '/assets/Threejs.png',
      },

    ],
  },
  {
    title: 'Laravel E-commerce Project',
    desc: 'A user-friendly and secure online store built with Laravel. It allows customers to browse products, add them to cart, and make secure payments. The system includes product management, order tracking, user authentication, and an admin dashboard for smooth store management.',
    subdesc:
      'Developed using PHP, Laravel Framework, and Blade templating engine for dynamic and responsive frontend rendering.',
    href: 'https://github.com/FlorinNatha/Ecommerce-Laravel',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Laravel',
        path: '/assets/Laravel.png',
      },

    ],
  },

  {
    title: 'Modern Furniture E-Commerce Platform',
    desc: 'A fast, visually engaging shopping experience featuring a sleek design with interactive hover states, blazing-fast client-side routing, and a complete e-commerce flow (Home, Shop, Cart, Checkout, Auth).',
    subdesc:
      'Built using React 19, Vite, React Router DOM, and Bootstrap 5. Emphasizes clean, scalable, and highly reusable component-based architecture.',
    href: 'https://github.com/FlorinNatha/FunitureWebsie-frontend',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Bootstrap',
        path: '/assets/Bootstrap.png',
      },
    ],
  },
  {
    title: 'RedAlert – Smart Blood Donor Platform',
    desc: 'RedAlert is a comprehensive solution to connect urgent blood requesters with available donors in real-time. Features include Emergency Requests, Verified Donor Profiles, AI-Assisted Donor Eligibility Checking, AI Chatbot, and Notifications.',
    subdesc:
      'Web Portal built with MERN Stack (MongoDB, Express.js, React.js, Node.js) and Mobile App built with React Native. Built to make blood donation faster, smarter, and more reliable.',
    href: 'https://lnkd.in/dYTpYPjf',
    texture: '/textures/project/project6.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: '/assets/node-js.png',
      },
    ],
  },
  {
    title: 'Smart Event Check-In & Management System',
    desc: 'A complete solution for managing events, registrations, and secure QR-based check-ins. Features include Real-time Notifications, Smart Registration Invalidation, Ticket Management, and QR Code Check-In.',
    subdesc:
      'Built with Flutter (Material 3) for the mobile app and Node.js + Express for the backend API, utilizing MongoDB and JWT Authentication with Role-Based Access Control.',
    href: '#',
    texture: '/textures/project/project7.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Node.js',
        path: '/assets/node-js.png',
      },
    ],
  },
  {
    title: 'Cloud-Native E-Commerce Microservices Platform',
    desc: 'Jun 2026 – Jul 2026 | Designed and developed a production-style cloud-native e-commerce platform by transforming a monolithic full-stack application into a scalable microservices architecture. The backend was split into five independent Node.js microservices (Authentication, User, Product, Order, and Payment) connected through a centralized API Gateway. The entire application was containerized with Docker and orchestrated using Kubernetes (Minikube), with NGINX Ingress handling secure external access and path-based routing.',
    subdesc:
      'Implemented enterprise-grade observability by integrating Prometheus metrics into each microservice using prom-client and visualizing real-time application and infrastructure metrics through Grafana dashboards. This project demonstrates hands-on experience with containerization, Kubernetes orchestration, microservices, API Gateway design, monitoring, scalability, and cloud-native application deployment.',
    href: 'https://github.com/FlorinNatha/microservices-k8s-ecommerce',
    texture: '/textures/project/project8.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Node.js',
        path: '/assets/node-js.png',
      },
      {
        id: 2,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        id: 4,
        name: 'Docker',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      },
      {
        id: 5,
        name: 'Kubernetes',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      },
      {
        id: 6,
        name: 'NGINX Ingress',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
      },
      {
        id: 7,
        name: 'Prometheus',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg',
      },
      {
        id: 8,
        name: 'Grafana',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];