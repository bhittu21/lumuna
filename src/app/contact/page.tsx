"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { CONTACT_INFO } from "@/data/mock";

export default function ContactPage() {
  return (
    <div className="w-full bg-white pt-32 pb-24">
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Get in touch</span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight text-foreground">
            Contact LUMUNA
          </h1>
          <p className="text-muted text-xl leading-relaxed max-w-2xl">
            For inquiries regarding conferences, partnerships, or membership, please reach out to our Executive Board.
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }}
            className="p-8 border border-border rounded-2xl bg-gray-50 flex flex-col items-start"
          >
            <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center mb-6 text-primary shadow-sm">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-2">Location</h3>
            <p className="text-muted leading-relaxed mb-6">{CONTACT_INFO.address}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
            className="p-8 border border-border rounded-2xl bg-gray-50 flex flex-col items-start"
          >
            <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center mb-6 text-primary shadow-sm">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-2">Email</h3>
            <p className="text-muted leading-relaxed mb-6">General inquiries & support.</p>
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary font-semibold hover:underline mt-auto">
              {CONTACT_INFO.email}
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.3 }}
            className="p-8 border border-border rounded-2xl bg-gray-50 flex flex-col items-start"
          >
            <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center mb-6 text-primary shadow-sm">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-2">Phone</h3>
            <p className="text-muted leading-relaxed mb-6">Available during standard business hours.</p>
            <a href={`tel:${CONTACT_INFO.phone}`} className="text-primary font-semibold hover:underline mt-auto">
              {CONTACT_INFO.phone}
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="p-12 md:p-16 border border-border rounded-3xl bg-foreground text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">Connect on Social Media</h3>
            <p className="text-gray-400 text-lg max-w-lg">
              Follow our official Facebook page for the latest updates, event announcements, and recruitment cycles.
            </p>
          </div>
          <a 
            href={CONTACT_INFO.facebook} 
            target="_blank" 
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-4 bg-white text-foreground rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center"
          >
            Follow LUMUNA <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
