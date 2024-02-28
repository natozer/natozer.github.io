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
      <h1>So let's talk...</h1>
    </div>
  );
}

export default LetsTalk;
