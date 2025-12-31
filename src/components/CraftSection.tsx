"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const crafts = [
  {
    title: "Furniture",
    subtitle: "Design",
    description: "We design furniture that actually fits — your space, your style, and your mood swings. From sleek statement pieces to cozy corners, we blend brains, beauty, and a bit of madness to craft furniture that feels made just for you (because it is).",
    image: "https://i.ibb.co/Xxp9mpNL/IMG-1309.jpg",
  },
  {
    title: "Interior",
    subtitle: "Design",
    description: "Think of us as design therapists for your space. We listen, we plan, and then we work our magic — transforming chaos into calm, and meh into wow. From mood boards to move-in, we bring interiors to life with a blend of function, feeling, and furniture that actually fits the vibe and the room.",
    image: "https://i.ibb.co/5XmFVZ32/IMG-5955.jpg",
  },
  {
    title: "Lighting",
    subtitle: "Design",
    description: "Let there be light — but the right kind. lighting isn't an afterthought; it's the soul of the space. We design layers of light that work with your interiors, highlight what matters, and occasionally make you feel like you're living in a magazine spread. Functional by day, magical by night — exactly how lighting should be.",
    image: "https://i.ibb.co/kVxG8T2p/IMG-1311-1.jpg",
  },
];

function CraftCard({ craft, index }: { craft: typeof crafts[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-24 lg:py-32 ${
        index % 2 === 1 ? "lg:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        style={{ y }}
        className={`space-y-8 ${index % 2 === 1 ? "lg:order-2" : ""}`}
      >
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#d4a574] text-sm uppercase tracking-[0.3em] font-light">
              0{index + 1}
            </span>
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.h3
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight leading-[0.9]"
          >
            {craft.title}
            <br />
            <span className="text-[#92400e]">{craft.subtitle}</span>
          </motion.h3>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-[#666] font-light leading-relaxed max-w-md"
        >
          {craft.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-4"
        >
          <button className="group flex items-center gap-4 text-sm uppercase tracking-[0.2em] font-light">
            <span className="relative">
              Explore
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#1a1a1a] group-hover:w-full transition-all duration-500" />
            </span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        ref={imageRef}
        style={{ y: imageY }}
        className={`relative overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}
      >
        <motion.div
          initial={{ scale: 1.3, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] overflow-hidden group"
        >
          <Image
            src={craft.image}
            alt={craft.title}
            fill
            className="object-cover transition-transform duration-[2s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>

        <motion.div
          initial={{ scaleX: 1 }}
          whileInView={{ scaleX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-[#f8f5f0] origin-right"
        />
      </motion.div>
    </motion.div>
  );
}

export function CraftSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { x: 0 },
        {
          x: -200,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#f8f5f0] overflow-hidden">
      <div
        ref={titleRef}
        className="absolute top-32 -left-20 text-[15vw] font-serif font-light text-[#1a1a1a]/[0.03] whitespace-nowrap uppercase tracking-wider pointer-events-none select-none"
      >
        Craft & Creation
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-32 pb-16"
        >
          <span className="text-[#d4a574] text-sm uppercase tracking-[0.4em] font-light">
            What We Do
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light mt-6 tracking-tight">
            Our Craft &<br />
            <span className="text-[#92400e]">Creation</span>
          </h2>
        </motion.div>

        <div className="divide-y divide-[#1a1a1a]/10">
          {crafts.map((craft, index) => (
            <CraftCard key={craft.title} craft={craft} index={index} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a574]/30 to-transparent" />
    </section>
  );
}
