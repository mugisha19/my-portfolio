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
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-500 dark:text-gray-400">{exp.company}</p>
            <span className="text-sm text-gray-400">{exp.period}</span>
            <p className="mt-3">{exp.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
