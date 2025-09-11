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
      liveUrl: "https://yourportfolio.com",
      githubUrl: "https://github.com/username/portfolio",
      image: "/projects/portfolio.png", // store in public/projects/
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
      image: "/projects/ecommerce.png",
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
      image: "/projects/fitness.png",
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
      image: "/projects/design.png",
    },
    {
      id: 5,
      name: "Venue-management-system",
      description: "Backend API built with Java.",
      category: "backend",
      technologies: ["java", "Spring boot", "React"],
      status: "completed",
      githubUrl: "https://github.com/mugisha19/Venue-management-system",
      image: "/projects/backend.png",
    },
  ];
}
