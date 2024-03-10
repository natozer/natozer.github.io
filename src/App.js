import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import SnowScene from './components/SnowScene';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ContactMe from './components/Contact';
import CreditsSidebar from './components/CreditsSidebar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import MobileMessage from './components/MobileMessage';


function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCredits, setShowCredits] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const audioRef = useRef(new Audio('music/bgm.mp3'));
  const contactRef = useRef(null);

  audioRef.current.loop = true;

  const handleCreditsClick = () => {
    setShowCredits(!showCredits);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const aspectRatioThreshold = 1.5;

    const checkMobileStatus = () => {
      const aspectRatio = window.innerWidth / window.innerHeight;
      const isMobile = aspectRatio < aspectRatioThreshold;
      setIsMobile(isMobile);
    };

    checkMobileStatus();
    window.addEventListener('resize', checkMobileStatus);

    window.addEventListener('contextmenu', handleContextMenu);

    return () => {
      window.removeEventListener('resize', checkMobileStatus);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      {isMobile ? (
        <>
          <SnowScene />
          <MobileMessage />
        </>
      ) : (
        <>
          <SnowScene />
          <Header
            isPlaying={isPlaying}
            toggleMusic={toggleMusic}
            onContactClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
            onCreditsClick={handleCreditsClick}
          />
          <Hero />
          <AboutMe />
          <Experience />
          <ContactMe ref={contactRef} />
          {showCredits && <CreditsSidebar setShowCredits={setShowCredits} />}
        </>
      )}
    </div>
  );
}

export default App;
