import { backend, web, mobile, nextjs, innovura } from "../assets";

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
