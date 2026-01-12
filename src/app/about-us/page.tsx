"use client";

import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Award, Target, ShieldCheck } from "lucide-react";
import Timeline from "@/components/Timeline";

export default function AboutUsPage() {
  return (
    <div className="pb-20">
      <PageHeader
        title="About Zycron"
        subtitle="Leading the charge in digital defense for more than a decade."
      />

      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Our Mission</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              In an era where digital threats evolve by the second, our mission is to provide an unshakeable foundation for global progress. We believe that security is not just a barrier, but an enabler of innovation and growth.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Founded by a team of elite intelligence officers and software engineers, Zycron has grown into a global leader in proactive defense.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-6">
              {[
                { label: "Years of Excellence", value: "10+" },
                { label: "Global Clients", value: "500+" },
                { label: "Elite Support", value: "24/7" },
                { label: "Threat Prevention", value: "99.9%" },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="space-y-2"
                >
                  <p className="text-4xl font-black text-brand-primary tracking-tighter">{stat.value}</p>
                  <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-square bg-slate-900 border-dashed flex items-center justify-center text-slate-700 font-black uppercase tracking-widest text-sm">
               [Security Operations Image]
            </div>
            {/* Decoration */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-brand-primary p-6 rounded-2xl shadow-2xl shadow-brand-primary/40"
            >
              <ShieldCheck className="w-12 h-12 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Timeline />

      <section className="bg-dark-card py-20 border-y border-white/5">
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
    </div>
  );
}
