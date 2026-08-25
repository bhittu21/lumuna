"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { MOCK_EVENTS, Event } from "@/data/mock";

function EventCard({ event, index }: { event: Event; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col border border-border rounded-2xl overflow-hidden bg-white hover:border-primary/30 transition-colors"
    >
      <div className="aspect-[16/9] bg-gray-100 relative">
        {event.coverImage ? (
          <img src={event.coverImage} alt={event.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-50 text-muted">
            No Image
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary border border-border">
          {event.status}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-xs font-medium text-muted mb-4">
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {event.date}</span>
          <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {event.location}</span>
        </div>
        
        <h3 className="font-heading font-bold text-xl text-foreground mb-3">{event.name}</h3>
        <p className="text-sm text-muted line-clamp-3 mb-6 flex-1">{event.description}</p>
        
        <Link 
          href={`/events/${event.slug}`}
          className="inline-flex items-center text-sm font-medium text-primary group-hover:text-primary-hover transition-colors mt-auto"
        >
          View Details <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function EventsPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 max-w-2xl"
      >
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Events & Conferences</h1>
        <p className="text-muted text-lg leading-relaxed">
          Explore our flagship conferences, training sessions, and intra-university events.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_EVENTS.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </div>
  );
}
