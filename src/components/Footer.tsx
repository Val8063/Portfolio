"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-10 mt-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Rueda Valentin</h2>
            <p className="text-muted-foreground mt-2">Développeur passionné</p>
          </div>
          
          <div className="space-y-4 md:space-y-0 md:flex md:gap-8">
            <div>
              <h3 className="font-medium mb-2">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">À propos</a></li>
                <li><a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projets</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Réseaux</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Val8063" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
                <a 
                  href="mailto:contact@example.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground">
          <p>&copy; {currentYear} Rueda Valentin. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
