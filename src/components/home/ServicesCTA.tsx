"use client";

import { motion } from "framer-motion";
import { FileCheck, CheckCircle2, Search, Activity, ClipboardCheck } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-primary/5 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase italic">
            Core Security <br />
            <span className="text-brand-primary">Testing & Operations</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            Professional cybersecurity solutions designed to identify, defend, and govern your digital infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Security Testing */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group"
          >
            <div className="bg-slate-900/50 rounded-3xl border border-white/10 overflow-hidden h-[250px] relative mb-8 group-hover:border-brand-primary/30 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              
              {/* Visual: Scanning Animation */}
              <div className="absolute inset-x-6 top-8 bottom-0 flex flex-col items-center justify-center">
                <div className="relative w-32 h-32 mb-4">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-brand-primary/20 rounded-full"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-2 border border-brand-primary/10 rounded-full border-dashed"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Search className="w-10 h-10 text-brand-primary animate-pulse" />
                  </div>
                  <motion.div 
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-0 right-0 h-0.5 bg-brand-primary/40 shadow-[0_0_15px_#991b1b]"
                  />
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-1 bg-brand-primary/20 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        className="w-full h-full bg-brand-primary"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">Security Testing</h3>
            <ul className="space-y-3">
              {[
                "Vulnerability Assessment (VA)",
                "Penetration Testing (Web/Network)",
                "Web & API Security Testing"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2: Security Operations */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <div className="bg-slate-900/50 rounded-3xl border border-white/10 overflow-hidden h-[250px] relative mb-8 group-hover:border-brand-primary/30 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              
              {/* Visual: Server Hardening & Monitoring */}
              <div className="absolute inset-x-6 top-8 bottom-0 flex flex-col justify-center">
                <div className="space-y-4">
                  {[
                    { label: "SERVER_OS", status: "HARDENED", color: "text-emerald-400" },
                    { label: "NETWORK_FIREWALL", status: "ACTIVE", color: "text-brand-primary" },
                    { label: "SIEM_STATUS", status: "MONITORING", color: "text-blue-400" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-black/60 p-3 rounded-lg border border-white/5 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Activity className="w-4 h-4 text-slate-600" />
                        <span className="text-[10px] font-mono text-slate-400">{stat.label}</span>
                      </div>
                      <span className={`text-[9px] font-black font-mono ${stat.color}`}>{stat.status}</span>
                    </div>
                  ))}
                  <div className="flex gap-1 h-8 items-end px-2">
                    {[3, 5, 2, 8, 4, 6, 3, 7, 4, 5, 2, 6].map((h, i) => (
                      <motion.div 
                        key={i}
                        animate={{ height: [`${h * 10}%`, `${(h + 2) * 5}%`, `${h * 10}%`] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                        className="flex-1 bg-brand-primary/30 rounded-t-[1px]" 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">Security Operations</h3>
            <ul className="space-y-3">
              {[
                "OS/Server Hardening",
                "Endpoint Security & Malware Protection",
                "Log Monitoring / SIEM Support",
                "Incident Response & Recovery Support"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 3: Governance & Compliance */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group"
          >
            <div className="bg-slate-900/50 rounded-3xl border border-white/10 overflow-hidden h-[250px] relative mb-8 group-hover:border-brand-primary/30 transition-colors flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              
              {/* Visual: Documentation/Compliance Check */}
              <div className="w-[85%] bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 p-6 relative overflow-hidden">
                <div className="absolute -right-4 top-0 opacity-10">
                  <ClipboardCheck className="w-24 h-24 text-white" />
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20">
                    <FileCheck className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xs">ISO 27001 Readiness</div>
                    <div className="text-[10px] text-brand-primary font-mono tracking-widest">VERIFIED</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[85, 92, 78].map((prog, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex justify-between text-[8px] text-slate-500 font-bold uppercase tracking-widest">
                        <span>{i === 0 ? "Policy_Audit" : i === 1 ? "Awareness_Training" : "Risk_Analysis"}</span>
                        <span>{prog}%</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${prog}%` }}
                          transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                          className="h-full bg-brand-primary" 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">Governance & Compliance</h3>
            <ul className="space-y-3">
              {[
                "Security Assessment & Risk Analysis",
                "ISO 27001 Policy & Documentation",
                "Security Awareness Training",
                "Compliance Readiness Checklists"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

