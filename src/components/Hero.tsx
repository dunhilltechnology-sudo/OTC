"use client";

import React, { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import gsap from "gsap";
import * as THREE from "three";

function FloatingShape({ position, scale, color, speed = 1, distort = 0.3 }: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed?: number;
  distort?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime() * speed;
      meshRef.current.rotation.x = Math.sin(t / 4) / 4;
      meshRef.current.rotation.y = Math.cos(t / 4) / 4;
      meshRef.current.position.y = position[1] + Math.sin(t) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.1}
          metalness={0.8}
          distort={distort}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function FloatingTorus({ position, scale, color }: {
  position: [number, number, number];
  scale: number;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.z = t * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.4, 32, 64]} />
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

function FloatingSphere({ position, scale, color }: {
  position: [number, number, number];
  scale: number;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.position.y = position[1] + Math.sin(t * 0.8) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          roughness={0}
          metalness={1}
          distort={0.4}
          speed={3}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  const { viewport } = useThree();
  const isMobile = viewport.width < 5;

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#d4a574" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#fff5e6"
      />

      <FloatingShape
        position={isMobile ? [1.5, 0.5, -2] : [3, 0.5, -2]}
        scale={isMobile ? 0.3 : 0.5}
        color="#d4a574"
        speed={0.8}
        distort={0.2}
      />

      <FloatingTorus
        position={isMobile ? [-1.5, -0.5, -1] : [-3, -0.5, -1]}
        scale={isMobile ? 0.4 : 0.6}
        color="#1a1a1a"
      />

      <FloatingSphere
        position={isMobile ? [0, 1.5, -3] : [0, 2, -3]}
        scale={isMobile ? 0.5 : 0.8}
        color="#c9b896"
      />

      <FloatingShape
        position={isMobile ? [-2, 1, -4] : [-4, 1, -4]}
        scale={isMobile ? 0.2 : 0.35}
        color="#8b7355"
        speed={1.2}
        distort={0.3}
      />

      <FloatingTorus
        position={isMobile ? [2, -1, -2] : [4, -1, -2]}
        scale={isMobile ? 0.25 : 0.4}
        color="#2a2a2a"
      />

      <Environment preset="studio" />
    </>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    if (titleRef.current && subtitleRef.current) {
      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 100, rotationX: 90 },
        { opacity: 1, y: 0, rotationX: 0, duration: 1.5, ease: "power4.out" }
      );

      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.8"
      );
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#f8f5f0] via-[#f5f2ed] to-[#ebe6df]"
    >
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f8f5f0]/50 pointer-events-none z-[1]" />

      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-5xl perspective-1000">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-[8rem] font-serif font-light text-[#1a1a1a] tracking-[0.15em] uppercase mb-8 leading-[0.9]"
            style={{ opacity: 0 }}
          >
            Ode to
            <br />
            <span className="text-[#92400e]">Creation</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-[#5a5a5a] text-sm md:text-base tracking-[0.5em] uppercase font-light"
            style={{ opacity: 0 }}
          >
            Furniture • Interiors • Lighting
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
      >
        <span className="text-[#8a8a8a] text-[10px] uppercase tracking-[0.4em]">
          Discover
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-[#8a8a8a] to-transparent"
        />
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[2]">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#d4a574]/20 rounded-full" />
        <div className="absolute bottom-32 right-20 w-48 h-48 border border-[#1a1a1a]/10 rounded-full" />
        <div className="absolute top-1/3 right-10 w-2 h-2 bg-[#d4a574] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-[#1a1a1a] rounded-full" />
      </div>
    </section>
  );
}
