import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LiquidMetal } from '@paper-design/shaders-react';
import './Header.css';

function createFillDataUrl() {
  const canvas = document.createElement('canvas');
  canvas.width = 1600;
  canvas.height = 180;
  const ctx = canvas.getContext('2d');
  // XXX = the canvas property that sets the fill color; use '#ffffff'
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  return canvas.toDataURL('image/png');
}

export default function Header() {
  const [bannerMask, setBannerMask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    document.fonts.ready.then(() => {
      if (isMounted) {
        setBannerMask(createFillDataUrl());
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header">
      <div className="header-bg">
        {bannerMask && (
          <LiquidMetal
            image={bannerMask}
            colorBack="#ffffff"
            colorTint="#683d04"
            repetition={3}
            softness={0.1}
            shiftRed={0.35}
            shiftBlue={0.35}
            distortion={0.12}
            contour={0.5}
            angle={70}
            speed={1}
            scale={4}
            fit="cover"
            style={{ width: '100%', height: '100%', display: 'block' }}
          />
        )}
      </div>
      <div className="header-content">
        <Link to="/" className="header-name">Cole Vanderkolk</Link>
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
      </div>
    </header>
  );
}
