"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

type GlitchTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

export default function GlitchText({ text, className = "", delay = 0 }: GlitchTextProps) {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    
    if (!textRef.current) return;
    
    const element = textRef.current;
    
    // Animation d'apparition avec effet de glitch
    const tl = gsap.timeline({ delay });
    
    // Effet de glitch avant l'apparition du texte
    tl.set(element, { opacity: 1, text: '' })
      .to(element, {
        duration: 0.01,
        text: { value: text.replace(/[a-zA-Z]/g, () => String.fromCharCode(Math.floor(Math.random() * 26) + 97)), type: "diff" },
        repeat: 3,
        yoyo: true,
      })
      .to(element, {
        duration: 0.7,
        text: { value: text, type: "diff" },
        ease: "none",
      });
    
    // Petit effet de glitch périodique
    gsap.to(element, {
      textShadow: "0 0 8px rgba(100, 200, 255, 0.8), 0 0 2px rgba(100, 200, 255, 0.8)",
      color: "rgba(230, 240, 255, 1)",
      duration: 0.1,
      repeat: -1,
      repeatDelay: 5,
      yoyo: true,
    });
    
    return () => {
      tl.kill();
    };
  }, [text, delay]);
  
  return (
    <div
      ref={textRef}
      className={`opacity-0 font-mono relative inline-block ${className}`}
      aria-label={text}
    ></div>
  );
}
