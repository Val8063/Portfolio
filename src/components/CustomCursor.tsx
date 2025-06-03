"use client";

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;
    const cursorOutline = document.querySelector('.cursor-outline') as HTMLElement;
    
    if (!cursorDot || !cursorOutline) return;

    // Positions initiales pour éviter les sauts au chargement
    cursorDot.style.opacity = '0';
    cursorOutline.style.opacity = '0';
    
    window.addEventListener('mousemove', (e) => {
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
    });
    
    // Effet de clic
    window.addEventListener('mousedown', () => {
      cursorDot.style.transform = 'translate(-50%, -50%) scale(0.75)';
      cursorOutline.style.transform = 'translate(-50%, -50%) scale(0.75)';
      
      cursorDot.style.backgroundColor = 'rgba(124, 58, 237, 0.8)';
      cursorOutline.style.borderColor = 'rgba(124, 58, 237, 0.8)';
      cursorOutline.style.backgroundColor = 'rgba(124, 58, 237, 0.1)';
    });
    
    window.addEventListener('mouseup', () => {
      cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
      
      cursorDot.style.backgroundColor = 'rgba(56, 182, 255, 0.8)';
      cursorOutline.style.borderColor = 'rgba(56, 182, 255, 0.8)';
      cursorOutline.style.backgroundColor = 'transparent';
    });
    
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
    
    // Appliquer l'effet sur tous les éléments interactifs
    document.querySelectorAll('a, button, input, textarea, select, [role="button"]').forEach(element => {
      element.addEventListener('mouseenter', handleElementHover);
      element.addEventListener('mouseleave', handleElementLeave);
    });
    
    // Masquer le curseur quand il quitte la fenêtre
    document.body.addEventListener('mouseleave', () => {
      cursorDot.style.opacity = '0';
      cursorOutline.style.opacity = '0';
    });
    
    document.body.addEventListener('mouseenter', () => {
      cursorDot.style.opacity = '1';
      cursorOutline.style.opacity = '1';
    });
    
    // Désactiver sur mobile
    if (window.matchMedia('(hover: none)').matches) {
      cursorDot.style.display = 'none';
      cursorOutline.style.display = 'none';
    }

    // Nettoyage
    return () => {
      window.removeEventListener('mousemove', () => {});
      window.removeEventListener('mousedown', () => {});
      window.removeEventListener('mouseup', () => {});
      
      document.querySelectorAll('a, button, input, textarea, select, [role="button"]').forEach(element => {
        element.removeEventListener('mouseenter', handleElementHover);
        element.removeEventListener('mouseleave', handleElementLeave);
      });
      
      document.body.removeEventListener('mouseleave', () => {});
      document.body.removeEventListener('mouseenter', () => {});
    };
  }, []);

  return null;
}
