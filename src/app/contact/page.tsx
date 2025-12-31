"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("sent");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "Contact@odetocreation.com",
      href: "mailto:Contact@odetocreation.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Studio",
      value: "1st floor, 54, Sangam nagar, KBHB, Jodhpur, Rajasthan 342005",
      href: "#",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Hours",
      value: "Mon - Sat: 10AM - 7PM",
      href: "#",
    },
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-[#f8f5f0]">
      <Navbar />

      <section ref={heroRef} className="relative h-[60vh] overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="Contact"
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
            Get in Touch
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-light text-white tracking-tight"
          >
            Contact Us
          </motion.h1>
        </motion.div>
      </section>

      <section className="py-32 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <span className="text-[#d4a574] text-sm uppercase tracking-[0.4em]">
                  Let's Connect
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight">
                  We'd love to hear
                  <br />
                  <span className="text-[#92400e]">from you</span>
                </h2>
                <p className="text-lg text-[#666] font-light leading-relaxed max-w-md">
                  Whether you have a project in mind, a question about our work, or simply want to say hello — we're always happy to connect.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center group-hover:bg-[#d4a574] transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#92400e] mb-1">
                        {item.label}
                      </p>
                      <p className="text-lg font-light group-hover:text-[#92400e] transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="pt-8"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-[#92400e] mb-6">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  {["Instagram", "Facebook", "LinkedIn"].map((social) => (
                    <a
                      key={social}
                      href={social === "Instagram" ? "https://www.instagram.com/odetocreation.in/" : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-[#1a1a1a]/20 text-sm uppercase tracking-widest font-light hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8 bg-white p-10 lg:p-12">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-[#666]">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 text-lg font-light outline-none focus:border-[#92400e] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-[#666]">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 text-lg font-light outline-none focus:border-[#92400e] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#666]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 text-lg font-light outline-none focus:border-[#92400e] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#666]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 text-lg font-light outline-none focus:border-[#92400e] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#666]">
                      Project Type
                    </label>
                    <select className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 text-lg font-light outline-none focus:border-[#92400e] transition-colors appearance-none cursor-pointer">
                      <option value="">Select a category</option>
                      <option value="furniture">Custom Furniture</option>
                      <option value="interior">Interior Design</option>
                      <option value="lighting">Lighting Design</option>
                      <option value="consultation">General Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#666]">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your project..."
                      className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 text-lg font-light outline-none focus:border-[#92400e] transition-colors resize-none placeholder:text-[#aaa]"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={formStatus !== "idle"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#1a1a1a] text-white py-5 text-sm uppercase tracking-[0.2em] font-light hover:bg-[#92400e] transition-colors duration-500 flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {formStatus === "idle" && (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                  {formStatus === "sending" && <span>Sending...</span>}
                  {formStatus === "sent" && <span>Message Sent!</span>}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
          alt="Our Studio"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-[#d4a574] mb-4">
              Visit Our Studio
            </p>
            <h3 className="text-4xl md:text-5xl font-serif font-light mb-6">
             1st floor, 54, Sangam nagar
            </h3>
            <p className="text-white/70 font-light">
             Jodhpur, Rajasthan 342005
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#1a1a1a]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
          >
            {[
              {
                number: "24h",
                label: "Response Time",
                desc: "We aim to respond to all inquiries within 24 hours",
              },
              {
                number: "Free",
                label: "Consultation",
                desc: "Initial design consultations are complimentary",
              },
              {
                number: "Pan-India",
                label: "Delivery",
                desc: "We deliver and install across India",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="space-y-4"
              >
                <span className="text-5xl font-serif text-[#d4a574]">{item.number}</span>
                <h4 className="text-xl font-serif font-light text-white">{item.label}</h4>
                <p className="text-white/50 font-light text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
