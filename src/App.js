import React, { useState, useEffect } from 'react';
import './AvocadoSkate.css';

const AvocadoSkate = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="avocado-container">
      <div className={`poster ${isLoaded ? 'loaded' : ''}`}>

        {/* Top Half - Skate Photo Gallery */}
        <div className="photo-section">
          <div className="photo-gallery">
            <img
              src="/skate-photo-1.jpg"
              alt="Skater in action"
              className="skate-photo"
            />
            <img
              src="/skate-photo-2.jpg"
              alt="Skater in action"
              className="skate-photo"
            />
            <img
              src="/skate-photo-3.jpg"
              alt="Skater in action"
              className="skate-photo"
            />
          </div>
        </div>

        {/* Bottom Half - Avocado Info */}
        <div className="info-section">
          {/* Avocado SVG with skateboard */}
          <div className="avocado-graphic">
            <svg viewBox="-20 0 240 300" className="avocado-svg">
              {/* Avocado body */}
              <ellipse cx="100" cy="140" rx="70" ry="90" fill="#5D8A3A" className="avocado-body" />
              <ellipse cx="100" cy="140" rx="50" ry="70" fill="#C4D96F" className="avocado-flesh" />
              {/* Pit */}
              <circle cx="100" cy="140" r="25" fill="#8B5A3C" className="avocado-pit" />
              {/* Skateboard under avocado */}
              <g className="skateboard">
                <rect x="60" y="255" width="80" height="8" rx="4" fill="#1a1a1a" />
                <circle cx="70" cy="267" r="4" fill="#FF6B35" />
                <circle cx="130" cy="267" r="4" fill="#FF6B35" />
              </g>
            </svg>
          </div>

          {/* Main title */}
          <h1 className="main-title">
            <span className="title-word avocado">AVOCADO</span>
            <span className="title-word skate">SKATE</span>
          </h1>

          {/* Motto */}
          <div className="motto">
            <span className="motto-text">SKATE ONE</span>
            <span className="motto-divider">●</span>
            <span className="motto-text">SKATE ALL</span>
          </div>

          {/* Info sections */}
          <div className="info-grid">
            <div className="info-box">
              <h3>ALL AGES</h3>
              <p>Youth to wisdom</p>
            </div>

            <div className="info-box highlight">
              <h3>SAFETY FIRST</h3>
              <p>Accessible & inclusive</p>
            </div>

            <div className="info-box">
              <h3>SLIDING SCALE</h3>
              <p>Pay what you can</p>
            </div>

            <div className="info-box">
              <h3>ALL LEVELS</h3>
              <p>Beginner to advanced</p>
            </div>
          </div>

          {/* Contact placeholder */}
          <div className="contact-section">
            <p className="contact-text">646-382-8636</p>
            <a href="https://instagram.com/avocadoskate" target="_blank" rel="noopener noreferrer" className="instagram-link">
              <svg className="instagram-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="18" cy="6" r="1.5" fill="currentColor" />
              </svg>
              <span>@avocadoskate</span>
            </a>
            <p className="contact-subtext">SF Bay Area</p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="decorative-line divider-line"></div>
      </div>
    </div>
  );
};

export default AvocadoSkate;