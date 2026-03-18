import React, { useEffect, useState, Suspense } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Certifications from './components/Certifications.jsx';
import Achievements from './components/Achievements.jsx';
import Miscellaneous from './components/Miscellaneous.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ParticlesBackground from './components/ParticlesBackground.jsx';
import ThreeLoader from './components/ThreeLoader.jsx';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress for dramatic effect
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 8;
      });
    }, 120);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        {/* Three.js full-screen background */}
        <ThreeLoader />

        {/* Overlay UI on top of Three.js canvas */}
        <div className="loader-overlay">
          <div className="loader-brand">
            <span className="loader-logo gradient-text">A</span>
            <span className="loader-name">yush Samant</span>
          </div>

          <div className="loader-tagline">
            <span className="loader-tag-text">Data Scientist</span>
            <span className="loader-sep">·</span>
            <span className="loader-tag-text">ML Engineer</span>
            <span className="loader-sep">·</span>
            <span className="loader-tag-text">Data Analyst</span>
          </div>

          <div className="loader-progress-wrap">
            <div className="loader-progress-bar">
              <div className="loader-progress-fill" style={{ width: `${Math.min(progress, 100)}%` }} />
            </div>
            <div className="loader-progress-label">
              {Math.min(Math.round(progress), 100)}%
            </div>
          </div>

          <div className="loader-status gradient-text">INITIALIZING DATA PIPELINES...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <ParticlesBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <Miscellaneous />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
