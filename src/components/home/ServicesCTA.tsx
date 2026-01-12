"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldAlert, Cloud, Fingerprint, Terminal, ArrowRight, Monitor, ChevronRight } from "lucide-react";

export default function ServicesCTA() {
  const services = [
    { title: "Threat Detection", icon: ShieldAlert, desc: "AI-powered real-time monitoring and advanced behavioral analysis.", code: "DETECTION_v2.0" },
    { title: "Cloud Security", icon: Cloud, desc: "Comprehensive multi-cloud infrastructure audit and protection.", code: "CLOUD_AUDIT" },
    { title: "Zero Trust", icon: Fingerprint, desc: "Modern identity-based access management and perimeter defense.", code: "ZERO_TRUST_AUTH" },
    { title: "End-to-End", icon: Terminal, desc: "Silicon to software security with high-level hardware encryption.", code: "BOOT_ROOT_SEC" },
  ];

  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background Cyber Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-brand-primary/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-brand-primary/20 to-transparent animate-scan" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 bg-brand-primary/10 border border-brand-primary/20 rounded text-[10px] text-brand-primary font-mono animate-pulse">
                SYSTEM_STATUS: ACTIVE
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Autonomous <br />
              <span className="text-brand-primary font-mono">&lt;Security_Services /&gt;</span>
            </h2>
            <p className="text-slate-400 font-light max-w-md">Comprehensive protection across all layers of your digital organization, powered by AI automation.</p>
          </div>
          
          <Link href="/services" className="px-6 py-3 bg-brand-primary/5 hover:bg-brand-primary/10 border border-brand-primary/20 rounded-lg text-brand-primary font-bold flex items-center group transition-all">
            <span className="mr-2">View All Protocols</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative cursor-pointer"
            >
              {/* Card Container */}
              <div className="p-1 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-brand-primary/30 transition-colors bg-dark-card overflow-hidden h-full">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  </div>
                  <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">{s.code}</span>
                </div>

                <div className="p-6">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-brand-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <s.icon className="w-10 h-10 text-brand-primary relative z-10 transition-transform group-hover:scale-110" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-primary transition-colors flex items-center gap-2">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                  
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-green-500 animate-flicker" />
                      <span className="text-[10px] font-mono text-slate-500">ENCRYPTED_FLOW</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-700 group-hover:text-brand-primary transition-colors" />
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-px bg-brand-primary/0 group-hover:bg-brand-primary/5 rounded-2xl blur-xl transition-all -z-10" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Interface Decoration */}
      <div className="absolute bottom-4 left-6 flex items-center gap-4 opacity-20 pointer-events-none">
        <div className="flex items-center gap-2">
          <Monitor className="w-3 h-3 text-slate-500" />
          <span className="text-[8px] font-mono text-slate-500">ID: CN88-012</span>
        </div>
        <div className="h-[1px] w-24 bg-gradient-to-r from-slate-500 to-transparent" />
      </div>
    </section>
  );
}
