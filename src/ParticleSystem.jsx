import React, { useEffect, useRef, forwardRef } from 'react';
import * as THREE from 'three';

const ParticleSystem = forwardRef(() => {
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.z = 1000;
    cameraRef.current = camera;

    const scene = new THREE.Scene();
    const textureLoader = new THREE.TextureLoader();

    textureLoader.load('images/image.jpg', function(texture) {
      scene.background = texture;
    });

    scene.fog = new THREE.FogExp2(0x000000, 0.0008);
    sceneRef.current = scene;

    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('particle-system-container').appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 1000; i++) {
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;
      vertices.push(x, y, z);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const materials = [];
    const parameters = [
      [[1.0, 0.2, 0.5], 'images/snowflake2.png', 20],
      [[0.95, 0.1, 0.5], 'images/snowflake3.png', 15],
      [[0.90, 0.05, 0.5], 'images/snowflake1.png', 10],
      [[0.85, 0, 0.5], 'images/snowflake5.png', 8],
      [[0.80, 0, 0.5], 'images/snowflake4.png', 5]
    ];

    for (let i = 0; i < parameters.length; i++) {
      const color = parameters[i][0];
      const sprite = textureLoader.load(parameters[i][1]);
      const size = parameters[i][2];

      materials[i] = new THREE.PointsMaterial({
        size: size,
        map: sprite,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true
      });

      materials[i].color.setHSL(color[0], color[1], color[2]);

      const particles = new THREE.Points(geometry, materials[i]);

      scene.add(particles);

    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize);


    function animate() {
      requestAnimationFrame(animate);

      let time = Date.now() * 0.00005;

      for (let i = 0; i < scene.children.length; i++) {
        const object = scene.children[i];
        if (object instanceof THREE.Points) {
          object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
        }
      }

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      document.getElementById('particle-system-container').removeChild(renderer.domElement);
      window.removeEventListener('resize', onWindowResize);
    };
  }, []); 

  return <div id="particle-system-container" />;
});

export default ParticleSystem;
