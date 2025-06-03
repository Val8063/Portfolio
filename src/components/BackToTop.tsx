"use client";

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-transparent border border-blue-500 text-blue-400 rounded-full z-50 hover:text-white group"
          aria-label="Retour en haut"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 0 15px rgba(56, 182, 255, 0.5), 0 0 30px rgba(56, 182, 255, 0.3)'
          }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Fond animé au hover */}
          <motion.span 
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
            animate={{ scale: [0.8, 1], opacity: [0, 1] }}
            exit={{ scale: 0.8, opacity: 0 }}
          />
          
          {/* Cercle externe animé */}
          <motion.span 
            className="absolute inset-0 rounded-full border border-blue-400"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
              borderColor: ["rgba(56, 182, 255, 0.3)", "rgba(56, 182, 255, 0.8)", "rgba(56, 182, 255, 0.3)"]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Icône */}
          <FaArrowUp className="relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
