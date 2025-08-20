import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle"; // adjust path

import "./App.css";

function App() {
  return (
    <>
      <ThemeToggle />
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Interests />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
