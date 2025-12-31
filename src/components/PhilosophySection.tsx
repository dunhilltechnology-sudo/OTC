"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".philosophy-word",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const philosophies = [
    {
      number: "01",
      title: "Minimum",
      highlight: "Hardware",
      description: "Just smart joinery and cleaner design lines. No unnecessary elements, only purposeful craft.",
    },
    {
      number: "02",
      title: "Maximum",
      highlight: "Transparency",
      description: "From sourcing to finishing — what we know, you know. Complete honesty in every step.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-40 md:py-56 bg-[#1a1a1a] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#d4a574_0%,transparent_50%)] opacity-10" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#92400e_0%,transparent_50%)] opacity-10" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif font-light text-white/[0.02] whitespace-nowrap pointer-events-none select-none"
      >
        PHILOSOPHY
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-[#d4a574] text-sm uppercase tracking-[0.4em] font-light">
            Our Approach
          </span>
        </motion.div>

        <div
          ref={textRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32"
        >
          {philosophies.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="relative group"
            >
              <span className="absolute -top-8 -left-4 text-8xl md:text-9xl font-serif font-light text-white/[0.05] group-hover:text-[#d4a574]/10 transition-colors duration-700">
                {item.number}
              </span>

              <div className="relative space-y-8 pl-0 lg:pl-8">
                <div className="overflow-hidden">
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white tracking-tight leading-[0.95]">
                    <span className="philosophy-word inline-block">{item.title}</span>
                    <br />
                    <span className="philosophy-word inline-block text-[#d4a574]">
                      {item.highlight}
                    </span>
                  </h2>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="text-xl md:text-2xl font-light text-white/60 max-w-md leading-relaxed"
                >
                  {item.description}
                </motion.p>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 + index * 0.2 }}
                  className="h-[1px] bg-gradient-to-r from-[#d4a574] to-transparent origin-left max-w-[200px]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-32 text-center"
        >
          <p className="text-white/40 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            "We believe in the beauty of simplicity and the strength of
            craftsmanship. Every piece we create is an ode to the art of making."
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a574]/20 to-transparent" />

      <div className="absolute top-20 right-20 w-32 h-32 border border-[#d4a574]/10 rounded-full animate-pulse" />
      <div className="absolute bottom-32 left-20 w-24 h-24 border border-white/5 rounded-full" />
    </section>
  );
}
