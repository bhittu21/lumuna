"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { MOCK_EVENTS, Event } from "@/data/mock";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Conferences", "Conventions", "Intra-MUN", "Workshops", "Other"];

function EventCard({ event, index }: { event: Event; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group flex flex-col sm:flex-row gap-8 py-8 border-b border-border last:border-0"
    >
      <div className="w-full sm:w-1/3 aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden shrink-0 relative">
        {event.coverImage ? (
          <img src={event.coverImage} alt={event.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-50 text-muted transition-colors duration-500 group-hover:bg-white border border-border">
            <span className="text-xs uppercase tracking-widest font-medium">No Image</span>
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-1 justify-center py-2">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">{event.type}</span>
          <div className="h-1 w-1 bg-border rounded-full" />
          <span className="flex items-center gap-1.5 text-xs text-muted font-medium">
            <Calendar className="w-3.5 h-3.5" /> {event.year}
          </span>
        </div>
        
        <Link href={`/events/${event.slug}`} className="group-hover:text-primary transition-colors">
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4 leading-tight">{event.name}</h3>
        </Link>
        
        <p className="text-muted text-base leading-relaxed mb-6 line-clamp-2 max-w-2xl">{event.description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm font-medium text-foreground">{event.displayDate}</span>
          <Link 
            href={`/events/${event.slug}`}
            className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
          >
            View Event <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const upcomingEvents = MOCK_EVENTS.filter(e => e.status === "Upcoming");
  const pastEvents = MOCK_EVENTS.filter(e => e.status === "Past" || e.status === "Ongoing");

  const filteredUpcoming = upcomingEvents.filter(e => activeFilter === "All" || e.type.includes(activeFilter));
  const filteredPast = pastEvents.filter(e => activeFilter === "All" || e.type.includes(activeFilter));

  return (
    <div className="w-full bg-white pt-32 pb-24">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
            Events
          </h1>
          <p className="text-muted text-xl leading-relaxed max-w-2xl">
            Conferences, conventions, and experiences that shaped LUMUNA.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="max-w-5xl mx-auto px-6 mb-20 sticky top-24 z-30 bg-white/80 backdrop-blur-md py-4 border-y border-border">
        <div className="flex flex-wrap gap-2 md:gap-4 items-center">
          <span className="text-xs font-bold text-muted uppercase tracking-wider mr-4">Filter by:</span>
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-colors border",
                activeFilter === filter 
                  ? "bg-foreground text-white border-foreground" 
                  : "bg-white text-muted border-border hover:border-gray-300 hover:text-foreground"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Lists */}
      <section className="max-w-5xl mx-auto px-6">
        {filteredUpcoming.length > 0 && (
          <div className="mb-24">
            <h2 className="font-heading text-3xl font-bold mb-8">Upcoming</h2>
            <div className="flex flex-col">
              <AnimatePresence mode="popLayout">
                {filteredUpcoming.map((event, index) => (
                  <EventCard key={event.id} event={event} index={index} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {filteredPast.length > 0 && (
          <div>
            <h2 className="font-heading text-3xl font-bold mb-8">Archive</h2>
            <div className="flex flex-col">
              <AnimatePresence mode="popLayout">
                {filteredPast.map((event, index) => (
                  <EventCard key={event.id} event={event} index={index} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
        
        {filteredUpcoming.length === 0 && filteredPast.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-muted text-lg">No events found matching "{activeFilter}".</p>
            <button 
              onClick={() => setActiveFilter("All")}
              className="mt-4 text-primary font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
