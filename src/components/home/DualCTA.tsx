"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Radio, Terminal, Activity } from "lucide-react";

export default function DualCTA() {
  return (
    <section className="py-24 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
       {/* Left Card: Talent Sync */}
       <motion.div 
         initial={{ opacity: 0, x: -20 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6 }}
         className="relative p-12 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 overflow-hidden group"
       >
          {/* Background Image with Blur */}
          <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-700">
            <Image 
              src="/images/dual.jpg" 
              alt="Background" 
              fill 
              className="object-cover blur-md scale-110 group-hover:scale-100 transition-transform duration-1000"
            />
          </div>

          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity z-10">
             <Cpu className="w-48 h-48 text-brand-primary" />
          </div>
          
          <div className="relative z-10">
             <div className="flex items-center gap-3 mb-6">
                <div className="flex h-5 items-center gap-1.5 px-2 py-0.5 rounded-md bg-brand-primary/10 border border-brand-primary/20">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                   <span className="text-[10px] font-mono text-brand-primary uppercase tracking-tighter">NODE_ID: RECRUIT_CORE</span>
                </div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">DATA: 24/7_SYNCING</div>
             </div>

             <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Join Our Mission</h3>
             <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-sm">
                Intercept the future. We&apos;re looking for the brightest minds to help us solve the next generation of digital challenges.
             </p>

             <Link href="/careers" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-mono text-xs font-bold rounded-xl hover:bg-brand-primary hover:text-black transition-all flex items-center justify-center sm:inline-flex group/btn overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[scan_2s_linear_infinite]" />
                <span className="relative">INITIALIZE_APPLICATION</span>
                <Terminal className="w-3.5 h-3.5 ml-2 relative" />
             </Link>
          </div>

          <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-brand-primary/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-brand-primary/10 transition-colors z-0" />
       </motion.div>

       {/* Right Card: Emergency Signal */}
       <motion.div 
         initial={{ opacity: 0, x: 20 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6, delay: 0.2 }}
         className="relative p-12 rounded-[2.5rem] bg-[#0c0c0c] border border-brand-primary/20 overflow-hidden group"
       >
          {/* Background Image with Blur */}
          <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-700">
            <Image 
              src="/images/dual.jpg" 
              alt="Background" 
              fill 
              className="object-cover blur-md scale-110 group-hover:scale-100 transition-transform duration-1000"
            />
          </div>

          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity z-10">
             <Radio className="w-48 h-48 text-brand-primary" />
          </div>

          <div className="relative z-10">
             <div className="flex items-center gap-3 mb-6">
                <div className="flex h-5 items-center gap-1.5 px-2 py-0.5 rounded-md bg-green-500/10 border border-green-500/20">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-[10px] font-mono text-green-500 uppercase tracking-tighter">STATUS: LISTENING</span>
                </div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">CHANNEL: AES_OPS_4</div>
             </div>

             <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Need Assistance?</h3>
             <p className="text-slate-300 mb-10 text-lg leading-relaxed max-w-sm">
                Active monitoring. Our team is available 24/7 for support, consultation, or emergency incident response protocols.
             </p>

             <Link href="/contact-us" className="px-8 py-4 bg-brand-primary text-black font-mono text-xs font-bold rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)] flex items-center justify-center sm:inline-flex group/btn overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover/btn:animate-[scan_2s_linear_infinite]" />
                <span className="relative">ESTABLISH_CONNECTION</span>
                <Activity className="w-3.5 h-3.5 ml-2 relative" />
             </Link>
          </div>

          <div className="absolute bottom-0 right-0 w-full h-1 flex gap-1 opacity-20 z-10">
             {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="flex-1 bg-brand-primary animate-pulse" style={{ animationDelay: `${i * 0.05}s` }} />
             ))}
          </div>
       </motion.div>
    </section>
  );
}
