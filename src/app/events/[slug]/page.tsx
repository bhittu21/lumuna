"use client";

import { motion } from "framer-motion";
import { useParams, notFound } from "next/navigation";
import { ArrowLeft, Calendar, MapPin, Users, Award, BookOpen } from "lucide-react";
import Link from "next/link";
import { MOCK_EVENTS } from "@/data/mock";

export default function EventDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const event = MOCK_EVENTS.find(e => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="w-full bg-white pb-32">
      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-[70vh] flex items-end px-6 pb-24 pt-40 bg-foreground text-white overflow-hidden">
        {event.coverImage ? (
          <div className="absolute inset-0 z-0">
            <img src={event.coverImage} alt={event.name} className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-transparent" />
          </div>
        ) : (
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,75,135,0.2)_0%,_transparent_50%)]" />
        )}
        
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <Link href="/events" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Events
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold tracking-widest uppercase border border-white/20">
                {event.year}
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary-300 rounded-full text-xs font-bold tracking-widest uppercase border border-primary/30">
                {event.type}
              </span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
              {event.name}
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span className="font-medium">{event.displayDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="font-medium">{event.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THEME & OVERVIEW */}
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          {event.theme && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">Official Theme</h2>
              <h3 className="font-serif text-3xl md:text-4xl italic text-foreground leading-relaxed border-l-2 border-primary pl-6 py-2">
                "{event.theme}"
              </h3>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-p:text-muted max-w-none"
          >
            <h2 className="text-2xl text-foreground mb-6">Overview</h2>
            <p className="text-xl leading-relaxed text-foreground/80 font-medium">{event.description}</p>
          </motion.div>
        </div>
      </section>

      {/* 3. STATISTICS (Elegant Numerical Blocks) */}
      {event.stats && (
        <section className="py-24 px-6 bg-gray-50 border-b border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-sm font-bold text-muted tracking-[0.2em] uppercase mb-12 text-center">By the Numbers</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 divide-y sm:divide-y-0 sm:divide-x divide-border">
              {event.stats.delegates && (
                <div className="flex flex-col items-center pt-8 sm:pt-0">
                  <div className="font-heading text-6xl md:text-7xl font-bold text-foreground mb-4">{event.stats.delegates}</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-muted flex items-center gap-2">
                    <Users className="w-4 h-4" /> Delegates
                  </div>
                </div>
              )}
              {event.stats.committees && (
                <div className="flex flex-col items-center pt-8 sm:pt-0">
                  <div className="font-heading text-6xl md:text-7xl font-bold text-foreground mb-4">{event.stats.committees}</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-muted flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> Committees
                  </div>
                </div>
              )}
              {event.stats.eb && (
                <div className="flex flex-col items-center pt-8 sm:pt-0">
                  <div className="font-heading text-6xl md:text-7xl font-bold text-foreground mb-4">{event.stats.eb}</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-muted flex items-center gap-2">
                    <Award className="w-4 h-4" /> Executive Board
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 4. LEADERSHIP */}
      {event.leadership && event.leadership.length > 0 && (
        <section className="py-24 px-6 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-12">Event Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
              {event.leadership.map((leader, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="h-[1px] w-12 bg-primary mb-4" />
                  <span className="text-xs font-bold tracking-widest uppercase text-muted mb-2">{leader.role}</span>
                  <span className="font-heading text-2xl font-bold text-foreground">{leader.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. GALLERY (Masonry) */}
      {event.gallery && event.gallery.length > 0 && (
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-heading text-3xl font-bold">Event Gallery</h2>
            </div>
            
            {/* CSS Columns Masonry */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {event.gallery.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1 }}
                  className="break-inside-avoid relative group overflow-hidden rounded-2xl bg-gray-100 border border-border cursor-pointer"
                >
                  <img 
                    src={src} 
                    alt={`${event.shortName} Gallery ${i + 1}`} 
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
