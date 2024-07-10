import React, { useRef } from "react";
import { ReactComponent as MuteIcon } from "../assets/mute.svg";
import { ReactComponent as UnmuteIcon } from "../assets/unmute.svg";
import "../component_styles/AppHeader.css";

function MusicVisualizer({ isPlaying }) {
  return (
    <div className={`visualizer ${isPlaying ? "playing" : ""}`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="bar"></div>
      ))}
    </div>
  );
}

function ToggleButton({ isPlaying, toggleMusic }) {
  return (
    <button onClick={toggleMusic} aria-label={isPlaying ? "Mute" : "Unmute"}>
      {isPlaying ? <MuteIcon /> : <UnmuteIcon />}
    </button>
  );
}

export default function Header({ isPlaying, toggleMusic, onContactClick }) {
  const headerRef = useRef(null);

  const renderTextWithSpan = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="vertical-stack">
        {char}
      </span>
    ));
  };

  return (
      <header className="App-header" ref={headerRef}>
        <div className="header-left">
          {renderTextWithSpan("NATHANIEL TOZER 2024 ")}
        </div>
        <div className="header-right">
          <MusicVisualizer isPlaying={isPlaying} />
          <ToggleButton isPlaying={isPlaying} toggleMusic={toggleMusic} />
          <div className="navlink" onClick={onContactClick} role="button" tabIndex="0">
            CONTACT
          </div>
        </div>
      </header>
  );
}


