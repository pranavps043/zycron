"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Shield, Zap, Globe, Cpu } from "lucide-react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const TimelineItem = ({ year, title, description, icon, index }: TimelineItemProps) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-center justify-between mb-24 last:mb-0 w-full ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row`}>
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-[85%] md:w-[45%] ${isEven ? 'md:text-left' : 'md:text-right'} text-left p-6 md:p-8 rounded-3xl bg-slate-900/50 border border-white/5 backdrop-blur-sm hover:border-brand-primary/30 transition-colors group ml-auto md:ml-0 ${isEven ? 'md:mr-0' : 'md:ml-0'}`}
      >
        <span className="text-brand-primary font-black text-sm uppercase tracking-widest mb-2 block">{year}</span>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors uppercase tracking-tight">{title}</h3>
        <p className="text-slate-400 leading-relaxed text-sm">{description}</p>
      </motion.div>

      {/* Center Icon */}
      <div className="absolute left-0 md:left-1/2 -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
        <motion.div 
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="text-brand-primary">{icon}</div>
        </motion.div>
      </div>

      {/* Spacer for the other side */}
      <div className="hidden md:block w-[45%]" />
    </div>
  );
};

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 80%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });



  const timelineData = [
    {
      year: "2014",
      title: "The Genesis",
      description: "Two strangers with a shared passion for cybersecurity met at a cafe. A simple conversation sparked the vision for Zycron.",
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      year: "2014 - 2018",
      title: "Innovation Phase",
      description: "Intense research and development. We built the core architecture of our proactive defense systems, focusing on unshakeable security.",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      year: "2018",
      title: "Dubai Hacks",
      description: "Expanded our operations to Dubai, tackling complex regional security challenges and building a solid global reputation.",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      year: "2020",
      title: "Global Resilience",
      description: "As the world moved remote, we scaled our infrastructure to protect distributed workforces across five continents.",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      year: "2024",
      title: "The Future of Defense",
      description: "Integrating AI and neural-mesh security to predict threats before they manifest. We are faster than any virus.",
      icon: <Shield className="w-5 h-5" />,
    },
  ];

  return (
    <div className="relative py-20 md:py-32 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight"
          >
            A Decade of <span className="text-brand-primary">Dominance</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 max-w-2xl mx-auto uppercase text-[10px] md:text-xs font-black tracking-widest"
          >
            Chronological evolution of digital defense
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line Background */}
          <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5" />
          
          {/* Progress Light Line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-0 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-brand-primary origin-top shadow-[0_0_15px_#ff4d4d]"
          />



          <div className="relative z-10 pl-8 md:pl-0">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} index={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[150px] translate-y-1/2 translate-x-1/2" />
    </div>
  );
}
