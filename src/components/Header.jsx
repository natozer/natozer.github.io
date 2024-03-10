import React from "react";
import { ReactComponent as MuteIcon } from "../assets/mute.svg";
import { ReactComponent as UnmuteIcon } from "../assets/unmute.svg";
import "../component_styles/AppHeader.css";

function Header({ isPlaying, toggleMusic, onContactClick, onCreditsClick }) {
  return (
    <header className="App-header">
      <div>NATHANIEL ADDISON TOZER - FULL STACK WEB DEVELOPER</div>
      <nav>
      <div className="navlink" onClick={onContactClick}>
        CONTACT
      </div>
      <div className="navlink" onClick={onCreditsClick}>
        CREDITS
      </div>
      <button onClick={toggleMusic}>
        {isPlaying ? <MuteIcon /> : <UnmuteIcon />}
      </button>
      </nav>
    </header>
  );
}

export default Header;
