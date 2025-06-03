"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

type ProjectCardProps = {
  title: string;
  description: string;
  link?: string;
  tags?: string[];
  github?: string;
  image?: string;
};

export default function FuturisticProjectCard({ 
  title, 
  description, 
  link, 
  tags = [], 
  github, 
  image 
}: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      <Tilt
        className="w-full h-full"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        glareEnable={true}
        glareMaxOpacity={0.2}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="12px"
      >
        <div className="relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden h-full group transition-all duration-300 hover:shadow-[0_0_30px_rgba(120,180,255,0.3)] hover:scale-[1.02]">
          {/* Overlay de brillance lors du survol */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/5 to-transparent z-10 transition-opacity duration-1000 bg-[length:50%_100%] bg-no-repeat animate-shimmer"></div>
          
          {/* Image du projet */}
          {image && (
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
              <Image 
                src={image} 
                alt={title} 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-5000 group-hover:scale-110"
              />
            </div>
          )}
          
          {/* Contenu */}
          <div className="p-6 relative z-20">
            {/* Titre avec effet de ligne */}
            <div className="relative mb-3">
              <h3 className="text-xl font-bold text-white inline-block">
                {title}
              </h3>
              <div className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
            </div>
            
            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 bg-white/10 text-blue-200 text-xs rounded-full border border-blue-300/20 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {/* Description */}
            <p className="text-gray-300 mb-4">{description}</p>
            
            {/* Liens */}
            <div className="flex gap-4 mt-auto">
              {github && (
                <motion.a 
                  href={github} 
                  className="flex items-center gap-1 text-blue-300 hover:text-blue-100 transition-colors" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="mr-1" />
                  <span>Code</span>
                </motion.a>
              )}
              
              {link && (
                <motion.a 
                  href={link} 
                  className="flex items-center gap-1 text-blue-300 hover:text-blue-100 transition-colors" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt size={14} className="mr-1" />
                  <span>Voir le projet</span>
                </motion.a>
              )}
            </div>
          </div>
          
          {/* Bordure brillante */}
          <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none"></div>
        </div>
      </Tilt>
    </motion.div>
  );
}
