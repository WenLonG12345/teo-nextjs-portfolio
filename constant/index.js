import { SiKotlin, SiFirebase, SiFastlane, SiGmail } from 'react-icons/si';
import { FaReact, FaJs, FaGitAlt, FaAndroid, FaJava, FaLinkedin, FaStackOverflow, FaMedium, FaGithub } from "react-icons/fa";
import { CgAlbum } from "react-icons/cg";
import { FiMail } from "react-icons/fi";

const menuLinks = [
    { name: "About Me", route: "/about" },
    // { name: "Experience", route: "/experience" },
    { name: "Projects", route: "/projects" },
    { name: "Contact", route: "/contact" },
]

const siteConfig = {
    copyright: `Copyright © ${new Date().getFullYear()} Teo Wen Long. All Rights Reserved.`,
    author: {
        name: "Teo Wen Long",
        accounts: [
            {
                url: "https://github.com/WenLonG12345",
                icon: <FaGithub />,
                name: "Github",
                type: "gray"
            },
            {
                url: "https://www.linkedin.com/in/teo-wen-long-19960316/",
                icon: <FaLinkedin />,
                name: "Linkedin",
                type: "linkedin"
            },
            {
                url: "https://stackoverflow.com/users/12261890/teo",
                icon: <FaStackOverflow />,
                name: "StackOverflow",
                type: "orange"
            },
            {
                url: "https://skynight1996.medium.com/",
                icon: <FaMedium />,
                name: "Medium",
                type: "gray"
            },
            {
                url: "mailto:teowenlong0316@gmail.com",
                icon: <SiGmail />,
                name: "Gmail",
                type: "red"
            }
        ]
    }
}

const resume = {
    url: "https://drive.google.com/file/d/1uU61rGC1q_bxADdtqLvc1NPvH9GYDKbJ/view?usp=sharing",
    icon: <CgAlbum />,
    name: "Resume"
}

const techStacks = [
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
    {
        name: "Javascript",
        icon: <FaJs fontSize="20px" />,
        url: "https://www.javascript.com/",
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
    {
        name: "CI/CD - Fastlane",
        icon: <SiFastlane fontSize="20px" />,
        url: "https://fastlane.tools/",
    },
]

const companies = [
    {
        title: "Qumon Intelligence",
        alt: "qumon image",
        url: 'https://www.qumonintelligence.com/',
        role: "Mobile Application Developer",
        skills: ["Kotlin", "Java", "Android", "Javascript", "React", "React Native"],
        period: "Aug 2020 - Present",
        logo: '/qumon.png'
    },
    {
        title: "TimeTec Cloud Sdn Bhd",
        alt: "timetec image",
        url: "https://www.timeteccloud.com/",
        role: "Mobile Application Developer Intern",
        skills: ["Java", "Android", "C#", "Appium Automation Testing","AWS"],
        period: "Jul 2019 - Jan 2020",
        logo: '/timetec.png'
    }
]

const educations = [
    {
        title: "University Technology Malaysia (UTM)",
        alt: "utm image",
        url: 'https://www.utm.my/',
        role: "Bachelor's Degree in Computer Science (Network and Security)",
        skills: ["CGPA - 3.79", "CCNA", "Security Management", "Network Security"],
        period: "Sept 2016 - Sept 2020",
        logo: '/utm.png'
    },
    {
        title: "SMK Mentakab",
        alt: "smk image",
        url: 'https://www.facebook.com/pages/category/College---university/Sekolah-Menengah-Kebangsaan-Mentakab-224802077565350/',
        role: "STPM - Science Stream (Physics)",
        skills: ["CGPA - 3.33", "Math T", "Physics", "Chemistry"],
        period: "Jan 2015 - Jun 2016",
        logo: '/smk.png'
    },

]

export { menuLinks, techStacks, siteConfig, resume, companies, educations }