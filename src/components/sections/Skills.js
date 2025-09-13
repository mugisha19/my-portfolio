import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript", level: 90, icon: "⚡" },
        { name: "React.js", level: 88, icon: "⚛️" },
        { name: "HTML/CSS", level: 95, icon: "🎨" },
        { name: "Tailwind CSS", level: 90, icon: "💨" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "Java", level: 75, icon: "☕" },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "Git", level: 90, icon: "📋" },
        { name: "Linux", level: 60, icon: "🐧" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-16 lg:px-32 bg-slate-800 text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 15,
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
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Skills & <span className="text-blue-400">Expertise</span>
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-slate-400 rounded-full mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            An in-depth overview of my technical expertise and degrees of
            competence with different resources and technologies.
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30 flex flex-col"
              variants={categoryVariants}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(15, 23, 42, 0.6)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {category.title}
                </h3>
                <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
              </div>

              {/* Skills List */}
              <div className="space-y-4 flex-1">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group"
                    variants={skillVariants}
                  >
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-slate-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.2,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Category Stats */}
              <motion.div
                className="mt-6 pt-4 border-t border-slate-700/30"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Average Proficiency</span>
                  <span className="text-blue-400 font-medium">
                    {Math.round(
                      category.skills.reduce(
                        (acc, skill) => acc + skill.level,
                        0
                      ) / category.skills.length
                    )}
                    %
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </section>
  );
}
