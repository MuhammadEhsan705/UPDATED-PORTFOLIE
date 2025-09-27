import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  Dashboard,
  Entaga,
  kfc,
  backend,
 
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,

  starbucks,
 
  
  
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  
  {
    title: "Backend Developer",
    icon: backend,
  },
  
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "HTML CSS & javaScript",
    companyName: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "November 2024 - April 2025",
    points: [
      "I started learning front-end development (HTML, CSS, JavaScript) and used my new skills to build two full-page clones: a KFC site and a ronin.pk site. Each clone recreates the original site's layout and styling, with responsive design for mobile and desktop, semantic HTML structure, CSS for layout and visuals, and JavaScript for interactive elements (menus, sliders, and basic form handling). These projects helped me understand responsive layouts, DOM manipulation, and best practices in front-end development.",
      
    ],
  },
  
  {
    title: "React.js Developer",
    companyName: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "july 2025 - Sep 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  
 
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ehsan proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ehsan does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ehsan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "KFC CLONE",
    description:
    "A KFC clone website built with modern web technologies, featuring a responsive design, menu showcase, ordering system, and an easy-to-use interface. It replicates the look and feel of the KFC website while practicing front-end development skills",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      
      {
        name: "tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: kfc,
    sourceCodeLink: "https://github.com/MuhammadEhsan705/kfc3",
  },
  {
    name: "Dashboard",
    description:
      "A dashboard application with full CRUD (Create, Read, Update, Delete) functionality. It allows users to manage data efficiently through an interactive interface, including features like adding new records, viewing details, editing existing entries, and deleting records in real time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      
      {
        name: "tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
    ],
    image: Dashboard,
    sourceCodeLink: "https://github.com/MuhammadEhsan705/DASHBOARD-project",
  },
  {
    name: "Enatega Clone",
    description:
      "The Enatega website clone includes a Call Schedule feature that allows users to easily book a meeting or demo at their preferred time. It provides a simple and user-friendly way to connect with the team for consultations or project discussions.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Entaga,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
