import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Message sent successfully!");
  };

  const contactMethods = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email",
      value: "habiyaadolphe19@gmail.com",
      link: "mailto:habiyaadolphe19@gmail.com",
      description: "Drop me a line anytime",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: "Phone",
      value: "+250 786 108 587",
      link: "tel:+250786108587",
      description: "Mon-Fri from 8am to 22pm",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      label: "Location",
      value: "Kigali, Rwanda",
      description: "Available for remote work",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "linkedin.com/in/Habiyaremye Adolphe",
      link: "https://www.linkedin.com/in/habiyaremye-adolphe-1968792aa/",
      description: "Let's connect professionally",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center px-4 py-2 bg-neutral-800 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-800 text-sm font-medium rounded-full">
              Get In Touch
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
            Let's Work Together
          </h2>

          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and collaborations.
            Whether you have a project in mind or just want to chat, I'd love to
            hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-2xl font-semibold mb-6 text-neutral-900 dark:text-neutral-100">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField("name")}
                      onBlur={() => setActiveField("")}
                      required
                      className={`w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-700 border rounded-lg text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 ${
                        activeField === "name"
                          ? "border-neutral-900 dark:border-neutral-100"
                          : "border-neutral-300 dark:border-neutral-600"
                      }`}
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField("email")}
                      onBlur={() => setActiveField("")}
                      required
                      className={`w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-700 border rounded-lg text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 ${
                        activeField === "email"
                          ? "border-neutral-900 dark:border-neutral-100"
                          : "border-neutral-300 dark:border-neutral-600"
                      }`}
                      placeholder="Email Address"
                    />
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setActiveField("subject")}
                    onBlur={() => setActiveField("")}
                    required
                    className={`w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-700 border rounded-lg text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 ${
                      activeField === "subject"
                        ? "border-neutral-900 dark:border-neutral-100"
                        : "border-neutral-300 dark:border-neutral-600"
                    }`}
                    placeholder="Subject"
                  />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setActiveField("message")}
                    onBlur={() => setActiveField("")}
                    rows={6}
                    required
                    className={`w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-700 border rounded-lg text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 resize-none ${
                      activeField === "message"
                        ? "border-neutral-900 dark:border-neutral-100"
                        : "border-neutral-300 dark:border-neutral-600"
                    }`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-medium rounded-lg transition-all duration-300 hover:bg-neutral-800 dark:hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span
                    className={`transition-opacity duration-300 ${
                      isSubmitting ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    Send Message
                  </span>
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-neutral-100 dark:border-neutral-900 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                  Get in Touch
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  I typically respond within 24 hours. Looking forward to
                  discussing your next project!
                </p>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    {method.link ? (
                      <a
                        href={method.link}
                        className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white dark:hover:bg-neutral-800 hover:shadow-sm border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {method.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                            {method.label}
                          </h4>
                          <p className="text-neutral-600 dark:text-neutral-400 font-mono text-sm mb-1">
                            {method.value}
                          </p>
                          <p className="text-neutral-500 dark:text-neutral-500 text-sm">
                            {method.description}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 rounded-lg flex items-center justify-center">
                          {method.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                            {method.label}
                          </h4>
                          <p className="text-neutral-600 dark:text-neutral-400 font-mono text-sm mb-1">
                            {method.value}
                          </p>
                          <p className="text-neutral-500 dark:text-neutral-500 text-sm">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-neutral-200 dark:border-neutral-700">
                <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-4">
                  Follow me
                </h4>
                <div className="flex gap-4">
                  {["GitHub", "Twitter"].map((platform, index) => (
                    <motion.a
                      key={platform}
                      href="#"
                      className="w-10 h-10 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg flex items-center justify-center hover:bg-neutral-900 dark:hover:bg-neutral-100 hover:text-neutral-100 dark:hover:text-neutral-900 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <span className="text-sm font-medium">
                        {platform.charAt(0)}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20 pt-12 border-t border-neutral-200 dark:border-neutral-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
            Ready to start your project?
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-xl mx-auto">
            Let's chat about the way we can use reliable programming and a
            clean, modern appearance to bring out your thoughts.
          </p>
          <motion.a
            href="mailto:habiyaadolphe19@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start a conversation</span>
            <svg
              className="w-4 h-4"
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
      </div>
    </section>
  );
}
