import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../component_styles/Ending.css';

function Ending() {
  const endingRef = useRef(null);
  const guaranteeRef = useRef(null); 

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: endingRef.current,
        start: 'top bottom-=50',
        end: 'top center',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      endingRef.current,
      { x: 100, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 1.5 }
    ).add(() => {
      gsap.fromTo(
        guaranteeRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 1 }
      );
    });

  }, []);

  return (
    <div ref={endingRef} className="grid-item" id="ending">
      <h2>I'll show you things you've never seen before.</h2>
      <h3 ref={guaranteeRef} style={{ opacity: 0 }}>I guarantee that.</h3>
    </div>
  );
}

export default Ending;
