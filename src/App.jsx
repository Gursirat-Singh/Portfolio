import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import ProjectDetailsPage from './components/ProjectDetailsPage';

const HomePage = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Experiences />
    <Resume />
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
