import React, { forwardRef, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const ProfilePicture = ({ imageUrl, altText }) => {
  return <img src={imageUrl} alt={altText} className="profile-picture" />;
};

const AboutMe = forwardRef((props, ref) => {
  const headerRef = useRef(null);
  const profilePicRef = useRef(null);
  const experienceRef = useRef(null);
  const waveTextRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Header Text Animation
    gsap.fromTo(
      headerRef.current.children,
      { autoAlpha: 0, y: 20 },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        duration: 7 // Adjust duration as needed
      }
    );



    // Experience Section Animation
    gsap.fromTo(
      experienceRef.current.children,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "play none none",
        },
      }
    );

    gsap.fromTo(
      experienceRef.current.querySelectorAll("li"),
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.15, // Slightly reduced stagger for a smoother effect
        ease: "expo.out", // Smoother easing function
        duration: 1.5, // Increased duration for smoother transition
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );

    //Bold, immersive, memorable animation
    gsap.fromTo(
      waveTextRef.current.children,
      { autoAlpha: 0, y: 20 },
      {
        duration: 3,
        autoAlpha: 1,
        y: 0,
        stagger: 0.6, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: waveTextRef.current,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  

  return (
    <div ref={ref} className="AboutMe">
      <div ref={headerRef} className="profile-header-container">
        <h2 className="header-text">Hi, I'm <span className='mahname'>Nate</span></h2>
        <div ref={profilePicRef}>
          <div className='profile-picture-container'>
          <ProfilePicture 
            imageUrl="images/me.png" 
            altText="NATE'S PROFILE"
          />
          </div>
        </div>
        <p>
          I'M A WEB DEVELOPER FROM MIRAMICHI, CANADA. IN 2023, I GRADUATED WITH HONORS FROM NBCC, WHERE I EARNED A DIPLOMA IN WEB AND MOBILE APPLICATION DEVELOPMENT.
        </p>
   
      </div>
      <div ref={waveTextRef} className='Bold-Immersive-Memorable'>
        <span>I like to build things that are</span><span> Bold,</span> <span>Immersive,</span> <span> and Memorable.</span>
      </div>
      
      <div className="experience-section" ref={experienceRef}>
        <h1>I HAVE EXPERIENCE WITH...</h1>
        <ul>
  <li>ANGULAR</li>
  <li>ASP.NET</li>
  <li>C#</li>
  <li>EXPRESS.JS</li>
  <li>GSAP</li>
  <li>GIT</li>
  <li>JAVA</li>
  <li>JAVASCRIPT</li>
  <li>MONGO DB</li>
  <li>MSSQL</li>
  <li>MYSQL</li>
  <li>NODE.JS</li>
  <li>REACT</li>
  <li>SPRING BOOT</li>
  <li>THREE.JS</li>
</ul>
<h1>FULL STACK WEB DEVELOPMENT</h1>

      </div>
    </div>
  );
});

export default AboutMe;
