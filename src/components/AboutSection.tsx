"use client";

import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaMobileAlt } from 'react-icons/fa';

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
    >
      <div className="text-primary text-3xl mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">À propos de moi</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Je suis étudiant à Epitech, passionné par le développement logiciel et les technologies web.
            J&apos;aime créer des expériences numériques modernes et intuitives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard
            icon={<FaCode />}
            title="Développement Frontend"
            description="Je crée des interfaces modernes avec React, Next.js et Tailwind CSS."
          />
          <SkillCard
            icon={<FaServer />}
            title="Développement Backend"
            description="J&apos;implémente des API robustes et efficaces en Node.js, Express et MongoDB."
          />
          <SkillCard
            icon={<FaLaptopCode />}
            title="Développement C/C++"
            description="Je développe des applications robustes et performantes en C et C++."
          />
          <SkillCard
            icon={<FaMobileAlt />}
            title="Applications Mobiles"
            description="Je crée des applications mobiles avec React Native et Flutter."
          />
        </div>
      </div>
    </section>
  );
}
