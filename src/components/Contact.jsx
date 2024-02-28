import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../component_styles/Contact.css";

function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      contactRef.current,
      { x: 100, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 2, 
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top bottom-=50",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div ref={contactRef} className="contact grid-item">
      <h1><a href="mailto:natozer@gmail.com">Email</a></h1>
      <h1><a href="https://www.linkedin.com/in/natozer" target="_blank" rel="noopener noreferrer">LinkedIn</a></h1>
    </div>
  );
}

export default Contact;
