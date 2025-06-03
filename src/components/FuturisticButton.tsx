"use client";

import { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FuturisticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function FuturisticButton({
  children,
  onClick,
  href,
  className = '',
  variant = 'primary',
  size = 'md',
}: FuturisticButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const sizeClasses = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-5 text-base',
    lg: 'py-3 px-8 text-lg',
  };
  
  const baseClasses = `relative flex items-center justify-center font-medium rounded-md transition-all duration-300 ${sizeClasses[size]} ${className}`;
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-[0_0_15px_rgba(100,150,255,0.5)]',
    secondary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-[0_0_15px_rgba(150,100,255,0.5)]',
    outline: 'border border-blue-400 bg-transparent text-blue-400 hover:border-blue-300 hover:text-blue-300 hover:shadow-[0_0_15px_rgba(100,150,255,0.2)]',
  };
  
  const buttonContent = (
    <>
      {/* Contenu principal */}
      <span className="relative z-10">{children}</span>
      
      {/* Effet de brillance lors du survol */}
      <span 
        className={`absolute inset-0 z-0 bg-gradient-to-r ${
          variant === 'primary' ? 'from-blue-500 to-indigo-500' :
          variant === 'secondary' ? 'from-purple-500 to-pink-500' :
          'from-blue-300/30 to-blue-500/30'
        } opacity-0 transition-opacity duration-300 rounded-md ${
          isHovered ? 'opacity-100' : ''
        }`}
      />
      
      {/* Effet de bordure animée */}
      {variant !== 'outline' && (
        <span className="absolute -inset-[1px] z-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 rounded-md opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-300"></span>
      )}
      
      {/* Petites particules animées autour du bouton lors du survol */}
      {isHovered && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-300"
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 0.7 
              }}
              animate={{ 
                x: [0, (Math.random() - 0.5) * 30], 
                y: [0, (Math.random() - 0.5) * 30],
                opacity: 0
              }}
              transition={{ 
                duration: 1 + Math.random(), 
                repeat: Infinity,
                repeatType: 'loop'
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </>
      )}
    </>
  );
  
  if (href) {
    return (
      <motion.a
        href={href}
        className={`group ${baseClasses} ${variantClasses[variant]}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {buttonContent}
      </motion.a>
    );
  }
  
  return (
    <motion.button
      onClick={onClick}
      className={`group ${baseClasses} ${variantClasses[variant]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {buttonContent}
    </motion.button>
  );
}
