import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LiquidMetal } from '@paper-design/shaders-react';
import './Header.css';

function createCutoutDataUrl(text, fontFamily) {
  const canvas = document.createElement('canvas');
  canvas.width = 1600;
  canvas.height = 180;
  const ctx = canvas.getContext('2d');

  // 1. Fill the entire header bar so the shader renders across the whole background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 2. Punch transparent holes in the shape of your name
  ctx.globalCompositeOperation = 'destination-out';
  ctx.font = `700 82px "${fontFamily}", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  return canvas.toDataURL('image/png');
}

export default function Header() {
  const [bannerMask, setBannerMask] = useState(null);

  useEffect(() => {
    let isMounted = true;

    document.fonts.ready.then(() => {
      if (isMounted) {
        setBannerMask(createCutoutDataUrl('Cole Vanderkolk', 'Nasalization'));
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <header className="site-header">
      <Link to="/" className="header-brand-link" aria-label="Cole Vanderkolk Home">
        {bannerMask && (
          <LiquidMetal
            image={bannerMask}
            colorBack="#00000000"
            colorTint="#ffffff"
            repetition={3}
            softness={0.1}
            shiftRed={0.35}
            shiftBlue={0.35}
            distortion={0.12}
            contour={0.5}
            angle={70}
            speed={1}
            scale={1.5}
            fit="cover"
            style={{ width: '100%', height: '85px', display: 'block' }}
          />
        )}
      </Link>
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
    </header>
  );
}
