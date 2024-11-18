import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import earthTexture from "../assets/earth4.webp";

const RotatingEarth = () => {
  const mountRef = useRef(null);
  let earthMesh = null;
  let lineMaterial = null;

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
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create Earth sphere with texture
    const geometry = new THREE.SphereGeometry(1, 32, 32);
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

    // Create glowing lines
    const createGlowingLines = () => {
      const circleGeometry = new THREE.CircleGeometry(1, 64);
      lineMaterial = new THREE.ShaderMaterial({
        uniforms: {
          glowColor: { value: new THREE.Color(0x00ffff) },
          viewVector: { value: new THREE.Vector3() },
        },
        vertexShader: `
          varying vec3 vVertexWorldPosition;
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          uniform vec3 viewVector;

          void main() {
            vVertexWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
            vNormal = normalize(normalMatrix * normal);
            vViewPosition = normalize(vVertexWorldPosition - viewVector);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 glowColor;
          varying vec3 vNormal;
          varying vec3 vViewPosition;

          void main() {
            float intensity = pow(0.5 - dot(vNormal, vViewPosition), 2.0);
            gl_FragColor = vec4(glowColor, intensity);
          }
        `,
        transparent: true,
        depthWrite: false,
      });

      const line = new THREE.Line(circleGeometry, lineMaterial);
      line.rotation.x = Math.PI / 2;
      scene.add(line);
    };

    createGlowingLines();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      earthMesh.rotation.y += 0.01;
      if (lineMaterial) {
        lineMaterial.uniforms.viewVector.value.copy(camera.position);
      }
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
      renderer.domElement.removeEventListener("mousedown", onMouseDown);
      renderer.domElement.removeEventListener("mousemove", onMouseMove);
      renderer.domElement.removeEventListener("mouseup", onMouseUp);

      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
      if (lineMaterial) lineMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "400px" }} />;
};

export default RotatingEarth;
