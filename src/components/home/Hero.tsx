"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Radio, Activity, Fingerprint } from "lucide-react";
import { useRef } from "react";



export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] w-full flex items-center bg-[#020202] py-20 pt-32 lg:py-0 lg:pt-20">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Hero Image with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 blur-sm opacity-50"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content - High Impact Text */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            

            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              Autonomous <span className="text-brand-primary">Defense.</span> <br />
              Intelligent <span className="text-gradient">Response.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-medium">
              Neutralize threats at the speed of thought. Our AI-driven engine predicts, detects, and adapts to global attack vectors in milliseconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact-us"
                className="group relative px-10 py-5 bg-white text-black font-black rounded-xl overflow-hidden transition-all hover:bg-brand-primary hover:text-white"
              >
                <div className="flex items-center justify-center space-x-3">
                  <span>Deploy Neural Shield</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              
              <Link
                href="/services"
                className="px-10 py-5 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all flex items-center justify-center space-x-3"
              >
                <ShieldCheck className="w-5 h-5 text-brand-primary" />
                <span>Security Infrastructure</span>
              </Link>
            </div>

          
          </motion.div>
        </div>

        {/* Right Visual - Fingerprint Scanning Concept */}
        <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center min-h-[500px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative w-full max-w-[400px] aspect-square"
          >
            {/* Scanner Frame */}
            <div className="absolute inset-0 border-2 border-brand-primary/20 rounded-[3rem] p-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-brand-primary/50 blur-sm rounded-full" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-brand-primary/50 blur-sm rounded-full" />
            </div>

            {/* Scanning Area */}
            <div className="absolute inset-8 rounded-[2rem] overflow-hidden bg-gradient-to-b from-brand-primary/5 to-transparent border border-white/5 flex items-center justify-center shadow-2xl">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-brand-primary/5 animate-pulse" />
              
              {/* Fingerprint Icon */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Fingerprint className="w-48 h-48 text-brand-primary/80 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
              </motion.div>

              {/* Scanning Laser Beam */}
              <motion.div
                animate={{ 
                  top: ["0%", "100%", "0%"]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute left-0 right-0 h-[2px] bg-brand-primary shadow-[0_0_15px_#ef4444,0_0_30px_#ef4444] z-20"
              />
            </div>

            
          </motion.div>
        </div>
      </div>

    </section>
  );
}
