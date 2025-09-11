import React from "react";
import { motion } from "framer-motion";
import ProfileImage from "../../assets/profile.jpg"; // replace with your profile image path

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col md:flex-row items-center justify-center gap-1 bg-gradient-to-br from-stone-100 to-stone-200 text-white px-8 sm:px-16 md:px-24 lg:px-56"
    >
      {/* Text Section */}
      <motion.div
        className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Hello, I'm Adolphe HABIYAREMYE
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-6 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A FullStack Developer
        </motion.p>
        <motion.a
          href="#contact"
          className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-medium transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          Contact Me
        </motion.a>
      </motion.div>

      {/* Profile Image Section */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500 shadow-2xl">
          <img
            src={ProfileImage}
            alt="Adolphe Habiyaremye"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
