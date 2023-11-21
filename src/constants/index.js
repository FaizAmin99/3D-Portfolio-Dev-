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
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web App Developer",
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
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "DymaxTech",
    icon: threejs,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Developed and launched DymaxTech's official CRM system from scratch (Development to deployment).",
      "Streamlining operational efficiency and improved customer relations, using React.js, Node.js, Express, and MongoDB.",
      "Implemented design with Ant Design (antd) and CSS, a valuable asset given familiarity with CSS Tailwind requirements.",
      "Took charge of the complete application development and deployment process, handling it from start to finish",
    ],
  },
  {
    title: "Software Trainee Engineer",
    company_name: "NCCPL-National Clearing Company of Pak Ltd.",
    icon: threejs,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - June 2023",
    points: [
      "Developed and maintained automated CI/CD jobs for code deployment using Jenkins for production and non production servers.",
      "Integrating TortoiseGit as a version control tool.",
      "Integrating GitLab for open source code repository and collaborative software development.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  
];

const projects = [
  {
    name: "DymaxTech CRM",
    description:
      "Responsive dashboard for real-time insights, streamlined client management, efficient project tracking, and easy milestone monitoring with cost and progress details. Download quotes in PDF and export data for comprehensive reports. ",
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
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://dymax.a2hosted.com/",
  },

  
];

export { services, technologies, experiences, testimonials, projects };
