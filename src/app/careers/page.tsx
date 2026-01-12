"use client";

import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

const jobs = [
  {
    title: "Senior Security Researcher",
    department: "Threat Intelligence",
    location: "Remote / San Francisco",
    type: "Full-time",
  },
  {
    title: "Cloud Security Architect",
    department: "Engineering",
    location: "London, UK",
    type: "Hybrid",
  },
  {
    title: "Incident Response Lead",
    department: "Operations",
    location: "San Jose, CA",
    type: "On-site",
  },
  {
    title: "DevSecOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Contract",
  },
];

export default function CareersPage() {
  return (
    <div className="pb-20">
      <PageHeader
        title="Join the Elite"
        subtitle="Work with the world's most talented security experts to build a safer future."
      />

      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-2 uppercase tracking-tighter">Open Positions</h2>
              <p className="text-slate-400">Find your next challenge in cybersecurity.</p>
            </div>
          </motion.div>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group p-6 md:p-8 rounded-2xl bg-dark-card border border-white/5 hover:bg-white/5 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-brand-primary transition-colors uppercase tracking-tight">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-3">
                    <span className="flex items-center text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500 bg-white/5 px-2 py-1 rounded">
                      <Briefcase className="w-3 h-3 mr-1.5 text-brand-primary" />
                      {job.department}
                    </span>
                    <span className="flex items-center text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500 bg-white/5 px-2 py-1 rounded">
                      <MapPin className="w-3 h-3 mr-1.5 text-brand-primary" />
                      {job.location}
                    </span>
                    <span className="flex items-center text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500 bg-white/5 px-2 py-1 rounded">
                      <Clock className="w-3 h-3 mr-1.5 text-brand-primary" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-3 px-8 py-4 bg-white/5 group-hover:bg-brand-primary text-white text-sm font-black rounded-xl transition-all uppercase tracking-widest"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-brand-primary py-24"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            Don&apos;t see the right role?
          </motion.h2>
          <p className="text-white mb-12 max-w-xl mx-auto text-xl font-medium leading-relaxed">
            We&apos;re always looking for brilliant minds. Send us your resume anyway and we&apos;ll keep you in mind for future openings.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-white text-brand-primary font-black rounded-2xl hover:bg-slate-50 transition-all shadow-2xl uppercase tracking-widest text-lg"
          >
            Submit Open Application
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}
