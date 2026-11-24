import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TempLanding.css';

export default function TempLanding() {
  const navigate = useNavigate();

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

  return (
    <div className="temp-landing-wrapper">
      {/* Top Navigation Banner */}
      {/* <header className="temp-navbar">
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
          <button onClick={() => navigate('/3d-dev')} className="temp-nav-btn">
            3D homepage under development         
          </button>
        </nav>
      </header> */}

      {/* Looping Video Hero Banner */}
      <section className="temp-video-banner">
        {/* Drop your video path inside src="" later */}
        <video autoPlay muted loop playsInline className="temp-hero-video" src="" />
        <div className="temp-video-overlay">
          <h1>Cole Vanderkolk</h1>
          <p>Welcome to my portfolio!</p>
        </div>
      </section>

      {/* Main Scroll Sections */}
      <main>
        <section id="about" className="temp-content-section fade-section">
          <div className="temp-section-card">
            <h2>About Me</h2>
            <p>I am a Computer science gradute from Western Washington university as of June 2026. <br />
                With a love of the outdoors, art and world creation, and a drive to live a life worth remembering! </p>
          </div>
        </section>

        <section id="goals" className="temp-content-section fade-section">
          <div className="temp-section-card">
            <h2>Goals</h2>
            <h3>Short Term (1-2 years)</h3>
            <ul> 
                <li> Learn piano </li>
                <li> Write one book. </li>
                <li> Fully build and deploy one mobile game</li>
                <li> Begin professional career in the software development industry by Jan 2027 </li>
                <li> Work on physical health: Min of 3 weightlifting sessions a week. Run a sub 25 minute 5k. Prioritize meal planning. </li>
                <li> Buy a new car </li>
            </ul>
            <h3>Long Term (5-10 years)</h3>
            <ul>
                <li> Become Financially independent </li>
                <li> Travel to 15 different countries current countries visited: France, Switzerland, Italy, Aruba, Mexico, Canada. Count 6/15 </li>
                <li> Become a published author for Primary series, The Pristines</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="temp-content-section fade-section">
          <div className="temp-section-card">
            <h2>Current Projects</h2>
            <ul>
                <li> The Abandoned station: Progress 12,000/90,000 (2000 words per week)</li>
                <li> Critters of Yggdrasil: Publish date goal Jan 2027. Current production phase: Design & style</li>
                <li> Personal website: Working on creating three JS environment (What you're seeing right now is temporary!)</li>
            </ul>
          </div>
        </section>

        <section id="experience" className="temp-content-section fade-section">
          <div className="temp-section-card">
            <h2>Experience</h2>
            <ul>
                <li> Nexus games labs summer 2026 game development internship: During this internship I worked and led a team of 5 in creating a online game playable through the browser</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}