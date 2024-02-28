import React, { useEffect, useRef } from 'react';
import '../component_styles/SubLeader.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function BoldImmersiveMemorableItem() {
  const componentRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: componentRef.current,
        start: "top center",
        toggleActions: "play none none none",
      }
    });

    if (componentRef.current && textRef.current) {
      tl.fromTo(componentRef.current,
        { scale: 0.1 },
        {
          scale: 1,
          duration: 4,
          ease: "power2.out",
        }
      )
      .fromTo(textRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5, 
          ease: "power2.inOut",
        }
      ); 
    }
  }, []);

  return (
    <div ref={componentRef} className="grid-item subleader">
      <h2 ref={textRef}>I have experience with... </h2>
    </div>
  );
}

export default BoldImmersiveMemorableItem;
