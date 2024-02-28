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
import Contact from "./components/Contact";

function App() {
  const audioRef = useRef(new Audio("music/neoncitybrightvision.mp3"));
  audioRef.current.loop = true;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const playAudio = async () => {
      try {
        await audioRef.current.play();
      } catch (err) {
        
      }
    };
    playAudio();
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
        <Contact />
      </main>
    </div>
  );
}

export default App;
