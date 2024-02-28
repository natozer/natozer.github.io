import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import meImage from '../assets/me.png'; 
import "../component_styles/Photo.css";

function Photo() {
  const containerRef = useRef(null); 
  const imageRef = useRef(null); 

  useEffect(() => {
    gsap.fromTo(containerRef.current, 
      { x: '100%', opacity: 1 }, 
      { x: '0%', opacity: 1, duration: 5, ease: "power2.out" }
    );
    gsap.fromTo(imageRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 2, delay: 6 }
    );
  }, []);

  return (
    <div ref={containerRef} className="grid-item photo">
      <img ref={imageRef} src={meImage} alt="Me" />
    </div>
  );
}

export default Photo;
