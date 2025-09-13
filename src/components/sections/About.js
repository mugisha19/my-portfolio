import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { number: "1+", label: "Years Experience" },
    { number: "15+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Available Support" },
  ];

  const highlights = [
    {
      title: "Full Stack Development",
      description:
        "End-to-end web application development with modern technologies",
      icon: "🔧",
    },
    {
      title: "Problem Solving",
      description: "Creative solutions to complex technical challenges",
      icon: "💡",
    },
    {
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices",
      icon: "📚",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 lg:px-32 bg-white dark:bg-slate-900 text-gray-900 dark:text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-gray-400/5 dark:bg-slate-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-gray-400 dark:from-blue-500 dark:to-slate-400 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-slate-300">
                Hi there! I'm Adolphe 👋
              </h3>
              <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                Extremely motivated{" "}
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  Full Stack Developer
                </span>{" "}
                who adores crafting outstanding digital experiences. My domain
                of expertise is creating innovative, scalable web apps that work
                seamlessly and look stunning.
              </p>
              <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                Enthusiasm started my development career, which has now grown
                into a dedication to writing clear, manageable code. I think
                technology has the ability to solve practical issues and produce
                worthwhile user experiences.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-700 dark:text-slate-300 mb-4">
                What I Focus On
              </h4>
              <div className="space-y-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-gray-100/50 dark:bg-slate-800/30 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/30 hover:bg-gray-200/50 dark:hover:bg-slate-700/50 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white">
                        {item.title}
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Stats & Visual */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gray-100/70 dark:bg-slate-800/40 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-slate-700/30 hover:bg-gray-200/70 dark:hover:bg-slate-700/60 transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.9 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600 dark:text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Visual Element */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-100/80 to-gray-50/80 dark:from-slate-800/60 dark:to-slate-700/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-slate-700/30 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 border-2 border-blue-500/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-500/10 rounded-lg rotate-12"></div>

                <div className="relative z-10">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Currently Working With
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Node.js",
                      "SQL",
                      "Python",
                      "PostgreSQL",
                      "Java",
                      "JavaScript(ES6)",
                    ].map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-gray-200/70 dark:bg-slate-700/50 text-gray-700 dark:text-slate-300 text-sm rounded-full border border-gray-300/50 dark:border-slate-600/30 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
