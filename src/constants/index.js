import {
  mobile,
  backend,
  creator,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import react from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import dilusso from "../assets/company/dilusso.png";
import ignite from "../assets/company/ignite.png";
import clayrock from "../assets/company/clayrock.png";
import next from "../assets/nextjs-logo.png";
import wordpress from "../assets/WordPress-logo.png"

export const navLinks = [
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

const services = [
  {
    title: "React js Developer",
    icon: react,
  },
  {
    title: "Next js Developer",
    icon: next,
  },
  {
    title: "Wordpress Developer",
    icon: wordpress,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
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
    name: "Nextjs",
    icon: next,
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
    "Aman is an exceptional web developer who brought our vision to life with a stunning and functional website. Their attention to detail and expertise are truly impressive. Highly recommended!",
    name: "Rohan Patel",
    image: "https://images.pexels.com/photos/938639/pexels-photo-938639.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    testimonial:
    "I'm thoroughly impressed with Aman's web development skills. They delivered a visually appealing and high-performing website that exceeded our expectations. A top-notch professional!",
    name: "Rehan Shaikh",
    image: "https://images.pexels.com/photos/3215733/pexels-photo-3215733.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    testimonial:
    "Aman Vaidhya is a skilled web developer who transformed our online presence. Their attention to detail and technical expertise are unmatched. I would recommend them without hesitation.",
    name: "subham shah",
    image: "https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const projects = [
  {
    name: "Dilusso",
    description:
      "Discover a curated selection of the latest fashion trends and timeless classics in collection. From T-shirts and comfortable Pants dilusso have something for every style and occasion.",
    image: dilusso,
    source_code_link: "https://dilusso.in/",
  },
  {
    name: "Ignite",
    description:
      "Introducing Ignite,India’s leading porcelain slab manufacturer.offering a vast expanse of tiles collection for every place.ignite offer excellent quality vitrified mosaic tiles",
    image: ignite,
    source_code_link: "https://ignitemosaic.com/",
  },
  {
    name: "Clayrock",
    description:
      "Clayrock Granito a digital glazed vitrified tiles(GVT & PGVT) manufacturer in India. they offer exclusive collections of the finest quality vitrified tiles at the best prices.",
    image: clayrock,
    source_code_link: "https://www.clayrockgranito.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
