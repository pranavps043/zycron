"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

// Typewriter Effect Component
const TypewriterText = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const words = ["Response.", "Adaptation.", "Warfare.", "Evolution."];
    const handleType = () => {
      const fullWord = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50); // Faster deletion
      } else {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(150); // Normal typing
      }

      if (!isDeleting && currentText === fullWord) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at end of word
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]); // Removed 'words' from dependency array to effectively fix the previous lint warning, as words is constant inside component scope but defined outside useEffect. Actually better to move words inside useEffect or keep it outside component. I will move it inside useEffect or leave it as constant outside component if possible, but simplest is to keep it inside component and ignore the warning or move it. I'll move it out of the component to be safe and cleaner.
  
  // Wait, if I move 'words' out of the component, I don't need it in deps. 
  // Let's redefine it inside the component for now but I will remove it from the deps in the replacement content if I can, or actually just leave it as is.
  // The lint error said: "The 'words' array makes the dependencies of useEffect Hook (at line 40) change on every render. Move it inside the useEffect callback."
  // So I will move `words` inside `useEffect`.
  
  return (
    <span className="text-gradient">
      {currentText}
      <span className="animate-blink ml-1">|</span>
    </span>
  );
};

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] w-full flex items-center bg-[#020202] py-20 pt-32 lg:py-0 lg:pt-20">
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Hero Image with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 blur-sm opacity-50"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(153,27,27,0.1)_0%,transparent_70%)]" />
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
            

            <h1 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              Autonomous <span className="text-brand-primary">Defense.</span> <br />
              Intelligent <TypewriterText />
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-medium">
              Neutralize threats at the speed of thought. Our AI-driven engine predicts, detects, and adapts to global attack vectors in milliseconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
           
              
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
              
              {/* Fingerprint Image */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8] 
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-48 h-48"
              >
                <Image
                  src="/images/finger.png"
                  alt="Fingerprint Scan"
                  fill
                  sizes="(max-width: 768px) 100vw, 200px"
                  className="object-contain drop-shadow-[0_0_15px_rgba(153,27,27,0.5)]"
                />
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
                className="absolute left-0 right-0 h-[2px] bg-brand-primary shadow-[0_0_15px_#991b1b,0_0_30px_#991b1b] z-20"
              />
            </div>

            
          </motion.div>
        </div>
      </div>

    </section>
  );
}
