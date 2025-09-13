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
        "from-gray-100/80 to-gray-50/80 dark:from-slate-800/40 dark:to-slate-700/40",
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
      className="py-20 px-6 bg-white dark:bg-slate-900 text-gray-900 dark:text-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gray-400/10 dark:bg-slate-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-6 border border-gray-200/50 dark:border-slate-700/50">
            <span className="animate-bounce">📚</span>
            <span>Academic Journey</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Education &{" "}
            <span className="text-blue-600 dark:text-blue-400">Learning</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
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
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 scale-125 shadow-lg"
                    : "bg-gray-400 dark:bg-slate-600 hover:bg-gray-500 dark:hover:bg-slate-500"
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-200/50 dark:border-slate-700/50"
          >
            <svg
              className="w-6 h-6 text-gray-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
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
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-200/50 dark:border-slate-700/50"
          >
            <svg
              className="w-6 h-6 text-gray-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
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
      } backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/30 dark:border-slate-700/30
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
              <p className="text-gray-600 dark:text-slate-400 font-medium">
                {education.duration}
              </p>
            </div>
          </div>

          {/* Degree & Grade */}
          <div className="space-y-3">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-slate-200">
              {education.degree}
            </h4>
            <div className="inline-flex items-center gap-2 bg-white/50 dark:bg-slate-800/50 px-4 py-2 rounded-full border border-gray-200/50 dark:border-slate-700/50">
              <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
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
          <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
            {education.description}
          </p>
        </div>

        {/* Right Column - Details */}
        <div className="space-y-6">
          {/* Achievements */}
          <div>
            <h5 className="text-lg font-semibold text-gray-800 dark:text-slate-200 mb-3 flex items-center gap-2">
              <span>🏆</span> Key Achievements
            </h5>
            <ul className="space-y-2">
              {education.achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-600 dark:text-slate-400"
                >
                  <span className="text-green-500 dark:text-green-400 mt-1">
                    ✓
                  </span>
                  <span className="text-sm">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h5 className="text-lg font-semibold text-gray-800 dark:text-slate-200 mb-3 flex items-center gap-2">
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
    <div className="bg-white/80 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200/50 dark:border-slate-700/50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
        {value}
      </div>
      <div className="text-sm text-gray-600 dark:text-slate-400">{label}</div>
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
