// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Github from "./sections/Github";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Github />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}