"use client";

import { motion } from "framer-motion";
import { Download, FileText, BookOpen } from "lucide-react";
import { MOCK_RESOURCES, Resource } from "@/data/mock";

function ResourceCard({ resource, index }: { resource: Resource; index: number }) {
  const Icon = resource.category === "Study Guides" ? BookOpen : FileText;

  return (
    <motion.a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-6 border border-border rounded-2xl bg-white hover:border-primary hover:shadow-sm transition-all flex flex-col"
    >
      <div className="w-12 h-12 rounded-xl bg-gray-50 border border-border flex items-center justify-center mb-6 group-hover:bg-primary/5 group-hover:text-primary transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      
      <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">{resource.category}</span>
      <h3 className="font-heading font-bold text-xl text-foreground mb-3">{resource.title}</h3>
      <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{resource.description}</p>
      
      <div className="mt-auto flex items-center text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
        Download <Download className="w-4 h-4 ml-2" />
      </div>
    </motion.a>
  );
}

export default function ResourcesPage() {
  const categories = ["Guides", "Forms", "Study Guides"];
  const hasResources = MOCK_RESOURCES.length > 0;

  return (
    <div className="w-full bg-gray-50/30 min-h-[80vh] pt-32 pb-24">
      <section className="max-w-5xl mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
            Resources
          </h1>
          <p className="text-muted text-xl leading-relaxed max-w-2xl mx-auto">
            Official materials, study guides, and procedural documents for LUMUNA delegates.
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        {hasResources ? (
          <div className="space-y-24">
            {categories.map((category) => {
              const resources = MOCK_RESOURCES.filter(r => r.category === category);
              if (resources.length === 0) return null;
              
              return (
                <div key={category}>
                  <h2 className="font-heading text-2xl font-bold mb-8 border-b border-border pb-4">{category}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {resources.map((res, i) => (
                      <ResourceCard key={res.id} resource={res} index={i} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-32 flex flex-col items-center justify-center text-center border border-dashed border-border rounded-3xl bg-white">
            <BookOpen className="w-12 h-12 text-muted mb-6 opacity-50" />
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Check back soon</h3>
            <p className="text-muted max-w-md mx-auto">
              We are currently updating our resource library for the upcoming session. Position paper guides and conference materials will be published here once verified.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
