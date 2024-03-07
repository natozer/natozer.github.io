import React, { forwardRef, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "../component_styles/Experience.css";

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      experienceRef.current.children,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "play none none",
        },
      }
    );

    gsap.fromTo(
      experienceRef.current.querySelectorAll("li"),
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.15,
        ease: "expo.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );

  }, []);

  return (
    <div className="experience-section" ref={experienceRef}>
      <h1>I HAVE EXPERIENCE WITH...</h1>
      <ul>
        <li>ANGULAR</li>
        <li>ASP.NET</li>
        <li>C#</li>
        <li>EXPRESS.JS</li>
        <li>GSAP</li>
        <li>GIT</li>
        <li>JAVA</li>
        <li>JAVASCRIPT</li>
        <li>MONGO DB</li>
        <li>MSSQL</li>
        <li>MYSQL</li>
        <li>NODE.JS</li>
        <li>REACT</li>
        <li>SPRING BOOT</li>
        <li>THREE.JS</li>
        <li>UX</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>
      <h1>FULL STACK WEB DEVELOPMENT.</h1>
    </div>
  );
}

export default Experience;
