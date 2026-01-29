"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Shield, Rocket, Target } from "lucide-react";

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: number[];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-3 lg:mr-5 mb-2 h-fit">
      <span className="absolute opacity-10 text-white select-none whitespace-nowrap">
        {children}
      </span>
      <motion.span 
        style={{ opacity }} 
        className="text-white whitespace-nowrap"
      >
        {children}
      </motion.span>
    </span>
  );
};

export interface MagicTextProps {
  text: string;
}

const MagicText: React.FC<MagicTextProps> = ({ text }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "start 0.2"],
  });

  const words = text.split(" ");

  return (
    <div ref={container} className="flex flex-wrap justify-center text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </div>
  );
};

export default function AboutCTA() {
  const sectionRef = useRef(null);
  
  return (
    <section ref={sectionRef} className="py-32 relative bg-black overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(153,27,27,0.05)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Top Header Label */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="h-[1px] w-12 bg-brand-primary" />
          <span className="text-brand-primary font-mono text-xs tracking-[0.5em] uppercase font-bold">
            The_Zycron_Ethos
          </span>
          <div className="h-[1px] w-12 bg-brand-primary" />
        </motion.div>

        {/* Main Magic Text Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <MagicText 
            text="We build defense systems that think faster than the threats they neutralize. Elite intelligence merged with unshakeable integrity."
          />
        </div>

        {/* Action Blocks */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mb-20"
        >
          {[
            { icon: Shield, label: "Hardened Core" },
            { icon: Target, label: "Precision Intel" },
            { icon: Rocket, label: "Rapid Response" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center p-6 border border-white/5 bg-white/[0.02] rounded-2xl group hover:border-brand-primary/30 transition-all">
              <item.icon className="w-6 h-6 text-brand-primary/50 group-hover:text-brand-primary mb-4 transition-colors" />
              <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.8 }}
        >
          <Link href="/about-us" className="group relative inline-flex items-center gap-4 px-12 py-5 bg-brand-primary text-white font-black uppercase tracking-[0.3em] text-xs rounded-full overflow-hidden transition-all hover:pr-14 hover:shadow-[0_0_30px_rgba(153,27,27,0.4)]">
            <span>Learn Our Story</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            
            {/* Gloss shine effect */}
            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000 ease-in-out" />
          </Link>
        </motion.div>
      </div>

       {/* Decorative Side Text */}
       <div className="absolute left-10 top-1/2 -rotate-90 origin-left text-[10px] font-mono text-white/5 tracking-[2em] uppercase hidden xl:block pointer-events-none">
        0xZY_SECURE_INIT_88
      </div>
      <div className="absolute right-10 top-1/2 rotate-90 origin-right text-[10px] font-mono text-white/5 tracking-[2em] uppercase hidden xl:block pointer-events-none">
        ENCRYPTED_AUTH_STREAM
      </div>
    </section>
  );
}

