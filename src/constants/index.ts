import {
  backend,
  web,
  mobile,
  nextjs,
  innovura,
  html,
  css,
  javascript,
  typescript,
  mongodb,
  node,
  tailwind,
  react,
  redux,
  git,
  figma,
  next,
  reactQuery,
  figmabg,
  wallpaper,
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

export const services = [
  {
    title: "React.js Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Node.js Developer",
    icon: backend,
  },
  {
    title: "Next.js Developer",
    icon: nextjs,
  },
];

export const experiences = [
  {
    title: "Software Developer",
    company_name: "Innovura",
    icon: innovura,
    iconBg: "#383E56",
    date: "April 2023 - Present",
    points: [
      "Developing and maintaining web application called Community-Portal using React.js, Redux-Toolkit, React-Query, Typescript, Bitbucket, Jira and Attlasian and other related technologies.",
      "My team and I used a React.Js in frontend and Spring-boot in backend.",
      "This application aim to create portal via admin to allow users to share many threads like ideas, opinions and complains or comment and voting on another thread shared by another user.",
      "All admins have a dashboard to fully customize them portals like portal name, colors, theme and much more.",
      "All users have a profile page to add own pictures and cover image and the ability to update own display name, account if them have a permission to do that and much more.",
    ],
  },
];

export const technologies = [
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
    icon: react,
  },
  {
    name: "React Query",
    icon: reactQuery,
  },
  {
    name: "Next JS",
    icon: next,
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
    icon: node,
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
    name: "figma",
    icon: figma,
  },
];

export const projects = [
  {
    name: "Figma Clone",
    description:
      "Build and deploy a Figma clone using Next.js, Tailwindcss and Live-blocks",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: figmabg,
    source_code_link: "https://github.com/Mohammed-Maher-Alhomsy/Figma-Clone",
    web_link: "https://figma-clone-black.vercel.app/",
  },

  {
    name: "Wallpaper Mobile App",
    description:
      "Build a wallpaper mobile application using React-Native, Expo and Pixabay",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "pink-text-gradient",
      },
    ],
    image: wallpaper,
    source_code_link:
      "https://github.com/Mohammed-Maher-Alhomsy/wallpaper-react-native",
    web_link:
      "https://drive.google.com/file/d/1TBB7UJER6QyEyCA4Vg-3QiOwDnjIRYJ9/view?usp=drive_link",
  },
];
