"use client";

import PageHeader from "@/components/PageHeader";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Activity, FileKey, Server, Award, Target, ShieldCheck } from "lucide-react";
import Timeline from "@/components/Timeline";
import Image from "next/image";
import { useRef } from "react";

export default function AboutUsPage() {
  const containerRef = useRef(null);
  
  // Parallax effects for the background
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="pb-20 selection:bg-brand-primary/30 relative">
      <div className="fixed inset-0 pointer-events-none">
        <Image 
          src="/images/ab.jpg" 
          alt="About Background" 
          fill 
          className="object-cover blur-sm opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-dark-bg/75" />
      </div>
      
      <main className="relative z-10">
        <PageHeader
          title="About Zycron"
          subtitle="Leading the charge in digital defense for more than a decade."
          className="relative pt-32 pb-24 bg-black/40 backdrop-blur-md border-b border-white/10"
        />

        {/* Redesigned Mission Section: "The Cyber Monolith" Theme */}
        <section ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center py-24 overflow-hidden">
          
          {/* Dynamic Background Elements */}
          <div className="absolute inset-0 z-0">
            {/* Animated Mesh Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
            
            {/* Floating Cyber Ribbons */}
            <motion.div 
              style={{ y: yBg, opacity: opacityBg }}
              className="absolute top-10 right-0 w-[800px] h-[800px] bg-gradient-to-br from-brand-primary/10 to-transparent rounded-full blur-[120px] mix-blend-screen" 
            />
            <motion.div 
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -left-20 top-40 w-[500px] h-[500px] border border-white/5 rounded-full border-dashed opacity-20"
            />
             <motion.div 
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -right-20 bottom-40 w-[600px] h-[600px] border border-brand-primary/10 rounded-full opacity-20"
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Content Column - Magazine/Editorial Layout */}
              <div className="lg:col-span-7 space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative pl-8 border-l-2 border-brand-primary/50"
                >
                  <motion.span 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100px" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-brand-primary to-transparent" 
                  />
                  <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-6">
                    SECURE. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-red-800">
                      DEFEND.
                    </span> <br />
                    PROTECT.
                  </h2>
                  <div className="flex items-center gap-4 text-slate-400 font-mono text-sm tracking-widest uppercase">
                    <span className="w-12 h-[1px] bg-slate-600" />
                    <span>Mission Critical Operations</span>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="space-y-8"
                >
                  <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                    We provide professional <span className="text-white font-medium border-b border-brand-primary/30 pb-0.5">cybersecurity solutions</span> to help organizations protect networks, systems, applications, and sensitive data from modern cyber threats.
                  </p>
                  
                  <div className="relative p-8 bg-white/[0.02] border border-white/[0.05] rounded-tl-3xl rounded-br-3xl backdrop-blur-sm overflow-hidden group hover:border-brand-primary/30 transition-colors">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-brand-primary/5 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-brand-primary/10" />
                    
                    <p className="text-slate-400 leading-relaxed relative z-10">
                      Our approach focuses on identifying security gaps, reducing risk, and strengthening IT infrastructure using best practices and standards.
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mt-6">
                      {["ISO 27001", "OWASP", "NIST"].map((standard, i) => (
                        <span key={i} className="inline-flex items-center px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider rounded border border-brand-primary/20">
                          {standard}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Visual Column - Abstract Construction */}
              <div className="lg:col-span-5 relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="relative z-10"
                >
                  {/* Visual Stack Cards */}
                  <div className="flex flex-col gap-4">
                     {[
                       { icon: Server, title: "Infrastructure", sub: "Hardening", color: "text-blue-400", border: "border-blue-500/30" },
                       { icon: Shield, title: "Network Defense", sub: "Real-time", color: "text-brand-primary", border: "border-brand-primary/30" },
                       { icon: FileKey, title: "Data Integrity", sub: "Encrypted", color: "text-emerald-400", border: "border-emerald-500/30" }
                     ].map((item, i) => (
                        <motion.div 
                          key={i}
                          initial={{ x: 50, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + (i * 0.15) }}
                          whileHover={{ x: -10, scale: 1.02 }}
                          className={`p-6 rounded-r-2xl rounded-bl-2xl bg-slate-900/80 border-l-4 ${item.border} border-y border-r border-white/5 backdrop-blur-md flex items-center gap-6 shadow-2xl relative overflow-hidden group cursor-default`}
                        >
                           <div className={`absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                           <div className={`p-3 rounded-lg bg-white/5 ${item.color}`}>
                             <item.icon className="w-6 h-6" />
                           </div>
                           <div>
                             <h4 className="text-white font-bold text-lg uppercase tracking-tight">{item.title}</h4>
                             <p className="text-slate-500 text-xs font-mono tracking-widest uppercase">{item.sub}</p>
                           </div>
                           <Activity className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 text-white/5" />
                        </motion.div>
                     ))}
                  </div>

                  {/* Decorative background for visual column */}
                  <div className="absolute -inset-10 bg-brand-primary/5 blur-3xl rounded-full z-[-1]" />
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        <Timeline />

        <section className="bg-transparent backdrop-blur-[100px] py-20 border-y border-white/5">
          <div className="container mx-auto px-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-center text-white mb-16 uppercase tracking-tight"
            >
              Our Core <span className="text-brand-primary">Values</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Integrity", icon: ShieldCheck, desc: "We maintain the highest ethical standards in every engagement." },
                { title: "Innovation", icon: Target, desc: "We constantly push the boundaries of what's possible in security tech." },
                { title: "Excellence", icon: Award, desc: "We settle for nothing less than perfection in our code and services." },
              ].map((value, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="text-center space-y-4 p-8 rounded-3xl hover:bg-white/5 transition-all"
                >
                  <div className="mx-auto w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase">{value.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
