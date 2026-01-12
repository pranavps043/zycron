"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Terminal, Shield, Network } from "lucide-react";
import { useEffect, useState } from "react";

export default function AboutCTA() {
  const [glitchText, setGlitchText] = useState("Industry Veterans");
  const [bgData] = useState<string[]>(() => 
    Array.from({ length: 48 }).map(() => 
      Math.random() > 0.5 ? "0101101010" : "xAF78_RE_0"
    )
  );
  const originalText = "Industry Veterans";
  const chars = "!@#$%^&*()_+{}[]|;:,.<>?";

  useEffect(() => {
    const interval = setInterval(() => {
      let result = "";
      for (let i = 0; i < originalText.length; i++) {
        if (Math.random() > 0.8) {
          result += chars[Math.floor(Math.random() * chars.length)];
        } else {
          result += originalText[i];
        }
      }
      setGlitchText(result);
      setTimeout(() => setGlitchText(originalText), 150);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-dark-bg">
      {/* Background Data Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none font-mono text-[10px] grid grid-cols-12 gap-2 p-4 select-none">
        {bgData.map((text, i) => (
          <div key={i} className="overflow-hidden whitespace-nowrap">
            {text}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         {/* Left Visual: Image with Cyber Frame */}
         <motion.div 
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative aspect-video rounded-3xl border border-white/5 overflow-hidden group"
         >
            <Image 
              src="/images/abt.jpg" 
              alt="Cyber Operations" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark Overlay with Tint */}
            <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay group-hover:bg-brand-primary/5 transition-colors" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />

            {/* Cyber Frame Overlays */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-brand-primary rounded-tl-sm shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-brand-primary rounded-tr-sm shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-brand-primary rounded-bl-sm shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-brand-primary rounded-br-sm shadow-[0_0_8px_rgba(239,68,68,0.5)]" />

            {/* Mock Log Overlay */}
            <div className="absolute top-10 left-10 font-mono text-[9px] text-brand-primary/80 space-y-1 bg-dark-bg/40 p-2 backdrop-blur-sm rounded border border-white/5">
              <div className="animate-pulse">_S_CORE_INIT: OK</div>
              <div className="text-white/40">AUTH_SIG: 0x88.V2</div>
            </div>
         </motion.div>

         {/* Right Content */}
         <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative"
         >
           <div className="mb-4 flex items-center gap-3">
             <div className="h-[1px] w-12 bg-brand-primary" />
             <span className="text-brand-primary font-mono text-xs tracking-tighter uppercase font-bold">Protocol_Est.1994</span>
           </div>

           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
             Built by <br />
             <span className="text-brand-primary font-mono inline-block">
               {glitchText}
             </span>
           </h2>

           <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg">
             We understand that cybersecurity is more than just code—it&apos;s about <span className="text-white/80">Digital Integrity</span>. Our team brings decades of experience from defense, intelligence, and large-scale tech.
           </p>

           <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-primary/20 transition-all">
                <Terminal className="w-5 h-5 text-brand-primary shrink-0" />
                <div>
                  <div className="text-white font-bold text-sm">Offensive Intel</div>
                  <div className="text-slate-500 text-xs mt-1">Pentesting</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-primary/20 transition-all">
                <Shield className="w-5 h-5 text-brand-primary shrink-0" />
                <div>
                  <div className="text-white font-bold text-sm">Active Defense</div>
                  <div className="text-slate-500 text-xs mt-1">24/7 Monitoring</div>
                </div>
              </div>
           </div>

           <Link href="/about-us" className="inline-flex items-center px-10 py-4 bg-brand-primary/10 text-brand-primary font-bold rounded-lg border border-brand-primary/20 hover:bg-brand-primary/20 transition-all group overflow-hidden relative">
             <span className="relative z-10 mr-3">LEARN_OUR_STORY</span>
             <Network className="w-4 h-4 relative z-10 group-hover:rotate-45 transition-transform" />
             <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-1000 ease-in-out" />
           </Link>
         </motion.div>
      </div>
    </section>
  );
}
