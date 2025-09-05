// src/portfolioData.js

export const portfolioData = {
  personalInfo: {
    name: "Narayan Raj Dubey",
    title: "Full-Stack Web Developer",
    profilePicture: "/profile-picture.jpg", // Add this line
    summary: "Results-driven Computer Science graduate specializing in full-stack web development with the MERN stack (MongoDB, Express.js, React, Node.js). Proven ability to deliver scalable, high-performance web applications, demonstrated through internship experience and personal projects. Driven to create efficient, user-centric solutions.",
    email: "narayanrajdubey9889@gmail.com",
    phone: "7007344437",
    location: "Bhadohi, UP",
    socials: {
      github: "https://github.com/Narayan0918", // Replace # with your actual GitHub link
      linkedin: "https://www.linkedin.com/in/narayan-raj-dubey-191bb6223", // Replace # with your actual LinkedIn link
    },
  },
  skills: {
    technical: [
      "Java",
      "JavaScript",
      "SQL",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Netlify",
      "Render",
      "MySQL",
      "GitHub",
      "ChatGPT",
      "Gemini",
      "Claude",
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
        "Built 5+ responsive web pages using HTML, CSS, JavaScript, and React.",
        "Resolved 20+ cross-device layout issues, improving Ul consistency across platforms.",
        "Pushed 30+ code commits using Git and GitHub in agile sprint cycles.",
        "Code cleanup improved load time by ~25%.",
      ],
    },
  ],
  projects: [
    {
      title: "Localized On-Demand Service Provider Platform",
      techStack: "MERN Stack",
      description:
        "Engineered a full-stack platform enabling users to book verified local service workers. Implemented secure, role-based authentication and real-time messaging, increasing user engagement by 30%.",
      link: "https://service-provider-jzwr.onrender.com/", // Replace # with your project link
    },
    {
      title: "E-commerce Web App",
      techStack: "JavaScript, HTML, CSS",
      description:
        "Built a responsive e-commerce interface with category filtering, product modals, and client-side search, achieving sub-2.5 second load times and enhanced SEO.",
      link: "https://narayan0918.github.io/Bottle-landing-page/", // Replace # with your project link
    },
    {
      title: "Student Polling App",
      techStack: "MERN",
      description:
        "Created a full-stack polling application allowing students to create and participate in polls. Implemented JWT authentication and real-time updates, boosting user interaction by 40%.",
      link: "https://live-polling-app-n7or.onrender.com", // Replace # with your project link
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
