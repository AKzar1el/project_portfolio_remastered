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
  beterna,
  telemach,
  ssts,
  positiva,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Blockchain Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
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

const experiences = [
  {
    title: "Field Service Technician",
    company_name: "Telemach Slovenia",
    icon: telemach,
    iconBg: "#383E56",
    date: "Jan 2021 - Jul 2021",
    points: [
      "Responsible for providing installation and maintenance services for telecommunications equipment and services for clients.",
      "Travel to client locations to perform installations, repairs, and maintenance, troubleshooting technical issues, configuring equipment, and testing systems.",
      "Communicate with clients and provide excellent customer service, explaining technical issues, answering questions, and ensuring client satisfaction.",
      "Committed to delivering high-quality services, meeting client needs, and exceeding expectations in all aspects of the job.",
    ],
  },
  {
    title: "High School Teacher",
    company_name: "Secondary school of technical professions Šiška",
    icon: ssts,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Apr 2022",
    points: [
      "Create engaging and interactive lesson plans for Computer Science students, using a range of teaching methods, including lectures, discussions, and hands-on projects.",
      "Utilize educational tools and technologies, such as online learning platforms and programming environments, to create a dynamic and stimulating learning environment.",
      "Assess and evaluate student progress, providing constructive feedback and guidance to help students improve their skills and achieve their academic goals.",
      "Collaborate with faculty members and administrators to develop curriculum that meets the needs of students and prepares them for careers in technology.",
    ],
  },
  {
    title: "Back End Developer",
    company_name: "Positiva solutions",
    icon: positiva,
    iconBg: "#383E56",
    date: "Apr 2022 - Jun 2023",
    points: [
      "Design, develop and maintain server-side components of web applications.",
      "Work on a range of projects, from small-scale web applications to large, complex systems that require high scalability and reliability.",
      "Collaborate closely with Front-end Developers, UX designers, and other stakeholders to ensure that the applications meet client requirements.",
      "Design and implement APIs for seamless communication between the front-end and back-end, and implement security measures to protect sensitive data.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "BE-terna",
    icon: beterna,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Oct 2022",
    points: [
      "Develop and implement software solutions as an Application Engineer at BE-terna that meet clients' unique needs, with a focus on enterprise resource planning (ERP) software.",
      "Collaborate with clients to understand their requirements, design and implement custom solutions, and provide ongoing support and maintenance.",
      "Specialize in ERP software and provide customized solutions to meet the specific needs of clients.",
      "Provide exceptional client service, delivering high-quality solutions that meet client needs and exceed their expectations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
