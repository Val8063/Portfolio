"use client";

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    // Vérifier si l'appareil n'est pas tactile
    if (window.matchMedia('(hover: none)').matches) {
      return; // Ne pas initialiser sur les appareils tactiles
    }
    
    // Masquer le curseur par défaut uniquement si le composant est monté
    document.body.style.cursor = 'none';
    
    const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;
    const cursorOutline = document.querySelector('.cursor-outline') as HTMLElement;
    
    if (!cursorDot || !cursorOutline) return;

    // Positions initiales pour éviter les sauts au chargement
    cursorDot.style.opacity = '0';
    cursorOutline.style.opacity = '0';
    
    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;
      
      // Animation du point central (immédiate)
      cursorDot.style.opacity = '1';
      cursorDot.style.transform = `translate(${posX}px, ${posY}px)`;
      
      // Animation du contour (léger délai pour effet fluide)
      cursorOutline.style.opacity = '1';
      cursorOutline.animate({
        transform: `translate(${posX}px, ${posY}px)`
      }, {
        duration: 500,
        fill: 'forwards',
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      });
    };
    
    // Effet de clic
    const handleMouseDown = () => {
      cursorDot.style.transform = 'translate(-50%, -50%) scale(0.75)';
      cursorOutline.style.transform = 'translate(-50%, -50%) scale(0.75)';
      
      cursorDot.style.backgroundColor = 'rgba(124, 58, 237, 0.8)';
      cursorOutline.style.borderColor = 'rgba(124, 58, 237, 0.8)';
      cursorOutline.style.backgroundColor = 'rgba(124, 58, 237, 0.1)';
    };
    
    const handleMouseUp = () => {
      cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
      
      cursorDot.style.backgroundColor = 'rgba(56, 182, 255, 0.8)';
      cursorOutline.style.borderColor = 'rgba(56, 182, 255, 0.8)';
      cursorOutline.style.backgroundColor = 'transparent';
    };
    
    // Détection des éléments cliquables pour changer l'apparence du curseur
    const handleElementHover = () => {
      cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursorOutline.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
      cursorOutline.style.borderWidth = '2px';
    };
    
    const handleElementLeave = () => {
      cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorOutline.style.backgroundColor = 'transparent';
      cursorOutline.style.borderWidth = '1px';
    };
    
    // Masquer le curseur quand il quitte la fenêtre
    const handleMouseLeave = () => {
      cursorDot.style.opacity = '0';
      cursorOutline.style.opacity = '0';
    };
    
    const handleMouseEnter = () => {
      cursorDot.style.opacity = '1';
      cursorOutline.style.opacity = '1';
    };
    
    // Appliquer les event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    
    // Appliquer l'effet sur tous les éléments interactifs
    document.querySelectorAll('a, button, input, textarea, select, [role="button"]').forEach(element => {
      element.addEventListener('mouseenter', handleElementHover);
      element.addEventListener('mouseleave', handleElementLeave);
    });

    // Nettoyage
    return () => {
      // Restaurer le curseur par défaut
      document.body.style.cursor = 'auto';
      
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      
      document.querySelectorAll('a, button, input, textarea, select, [role="button"]').forEach(element => {
        element.removeEventListener('mouseenter', handleElementHover);
        element.removeEventListener('mouseleave', handleElementLeave);
      });
    };
  }, []);

  return null;
}
