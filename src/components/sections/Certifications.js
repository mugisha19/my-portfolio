import React from "react";
import { motion } from "framer-motion";

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "React - The Complete Guide",
      issuer: "Udemy",
      date: "2024",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-600",
      skills: ["React", "Redux", "Next.js", "React Router"],
      description:
        "Comprehensive course covering React fundamentals, hooks, context API, Redux, and Next.js for building modern web applications.",
    },
    {
      id: 2,
      title: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
      icon: "🏅",
      color: "from-yellow-500 to-orange-500",
      skills: ["JavaScript", "ES6+", "Algorithms", "Data Structures"],
      description:
        "Mastered core JavaScript concepts including ES6+ syntax, object-oriented programming, functional programming, and algorithmic problem solving.",
    },
    {
      id: 3,
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      icon: "🎨",
      color: "from-pink-500 to-rose-500",
      skills: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Accessibility"],
      description:
        "Built responsive websites using modern CSS techniques including Flexbox, Grid, media queries, and accessibility best practices.",
    },
    {
      id: 4,
      title: "Python for Data Science & Machine Learning",
      issuer: "Udemy",
      date: "2024",
      icon: "🐍",
      color: "from-green-500 to-emerald-600",
      skills: ["Python", "NumPy", "Pandas", "Scikit-learn"],
      description:
        "Learned Python for data analysis, visualization, and machine learning fundamentals including supervised and unsupervised learning algorithms.",
    },
    {
      id: 5,
      title: "Git & GitHub Masterclass",
      issuer: "Udemy",
      date: "2023",
      icon: "📋",
      color: "from-gray-600 to-gray-800",
      skills: ["Git", "GitHub", "Version Control", "CI/CD"],
      description:
        "Mastered Git version control including branching strategies, merge conflict resolution, pull requests, and collaborative workflows.",
    },
    {
      id: 6,
      title: "Java Programming Masterclass",
      issuer: "Udemy",
      date: "2024",
      icon: "☕",
      color: "from-red-500 to-orange-600",
      skills: ["Java", "OOP", "Spring Boot", "REST APIs"],
      description:
        "Comprehensive Java course covering object-oriented programming, collections, generics, Spring Boot, and building RESTful web services.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="certifications"
      className="py-20 px-6 md:px-16 lg:px-32 bg-white dark:bg-slate-900 text-gray-900 dark:text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-6 border border-gray-200/50 dark:border-slate-700/50"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="animate-pulse w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>Professional Development</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Certifications &{" "}
            <span className="text-blue-600 dark:text-blue-400">Courses</span>
          </motion.h2>

          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-500 dark:to-purple-400 rounded-full mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-gray-600 dark:text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Continuous learning is at the core of my development journey. Here
            are some of the certifications and courses I've completed to sharpen
            my skills.
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              className="group relative bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 dark:border-slate-700/30 hover:border-gray-300 dark:hover:border-slate-600/50 transition-all duration-500 hover:shadow-xl"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Top Gradient Bar */}
              <div
                className={`h-1.5 bg-gradient-to-r ${cert.color} w-full`}
              ></div>

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`text-3xl p-3 bg-gradient-to-br ${cert.color} rounded-xl shadow-lg flex-shrink-0`}
                  >
                    <span className="filter drop-shadow-sm">{cert.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {cert.issuer}
                      </span>
                      <span className="text-gray-400 dark:text-slate-600">
                        •
                      </span>
                      <span className="text-sm text-gray-500 dark:text-slate-500">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-gray-100/80 dark:bg-slate-700/50 text-gray-700 dark:text-slate-300 text-xs font-medium rounded-full border border-gray-200/50 dark:border-slate-600/30 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-100/70 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-slate-700/30 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-2xl">🚀</span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Always Learning
              </h3>
            </div>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              I'm currently exploring advanced topics in{" "}
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                Cloud Architecture
              </span>
              ,{" "}
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                DevOps
              </span>
              , and{" "}
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                Mobile Development
              </span>
              . The tech landscape never stops evolving, and neither do I.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
