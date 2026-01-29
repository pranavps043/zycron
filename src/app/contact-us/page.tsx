"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Terminal,
  ShieldCheck, 
  Lock, 
  Activity,
  Loader2,
  CheckCircle2
} from "lucide-react";
import emailjs from '@emailjs/browser';

const ScanLine = () => (
  <motion.div
    animate={{ top: ["0%", "100%", "0%"] }}
    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    className="absolute left-0 right-0 h-[2px] bg-brand-primary/10 z-10 pointer-events-none"
  />
);

const TerminalLabel = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex items-center space-x-2 mb-2 ${className}`}>
    <div className="w-1 h-3 bg-brand-primary shadow-[0_0_8px_rgba(153,27,27,0.8)]" />
    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70 font-mono">
      {children}
    </span>
  </div>
);

export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_hz0zemk",
        "template_44e0pyi",
        {
          from_name: formData.name,
          from_email: formData.email,
          contact_number: formData.phone,
          message: formData.message,
        },
        "2btwHfBcH1Fcg-d1q"
      );

      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send transmission. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative pb-20 min-h-screen selection:bg-brand-primary/30 selection:text-brand-primary overflow-hidden">
      {/* Page Background Image */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Image
          src="/images/cont.jpg"
          alt="Contact Background"
          fill
          className="object-cover blur-sm opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20" />
      </div>

      <div className="relative z-10">
        <PageHeader
          title="Contact Us"
          subtitle="Secure communication channels are now encrypted and open for connection."
          showDecoration={false}
          className="relative pt-32 pb-24 bg-black/40 backdrop-blur-md border-b border-white/10"
        />

        <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Tactical Intel Side */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-[2rem] bg-dark-card border border-brand-primary/10 overflow-hidden group"
            >
              <ScanLine />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(153,27,27,0.05),transparent)] opacity-100" />
              
              <div className="relative z-20 font-mono">
                <div className="inline-flex items-center space-x-3 px-3 py-1 rounded-md bg-brand-primary/10 border border-brand-primary/20 mb-6">
                  <Activity className="w-3 h-3 text-brand-primary animate-pulse" />
                  <span className="text-[9px] font-black text-brand-primary uppercase tracking-widest">Global Uplink Optimized</span>
                </div>

                <h2 className="text-2xl font-black text-white mb-4 tracking-tighter leading-none italic uppercase">
                  SECURE <br />
                  <span className="text-brand-primary">RELAY</span>
                </h2>
                
                <p className="text-slate-400 mb-8 text-[11px] leading-relaxed uppercase tracking-tight">
                  Initiate direct contact for enterprise security audits, incident response, or deployment requests. Authorized Zycron personnel will acknowledge within 40ms.
                </p>

                <div className="space-y-3">
                  {[
                    { icon: Mail, label: "COMM_CHANNEL", value: "HQ@ZYCRON.COM", color: "text-brand-primary" },
                    { icon: Phone, label: "SECURE_VOICE", value: "+1.ZYCRON.RELAY", color: "text-white" },
                    { icon: MapPin, label: "LOC_COORDS", value: "SILICON_VLY_CA_94025", color: "text-slate-400" },
                  ].map((info, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center space-x-5 py-3 border-b border-white/5 last:border-0"
                    >
                      <div className="w-8 h-8 bg-brand-primary/5 rounded-lg flex items-center justify-center border border-brand-primary/10 group-hover:border-brand-primary/30 transition-all">
                        <info.icon className="w-3 h-3 text-brand-primary" />
                      </div>
                      <div>
                        <p className="text-[8px] font-black text-brand-primary/40 uppercase tracking-[0.3em]">{info.label}</p>
                        <p className={`text-[11px] font-black ${info.color} tracking-widest uppercase mt-1`}>{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Micro Terminal Status */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "ENCRYPTION", val: "AES-256", icon: Lock },
                { label: "PROTOCOL", val: "TRUE_v4", icon: ShieldCheck }
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-center font-mono">
                  <stat.icon className="w-3 h-3 text-brand-primary/30 mb-2" />
                  <p className="text-[7px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
                  <p className="text-[9px] font-black text-white uppercase tracking-tighter mt-1">{stat.val}</p>
                </div>
              ))}
            </div>
          </div>

            {/* Hacker Terminal Form Section */}
            <ScrollReveal animation="zoom-in" delay={0.2} className="lg:col-span-8 relative">
              
              {/* Computer Frame / Bezel */}
              <div className="relative bg-[#1a1a1a] p-1.5 md:p-3 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.8),inset_0_2px_10px_rgba(255,255,255,0.1)] border border-white/10">
              
              {/* Internal Monitor Case */}
              <div className="relative bg-[#050505] rounded-[2.5rem] p-6 md:p-10 overflow-hidden border border-black shadow-inner min-h-[550px]">
                
                {/* Screen CRT Effects Overlay */}
                <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-[2.5rem]">
                   {/* Scanlines Effect */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-20 opacity-30" />
                   
                   {/* Flicker / Glow Effect */}
                   <div className="absolute inset-0 bg-brand-primary/5 z-10 animate-pulse" />
                   
                   {/* Vigilant Light / Reflection */}
                   <div className="absolute top-0 left-0 w-full h-[150%] bg-[linear-gradient(rgba(255,255,255,0.05)_0%,transparent_50%)] -skew-y-12 translate-y-[-50%] pointer-events-none" />
                </div>

                <div className="relative z-40 space-y-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-brand-primary/20 pb-6 gap-6">
                    <div>
                      <h3 className="text-xl font-black text-brand-primary uppercase tracking-tighter font-mono flex items-center gap-3">
                        <Terminal className="w-5 h-5" />
                        INIT_TRANSMISSION
                      </h3>
                      <p className="text-[8px] text-brand-primary/50 font-black uppercase tracking-[0.4em] mt-2 font-mono">SECURE_TUNNEL: TOR_V3_ACTIVE</p>
                    </div>
                    <div className="flex items-center space-x-6 font-mono">
                       <div className="flex flex-col items-end">
                         <span className="text-[7px] text-slate-500 font-bold uppercase tracking-widest">UPLINK</span>
                         <div className="flex gap-1 mt-1">
                            {[1,2,3,4,5].map(i => <div key={i} className={`w-1 h-2 ${i<5 ? 'bg-brand-primary shadow-[0_0_6px_#991b1b]' : 'bg-white/10'} rounded-sm`} />)}
                         </div>
                       </div>
                       <div className="flex flex-col items-end">
                          <span className="text-[7px] text-slate-500 font-bold uppercase tracking-widest">VER</span>
                          <span className="text-[9px] text-white font-black">4.8.2-Z</span>
                       </div>
                    </div>
                  </div>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group relative">
                        <TerminalLabel>NAME_ID</TerminalLabel>
                        <div className="relative">
                          <input
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-black border border-brand-primary/20 rounded-xl px-5 py-4 text-white font-mono text-xs placeholder:text-white/20 focus:outline-none focus:border-brand-primary focus:bg-brand-primary/10 transition-all focus:ring-4 focus:ring-brand-primary/10 uppercase"
                            placeholder="FullName"
                          />
                          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-brand-primary/30 text-[10px]">_</div>
                        </div>
                      </div>
                      <div className="group relative">
                        <TerminalLabel>EMAIL_ADDR</TerminalLabel>
                        <div className="relative">
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-black border border-brand-primary/20 rounded-xl px-5 py-4 text-white font-mono text-xs placeholder:text-white/20 focus:outline-none focus:border-brand-primary focus:bg-brand-primary/10 transition-all focus:ring-4 focus:ring-brand-primary/10 uppercase"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="group relative">
                      <TerminalLabel>CONTACT_NUM (OPTIONAL)</TerminalLabel>
                      <div className="relative">
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-black border border-brand-primary/20 rounded-xl px-5 py-4 text-white font-mono text-xs placeholder:text-white/20 focus:outline-none focus:border-brand-primary focus:bg-brand-primary/10 transition-all focus:ring-4 focus:ring-brand-primary/10 uppercase"
                          placeholder="Contact Number"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <TerminalLabel>MESSAGE</TerminalLabel>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-black border border-brand-primary/20 rounded-2xl px-5 py-4 text-white font-mono text-[11px] placeholder:text-white/20 focus:outline-none focus:border-brand-primary focus:bg-brand-primary/10 transition-all focus:ring-4 focus:ring-brand-primary/10 h-28 resize-none uppercase leading-relaxed"
                        placeholder="Message"
                      />
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <motion.button 
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02, backgroundColor: isSubmitting ? "" : "#991b1b", color: isSubmitting ? "" : "#fff" }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        className="w-full md:w-2/3 bg-brand-primary/20 border border-brand-primary/50 text-brand-primary font-black py-5 rounded-2xl transition-all flex items-center justify-center space-x-5 shadow-[0_0_30px_rgba(153,27,27,0.2)] uppercase tracking-[0.5em] text-[10px] font-mono group hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <Loader2 className="w-4 h-4 animate-spin text-brand-primary" />
                        ) : (
                          <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        )}
                        <span>{isSubmitting ? "TRANSMITTING..." : "EXE_TRANSMISSION"}</span>
                      </motion.button>
                      
                      <div className="flex flex-col justify-center flex-1 space-y-2">
                        <AnimatePresence mode="wait">
                          {isSuccess ? (
                            <motion.div
                              key="success"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              className="flex items-center gap-4"
                            >
                               <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                               <span className="text-[9px] font-mono text-brand-primary font-black uppercase tracking-widest">TRANSMISSION_COMPLETE</span>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="stable"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="flex items-center gap-4"
                            >
                               <div className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
                               <span className="text-[9px] font-mono text-brand-primary/70 font-black uppercase tracking-widest">SYSTEM_STABLE</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        <div className="flex items-center gap-4">
                           <div className="w-2 h-2 rounded-full bg-brand-primary/20" />
                           <span className="text-[9px] font-mono text-slate-600 font-black uppercase tracking-widest">ENCRYPTION_ACTIVE</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-center text-[8px] text-brand-primary/30 font-mono tracking-widest uppercase">
                      WAR_DRIVING / IP_LOGGING / ZERO_TRUST_VERIFIED / 1024-BIT_SSL
                    </p>
                  </form>
                </div>
              </div>

              {/* Monitor Stand (Lower part of frame) */}
              <div className="absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-50">
                {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-primary/20" />)}
                <div className="w-3 h-3 rounded-full bg-brand-primary shadow-[0_0_10px_#991b1b] animate-pulse" />
              </div>

              {/* Frame Labeling */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] text-white/5 font-black uppercase tracking-[2em] pointer-events-none md:block hidden">
                ZYCRON_TACTICAL_DISPLAY
              </div>
            </div>

            {/* Retro Bezel Decor */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[60%] h-4 bg-[#1a1a1a] rounded-b-xl border-x border-b border-white/10" />
            </ScrollReveal>
        </div>
      </section>
    </div>
  </div>
  );
}
