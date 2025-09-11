import React, { useState, useEffect } from "react";

const Education = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Mock education data - replace with your actual data
  const educationData = [
    {
      id: 1,
      institution: "Adventist University of Central Africa",
      degree: "Bachelor of Science in Computer Science",
      duration: "2023 - Current",
      grade: "16",
      description:
        "Specialized in Software Engineering and Artificial Intelligence. Completed advanced coursework in algorithms, data structures, and Big data.",
      achievements: [],
      skills: [
        "Python",
        "Java",
        "React",
        "Machine Learning",
        "Database Design",
      ],
      logo: "🎓",
      color: "from-blue-500 to-cyan-500",
      bgColor:
        "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % educationData.length);
  };

  const prevCard = () => {
    setActiveCard(
      (prev) => (prev - 1 + educationData.length) % educationData.length
    );
  };

  return (
    <section
      id="education"
      className="py-20 px-6 bg-gradient-to-br from-blue-50 via-lime-50 to-purple-50 dark:from-gray-100 dark:via-indigo-50/20 dark:to-purple-900/20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-50/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-400/30 to-rose-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-indigo-100/50 dark:bg-indigo-900/30 px-4 py-2 rounded-full text-sm font-medium text-indigo-700 dark:text-indigo-300 mb-6 backdrop-blur-sm">
            <span className="animate-bounce">📚</span>
            <span>Academic Journey</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-stone-900 via-lime-800 to-purple-800 dark:from-white dark:via-indigo-200 dark:to-purple-200 bg-clip-text text-transparent">
            Education & Learning
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            My academic background and continuous learning journey in technology
            and innovation
          </p>
        </div>

        {/* Main Education Display */}
        <div className="relative">
          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mb-8">
            {educationData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeCard === index
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 scale-125 shadow-lg"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Education Cards Container */}
          <div className="relative h-auto min-h-[600px] perspective-1000">
            {educationData.map((education, index) => (
              <div
                key={education.id}
                className={`
                  absolute inset-0 transition-all duration-700 ease-in-out transform-gpu
                  ${
                    index === activeCard
                      ? "opacity-100 translate-x-0 scale-100 z-10"
                      : index < activeCard
                      ? "opacity-0 -translate-x-full scale-95 z-0"
                      : "opacity-0 translate-x-full scale-95 z-0"
                  }
                `}
              >
                <EducationCard
                  education={education}
                  isActive={index === activeCard}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevCard}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextCard}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <StatCard icon="🎓" value="3+" label="Degrees & Certifications" />
          <StatCard icon="⭐" value="3.8" label="Average GPA" />
          <StatCard icon="🏆" value="10+" label="Academic Achievements" />
          <StatCard icon="📖" value="40+" label="Courses Completed" />
        </div>
      </div>
    </section>
  );
};

// Individual Education Card Component
const EducationCard = ({ education, isActive }) => {
  return (
    <div
      className={`
      bg-gradient-to-br ${
        education.bgColor
      } backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/20
      transition-all duration-500 hover:shadow-3xl
      ${isActive ? "animate-fadeIn" : ""}
    `}
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Main Info */}
        <div className="space-y-6">
          {/* Institution Header */}
          <div className="flex items-center gap-4">
            <div
              className={`text-5xl p-4 bg-gradient-to-br ${education.color} rounded-2xl shadow-lg`}
            >
              <span className="filter drop-shadow-sm">{education.logo}</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {education.institution}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                {education.duration}
              </p>
            </div>
          </div>

          {/* Degree & Grade */}
          <div className="space-y-3">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {education.degree}
            </h4>
            <div className="inline-flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Grade:
              </span>
              <span
                className={`text-sm font-bold bg-gradient-to-r ${education.color} bg-clip-text text-transparent`}
              >
                {education.grade}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {education.description}
          </p>
        </div>

        {/* Right Column - Details */}
        <div className="space-y-6">
          {/* Achievements */}
          <div>
            <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
              <span>🏆</span> Key Achievements
            </h5>
            <ul className="space-y-2">
              {education.achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                >
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
              <span>⚡</span> Skills Acquired
            </h5>
            <div className="flex flex-wrap gap-2">
              {education.skills.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 bg-gradient-to-r ${education.color} text-white rounded-full text-xs font-medium shadow-md hover:shadow-lg transition-shadow duration-300`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stats Card Component
const StatCard = ({ icon, value, label }) => {
  return (
    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
        {value}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
    </div>
  );
};

// Add custom CSS for animations
const style = document.createElement("style");
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.6s ease-out;
  }
  
  .perspective-1000 {
    perspective: 1000px;
  }
  
  .shadow-3xl {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
  }
`;
document.head.appendChild(style);

export default Education;
