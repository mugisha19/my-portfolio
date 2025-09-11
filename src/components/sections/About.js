import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 lg:px-32 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200"
    >
      {/* Section Title */}
      <motion.h2
        className="relative text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        About Me
        {/* Animated underline */}
        <motion.span
          className="absolute left-1/2 -bottom-2 w-16 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full -translate-x-1/2"
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          transition={{ duration: 1 }}
        />
      </motion.h2>

      {/* About Content Card */}
      <motion.div
        className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-500"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.p
          className="text-lg leading-relaxed text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          I am a{" "}
          <span className="font-semibold text-cyan-500">
            FullStack Developer
          </span>{" "}
          <span> </span>
          passionate about building modern, responsive, and interactive web
          applications. My focus is on creating user-friendly experiences with
          clean and maintainable code. I love exploring new technologies and
          continuously improving my craft to stay at the cutting edge of
          development.
        </motion.p>
      </motion.div>
    </section>
  );
}
