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
    title: "SafeLynx — Secure Document Hub",
    date: "Oct '25 — Dec '25",
    description: "A secure MERN-stack platform for centralizing and managing sensitive personal and government documents. Features role-based access control, file sharing, and real-time storage monitoring.",
    image: "/safelynx.png",
    tags: ["HTML", "JavaScript", "React.js", "Node.js", "MongoDB"],
    category: "web app",
    github: "https://github.com/Abhigoyal213/SafeLynx-Secure-Document-Hub",
    liveUrl: "https://safe-lynx-secure-document-hub.vercel.app/",
  },
  {
    id: 1,
    title: "UniChat — Real Time Chat Application",
    date: "Feb '25 — Apr '25",
    description: "Real-time communication platform built on a modular PHP & MySQL backend. Features live messaging via AJAX, online/offline status tracking, and robust session management.",
    image: "/unichat.png",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React", "PHP", "AJAX"],
    category: "web app",
    github: "https://github.com/Abhigoyal213/uniChat_",
  },
  {
    id: 2,
    title: "Sudoku Solver",
    date: "Jun '25 — Aug '25",
    description: "Interactive web application powered by a Java REST API using an optimized backtracking algorithm. Automatically validates grid states and mathematically solves complex puzzles natively.",
    image: "/sudoku.png",
    tags: ["HTML", "CSS", "JavaScript", "React.js", "REST API", "Java"],
    category: "web app",
    github: "https://github.com/Abhigoyal213/Sudoku-Solver",
    liveUrl: "https://sudoku-solver-xm0t.onrender.com/",
  }
];

export const certifications = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    link: "https://drive.google.com/file/d/1Dx3QqI5MUkF65AyQ06ko6bcfxW6RUijR/view?usp=drive_link",
    image: "/nptel.png",
    period: "Jun '25",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    link: "https://drive.google.com/file/d/11b-Y1mJLahOkGXA_1f3avHrX8-NTDqe5/view?usp=drive_link",
    image: "/postman.png",
    period: "Sep '25",
  },
];
