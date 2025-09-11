import React, { useState, useEffect } from "react";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About", icon: "👋" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "contact", label: "Contact", icon: "📬" },
  ];

  return (
    <nav
      className={`
      fixed top-0 w-full z-50 transition-all duration-500 ease-out
      ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20 py-3"
          : "bg-transparent py-6"
      }
    `}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo with gradient effect */}
          <div className="relative group">
            <h1
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl font-bold bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              HABIYAREMYE Adolphe
            </h1>

            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-teal-400 group-hover:w-full transition-all duration-500"></div>
          </div>

          {/* Modern navigation pills */}
          <div className="hidden md:flex items-center gap-2 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm rounded-full p-2 border border-gray-200/30 dark:border-gray-700/30">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`
        relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group
        ${
          activeSection === item.id
            ? "bg-gradient-to-r from-cyan-500/30 to-purple-500/30 text-white shadow-lg scale-105"
            : "text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-purple-400 hover:bg-cyan-100/30 dark:hover:bg-purple-800/30"
        }
      `}
              >
                <span className="text-xs group-hover:animate-bounce">
                  {item.icon}
                </span>
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 -z-10 animate-pulse"></div>
                )}
              </a>
            ))}

            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2"></div>

            {/* Theme toggle with custom styling */}
            <div className="relative">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button with hamburger animation */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <MobileMenuButton />
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <MobileMenu
        navItems={navItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </nav>
  );
}

// Mobile menu button component
function MobileMenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 group"
    >
      <span
        className={`w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      ></span>
      <span
        className={`w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </button>
  );
}

// Mobile menu component
function MobileMenu({ navItems, activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`
      md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-out
      ${
        isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }
    `}
    >
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-700/30">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsOpen(false);
                }}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                  ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  }
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
