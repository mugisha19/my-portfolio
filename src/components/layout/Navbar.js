import React, { useState, useEffect } from "react";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "education",
        "experiences",
        "contact",
      ];
      let currentSection = "hero"; // Default to hero

      // Find the section that's currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is in the upper part of the viewport
          if (rect.top <= 150) {
            currentSection = sections[i];
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Initial call to set the correct section on page load
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "experiences", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 w-full z-50 transition-all duration-300 ease-out
          ${
            isScrolled
              ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200/30 dark:border-slate-700/30 py-4"
              : "bg-transparent py-6"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div
              onClick={() => handleNavClick("hero")}
              className="flex items-center cursor-pointer group"
            >
              <div className="relative">
                <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  Adolphe H.
                </h1>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-1 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-full p-1 border border-gray-200/50 dark:border-slate-700/50">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                      ${
                        activeSection === item.id
                          ? "text-white bg-blue-600 dark:bg-slate-700/80 shadow-lg"
                          : "text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700/40"
                      }
                    `}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-500/20 dark:from-blue-600/20 dark:to-slate-600/20 -z-10"></div>
                    )}
                  </button>
                ))}
              </div>

              <div className="ml-4 pl-4 border-l border-gray-300/50 dark:border-slate-700/50">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-6 h-6 flex flex-col justify-center items-center"
                aria-label="Toggle mobile menu"
              >
                <span
                  className={`absolute w-6 h-0.5 bg-gray-700 dark:bg-slate-300 transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`absolute w-6 h-0.5 bg-gray-700 dark:bg-slate-300 transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute w-6 h-0.5 bg-gray-700 dark:bg-slate-300 transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden fixed inset-0 z-40 transition-all duration-300 ease-out
          ${isMobileMenuOpen ? "visible" : "invisible"}
        `}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-gray-900/80 dark:bg-slate-900/80 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`
            absolute top-0 right-0 w-72 h-full bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border-l border-gray-200/30 dark:border-slate-700/30
            transition-transform duration-300 ease-out
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200/30 dark:border-slate-700/30">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Navigation
              </h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-slate-700/50 transition-colors duration-200"
                aria-label="Close menu"
              >
                <span className="w-5 h-0.5 bg-gray-700 dark:bg-slate-300 rotate-45 absolute" />
                <span className="w-5 h-0.5 bg-gray-700 dark:bg-slate-300 -rotate-45 absolute" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 px-6 py-8">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      w-full flex items-center px-4 py-3 rounded-lg text-left transition-all duration-300
                      ${
                        activeSection === item.id
                          ? "bg-blue-600 dark:bg-slate-700/80 text-white border-l-2 border-blue-500"
                          : "text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700/40"
                      }
                    `}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMobileMenuOpen
                        ? "slideInRight 0.3s ease-out forwards"
                        : "none",
                    }}
                  >
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200/30 dark:border-slate-700/30">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-slate-400">
                  © 2024 Adolphe H.
                </span>
                <div className="flex space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-gray-600 dark:text-slate-400">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
