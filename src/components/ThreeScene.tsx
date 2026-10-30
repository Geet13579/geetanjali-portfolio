"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "@/lib/hooks";

type PointerRef = React.MutableRefObject<{ x: number; y: number }>;
type Vec3 = [number, number, number];

/** Eases the whole scene toward the pointer for a subtle parallax. */
function Rig({
  pointer,
  enabled,
  children,
}: {
  pointer: PointerRef;
  enabled: boolean;
  children: React.ReactNode;
}) {
  const group = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (!group.current || !enabled) return;
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      pointer.current.x * 0.25,
      3,
      dt
    );
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      -pointer.current.y * 0.15,
      3,
      dt
    );
  });
  return <group ref={group}>{children}</group>;
}

/**
 * Places its child at `position` and spins it in place. The position lives on
 * the outer group so rotation happens around the object, not the scene origin.
 */
function Spinner({
  children,
  position,
  scale = 1,
  speed = [0.2, 0.3, 0],
  enabled,
}: {
  children: React.ReactNode;
  position: Vec3;
  scale?: number;
  speed?: Vec3;
  enabled: boolean;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (!ref.current || !enabled) return;
    ref.current.rotation.x += dt * speed[0];
    ref.current.rotation.y += dt * speed[1];
    ref.current.rotation.z += dt * speed[2];
  });
  return (
    <group position={position} scale={scale}>
      <group ref={ref}>{children}</group>
    </group>
  );
}

/** Small orbiting spheres that ring the hero portrait area. */
function OrbitRing({ enabled, radius = 2.4 }: { enabled: boolean; radius?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current && enabled) ref.current.rotation.z += dt * 0.25;
  });
  const beads = 8;
  return (
    <group rotation={[1.15, 0.2, 0]}>
      <group ref={ref}>
        <mesh>
          <torusGeometry args={[radius, 0.008, 8, 160]} />
          <meshBasicMaterial color="#e0287d" transparent opacity={0.45} />
        </mesh>
        {Array.from({ length: beads }, (_, i) => {
          const a = (i / beads) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(a) * radius, Math.sin(a) * radius, 0]}>
              <sphereGeometry args={[i % 2 ? 0.07 : 0.11, 16, 16]} />
              <meshStandardMaterial
                color={i % 2 ? "#ff5fa8" : "#a3193f"}
                emissive={i % 2 ? "#ff5fa8" : "#7a1230"}
                emissiveIntensity={0.9}
              />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}

function Scene({ pointer, animate }: { pointer: PointerRef; animate: boolean }) {
  const { viewport } = useThree();
  const w = viewport.width / 2;
  const h = viewport.height / 2;
  const small = viewport.width < 7;
  const float = animate ? 1.4 : 0;

  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 5, 4]} intensity={1.4} color="#ffd6e8" />
      <pointLight position={[-5, -2, 3]} intensity={30} color="#e0287d" />
      <pointLight position={[5, 3, 2]} intensity={22} color="#a3193f" />

      <Rig pointer={pointer} enabled={animate}>
        {/* Glossy distorted torus knot, top right */}
        <Float speed={float} rotationIntensity={0.6} floatIntensity={1.2}>
          <Spinner
            enabled={animate}
            position={[w * 0.9, h * 0.62, -1.5]}
            scale={small ? 0.5 : 0.8}
            speed={[0.25, 0.35, 0]}
          >
            <mesh>
              <torusKnotGeometry args={[0.7, 0.22, 180, 28]} />
              <MeshDistortMaterial
                color="#a3193f"
                emissive="#4a0b1d"
                roughness={0.18}
                metalness={0.85}
                distort={animate ? 0.28 : 0}
                speed={2}
              />
            </mesh>
          </Spinner>
        </Float>

        {/* Wireframe icosahedron, bottom left */}
        <Float speed={float} rotationIntensity={0.8} floatIntensity={1.4}>
          <Spinner
            enabled={animate}
            position={[-w * 0.38, -h * 0.92, -2]}
            scale={small ? 0.5 : 0.75}
            speed={[0.18, 0.28, 0.1]}
          >
            <mesh>
              <icosahedronGeometry args={[1, 1]} />
              <meshBasicMaterial color="#e0287d" wireframe transparent opacity={0.55} />
            </mesh>
          </Spinner>
        </Float>

        {/* Faceted gem, bottom right */}
        <Float speed={float * 1.2} rotationIntensity={1} floatIntensity={1.2}>
          <Spinner
            enabled={animate}
            position={[w * 0.45, -h * 0.82, 0.5]}
            scale={small ? 0.32 : 0.5}
            speed={[0.3, 0.5, 0]}
          >
            <mesh>
              <octahedronGeometry args={[1, 0]} />
              <meshStandardMaterial
                color="#ff5fa8"
                emissive="#e0287d"
                emissiveIntensity={0.35}
                roughness={0.15}
                metalness={0.9}
                flatShading
              />
            </mesh>
          </Spinner>
        </Float>

        {/* Thin torus, top centre */}
        <Float speed={float * 0.8} rotationIntensity={0.8} floatIntensity={1}>
          <Spinner
            enabled={animate}
            position={[-w * 0.1, h * 0.8, -2]}
            scale={small ? 0.4 : 0.55}
            speed={[0.4, 0.15, 0.2]}
          >
            <mesh>
              <torusGeometry args={[1, 0.18, 24, 80]} />
              <meshStandardMaterial
                color="#7a1230"
                emissive="#7a1230"
                emissiveIntensity={0.5}
                roughness={0.25}
                metalness={0.8}
              />
            </mesh>
          </Spinner>
        </Float>

        {/* Ring of orbiting beads behind the portrait */}
        <group position={[w * 0.5, 0, -2.5]}>
          <OrbitRing enabled={animate} radius={small ? 1.8 : 2.6} />
        </group>
      </Rig>

      <Sparkles
        count={small ? 35 : 70}
        scale={[viewport.width, viewport.height, 6]}
        size={3}
        speed={animate ? 0.35 : 0}
        color="#ff5fa8"
        opacity={0.8}
      />
    </>
  );
}

/** Interactive 3D hero background. Rendering pauses while off-screen. */
export default function ThreeScene() {
  const reduced = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0,
    });
    io.observe(el);

    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  const animate = !reduced;

  return (
    <div ref={wrapRef} aria-hidden className="absolute inset-0">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 8], fov: 45 }}
        frameloop={inView && animate ? "always" : "demand"}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Scene pointer={pointer} animate={animate} />
      </Canvas>
    </div>
  );
}
