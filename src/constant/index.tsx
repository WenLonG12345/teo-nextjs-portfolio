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
} from "react-icons/fa";
import { CgAlbum } from "react-icons/cg";
import { TbBrandNextjs } from "react-icons/tb";

const menuLinks = [
  { name: "About Me", route: "/about" },
  // { name: "Experience", route: "/experience" },
  // { name: "Projects", route: "/projects" },
  { name: "Github", route: "/repos" },
  { name: "Articles", route: "/articles" },
  // { name: "Contact", route: "/contact" },
];

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Teo Wen Long. All Rights Reserved.`,
  author: {
    name: "Teo Wen Long",
    accounts: [
      {
        url: "https://github.com/WenLonG12345",
        icon: <FaGithub color="#1b202b" size={20} />,
        name: "Github",
      },
      {
        url: "https://www.linkedin.com/in/teo-wen-long-19960316/",
        icon: <FaLinkedin color="#3b8bc4" size={20} />,
        name: "Linkedin",
      },
      {
        url: "https://stackoverflow.com/users/12261890/teo",
        icon: <FaStackOverflow color="#b45c30" size={20} />,
        name: "StackOverflow",
      },
      {
        url: "https://skynight1996.medium.com/",
        icon: <FaMedium color="#1b202b" size={20} />,
        name: "Medium",
      },
      {
        url: "mailto:teowenlong0316@gmail.com",
        icon: <SiGmail color="#b63d37" size={20} />,
        name: "Gmail",
      },
    ],
  },
};

const resume = {
  url: "https://drive.google.com/file/d/1KKVBejHxAr2PKhSCFufgnvdQTMUWt-u7/view?usp=sharing",
  icon: <CgAlbum />,
  name: "Resume",
};

const mobileTechStacks = [
  {
    name: "Android",
    icon: <FaAndroid fontSize="20px" />,
    url: "https://www.android.com/",
  },
  {
    name: "React Native",
    icon: <FaReact fontSize="20px" />,
    url: "https://reactnative.dev/",
  },
  {
    name: "Kotlin",
    icon: <SiKotlin fontSize="20px" />,
    url: "https://kotlinlang.org/",
  },
  {
    name: "Java",
    icon: <FaJava fontSize="20px" />,
    url: "https://www.java.com/en/",
  },
];

const webTechStacks = [
  {
    name: "React",
    icon: <FaReact fontSize="20px" />,
    url: "https://reactnative.dev/",
  },
  {
    name: "NextJS",
    icon: <TbBrandNextjs fontSize="20px" />,
    url: "https://nextjs.org/",
  },
  {
    name: "Typescript",
    icon: <SiTypescript fontSize="20px" />,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Javascript",
    icon: <FaJs fontSize="20px" />,
    url: "https://www.javascript.com/",
  },
  {
    name: "Redux & Redux Saga",
    icon: <SiRedux fontSize="20px" />,
    url: "https://redux.js.org/",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss fontSize="20px" />,
    url: "https://tailwindcss.com/",
  },
  {
    name: "Ant Design",
    icon: <SiAntdesign fontSize="20px" />,
    url: "https://ant.design/",
  },
  {
    name: "SASS",
    icon: <FaSass fontSize="20px" />,
    url: "https://sass-lang.com/",
  },
];

const otherTechStacks = [
  {
    name: "CI/CD - Fastlane",
    icon: <SiFastlane fontSize="20px" />,
    url: "https://fastlane.tools/",
  },
  {
    name: "Firebase",
    icon: <SiFirebase fontSize="20px" />,
    url: "https://firebase.google.com/",
  },
  {
    name: "Github & GitLab",
    icon: <FaGitAlt fontSize="20px" />,
    url: "https://www.gitlab.com/",
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
      "Online Casino Player Portal, built with NextJS, TailwindCSS and MantineUI",
    tech: ["NextJS", "TailwindCSS", "MantineUI", "Zustand"],
  },
  {
    name: "KlusterX Tenant Portal",
    imageUrl: "/klusterx_tenant.png",
    alt: "klusterx",
    summary: "Online Casino Tenant Portal, built with Ant Design Pro",
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
