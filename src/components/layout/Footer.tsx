import Link from "next/link";
import { CONTACT_INFO } from "@/data/mock";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-white pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-5">
          <Link href="/" className="flex items-center gap-3 mb-6 group">
            <img src="/logo.png" alt="LUMUNA Logo" className="h-12 w-auto transition-transform group-hover:scale-105" />
            <span className="font-heading font-bold text-3xl text-foreground">
              LUMUNA
            </span>
          </Link>
          <p className="text-muted text-base max-w-sm leading-relaxed mb-6">
            The premier youth diplomacy organization of Leading University, Sylhet. Fostering future leaders through debate, negotiation, and international relations.
          </p>
          <p className="font-serif italic text-primary font-medium text-lg">
            "Prosperity Lies in Unity"
          </p>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="font-heading font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Organization</h4>
          <ul className="space-y-4">
            <li><Link href="/about" className="text-muted text-sm font-medium hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/people" className="text-muted text-sm font-medium hover:text-primary transition-colors">Our People</Link></li>
            <li><Link href="/events" className="text-muted text-sm font-medium hover:text-primary transition-colors">Events Archive</Link></li>
            <li><Link href="/blog" className="text-muted text-sm font-medium hover:text-primary transition-colors">Editorial Blog</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-heading font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Participate</h4>
          <ul className="space-y-4">
            <li><Link href="/register" className="text-muted text-sm font-medium hover:text-primary transition-colors">Registration Hub</Link></li>
            <li><Link href="/resources" className="text-muted text-sm font-medium hover:text-primary transition-colors">Resources & Guides</Link></li>
            <li><Link href="/faq" className="text-muted text-sm font-medium hover:text-primary transition-colors">FAQ</Link></li>
          </ul>
        </div>
        
        <div className="md:col-span-3">
          <h4 className="font-heading font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Connect</h4>
          <ul className="space-y-4">
            <li><Link href="/contact" className="text-muted text-sm font-medium hover:text-primary transition-colors">Contact Us</Link></li>
            <li><a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="text-muted text-sm font-medium hover:text-primary transition-colors">Facebook Page</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs font-semibold text-muted tracking-wide uppercase">
          &copy; {new Date().getFullYear()} Leading University Model United Nations Association.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="text-xs font-medium text-muted hover:text-foreground transition-colors">Privacy</Link>
          <Link href="#" className="text-xs font-medium text-muted hover:text-foreground transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
