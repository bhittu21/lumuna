"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/people", label: "People" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Resources" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-300",
          isScrolled ? "top-2" : "top-4"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-border/50 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)] transition-all duration-300",
            isScrolled ? "py-2" : "py-3"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="LUMUNA Logo" className="h-8 w-auto transition-transform group-hover:scale-105" />
            <span className="font-heading font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors hidden sm:block">
              LUMUNA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActive ? "text-primary" : "text-muted"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/register"
              className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-hover rounded-full transition-colors"
            >
              Register
            </Link>
            
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm md:hidden flex flex-col p-6"
        >
          <div className="flex items-center justify-between mb-12">
            <span className="font-heading font-bold text-2xl text-foreground">LUMUNA</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 -mr-2 text-foreground"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex flex-col gap-6 flex-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-heading font-semibold text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="pb-8">
            <Link
              href="/register"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-full py-4 text-lg font-semibold text-white bg-primary rounded-xl"
            >
              Register Now
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
}
