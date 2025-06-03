"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="relative h-[90vh] bg-gradient-to-b from-primary/90 to-accent/70 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/globe.svg')] bg-no-repeat bg-right-bottom opacity-10"></div>
      <Navbar />
      
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Rueda Valentin
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-white/80">
            Étudiant à Epitech, développeur passionné
          </h2>
          <p className="text-lg text-white/70 max-w-lg">
            Bienvenue sur mon portfolio. Je crée des applications modernes et intuitives avec les dernières technologies web.
          </p>
          
          <div className="flex gap-5 pt-4">
            <motion.a 
              href="https://github.com/Val8063" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="text-white text-2xl hover:text-white/80 transition-colors"
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="text-white text-2xl hover:text-white/80 transition-colors"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="mailto:contact@example.com"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="text-white text-2xl hover:text-white/80 transition-colors"
            >
              <FaEnvelope />
            </motion.a>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="pt-6"
          >
            <a 
              href="#projects" 
              className="inline-block px-6 py-3 bg-white text-primary rounded-full font-medium shadow-lg transition-all hover:shadow-xl"
            >
              Voir mes projets
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </header>
  );
}
