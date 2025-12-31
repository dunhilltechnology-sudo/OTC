"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Aria Lounge Chair",
    category: "Seating",
    price: "₹45,000",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Teak Dining Table",
    category: "Tables",
    price: "₹85,000",
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Helix Pendant Light",
    category: "Lighting",
    price: "₹28,000",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Woven Accent Rug",
    category: "Textiles",
    price: "₹18,000",
    image: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=1974&auto=format&fit=crop",
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <motion.div style={{ y }} className="relative">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#ebe6df]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-all duration-1000 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <span className="text-white text-sm uppercase tracking-widest">View Details</span>
          </motion.div>

          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#92400e]">
              {product.category}
            </span>
            <span className="text-sm font-light text-[#666]">{product.price}</span>
          </div>
          <h4 className="text-xl font-serif font-light tracking-wide group-hover:text-[#92400e] transition-colors duration-300">
            {product.name}
          </h4>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function WhatsHotSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const titleX = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="relative py-32 md:py-40 bg-[#f8f5f0] overflow-hidden">
      <motion.div
        style={{ x: titleX }}
        className="absolute top-1/2 -translate-y-1/2 left-0 text-[20vw] font-serif font-light text-[#1a1a1a]/[0.02] whitespace-nowrap pointer-events-none select-none"
      >
        TRENDING NOW
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-[#d4a574] text-sm uppercase tracking-[0.4em] font-light">
              Featured
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight">
              What's <span className="text-[#92400e]">Hot</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-4 text-sm uppercase tracking-[0.2em] font-light"
            >
              <span className="relative">
                Explore All
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1a1a1a] transform scale-x-100 group-hover:scale-x-0 transition-transform duration-500 origin-right" />
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#92400e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-[#666] text-sm tracking-wide">
            Each piece is handcrafted with intention and care
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a574]/20 to-transparent" />
    </section>
  );
}
