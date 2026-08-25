"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import { MOCK_EVENTS, MOCK_MEMBERS, MOCK_BLOGS } from "@/data/mock";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export default function Home() {
  // Get featured event (first upcoming, or most recent past)
  const featuredEvent = MOCK_EVENTS.find(e => e.status === "Upcoming") || MOCK_EVENTS[0];
  const leadership = MOCK_MEMBERS.slice(0, 3);
  const recentBlogs = MOCK_BLOGS.slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO */}
      <section className="relative min-h-[95vh] flex items-center justify-center px-6 pt-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--color-primary)_0%,_transparent_25%)] opacity-5" />
        
        <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-[1px] w-12 bg-primary/30" />
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                Sylhet, Bangladesh
              </span>
            </motion.div>
            
            <motion.h1 
              className="font-heading text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              LUMUNA
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <h2 className="text-xl sm:text-2xl text-foreground font-medium mb-2">Leading University Model United Nations Association</h2>
              <p className="text-lg text-muted italic font-serif mb-10">"Prosperity Lies in Unity"</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-foreground hover:bg-black rounded-full transition-colors group"
              >
                Explore LUMUNA
              </Link>
              <Link 
                href="/events" 
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-foreground bg-white border border-border hover:bg-gray-50 rounded-full transition-colors group"
              >
                Upcoming Events
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block h-[600px] w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute inset-0 bg-gray-100 rounded-3xl overflow-hidden"
            >
              {/* Placeholder for high-quality LUMUNA imagery */}
              <div className="w-full h-full bg-gradient-to-tr from-gray-200 to-gray-50 flex items-center justify-center">
                <span className="text-muted text-sm font-medium tracking-widest uppercase">LUMUNA Archive</span>
              </div>
            </motion.div>
            {/* Floating Metadata */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-8 -left-12 bg-white p-6 rounded-2xl shadow-xl border border-border/50 max-w-xs"
            >
              <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Pioneer of the Northeast</div>
              <div className="text-sm text-foreground font-medium leading-relaxed">
                A premier youth diplomacy organization cultivating leadership since 2016.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. IMPACT STRIP */}
      <section className="py-16 border-y border-border bg-gray-50/30">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {[
            { label: "Founded", value: 2016, isYear: true },
            { label: "Regional Conferences", value: 5 },
            { label: "National Conferences", value: 4 },
            { label: "Recent Delegates", value: 150, suffix: "+" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center pt-8 md:pt-0 px-4 first:pt-0">
              <div className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.isYear ? (
                  stat.value
                ) : (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ABOUT PREVIEW */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Cultivating the next generation of global decision-makers.
            </h2>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-3xl mx-auto">
              As a pioneer MUN association in northeastern Bangladesh, LUMUNA is deeply connected to Leading University's vision of excellence. 
              We are dedicated to providing an unparalleled platform for students across Sylhet and beyond to engage in diplomacy, 
              leadership, public speaking, and critical discourse on international affairs.
            </p>
            <Link href="/about" className="inline-flex items-center text-primary font-semibold hover:text-primary-hover transition-colors text-lg group">
              Read our story 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. FEATURED EVENT */}
      {featuredEvent && (
        <section className="py-24 px-6 bg-foreground text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border border-white/20">
                  {featuredEvent.status === "Upcoming" ? "Featured Upcoming Event" : "Most Recent Event"}
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">{featuredEvent.name}</h2>
                {featuredEvent.theme && (
                  <p className="text-xl font-medium text-gray-300 italic mb-6">"{featuredEvent.theme}"</p>
                )}
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {featuredEvent.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 mb-10">
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Calendar className="w-5 h-5 text-primary" />
                    {featuredEvent.displayDate}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <MapPin className="w-5 h-5 text-primary" />
                    {featuredEvent.location}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {featuredEvent.status === "Upcoming" ? (
                    <Link href={`/events/${featuredEvent.slug}`} className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-semibold transition-colors">
                      Registration Open
                    </Link>
                  ) : (
                    <Link href={`/events/${featuredEvent.slug}`} className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-colors">
                      View Conference Details
                    </Link>
                  )}
                </div>
              </motion.div>
              
              <motion.div 
                className="w-full md:w-1/2 aspect-square md:aspect-[4/5] bg-white/5 rounded-3xl overflow-hidden border border-white/10 relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 text-sm tracking-widest uppercase">Event Media</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* 5. WHY LUMUNA */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-heading text-4xl font-bold mb-4">What we do</h2>
            <p className="text-muted text-lg max-w-2xl">Building capacity beyond the classroom through structured diplomatic engagement.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              { title: "Model United Nations", desc: "Simulating UN committees to debate real-world issues, draft resolutions, and practice diplomatic negotiation." },
              { title: "Leadership Development", desc: "Equipping students with the organizational and strategic skills necessary to lead effectively." },
              { title: "Diplomatic Education", desc: "Providing deep insights into international relations, foreign policy, and global frameworks." },
              { title: "Research & Public Speaking", desc: "Fostering analytical rigor and the confidence to articulate complex ideas persuasively on a public stage." },
              { title: "Conference Organization", desc: "Hosting national and regional conventions that set the standard for the MUN circuit in Bangladesh." },
              { title: "Community & Collaboration", desc: "Creating a lifelong network of driven individuals united by a shared passion for global problem-solving." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col"
              >
                <div className="h-[1px] w-12 bg-primary mb-6" />
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PEOPLE PREVIEW */}
      <section className="py-32 px-6 bg-white border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl font-bold mb-4">Leadership (2025–26)</h2>
              <p className="text-muted text-lg">The individuals guiding LUMUNA's vision.</p>
            </motion.div>
            <Link href="/people" className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-hover group">
              Meet the full team <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member, i) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden mb-6 relative">
                  {/* Photo placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-50 border border-border rounded-2xl group-hover:bg-gray-100 transition-colors">
                    <span className="text-muted text-xs tracking-widest uppercase">Portrait</span>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BLOG PREVIEW */}
      <section className="py-32 px-6 bg-gray-50 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-heading text-4xl font-bold">Latest from LUMUNA</h2>
            <Link href="/blog" className="hidden md:inline-flex items-center text-sm font-semibold text-primary hover:text-primary-hover group">
              View all articles <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {recentBlogs.map((post, i) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">{post.category}</span>
                  <span className="text-xs text-muted border-l border-border pl-3">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted line-clamp-3 leading-relaxed">{post.excerpt}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-40 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl md:text-7xl font-bold mb-12"
          >
            Be part of the conversation.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/register" className="px-8 py-4 bg-foreground text-white rounded-full font-semibold hover:bg-black transition-colors">
              Register
            </Link>
            <Link href="/about" className="px-8 py-4 bg-white border border-border text-foreground rounded-full font-semibold hover:bg-gray-50 transition-colors">
              Explore LUMUNA
            </Link>
            <a href="#" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-50 text-primary border border-blue-100 rounded-full font-semibold hover:bg-blue-100 transition-colors">
              Follow Facebook
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
