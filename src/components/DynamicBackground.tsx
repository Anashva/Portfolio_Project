import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function FloatingParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 120;

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 15],
        speed: 0.2 + Math.random() * 0.5,
        offset: Math.random() * Math.PI * 2,
        scale: 0.02 + Math.random() * 0.06,
      });
    }
    return temp;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    particles.forEach((p, i) => {
      dummy.position.set(
        p.position[0] + Math.sin(t * p.speed + p.offset) * 0.5,
        p.position[1] + Math.cos(t * p.speed * 0.7 + p.offset) * 0.8,
        p.position[2] + Math.sin(t * p.speed * 0.3) * 0.3
      );
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#38bdf8" transparent opacity={0.4} />
    </instancedMesh>
  );
}

function FloatingShapes() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.y = t * 0.05;
    group.current.rotation.x = Math.sin(t * 0.03) * 0.1;
  });

  const shapes = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8 - 3,
      ] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
      scale: 0.3 + Math.random() * 0.7,
      type: i % 3,
      speed: 0.3 + Math.random() * 0.4,
    }));
  }, []);

  return (
    <group ref={group}>
      {shapes.map((s, i) => (
        <RotatingShape key={i} {...s} />
      ))}
    </group>
  );
}

function RotatingShape({ position, rotation, scale, type, speed }: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  type: number;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = rotation[0] + t * speed;
    ref.current.rotation.z = rotation[1] + t * speed * 0.5;
    ref.current.position.y = position[1] + Math.sin(t * speed) * 0.5;
  });

  const geometry = type === 0
    ? <octahedronGeometry args={[1, 0]} />
    : type === 1
    ? <icosahedronGeometry args={[1, 0]} />
    : <tetrahedronGeometry args={[1, 0]} />;

  return (
    <mesh ref={ref} position={position} scale={scale}>
      {geometry}
      <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.15} />
    </mesh>
  );
}

function GridPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
      <planeGeometry args={[40, 40, 40, 40]} />
      <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.04} />
    </mesh>
  );
}

export default function DynamicBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]}>
        <FloatingParticles />
        <FloatingShapes />
        <GridPlane />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90 pointer-events-none" />
    </div>
  );
}
