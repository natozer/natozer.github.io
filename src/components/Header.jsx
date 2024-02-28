import React, { useEffect, useRef } from 'react';
import '../component_styles/Header.css';
import { gsap } from 'gsap';

function Header() {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      const chars = headingRef.current.querySelectorAll('span');
      gsap.set(chars, { autoAlpha: 0 });

      const animation = gsap.to(chars, {
        autoAlpha: 1,
        duration: 1,
        stagger: 0.5,
        ease: "power2.out",
        paused: true 
      });


      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animation.play();
            } else {
              animation.reverse();
            }
          });
        },
        {
          threshold: 0.1 
        }
      );

      observer.observe(headingRef.current);

      return () => {
        if (headingRef.current) {
          observer.unobserve(headingRef.current);
        }
      };
    }
  }, []);

  const text = "NATHANIEL TOZER";
  const characters = text.split("").map((char, index) => {
    if (char === ' ') {
      return <span key={index} style={{ display: 'inline-block', width: '0.5em' }}>&nbsp;</span>;
    }
    return <span key={index} style={{ display: 'inline-block' }}>{char}</span>;
  });
  
  return (
    <div className="header">
      <h1 ref={headingRef}>
        {characters}
      </h1>
    </div>
  );
}

export default Header;
