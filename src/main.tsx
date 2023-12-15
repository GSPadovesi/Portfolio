import Earth from './assets/terra.jpeg'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import atmosphereVertexShader from './shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from './shaders/atmosphereFragment.glsl'
import * as THREE from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

//Criando sphere
const sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms: { globeTexture: { value: new THREE.TextureLoader().load(Earth) } } }));
const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.ShaderMaterial({ vertexShader: atmosphereVertexShader, fragmentShader: atmosphereFragmentShader, blending: THREE.AdditiveBlending, side: THREE.BackSide }));
atmosphere.scale.set(1.1, 1.1, 1.1);

scene.add(sphere, atmosphere);

camera.position.z = 15;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  sphere.rotation.y += 0.001;
};

animate();




// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// // import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

