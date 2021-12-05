import { SiKotlin, SiFirebase, SiFastlane, SiGmail} from 'react-icons/si';
import { FaReact, FaJs, FaGitAlt, FaAndroid, FaJava, FaLinkedin, FaStackOverflow, FaMedium } from "react-icons/fa";

const menuLinks = [
    { name: "Home", route: "/" },
    { name: "About Me", route: "/about" },
    { name: "Experience", route: "/experience" },
    { name: "Projects", route: "/projects" },
    { name: "Contact", route: "/contact" },
]

const socialButtons = [
    {
        url: "https://www.linkedin.com/in/teo-wen-long-19960316/",
        icon: <FaLinkedin />,
        name: "Linkedin"
    },
    {
        url: "https://stackoverflow.com/users/12261890/teo",
        icon: <FaStackOverflow />,
        name: "StackOverflow"
    },
    {
        url: "https://skynight1996.medium.com/",
        icon: <FaMedium />,
        name: "Medium"
    },
    {
        url: "mailto:teowenlong0316@gmail.com",
        icon: <SiGmail />,
        name: "Gmail"
    }
]

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

export {menuLinks, techStacks, socialButtons}