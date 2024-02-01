import React from 'react';
import { ReactComponent as MuteIcon } from './mute.svg';
import { ReactComponent as UnmuteIcon } from './unmute.svg';

function Header({ isPlaying, toggleMusic, onContactClick }) {
  
  return (
    <header className='App-header'>
      <h1>
        NATHANIEL ADDISON TOZER
      </h1>
      <nav>
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
      </nav>
    </header>
  );
}

export default Header;
