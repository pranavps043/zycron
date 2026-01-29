"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about-us" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] z-[100] glass border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl"
    >
      <div className="container mx-auto px-6 py-0 flex justify-between items-center h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center z-[110] h-full">
          <Image
            src="/images/bgless.png"
            alt="Zycron Logo"
            width={330}
            height={200}
            className="h-full w-auto object-contain py-4"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-brand-primary ${
                pathname === link.href ? "text-brand-primary" : "text-slate-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="px-5 py-2 rounded-xl bg-red-800 text-white text-[10px] font-black uppercase tracking-widest hover:bg-brand-secondary transition-all transform active:scale-95"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-black/90 rounded-b-2xl border-t border-white/5"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold uppercase tracking-widest flex justify-between items-center ${
                    pathname === link.href ? "text-brand-primary" : "text-slate-300"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ))}
              <Link
                href="/contact-us"
                className="w-full py-4 rounded-xl bg-brand-primary text-center text-white font-black uppercase tracking-widest text-xs"
                onClick={() => setIsOpen(false)}
              >
                Access Platform
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
