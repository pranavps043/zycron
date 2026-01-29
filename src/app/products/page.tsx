"use client";

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import {
  FileSearch,
  BookOpen,
  ShieldAlert,
  Activity,
  Sparkles,
  Shield,
  ClipboardCheck,
  CheckCircle2,
  Zap,
  LucideIcon
} from 'lucide-react';

// =========================================
// 1. CONFIGURATION & DATA
// =========================================

interface Product {
  id: string;
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  image: string;
  color: string;
  colors: {
    gradient: string;
    glow: string;
    ring: string;
  };
}

const products = [
  {
    id: "audit",
    name: "Audit Pack",
    fullName: "Security Audit & Reporting Package",
    tagline: "VA & Risk Analysis",
    description: "Deep-trace analysis including VA report templates, risk assessment matrices, executive summaries, and remediation tracking for rapid infrastructure hardening.",
    icon: FileSearch,
    image: "/images/pro.jpg",
    color: "blue",
    colors: {
      gradient: 'from-blue-600 to-indigo-900',
      glow: 'bg-blue-500',
      ring: 'border-blue-500/50',
    },
  },
  {
    id: "policy",
    name: "Policy Kit",
    fullName: "Cybersecurity Policy Documentation Kit",
    tagline: "ISO-aligned Governance",
    description: "ISO-aligned protocol blueprint covering Password, Access Control, Incident Response, Backup & Recovery, and Asset Management policies.",
    icon: BookOpen,
    image: "/images/abt.jpg",
    color: "emerald",
    colors: {
      gradient: 'from-emerald-600 to-teal-900',
      glow: 'bg-emerald-500',
      ring: 'border-emerald-500/50',
    },
  },
  {
    id: "hardening",
    name: "Hardening Pack",
    fullName: "Security Hardening Checklist Pack",
    tagline: "System Fortification",
    description: "Technical lockdown modules for Windows/Linux baselines, firewall/router configurations, and Wi-Fi security protocols.",
    icon: ShieldAlert,
    image: "/images/serbg.jpg",
    color: "red",
    colors: {
      gradient: 'from-red-600 to-rose-900',
      glow: 'bg-red-500',
      ring: 'border-red-500/50',
    },
  },
  {
    id: "awareness",
    name: "Training Pack",
    fullName: "Employee Awareness Training Package",
    tagline: "Cognitive Defense Layer",
    description: "Build a security-first culture with training slides, phishing awareness material, and automated quiz/completion report formats.",
    icon: Activity,
    image: "/images/hero.jpg",
    color: "amber",
    colors: {
      gradient: 'from-amber-600 to-orange-900',
      glow: 'bg-amber-500',
      ring: 'border-amber-500/50',
    },
  },
  {
    id: "incident",
    name: "IR Toolkit",
    fullName: "Incident Response Toolkit",
    tagline: "Rapid Response Protocol",
    description: "Standard Operating Procedures (SOP), first-response checklists, evidence collection, and post-incident RCA report templates.",
    icon: Shield,
    image: "/images/abt.jpg",
    color: "violet",
    colors: {
      gradient: 'from-violet-600 to-purple-900',
      glow: 'bg-violet-500',
      ring: 'border-violet-500/50',
    },
  },
];

const deliverables = [
  { title: "Risk Ratings", icon: ShieldAlert, desc: "CVSS 3.1 Standardized" },
  { title: "Exploit PoC", icon: Zap, desc: "Verified Demonstrations" },
  { title: "Remediation", icon: ClipboardCheck, desc: "Actionable Fixes" },
  { title: "Validation", icon: CheckCircle2, desc: "Post-Fix Attestation" },
];

// =========================================
// 2. ANIMATION VARIANTS
// =========================================

const ANIMATIONS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
    },
    exit: { opacity: 0, y: -10, filter: 'blur(5px)' },
  },
  image: (index: number): Variants => ({
    initial: {
      opacity: 0,
      scale: 1.5,
      filter: 'blur(15px)',
      rotate: index % 2 === 0 ? -30 : 30,
      x: index % 2 === 0 ? -80 : 80,
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      rotate: 0,
      x: 0,
      transition: { type: 'spring' as const, stiffness: 260, damping: 20 },
    },
    exit: {
      opacity: 0,
      scale: 0.6,
      filter: 'blur(20px)',
      transition: { duration: 0.25 },
    },
  }),
};

// =========================================
// 3. SUB-COMPONENTS
// =========================================

const BackgroundGradient = ({ activeColor }: { activeColor: string }) => {
  const gradientStyles: Record<string, string> = {
    blue: 'radial-gradient(circle at 0% 50%, rgba(59, 130, 246, 0.15), transparent 50%)',
    emerald: 'radial-gradient(circle at 100% 50%, rgba(16, 185, 129, 0.15), transparent 50%)',
    red: 'radial-gradient(circle at 50% 100%, rgba(239, 68, 68, 0.15), transparent 50%)',
    amber: 'radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.15), transparent 50%)',
    violet: 'radial-gradient(circle at 0% 100%, rgba(139, 92, 246, 0.15), transparent 50%)',
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <motion.div
        animate={{ background: gradientStyles[activeColor] || gradientStyles.blue }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      />
    </div>
  );
};

const ProductVisual = ({ data, index }: { data: Product; index: number }) => (
  <motion.div layout="position" className="relative group shrink-0 z-10">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      className={`absolute inset-[-20%] rounded-full border border-dashed border-white/10 ${data.colors.ring}`}
    />
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute inset-0 rounded-full bg-gradient-to-br ${data.colors.gradient} blur-[100px] opacity-20`}
    />

    <div className="relative h-72 w-72 md:h-[450px] md:w-[450px] rounded-full border border-white/5 shadow-2xl flex items-center justify-center overflow-hidden bg-black/20 backdrop-blur-sm">
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="relative z-10 w-full h-full flex items-center justify-center p-8"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={data.id}
            variants={ANIMATIONS.image(index)}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full relative"
          >
            <Image
              src={data.image}
              alt={`${data.name}`}
              fill
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] grayscale group-hover:grayscale-0 transition-all duration-700"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>

    <motion.div
      layout="position"
      className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
    >
      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 bg-zinc-950/80 px-6 py-2.5 rounded-full border border-white/5 backdrop-blur shadow-xl">
        <span className={`h-1.5 w-1.5 rounded-full ${data.colors.glow} animate-pulse shadow-[0_0_10px_currentColor]`} />
        System_Locked
      </div>
    </motion.div>
  </motion.div>
);

const ProductDetails = ({ data, index }: { data: Product; index: number }) => {
  const isEven = index % 2 === 0;
  const alignClass = 'items-start text-left';
  const flexDirClass = 'flex-row';

  return (
    <motion.div
      variants={ANIMATIONS.container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`flex flex-col ${alignClass} z-10 relative`}
    >
      <motion.div variants={ANIMATIONS.item} className="flex items-center gap-4 mb-4">
        {isEven && <data.icon className={`w-8 h-8 ${data.colors.glow.replace('bg-', 'text-')}`} />}
        <h2 className="text-xs font-black uppercase tracking-[0.5em] text-white/30">
           Tactical Module_0{index + 1}
        </h2>
        {!isEven && <data.icon className={`w-8 h-8 ${data.colors.glow.replace('bg-', 'text-')}`} />}
      </motion.div>

      <motion.h1 
        variants={ANIMATIONS.item} 
        className="text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-[0.9] uppercase"
      >
        {data.fullName}
      </motion.h1>

      <motion.p variants={ANIMATIONS.item} className={`text-zinc-400 text-lg font-light leading-relaxed mb-10 max-w-sm ${isEven ? 'mr-auto' : 'ml-auto'}`}>
        {data.description}
      </motion.p>

      <motion.div variants={ANIMATIONS.item} className={`mt-8 flex items-center gap-3 text-zinc-500 font-black uppercase tracking-widest text-[10px] ${flexDirClass}`}>
        <Sparkles size={14} className="text-zinc-600" />
        {data.tagline}
      </motion.div>
    </motion.div>
  );
};

const Switcher = ({ 
  activeIndex, 
  onToggle 
}: { 
  activeIndex: number; 
  onToggle: (index: number) => void 
}) => {
  return (
    <div className="fixed bottom-12 inset-x-0 flex justify-center z-50 pointer-events-none">
      <motion.div layout className="pointer-events-auto flex items-center gap-1 p-2 rounded-full bg-zinc-900/80 backdrop-blur-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.8)] ring-1 ring-white/10 overflow-x-auto max-w-[95vw] md:max-w-none scrollbar-hide">
        {products.map((p, i) => (
          <motion.button
            key={p.id}
            onClick={() => onToggle(i)}
            whileTap={{ scale: 0.96 }}
            className={`relative px-6 h-12 rounded-full flex items-center justify-center text-[10px] font-black uppercase tracking-widest focus:outline-none transition-colors duration-300 flex-shrink-0 ${activeIndex === i ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            {activeIndex === i && (
              <motion.div
                layoutId="island-surface"
                className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-inner"
                transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              />
            )}
            <span className="relative z-10 whitespace-nowrap">
              {p.name}
            </span>
            {activeIndex === i && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -bottom-1 h-1 w-6 rounded-full bg-brand-primary shadow-[0_0_10px_var(--color-brand-primary)]"
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

// =========================================
// 4. MAIN COMPONENT
// =========================================

export default function ProductsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const currentProduct = products[activeIndex];
  const isEven = activeIndex % 2 === 0;

  return (
    <div className="relative min-h-screen w-full bg-black text-zinc-100 overflow-hidden selection:bg-brand-primary/30 flex flex-col ">
      
      <BackgroundGradient activeColor={currentProduct.color} />

      <PageHeader
        title="Our Products"
        subtitle="Precision-engineered security toolkits for high-stakes operational defense."
        showDecoration={false}
       className="relative pt-32 pb-24 bg-black/40 backdrop-blur-md border-b border-white/10"
      />

      <main className="relative z-10 w-full px-8 md:px-12 pt-20 pb-12 flex-1 flex items-center justify-center max-w-7xl mx-auto mb-32">
        <motion.div
          layout
          transition={{ type: 'spring', bounce: 0, duration: 0.9 }}
          className={`flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 lg:gap-48 w-full ${
            isEven ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          {/* Column 1: Visuals */}
          <ProductVisual data={currentProduct} index={activeIndex} />

          {/* Column 2: Content */}
          <motion.div layout="position" className="w-full max-w-lg">
            <AnimatePresence mode="wait">
              <ProductDetails 
                key={activeIndex}
                data={currentProduct} 
                index={activeIndex} 
              />
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </main>

      {/* Deliverables Section (Mini) */}
      <section className="relative z-10 w-full bg-[#050505] py-24 border-t border-white/5 pb-32">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {deliverables.map((item, i) => (
                 <div key={i} className="group p-8 border border-white/5 bg-white/[0.01] hover:border-brand-primary/30 transition-all rounded-2xl">
                    <item.icon className="w-8 h-8 text-brand-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-black uppercase italic tracking-tighter text-white mb-1">{item.title}</h4>
                    <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <Switcher activeIndex={activeIndex} onToggle={setActiveIndex} />
    </div>
  );
}
