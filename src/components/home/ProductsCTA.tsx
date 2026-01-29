"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductsCTA() {
  return (
    <section className="py-24 container mx-auto px-6 h-[50vh] md:h-screen flex items-center justify-center">
       <motion.div 
         initial={{ opacity: 0, scale: 0.98 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         className="relative w-full max-w-6xl aspect-[19.5/9]"
       >
          {/* iPhone Frame Image */}
          <div className="absolute inset-0 z-50 pointer-events-none">
            <Image
              src="/images/iph.png"
              alt="iPhone Frame"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Screen Content Container */}
          {/* Adjusted padding/margins to fit within the screen area of the png */}
          <div className="absolute top-[4%] bottom-[4%] left-[3%] right-[3%] z-10 rounded-[3rem] overflow-hidden bg-[#080808]">
             
            {/* Background Image with Blur */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="/images/pro.jpg" 
                alt="Background" 
                fill 
                className="object-cover opacity-20 hover:opacity-15 transition-opacity duration-700"
              />
            </div>



            <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none z-10" />
            
            {/* Video Content */}
            <div className="relative z-20 w-full h-full bg-black">
              <video
                src="/video/vid.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
              />
            </div>
          </div>
       </motion.div>
    </section>
  );
}
