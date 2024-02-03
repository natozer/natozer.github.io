import React from 'react';
import { ReactComponent as MuteIcon } from './mute.svg';
import { ReactComponent as UnmuteIcon } from './unmute.svg';

function Header({ isPlaying, toggleMusic, onContactClick }) {
  
  return (
    <header className='App-header'>
      <h1>
        NATHANIEL ADDISON TOZER - FULL STACK WEB DEVELOPER
      </h1>
      <div className='header-buttons'>
        <button className='navlink' onClick={onContactClick}>
          CONTACT
        </button>
        <button onClick={toggleMusic}>
          {isPlaying ? (
            <MuteIcon />
          ) : (
            <UnmuteIcon />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
