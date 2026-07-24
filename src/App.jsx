import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import ProjectDetailsPage from './components/ProjectDetailsPage';
import CursorGlow from './components/CursorGlow';
import SectionDivider from './components/SectionDivider';

const HomePage = () => (
  <>
    <CursorGlow />
    <Navbar />
    <Hero />
    <SectionDivider fromColor="#a78bfa" toColor="#7c3aed" id="hero-about" />
    <About />
    <SectionDivider fromColor="#7c3aed" toColor="#f59e0b" id="about-projects" />
    <Projects />
    <SectionDivider fromColor="#f59e0b" toColor="#ec4899" id="projects-experiences" />
    <Experiences />
    <SectionDivider fromColor="#ec4899" toColor="#a78bfa" id="experiences-resume" />
    <Resume />
    <SectionDivider fromColor="#a78bfa" toColor="#3b82f6" id="resume-contact" />
    <Contact />
    <Footer/>
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:projectId" element={<ProjectDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
