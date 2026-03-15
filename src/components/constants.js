export const skills = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
      { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" },
      { name: "C", image: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" },
      { name: "PHP", image: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
      { name: "Java", image: "https://www.vectorlogo.zone/logos/java/java-icon.svg" },
      { name: "Python", image: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "HTML5", image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
      { name: "CSS3", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
      { name: "Node.js", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
      { name: "React.js", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
      { name: "Tailwind CSS", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "Express.js", image: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "MySQL", image: "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" },
      { name: "Git", image: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000" },
      { name: "GitHub", image: "https://img.icons8.com/?size=100&id=ARy6tFUfwclb&format=png&color=000000" },
      { name: "Figma", image: "https://img.icons8.com/?size=100&id=W0YEwBDDfTeu&format=png&color=000000" },
      { name: "Postman", image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "MongoDB", image: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem-Solving", image: "https://img.icons8.com/color/100/000000/idea.png" },
      { name: "Team Collaboration", image: "https://img.icons8.com/color/100/000000/group.png" },
      { name: "Inquisitive", image: "https://img.icons8.com/color/100/000000/search.png" },
      { name: "Adaptability", image: "https://img.icons8.com/color/100/000000/change.png" },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "/lpu.png",
    school: "Lovely Professional University Phagwara, Punjab",
    date: "Aug 2023 - Present",
    grade: "8.55 CGPA",
    desc: "Pursuing a B.Tech in Computer Science and Engineering. Focusing on full-stack development and algorithmic problem-solving.",
    degree: "Bachelor of Technology",
  },
  {
    id: 1,
    img: "/dps.jpg",
    school: "SHRI KRISHNA ACA SR SEC School Dholpur, Rajasthan",
    date: "Mar 2021 - May 2022",
    grade: "72.60%",
    desc: "Completed Intermediate education.",
    degree: "Intermediate",
  },
  {
    id: 2,
    img: "/gvps.jpg",
    school: "Mithlesh Aca. Sec. Eng. Med. School Dholpur, Rajasthan",
    date: "May 2019 - May 2020",
    grade: "93.83%",
    desc: "Completed Matriculation with high academic standing.",
    degree: "Matriculation",
  },
];

export const projects = [
  {
    id: 0,
    title: "SafeLynx – Secure Document Hub",
    date: "Oct 2025 - Dec 2025",
    description: "Designed a secure web-based platform to centralize personal, professional, and government document storage while ensuring controlled access, privacy, and easy retrieval. Implemented a full-stack web application using React, Node.js, Express, and MongoDB with secure cloud storage, authentication, document management, and user-centric UI features. Developed a secure document management system supporting file upload, document sharing, role-based authorization, and real-time storage monitoring with scalable backend integration.",
    image: "/safelynx.png",
    tags: ["HTML", "JavaScript", "React.js", "Node.js", "MongoDB"],
    category: "web app",
    github: "https://github.com/Abhigoyal213/SafeLynx-Secure-Document-Hub",
    liveUrl: "https://safe-lynx-secure-document-hub.vercel.app/",
  },
  {
    id: 1,
    title: "UniChat – Real time chat Application",
    date: "Feb 2025 - Apr 2025",
    description: "Planned a secure backend using PHP and MySQL, handling user authentication, session management, and optimized database operations for real-time messaging. Initiated a modular and maintainable PHP architecture with features such as message timestamps, user online/offline status indicators, and a secure password reset system. Created a dynamic front-end using JavaScript and AJAX to enable real-time one-to-one chat functionality with seamless updates without page reloads, improving performance and user experience.",
    image: "/unichat.png",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React", "PHP", "AJAX"],
    category: "web app",
    github: "https://github.com/Abhigoyal213/uniChat_",
  },
  {
    id: 2,
    title: "Sudoku Solver",
    date: "Jun 2025 - Aug 2025",
    description: "Built an automated Sudoku Solver system aimed at reliably validating and solving Sudoku boards ensuring accurate results through a backend-driven workflow. Developed a REST-based backend that validates board states and solves puzzles using an optimized backtracking algorithm, with seamless JSON communication handling between components. Achieved consistent, fast, and accurate puzzle solving with robust input validation, making the solution suitable for educational tools, logic-based gaming platforms, and interactive web applications.",
    image: "/sudoku.png",
    tags: ["HTML", "CSS", "JavaScript", "React.js", "REST API", "Java"],
    category: "web app",
    github: "https://github.com/Abhigoyal213/Sudoku-Solver",
    liveUrl: "https://sudoku-solver-xm0t.onrender.com/",
  }
];
