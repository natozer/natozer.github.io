import React, { forwardRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ContactMe = forwardRef((props, ref) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(ref.current, 
      { autoAlpha: 0 }, 
      {
        duration: 1,
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom', 
          end: 'bottom top', 
          toggleActions: 'play none none reverse', 
        },
      }
    );
  }, [ref]);

  return (
    <div ref={ref} className="ContactMe">
      <h1 className="headline">Lets get in touch.</h1>
      <div className="contact-details">
        <a href="mailto:natozer@gmail.com" className="contact-link">Contact Me</a>
        <a href="https://www.linkedin.com/in/natozer" className="contact-link">LinkedIn</a>
        
      </div>
    </div>
  );
});

export default ContactMe;
