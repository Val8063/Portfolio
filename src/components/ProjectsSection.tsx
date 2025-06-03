"use client";

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio",
      description: "Le site que vous consultez actuellement, réalisé avec Next.js et Tailwind CSS.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "/file.svg",
      github: "#"
    },
    {
      title: "Wolf3D",
      description: "Recréation du jeu Wolfenstein 3D en C avec un moteur de rendu personnalisé.",
      tags: ["C", "Raycasting", "Graphics"],
      link: "https://github.com/Val8063/Wolf3D",
      github: "https://github.com/Val8063/Wolf3D",
      image: "/window.svg"
    },
    {
      title: "Application Mobile",
      description: "Application mobile développée avec React Native pour la gestion de tâches quotidiennes.",
      tags: ["React Native", "JavaScript", "Firebase"],
      image: "/vercel.svg"
    },
    {
      title: "API RESTful",
      description: "Backend d'une application web avec authentification, gestion des utilisateurs et CRUD.",
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
      image: "/next.svg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Projets</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets récents. Chaque projet représente
            une opportunité d&apos;apprentissage et de croissance dans mon parcours de développeur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
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
