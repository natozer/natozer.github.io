import React, { useEffect, useRef} from 'react';
import * as THREE from 'three';
import "../component_styles/CreditsSidebar.css";

const SnowScene = (() => {
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);

  const handleMobileLoad = (textureLoader, scene) => {
    const aspectRatioThreshold = 1.2;
    const aspectRatio = window.innerWidth / window.innerHeight;

    if (aspectRatio < aspectRatioThreshold) {
      textureLoader.load('images/cropped_aurora.jpg', function (texture) {
        scene.background = texture;
      });
    } else {
      textureLoader.load('images/aurora.jpg', function (texture) {
        scene.background = texture;
      });
    }
  };

  useEffect(() => {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.z = 1000;
    cameraRef.current = camera;

    const scene = new THREE.Scene();
    const textureLoader = new THREE.TextureLoader();

    handleMobileLoad(textureLoader, scene);

    scene.fog = new THREE.FogExp2(0x000000, 0.0008);
    sceneRef.current = scene;

    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('particle-system-container').appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 999; i++) {
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;
      vertices.push(x, y, z);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const sprite = textureLoader.load('images/snowflake.png');
    const sizes = [10, 15, 20];
    const colors = [
      [1.0, 0.2, 0.5],
      [0.95, 0.1, 0.5],
      [0.90, 0.05, 0.5]
    ];

    sizes.forEach((size, index) => {
      const material = new THREE.PointsMaterial({
        size,
        map: sprite,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true,
        color: new THREE.Color().setHSL(...colors[index % colors.length])
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);
    });

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      handleMobileLoad(textureLoader, scene);
    }
    window.addEventListener('resize', onWindowResize);

    function animate() {
      requestAnimationFrame(animate);
      let time = Date.now() * 0.00003;

      scene.children.forEach((object, i) => {
        if (object instanceof THREE.Points) {
          object.rotation.y = time * (i + 1);
          object.position.x = Math.sin(time + i) * 20;
          object.position.y = Math.cos(time + i) * 20;
        }
      });

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

export default SnowScene;
