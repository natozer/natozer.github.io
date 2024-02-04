import React, { useState, useRef } from 'react';
import './App.css';
import ParticleSystem from './ParticleSystem';
import Header from './Header';
import AboutMe from './AboutMe';
import ContactMe from './Contact';
import CreditsSidebar from './Credits';

/*
No snoopin' around!
*/

function App() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [showCredits, setShowCredits] = useState(false);

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

  return (
    <div className="App">
      <ParticleSystem />
      <Header
        isPlaying={isPlaying}
        toggleMusic={toggleMusic}
        onContactClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />

      <AboutMe />
      <ContactMe ref={contactRef} />

      <p className='CreditsFooter' onClick={handleCreditsClick}>Credits</p>
      {showCredits && <CreditsSidebar setShowCredits={setShowCredits} />}
    </div>
  );
}

export default App;
