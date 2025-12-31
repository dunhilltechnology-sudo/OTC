"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-inner", {
        xPercent: -50,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const words = [
    { text: "Furniture", accent: false },
    { text: "•", accent: true },
    { text: "Light", accent: false },
    { text: "•", accent: true },
    { text: "Space", accent: false },
    { text: "•", accent: true },
    { text: "One Language", accent: false },
    { text: "—", accent: true },
    { text: "Ours", accent: false },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 bg-[#1a1a1a] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#2a2a2a_0%,#1a1a1a_70%)]" />

      <motion.div
        style={{ x: x1 }}
        className="relative overflow-hidden mb-8"
      >
        <div
          ref={marqueeRef}
          className="marquee-inner flex whitespace-nowrap"
        >
          {[...Array(4)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center">
              {words.map((word, index) => (
                <span
                  key={`${setIndex}-${index}`}
                  className={`text-5xl md:text-7xl lg:text-8xl font-serif font-light mx-6 md:mx-10 ${
                    word.accent
                      ? "text-[#d4a574]"
                      : "text-white/90"
                  }`}
                >
                  {word.text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        style={{ x: x2 }}
        className="relative overflow-hidden"
      >
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          {[...Array(4)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center">
              {[...words].reverse().map((word, index) => (
                <span
                  key={`${setIndex}-${index}`}
                  className={`text-3xl md:text-4xl lg:text-5xl font-light mx-6 md:mx-8 tracking-[0.2em] uppercase ${
                    word.accent
                      ? "text-[#92400e]"
                      : "text-white/30"
                  }`}
                >
                  {word.text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#d4a574]/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none" />
    </section>
  );
}
