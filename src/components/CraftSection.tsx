"use client";
 
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function CraftSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const crafts = [
    {
      title: "Furniture Design.",
      description: "Timeless forms shaped by thoughtful craftsmanship.",
      y: y1,
    },
    {
      title: "Interior Design.",
      description: "Spaces curated with balance, warmth, and intention.",
      y: y2,
    },
    {
      title: "Lighting Design.",
      description: "Light that enhances mood, texture, and architecture.",
      y: y3,
    },
  ];

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-white overflow-hidden">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-light font-serif mb-24 tracking-wide"
        >
          Our Craft and Creation
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text content */}
          <div className="space-y-32 py-12">
            {crafts.map((craft, index) => (
              <motion.div
                key={index}
                style={{ y: craft.y }} 
                className="max-w-md"
              >
                <h3 className="text-2xl md:text-3xl font-light mb-4">{craft.title}</h3>
                <p className="text-zinc-500 font-light leading-relaxed tracking-wide">
                  {craft.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right: Large Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] md:h-[800px] w-full grayscale hover:grayscale-0 transition-all duration-1000"
          >
            <Image
              src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=2028&auto=format&fit=crop"
              alt="Premium Furniture Craftsmanship"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
