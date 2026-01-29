"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, ArrowRight, ShieldAlert, Terminal, Share2, Calendar, Clock, Eye, TrendingUp, Cpu, X, AlertTriangle, Lock, Database } from "lucide-react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

// --- Custom Hook for Parallax ---
// Removed, as it's not being used

// --- Components ---

const TacticalCorner = ({ className }: { className?: string }) => (
  <div className={`absolute w-4 h-4 border-brand-primary/50 ${className}`} />
);

const BlogCard = ({ post, index, onClick }: { post: any; index: number; onClick: () => void }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
      viewport={{ once: true }}
      className="group relative bg-[#0a0a0a] border border-white/5 p-px overflow-hidden cursor-pointer"
      onClick={onClick}
      whileHover={{
        y: -8,
        scale: 1.03,
        transition: { 
          duration: 0.4, 
          type: "spring",
          stiffness: 400,
          damping: 10
        }
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
    >
      {/* Tactical HUD Borders */}
      <div className="absolute inset-0 border border-white/5" />
      <TacticalCorner className="top-0 left-0 border-t-2 border-l-2" />
      <TacticalCorner className="bottom-0 right-0 border-b-2 border-r-2" />

      {/* Hover Scanner Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-[1.5s] ease-in-out pointer-events-none" />

      <div className="relative p-6 lg:p-8 space-y-4">
        {/* Image */}
        <div className="relative h-48 overflow-hidden rounded-lg border border-white/5">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Top Metadata */}
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-brand-primary animate-pulse" />
            <span className="text-brand-primary underline decoration-brand-primary/30">
              {post.category}
            </span>
          </div>
          <span className="group-hover:text-white transition-colors">{post.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white tracking-tighter leading-tight font-mono uppercase transition-all duration-300 group-hover:text-brand-primary">
          {post.title}
        </h3>

        {/* Excerpt */}
        <div className="relative">
          <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3 font-sans">
            {post.excerpt}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <div className="flex items-center gap-3 text-[10px] font-mono uppercase text-neutral-500">
            <User size={12} className="text-brand-primary" />
            <span>{post.author}</span>
          </div>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            className="text-brand-primary flex items-center gap-1 group/btn font-black text-xs"
          >
            EXECUTE <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
};

// --- Featured Report Modal Component ---
const FeaturedReportModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/95 backdrop-blur-sm"
          onClick={onClose}
        />
        
        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 15 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotateX: 15 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 15 }}
          className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden"
          style={{ 
            perspective: "1000px",
            transformStyle: "preserve-3d"
          }}
        >
          {/* Holographic Frame */}
          <div className="relative bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] border-2 border-brand-primary/30 rounded-2xl shadow-2xl overflow-hidden">
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 border-2 border-brand-primary/50 rounded-2xl pointer-events-none"
              animate={{
                opacity: [0.3, 0.8, 0.3],
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5), inset 0 0 20px rgba(59, 130, 246, 0.1)",
                  "0 0 40px rgba(59, 130, 246, 0.8), inset 0 0 30px rgba(59, 130, 246, 0.2)",
                  "0 0 20px rgba(59, 130, 246, 0.5), inset 0 0 20px rgba(59, 130, 246, 0.1)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Corner Decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-brand-primary/60" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-brand-primary/60" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-brand-primary/60" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-brand-primary/60" />

            {/* Header */}
            <div className="relative p-8 border-b border-brand-primary/20">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 bg-black/50 border border-brand-primary/30 rounded-lg hover:bg-brand-primary/20 transition-all duration-300 hover:scale-110"
              >
                <X size={20} className="text-brand-primary" />
              </button>
              
              {/* Alert Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full mb-6"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <AlertTriangle className="text-red-500" size={16} />
                <span className="text-red-400 font-mono text-xs uppercase tracking-wider">Critical Report</span>
              </motion.div>
              
              <h1 className="text-4xl font-bold text-white tracking-tighter font-mono uppercase mb-4">
                Quantum Cryptography Resistance
              </h1>
              <p className="text-neutral-300 text-lg font-mono mb-6">
                Implementation of Lattice-based protocols is no longer optional.
              </p>
              
              {/* Report Metadata */}
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-black/50 border border-white/10 rounded-lg p-3">
                  <div className="text-xs text-neutral-400 font-mono mb-1">THREAT LEVEL</div>
                  <div className="text-lg font-bold text-red-400 font-mono">CRITICAL</div>
                </div>
                <div className="bg-black/50 border border-white/10 rounded-lg p-3">
                  <div className="text-xs text-neutral-400 font-mono mb-1">PRIORITY</div>
                  <div className="text-lg font-bold text-orange-400 font-mono">HIGH</div>
                </div>
                <div className="bg-black/50 border border-white/10 rounded-lg p-3">
                  <div className="text-xs text-neutral-400 font-mono mb-1">READ TIME</div>
                  <div className="text-lg font-bold text-brand-primary font-mono">12 MIN</div>
                </div>
                <div className="bg-black/50 border border-white/10 rounded-lg p-3">
                  <div className="text-xs text-neutral-400 font-mono mb-1">CLASSIFICATION</div>
                  <div className="text-lg font-bold text-purple-400 font-mono">TOP SECRET</div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-280px)] custom-scrollbar">
              <div className="prose prose-invert max-w-none">
                <div className="font-mono text-sm leading-relaxed text-neutral-300 space-y-6">
                  <div className="bg-black/30 border-l-4 border-brand-primary p-6 rounded-r-lg">
                    <h2 className="text-xl font-bold text-brand-primary mb-3">Executive Summary</h2>
                    <p className="text-neutral-300">
                      The advent of quantum computing poses an existential threat to current cryptographic standards. 
                      RSA-2048 and ECC-256 could be compromised within hours by sufficiently powerful quantum systems. 
                      This report provides comprehensive analysis and implementation strategies for quantum-resistant cryptography.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-black/30 border border-white/10 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Database className="text-brand-primary" size={20} />
                        Current Vulnerabilities
                      </h3>
                      <ul className="space-y-2 text-neutral-400">
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">▸</span>
                          RSA-2048 encryption compromised
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">▸</span>
                          ECC-256 vulnerable to quantum attacks
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">▸</span>
                          Digital signatures at risk
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-black/30 border border-white/10 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Lock className="text-brand-primary" size={20} />
                        Quantum-Resistant Solutions
                      </h3>
                      <ul className="space-y-2 text-neutral-400">
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">▸</span>
                          Lattice-based cryptography
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">▸</span>
                          Hash-based signatures
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">▸</span>
                          Code-based cryptography
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-brand-primary/10 to-purple-500/10 border border-brand-primary/30 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-white mb-4">Implementation Timeline</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center justify-center">
                          <span className="text-red-400 font-bold">1</span>
                        </div>
                        <div>
                          <div className="text-white font-mono">Phase 1: Assessment (0-6 months)</div>
                          <div className="text-neutral-400 text-sm">Inventory and risk analysis</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/50 rounded-lg flex items-center justify-center">
                          <span className="text-orange-400 font-bold">2</span>
                        </div>
                        <div>
                          <div className="text-white font-mono">Phase 2: Hybrid Implementation (6-18 months)</div>
                          <div className="text-neutral-400 text-sm">Deploy quantum-resistant algorithms</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center justify-center">
                          <span className="text-green-400 font-bold">3</span>
                        </div>
                        <div>
                          <div className="text-white font-mono">Phase 3: Full Migration (18-36 months)</div>
                          <div className="text-neutral-400 text-sm">Complete transition to post-quantum</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/30 border border-white/10 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-white mb-4">Key Recommendations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <span className="text-brand-primary text-xl">▪</span>
                        <span className="text-neutral-300">Begin planning immediately</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-brand-primary text-xl">▪</span>
                        <span className="text-neutral-300">Prioritize critical systems</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-brand-primary text-xl">▪</span>
                        <span className="text-neutral-300">Establish testing framework</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-brand-primary text-xl">▪</span>
                        <span className="text-neutral-300">Monitor quantum developments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-6 border-t border-brand-primary/20 bg-black/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-xs text-neutral-400 font-mono">REPORT ID: QCR-2024-001</div>
                  <div className="text-xs text-neutral-400 font-mono">CLASSIFIED: TOP SECRET</div>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-brand-primary text-black font-mono text-xs font-bold hover:bg-brand-primary/80 transition-colors rounded">
                    DOWNLOAD PDF
                  </button>
                  <button className="px-4 py-2 bg-black/50 border border-white/20 text-white font-mono text-xs font-bold hover:bg-white/10 transition-colors rounded">
                    SHARE REPORT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// --- Blog Modal Component ---
const BlogModal = ({ post, isOpen, onClose }: { post: any; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
          onClick={onClose}
        />
        
        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden bg-[#0a0a0a] border border-brand-primary/20 rounded-lg shadow-2xl"
          style={{ zIndex: 10000 }}
        >
          {/* Modal Header */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/50 border border-white/10 rounded-lg hover:bg-brand-primary/20 transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
            
            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="text-brand-primary" size={16} />
                <span className="text-brand-primary font-mono text-xs uppercase tracking-wider">
                  {post.severity} THREAT LEVEL: {post.threatLevel}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-white tracking-tighter font-mono uppercase mb-2">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-neutral-400 text-sm">
                <span className="font-mono">{post.category}</span>
                <span>•</span>
                <span className="font-mono">{post.date}</span>
                <span>•</span>
                <span className="font-mono">{post.readTime} read</span>
              </div>
            </div>
          </div>
          
          {/* Modal Body */}
          <div className="p-8 overflow-y-auto max-h-[calc(90vh-16rem)] scrollbar-hide">
            {/* Security Indicators */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-black/50 border border-white/5 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="text-brand-primary" size={16} />
                  <span className="text-xs font-mono text-neutral-400 uppercase">Security Level</span>
                </div>
                <div className="text-lg font-bold text-brand-primary font-mono">{post.severity}</div>
              </div>
              <div className="bg-black/50 border border-white/5 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="text-brand-primary" size={16} />
                  <span className="text-xs font-mono text-neutral-400 uppercase">Data Class</span>
                </div>
                <div className="text-lg font-bold text-brand-primary font-mono">CLASSIFIED</div>
              </div>
              <div className="bg-black/50 border border-white/5 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="text-brand-primary" size={16} />
                  <span className="text-xs font-mono text-neutral-400 uppercase">Access</span>
                </div>
                <div className="text-lg font-bold text-brand-primary font-mono">LEVEL 5</div>
              </div>
            </div>
            
            {/* Content */}
            <div className="prose prose-invert max-w-none">
              <div className="font-mono text-sm leading-relaxed text-neutral-300">
                {post.content.split('\n').map((line: string, index: number) => {
                  if (line.startsWith('##')) {
                    return (
                      <h2 key={index} className="text-xl font-bold text-white mt-8 mb-4 uppercase tracking-tighter">
                        {line.replace('##', '').trim()}
                      </h2>
                    );
                  } else if (line.startsWith('###')) {
                    return (
                      <h3 key={index} className="text-lg font-bold text-brand-primary mt-6 mb-3 uppercase tracking-tighter">
                        {line.replace('###', '').trim()}
                      </h3>
                    );
                  } else if (line.startsWith('-')) {
                    return (
                      <li key={index} className="ml-4 mb-2 text-neutral-400">
                        {line.replace('-', '').trim()}
                      </li>
                    );
                  } else if (line.startsWith('[') && line.endsWith(']')) {
                    return (
                      <div key={index} className="my-4 p-3 bg-brand-primary/10 border border-brand-primary/20 rounded">
                        <span className="text-brand-primary font-mono text-sm">{line}</span>
                      </div>
                    );
                  } else if (line.trim() === '') {
                    return <br key={index} />;
                  } else {
                    return (
                      <p key={index} className="mb-4 leading-relaxed">
                        {line}
                      </p>
                    );
                  }
                })}
              </div>
            </div>
            
            {/* Author Info */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center">
                    <User className="text-brand-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-mono text-sm">{post.author}</div>
                    <div className="text-neutral-400 text-xs font-mono">Security Analyst</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-black/50 border border-white/10 rounded-lg hover:bg-brand-primary/20 transition-colors">
                    <Share2 size={16} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// --- Blog Data ---
const blogPosts = [
  {
    id: 1,
    title: "Zero-Day Exploit Prevention",
    excerpt: "Advanced techniques for identifying and mitigating zero-day vulnerabilities in enterprise networks before they can be weaponized.",
    category: "Threat Intelligence",
    author: "Security Analyst",
    date: "2024.01.15",
    image: "/images/cybersecurity-data-protection-concept.jpg",
    content: `
## Executive Summary

Zero-day vulnerabilities represent one of the most critical threats to enterprise security infrastructure. This comprehensive analysis explores advanced methodologies for proactive identification and mitigation of previously unknown attack vectors.

## Key Findings

### Behavioral Analysis Systems
- Implementation of machine learning algorithms for anomaly detection
- Real-time monitoring of system call patterns
- Integration with threat intelligence feeds for predictive analysis

### Network Segmentation Strategies
- Zero-trust architecture implementation
- Micro-segmentation of critical assets
- Dynamic policy enforcement based on behavioral patterns

### Incident Response Protocols
- Automated containment procedures
- Forensic preservation of attack artifacts
- Rapid patch deployment frameworks

## Technical Implementation

The deployment of advanced endpoint detection and response (EDR) systems has shown a 78% reduction in dwell time for zero-day attacks. Organizations implementing these methodologies report significantly improved security posture against emerging threats.

## Recommendations

1. Invest in AI-driven threat detection platforms
2. Establish comprehensive red team testing programs
3. Develop internal vulnerability research capabilities
4. Implement continuous security validation processes

## Conclusion

Proactive zero-day defense requires a multi-layered approach combining technology, processes, and human expertise. Organizations that embrace these strategies will be better positioned to defend against the most sophisticated cyber threats.
    `,
    readTime: "8 min",
    threatLevel: "HIGH",
    severity: "CRITICAL"
  },
  {
    id: 2,
    title: "Quantum Cryptography Resistance",
    excerpt: "Implementing lattice-based cryptographic protocols to secure data against quantum computing threats.",
    category: "Cryptography",
    author: "Crypto Engineer",
    date: "2024.01.12",
    image: "/images/abstract-cybersecurity-concept-design (1).jpg",
    content: `
## Quantum Computing Threat Landscape

The advent of quantum computing poses an existential threat to current cryptographic standards. RSA-2048 and ECC-256 could be compromised within hours by sufficiently powerful quantum systems.

## Post-Quantum Cryptography Solutions

### Lattice-Based Cryptography
- Learning With Errors (LWE) problems
- Ring-LWE for improved efficiency
- NIST-selected algorithms: CRYSTALS-Kyber, CRYSTALS-Dilithium

### Hash-Based Signatures
- Merkle tree constructions
- Stateful hash-based signatures
- SPHINCS+ for stateless operation

### Code-Based Cryptography
- McEliece cryptosystem
- Classic McEliece NIST candidate
- Resistance to quantum attacks proven since 1978

## Implementation Roadmap

### Phase 1: Assessment (0-6 months)
- Inventory current cryptographic assets
- Identify critical systems requiring immediate protection
- Develop migration strategy

### Phase 2: Hybrid Implementation (6-18 months)
- Deploy hybrid classical/post-quantum systems
- Establish interoperability frameworks
- Conduct extensive testing and validation

### Phase 3: Full Migration (18-36 months)
- Complete transition to post-quantum algorithms
- Decommission vulnerable classical systems
- Establish ongoing quantum threat monitoring

## Performance Considerations

Post-quantum algorithms typically require larger key sizes and computational resources. However, recent optimizations have reduced performance overhead to acceptable levels for most enterprise applications.

## Conclusion

The transition to quantum-resistant cryptography is not optional—it's essential for long-term data security. Organizations must begin planning and implementation now to avoid catastrophic breaches when quantum computers become operational.
    `,
    readTime: "12 min",
    threatLevel: "MEDIUM",
    severity: "HIGH"
  },
  {
    id: 3,
    title: "Neural Network Intrusion Detection",
    excerpt: "Leveraging deep learning models to identify sophisticated attack patterns in real-time network traffic analysis.",
    category: "AI Security",
    author: "ML Researcher",
    date: "2024.01.10",
    image: "/images/gradient-technology-background.jpg",
    content: `
## Introduction

Traditional signature-based intrusion detection systems are increasingly ineffective against modern, polymorphic attacks. Neural network-based approaches offer superior detection capabilities for unknown and evolving threats.

## Deep Learning Architectures

### Convolutional Neural Networks (CNNs)
- Spatial feature extraction from network traffic
- Pattern recognition in packet headers
- Anomaly detection in traffic flows

### Recurrent Neural Networks (RNNs)
- Temporal sequence analysis
- Long Short-Term Memory (LSTM) for long-range dependencies
- Real-time attack prediction

### Transformer Models
- Attention mechanisms for feature importance
- Multi-head attention for complex pattern recognition
- Self-supervised learning on unlabeled traffic data

## Training Methodologies

### Supervised Learning
- Labeled datasets: CIC-IDS2017, UNSW-NB15
- Attack classification: DoS, DDoS, Port Scan, Botnet
- Precision: 98.7%, Recall: 97.2%

### Unsupervised Learning
- Autoencoders for anomaly detection
- Clustering for unknown attack discovery
- One-class SVM for novelty detection

### Transfer Learning
- Pre-trained models on large traffic datasets
- Fine-tuning for specific network environments
- Domain adaptation for different network topologies

## Deployment Architecture

### Edge Computing
- Real-time processing at network edge
- Reduced latency for critical systems
- Distributed inference across multiple nodes

### Cloud-Based Analysis
- Centralized model training and updates
- Scalable processing for large networks
- Integration with threat intelligence platforms

## Performance Metrics

- Detection Rate: 99.3%
- False Positive Rate: 0.8%
- Processing Latency: <10ms
- Scalability: 10M+ packets/second

## Challenges and Solutions

### Adversarial Attacks
- Gradient masking techniques
- Adversarial training methodologies
- Ensemble approaches for robustness

### Explainability
- SHAP values for feature importance
- Attention visualization
- Decision tree extraction

## Future Directions

The integration of neuromorphic computing and quantum machine learning promises to revolutionize intrusion detection capabilities, potentially achieving near-perfect detection rates with minimal false positives.

## Conclusion

Neural network-based intrusion detection represents the future of cybersecurity. Organizations that adopt these technologies will gain significant advantages in defending against sophisticated cyber threats.
    `,
    readTime: "15 min",
    threatLevel: "LOW",
    severity: "MEDIUM"
  },
  {
    id: 4,
    title: "Supply Chain Attack Vectors",
    excerpt: "Comprehensive analysis of modern supply chain vulnerabilities and strategies for building resilient software ecosystems.",
    category: "Risk Assessment",
    author: "Security Architect",
    date: "2024.01.08",
    image: "/images/dual.jpg",
    content: `
## Supply Chain Security Landscape

Modern software development relies on complex supply chains involving numerous third-party components, dependencies, and services. Each integration point represents a potential attack vector.

## Attack Vector Analysis

### Dependency Injection
- Malicious package uploads to public repositories
- Typosquatting attacks on popular packages
- Dependency confusion vulnerabilities

### Build Process Compromise
- Poisoned build tools and compilers
- Compromised CI/CD pipelines
- Insider threats in development teams

### Distribution Channel Attacks
- Man-in-the-middle attacks on package distribution
- Compromised update servers
- Malicious code signing certificates

## Notable Incidents

### SolarWinds Orion (2020)
- 18,000+ affected organizations
- State-sponsored attack campaign
- $18 million in direct costs

### Kaseya VSA (2021)
- REvil ransomware attack
- 1,500+ businesses affected
- $70 million ransom demand

### Log4j Vulnerability (2021)
- Critical remote code execution
- Widespread impact across Java applications
- Estimated billions of affected systems

## Defense Strategies

### Software Bill of Materials (SBOM)
- Comprehensive component inventory
- Automated vulnerability scanning
- Real-time dependency monitoring

### Zero Trust Architecture
- Principle of least privilege
- Continuous verification
- Micro-segmentation

### Secure Development Lifecycle
- Static and dynamic analysis
- Dependency vulnerability scanning
- Security code reviews

## Implementation Framework

### Phase 1: Visibility
- Map entire software supply chain
- Identify critical dependencies
- Establish baseline security posture

### Phase 2: Hardening
- Implement secure coding practices
- Deploy automated security testing
- Establish vendor security requirements

### Phase 3: Monitoring
- Continuous dependency monitoring
- Threat intelligence integration
- Automated incident response

## Regulatory Compliance

### Executive Order 14028
- Mandatory SBOM for federal software
- Enhanced supply chain security requirements
- Zero trust architecture mandates

### EU Cyber Resilience Act
- Security requirements for connected devices
- Vulnerability reporting obligations
- Liability framework for manufacturers

## Future Considerations

The increasing complexity of software supply chains necessitates automated, AI-driven security solutions. Quantum-resistant cryptography and blockchain-based provenance tracking will play crucial roles in future supply chain security.

## Conclusion

Supply chain security requires a holistic approach combining technology, processes, and partnerships. Organizations must adopt proactive security measures to protect against increasingly sophisticated supply chain attacks.
    `,
    readTime: "10 min",
    threatLevel: "HIGH",
    severity: "CRITICAL"
  },
  {
    id: 5,
    title: "Blockchain Security Audits",
    excerpt: "Methodology for conducting thorough security assessments of smart contracts and decentralized applications.",
    category: "Blockchain",
    author: "Audit Specialist",
    date: "2024.01.05",
    image: "/images/pro.jpg",
    content: `
## Blockchain Security Overview

The immutable nature of blockchain transactions makes security audits critical before deployment. Smart contract vulnerabilities have resulted in billions of dollars in losses across various blockchain ecosystems.

## Common Vulnerability Classes

### Reentrancy Attacks
- Recursive function calls before state updates
- DAO hack: $60 million loss
- Prevention: Checks-Effects-Interactions pattern

### Integer Overflow/Underflow
- Arithmetic boundary conditions
- BatchTransfer overflow vulnerability
- Prevention: SafeMath libraries and Solidity 0.8+

### Access Control Issues
- Missing function modifiers
- Unauthorized admin access
- Weak ownership patterns

### Logic Flaws
- Business logic vulnerabilities
- Race conditions
- Front-running attacks

## Audit Methodology

### Phase 1: Code Review
- Manual code analysis
- Automated vulnerability scanning
- Architecture review

### Phase 2: Static Analysis
- Slither, Mythril, Securify tools
- Custom rule development
- Pattern matching for known vulnerabilities

### Phase 3: Dynamic Analysis
- Testnet deployment
- Fuzzing and mutation testing
- Gas optimization analysis

### Phase 4: Formal Verification
- Mathematical proof of correctness
- Model checking with tools like Certora
- Invariant verification

## Audit Tools and Frameworks

### Static Analysis Tools
- Slither: Python-based static analyzer
- Mythril: Symbolic execution framework
- Securify: Security analysis pipeline

### Testing Frameworks
- Truffle Suite: Development environment
- Hardhat: Advanced testing framework
- Foundry: Solidity-native testing

### Formal Verification
- Certora: Formal verification platform
- K Framework: Formal semantics
- Why3: Verification condition generator

## Audit Checklist

### Smart Contract Security
- [ ] Reentrancy protection
- [ ] Integer overflow protection
- [ ] Access control implementation
- [ ] Event emission for critical operations
- [ ] Gas optimization review

### DeFi Protocol Security
- [ ] Oracle manipulation resistance
- [ ] Slippage protection
- [ ] Liquidity crisis prevention
- [ ] Economic incentive alignment
- [ ] Emergency pause mechanisms

### NFT Security
- [ ] Token standard compliance
- [ ] Metadata integrity
- [ ] Royalty enforcement
- [ ] Transfer restrictions
- [ ] Minting controls

## Case Studies

### Poly Network Hack (2021)
- $611 million cross-chain exploit
- Cross-chain bridge vulnerability
- White hat hacker returned funds

### Wormhole Bridge (2022)
- $325 million theft
- Signature verification bypass
- Solana-Ethereum bridge compromise

### Nomad Bridge (2022)
- $190 million exploit
- Message verification failure
- Initialization vulnerability

## Best Practices

### Development Standards
- Secure coding guidelines
- Comprehensive testing coverage
- Documentation requirements
- Code review processes

### Deployment Security
- Multi-signature wallet controls
- Timelock mechanisms
- Gradual rollout strategies
- Emergency response procedures

### Ongoing Monitoring
- Real-time anomaly detection
- On-chain analytics
- Community governance oversight
- Bug bounty programs

## Regulatory Considerations

### Compliance Requirements
- KYC/AML regulations
- Securities law compliance
- Data privacy requirements
- Consumer protection laws

### Audit Standards
- ISA 3000 assurance standards
- ISO 27001/27002
- CIS Controls
- Cloud Controls Matrix (CCM)

## Future Trends

The emergence of zero-knowledge proofs, layer 2 scaling solutions, and cross-chain protocols introduces new security challenges. AI-powered audit tools and formal verification methods will become increasingly important for ensuring blockchain security.

## Conclusion

Blockchain security audits require specialized expertise and comprehensive methodologies. Organizations must invest in thorough security assessments to protect against the sophisticated threats targeting decentralized systems.
    `,
    readTime: "18 min",
    threatLevel: "MEDIUM",
    severity: "HIGH"
  },
  {
    id: 6,
    title: "Cloud Native Defense Strategies",
    excerpt: "Building zero-trust architectures in cloud environments using microservices and container security best practices.",
    category: "Cloud Security",
    author: "Cloud Engineer",
    date: "2024.01.03",
    image: "/images/hero.jpg",
    content: `
## Cloud Native Security Paradigm

The shift to cloud native architectures requires fundamental changes in security approaches. Traditional perimeter-based security models are inadequate for dynamic, distributed cloud environments.

## Zero Trust Architecture

### Core Principles
- Never trust, always verify
- Least privilege access
- Micro-segmentation
- Continuous monitoring

### Implementation Components
- Identity and Access Management (IAM)
- Multi-factor authentication (MFA)
- Just-in-time access provisioning
- Context-aware authorization

## Container Security

### Image Security
- Trusted base images
- Vulnerability scanning
- Image signing and verification
- Minimal attack surface

### Runtime Protection
- Container runtime monitoring
- Anomaly detection
- Network segmentation
- File system integrity

### Orchestration Security
- Kubernetes RBAC
- Network policies
- Pod security policies
- Secrets management

## Microservices Security

### API Security
- API gateway implementation
- Rate limiting and throttling
- Input validation and sanitization
- OAuth 2.0 and OpenID Connect

### Service Mesh Security
- mTLS for service communication
- Service-to-service authentication
- Traffic encryption
- Observability and logging

### Data Protection
- Encryption at rest and in transit
- Key management systems
- Data classification and labeling
- Privacy-enhancing technologies

## DevSecOps Integration

### Security as Code
- Infrastructure as Code (IaC) security
- Policy as Code implementation
- Automated compliance checking
- Continuous security validation

### CI/CD Pipeline Security
- Static application security testing (SAST)
- Dynamic application security testing (DAST)
- Software composition analysis (SCA)
- Container image scanning

### Infrastructure Security
- Cloud security posture management (CSPM)
- Cloud workload protection platform (CWPP)
- Configuration management
- Compliance automation

## Threat Detection and Response

### Monitoring and Logging
- Centralized log aggregation
- Real-time threat detection
- Behavioral analytics
- Machine learning-based anomaly detection

### Incident Response
- Automated incident response
- Playbook-driven responses
- Forensic analysis capabilities
- Post-incident reviews

### Threat Intelligence
- Integrated threat feeds
- IOC (Indicators of Compromise) sharing
- Attack pattern analysis
- Vulnerability intelligence

## Compliance and Governance

### Regulatory Compliance
- GDPR, HIPAA, PCI DSS
- Industry-specific requirements
- Geographic data residency
- Audit trail maintenance

### Cloud Security Standards
- NIST Cybersecurity Framework
- ISO 27001/27002
- CIS Controls
- Cloud Controls Matrix (CCM)

## Multi-Cloud Security

### Challenges
- Inconsistent security controls
- Data sovereignty requirements
- Vendor lock-in concerns
- Complexity management

### Solutions
- Cloud-agnostic security platforms
- Unified policy management
- Standardized security controls
- Cross-cloud visibility

## Emerging Technologies

### Serverless Security
- Function as a Service (FaaS) protection
- Event-driven security
- Cold start vulnerabilities
- Permission boundary management

### Edge Computing Security
- Distributed edge security
- Edge-to-cloud security
- 5G network security
- IoT device security

### AI/ML Security
- Model security and integrity
- Adversarial attack protection
- Explainable AI for security
- Automated threat hunting

## Implementation Roadmap

### Phase 1: Foundation (0-6 months)
- Security assessment and gap analysis
- Basic cloud security controls
- Identity and access management
- Monitoring and logging setup

### Phase 2: Advanced Controls (6-18 months)
- Zero trust implementation
- Container security platform
- DevSecOps integration
- Automated compliance checking

### Phase 3: Optimization (18-36 months)
- AI-powered security operations
- Advanced threat detection
- Cloud-native security automation
- Continuous security improvement

## Metrics and KPIs

### Security Metrics
- Mean Time to Detect (MTTD)
- Mean Time to Respond (MTTR)
- Security incident frequency
- Vulnerability remediation time

### Operational Metrics
- Security control coverage
- Compliance percentage
- Risk reduction metrics
- Security ROI measurements

## Conclusion

Cloud native security requires a holistic approach that integrates security throughout the entire development and deployment lifecycle. Organizations that embrace zero trust principles and cloud native security practices will be better positioned to protect their assets in dynamic cloud environments.

The future of cloud security lies in automation, intelligence, and integration—security must be built-in, not bolted-on.
    `,
    readTime: "20 min",
    threatLevel: "LOW",
    severity: "MEDIUM"
  }
];

export default function ImmersiveBlog() {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFeaturedModalOpen, setIsFeaturedModalOpen] = useState(false);

  const openModal = (post: any) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    // Prevent body scroll when modal opens
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
    // Restore body scroll when modal closes
    document.body.style.overflow = 'unset';
  };

  const openFeaturedModal = () => {
    setIsFeaturedModalOpen(true);
    // Prevent body scroll when modal opens
    document.body.style.overflow = 'hidden';
  };

  const closeFeaturedModal = () => {
    setIsFeaturedModalOpen(false);
    // Restore body scroll when modal closes
    document.body.style.overflow = 'unset';
  };

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <div className="relative pb-20 min-h-screen selection:bg-brand-primary/30 selection:text-brand-primary overflow-hidden">
        {/* Full Page Background Image */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <Image
            src="/images/abstract-cybersecurity-concept-design (1).jpg"
            alt="Blog Background"
            fill
            className="object-cover opacity-40 blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-20" />
        </div>

        <div className="relative z-10">
          <PageHeader
            title="Security Nodes"
            subtitle="[ACCESS_GRANTED] - Exploring the intersection of neural intelligence and zero-day defense protocols."
            showDecoration={false}
            className="relative pt-32 pb-24 bg-black/40 backdrop-blur-md border-b border-white/10"
          />

          <section className="container mx-auto px-6  mt-20">
            {/* --- FEATURED SECTION --- */}
            <section className="mb-10">
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 border border-brand-primary/20 bg-[#0a0a0a]">
                <div className="lg:col-span-7 relative h-[400px] overflow-hidden group">
                  <Image 
                    src="/images/hero.jpg" 
                    alt="quantum cryptography" 
                    fill 
                    className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent" />
                </div>
                
                <div className="lg:col-span-5 p-10 flex flex-col justify-center space-y-6">
                    <div className="flex gap-2">
                        <span className="h-1 w-12 bg-brand-primary" />
                        <span className="text-[10px] font-mono text-brand-primary uppercase">Critical Intel</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white tracking-tighter uppercase font-mono">Quantum Cryptography Resistance</h2>
                    <p className="text-neutral-400 text-sm font-sans">Secure your data against the next generation of computing threats. Implementation of Lattice-based protocols is no longer optional.</p>
                    <button 
                      onClick={openFeaturedModal}
                      className="w-fit px-8 py-3 bg-white text-black font-mono text-xs font-bold hover:bg-brand-primary transition-colors uppercase"
                    >
                        Read Report
                    </button>
                </div>
              </div>
            </section>

            {/* --- GRID SECTION --- */}
            <div>
              <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-4">
                 <h2 className="text-2xl font-mono font-bold uppercase tracking-widest flex items-center gap-4">
                  <Terminal className="text-brand-primary" /> Latest_Log_Files
                 </h2>
                 <span className="text-neutral-600 font-mono text-xs">Total: {blogPosts.length} Entries</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, idx) => (
                  <BlogCard 
                    key={post.id} 
                    post={post} 
                    index={idx} 
                    onClick={() => openModal(post)}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>

        <style jsx global>{`
          @keyframes scan {
            from { transform: translateY(-100%); }
            to { transform: translateY(100%); }
          }
          .animate-scan {
            animation: scan 8s linear infinite;
          }
          .animate-spin-slow {
            animation: spin 6s linear infinite;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          
          /* Custom scrollbar for featured report modal */
          .custom-scrollbar {
            scrollbar-width: 8px;
            scrollbar-color: #ef4444 #1a1a1a;
          }
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #1a1a1a;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #ef4444;
            border-radius: 4px;
            border: 1px solid #dc2626;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #f87171;
            border: 1px solid #ef4444;
          }
        `}</style>
      </div>

      {/* Modal - Outside main container */}
      {selectedPost && (
        <BlogModal 
          post={selectedPost} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      )}
      
      {/* Featured Report Modal */}
      <FeaturedReportModal 
        isOpen={isFeaturedModalOpen} 
        onClose={closeFeaturedModal} 
      />
    </>
  );
}