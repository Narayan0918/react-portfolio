// src/App.jsx

import './App.css';
import { portfolioData } from './portfolioData';
import Hero from './components/Hero'; // Add this line
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <main>
        <Hero data={portfolioData.personalInfo} />
        <About data={portfolioData.personalInfo.summary} />
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