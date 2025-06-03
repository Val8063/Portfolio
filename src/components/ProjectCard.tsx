"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  link?: string;
  tags?: string[];
  github?: string;
  image?: string;
};

export default function ProjectCard({ 
  title, 
  description, 
  link, 
  tags = [], 
  github, 
  image 
}: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-card rounded-xl shadow-md border border-border overflow-hidden hover:shadow-lg transition-all"
    >
      {image && (
        <div className="h-48 overflow-hidden relative">
          <Image 
            src={image} 
            alt={title} 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-card-foreground">{title}</h3>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex gap-3">
          {github && (
            <a 
              href={github} 
              className="flex items-center gap-1 text-primary hover:text-primary-dark transition-colors" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span>Code</span>
            </a>
          )}
          
          {link && (
            <a 
              href={link} 
              className="flex items-center gap-1 text-primary hover:text-primary-dark transition-colors" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt size={14} />
              <span>Voir le projet</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
