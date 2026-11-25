import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TempLanding.css';

export default function TempLanding() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const overlayRef = useRef(null);

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

  useEffect(() => {
    setLoaded(true); // triggers the slide-in

    const onScroll = () => {
      // XXX = how far the page has scrolled down: window.scrollY
      const progress = Math.min(window.scrollY / (window.innerHeight * 2), 1);
      overlayRef.current.style.setProperty('--exit', progress); // 0 to 1
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="temp-landing-wrapper">
      {/* Looping Video Hero Banner */}
      <section className="temp-video-banner">
        {/* Drop your video path inside src="" later */}
        <video autoPlay muted loop playsInline className="temp-hero-video" src="" />
        <div
          className={`temp-video-overlay ${loaded ? 'is-visible' : ''}`}
          ref={overlayRef}
        >
          <h1>Welcome to my Portfolio</h1>
          <p>Its a work in progress but im happy youre here!</p>
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