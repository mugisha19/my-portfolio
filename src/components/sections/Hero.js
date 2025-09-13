import React from "react";
import { motion } from "framer-motion";
import ProfileImage from "../../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col md:flex-row items-center justify-center gap-8 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white px-8 sm:px-16 md:px-24 lg:px-56 overflow-hidden"
    >
      {/* Debug info - remove this in production */}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-gray-300/30 dark:border-slate-700/30 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-gray-400/20 to-gray-300/20 dark:from-slate-800/20 dark:to-slate-700/20 rounded-lg rotate-12"
          animate={{
            rotate: [12, 25, 12],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-16 h-16 border-2 border-gray-400/20 dark:border-slate-600/20 rotate-45"
          animate={{
            rotate: [45, 90, 45],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gray-400/30 dark:bg-slate-600/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 via-gray-100/90 to-gray-200/95 dark:from-slate-900/95 dark:via-slate-900/90 dark:to-slate-800/95 pointer-events-none" />

      {/* Text Section */}
      <motion.div
        className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-300/50 dark:border-slate-700/50 text-gray-700 dark:text-slate-300 text-sm font-medium mb-6">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="text-gray-900 dark:text-white">Hello, I'm</span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-gray-800 to-blue-500 dark:from-blue-400 dark:via-slate-200 dark:to-blue-300 bg-clip-text text-transparent font-extrabold">
            Adolphe HABIYAREMYE
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-600 dark:text-slate-400 max-w-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Full Stack Developer passionate about creating exceptional digital
          experiences with modern technologies.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#projects"
            className="px-8 py-3 rounded-lg border border-gray-400 dark:border-slate-600 hover:border-gray-500 dark:hover:border-slate-500 text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-slate-800/50 backdrop-blur-sm"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Profile Image Section */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative">
          {/* Glowing background effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-gray-500/20 dark:from-blue-500/20 dark:to-slate-500/20 rounded-full blur-2xl scale-110"
            animate={{
              scale: [1.1, 1.2, 1.1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Profile image container */}
          <motion.div
            className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-gray-300/50 dark:border-slate-700/50 shadow-2xl backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300/20 to-transparent dark:from-slate-800/20 dark:to-transparent z-10" />
            <img
              src={ProfileImage}
              alt="Adolphe Habiyaremye"
              className="w-full h-full object-cover filter brightness-110 contrast-105"
            />
          </motion.div>

          {/* Decorative elements around image */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 border-2 border-blue-500/40 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 w-6 h-6 bg-gray-500/40 dark:bg-slate-600/40 rounded-full"
            animate={{
              y: [-5, 5, -5],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-500/50 dark:border-slate-600/50 rounded-full flex justify-center"
          animate={{
            borderColor: [
              "rgba(107, 114, 128, 0.5)",
              "rgba(107, 114, 128, 0.8)",
              "rgba(107, 114, 128, 0.5)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-600 dark:bg-slate-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
