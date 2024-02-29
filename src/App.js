import React, { useRef, useEffect } from "react";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Leader from "./components/Leader";
import FrontEndSkillsColumn from "./components/FrontEndSkillsColumn";
import Header from "./components/Header";
import ThreeBackground from "./components/ThreeBackground";
import Photo from "./components/Photo";
import BackEndSkillsColumn from "./components/BackEndSkillsColumn";
import SubLeader from "./components/SubLeader";
import Ending from "./components/Ending";
import LetsTalk from "./components/LetsTalk";

/*
-Website designed and coded by me (Nathaniel Tozer)
-Song is Neon City (Bright Vision) by AlexGrohl
-Fonts are Koliko, Cherish, and Road Rage
-Personal use obviously, not commercial. No money is being made from this personal project.
-Extra thanks to the people that created GSAP and Three.js
*/

function App() {
  const audioRef = useRef(new Audio("music/brightvision.mp3"));
  audioRef.current.loop = true;
  audioRef.current.muted = true; 

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

   
    const togglePlayPause = () => {
      if (audioRef.current.muted) {
        audioRef.current.muted = false; 
      }
      if (audioRef.current.paused) {
        audioRef.current.play().catch(err => console.error("Error playing audio:", err));
      } else {
        audioRef.current.pause();
      }
    };

 
    const app = document.querySelector('.App');
    app.addEventListener('click', togglePlayPause);

    let colorChanged = false;
    const triggerElement = document.getElementById("blue");
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to(':root', { '--main-text': '#007BFF', duration: 1 });
        colorChanged = true;
      },
      onLeaveBack: () => {
        if (colorChanged) {
          gsap.to(':root', { '--main-text': '#ffcc66', duration: 1 });
        }
      },
    });

    return () => app.removeEventListener('click', togglePlayPause);
  }, []);

  return (
    <div className="App">
      <ThreeBackground />
      <main className="grid">
        <Header />
        <Leader />
        <Photo />
        <FrontEndSkillsColumn />
        <BackEndSkillsColumn />
        <SubLeader />
        <Ending />
        <LetsTalk />
      </main>
    </div>
  );
}

export default App;
