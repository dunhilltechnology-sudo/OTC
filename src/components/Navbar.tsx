"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Bespoke", href: "/bespoke" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isHomePage = pathname === "/";
  const isDarkBg = isHomePage && !isScrolled;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-4 shadow-sm"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="group relative">
            <motion.span
              className={`text-lg md:text-xl font-serif font-light tracking-[0.25em] uppercase transition-colors duration-300 ${
                isDarkBg ? "text-white" : "text-[#1a1a1a]"
              } group-hover:text-[#92400e]`}
            >
              Ode to Creation
            </motion.span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d4a574] group-hover:w-full transition-all duration-500" />
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group"
                >
                  <span
                    className={`text-xs uppercase tracking-[0.2em] font-light transition-colors duration-300 ${
                      isDarkBg
                        ? isActive
                          ? "text-[#d4a574]"
                          : "text-white/80 hover:text-white"
                        : isActive
                        ? "text-[#92400e]"
                        : "text-[#666] hover:text-[#1a1a1a]"
                    }`}
                  >
                    {link.name}
                  </span>
                  <span
                    className={`absolute -bottom-1 left-0 h-[1px] bg-[#d4a574] transition-all duration-500 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <button
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isDarkBg ? "text-white" : "text-[#1a1a1a]"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} strokeWidth={1.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} strokeWidth={1.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-full max-w-md bg-[#f8f5f0] shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 px-8">
                <nav className="space-y-2">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className={`block py-4 text-3xl font-serif font-light border-b border-[#1a1a1a]/10 transition-colors duration-300 ${
                            isActive
                              ? "text-[#92400e]"
                              : "text-[#1a1a1a] hover:text-[#92400e]"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-auto pb-12 space-y-6"
                >
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#92400e]">
                      Contact
                    </p>
                    <p className="text-lg font-light">hello@odetocreation.in</p>
                    <p className="text-lg font-light">+91 98765 43210</p>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/odetocreation.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm uppercase tracking-widest text-[#666] hover:text-[#92400e] transition-colors"
                    >
                      Instagram
                    </a>
                    <span className="text-[#d4a574]">•</span>
                    <a
                      href="#"
                      className="text-sm uppercase tracking-widest text-[#666] hover:text-[#92400e] transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
