"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  showDecoration?: boolean;
  className?: string;
}

export default function PageHeader({ title, subtitle, showDecoration = true, className = "" }: PageHeaderProps) {
  return (
    <header className={`relative pt-32 pb-24 overflow-hidden ${className}`}>
      {/* Background decoration */}
      {showDecoration && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent rounded-full blur-[120px]" />
        </div>
      )}

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </header>
  );
}
