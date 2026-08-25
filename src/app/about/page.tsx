"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MOCK_MILESTONES } from "@/data/mock";


export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. INTRODUCTION */}
      <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-8 block">Organization Profile</span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-10 leading-tight">
            Leading University Model United Nations Association
          </h1>
          <p className="text-xl text-muted leading-relaxed max-w-3xl mx-auto">
            A pioneer MUN association in northeastern Bangladesh, cultivating diplomacy, leadership, and public speaking since 2016.
          </p>
        </motion.div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-24 px-6 border-t border-border bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-p:text-muted max-w-none"
          >
            <h2 className="text-3xl mb-8 text-foreground">Our Story</h2>
            <p className="text-xl leading-relaxed text-foreground font-medium mb-8">
              Founded in 2016, LUMUNA emerged with a clear vision: to establish a premier platform for youth diplomacy in Sylhet. 
              What began as a localized initiative quickly grew into a cornerstone of the regional Model UN circuit.
            </p>
            <p>
              In our founding year, we hosted our first intra-university MUN. Recognizing the hunger for diplomatic discourse across the region, 
              LUMUNA organized the very first regional Model United Nations event in Sylhet the following year, in 2017. 
              Since then, we have successfully executed five regional conferences and four national conferences, 
              consistently raising the bar for academic rigor and organizational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. TIMELINE / MILESTONES */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-heading text-4xl font-bold mb-4">LUMUNA Through the Years</h2>
            <p className="text-muted text-lg">Key milestones in our organizational history.</p>
          </motion.div>

          <div className="relative border-l border-primary/20 ml-4 md:ml-8 space-y-16">
            {MOCK_MILESTONES.map((milestone, i) => (
              <motion.div 
                key={milestone.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-10 md:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-primary ring-4 ring-white" />
                
                <div className="font-heading text-5xl font-bold text-gray-200 mb-4 tracking-tighter">
                  {milestone.year}
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{milestone.title}</h3>
                <p className="text-muted text-lg leading-relaxed">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RECENT HISTORY (Specific events mentioned) */}
      <section className="py-32 px-6 bg-foreground text-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl font-bold mb-6">Recent Conference Highlights</h2>
            <p className="text-gray-400 text-lg">A look at our most recent large-scale diplomatic simulations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 2024 Event */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 border border-white/10 rounded-3xl bg-white/5"
            >
              <div className="text-sm font-bold tracking-widest uppercase text-primary mb-4">September 20–21, 2024</div>
              <h3 className="font-heading text-3xl font-bold mb-4">Leading University Intra-MUN 2024</h3>
              <p className="text-xl font-serif italic text-gray-300 mb-8">
                "Fostering International Cooperation for Peacebuilding and Durable Solutions in Conflict Zones"
              </p>
              <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="font-heading text-3xl font-bold text-white mb-1">143</div>
                  <div className="text-xs uppercase tracking-wider text-gray-400">Delegates</div>
                </div>
                <div>
                  <div className="font-heading text-3xl font-bold text-white mb-1">5</div>
                  <div className="text-xs uppercase tracking-wider text-gray-400">Committees</div>
                </div>
                <div>
                  <div className="font-heading text-3xl font-bold text-white mb-1">13</div>
                  <div className="text-xs uppercase tracking-wider text-gray-400">Exec. Board</div>
                </div>
              </div>
            </motion.div>

            {/* 2025 Event */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 border border-white/10 rounded-3xl bg-white/5"
            >
              <div className="text-sm font-bold tracking-widest uppercase text-primary mb-4">July 11–12, 2025</div>
              <h3 className="font-heading text-3xl font-bold mb-4">Leading University Diplomatic Convention 2025</h3>
              <p className="text-xl font-serif italic text-gray-300 mb-8">
                "Turning the Tide: Global Diplomacy in the Face of Floods and Rising Seas"
              </p>
              <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="font-heading text-3xl font-bold text-white mb-1">150+</div>
                  <div className="text-xs uppercase tracking-wider text-gray-400">Delegates</div>
                </div>
                <div>
                  <div className="font-heading text-3xl font-bold text-white mb-1">5</div>
                  <div className="text-xs uppercase tracking-wider text-gray-400">Committees</div>
                </div>
                <div>
                  <div className="font-heading text-3xl font-bold text-white mb-1">15</div>
                  <div className="text-xs uppercase tracking-wider text-gray-400">Exec. Board</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. OUR PURPOSE & PHILOSOPHY */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-p:text-muted max-w-none"
          >
            <h2 className="text-3xl mb-8 text-foreground">Our Purpose</h2>
            <p>
              LUMUNA operates at the intersection of education, leadership development, and international affairs. 
              Our primary role is to demystify complex global frameworks and bring the mechanisms of the United Nations 
              closer to the student community in Sylhet.
            </p>
            <p>
              We believe that effective diplomacy requires more than just subject knowledge; it demands critical thinking, 
              rigorous research, and the ability to articulate viewpoints persuasively. Through structured MUN education 
              and large-scale diplomatic simulations, we provide an environment where students can test these skills in real-time.
            </p>
            <p>
              Beyond the conference room, LUMUNA serves as an incubator for student development. By organizing intricate events 
              and navigating institutional partnerships, our members develop the operational and leadership capacities 
              necessary for their future careers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-32 px-6 bg-gray-50 border-t border-border text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl font-bold mb-8">Ready to participate?</h2>
          <Link 
            href="/register" 
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-primary hover:bg-primary-hover rounded-full transition-colors group"
          >
            View Open Registrations <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

