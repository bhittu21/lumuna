"use client";

import { motion } from "framer-motion";
import { MOCK_MEMBERS, Member } from "@/data/mock";

const CATEGORY_ORDER = [
  "Advisory Board",
  "Executive Board",
  "Mid-Level",
  "Organising"
];

function MemberCard({ member, index }: { member: Member; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col group"
    >
      <div className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden mb-4 relative">
        {member.photo ? (
          <img src={member.photo} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-50 border border-border rounded-xl">
            <span className="text-muted text-sm">No Photo</span>
          </div>
        )}
      </div>
      <h3 className="font-heading font-semibold text-lg text-foreground">{member.name}</h3>
      <p className="text-primary text-sm font-medium">{member.role}</p>
      {member.bio && (
        <p className="text-muted text-sm mt-2 line-clamp-3 leading-relaxed">{member.bio}</p>
      )}
    </motion.div>
  );
}

export default function PeoplePage() {
  const groupedMembers = CATEGORY_ORDER.reduce((acc, category) => {
    acc[category] = MOCK_MEMBERS.filter(m => m.category === category).sort((a, b) => a.order - b.order);
    return acc;
  }, {} as Record<string, Member[]>);

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-20 max-w-2xl"
      >
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Our People</h1>
        <p className="text-muted text-lg leading-relaxed">
          The driving force behind LUMUNA. Meet the dedicated individuals who 
          work tirelessly to elevate the standard of youth diplomacy.
        </p>
      </motion.div>

      <div className="space-y-32">
        {CATEGORY_ORDER.map((category) => {
          const members = groupedMembers[category];
          if (!members || members.length === 0) return null;

          return (
            <section key={category}>
              <div className="border-b border-border pb-4 mb-12">
                <h2 className="font-heading text-2xl font-bold text-foreground">{category}</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                {members.map((member, index) => (
                  <MemberCard key={member.id} member={member} index={index} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
