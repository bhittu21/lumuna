import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Share2, Copy, ExternalLink } from "lucide-react";
import { MOCK_BLOGS } from "@/data/mock";
import Script from "next/script";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const post = MOCK_BLOGS.find(p => p.slug === params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | LUMUNA Editorial`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    }
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = MOCK_BLOGS.find(p => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = MOCK_BLOGS.filter(p => p.id !== post.id).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "description": post.excerpt
  };

  return (
    <div className="w-full bg-white pb-32">
      <Script
        id="blog-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article>
        {/* Header */}
        <header className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted hover:text-foreground transition-colors mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Editorial
          </Link>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-widest uppercase">
              {post.category}
            </span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight text-foreground mb-8">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-muted">
            <span>By {post.author}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </header>

        {/* Cover Image */}
        <div className="max-w-5xl mx-auto px-6 mb-20">
          <div className="w-full aspect-[21/9] bg-gray-100 rounded-3xl overflow-hidden border border-border">
            {post.coverImage ? (
              <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-50 text-muted uppercase tracking-widest text-sm">
                Editorial Image
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto px-6">
          <div 
            className="prose prose-lg md:prose-xl prose-headings:font-heading prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-[1.8] prose-a:text-primary hover:prose-a:text-primary-hover max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share & Footer */}
          <div className="py-8 border-y border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm font-bold text-foreground uppercase tracking-wider">Share Article</div>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-gray-50 border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-50 border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors">
                <Copy className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-50 border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 mt-32">
          <div className="flex justify-between items-end mb-12 border-b border-border pb-4">
            <h2 className="font-heading text-3xl font-bold">Related Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map(p => (
              <Link key={p.id} href={`/blog/${p.slug}`} className="group flex flex-col">
                <div className="aspect-[16/9] bg-gray-100 rounded-xl overflow-hidden mb-4 border border-border">
                  {p.coverImage ? (
                     <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-50 transition-colors group-hover:bg-white" />
                  )}
                </div>
                <div className="flex items-center gap-3 mb-2 text-xs">
                  <span className="font-bold text-primary uppercase">{p.category}</span>
                  <span className="text-muted">{new Date(p.date).toLocaleDateString()}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">{p.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

