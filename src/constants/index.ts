import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import kfc from "../assets/kfc.jpg";
import Dashboard from "../assets/Dashboard.png";
import entaga from "../assets/Entaga.png";

import {
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
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services: TService[] = [
  { title: "Web Developer", icon: web },
  { title: "Backend Developer", icon: backend },
];

const technologies: TTechnology[] = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

const experiences: TExperience[] = [
  {
    title: "HTML CSS & JavaScript",
    companyName: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "November 2024 - April 2025",
    points: [
      "I started learning front-end development (HTML, CSS, JavaScript) and used my new skills to build two full-page clones: a KFC site and a ronin.pk site.",
      "Each clone recreates the original site's layout and styling, with responsive design for mobile and desktop.",
      "Projects helped me understand responsive layouts, DOM manipulation, and best practices in front-end development.",
    ],
  },
  {
    title: "React.js Developer",
    companyName: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2025 - Sep 2025",
    points: [
      "Developing and maintaining web applications using React.js and related technologies.",
      "Collaborating with cross-functional teams to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback.",
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
      "A KFC clone website built with modern web technologies, featuring a responsive design, menu showcase, ordering system, and an easy-to-use interface.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "tailwind CSS", color: "pink-text-gradient" },
    ],
    image: kfc,
    sourceCodeLink: "https://github.com/MuhammadEhsan705/kfc3",
  },
  {
    name: "Dashboard",
    description:
      "A dashboard application with full CRUD (Create, Read, Update, Delete) functionality. Users must sign up / sign in to access the dashboard; authentication is handled with Supabase for secure session management and role-based access control.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind CSS", color: "pink-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
    ],
    image: Dashboard,
    sourceCodeLink: "https://github.com/MuhammadEhsan705/DASHBOARD-project",
  },
  {
    name: "Enatega Clone",
    description:
      "The Enatega website clone includes a Call Schedule feature that allows users to easily book a meeting or demo at their preferred time.",
    tags: [
      { name: "React js", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "tailwind CSS", color: "pink-text-gradient" },
    ],
    image: entaga,
    sourceCodeLink: "https://github.com/",
    
  },
];

export { services, technologies, experiences, testimonials, projects };
