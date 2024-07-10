import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../component_styles/Contact.css";

const ContactMe = ({ setShowContact }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        duration: 0.5,
        opacity: 1,
        ease: "power3.inOut",
      });
    }
  }, []);

  return (
    <div ref={ref} className="Contact">
      <div className="contact-header">
        <h1>GET IN TOUCH</h1>

        <button onClick={() => setShowContact(false)}>CLOSE</button>
      </div>
      <a href="mailto:natozer@gmail.com">natozer@gmail.com</a>
      <h2>VISIT MY OTHER SITE</h2>
      <a href="https://atelier-exavil.netlify.app/">atelier-exavil</a>
    </div>
  );
};

export default ContactMe;
