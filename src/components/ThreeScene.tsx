"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, PresentationControls, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function AbstractShape({ position, color, speed = 1, type = "box" }: any) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.1;
      ref.current.rotation.y += 0.005 * speed;
    }
  });

  return (
    <Float speed={1.5 * speed} rotationIntensity={1} floatIntensity={1}>
      <mesh
        ref={ref}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.15 : 1}
      >
        {type === "box" && <boxGeometry args={[1, 1, 1]} />}
        {type === "sphere" && <sphereGeometry args={[0.7, 32, 32]} />}
        {type === "torus" && <torusGeometry args={[0.5, 0.2, 16, 64]} />}
        {type === "cone" && <coneGeometry args={[0.6, 1.2, 32]} />}
        
        <meshPhysicalMaterial
          color={color}
          roughness={0.0}
          metalness={1}
          clearcoat={1}
          clearcoatRoughness={0.0}
          reflectivity={1}
          envMapIntensity={3}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-[60vh] md:h-[80vh] cursor-grab active:cursor-grabbing relative overflow-hidden bg-gradient-to-b from-transparent via-blue-500/5 to-transparent rounded-[3rem]" style={{ touchAction: 'none' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: false }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          <PresentationControls
            global
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 2, Math.PI / 2]}
          >
            <group position={[0, -0.5, 0]}>
              <AbstractShape position={[-3, 1.5, -2]} color="#3b82f6" type="box" speed={0.4} />
              <AbstractShape position={[0, 0, 1]} color="#8b5cf6" type="sphere" speed={0.6} />
              <AbstractShape position={[3, 2, -1]} color="#ec4899" type="torus" speed={1} />
              <AbstractShape position={[-1.5, -1.5, 1]} color="#10b981" type="cone" speed={0.5} />
              <AbstractShape position={[2, -1, 0.5]} color="#f59e0b" type="box" speed={0.7} />
              <AbstractShape position={[-0.5, 2, -3]} color="#6366f1" type="sphere" speed={0.3} />
            </group>
          </PresentationControls>

          <ContactShadows position={[0, -3, 0]} opacity={0.3} scale={15} blur={2} far={4} />
          {process.env.NODE_ENV === "production" && <Environment preset="city" />}
        </Suspense>
      </Canvas>
    </div>
  );
}


