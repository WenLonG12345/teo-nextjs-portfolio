import {
  SiKotlin,
  SiFirebase,
  SiFastlane,
  SiGmail,
  SiTypescript,
  SiTailwindcss,
  SiAntdesign,
  SiRedux,
} from "react-icons/si";
import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaAndroid,
  FaJava,
  FaLinkedin,
  FaStackOverflow,
  FaMedium,
  FaGithub,
  FaSass,
  FaAws,
} from "react-icons/fa";
import { SiReactquery } from "react-icons/si";
import { CgAlbum } from "react-icons/cg";
import { TbBrandNextjs } from "react-icons/tb";
import Image from "next/image";

const menuLinks = [
  { name: "About Me", route: "/about" },
  // { name: "Experience", route: "/experience" },
  // { name: "Projects", route: "/projects" },
  { name: "Github", route: "/github" },
  { name: "Articles", route: "/article" },
  // { name: "Contact", route: "/contact" },
];

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Teo Wen Long. All Rights Reserved.`,
  author: {
    name: "Teo Wen Long",
    accounts: [
      {
        url: "https://github.com/WenLonG12345",
        icon: <FaGithub />,
        name: "Github",
        type: "gray",
      },
      {
        url: "https://www.linkedin.com/in/teo-wen-long-19960316/",
        icon: <FaLinkedin />,
        name: "Linkedin",
        type: "linkedin",
      },
      {
        url: "https://stackoverflow.com/users/12261890/teo",
        icon: <FaStackOverflow />,
        name: "StackOverflow",
        type: "orange",
      },
      {
        url: "https://skynight1996.medium.com/",
        icon: <FaMedium />,
        name: "Medium",
        type: "gray",
      },
      {
        url: "mailto:teowenlong0316@gmail.com",
        icon: <SiGmail />,
        name: "Gmail",
        type: "red",
      },
    ],
  },
};

const resume = {
  url: "https://drive.google.com/file/d/1zaeroyWX8cU9LyreqVi6wbdjRi6ikD9M/view?usp=sharing",
  icon: <CgAlbum />,
  name: "Resume",
};

const mobileTechStacks = [
  {
    name: "Android",
    icon: <FaAndroid size={20} />,
  },
  {
    name: "React Native",
    icon: <FaReact size={20} />,
  },
  {
    name: "Kotlin",
    icon: <SiKotlin size={20} />,
  },
  {
    name: "Java",
    icon: <FaJava size={20} />,
  },
];

const webTechStacks = [
  {
    name: "React",
    icon: <FaReact size={20} />,
  },
  {
    name: "NextJS",
    icon: <TbBrandNextjs size={20} />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript size={20} />,
  },
  {
    name: "Javascript",
    icon: <FaJs size={20} />,
  },
  {
    name: "React Query",
    icon: <SiReactquery size={20} />,
  },
  {
    name: "Redux Saga",
    icon: <SiRedux size={20} />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={20} />,
  },
  {
    name: "SASS",
    icon: <FaSass size={20} />,
  },
];

const otherTechStacks = [
  {
    name: "CI/CD - Fastlane",
    icon: <SiFastlane size={20} />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={20} />,
  },
  {
    name: "Github & GitLab",
    icon: <FaGitAlt size={20} />,
  },
  {
    name: "AWS Service",
    icon: <FaAws size={20} />,
  },
];

const companies = [
  {
    title: "Astro",
    alt: "astro image",
    url: "https://www.astro.com.my/",
    role: "Assiociate Frontend Engineer",
    skills: ["React", "Sass", "Redux", "Redux Saga", "StorybookJS"],
    period: "Oct 2022 - Present",
    logo: "/astro.png",
  },
  {
    title: "Qumon Intelligence",
    alt: "qumon image",
    url: "https://www.qumonintelligence.com/",
    role: "Software Engineer",
    skills: [
      "Kotlin",
      "Java",
      "Android",
      "Javascript",
      "React",
      "React Native",
    ],
    period: "Aug 2020 - Sept 2022",
    logo: "/qumon.png",
  },
  {
    title: "TimeTec Cloud Sdn Bhd",
    alt: "timetec image",
    url: "https://www.timeteccloud.com/",
    role: "Mobile Application Developer Intern",
    skills: ["Java", "Android", "C#", "Appium Automation Testing", "AWS"],
    period: "Jul 2019 - Jan 2020",
    logo: "/timetec.png",
  },
];

const educations = [
  {
    title: "University Technology Malaysia (UTM)",
    alt: "utm image",
    url: "https://www.utm.my/",
    role: "Bachelor's Degree in Computer Science (Network and Security)",
    skills: ["CGPA - 3.79", "CCNA", "Security Management", "Network Security"],
    period: "Sept 2016 - Sept 2020",
    logo: "/utm.png",
  },
  {
    title: "SMK Mentakab",
    alt: "smk image",
    url: "https://www.facebook.com/pages/category/College---university/Sekolah-Menengah-Kebangsaan-Mentakab-224802077565350/",
    role: "STPM - Science Stream (Physics)",
    skills: ["CGPA - 3.33", "Math T", "Physics", "Chemistry"],
    period: "Jan 2015 - Jun 2016",
    logo: "/smk.png",
  },
];

const sideProjects = [
  {
    name: "Astro News Portals",
    imageUrl: "/astro_vortals.png",
    alt: "AstroVortals",
    summary:
      "Discover Malaysia's premier news portals, offering comprehensive coverage of diverse topics and boasting over 2 million monthly active users (MAU)",
    link: "https://www.astroawani.com/",
    tech: ["React", "ReactQuery", "SCSS", "AWS", "Redux", "Typescript"],
  },
  {
    name: "Ecosystem Design System",
    imageUrl: "/eco-design-system.png",
    alt: "eco-design-system",
    summary:
      "Design System built with StorybookJS based on design token and publish as open-source in NPM",
    link: "https://devdesignsystem.eco.astro.com.my/",
    tech: ["React", "StorybookJS", "SCSS", "Emotion", "Typescript"],
  },
  {
    name: "Digital Fortress Assistant Portal",
    imageUrl: "/dfap.png",
    alt: "dfap",
    summary:
      "CMS Assistant Portal for building website with components and make configuration easier",
    link: "https://de-digital-fortress-assistant-stg.eco.astro.com.my/",
    tech: ["React", "ReactQuery", "TailwindCSS", "MantineUI", "Typescript"],
  },
  {
    name: "Ideasss",
    imageUrl: "/ideasss.png",
    alt: "ideasss",
    summary:
      "NFT Platform for Creativity and Ideas,  First marketplace to connect demanders and designers through transparent competition",
    link: "https://ideasss.com/",
    tech: ["React", "ReactQuery", "TailwindCSS", "Typescript", "Zustand"],
  },
  {
    name: "3CommasClub NFT",
    imageUrl: "/3commas.png",
    alt: "3commasclub",
    summary:
      "NFC business card builder linked with unique NFT. Build business profile embed with NFC that allows others to scan and connect.",
    link: "https://nextjs-3commasclub-frontend.vercel.app/",
    tech: ["NextJS", "ChakraUI", "Ant Design", "Ant Design Pro"],
  },
  {
    name: "KlusterX Player Portal",
    imageUrl: "/klusterx_player.png",
    alt: "klusterx",
    summary:
      "Online Gaming Player Portal, built with NextJS, TailwindCSS and MantineUI",
    tech: ["NextJS", "TailwindCSS", "MantineUI", "Zustand"],
  },
  {
    name: "KlusterX Tenant Portal",
    imageUrl: "/klusterx_tenant.png",
    alt: "klusterx",
    summary: "Online Gaming Tenant Portal, built with Ant Design Pro",
    tech: ["UmiJS", "Ant Design", "Ant Design Pro"],
  },
  {
    name: "Chativo",
    imageUrl:
      "https://play-lh.googleusercontent.com/tgLiP-ZL-sBuZt2RzDU1tN88Cp7NPbdjF7c0311_dui86f1HrAQM0j4gXaRE0pb5zW0=s360-rw",
    alt: "chativo",
    summary:
      "Enterprise ready live-chat base customer support & engagement software",
    tech: ["Android", "Kotlin", "Android Jetpack", "Coroutine Flow"],
    link: "https://play.google.com/store/apps/details?id=io.chativo.chat",
  },
  {
    name: "ChativoV",
    imageUrl:
      "https://play-lh.googleusercontent.com/5U5s7sSIuzP6CygPkU2ZYxyOXT-MKv7oiyweGKHgkEgVameOcYt44rnXqCTWZJNZgVqn=s360-rw",
    alt: "chativo-v",
    summary:
      "Live-chat specifically designed for visitors to communicate with real-time agent instantly",
    tech: ["React Native", "Javascript", "Redux", "Redux Saga", "RealmJS"],
    link: "https://play.google.com/store/apps/details?id=io.chativo.visitor",
  },
];

export {
  menuLinks,
  webTechStacks,
  mobileTechStacks,
  otherTechStacks,
  siteConfig,
  resume,
  companies,
  educations,
  sideProjects,
};
