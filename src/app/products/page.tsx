"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const categories = ["All", "Furniture", "Lighting", "Textiles", "Decor"];

const products = [
  {
    id: 1,
    name: "Aria Lounge Chair",
    category: "Furniture",
    price: "₹45,000",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop",
    description: "Ergonomic design with premium upholstery",
  },
  {
    id: 2,
    name: "Teak Dining Table",
    category: "Furniture",
    price: "₹85,000",
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=2070&auto=format&fit=crop",
    description: "Solid teak with natural grain finish",
  },
  {
    id: 3,
    name: "Helix Pendant Light",
    category: "Lighting",
    price: "₹28,000",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1974&auto=format&fit=crop",
    description: "Sculptural brass with warm glow",
  },
  {
    id: 4,
    name: "Woven Accent Rug",
    category: "Textiles",
    price: "₹18,000",
    image: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=1974&auto=format&fit=crop",
    description: "Hand-woven with natural fibers",
  },
  {
    id: 5,
    name: "Minimalist Floor Lamp",
    category: "Lighting",
    price: "₹32,000",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop",
    description: "Sleek metal base with linen shade",
  },
  {
    id: 6,
    name: "Oak Bookshelf",
    category: "Furniture",
    price: "₹65,000",
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=2069&auto=format&fit=crop",
    description: "Modular design with adjustable shelves",
  },
  {
    id: 7,
    name: "Ceramic Vase Set",
    category: "Decor",
    price: "₹8,500",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=2070&auto=format&fit=crop",
    description: "Hand-thrown pottery collection",
  },
  {
    id: 8,
    name: "Linen Throw Blanket",
    category: "Textiles",
    price: "₹6,500",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
    description: "Pure linen with fringe detail",
  },
  {
    id: 9,
    name: "Walnut Side Table",
    category: "Furniture",
    price: "₹35,000",
    image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1974&auto=format&fit=crop",
    description: "Solid walnut with brass accents",
  },
  {
    id: 10,
    name: "Sculptural Wall Sconce",
    category: "Lighting",
    price: "₹15,000",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1974&auto=format&fit=crop",
    description: "Artisan brass wall light",
  },
  {
    id: 11,
    name: "Terracotta Planter",
    category: "Decor",
    price: "₹4,500",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2072&auto=format&fit=crop",
    description: "Handmade with drainage system",
  },
  {
    id: 12,
    name: "Wool Area Rug",
    category: "Textiles",
    price: "₹42,000",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=1974&auto=format&fit=crop",
    description: "Hand-knotted New Zealand wool",
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group cursor-pointer"
    >
      <motion.div style={{ y }}>
        <div className="relative aspect-[3/4] overflow-hidden bg-[#ebe6df] mb-6">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-all duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <p className="text-white text-sm font-light">{product.description}</p>
          </motion.div>

          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#92400e]">
              {product.category}
            </span>
            <span className="text-base font-light text-[#666]">{product.price}</span>
          </div>
          <h4 className="text-xl font-serif font-light tracking-wide group-hover:text-[#92400e] transition-colors duration-300">
            {product.name}
          </h4>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#f8f5f0]">
      <Navbar />

      <section className="relative h-[70vh] overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#2a2a2a_0%,#1a1a1a_70%)]" />
        
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#d4a574] text-sm uppercase tracking-[0.4em] mb-6"
          >
            Our Collection
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-light text-white tracking-tight"
          >
            Products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-white/50 text-lg font-light max-w-md"
          >
            Meticulously crafted pieces for modern living
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"
          />
        </motion.div>
      </section>

      <section className="py-16 px-6 md:px-12 sticky top-0 z-30 bg-[#f8f5f0]/95 backdrop-blur-md border-b border-[#1a1a1a]/5">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative text-sm uppercase tracking-[0.2em] font-light px-4 py-2 transition-colors duration-300 ${
                  activeCategory === category
                    ? "text-[#92400e]"
                    : "text-[#666] hover:text-[#1a1a1a]"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#92400e]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-[#666] text-lg">No products found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 bg-[#1a1a1a]">
        <div className="container mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-light text-white mb-8"
          >
            Can't find what you're looking for?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg font-light mb-12 max-w-lg mx-auto"
          >
            We create bespoke pieces tailored to your vision
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            href="/bespoke"
            className="inline-flex items-center gap-4 bg-[#d4a574] text-[#1a1a1a] px-10 py-5 text-sm uppercase tracking-[0.2em] font-light hover:bg-white transition-colors duration-500"
          >
            <span>Explore Bespoke</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
