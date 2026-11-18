import React, { useEffect } from 'react';
import './TempLanding.css';

export default function TempLanding() {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.25,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Using JS scrollTo instead of href="#about" because HashRouter uses '#' for URL routing
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="temp-landing-wrapper">
      {/* Top Navigation Banner */}
      <header className="temp-navbar">
        <div className="temp-nav-brand">Cole Vanderkolk</div>
        <nav className="temp-nav-links">
          <button onClick={() => scrollToSection('about')} className="temp-nav-btn">
            About Me
          </button>
          <button onClick={() => scrollToSection('goals')} className="temp-nav-btn">
            Goals
          </button>
          <button onClick={() => scrollToSection('projects')} className="temp-nav-btn">
            Current Projects
          </button>
          <button onClick={() => scrollToSection('experience')} className="temp-nav-btn">
            Experience
          </button>
        </nav>
      </header>

      {/* Looping Video Hero Banner */}
      <section className="temp-video-banner">
        {/* Drop your video path inside src="" later */}
        <video autoPlay muted loop playsInline className="temp-hero-video" src="" />
        <div className="temp-video-overlay">
          <h1>Cole Vanderkolk</h1>
          <p>Scroll down to explore</p>
        </div>
      </section>

      {/* Main Scroll Sections */}
      <main>
        <section id="about" className="temp-content-section fade-section">
          <div className="temp-section-card">
            <h2>About Me</h2>
            <p>Add your About Me details here.</p>
          </div>
        </section>

        <section id="goals" className="temp-content-section fade-section">
          <div className="temp-section-card">
            <h2>Goals</h2>
            <p>Add your Goals details here.</p>
          </div>
        </section>

        <section id="projects" className="temp-content-section fade-section">
          <div className="temp-section-card">
            <h2>Current Projects</h2>
            <p>Add your Current Projects details here.</p>
          </div>
        </section>

        <section id="experience" className="temp-content-section fade-section">
          <div className="temp-section-card">
            <h2>Experience</h2>
            <p>Add your Experience details here.</p>
          </div>
        </section>
      </main>
    </div>
  );
}