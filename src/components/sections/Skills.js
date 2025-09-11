import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "JavaScript ", color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", color: "from-sky-400 to-indigo-500" },
    { name: "React.js", color: "from-yellow-400 to-orange-500" },
    { name: "Python", color: "from-pink-400 to-purple-500" },
    { name: "Java", color: "from-green-400 to-teal-500" },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-16 lg:px-32 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200"
    >
      {/* Section Title */}
      <motion.h2
        className="relative text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills
        <motion.span
          className="absolute left-1/2 -bottom-2 w-16 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full -translate-x-1/2"
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          transition={{ duration: 1 }}
        />
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className={`relative group px-6 py-8 rounded-xl shadow-lg bg-gradient-to-br ${skill.color} text-white font-bold text-lg flex items-center justify-center cursor-pointer`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ y: -10, scale: 1.05 }}
          >
            <span className="relative z-10">{skill.name}</span>
            {/* Glow Effect */}
            <span className="absolute inset-0 rounded-xl bg-white opacity-10 group-hover:opacity-20 blur-lg transition duration-500"></span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
