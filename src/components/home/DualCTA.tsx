"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Radio, Terminal, Activity } from "lucide-react";

export default function DualCTA() {
  return (
    <section className="py-24 container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
        
        {/* LEFT: NEURAL HUB (CAREERS) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="group relative p-12 lg:p-16 bg-black min-h-[500px] flex flex-col justify-between overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 z-0 scale-110 group-hover:scale-100 transition-transform duration-1000">
             <Image src="/images/dual.jpg" alt="Neural Hub" fill className="object-cover opacity-10 blur-sm" />
             <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          </div>

          {/* Animated HUD Grid */}
          <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" 
            style={{ backgroundImage: 'linear-gradient(#00f2ff 1px, transparent 1px), linear-gradient(90deg, #00f2ff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
          />

          <div className="relative z-10 flex flex-col h-full">
            <header className="flex justify-between items-start mb-12">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#00f2ff] animate-pulse" />
                  <span className="text-[10px] font-mono text-[#00f2ff] uppercase tracking-[0.3em]">Neural_Network_Active</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter max-w-xs leading-none">
                  Join The <span className="text-cyan-400">Hub</span>
                </h3>
              </div>
              <Cpu className="text-cyan-500/20 w-16 h-16 transform group-hover:rotate-12 transition-transform duration-700" />
            </header>

            <div className="space-y-6 mb-12">
              <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
                Intercept the future of cyber defense. We are recruiting top-tier talent for the next generation of digital warfare.
              </p>
              
              <div className="flex flex-wrap gap-4">
                {['AI_SECURITY', 'THREAT_INTEL', 'DEVSEC_OPS'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded bg-cyan-500/5 border border-cyan-500/10 text-[9px] font-mono text-cyan-500/60 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <Link href="/careers" className="group/btn inline-flex items-center gap-4 py-4 px-8 bg-white/5 border border-white/10 rounded-2xl text-white font-mono text-xs font-black uppercase tracking-[0.2em] hover:bg-cyan-500 hover:text-black transition-all shadow-xl hover:shadow-cyan-500/20">
                <span>Init_Recruit_v3</span>
                <div className="h-px w-8 bg-white/30 group-hover/btn:w-12 transition-all" />
                <Terminal className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Corner Decors */}
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/5 blur-[60px] rounded-full" />
        </motion.div>

        {/* RIGHT: RESPONSE CENTER (CONTACT) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group relative p-12 lg:p-16 bg-[#050505] min-h-[500px] flex flex-col justify-between overflow-hidden border-l border-white/5"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 z-0 scale-110 group-hover:scale-100 transition-transform duration-1000">
             <Image src="/images/contact.jpg" alt="Response Center" fill className="object-cover opacity-10 blur-sm" />
             <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col h-full">
            <header className="flex justify-between items-start mb-12">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-pulse" />
                  <span className="text-[10px] font-mono text-brand-primary uppercase tracking-[0.3em]">Comms_Channel_04</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter max-w-xs leading-none">
                  Rapid <span className="text-brand-primary">React</span>
                </h3>
              </div>
              <Radio className="text-brand-primary/20 w-16 h-16 transform group-hover:scale-110 transition-transform duration-700" />
            </header>

            <div className="space-y-6 mb-12">
              <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
                Under attack? Contact our elite rapid response unit for immediate incident remediation and infrastructure hardening.
              </p>

              <div className="flex items-center gap-6">
                 <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-lg bg-dark-bg border border-brand-primary/20 flex items-center justify-center text-[10px] font-mono text-brand-primary">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                 </div>
                 <span className="text-[10px] font-mono text-slate-500 uppercase">3_Engineers_Standby</span>
              </div>
            </div>

            <div className="mt-auto">
              <Link href="/contact-us" className="group/btn inline-flex items-center gap-4 py-4 px-8 bg-brand-primary rounded-2xl text-black font-mono text-xs font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl shadow-brand-primary/20">
                <span>Protocol_Execute</span>
                <div className="h-px w-8 bg-black/30 group-hover/btn:w-12 transition-all" />
                <Activity className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Bottom Bar Details */}
          <div className="absolute bottom-0 right-0 left-0 h-1 bg-white/5 flex">
             <motion.div 
               animate={{ x: ['-100%', '100%'] }}
               transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
               className="h-full w-1/4 bg-brand-primary/50" 
             />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
