import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../component_styles/AboutMe.css';

const AboutMe = ({ hasEnteredSite }) => {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (hasEnteredSite) {
      const tl = gsap.timeline();

      tl.fromTo(h1Ref.current, 
          { autoAlpha: 0, y: 20 }, 
          { duration: 1, autoAlpha: 1, y: 0, ease: 'power2.out' }
        )
        .fromTo(imgRef.current, 
          { autoAlpha: 0, y: 20 },
          { duration: 1, autoAlpha: 1, y: 0, ease: 'power2.out', delay: 0.5 }, 
          "+=0.1" 
        )
        .fromTo(h2Ref.current, 
          { autoAlpha: 0, y: 20 },
          { duration: 1, autoAlpha: 1, y: 0, ease: 'power2.out', delay: 0.5 }, 
          "+=0.1" 
        );
    }
  }, [hasEnteredSite]);

  return (
    <div className="AboutMe">
        <h1 ref={h1Ref}>Hi, I'm Nate.</h1>
  
        <h2 ref={h2Ref}>I'm a full stack web developer from Miramichi, Canada.</h2>
      
    </div>
  );
};

export default AboutMe;
