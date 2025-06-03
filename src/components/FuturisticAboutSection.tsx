"use client";

import { motion } from 'framer-motion';
import {
  FaCode,
  FaCogs,
  FaPython,
  FaGlobe,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
import GlitchText from './GlitchText';

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

function FuturisticSkillCard({ icon, title, description, delay }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        delay, 
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ y: -10, boxShadow: "0 0 20px rgba(56, 182, 255, 0.3)" }}
      className="glass rounded-xl p-6 border border-blue-300/10 hover:border-blue-300/30 transition-all duration-500 relative overflow-hidden group"
    >
      {/* Effet de bordure lumineuse */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 z-0"></div>
      
      {/* Icône */}
      <div className="text-blue-400 text-4xl mb-5 relative z-10 group-hover:text-blue-300 transition-colors duration-300">
        {icon}
        <div className="absolute -inset-2 bg-blue-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
      </div>
      
      {/* Titre */}
      <h3 className="font-cyber font-bold text-lg mb-3 relative z-10 text-blue-100 group-hover:text-blue-50 transition-colors duration-300">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-blue-200/70 relative z-10 group-hover:text-blue-100/90 transition-colors duration-300">
        {description}
      </p>
      
      {/* Effet scanline */}
      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-30 pointer-events-none">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent absolute animate-scanline"></div>
      </div>
    </motion.div>
  );
}

export default function FuturisticAboutSection() {
    const skills = [
      {
        icon: <FaCode />,
        title: "Développement Frontend",
        description: "Je crée des interfaces modernes et immersives avec React, Next.js et Tailwind CSS.",
      },
      {
        icon: <FaCogs />,
        title: "Développement C",
        description: "Je développe des applications performantes en C avec une approche bas niveau.",
      },
      {
        icon: <FaPython />,
        title: "Développement Python",
        description: "Je maîtrise Python pour le scripting, l’automatisation et le développement logiciel.",
      },
      {
        icon: <FaGlobe />,
        title: "Anglais (niveau C1)",
        description: "Je communique efficacement en anglais à l’oral comme à l’écrit (niveau C1 CECRL).",
      },
      {
        icon: <FaUsers />,
        title: "Travail en équipe",
        description: "J’ai l’habitude de collaborer en groupe grâce aux projets à Epitech.",
      },
      {
        icon: <FaLightbulb />,
        title: "Apprentissage autonome",
        description: "J’apprends rapidement de nouvelles technologies de manière autodidacte.",
      },
    ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Arrière-plan avec grille */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid-pattern opacity-20 z-0"></div>
      
      {/* Cercle décoratif */}
      <div className="absolute -left-40 -bottom-40 w-80 h-80 rounded-full bg-gradient-radial from-blue-500/10 to-transparent animate-pulse-neon z-0"></div>
      <div className="absolute -right-20 top-20 w-60 h-60 rounded-full bg-gradient-radial from-indigo-500/10 to-transparent animate-float z-0"></div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Titre de section avec effet glitch */}
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              <GlitchText text="À propos de moi" />
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
            className="text-lg text-blue-100/70 max-w-2xl mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Je suis étudiant à Epitech, passionné par le développement logiciel et les technologies web.
            J&apos;explore sans cesse de nouvelles technologies pour créer des expériences numériques
            innovantes et performantes.
          </motion.p>
          
          {/* Lien Terminal pour effet futuriste */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 inline-block"
          >
            <div className="font-mono text-sm text-blue-300/80 bg-blue-950/30 px-4 py-2 rounded-lg border border-blue-500/20 inline-block">
              <span className="text-blue-400">$</span> ./explorer <span className="text-purple-400">--technologies</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Grille de compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <FuturisticSkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
