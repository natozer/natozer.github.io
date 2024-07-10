import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { gsap } from 'gsap';
import SnowScene from './components/SnowScene';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ContactMe from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import backgroundMusic from './assets/ambient.mp3';
import SplashScreen from './components/SplashScreen';


function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);
  const [hasEnteredSite, setHasEnteredSite] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const audioRef = useRef(new Audio(backgroundMusic));
  audioRef.current.loop = true;

  const splashScreenRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleContactClick = () => {
    setShowContact(!showContact);
  };

  const handleEnterSite = () => {
    if (!isPlaying) {
      toggleMusic();
    }
    gsap.to(splashScreenRef.current, { duration: 1, opacity: 0, onComplete: () => setSplashScreenVisible(false) });
    setHasEnteredSite(true);
  };

  useEffect(() => {
    const currentAudio = audioRef.current;
    return () => {
      currentAudio.pause();
    };
  }, []);


  return (
    <div className="App">
      <SnowScene />
      {splashScreenVisible ? (
        <SplashScreen onEnterSite={handleEnterSite} />
      ) : (
        <>
          <Header
            isPlaying={isPlaying}
            toggleMusic={toggleMusic}
            onContactClick={handleContactClick}
          />
          
          <AboutMe hasEnteredSite={hasEnteredSite}/>
          <Experience />
          {showContact && <ContactMe setShowContact={setShowContact} />}
          <Footer />
        </>
      )}
      <div className="credits-button-container">
        <div className="credits-button">CREDITS</div>
        <div className="credits-container">
          <span>Fonts are Kayak, Ragna. Music by Aleksey Chistilin from Pixabay. Personal use only. No money is being made through this site.</span>
        </div>
      </div>
    </div>
  );
}

export default App;
