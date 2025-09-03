// src/App.jsx
import { useEffect, useState } from "react";
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './portfolioData';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesConfig from "./particlesConfig";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="app">
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
            zIndex: 0, // Base layer
          }}
        />
      )}
      
      {/* This wrapper lifts all content on top of the background */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <main>
          <Hero data={portfolioData.personalInfo} />
          <About data={portfolioData.personalInfo} />
          <Skills data={portfolioData.skills} />
          <Experience data={portfolioData.experience} />
          <Projects data={portfolioData.projects} />
          <Contact data={portfolioData.personalInfo} />
        </main>
        <Footer data={portfolioData.personalInfo} />
      </div>
    </div>
  );
}

export default App;