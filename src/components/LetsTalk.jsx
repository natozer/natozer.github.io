import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../component_styles/LetsTalk.css";

function LetsTalk() {
  const letsTalkRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      letsTalkRef.current,
      { x: -100, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: letsTalkRef.current,
          start: "top bottom-=50",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div ref={letsTalkRef} className="letstalk grid-item">
      <h1 className="fancy">So let's talk...</h1>
      <h3><a href="mailto:natozer@gmail.com">Email</a></h3>
      <h3><a href="https://www.linkedin.com/in/natozer" target="_blank" rel="noopener noreferrer">LinkedIn</a></h3>
    </div>
  );
}

export default LetsTalk;
