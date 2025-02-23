import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "../component_styles/Hero.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const scrollIndicatorRef = useRef(null);



  return (
    <div ref={heroRef} className="Hero">
      <h2>Full Stack</h2>
      <h1> Nathaniel<br />Tozer</h1>
      <h2>Web Developer</h2>
      <div ref={scrollIndicatorRef} className="scroll-down">
        Scroll Down
      </div>
    </div>
  );
};

export default Hero;
