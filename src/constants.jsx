// Skills Section Logos
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import IntelliJIDEALogo from "./assets/tech_logo/IntelliJIDEA.png";
import javaLogo from "./assets/tech_logo/javalogo.png";

// // Experience Section Logos
// import CSlogo from "./assets/company/CSlogo.png";
// import agc from "./assets/company/agc.webp"


// Project Section Logo's
import techblog from './assets/project/tech_blog.png';
import photography from './assets/project/photography.png';
import password from './assets/project/password.png';
import todo from './assets/project/todo.png';
import currency from './assets/project/currency.png'


// Education Section Logo's

import bca from './assets/education_logo/bca.png';
import ba from './assets/education_logo/ba.png';
import pr from './assets/education_logo/pr.png';
import ss from './assets/education_logo/ss.png';

// SKILLS 
export const SkillsInfo = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", logo: htmlLogo },
            { name: "CSS", logo: cssLogo },
            { name: "JavaScript", logo: javascriptLogo },
            { name: "React JS", logo: reactjsLogo },
            { name: "Tailwind CSS", logo: tailwindcssLogo },
            { name: "Bootstrap", logo: bootstrapLogo },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node JS", logo: nodejsLogo },
            { name: "Express JS", logo: expressjsLogo },
            { name: "MySQL", logo: mysqlLogo },
        ],
    },
    {
        title: "Languages",
        skills: [
            { name: "JavaScript", logo: javascriptLogo },
            { name: "Java", logo: javaLogo },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", logo: gitLogo },
            { name: "GitHub", logo: githubLogo },
            { name: "VS Code", logo: vscodeLogo },
            { name: "IntelliJ IDEA", logo: IntelliJIDEALogo },
        ],
    },
];

// // EXPERIENCES
// export const experiences = [
//     {
//         id: 0,
//         img: CSlogo,
//         role: "Production Helper",
//         company: "C&S Electric",
//         date: "March 2018 - Jun 2022",
//         desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
//         skills: [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React JS",
//             "Node JS",
//             "Tailwind CSS",
//             "Next JS",
//         ],
//     },
//     {
//         id: 1,
//         img: agc,
//         role: "Fullstack Engineer",
//         company: "Agumentik Group of Companies",
//         date: "July 2023 - March 2024",
//         desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
//         skills: [
//             "ReactJS",
//             "Redux",
//             "JavaScript",
//             "Tailwind CSS",
//             "HTML",
//             "CSS",
//             "SQL",
//         ],
//     },
// ];



export const projects = [
    {
        id: 0,
        title: "iCoder",
        description:
            "iCoder is basically a tech blogging platform built using Bootstrap and modern frontend tools. It is designed to be simple, responsive, and user-friendly, making it easy for readers to explore technology content.The entire website is fully responsive, meaning it adapts to all screen sizes – mobile, tablet, and desktop.The blog section is designed to display posts dynamically. Each post includes a title, and short description, making it easy for readers to quickly scan and choose what to read.",
        image: techblog,
        tags: ["HTML", "CSS", "Bootstrap"],
        github: "https://github.com/yogeshrajputom/Tech_Blogs",
        webapp: "https://tech-blogs-indol.vercel.app",
    },
    {
        id: 1,
        title: "Photography Side Bar",
        description:
            "Photography Side Bar is a minimalist, front-end web interface showcasing a sidebar navigation menu, built using basic web technologies like HTML and CSS. It presents a clean and functional layout—a great foundation for galleries, portfolios, or content-driven sites.",
        image: photography,
        tags: ["HTML", "CSS0"],
        github: "https://github.com/yogeshrajputom/Photos_sidebar",
        webapp: "https://photos-sidebar.vercel.app",
    },
    {
        id: 2,
        title: "Password Creator",
        description:
            "Password Creator is a sleek, front-end password generation tool built using Vite and React.Customizable Password Generation with adjust the number of characters in the password.",
        image: password,
        tags: ["React JS", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
        github: "https://github.com/yogeshrajputom/Password_Creator",
        webapp: "https://password-creator-kappa.vercel.app/",
    },
    {
        id: 3,
        title: "iToDo - Create Your Next Plan List",
        description:
            "iToDo is a modern, lightweight task management web app built with React, Vite, and Tailwind CSS. It provides users with a clean and intuitive interface to manage their daily tasks effectively.Fully responsive layout that adapts seamlessly to mobile, tablet, and desktop screens.",
        image: todo,
        tags: ["React JS", "Tailwind Css",],
        github: "https://github.com/yogeshrajputom/iToDo",
        webapp: "https://i-to-do.vercel.app",
    },
    {
        id: 4,
        title: "Currency Convertor - Convert Your Courrency",
        description:
            "Currency Converter is a user-friendly, web-based tool built with HTML, CSS, API, and JavaScript.It enables users to convert amounts across a wide range of world currencies—all using a clean, responsive interface.",
        image: currency,
        tags: ["JavaScript", "API", "HTML", "CSS"],
        github: "https://github.com/yogeshrajputom/currencyConvertor",
        webapp: "https://currency-convertor-six-olive.vercel.app/",
    },
];


export const education = [
    {
        id: 0,
        img: bca,
        school: "Kulbhaskar Ashram PG College",
        date: "2022 July - 2025 July",
        grade: "7.208",
        desc: "I have completed my Bachelor degree (BCA) in Computer Applications from Kulbhaskar Ashram PG College, Pryagraj. During my time at college, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Kulbhaskar Ashram College has been instrumental in shaping my technical abilities and professional growth.",
        degree: "Bachelor of Computer Applicatin - BCA",
    },
    {
        id: 1,
        img: ba,
        school: "Sri Shsnksr Singh Mahavidyalaya, Sidhpur  Kasganj",
        date: "Jun 2018 - Jun 2021",
        grade: "59.33%",
        desc: "I completed my Bachelor's degree in Bechelor of Art (B.A) from SSS  College, Sidhpur Kasganj. ",
    },
    {
        id: 2,
        img: pr,
        school: " P R Inter College, Sidhpur Kasganj ",
        date: "Jun 2015 - Jun 2016",
        grade: "58.8%",
        desc: "I completed my class 12 education from P R Inter College, Sidhpur Kasganj, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM).",
        degree: "HINDI (XII) - PCM ",
    },
    {
        id: 3,
        img: ss,
        school: "Subhash Inter College,  Naugaon Kasganj",
        date: "Jun 2013 - Jun 2014",
        grade: "72.5%",
        desc: "I completed my class 10 education from Subhash Inter College,  Naugaon Kasganj, under the UP board, where I studied Science .",
        degree: "HINDI (X), Science",
    },
];
