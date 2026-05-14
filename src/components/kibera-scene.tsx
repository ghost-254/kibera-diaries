"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function StoryRibbon() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.18;
    mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.18;
  });

  return (
    <mesh ref={mesh} position={[2.5, 0.15, -2]} rotation={[0.2, -0.35, 0.1]}>
      <torusKnotGeometry args={[1.05, 0.08, 220, 18]} />
      <MeshDistortMaterial color="#f59e0b" emissive="#7f1d1d" emissiveIntensity={0.28} roughness={0.35} distort={0.35} speed={1.4} />
    </mesh>
  );
}

function CommunityLights() {
  const points = useMemo(() => {
    return Array.from({ length: 52 }, (_, index) => {
      const angle = (index / 52) * Math.PI * 2;
      const radius = 1.6 + (index % 7) * 0.18;
      return new THREE.Vector3(Math.cos(angle) * radius, (index % 5) * 0.14 - 0.35, Math.sin(angle) * radius - 1.6);
    });
  }, []);

  return (
    <group position={[2.45, -0.35, -2.2]}>
      {points.map((point, index) => (
        <Float key={index} speed={1 + (index % 4) * 0.2} floatIntensity={0.3} rotationIntensity={0.2}>
          <mesh position={point}>
            <sphereGeometry args={[0.035 + (index % 3) * 0.012, 12, 12]} />
            <meshStandardMaterial color={index % 3 === 0 ? "#34d399" : index % 3 === 1 ? "#f59e0b" : "#ffffff"} emissive="#fbbf24" emissiveIntensity={0.4} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export function KiberaScene() {
  return (
    <Canvas camera={{ position: [0, 0.2, 6], fov: 45 }} dpr={[1, 1.6]}>
      <ambientLight intensity={0.75} />
      <directionalLight position={[4, 4, 5]} intensity={1.5} />
      <pointLight position={[-2, 1, 2]} intensity={1.5} color="#34d399" />
      <Stars radius={16} depth={20} count={900} factor={2.5} saturation={0.3} fade speed={0.6} />
      <StoryRibbon />
      <CommunityLights />
    </Canvas>
  );
}
