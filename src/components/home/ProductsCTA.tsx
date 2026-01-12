"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Server, ShieldCheck, Database, Zap, Lock } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

export default function ProductsCTA() {
  const [glitchTitle, setGlitchTitle] = useState("Shadow Operators");
  const [btnText, setBtnText] = useState("INITIALIZE_VAULT_ACCESS");
  const [bgHex] = useState<string[]>(() => 
    Array.from({ length: 40 }).map(() => 
      Math.random().toString(16).substring(2, 10).toUpperCase()
    )
  );
  
  const originalTitle = "Shadow Operators";
  const originalBtn = "INITIALIZE_VAULT_ACCESS";
  const chars = "ABCDEF0123456789";

  const handleDecryption = useCallback((setter: (val: string) => void, original: string) => {
    let iterations = 0;
    const interval = setInterval(() => {
      setter(
        original
          .split("")
          .map((letter, index) => {
            if (index < iterations) return original[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iterations >= original.length) clearInterval(interval);
      iterations += 1/3;
    }, 30);
  }, [chars]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleDecryption(setGlitchTitle, originalTitle);
    }, 4500);
    return () => clearInterval(interval);
  }, [handleDecryption, originalTitle]);

  return (
    <section className="py-24 container mx-auto px-6">
       <motion.div 
         initial={{ opacity: 0, scale: 0.98 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         className="bg-[#080808] border border-white/5 rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 relative overflow-hidden group shadow-2xl"
       >
          {/* Background Image with Blur */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/pro.jpg" 
              alt="Background" 
              fill 
              className="object-cover opacity-20 group-hover:opacity-15 transition-opacity duration-700"
            />
          </div>

          {/* Hexadecimal Background Stream */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none font-mono text-xs select-none overflow-hidden flex flex-wrap gap-4 p-8 z-10">
             {bgHex.map((hex, i) => (
               <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                 {hex}
               </div>
             ))}
          </div>

          <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none z-10" />
          
          <div className="relative z-20 flex flex-col md:flex-row items-center gap-12">
             <div className="max-w-2xl text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                   <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">ONION_CONNECTED</span>
                   </div>
                   <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[10px] text-slate-400">
                      TOR_NODE: [REDACTED]
                   </div>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                   Underground Arsenal for <br />
                   <span className="text-brand-primary font-mono">{glitchTitle}</span>
                </h2>
                
                <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl">
                  Access our curated selection of zero-day exploits, encrypted tunnel protocols, and stealth infiltration kits designed for the modern phantom.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                   <Link 
                     href="/products" 
                     onMouseEnter={() => handleDecryption(setBtnText, originalBtn)}
                     className="px-10 py-5 bg-brand-primary text-black font-mono font-bold rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)] flex items-center justify-center group overflow-hidden"
                   >
                     <span>{btnText}</span>
                     <Zap className="w-4 h-4 ml-3 group-hover:rotate-12 transition-transform" />
                   </Link>
                   
                   <div className="flex items-center gap-6 font-mono text-[10px] text-slate-600">
                      <div className="flex items-center gap-2">
                         <Database className="w-3 h-3" />
                         <span>THREAT_DB: 4.2EB</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <Lock className="w-3 h-3" />
                         <span>QUANTUM_SECURED</span>
                      </div>
                   </div>
                </div>
             </div>

             <div className="hidden lg:grid grid-cols-2 gap-4 flex-shrink-0">
                {[
                  { icon: ShieldCheck, label: "ZERO_DAY_SDK" },
                  { icon: Server, label: "GHOST_TUNNEL" },
                  { icon: Lock, label: "SENTINEL_ROOT" },
                  { icon: Database, label: "VOID_STORAGE" },
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-[#0c0c0c] border border-white/5 rounded-2xl flex flex-col items-center gap-3 group/item hover:border-brand-primary/30 transition-colors">
                     <item.icon className="w-8 h-8 text-brand-primary/40 group-hover/item:text-brand-primary group-hover/item:scale-110 transition-all" />
                     <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
             </div>
          </div>

          {/* Decorative Corner Notch */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-primary/5 clip-path-notch group-hover:bg-brand-primary/10 transition-colors pointer-events-none" />
       </motion.div>
    </section>
  );
}
