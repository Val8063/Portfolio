"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface FuturisticDividerProps {
  className?: string;
}

interface Particle {
  id: number;
  left: string;
  top: string;
  opacity: number;
  yMovement: number;
  xMovement: number;
  scale: number;
  duration: number;
}

export default function FuturisticDivider({ className = "" }: FuturisticDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  
  // État pour les particules, initialisé à un tableau vide
  const [particles, setParticles] = useState<Particle[]>([]);
  
  // Génération des particules uniquement côté client après montage du composant
  useEffect(() => {
    const particlesArray: Particle[] = [];
    
    for (let i = 0; i < 10; i++) {
      particlesArray.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: 0.4 + Math.random() * 0.6,
        yMovement: Math.random() * 30 - 15,
        xMovement: Math.random() * 30 - 15,
        scale: 0.8 + Math.random() * 0.5,
        duration: 2 + Math.random() * 3
      });
    }
    
    setParticles(particlesArray);
  }, []);
  
  return (
    <motion.div 
      ref={ref}
      className={`relative h-32 w-full my-12 ${className}`}
      style={{ opacity }}
    >
      {/* Ligne horizontale avec effet néon */}
      <motion.div 
        className="absolute top-1/2 left-0 right-0 h-px bg-blue-500 transform -translate-y-1/2"
        style={{
          boxShadow: '0 0 10px var(--neon-blue), 0 0 20px var(--neon-blue)',
          background: 'linear-gradient(90deg, transparent, var(--neon-blue), transparent)'
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      {/* Cercle central avec pulsation */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-500"
        style={{
          boxShadow: '0 0 10px var(--neon-blue), 0 0 20px var(--neon-blue), inset 0 0 10px var(--neon-blue)'
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          boxShadow: [
            '0 0 10px var(--neon-blue), 0 0 20px var(--neon-blue), inset 0 0 10px var(--neon-blue)',
            '0 0 20px var(--neon-blue), 0 0 30px var(--neon-blue), inset 0 0 15px var(--neon-blue)',
            '0 0 10px var(--neon-blue), 0 0 20px var(--neon-blue), inset 0 0 10px var(--neon-blue)'
          ]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      {/* Cercle externe avec rotation */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400"
        style={{
          borderWidth: '1px',
          borderStyle: 'dashed'
        }}
        animate={{ 
          rotate: 360
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear" 
        }}
      />
      
      {/* Particules décoratives avec valeurs pré-calculées côté client */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 rounded-full bg-blue-400"
            style={{
              left: particle.left,
              top: particle.top,
              opacity: particle.opacity,
              boxShadow: '0 0 5px var(--neon-blue)'
            }}
            animate={{
              y: [0, particle.yMovement],
              x: [0, particle.xMovement],
              scale: [1, particle.scale, 1],
              opacity: [particle.opacity, 0.8, particle.opacity]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
