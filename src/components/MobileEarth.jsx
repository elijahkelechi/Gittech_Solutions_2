import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import earthTexture from "../assets/earth4.webp";

const MobileEarth = () => {
  const mountRef = useRef(null);
  let earthMesh = null;

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0); // Transparent background
    mountRef.current.appendChild(renderer.domElement);

    // Create Earth sphere with texture
    const geometry = new THREE.SphereGeometry(0.8, 32, 32);
    const texture = new THREE.TextureLoader().load(earthTexture);
    const material = new THREE.MeshStandardMaterial({ map: texture });
    earthMesh = new THREE.Mesh(geometry, material);
    scene.add(earthMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      earthMesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Drag rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = () => {
      isDragging = true;
    };

    const onMouseMove = (e) => {
      if (isDragging) {
        const deltaMove = {
          x: e.clientX - previousMousePosition.x,
          y: e.clientY - previousMousePosition.y,
        };
        const rotationSpeed = 0.005;
        earthMesh.rotation.y += deltaMove.x * rotationSpeed;
        earthMesh.rotation.x += deltaMove.y * rotationSpeed;
      }

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Add event listeners
    renderer.domElement.addEventListener("mousedown", onMouseDown);
    renderer.domElement.addEventListener("mousemove", onMouseMove);
    renderer.domElement.addEventListener("mouseup", onMouseUp);

    // Clean up on component unmount
    return () => {
      // Remove event listeners
      renderer.domElement.removeEventListener("mousedown", onMouseDown);
      renderer.domElement.removeEventListener("mousemove", onMouseMove);
      renderer.domElement.removeEventListener("mouseup", onMouseUp);

      // Dispose of Three.js objects and renderer
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "400px" }} />;
};

export default MobileEarth;
