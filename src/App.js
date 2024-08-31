import React, { useState } from 'react';
import './App.css';

function App() {
  const [showVideo, setShowVideo] = useState(false);

  const handleWatchNowClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="App">
      <h1>DevOps Engineers: Who Are They?</h1>
      <a href="https://wearecommunity.io/events/devops-engineers" target="_blank" rel="noopener noreferrer">
        Learn more about DevOps Engineers
      </a>
      {!showVideo && (
        <button onClick={handleWatchNowClick} className="watch-now-button">
          Watch now
        </button>
      )}
      {showVideo && (
        <div className="youtube-container">
          <iframe
            src="https://www.youtube.com/embed/tXyTXCoyZgo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default App;

