import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        You can reach me at{" "}
        <a href="mailto:your.email@example.com" className="text-blue-500">
          your.email@example.com
        </a>
      </motion.p>
    </section>
  );
}
