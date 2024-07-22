import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass.js";
import ApothesisOfHercules from '../assets/ApotheosisOfHercules.jpg';
import croppedAurora from '../assets/mobilepainting.png'; 
import snowflake1 from '../assets/snowflake1.png';
import snowflake2 from '../assets/snowflake2.png';
import snowflake3 from '../assets/snowflake3.png';

const SnowScene = () => {
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const composerRef = useRef(null);

  useEffect(() => {
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );

    camera.position.z = 1000;
    cameraRef.current = camera;

    const scene = new THREE.Scene();
    const textureLoader = new THREE.TextureLoader();

    const isMobile = window.innerWidth / window.innerHeight > 1 ? false : true;
    const backgroundTexture = textureLoader.load(isMobile ? croppedAurora : ApothesisOfHercules);
    scene.background = backgroundTexture;

    scene.fog = new THREE.FogExp2(0x000000, 0.00006);
    sceneRef.current = scene;

    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document
      .getElementById("snow-scene-container")
      .appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const composer = new EffectComposer(renderer);
    composerRef.current = composer;

    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const filmPass = new FilmPass(0.5, 0.05, 6100, false);
    composer.addPass(filmPass);

    const snowflakeImages = [snowflake1, snowflake2, snowflake3];
    const snowflakeTextures = snowflakeImages.map(image => textureLoader.load(image));

    const geometry = new THREE.BufferGeometry();
    const vertices = new Array(9000);

    for (let i = 0; i < 3000; i++) {
      const baseIndex = i * 3;
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;

      vertices[baseIndex] = x;
      vertices[baseIndex + 1] = y;
      vertices[baseIndex + 2] = z;
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

    const sizes = [5, 4, 3];
    const colors = [
      [1.0, 0.2, 0.5],
      [0.95, 0.1, 0.5],
      [0.9, 0.05, 0.5],
    ];

    snowflakeTextures.forEach((sprite, _index) => {
      sizes.forEach((size, index) => {
        const material = new THREE.PointsMaterial({
          size,
          map: sprite,
          blending: THREE.AdditiveBlending,
          depthTest: false,
          transparent: true,
          color: new THREE.Color().setHSL(...colors[index % colors.length]),
        });

        const particles = new THREE.Points(geometry, material);
        particles.rotation.x = Math.random() * 6;
        particles.rotation.y = Math.random() * 6;
        particles.rotation.z = Math.random() * 6;
        scene.add(particles);
      });

    });

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      const isMobile = window.innerWidth / window.innerHeight > 1 ? false : true;
      scene.background = textureLoader.load(isMobile ? croppedAurora : ApothesisOfHercules);
    }

    window.addEventListener("resize", onWindowResize);

    function animate() {
      requestAnimationFrame(animate);
      const time = Date.now() * 0.000009;

      scene.children.forEach((object, i) => {
        if (object instanceof THREE.Points) {
          object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
        }
      });

      composer.render();
    }

    animate();

    return () => {
      document
        .getElementById("snow-scene-container")
        .removeChild(renderer.domElement);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <div id="snow-scene-container" />;
};

export default SnowScene;
