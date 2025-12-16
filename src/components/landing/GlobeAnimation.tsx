"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Generate random points on a sphere surface
function generateSpherePoints(count: number, radius: number): Float32Array {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }
  return points;
}

const RotatingGlobe = () => {
  const globeRef = useRef<THREE.Group>(null!);
  const pointsRef = useRef<THREE.Points>(null!);

  // Slow rotation animation
  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  const spherePoints = generateSpherePoints(2000, 2);

  return (
    <group ref={globeRef} position={[0, -0.5, 0]}>
      {/* Wireframe sphere */}
      <Sphere args={[2, 32, 32]}>
        <meshBasicMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.15}
        />
      </Sphere>

      {/* Dotted points on sphere */}
      <Points positions={spherePoints} ref={pointsRef}>
        <PointMaterial
          transparent
          color="#11ff00ff"
          size={0.03}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>

      {/* Inner glow sphere */}
      <Sphere args={[1.95, 32, 32]}>
        <meshBasicMaterial
          color="#51ff00ff"
          transparent
          opacity={0.05}
        />
      </Sphere>

      {/* Latitude lines - Simple visual addition */}
      {[...Array(5)].map((_, i) => (
        <mesh key={`lat-${i}`} rotation={[Math.PI / 2, 0, 0]} position={[0, -1.5 + i * 0.75, 0]}>
          <ringGeometry args={[1.9, 1.92, 64]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.1} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
};

const GlobeScene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#ff0000ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#3b82f6" />
      <RotatingGlobe />
    </>
  );
};

export const GlobeAnimation = () => {
  return (
    <div className="w-full h-full relative">
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
        <GlobeScene />
      </Canvas>
    </div>
  );
};
