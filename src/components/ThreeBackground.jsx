import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x05040d);

    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      10
    );
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);


    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1299;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffcc66,
      size: 0.02,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);


    const maxYPosition = 5;
    const minYPosition = -5;
    const riseSpeed = 0.005;

    const animate = () => {
      requestAnimationFrame(animate);

      const positions = particleGeometry.attributes.position.array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] += riseSpeed;
        if (positions[i] > maxYPosition) {
          positions[i] = minYPosition;
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();


    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize, false);


    ScrollTrigger.create({
      trigger: "#blue",
      start: "top bottom",
      onEnter: () => {
        scene.background = new THREE.Color(0x1A000B); 
        particleMaterial.color.set(0x007BFF); 
      },
      onLeaveBack: () => {
        scene.background = new THREE.Color(0x05040d); 
        particleMaterial.color.set(0xffcc66); 
      },
    });

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", onWindowResize);
      ScrollTrigger.getAll().forEach(st => st.kill()); 
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}

export default ThreeBackground;
