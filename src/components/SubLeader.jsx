import React, { useEffect, useRef } from 'react';
import '../component_styles/SubLeader.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function Subleader() {
  const componentRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    if (componentRef.current && textRef.current) {
      gsap.registerPlugin(ScrollTrigger);
  
      gsap.set(componentRef.current, { scale: 0.1, opacity: 0 });
      gsap.set(textRef.current, { opacity: 0 });
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top center",
          toggleActions: "play none none none",
        }
      });
  
     
      tl.to(componentRef.current, {
        opacity: 1, 
        scale: 1, 
        duration: 2, 
        ease: "power2.out", 
      })
   
      .to(textRef.current, {
        opacity: 1, 
        duration: 0.5, 
        ease: "power2.inOut", 
      }, ">"); 
    }
  }, []);
  
  return (
    <div ref={componentRef} className="grid-item subleader">
      <h2 ref={textRef}>I have experience with... </h2>
    </div>
  );
}

export default Subleader;
