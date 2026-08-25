"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MOCK_BLOGS, BlogPost } from "@/data/mock";

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col sm:flex-row gap-6 items-start py-8 border-b border-border last:border-0"
    >
      <div className="w-full sm:w-1/3 aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden shrink-0">
        <div className="w-full h-full flex items-center justify-center bg-gray-50 text-muted text-sm">
          No Image
        </div>
      </div>
      
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">{post.category}</span>
          <span className="text-xs text-muted border-l border-border pl-3">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
        
        <Link href={`/blog/${post.slug}`} className="group-hover:text-primary transition-colors">
          <h3 className="font-heading font-bold text-2xl text-foreground mb-3 leading-tight">{post.title}</h3>
        </Link>
        
        <p className="text-muted text-base leading-relaxed mb-6">{post.excerpt}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm font-medium text-foreground">{post.author}</span>
          <Link 
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-hover transition-colors"
          >
            Read Article <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function BlogPage() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Editorial</h1>
        <p className="text-muted text-lg leading-relaxed max-w-2xl">
          Insights, opinions, and analyses on international relations, diplomacy, 
          and global affairs from the LUMUNA community.
        </p>
      </motion.div>

      <div className="flex flex-col">
        {MOCK_BLOGS.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </div>
  );
}
