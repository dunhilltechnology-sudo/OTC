"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const team = [
  {
    name: "Arjun Mehta",
    role: "Founder & Lead Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    bio: "With 15 years in furniture design, Arjun brings vision and precision to every creation.",
  },
  {
    name: "Priya Sharma",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    bio: "Priya's eye for detail transforms spaces into experiences.",
  },
  {
    name: "Rahul Verma",
    role: "Master Craftsman",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    bio: "Third-generation woodworker with expertise in traditional joinery.",
  },
];

const values = [
  {
    number: "01",
    title: "Craftsmanship",
    description: "Every piece is handcrafted with meticulous attention to detail, honoring traditional techniques while embracing modern innovation.",
  },
  {
    number: "02",
    title: "Sustainability",
    description: "We source responsibly, use eco-friendly materials, and create pieces meant to last generations, not seasons.",
  },
  {
    number: "03",
    title: "Transparency",
    description: "From material sourcing to final finish, we believe in complete openness about our process and pricing.",
  },
  {
    number: "04",
    title: "Timelessness",
    description: "We design beyond trends, creating pieces that remain relevant and beautiful for decades to come.",
  },
];

const milestones = [
  { year: "2018", event: "Founded in Bangalore with a vision for mindful design" },
  { year: "2019", event: "Opened our first workshop and showroom" },
  { year: "2020", event: "Launched our sustainable materials initiative" },
  { year: "2021", event: "Expanded to bespoke interior design services" },
  { year: "2022", event: "Recognized as India's Top Emerging Design Studio" },
  { year: "2023", event: "Opened second studio in Mumbai" },
  { year: "2024", event: "Launched international shipping" },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#f8f5f0]">
      <Navbar />

      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop"
            alt="Workshop"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
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
            Our Story
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-light text-white tracking-tight"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-white/70 text-xl font-light max-w-2xl leading-relaxed"
          >
            An ode to the art of making, where every piece tells a story of dedication, passion, and timeless design.
          </motion.p>
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
                The Beginning
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-tight">
                Born from a love of
                <br />
                <span className="text-[#92400e]">honest craft</span>
              </h2>
              <div className="space-y-6 text-lg text-[#666] font-light leading-relaxed">
                <p>
                  Ode to Creation began in a small Bangalore workshop in 2018, driven by a simple belief: that furniture should be more than functional — it should be meaningful.
                </p>
                <p>
                  We started with three people, a collection of hand tools, and an unwavering commitment to quality. Today, we're a team of 25 artisans, designers, and dreamers, but our philosophy remains unchanged.
                </p>
                <p>
                  Every piece we create is an ode to the beauty of raw materials, the wisdom of traditional techniques, and the homes that will cherish them for generations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=2028&auto=format&fit=crop"
                  alt="Our Workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#1a1a1a] text-white p-8 max-w-[250px]">
                <span className="text-5xl font-serif text-[#d4a574]">7+</span>
                <p className="mt-2 text-sm uppercase tracking-widest text-white/60">
                  Years of Craftsmanship
                </p>
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
              What Guides Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mt-6">
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {values.map((value, index) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 border border-white/10 hover:border-[#d4a574]/30 transition-colors duration-500"
              >
                <span className="absolute -top-6 left-8 text-6xl font-serif text-white/5 group-hover:text-[#d4a574]/20 transition-colors duration-500">
                  {value.number}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-light text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-white/50 font-light leading-relaxed">
                  {value.description}
                </p>
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
            className="text-center mb-20"
          >
            <span className="text-[#d4a574] text-sm uppercase tracking-[0.4em]">
              The People
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mt-6">
              Meet the <span className="text-[#92400e]">Team</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group text-center"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-8">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-[#92400e]/0 group-hover:bg-[#92400e]/10 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-serif font-light mb-2">{member.name}</h3>
                <p className="text-[#92400e] text-sm uppercase tracking-widest mb-4">
                  {member.role}
                </p>
                <p className="text-[#666] font-light">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#ebe6df]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#d4a574] text-sm uppercase tracking-[0.4em]">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mt-6">
              Milestones
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-8 pb-12 relative"
              >
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-3xl font-serif text-[#92400e]">{milestone.year}</span>
                </div>
                <div className="relative flex-1">
                  <div className="absolute left-0 top-3 w-3 h-3 rounded-full bg-[#d4a574]" />
                  <div className="pl-8 border-l border-[#d4a574]/30">
                    <p className="text-lg font-light text-[#1a1a1a]">{milestone.event}</p>
                  </div>
                </div>
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
            className="text-4xl md:text-5xl font-serif font-light text-white mb-8"
          >
            Ready to create something beautiful?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg font-light mb-12 max-w-lg mx-auto"
          >
            Let's bring your vision to life together
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            href="/contact"
            className="inline-flex items-center gap-4 bg-[#d4a574] text-[#1a1a1a] px-10 py-5 text-sm uppercase tracking-[0.2em] font-light hover:bg-white transition-colors duration-500"
          >
            <span>Get in Touch</span>
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
