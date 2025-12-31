"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function FreshSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 0.9]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-48 bg-[#f8f5f0] overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute -top-20 -right-40 text-[25vw] font-serif font-light text-[#1a1a1a]/[0.02] whitespace-nowrap pointer-events-none select-none rotate-90"
      >
        FRESH
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            style={{ y: textY }}
            className="space-y-10 lg:pr-12"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-[#d4a574] text-sm uppercase tracking-[0.4em] font-light">
                Latest Collection
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight leading-[0.95]"
              >
                Fresh from
                <br />
                <span className="text-[#92400e]">OTC Studio</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-[#666] font-light leading-relaxed max-w-lg"
            >
          Fresh designs straight from the workshop.
Still smelling like sawdust and big ideas.  </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <Link
                href="/products"
                className="group inline-flex items-center gap-4 bg-[#1a1a1a] text-white px-8 py-4 text-sm uppercase tracking-[0.2em] font-light hover:bg-[#92400e] transition-colors duration-500"
              >
                <span>View Collection</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/bespoke"
                className="group inline-flex items-center gap-4 border border-[#1a1a1a] px-8 py-4 text-sm uppercase tracking-[0.2em] font-light hover:border-[#92400e] hover:text-[#92400e] transition-colors duration-500"
              >
                <span>Go Bespoke</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="pt-8 grid grid-cols-3 gap-8 border-t border-[#1a1a1a]/10"
            >
              {[
                { number: "150+", label: "Designs" },
                { number: "50+", label: "Materials" },
                { number: "100%", label: "Handcrafted" },
              ].map((stat, index) => (
                <div key={stat.label} className="space-y-2">
                  <span className="text-3xl md:text-4xl font-serif font-light text-[#92400e]">
                    {stat.number}
                  </span>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#666]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div ref={imageRef} className="relative">
            <motion.div
              style={{ scale: imageScale }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <motion.div
                initial={{ scale: 1.3 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full"
              >
                <Image
                  src="https://i.ibb.co/YFSW4kvq/IMG-5687-1.jpg"
                  alt="Fresh Collection"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ scaleX: 1 }}
                whileInView={{ scaleX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-[#f8f5f0] origin-right"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -bottom-8 -left-8 bg-white p-8 shadow-2xl shadow-black/5 max-w-[280px]"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-[#d4a574] mb-2">
                Featured
              </p>
              <h4 className="text-xl font-serif font-light mb-2">
                Fresh collection
              </h4>
              <p className="text-sm text-[#666] font-light">
                Solid teak with brass inlay
              </p>
            </motion.div>

            <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#d4a574]/30" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#d4a574]/10" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a574]/30 to-transparent" />
    </section>
  );
}
