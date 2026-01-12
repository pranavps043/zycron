"use client";

import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Server, Activity, Fingerprint, ShieldAlert, Cpu, Network, ArrowRight } from "lucide-react";

const products = [
  {
    name: "Zycron Sentinel XDR",
    tagline: "Extended Detection & Response",
    description: "A unified security platform that integrates data from across your environment to find stealthy threats.",
    icon: ShieldAlert,
  },
  {
    name: "CloudGuard Pro",
    tagline: "Next-Gen Cloud Firewall",
    description: "Real-time traffic inspection and threat prevention for multi-cloud environments.",
    icon: Server,
  },
  {
    name: "BioAuth Gateway",
    tagline: "Biometric Identity Provider",
    description: "Passwordless authentication using advanced biometric and cryptographic protocols.",
    icon: Fingerprint,
  },
  {
    name: "NetPulse Monitor",
    tagline: "AIOps Network Visibility",
    description: "Visualize every packet and identify anomalies with zero-latency network telemetry.",
    icon: Network,
  },
  {
    name: "SecureNode Edge",
    tagline: "Zero Trust Edge Security",
    description: "Apply security policies closer to your users for faster, more reliable protection.",
    icon: Cpu,
  },
  {
    name: "LogAnalyzer AI",
    tagline: "Smart Security Analytics",
    description: "Automate log parsing and incident correlation with machine learning.",
    icon: Activity,
  },
];

export default function ProductsPage() {
  return (
    <div className="pb-20">
      <PageHeader
        title="Our Products"
        subtitle="Advanced security tools engineered for modern enterprise environments."
      />

      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col md:flex-row p-8 rounded-3xl bg-dark-card border border-white/5 hover:bg-white/5 transition-all group cursor-default shadow-xl"
            >
              <div className="mb-6 md:mb-0 md:mr-8 p-4 bg-brand-primary/10 rounded-2xl self-start group-hover:bg-brand-primary/20 transition-colors">
                <product.icon className="w-10 h-10 text-brand-primary" />
              </div>
              <div>
                <span className="text-brand-secondary text-xs font-black uppercase tracking-widest mb-2 block">
                  {product.tagline}
                </span>
                <h3 className="text-2xl font-black text-white mb-3">{product.name}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="text-brand-primary font-black flex items-center group-link"
                >
                  <span className="mr-2">Learn more & request demo</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 py-20 text-center"
      >
        <div className="glass p-12 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl" />
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter">Ready to upgrade your stack?</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg">
            Join over 500+ global enterprises that trust our products to secure their digital future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-brand-primary text-white font-black rounded-xl hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/25"
            >
              Request a Demo
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white/10 text-white font-black rounded-xl border border-white/10 transition-all"
            >
              Download Catalog
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
