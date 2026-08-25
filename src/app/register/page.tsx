"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { REGISTRATION_CONFIG } from "@/data/mock";
import { cn } from "@/lib/utils";


export default function RegisterPage() {
  const { delegate, hod } = REGISTRATION_CONFIG;

  const renderCard = (type: "Delegate" | "Head of Delegation", config: typeof delegate) => {
    const isOpen = config.status === "OPEN" && config.googleFormUrl;

    return (
      <div className="flex flex-col border border-border rounded-3xl p-8 bg-white relative overflow-hidden group hover:border-primary/30 transition-colors">
        {isOpen && (
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
        )}
        
        <div className="flex items-center gap-3 mb-6">
          <span className={cn(
            "px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full",
            isOpen ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
          )}>
            {isOpen ? "OPEN" : "COMING SOON"}
          </span>
          {config.deadline && <span className="text-xs font-medium text-muted">Deadline: {config.deadline}</span>}
        </div>
        
        <h3 className="font-heading font-bold text-3xl text-foreground mb-4">{config.title}</h3>
        <p className="text-muted text-base leading-relaxed mb-6 flex-1">{config.description}</p>
        
        <div className="space-y-4 mb-8 pt-6 border-t border-border/50">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-foreground">Eligibility</div>
              <div className="text-sm text-muted">{config.eligibility}</div>
            </div>
          </div>
          {config.fee && (
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-foreground">Registration Fee</div>
                <div className="text-sm text-muted">{config.fee}</div>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-auto">
          {isOpen ? (
            <a 
              href={config.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-4 text-base font-semibold text-white bg-primary hover:bg-primary-hover rounded-xl transition-colors"
            >
              Register as {type} <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          ) : (
            <div className="flex items-center justify-center w-full py-4 text-base font-semibold text-muted bg-gray-50 border border-border rounded-xl cursor-not-allowed">
              Registration will open soon.
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-gray-50/50 min-h-screen pt-24 pb-16">
      <section className="max-w-5xl mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
            Join the next LUMUNA experience.
          </h1>
          <p className="text-muted text-xl leading-relaxed max-w-2xl mx-auto">
            Select your registration pathway below. Please ensure you meet the eligibility criteria before applying.
          </p>
        </motion.div>
      </section>

      {/* 3-Step Visual */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row justify-between items-center md:items-start relative"
        >
          <div className="hidden md:block absolute top-6 left-12 right-12 h-[1px] bg-border border-dashed" />
          
          {[
            { step: "01", title: "Choose registration type", desc: "Select Delegate or Head of Delegation." },
            { step: "02", title: "Complete application", desc: "Fill out the official registration form." },
            { step: "03", title: "Await confirmation", desc: "Receive your allocation and payment details." },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3 mb-8 md:mb-0 px-4">
              <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center font-heading font-bold text-lg text-primary mb-4 shadow-sm">
                {item.step}
              </div>
              <h4 className="font-heading font-bold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Pathways */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            {renderCard("Delegate", delegate)}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            {renderCard("Head of Delegation", hod)}
          </motion.div>
        </div>
      </section>
    </div>
  );
}



