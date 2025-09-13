// src/api/portfolioAPI.js
export async function fetchProjects() {
  return [
    {
      id: 1,
      name: "Portfolio Website",
      description: "My personal portfolio built with React and Tailwind CSS.",
      category: "web",
      technologies: ["React", "Tailwind", "Framer Motion"],
      status: "completed",
      liveUrl: "https://habiyaremyeadolphe.netlify.app/",
      githubUrl: "https://github.com/mugisha19/my-portfolio",
      image: "/projects/project.png", // store in public/projects/
    },
    {
      id: 2,
      name: "gemini-clone",
      description:
        "Grmini is a compact and efficient task management and productivity app designed to help users organize their work, track goals, and boost efficiency.",
      category: "web",
      technologies: ["React", "Postgres"],
      status: "in-progress",
      githubUrl: "https://github.com/mugisha19/gemini-clone",
      image: "/projects/project.png",
    },
    {
      id: 3,
      name: "Malaria_diagnosis",
      description:
        "Uses machine learning to analyze blood smear images and detect malaria parasites..",
      category: "mobile",
      technologies: ["Python", "Expo", "Flask"],
      status: "completed",
      githubUrl: "https://github.com/mugisha19/malaria_diagnosis",
      image: "/projects/project.png",
    },
    {
      id: 4,
      name: "the-wild-oasis",
      description:
        "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests.",
      category: "web",
      technologies: ["React", "Supabase", "React Querry Managing State"],
      status: "in-progress",
      githubUrl: "https://github.com/mugisha19/the-wild-oasis",
      image: "/projects/project.png",
    },
    {
      id: 5,
      name: "Venue-management-system",
      description: "Backend API built with Java.",
      category: "backend",
      technologies: ["java", "Spring boot", "React"],
      status: "completed",
      githubUrl: "https://github.com/mugisha19/Venue-management-system",
      image: "/projects/project.png",
    },
    {
      id: 6,
      name: "Worldwise",
      description:
        "Worldwise is an interactive travel and geography exploration app designed to help users discover countries, cultures, and global facts in a fun and educational way.",
      category: "web",
      technologies: ["React", "Postgres"],
      status: "completed",
      githubUrl: "https://github.com/mugisha19/Worldwise",
      image: "/projects/project.png",
    },
    {
      id: 7,
      name: "Apple-eCommerse Clone",
      description:
        "Apple-eCommerce is a modern online shopping and retail app designed to provide users with a seamless and engaging shopping experience. It combines a sleek interface with powerful features to browse, buy, and track products efficiently.",
      category: "web",
      technologies: ["HTML", "Bootstrap", "Javascript(ES6)"],
      status: "completed",
      githubUrl: "https://github.com/mugisha19/Apple-eCommerse",
      image: "/projects/project.png",
    },
    {
      id: 8,
      name: "Creative-Design",
      description:
        "Creative-Design is an intuitive graphic design and creativity app that allows users to create stunning visuals, artwork, and digital content with ease. It combines powerful tools with a user-friendly interface, making it perfect for beginners and professionals alike.",
      category: "web",
      technologies: ["HTML", "Bootstrap", "Javascript(ES6)"],
      status: "completed",
      githubUrl: "https://github.com/mugisha19/Creative-Design",
      image: "/projects/project.png",
    },
    {
      id: 9,
      name: "Omnifood-project",
      description:
        "Omnifood-Project is a food delivery and meal planning app designed to provide users with healthy, convenient, and customizable meal options. It combines smart recommendations, easy ordering, and nutrition tracking to help users maintain a balanced diet.",
      category: "web",
      technologies: ["HTML", "Css", "Javascript(ES6)"],
      status: "completed",
      githubUrl: "https://github.com/mugisha19/Creative-Design",
      image: "/projects/project.png",
    },
  ];
}
