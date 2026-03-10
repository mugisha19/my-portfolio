import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Footer from "./components/layout/Footer";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-500 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
