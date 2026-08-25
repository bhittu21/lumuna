"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MOCK_FAQS, FAQ } from "@/data/mock";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function FAQItem({ faq }: { faq: FAQ }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left focus:outline-none"
      >
        <h3 className="font-heading text-xl font-bold text-foreground pr-8">{faq.question}</h3>
        <ChevronDown className={cn("w-5 h-5 text-muted transition-transform shrink-0", isOpen && "rotate-180")} />
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="text-muted text-lg leading-relaxed pt-4 pb-2">{faq.answer}</p>
      </motion.div>
    </div>
  );
}


export default function FAQPage() {
  const categories = ["MUN", "Membership", "Events", "Registration", "General"];
  
  return (
    <div className="w-full bg-white pt-24 pb-16">
      <section className="max-w-3xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Help & Support</span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight text-foreground">
            Frequently Asked Questions
          </h1>
          <p className="text-muted text-xl leading-relaxed">
            Find answers to common questions about LUMUNA, our events, and how to get involved.
          </p>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-6">
        {categories.map(category => {
          const categoryFaqs = MOCK_FAQS.filter(faq => faq.category === category);
          if (categoryFaqs.length === 0) return null;

          return (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="font-heading text-2xl font-bold mb-6 text-primary">{category}</h2>
              <div className="flex flex-col border-t border-border">
                {categoryFaqs.map(faq => (
                  <FAQItem key={faq.id} faq={faq} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}



