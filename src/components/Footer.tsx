"use client";

import React, { useRef } from "react";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Facebook, Linkedin, ArrowUpRight } from "lucide-react";

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const links = [
    { name: "Products", href: "/products" },
    { name: "Bespoke", href: "/bespoke" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const social = [
    { name: "Instagram", icon: <Instagram size={18} />, href: "https://www.instagram.com/odetocreation.in/" },
    { name: "Facebook", icon: <Facebook size={18} />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin size={18} />, href: "#" },
  ];

  return (
    <footer
      ref={containerRef}
      className="relative bg-[#1a1a1a] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#2a2a2a_0%,#1a1a1a_50%)]" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 pt-32 pb-12 px-6 md:px-12"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-5 space-y-12">
              <Link href="/" className="inline-block group">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-serif font-light tracking-[0.2em] uppercase group-hover:text-[#d4a574] transition-colors duration-500"
                >
                  Ode to Creation
                </motion.span>
              </Link>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/50 text-lg font-light leading-relaxed max-w-md"
              >
                Crafting timeless furniture and spaces that celebrate the beauty of thoughtful design and honest craftsmanship.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                  Stay Updated
                </p>
                <div className="flex border-b border-white/20 pb-3 group max-w-md">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent w-full outline-none text-lg font-light placeholder:text-white/30 text-white"
                  />
                  <button className="group-hover:translate-x-2 transition-transform duration-300 text-[#d4a574]">
                    <ArrowUpRight size={24} strokeWidth={1} />
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-3 lg:col-start-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                  Navigation
                </p>
                <ul className="space-y-4">
                  {links.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-lg font-light hover:text-[#d4a574] transition-colors duration-300"
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight
                          size={14}
                          className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                        />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-8"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                  Connect
                </p>
                <ul className="space-y-4">
                  {social.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-4 text-lg font-light hover:text-[#d4a574] transition-colors duration-300"
                      >
                        <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#d4a574] group-hover:bg-[#d4a574]/10 transition-all duration-300">
                          {item.icon}
                        </span>
                        <span>{item.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="pt-8 space-y-2">
                  <p className="text-white/30 text-sm font-light">
               Contact@odetocreation.com
                  </p>
                  <p className="text-white/30 text-sm font-light">
                    +91 98765 43210
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left"
          />

          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-[10px] uppercase tracking-[0.2em] text-white/30"
            >
              © 2025 Ode to Creation. All rights reserved
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.2em] text-white/30"
            >
              <span>Credits: ThSparksMedia</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/shipping" className="hover:text-white transition-colors">
                Shipping
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#d4a574] via-[#92400e] to-[#d4a574]" />

      <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-32 h-32 rounded-full border border-[#d4a574]/10 pointer-events-none" />
    </footer>
  );
}
