// src/portfolioData.js

export const portfolioData = {
  personalInfo: {
    name: "Narayan Raj Dubey",
    title: "Full-Stack Developer",
    profilePicture: "/profile-picture.jpg",
    summary:
      "Aspiring Frontend Developer with a solid foundation in core Python programming and front-end web technologies (HTML, CSS, JavaScript). Eager to apply my skills in a practical setting and contribute to building efficient and user-friendly applications. A quick learner, passionate about software development and dedicated to continuous skill enhancement .",
    email: "narayanrajdubey9889@gmail.com",
    phone: "7007344437",
    location: "Bhadohi, UP",
    socials: {
      github: "https://github.com/Narayan0918",
      linkedin: "https://www.linkedin.com/in/narayan-raj-dubey-191bb6223",
      Leetcode:"https://leetcode.com/u/0TeDDY0/",
    },
  },
  skills: {
    technical: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Python",
      "DJango",
      "NumPy",
      "Pandas",
      "SQL",
      "MySQL",
      "MongoDB",
      "GitHub",
    ],
    professional: [
      "Strong Interpersonal Communication",
      "Team Leadership & Collaboration",
      "Strategic Task Prioritization",
    ],
  },
  experience: [
    {
      role: "Web Developer Intern",
      company: "iNeuBytes",
      location: "remote",
      duration: "08/2024 - 10/2024",
      description: [
        "Contributed to 5+ responsive web pages, focusing on implementing HTML/CSS layouts and core JavaScript interactivity within a React environment.",
        "Identified and resolved over 20 cross-device layout bugs, ensuring a consistent user experience across different browsers and screen sizes.",
        "Optimized front-end code through strategic refactoring, resulting in a 25% improvement in page load times.",
      ],
    },
  ],
  projects: [
    {
      title: "Localized On-Demand Service Provider Platform",
      techStack: "MERN Stack",
      description:
        " Contributed to the frontend of a full-stack platform in a collaborative college group project. Built the user registration and login forms, including client-side validation to check for empty fields and valid email format.",
      link: "https://service-provider-jzwr.onrender.com/",
    },
    {
      title: "E-commerce Web App",
      techStack: "JavaScript, HTML, CSS",
      description:
        " Refactored a 550-line static HTML/CSS project into a modular React application. Converted hardcoded HTML into dynamic components by rendering product data from a centralized JavaScript array.",
      link: "https://narayan0918.github.io/Bottle-landing-page/",
    },
    {
      title: "Student Polling App",
      techStack: "MERN",
      description:
        "Created a full-stack polling application allowing students to create and participate in polls. Implemented JWT authentication and real-time updates, boosting user interaction by 40%.",
      link: "https://live-polling-app-n7or.onrender.com",
    },
    {
      title: "Unified Alumni Connection Platform",
      techStack: "React.js, Vite, Tailwind CSS, Node.js, Express.js, PostgreSQL",
      description:
        "A multi-tenant full-stack solution (Web & Mobile) for alumni networking, built with React and PostgreSQL using an AI-assisted workflow to optimize architecture and deployment speed.",
      link: "https://live-polling-app-n7or.onrender.com", //need to update the live link
    },
    // ------------------------------------------
    {
      title: "Criminal Law Research Center",
      techStack: "MERN Stack, Next.js, Tailwind CSS, Framer Motion",
      description:
        "Developed a full-stack research platform featuring dynamic content management for blogs, legal publications, and event schedules. Implemented advanced UI animations and a responsive layout to enhance user engagement and accessibility.",
      link: "https://criminal-law-research-vq3v.vercel.app/",
    },
    {
      title: "CLI Banking System",
      techStack: "Python, Custom Exception Handling, Modular Programming",
      description:
        "Designed a modular command-line application simulating core banking operations like deposits, withdrawals, and balance tracking. Implemented robust validation logic and custom exception classes to handle edge cases, ensuring transaction stability and secure input processing.",
      link: "https://github.com/Narayan0918/Banking-project-python.git",
    },
    {
      title: "File-Based Employee Management System",
      techStack: "Python, Pickle (Serialization), File I/O",
      description:
        "Built a modular command-line CRUD application to manage employee records efficiently. Utilized Python's pickle module for binary serialization, enabling persistent data storage and retrieval directly via the file system without requiring an external database.",
      link: "https://github.com/Narayan0918/Employee-Mgmnt-System-Python-.git",
    },
  ],
  education: [
    {
      institution: "Panipat Institute of Engineering and Technology",
      degree: "B-Tech in Computer Science Engineering",
      endDate: "July 2025",
    },
  ],
};
