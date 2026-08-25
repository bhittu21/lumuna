"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { MOCK_BLOGS, BlogPost } from "@/data/mock";

function FeaturedArticle({ post }: { post: BlogPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col md:flex-row gap-8 lg:gap-16 items-center mb-24 border-b border-border pb-24"
    >
      <div className="w-full md:w-3/5 aspect-video md:aspect-[4/3] bg-gray-100 rounded-3xl overflow-hidden relative">
        {post.coverImage ? (
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 border border-border">
            <span className="text-muted text-xs tracking-widest uppercase">Featured Editorial</span>
          </div>
        )}
      </div>
      
      <div className="w-full md:w-2/5 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-widest uppercase">
            {post.category}
          </span>
          <span className="text-xs text-muted font-medium">
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
        
        <Link href={`/blog/${post.slug}`}>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6 leading-tight group-hover:text-primary transition-colors">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-muted text-lg leading-relaxed mb-8">{post.excerpt}</p>
        
        <div className="flex items-center justify-between mt-auto pt-8 border-t border-border/50">
          <div className="flex flex-col">
            <span className="text-xs text-muted uppercase tracking-wider font-semibold mb-1">Author</span>
            <span className="text-sm font-medium text-foreground">{post.author}</span>
          </div>
          <Link 
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
          >
            Read Article <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function ArticleCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col h-full"
    >
      <div className="aspect-[3/2] bg-gray-100 rounded-2xl overflow-hidden mb-6 relative border border-border transition-shadow hover:shadow-lg">
        {post.coverImage ? (
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 group-hover:bg-white transition-colors duration-500">
            <span className="text-muted text-xs tracking-widest uppercase">Editorial</span>
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">{post.category}</span>
          <span className="text-xs text-muted border-l border-border pl-3">
            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
        
        <Link href={`/blog/${post.slug}`}>
          <h3 className="font-heading font-bold text-2xl text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3 flex-1">{post.excerpt}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs font-medium text-foreground">{post.author}</span>
          <Link 
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-xs font-semibold text-primary hover:text-primary-hover transition-colors"
          >
            Read <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function BlogPage() {
  const featured = MOCK_BLOGS[0];
  const posts = MOCK_BLOGS.slice(1);

  return (
    <div className="w-full bg-white pt-32 pb-24">
      {/* Header & Search */}
      <section className="max-w-6xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight text-foreground mb-4">
            Editorial
          </h1>
          <p className="text-muted text-xl max-w-lg">News, announcements, and perspectives from the LUMUNA community.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="relative w-full md:w-auto md:min-w-[300px]"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-border rounded-full text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
        </motion.div>
      </section>

      {/* Featured Article */}
      <section className="max-w-6xl mx-auto px-6">
        {featured && <FeaturedArticle post={featured} />}
      </section>

      {/* Latest Articles */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-heading text-3xl font-bold">Latest Articles</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {posts.map((post, i) => (
            <ArticleCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
