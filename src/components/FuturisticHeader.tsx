"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import GlitchText from './GlitchText';
import FuturisticButton from './FuturisticButton';

export default function FuturisticHeader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Animation du canvas pour le fond de grille cyberpunk
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initialisation
    resizeCanvas();
    
    // Grille
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Couleur de la grille (bleu néon)
      ctx.strokeStyle = 'rgba(56, 182, 255, 0.1)';
      ctx.lineWidth = 1;
      
      // Taille des cellules de la grille
      const cellSize = 40;
      
      // Dessin de la grille horizontale
      for (let y = 0; y < canvas.height; y += cellSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Dessin de la grille verticale
      for (let x = 0; x < canvas.width; x += cellSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Points aux intersections
      ctx.fillStyle = 'rgba(56, 182, 255, 0.2)';
      for (let x = 0; x < canvas.width; x += cellSize) {
        for (let y = 0; y < canvas.height; y += cellSize) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Animation des lignes de scan
      const now = Date.now() / 1000;
      
      // Ligne horizontale
      const y = (canvas.height * (Math.sin(now / 2) * 0.5 + 0.5)) % canvas.height;
      ctx.strokeStyle = 'rgba(56, 182, 255, 0.3)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
      
      // Ligne verticale
      const x = (canvas.width * (Math.sin(now / 3) * 0.5 + 0.5)) % canvas.width;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
      
      requestAnimationFrame(drawGrid);
    };
    
    drawGrid();
    
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <header className="relative h-screen overflow-hidden bg-gradient-to-b from-background to-blue-900/10">
      {/* Canvas pour le fond de grille */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0"
      />
      
      {/* Overlay radial pour l'effet de glow au centre */}
      <div className="absolute inset-0 bg-radial-glow z-0"></div>
      
      {/* Lignes de scan */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent absolute animate-scanline"></div>
      </div>
      
      <Navbar />
      
      <div className="container mx-auto px-4 h-full pt-20 flex flex-col justify-center items-start max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-6 max-w-2xl"
        >
          {/* Badge cyberpunk */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-3 py-1 rounded-full border border-blue-500/50 bg-blue-500/10 text-blue-300 text-sm font-mono mb-6"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse-neon"></span>
            DÉVELOPPEUR CURIEUX ET PASSIONÉ
          </motion.div>
          
          {/* Nom avec effet de glitch */}
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-cyber font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-2">
              <GlitchText text="Rueda Valentin" delay={0.3} />
            </h1>
            
            {/* Ligne décorative horizontale */}
            <motion.div 
              className="h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 mt-4"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </div>
          
          {/* Sous-titre */}
          <motion.h2 
            className="text-xl md:text-2xl font-medium text-blue-100/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Étudiant à Epitech, développeur passionné
          </motion.h2>
          
          {/* Description avec effet de révélation */}
          <motion.p 
            className="text-lg text-blue-100/60 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Bienvenue dans mon univers numérique. Je crée des applications innovantes et futuristes, en explorant les limites du web moderne.
          </motion.p>
          
          {/* Icônes réseaux sociaux */}
          <motion.div 
            className="flex gap-5 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.a 
              href="https://github.com/Val8063" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, boxShadow: "0 0 15px rgba(56, 182, 255, 0.7)" }}
              whileTap={{ scale: 0.95 }}
              className="text-blue-300 text-2xl p-2 rounded-full border border-blue-500/30 bg-blue-500/10 transition-all"
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/valentin-rueda"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, boxShadow: "0 0 15px rgba(56, 182, 255, 0.7)" }}
              whileTap={{ scale: 0.95 }}
              className="text-blue-300 text-2xl p-2 rounded-full border border-blue-500/30 bg-blue-500/10 transition-all"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="mailto:valentin.rueda@epitech.eu"
              whileHover={{ y: -5, boxShadow: "0 0 15px rgba(56, 182, 255, 0.7)" }}
              whileTap={{ scale: 0.95 }}
              className="text-blue-300 text-2xl p-2 rounded-full border border-blue-500/30 bg-blue-500/10 transition-all"
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
          
          {/* Boutons d'action */}
          <motion.div 
            className="flex flex-wrap gap-5 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <FuturisticButton href="#projects" size="lg">
              Découvrir mes projets
            </FuturisticButton>
            <FuturisticButton href="#contact" variant="outline" size="lg">
              Me contacter
            </FuturisticButton>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Éléments décoratifs flottants */}
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-gradient-radial from-blue-500/20 to-transparent animate-pulse-neon z-0"></div>
      <div className="absolute top-40 right-[10%] w-32 h-32 rounded-full bg-gradient-radial from-purple-500/20 to-transparent animate-float z-0"></div>
      
      {/* Diviseur de section inférieur */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </header>
  );
}
