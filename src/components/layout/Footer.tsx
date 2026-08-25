import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <Link href="/" className="font-heading font-bold text-2xl text-foreground mb-4 block">
            LUMUNA
          </Link>
          <p className="text-muted text-sm max-w-sm leading-relaxed">
            The premier youth diplomacy organization of Leading University, Sylhet. Fostering future leaders through debate, negotiation, and international relations.
          </p>
        </div>
        
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Organization</h4>
          <ul className="space-y-3">
            <li><Link href="/about" className="text-muted text-sm hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/people" className="text-muted text-sm hover:text-primary transition-colors">Our People</Link></li>
            <li><Link href="/events" className="text-muted text-sm hover:text-primary transition-colors">Events</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Connect</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-muted text-sm hover:text-primary transition-colors">Facebook</a></li>
            <li><a href="#" className="text-muted text-sm hover:text-primary transition-colors">Instagram</a></li>
            <li><a href="#" className="text-muted text-sm hover:text-primary transition-colors">LinkedIn</a></li>
            <li><Link href="/contact" className="text-muted text-sm hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Leading University Model United Nations Association. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="/privacy" className="text-xs text-muted hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-xs text-muted hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
