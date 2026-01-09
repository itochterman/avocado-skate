import React, { useState, useEffect } from 'react';
import './AvocadoSkate.css';

const AvocadoSkate = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Force all videos to load their first frame
    setTimeout(() => {
      const videos = document.querySelectorAll('.grid-video');
      videos.forEach(video => {
        video.load();
      });
    }, 100);
  }, []);

  // Video durations in seconds (approximate)
  const videoDurations = [8, 8, 8, 60, 8];

  // Cycle through videos based on their actual duration
  useEffect(() => {
    if (isPaused) return; // Don't cycle if paused

    const duration = videoDurations[activeVideo] * 1000; // Convert to ms
    const timeout = setTimeout(() => {
      setActiveVideo((prev) => (prev + 1) % 5);
    }, duration);
    return () => clearTimeout(timeout);
  }, [activeVideo, isPaused]);

  // Handle video click - switch to that video and unpause
  const handleVideoClick = (videoIndex) => {
    setActiveVideo(videoIndex);
    setIsPaused(false);
  };

  // Pause/play videos based on active state
  useEffect(() => {
    const videos = document.querySelectorAll('.grid-video');
    videos.forEach((video, index) => {
      if (index === activeVideo) {
        video.play();
      } else {
        video.pause();
      }
    });
  }, [activeVideo]);

  return (
    <div className="zine-container">
      <div className={`zine-layout ${isLoaded ? 'loaded' : ''}`}>

        {/* Video grid with cycling active video */}
        <div className="video-grid">
          <video
            loop
            muted
            playsInline
            preload="auto"
            className={`grid-video v1 ${activeVideo === 0 ? 'active' : ''}`}
            onClick={() => handleVideoClick(0)}
          >
            <source src="/skate-clip-1.mp4" type="video/mp4" />
          </video>

          <video
            loop
            muted
            playsInline
            preload="auto"
            className={`grid-video v2 ${activeVideo === 1 ? 'active' : ''}`}
            onClick={() => handleVideoClick(1)}
          >
            <source src="/skate-clip-2.mp4" type="video/mp4" />
          </video>

          <video
            loop
            muted
            playsInline
            preload="auto"
            className={`grid-video v3 ${activeVideo === 2 ? 'active' : ''}`}
            onClick={() => handleVideoClick(2)}
          >
            <source src="/skate-clip-3.mp4" type="video/mp4" />
          </video>

          <video
            loop
            muted
            playsInline
            preload="auto"
            className={`grid-video v4 ${activeVideo === 3 ? 'active' : ''}`}
            onClick={() => handleVideoClick(3)}
          >
            <source src="/skate-clip-4.mp4" type="video/mp4" />
          </video>

          <video
            loop
            muted
            playsInline
            preload="auto"
            className={`grid-video v5 ${activeVideo === 4 ? 'active' : ''}`}
            onClick={() => handleVideoClick(4)}
          >
            <source src="/skate-clip-5.mp4" type="video/mp4" />
          </video>

          {/* Info block takes grid space */}
          <div className="info-grid-block">
            <h1 className="brand-title">
              <span className="avocado-word">AVOCADO</span>
              <span className="skate-word">SKATE</span>
            </h1>
            <p className="tagline">SKATE LESSONS FOR EVERYONE</p>

            <div className="contact-info">
              <p className="phone">646-382-8636</p>
              <a href="https://instagram.com/avocadoskate" target="_blank" rel="noopener noreferrer" className="ig-link">
                <svg viewBox="0 0 24 24" className="ig-icon">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                </svg>
                @avocadoskate
              </a>
              <p className="location">SF BAY AREA</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AvocadoSkate;