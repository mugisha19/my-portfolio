import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../../api/portfolioAPI";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data, error, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  // Mock categories for filtering (you can adjust based on your data structure)
  const categories = ["all", "web", "mobile", "design", "backend"];

  const filteredProjects =
    data?.filter(
      (project) =>
        selectedCategory === "all" || project.category === selectedCategory
    ) || [];

  if (isLoading) {
    return (
      <section className="py-20 px-6 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white">
        <div className="max-w-7xl mx-auto">
          <ProjectsLoadingSkeleton />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-6 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-8">
            <div className="text-red-500 text-5xl mb-4">⚠️</div>
            <h3 className="text-xl font-semibold text-red-700 dark:text-red-400 mb-2">
              Unable to Load Projects
            </h3>
            <p className="text-red-600 dark:text-red-500">
              There was an error loading the projects. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white overflow-hidden relative"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-400/10 dark:bg-slate-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/50 px-4 py-2 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-6 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50">
            <span className="animate-pulse w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>My Work</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Projects &{" "}
            <span className="text-blue-600 dark:text-blue-400">Creations</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            View my portfolio of technological accomplishments, imaginative
            designs, and creative solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm border
                ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 border-blue-500 scale-105"
                    : "bg-white/70 dark:bg-slate-800/50 text-gray-700 dark:text-slate-300 border-gray-300/50 dark:border-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-700/50 hover:text-gray-900 dark:hover:text-white hover:scale-105"
                }
              `}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredProject === project.id}
              onHover={() => setHoveredProject(project.id)}
              onLeave={() => setHoveredProject(null)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4 opacity-50">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 dark:text-slate-400 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500 dark:text-slate-500">
              Try selecting a different category or check back later
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

// Project Card Component
function ProjectCard({ project, index, isHovered, onHover, onLeave }) {
  return (
    <div
      className={`
        group relative bg-white/80 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl overflow-hidden
        border border-gray-200/50 dark:border-slate-700/50 transition-all duration-500 hover:scale-105
        shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer
        ${isHovered ? "z-10 scale-105" : ""}
      `}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        animationDelay: `${index * 100}ms`,
        animation: "slideInUp 0.6s ease-out forwards",
      }}
    >
      {/* Project Image/Preview */}
      <div className="relative h-48 bg-gray-200/50 dark:bg-slate-700/30 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-4xl opacity-60">
              {project.type === "web"
                ? "🌐"
                : project.type === "mobile"
                ? "📱"
                : project.type === "design"
                ? "🎨"
                : "⚡"}
            </div>
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 dark:from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Status badge */}
        {project.status && (
          <div className="absolute top-4 right-4">
            <span
              className={`
              px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border
              ${
                project.status === "completed"
                  ? "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30"
                  : project.status === "in-progress"
                  ? "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30"
                  : "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30"
              }
            `}
            >
              {project.status.replace("-", " ")}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {project.name}
          </h3>

          {/* External link icon */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg
              className="w-5 h-5 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </div>

        <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        {project.technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-500/20"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 bg-gray-200 dark:bg-slate-700/50 text-gray-600 dark:text-slate-400 rounded-full text-xs font-medium border border-gray-300 dark:border-slate-600/30">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-center"
            >
              Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-400 dark:border-slate-600 text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700/50 rounded-lg text-sm font-medium transition-all duration-300"
            >
              Code
            </a>
          )}
        </div>
      </div>

      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
    </div>
  );
}

// Loading Skeleton Component
function ProjectsLoadingSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Header skeleton */}
      <div className="text-center mb-16">
        <div className="h-8 w-32 bg-gray-300 dark:bg-slate-700 rounded-full mx-auto mb-6"></div>
        <div className="h-12 w-80 bg-gray-300 dark:bg-slate-700 rounded-lg mx-auto mb-4"></div>
        <div className="h-4 w-96 bg-gray-300 dark:bg-slate-700 rounded mx-auto"></div>
      </div>

      {/* Filter skeleton */}
      <div className="flex justify-center gap-3 mb-12">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-10 w-20 bg-gray-300 dark:bg-slate-700 rounded-full"
          ></div>
        ))}
      </div>

      {/* Cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-white/80 dark:bg-slate-800/70 rounded-2xl overflow-hidden"
          >
            <div className="h-48 bg-gray-300 dark:bg-slate-700"></div>
            <div className="p-6">
              <div className="h-6 w-3/4 bg-gray-300 dark:bg-slate-700 rounded mb-3"></div>
              <div className="h-4 w-full bg-gray-300 dark:bg-slate-700 rounded mb-2"></div>
              <div className="h-4 w-2/3 bg-gray-300 dark:bg-slate-700 rounded mb-4"></div>
              <div className="flex gap-2 mb-4">
                <div className="h-6 w-16 bg-gray-300 dark:bg-slate-700 rounded-full"></div>
                <div className="h-6 w-20 bg-gray-300 dark:bg-slate-700 rounded-full"></div>
              </div>
              <div className="flex gap-3">
                <div className="h-8 flex-1 bg-gray-300 dark:bg-slate-700 rounded"></div>
                <div className="h-8 w-16 bg-gray-300 dark:bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Add CSS for animations
const style = document.createElement("style");
style.textContent = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
document.head.appendChild(style);
