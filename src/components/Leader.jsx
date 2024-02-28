import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "../component_styles/Leader.css";

function Leader() {
  const containerRef = useRef(null);
  const header1Ref = useRef(null);
  const header2Ref = useRef(null);
  const header3Ref = useRef(null);

  useEffect(() => {
    const masterTl = gsap.timeline({
      paused: true,
      defaults: { duration: 4 },
      onComplete: () => {
        tl1.play();
        tl2.play();
        tl3.play();
      },
    });

    masterTl.fromTo(
      containerRef.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1 }
    );

    const tl1 = gsap.fromTo(
      header1Ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 0.5, paused: true }
    );
    const tl2 = gsap.fromTo(
      header2Ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 2.5, paused: true }
    );
    const tl3 = gsap.fromTo(
      header3Ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 4.5, paused: true }
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            masterTl.play();
          }
        });
      },
      {
        threshold: 0.05,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="grid-item leader">
      <h1 ref={header1Ref}>
        Hey, I'm Nate.
      </h1>
      <h2 ref={header2Ref}>
        I'm a Full Stack Web Developer and NBCC honors grad from Miramichi,
        Canada.
      </h2>
      <h3 ref={header3Ref}>
        I bring a wide range of front and back end skills to the table, and a
        relentless pursuit of perfection.
      </h3>
    </div>
  );
}

export default Leader;
