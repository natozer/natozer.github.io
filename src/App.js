import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { gsap } from 'gsap';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import backgroundMusic from './assets/music.mp3';
import AboutMe from './components/AboutMe';
import Credits from './components/Credits';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);
  const [buttonVisible, setButtonVisible] = useState(true);

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

  const handleEnterSite = () => {
    if (!isPlaying) {
      toggleMusic();
    }
    setButtonVisible(false);
    gsap.to(splashScreenRef.current, { duration: 2, opacity: 0, onComplete: () => setSplashScreenVisible(false) });
  };

  useEffect(() => {
    const currentAudio = audioRef.current;

    return () => {
      currentAudio.pause();
    };
  }, []);

  return (
    <div className="App">
      
      <div className="grain-background"></div>
      {splashScreenVisible ? (
        <SplashScreen onEnterSite={handleEnterSite} buttonVisible={buttonVisible} splashScreenRef={splashScreenRef} />
      ) : (
        <>
          <Header isPlaying={isPlaying} toggleMusic={toggleMusic} />
          <div className="wrapper">
      <Hero />

            <AboutMe />
            <Footer />
            <Credits />
          </div>
        </>
      )}
      <svg>
        <filter id="grain">
          <feTurbulence type="turbulence" baseFrequency="1" />
        </filter>
      </svg>
    </div>
  );
}

export default App;
