"use client";

import { motion } from 'framer-motion';
import FuturisticProjectCard from './FuturisticProjectCard';
import GlitchText from './GlitchText';

export default function FuturisticProjectsSection() {
  const projects = [
    {
      title: "Portfolio Futuriste",
      description: "Le site que vous consultez actuellement, réalisé avec Next.js et Tailwind CSS, avec des animations avancées.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "/images/portfolio.webp",
      github: "https://github.com/Val8063/Portfolio"
    },
    {
      title: "Wolf3D",
      description: "Recréation du jeu Wolfenstein 3D en C avec un moteur de rendu raycasting personnalisé et des effets visuels avancés.",
      tags: ["C", "Raycasting", "Graphics", "Game Development"],
      link: "https://github.com/Val8063/Wolf3D",
      github: "https://github.com/Val8063/Wolf3D",
      image: "/images/wolfenstein3d.webp"
    },
    {
      title: "Corewar",
      description: "Corewar est un projet de programmation bas-niveau où plusieurs programmes s’affrontent dans une machine virtuelle en manipulant directement la mémoire, illustrant la logique des systèmes et l’optimisation du code.",
      tags: ["C", "Assembleur", "Gestion de la mémoire"],
      image: "/images/corewar.webp",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-blue-950/10 to-background">
      {/* Overlay de grille */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid-pattern opacity-20 z-0"></div>
      
      {/* Cercles décoratifs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-gradient-radial from-blue-500/10 to-transparent blur-xl z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-gradient-radial from-indigo-500/10 to-transparent blur-xl z-0"></div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Titre de section avec effet glitch */}
          <div className="inline-block mb-2">
            <h2 className="text-3xl md:text-4xl font-cyber font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              <GlitchText text="Mes Projets" />
            </h2>
          </div>
          
          {/* Ligne décorative */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[3px] bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8"
          />
          
          {/* Description */}
          <motion.p 
            className="text-lg text-blue-100/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Découvrez mes créations les plus récentes. Chaque projet est une exploration 
            des possibilités technologiques et une occasion d&apos;innover.
          </motion.p>
          
          {/* Terminal futuriste */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 mb-12 inline-block"
          >
            <div className="font-mono text-sm text-blue-300/80 bg-blue-950/30 px-4 py-2 rounded-lg border border-blue-500/20 inline-block">
              <span className="text-blue-400">$</span> git clone <span className="text-green-400">https://github.com/Val8063/projects.git</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FuturisticProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              github={project.github}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
