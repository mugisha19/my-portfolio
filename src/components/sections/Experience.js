import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Baho Coffee",
    period: "Jan 2023 - Present",
    details:
      "Developed modern web applications using React, Tailwind CSS, and Redux.",
  },
  {
    id: 2,
    role: "Intern Software Engineer",
    company: "Tech Solutions",
    period: "Jun 2022 - Dec 2022",
    details:
      "Assisted in building responsive UI components and learned best practices in code architecture.",
  },
];

export default function Experience() {
  return (
    <section
      id="experiences"
      className="py-20 px-6 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Professional{" "}
            <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-gray-400 dark:from-blue-500 dark:to-slate-400 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-slate-700/30 hover:scale-105"
            >
              {/* Role and Company */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {exp.role}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                  {exp.company}
                </p>
                <span className="text-sm text-gray-600 dark:text-slate-400 font-medium">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                {exp.details}
              </p>

              {/* Decorative Element */}
              <div className="mt-6 pt-4 border-t border-gray-200/50 dark:border-slate-700/30">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <span className="text-xs text-gray-600 dark:text-slate-400 font-medium">
                    Professional Experience
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-slate-700/30 max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Looking Forward
            </h3>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              I'm always eager to take on new challenges and contribute to
              innovative projects. My experience has taught me the importance of
              clean code, user-centered design, and collaborative teamwork in
              delivering exceptional results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
