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

        {/* Avocado SVG with skateboard */}
        <div className="avocado-graphic">
          <svg viewBox="0 0 200 280" className="avocado-svg">
            {/* Avocado body */}
            <ellipse cx="100" cy="140" rx="70" ry="90" fill="#5D8A3A" className="avocado-body" />
            <ellipse cx="100" cy="140" rx="50" ry="70" fill="#C4D96F" className="avocado-flesh" />
            {/* Pit */}
            <circle cx="100" cy="140" r="25" fill="#8B5A3C" className="avocado-pit" />
            {/* Skateboard under avocado */}
            <g className="skateboard">
              <rect x="60" y="220" width="80" height="8" rx="4" fill="#1a1a1a" />
              <circle cx="70" cy="232" r="6" fill="#FF6B35" />
              <circle cx="130" cy="232" r="6" fill="#FF6B35" />
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
            <p>From groms to OGs</p>
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
          <p className="contact-text">COMING SOON</p>
          <p className="contact-subtext">SF Bay Area</p>
        </div>

        {/* Decorative elements */}
        <div className="decorative-line top-line"></div>
        <div className="decorative-line bottom-line"></div>
      </div>
    </div>
  );
};

export default AvocadoSkate;
