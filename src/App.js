import React from "react";
// import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
// import Testimonials from "./components/Experience";

export default function App() {
  return (
    <main>
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
