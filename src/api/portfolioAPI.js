// src/api/portfolioAPI.js
export async function fetchProjects() {
  return [
    {
      id: 1,
      name: "Portfolio Website",
      description:
        "My personal portfolio built with React and Tailwind CSS, featuring dark mode, smooth animations, and a responsive design.",
      category: "web",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      status: "completed",
      liveUrl: "https://habiyaremyeadolphe.netlify.app/",
      githubUrl: "https://github.com/mugisha19/my-portfolio",
      image: "/projects/project.png",
    },
    {
      id: 2,
      name: "Gemini Clone",
      description:
        "A clone of Google's Gemini AI assistant interface, featuring real-time chat interactions and a modern, clean UI built with React.",
      category: "web",
      technologies: ["React", "PostgreSQL"],
      status: "in-progress",
      githubUrl: "https://github.com/mugisha19/gemini-clone",
      image: "/projects/project.png",
    },
    {
      id: 3,
      name: "Malaria Diagnosis",
      description:
        "A machine learning application that analyzes blood smear images to detect malaria parasites, with a mobile-friendly interface powered by Flask and Expo.",
      category: "mobile",
      technologies: ["Python", "Expo", "Flask", "Machine Learning"],
      status: "completed",
      githubUrl: "https://github.com/mugisha19/malaria_diagnosis",
      image: "/projects/project.png",
    },
    {
      id: 4,
      name: "The Wild Oasis",
      description:
        "A hotel management application for a luxurious cabin retreat in the Italian Dolomites, featuring booking management, guest check-ins, and real-time data via Supabase.",
      category: "web",
      technologies: ["React", "Supabase", "React Query", "Styled Components"],
      status: "in-progress",
      githubUrl: "https://github.com/mugisha19/the-wild-oasis",
      image: "/projects/project.png",
    },
    {
      id: 5,
      name: "Venue Management System",
      description:
        "A full-stack venue management platform with a Spring Boot backend API and React frontend for managing events, bookings, and venue details.",
      category: "backend",
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL"],
      status: "completed",
      githubUrl: "https://github.com/mugisha19/Venue-management-system",
      image: "/projects/project.png",
    },
    {
      id: 6,
      name: "Worldwise",
      description:
        "An interactive travel and geography exploration app that lets users track visited countries, discover cultures, and log travel experiences on an interactive map.",
      category: "web",
      technologies: ["React", "PostgreSQL", "Leaflet"],
      status: "completed",
      githubUrl: "https://github.com/mugisha19/Worldwise",
      image: "/projects/project.png",
    },
    {
      id: 7,
      name: "Apple eCommerce Clone",
      description:
        "A pixel-perfect clone of Apple's online store, featuring a sleek product showcase, responsive design, and smooth shopping experience built with vanilla web technologies.",
      category: "web",
      technologies: ["HTML", "Bootstrap", "JavaScript (ES6)"],
      status: "completed",
      githubUrl: "https://github.com/mugisha19/Apple-eCommerse",
      image: "/projects/Apple-eCommerse.png",
    },
    {
      id: 8,
      name: "Creative Design",
      description:
        "A modern creative design landing page showcasing graphic design services with stunning visuals, smooth animations, and an intuitive user-friendly interface.",
      category: "design",
      technologies: ["HTML", "Bootstrap", "JavaScript (ES6)"],
      status: "completed",
      githubUrl: "https://github.com/mugisha19/Creative-Design",
      image: "/projects/Creative-Design.png",
    },
    {
      id: 9,
      name: "Omnifood",
      description:
        "A modern food delivery and meal planning landing page designed to showcase healthy, convenient meal options with smart recommendations and responsive design.",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript (ES6)"],
      status: "completed",
      githubUrl: "https://github.com/mugisha19/Omnifood-project",
      image: "/projects/Omnifood-project.png",
    },
  ];
}
