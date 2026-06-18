import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import kallaLogoPath from "@assets/kallas-logo-clean_(4)_(1)_1779887979267.png";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/firm", label: "Firm" },
    { href: "/team", label: "Team" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 py-6 pt-[15px] pb-[15px]",
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        )}
      >
        <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-4">
            <img src={kallaLogoPath} alt="Kallas Ventures" className="h-24 w-auto" />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-medium tracking-wide leading-tight text-navy">Kallas</span>
              <span className="font-serif text-xl font-medium tracking-wide leading-tight text-navy">Ventures</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors hover:text-blue",
                    isActive ? "text-blue" : "text-navy"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-px bg-bright-blue"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            className="md:hidden p-2 text-navy rounded-md focus:outline-none"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-[88px] z-40 bg-white border-b border-border shadow-lg md:hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-1">
              {navLinks.map((link, i) => {
                const isActive = location === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block py-3 text-lg font-medium border-b border-border/50 last:border-0 transition-colors",
                        isActive ? "text-[#2575E8]" : "text-navy hover:text-[#2575E8]"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
