import { useEffect, useRef } from 'react'
import Earth from '../../assets/terra.jpeg'
import EarthCloud from '../../assets/earthCloud.png'
import vertexShader from '../../shaders/vertex.glsl'
import fragmentShader from '../../shaders/fragment.glsl'
import atmosphereVertexShader from '../../shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from '../../shaders/atmosphereFragment.glsl'
import gsap from 'gsap'
import * as THREE from 'three';

export function ThreeComponent() {

  const canvasRef = useRef<any>();

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    camera.position.z = 15;
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    //Criando sphere
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms: { globeTexture: { value: new THREE.TextureLoader().load(Earth) } } }));
    const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.ShaderMaterial({ vertexShader: atmosphereVertexShader, fragmentShader: atmosphereFragmentShader, blending: THREE.AdditiveBlending, side: THREE.BackSide }));
    const group = new THREE.Group();

    atmosphere.scale.set(1.1, 1.1, 1.1);

    scene.add(atmosphere)
    group.add(sphere);
    scene.add(group);

    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    const stars = new THREE.Points(starGeometry, starMaterial);
    const starVertices = [];


    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = -Math.random() * 2000;
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    scene.add(stars);

    const mouse = {
      x: 0,
      y: 0
    }

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      sphere.rotation.y += 0.002;
      sphere.rotation.x += 0.002;
      gsap.to(group.rotation, {
        x: -mouse.y * 0.5,
        y: mouse.x * 0.5,
        duration: 2
      })
    };

    animate();

    addEventListener('mousemove', (event) => {
      mouse.x = (event.clientX / innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / innerHeight) * 2 + 1;
    })

    return () => { canvas.appendChild(renderer.domElement) };
    return () => { canvas.removeChild(renderer.domElement) };
  }, [])

  return (
    <>
      <style>
        {`
          #canvas{
            width: 100%;
            height: 100%;
          }
        `}
      </style>
      <div id='canvas' ref={canvasRef} ></div>
    </>
  )
}

