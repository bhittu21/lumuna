"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { MOCK_REGISTRATIONS, RegistrationForm } from "@/data/mock";

function RegistrationCard({ form, index }: { form: RegistrationForm; index: number }) {
  const isOpen = form.status === "OPEN";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-8 border border-border rounded-2xl bg-white flex flex-col items-start relative overflow-hidden"
    >
      {isOpen && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10" />
      )}
      
      <div className="flex items-center gap-3 mb-6">
        <span className={`px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full ${
          isOpen ? 'bg-green-100 text-green-700' : 
          form.status === 'COMING SOON' ? 'bg-blue-100 text-blue-700' : 
          'bg-gray-100 text-gray-700'
        }`}>
          {form.status}
        </span>
        {form.deadline && (
          <span className="text-xs text-muted font-medium">Deadline: {form.deadline}</span>
        )}
      </div>
      
      <h3 className="font-heading font-bold text-2xl text-foreground mb-4">{form.title}</h3>
      <p className="text-muted text-base leading-relaxed mb-8">{form.description}</p>
      
      {form.fee && (
        <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-border/50 w-full">
          <span className="text-xs text-muted uppercase tracking-wider block mb-1">Registration Fee</span>
          <span className="font-heading font-semibold text-lg text-foreground">{form.fee}</span>
        </div>
      )}
      
      <div className="mt-auto w-full">
        {isOpen ? (
          <a 
            href={form.googleFormUrl || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-4 text-sm font-semibold text-white bg-primary hover:bg-primary-hover rounded-xl transition-colors group"
          >
            Apply Now <ExternalLink className="w-4 h-4 ml-2 opacity-70" />
          </a>
        ) : (
          <button 
            disabled 
            className="flex items-center justify-center w-full py-4 text-sm font-semibold text-muted bg-gray-100 rounded-xl cursor-not-allowed"
          >
            {form.status === 'COMING SOON' ? 'Registration Opens Soon' : 'Registration Closed'}
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function RegisterPage() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center max-w-2xl mx-auto"
      >
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Join LUMUNA</h1>
        <p className="text-muted text-lg leading-relaxed">
          Take the first step towards becoming a global leader. Register for our upcoming conferences and programs below.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MOCK_REGISTRATIONS.map((form, index) => (
          <RegistrationCard key={form.id} form={form} index={index} />
        ))}
      </div>
    </div>
  );
}
