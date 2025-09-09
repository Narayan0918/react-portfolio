// src/App.jsx

import { useEffect, useState, useRef } from "react";
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar'; // Import the new Navbar
import { portfolioData } from './portfolioData';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesConfig from "./particlesConfig";
import { AnimatePresence } from "framer-motion"; // Import AnimatePresence

function App() {
  const [init, setInit] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const heroRef = useRef(null); // Create a ref for the Hero section

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = heroRef.current;
      if (heroSection) {
        // Show navbar if the top of the window is past the bottom of the hero section
        if (window.scrollY > heroSection.offsetHeight) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup listener
  }, []);

  return (
    <div className="app">
      {/* AnimatePresence allows the Navbar to animate when it's removed */}
      <AnimatePresence>
        {showNavbar && <Navbar data={portfolioData.personalInfo} />}
      </AnimatePresence>

      {init && (
        <Particles
          id="tsparticles"
          options={particlesConfig}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
        />
      )}
      
      <main>
        {/* Attach the ref to a wrapper around the Hero section */}
        <div ref={heroRef}>
          <Hero data={portfolioData.personalInfo} />
        </div>
        <About data={portfolioData.personalInfo} />
        <Skills data={portfolioData.skills} />
        <Experience data={portfolioData.experience} />
        <Projects data={portfolioData.projects} />
        <Contact data={portfolioData.personalInfo} />
      </main>
      <Footer data={portfolioData.personalInfo} />
    </div>
  );
}

export default App;