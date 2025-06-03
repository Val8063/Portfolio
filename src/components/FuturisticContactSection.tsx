"use client";

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaCommentAlt, FaUser, FaPaperPlane } from 'react-icons/fa';
import GlitchText from './GlitchText';

export default function FuturisticContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background avec grille */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid-pattern opacity-20 z-0"></div>
      
      {/* Cercles décoratifs */}
      <div className="absolute top-20 left-10 w-60 h-60 rounded-full bg-gradient-radial from-blue-500/10 to-transparent blur-xl z-0"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gradient-radial from-indigo-500/10 to-transparent blur-xl z-0"></div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Titre avec effet glitch */}
          <div className="inline-block mb-2">
            <h2 className="text-3xl md:text-4xl font-cyber font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              <GlitchText text="Contact" />
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
            Vous avez un projet innovant ou vous souhaitez simplement échanger ?
            N&apos;hésitez pas à me contacter via ce formulaire sécurisé.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Coordonnées */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-cyber font-semibold mb-6 text-blue-100">Coordonnées</h3>
            
            {/* Carte contact avec effet néon */}
            <div className="glass rounded-xl p-6 border border-blue-300/20 relative overflow-hidden group">
              {/* Effet scanline */}
              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-30 pointer-events-none">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent absolute animate-scanline"></div>
              </div>
              
              {/* Adresse */}
              <div className="flex items-start gap-4 mb-6">
                <div className="text-blue-400 mt-1 bg-blue-400/10 p-2 rounded-full">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-blue-200">Adresse</h4>
                  <p className="text-blue-300/70">Lyon, France</p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-4 mb-6">
                <div className="text-blue-400 mt-1 bg-blue-400/10 p-2 rounded-full">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-blue-200">Email</h4>
                  <p className="text-blue-300/70">valentin.rueda@epitech.eu</p>
                </div>
              </div>
              
              {/* Téléphone */}
              <div className="flex items-start gap-4">
                <div className="text-blue-400 mt-1 bg-blue-400/10 p-2 rounded-full">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-blue-200">Téléphone</h4>
                  <p className="text-blue-300/70">+33 6 04 14 68 78</p>
                </div>
              </div>
              
              {/* Bordure avec effet néon */}
              <div className="absolute inset-0 border border-blue-400/0 rounded-xl group-hover:border-blue-400/30 transition-colors duration-500 pointer-events-none"></div>
            </div>
            
            {/* Statut en ligne */}
            <div className="glass rounded-xl p-4 border border-green-300/20 flex items-center gap-3">
              <span className="inline-block w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-green-300 font-mono text-sm">Disponible pour de nouveaux projets</span>
            </div>
          </motion.div>
          
          {/* Formulaire de contact */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form 
              action="https://formspree.io/f/xldnekzn"
              method="POST" 
              className="glass rounded-xl p-6 border border-blue-300/20 relative overflow-hidden group"
            >
              {/* Effet de bordure néon au survol */}
              <div className="absolute inset-0 border border-blue-400/0 rounded-xl group-hover:border-blue-400/30 transition-colors duration-500 pointer-events-none"></div>
              
              {/* Effet scanline */}
              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-30 pointer-events-none">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent absolute animate-scanline"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Nom */}
                <div className="relative">
                  <div className="absolute left-3 top-3 text-blue-400">
                    <FaUser size={16} />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Votre nom"
                    className="w-full bg-blue-950/30 border border-blue-500/20 text-blue-100 rounded-md px-4 py-2 pl-10 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-blue-400/50"
                  />
                </div>
                
                {/* Email */}
                <div className="relative">
                  <div className="absolute left-3 top-3 text-blue-400">
                    <FaEnvelope size={16} />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Votre email"
                    className="w-full bg-blue-950/30 border border-blue-500/20 text-blue-100 rounded-md px-4 py-2 pl-10 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-blue-400/50"
                  />
                </div>
              </div>
              
              {/* Sujet */}
              <div className="relative mb-6">
                <div className="absolute left-3 top-3 text-blue-400">
                  <FaCommentAlt size={16} />
                </div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Sujet"
                  className="w-full bg-blue-950/30 border border-blue-500/20 text-blue-100 rounded-md px-4 py-2 pl-10 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-blue-400/50"
                />
              </div>
              
              {/* Message */}
              <div className="mb-6">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Votre message"
                  className="w-full bg-blue-950/30 border border-blue-500/20 text-blue-100 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none placeholder:text-blue-400/50"
                />
              </div>
              
              {/* Bouton d'envoi */}
              <div className="text-right">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:from-blue-700 hover:to-indigo-700 transition-all hover:shadow-[0_0_15px_rgba(56,182,255,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-black"
                >
                  <FaPaperPlane />
                  <span>Envoyer le message</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
