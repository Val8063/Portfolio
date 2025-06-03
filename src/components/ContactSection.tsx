"use client";

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête ou vous souhaitez simplement me contacter ?
            N&apos;hésitez pas à m&apos;envoyer un message !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Coordonnées</h3>
            
            <div className="flex items-start gap-4">
              <div className="text-primary mt-1">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h4 className="font-medium">Adresse</h4>
                <p className="text-muted-foreground">Paris, France</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="text-primary mt-1">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-muted-foreground">contact@example.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="text-primary mt-1">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <h4 className="font-medium">Téléphone</h4>
                <p className="text-muted-foreground">+33 6 XX XX XX XX</p>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form 
              action="https://formspree.io/f/xldnekzn"
              method="POST" 
              className="grid gap-6 text-left bg-card p-8 rounded-xl shadow-md border border-border"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-medium mb-1">Nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-background border border-input rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-background border border-input rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block font-medium mb-1">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-background border border-input rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-background border border-input rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors"
              >
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
