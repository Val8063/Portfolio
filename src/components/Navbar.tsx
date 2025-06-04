"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import GlitchText from './GlitchText';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    })
  };

  const navLinks = [
    { name: 'Présentation', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Effet de halo pour les éléments de navigation
  const glowEffect = isScrolled ? 
    'bg-gradient-to-b from-background/90 via-background/80 to-background/90 backdrop-blur-md shadow-[0_5px_15px_rgba(0,0,0,0.2)]' : 
    'bg-transparent';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${glowEffect} border-b border-blue-500/10`}
      style={{
        borderImage: isScrolled ? 'linear-gradient(90deg, transparent, var(--neon-blue), transparent) 1' : 'none',
        boxShadow: isScrolled ? '0 5px 20px rgba(56, 182, 255, 0.15)' : 'none'
      }}
    >
      <div className="container mx-auto px-4 max-w-5xl flex justify-between items-center py-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" className="font-orbitron text-xl font-bold relative group">
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              <GlitchText text="Rueda Valentin" />
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <motion.ul 
            className="flex gap-8 items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {navLinks.map((link, index) => (
              <motion.li 
                key={index}
                custom={index}
                variants={navVariants}
                initial="hidden"
                animate="visible"
                onHoverStart={() => setHoveredLink(index)}
                onHoverEnd={() => setHoveredLink(null)}
                className="relative"
              >
                <a 
                  href={link.href} 
                  className="font-cyber font-bold text-lg transition-colors hover:text-blue-400 py-2 px-1 relative"
                >
                  {link.name}
                  
                  {/* Animation sur hover */}
                  {hoveredLink === index && (
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.2 }}
                      layoutId="underline"
                    />
                  )}
                  
                  {/* Effet néon sur hover */}
                  <AnimatePresence>
                    {hoveredLink === index && (
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-1 opacity-70"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          boxShadow: '0 0 10px var(--neon-blue), 0 0 20px var(--neon-blue)',
                          background: 'linear-gradient(90deg, transparent, var(--neon-blue), transparent)'
                        }}
                      />
                    )}
                  </AnimatePresence>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="p-2 relative"
            whileTap={{ scale: 0.9 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 8px var(--neon-blue)'
            }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-blue-400"
                >
                  <FaTimes size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-blue-400"
                >
                  <FaBars size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Panel with improved animations */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background/90 backdrop-blur-xl border-t border-blue-500/20"
            style={{
              boxShadow: 'inset 0 5px 15px rgba(56, 182, 255, 0.05)'
            }}
          >
            <motion.ul 
              className="container mx-auto px-4 py-4 flex flex-col gap-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                  className="border-b border-blue-500/10 pb-2"
                >
                  <a 
                    href={link.href} 
                    className="font-cyber font-bold text-lg flex items-center py-2 hover:text-blue-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-blue-500 mr-2">0{index + 1}.</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
