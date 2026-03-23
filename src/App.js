import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import ParticleBackground from "./components/ParticleBackground";
import MarqueeTicker from "./components/MarqueeTicker";
import GhostCursor from "./components/GhostCursor";
import { useTheme } from "./contexts/ThemeContext";

const App = () => {
  const { particleMode, activeProfile } = useTheme();
  
  return (
    <div className="overflow-hidden min-h-screen relative">
      {particleMode === "ghost" ? (
        <GhostCursor color={activeProfile ? activeProfile.vars['--accent'] : "#B19EEF"} />
      ) : (
        <ParticleBackground />
      )}
      <Header />
      <Banner />
      <Nav />
      <About />
      <Skills />
      <MarqueeTicker />
      <Education />
      <Projects />
      <Certifications />
      <Contact />
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
};

export default App;
