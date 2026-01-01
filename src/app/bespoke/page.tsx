"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We begin with a conversation. Understanding your space, lifestyle, and vision is essential to creating something truly meaningful.",
    duration: "Week 1",
  },
  {
    step: "02",
    title: "Design",
    description: "Our designers translate your vision into detailed sketches and 3D renders. Every dimension, material, and finish is carefully considered.",
    duration: "Weeks 2-3",
  },
  {
    step: "03",
    title: "Material Selection",
    description: "Choose from our curated selection of sustainably sourced woods, metals, fabrics, and finishes. We'll guide you through every option.",
    duration: "Week 3",
  },
  {
    step: "04",
    title: "Craftsmanship",
    description: "Our master artisans bring your piece to life using traditional techniques and modern precision. Quality takes time, and we never rush.",
    duration: "Weeks 4-10",
  },
  {
    step: "05",
    title: "Delivery & Installation",
    description: "We personally deliver and install your piece, ensuring it's perfectly placed in your space. The journey ends where the story begins.",
    duration: "Week 11",
  },
];

const projects = [
  {
    id: 1,
    title: "The Minimalist Residence",
    location: "Koramangala, Bangalore",
    category: "Full Home",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Heritage Dining Collection",
    location: "Juhu, Mumbai",
    category: "Custom Furniture",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1932&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Boutique Hotel Lobby",
    location: "Goa",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function BespokePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#f8f5f0]">
      <Navbar />

      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0"
        >
          <Image
            src="https://i.ibb.co/ccHFm6dh/67da9fa400490-Molteni-Catalogo-7-0572-2025-HR-1.jpg"
            alt="Bespoke Workshop"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#d4a574] text-sm uppercase tracking-[0.4em] mb-6"
          >
            Made for You
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-light text-white tracking-tight"
          >
            Bespoke
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-white/70 text-xl font-light max-w-2xl leading-relaxed"
          >
            Custom creations tailored to your unique vision. Where imagination meets masterful craftsmanship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 bg-[#d4a574] text-[#1a1a1a] px-10 py-5 text-sm uppercase tracking-[0.2em] font-light hover:bg-white transition-colors duration-500"
            >
              <span>Start Your Journey</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-32 md:py-48 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <span className="text-[#d4a574] text-sm uppercase tracking-[0.4em]">
                The Promise
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-tight">
                Your vision,
                <br />
                <span className="text-[#92400e]">our craft</span>
              </h2>
              <div className="space-y-6 text-lg text-[#666] font-light leading-relaxed">
                <p>
                  Bespoke isn't just custom—it's a collaboration. We work closely with architects, designers, and homeowners to create pieces that are uniquely yours.
                </p>
                <p>
                  From a single statement chair to a complete interior transformation, every bespoke project receives the same meticulous attention to detail that defines our studio.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#1a1a1a]/10">
                {[
                  { number: "200+", label: "Bespoke Projects" },
                  { number: "100%", label: "Client Satisfaction" },
                  { number: "∞", label: "Possibilities" },
                ].map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <span className="text-3xl md:text-4xl font-serif text-[#92400e]">
                      {stat.number}
                    </span>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#666]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
                      alt="Custom furniture"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1974&auto=format&fit=crop"
                      alt="Custom lighting"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                      alt="Custom interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=2028&auto=format&fit=crop"
                      alt="Craftsmanship"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#1a1a1a]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#d4a574] text-sm uppercase tracking-[0.4em]">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mt-6">
              The Process
            </h2>
          </motion.div>

          <div className="space-y-0">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-white/10 hover:border-[#d4a574]/30 transition-colors duration-500"
              >
                <div className="md:col-span-1">
                  <span className="text-5xl font-serif text-white/10 group-hover:text-[#d4a574]/40 transition-colors duration-500">
                    {item.step}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-2xl md:text-3xl font-serif font-light text-white">
                    {item.title}
                  </h3>
                </div>
                <div className="md:col-span-6">
                  <p className="text-white/50 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="md:col-span-2 text-right">
                  <span className="text-[#d4a574] text-sm uppercase tracking-widest">
                    {item.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8"
          >
            <div>
              <span className="text-[#d4a574] text-sm uppercase tracking-[0.4em]">
                Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mt-6">
                Featured <span className="text-[#92400e]">Projects</span>
              </h2>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 text-sm uppercase tracking-[0.2em] font-light"
            >
              <span className="relative">
                View All Projects
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1a1a1a] transform scale-x-100 group-hover:scale-x-0 transition-transform duration-500 origin-right" />
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#92400e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </span>
              <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-white text-sm uppercase tracking-widest">View Project</span>
                  </div>
                </div>
                <span className="text-[#92400e] text-xs uppercase tracking-[0.2em]">
                  {project.category}
                </span>
                <h3 className="text-2xl font-serif font-light mt-2 group-hover:text-[#92400e] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#666] text-sm font-light mt-1">{project.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-[#ebe6df] to-[#f8f5f0]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#d4a574] text-sm uppercase tracking-[0.4em]">
              Categories
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mt-6">
              What We Create
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Custom Furniture", desc: "Tables, chairs, cabinets, and more" },
              { title: "Interior Design", desc: "Complete space transformations" },
              { title: "Lighting Solutions", desc: "Bespoke fixtures and installations" },
              { title: "Art & Sculpture", desc: "Unique statement pieces" },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-white hover:bg-[#1a1a1a] transition-colors duration-500 cursor-pointer"
              >
                <h3 className="text-xl font-serif font-light group-hover:text-white transition-colors duration-500">
                  {category.title}
                </h3>
                <p className="text-[#666] text-sm font-light mt-2 group-hover:text-white/50 transition-colors duration-500">
                  {category.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 bg-[#1a1a1a]">
        <div className="container mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-8"
          >
            Let's create something
            <br />
            <span className="text-[#d4a574]">extraordinary</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg font-light mb-12 max-w-lg mx-auto"
          >
            Your bespoke journey begins with a single conversation
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            href="/contact"
            className="inline-flex items-center gap-4 bg-[#d4a574] text-[#1a1a1a] px-10 py-5 text-sm uppercase tracking-[0.2em] font-light hover:bg-white transition-colors duration-500"
          >
            <span>Schedule Consultation</span>
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
