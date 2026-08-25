"use client";

import { motion } from "framer-motion";
import { MOCK_MEMBERS, Member, MemberCategory } from "@/data/mock";
import { ArrowUpRight } from "lucide-react";

const CATEGORY_ORDER: MemberCategory[] = [
  "Advisor",
  "President",
  "General Secretary",
  "Vice Presidents",
  "Treasurers",
  "Joint General Secretaries",
  "Organising Secretaries",
  "Mid-Level Members",
  "Executive Members"
];

function FeaturedMemberCard({ member, index }: { member: Member; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex flex-col md:flex-row gap-8 items-center md:items-start mb-24"
    >
      <div className="w-full md:w-1/2 aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden relative border border-border">
        {member.photo ? (
          <img src={member.photo} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 group-hover:bg-gray-100 transition-colors duration-500">
            <span className="text-muted text-xs tracking-widest uppercase mb-2">Portrait Unavailable</span>
            <span className="text-gray-300 text-6xl font-serif">L</span>
          </div>
        )}
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center h-full pt-4 md:pt-12">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-[1px] w-8 bg-primary/30" />
          <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
            {member.role}
          </span>
        </div>
        <h3 className="font-heading font-bold text-4xl md:text-6xl text-foreground mb-6 leading-tight">{member.name}</h3>
        <p className="text-muted text-lg leading-relaxed max-w-lg mb-8">
          {member.bio || `Serving as the ${member.role} for the ${member.session} Steering Committee of the Leading University Model United Nations Association.`}
        </p>
        <button className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors">
          View Profile <ArrowUpRight className="ml-1 w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

function StandardMemberCard({ member, index }: { member: Member; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      className="flex flex-col group relative"
    >
      <div className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden mb-5 relative border border-border transition-all duration-500 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:-translate-y-1">
        {member.photo ? (
          <img src={member.photo} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-50 transition-colors duration-500 group-hover:bg-white">
            <span className="text-muted text-xs tracking-widest uppercase">No Photo</span>
          </div>
        )}
      </div>
      <h3 className="font-heading font-bold text-xl text-foreground mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
      <p className="text-muted text-sm font-medium">{member.role}</p>
    </motion.div>
  );
}


export default function PeoplePage() {
  const groupedMembers = CATEGORY_ORDER.reduce((acc, category) => {
    acc[category] = MOCK_MEMBERS.filter(m => m.category === category).sort((a, b) => a.order - b.order);
    return acc;
  }, {} as Record<MemberCategory, Member[]>);

  return (
    <div className="w-full bg-white pt-24 pb-16">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Steering Committee 2025–26</span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight text-foreground">
            Our Leadership
          </h1>
          <p className="text-muted text-xl leading-relaxed">
            The dedicated individuals driving the vision and execution of LUMUNA. 
            Representing the core values of diplomacy and organizational excellence at Leading University.
          </p>
        </motion.div>
      </section>

      {/* Featured Leadership (Advisor & President) */}
      <section className="max-w-6xl mx-auto px-6">
        {groupedMembers["Advisor"]?.map((member, i) => (
          <FeaturedMemberCard key={member.id} member={member} index={i} />
        ))}
        {groupedMembers["President"]?.map((member, i) => (
          <FeaturedMemberCard key={member.id} member={member} index={i} />
        ))}
      </section>

      {/* Standard Hierarchy */}
      <section className="max-w-6xl mx-auto px-6 mt-12 space-y-32">
        {CATEGORY_ORDER.slice(2).map((category) => {
          const members = groupedMembers[category];
          
          // Structural rendering even if empty for Mid-Level and Exec Members as requested
          if (!members || members.length === 0) {
            if (category === "Mid-Level Members" || category === "Executive Members") {
              return (
                <div key={category}>
                  <div className="border-b border-border pb-4 mb-12">
                    <h2 className="font-heading text-3xl font-bold text-foreground">{category}</h2>
                  </div>
                  <div className="p-12 border border-dashed border-border rounded-2xl bg-gray-50 flex items-center justify-center text-center">
                    <div>
                      <p className="text-muted font-medium mb-1">Official roster pending publication.</p>
                      <p className="text-xs text-gray-400">Structure confirmed for 2025–26 session.</p>
                    </div>
                  </div>
                </div>
              );
            }
            return null; // Skip if empty and not required structural
          }

          return (
            <div key={category}>
              <div className="border-b border-border pb-4 mb-12 flex justify-between items-end">
                <h2 className="font-heading text-3xl font-bold text-foreground">{category}</h2>
                <span className="text-xs font-bold text-muted uppercase tracking-wider hidden sm:block">
                  {members.length} Member{members.length > 1 ? 's' : ''}
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                {members.map((member, index) => (
                  <StandardMemberCard key={member.id} member={member} index={index} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}



