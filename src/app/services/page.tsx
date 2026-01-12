"use client";

import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Zap, Database, Globe } from "lucide-react";

const services = [
  {
    title: "Threat Detection",
    description: "Advanced AI-driven monitoring to identify and neutralize threats before they impact your business.",
    icon: Shield,
    color: "text-red-500",
  },
  {
    title: "Cloud Security",
    description: "Secure your cloud infrastructure with our comprehensive architecture reviews and monitoring.",
    icon: Globe,
    color: "text-rose-500",
  },
  {
    title: "Identity Management",
    description: "Robust multi-factor authentication and identity governance to ensure only the right people have access.",
    icon: Lock,
    color: "text-crimson-600",
  },
  {
    title: "Vulnerability Assessment",
    description: "Continuous scanning and penetration testing to find and fix weaknesses in your perimeter.",
    icon: Eye,
    color: "text-red-400",
  },
  {
    title: "Incident Response",
    description: "Rapid, 24/7 elite team response to mitigate damage and restore operations after a breach.",
    icon: Zap,
    color: "text-brand-primary",
  },
  {
    title: "Data Protection",
    description: "End-to-end encryption and data loss prevention strategies for your most sensitive information.",
    icon: Database,
    color: "text-red-600",
  },
];

export default function ServicesPage() {
  return (
    <div className="pb-20">
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive security solutions tailored to protect your digital evolution."
      />

      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(239, 68, 68, 0.3)" }}
              className="p-8 rounded-2xl bg-dark-card border border-white/5 transition-all group cursor-default"
            >
              <service.icon className={`w-12 h-12 ${service.color} mb-6 transition-transform group-hover:scale-110`} />
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-brand-primary/10 py-20 mt-20"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-6"
          >
            Need a custom security strategy?
          </motion.h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
            Our experts will work with you to understand your specific risks and build a tailored defense plan.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-brand-primary text-white font-black rounded-full hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20"
          >
            Schedule a Consultation
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}
