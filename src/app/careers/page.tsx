"use client";

import { useState, useEffect } from 'react';
import PageHeader from "@/components/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Briefcase, MapPin, Clock, ArrowRight, ShieldCheck, Terminal, X, Loader2, Upload, Cpu } from "lucide-react";
import Image from "next/image";
import emailjs from '@emailjs/browser';
import Link from 'next/link';

// --- PERFECT CONTENT JOB LISTINGS ---
const jobs = [
  {
    id: "01",
    title: "Senior Security Researcher",
    department: "Threat Intelligence",
    location: "Kochi, India",
    type: "Full-time",
    gradientFrom: "#ffbc00",
    gradientTo: "#ff0058",
    about: "As a Senior Security Researcher, you'll lead our threat intelligence efforts, identifying and analyzing emerging security threats. You'll work closely with our security operations team to develop detection mechanisms and mitigation strategies.",
    responsibilities: [
      "Conduct in-depth analysis of malware, exploits, and attack techniques",
      "Develop and maintain threat intelligence platforms and tools",
      "Produce detailed technical reports on security findings",
      "Mentor junior researchers and analysts",
      "Collaborate with cross-functional teams to enhance security posture"
    ],
    requirements: [
      "5+ years experience in security research or threat intelligence",
      "Deep understanding of malware analysis and reverse engineering",
      "Experience with threat intelligence platforms and frameworks",
      "Strong programming skills in Python, C/C++, or similar",
      "Excellent written and verbal communication skills"
    ]
  },
  {
    id: "02",
    title: "Cloud Security Architect",
    department: "Engineering",
    location: "Kochi, India",
    type: "Hybrid",
    gradientFrom: "#03a9f4",
    gradientTo: "#ff0058",
    about: "Design and implement secure cloud infrastructure solutions for our global client base. You'll be responsible for creating robust security architectures that protect against modern cloud threats.",
    responsibilities: [
      "Design secure cloud architectures on AWS, Azure, and GCP",
      "Implement security best practices and compliance frameworks",
      "Conduct security reviews and risk assessments",
      "Automate security controls using Infrastructure as Code"
    ],
    requirements: [
      "3+ years of cloud security experience",
      "AWS/Azure/GCP security certifications",
      "Experience with Terraform, CloudFormation, or ARM templates",
      "Strong knowledge of cloud-native security services"
    ]
  },
  {
    id: "03",
    title: "Cybersecurity Manager",
    department: "Operations",
    location: "Kochi, India",
    type: "Full-time",
    gradientFrom: "#4dff03",
    gradientTo: "#00d0ff",
    about: "Lead our cybersecurity program development and implementation. You'll oversee security initiatives, manage security teams, and ensure alignment with organizational security objectives.",
    responsibilities: [
      "Develop and implement comprehensive cybersecurity programs",
      "Manage security team operations and resources",
      "Coordinate security initiatives across departments",
      "Monitor program effectiveness and security metrics",
      "Report to executive leadership on security posture"
    ],
    requirements: [
      "7+ years in cybersecurity program management",
      "Strong leadership and team management skills",
      "Experience with security frameworks (NIST, ISO 27001)",
      "Excellent strategic planning and communication abilities",
      "Security certifications (CISSP, CISM preferred)"
    ]
  },
  {
    id: "04",
    title: "DevSecOps Engineer",
    department: "Engineering",
    location: "Kochi, India",
    type: "Full-time",
    gradientFrom: "#a855f7",
    gradientTo: "#22d3ee",
    about: "Integrate security into our CI/CD pipeline and development processes. You'll bridge the gap between development and security, ensuring our products are built with security from the ground up.",
    responsibilities: [
      "Implement security controls in CI/CD pipelines",
      "Automate security testing and vulnerability scanning",
      "Secure container environments and Kubernetes clusters",
      "Monitor for security vulnerabilities in production"
    ],
    requirements: [
      "3+ years of DevSecOps experience",
      "Strong knowledge of Kubernetes and Docker",
      "Experience with Jenkins, GitLab CI, or similar tools",
      "Scripting skills in Python, Bash, or Go"
    ]
  },
  {
    id: "05",
    title: "SOC Analyst",
    department: "Operations",
    location: "Kochi, India",
    type: "On-site",
    gradientFrom: "#f43f5e",
    gradientTo: "#f97316",
    about: "Monitor, detect, and respond to security threats in real-time. You'll be the first line of defense against cyber attacks, protecting our organization's critical assets and data.",
    responsibilities: [
      "Monitor security alerts and incidents 24/7",
      "Analyze security events and identify potential threats",
      "Coordinate incident response with security teams",
      "Document security findings and maintain incident logs",
      "Operate SIEM tools and security monitoring platforms"
    ],
    requirements: [
      "2+ years in SOC or security operations",
      "Experience with SIEM tools (Splunk, QRadar, or similar)",
      "Strong analytical and problem-solving skills",
      "Ability to work in high-pressure environments",
      "Security certifications (CompTIA Security+, GIAC preferred)"
    ]
  }
];

// --- YOUR ORIGINAL MAIN PAGE COMPONENT ---
export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);

  return (
    <div className="relative min-h-screen selection:bg-brand-primary/30 selection:text-brand-primary overflow-hidden">
      {/* Page Background Image */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Image
          src="/images/carr.jpg"
          alt="Careers Background"
          fill
          className="object-cover blur-sm opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20" />
      </div>

      <PageHeader
        title="Join the Elite"
        subtitle="Work with the world's most talented security experts to build a safer future."
        className="relative pt-32 pb-24 bg-black/40 backdrop-blur-md border-b border-white/10"
      />

      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
              <span className="text-brand-primary mr-4">{"//"}</span> Open Positions
            </h2>
            <p className="text-slate-400 font-mono text-sm tracking-widest uppercase">
              System.Status: Recruiting_Active
            </p>
          </motion.div>

          <div className="flex justify-center items-center flex-wrap">
            {jobs.map((job, idx) => (
              <ScrollReveal
                key={idx}
                animation="fade-up"
                delay={idx * 0.1}
                className="group relative w-[320px] h-[450px] m-[40px_30px]"
              >
                {/* Skewed Background Panels */}
                <span
                  className="absolute top-0 left-[60px] w-1/2 h-full rounded-xl transform skew-x-[15deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
                  style={{ background: `linear-gradient(315deg, ${job.gradientFrom}, ${job.gradientTo})` }}
                />
                <span
                  className="absolute top-0 left-[50px] w-1/2 h-full rounded-xl transform skew-x-[15deg] blur-[30px] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)] opacity-50"
                  style={{ background: `linear-gradient(315deg, ${job.gradientFrom}, ${job.gradientTo})` }}
                />

                {/* Floating Blobs */}
                <span className="pointer-events-none absolute inset-0 z-10">
                  <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-white/10 backdrop-blur-[10px] shadow-lg transition-all duration-500 animate-blob group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[80px] group-hover:h-[80px] group-hover:opacity-100" />
                  <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-white/10 backdrop-blur-[10px] shadow-lg transition-all duration-700 animate-blob animation-delay-1000 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[80px] group-hover:h-[80px] group-hover:opacity-100" />
                </span>

                {/* Main Content Card */}
                <div
                  className="relative z-20 min-h-[340px] flex flex-col justify-between left-0 p-[24px_32px] bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-xl text-white transition-all duration-500 ease-in-out group-hover:left-[-25px] group-hover:p-[40px_35px] group-hover:min-h-[390px] group-hover:border-white/20"
                >
                  <div className="absolute top-4 right-4 font-mono text-[10px] text-white/20 group-hover:text-white/40">
                    ID: {job.id} {"//"} SEC_REQ
                  </div>
                  
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/10 rounded-tl-xl transition-colors group-hover:border-brand-primary" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/10 rounded-br-xl transition-colors group-hover:border-brand-primary" />

                  <div className="relative">
                    <div className="flex items-center gap-2 mb-4">
                        <Terminal className="w-4 h-4 text-brand-primary" />
                        <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase">Classified Role</span>
                    </div>
                    
                    <h3 className="text-xl font-black uppercase tracking-tight leading-tight mb-6 group-hover:text-white transition-colors">
                      {job.title}
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded-md border border-white/5">
                           <Briefcase className="w-3.5 h-3.5 text-brand-primary" />
                        </div>
                        <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase">{job.department}</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded-md border border-white/5">
                           <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                        </div>
                        <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase">{job.location}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded-md border border-white/5">
                           <Clock className="w-3.5 h-3.5 text-brand-primary" />
                        </div>
                        <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase">{job.type}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedJob(job)}
                    className="mt-8 relative overflow-hidden group/btn inline-flex items-center justify-center gap-3 bg-white text-black font-black uppercase tracking-widest text-[10px] px-6 py-4 rounded-lg transition-all hover:pr-8"
                  >
                    <span className="relative z-10">Initialize Application</span>
                    <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0%, 100% { transform: translateY(10px) scale(1); }
            50% { transform: translate(-10px) scale(1.1); }
          }
          .animate-blob {
            animation: blob 3s ease-in-out infinite;
          }
          .animation-delay-1000 {
            animation-delay: -1.5s;
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-24 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/dual.jpg"
            alt="CTA Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-primary/90 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            System Overflow?
          </h2>
          <p className="text-white/90 mb-12 max-w-xl mx-auto text-lg font-mono tracking-tight">
            [Signal Not Found] - Send an unsolicited transmission if your specialty isn&apos;t listed.
          </p>
          <Link
            href="/contact-us"
            className="px-12 py-5 bg-black text-white border border-white/20 font-black rounded-2xl hover:bg-white hover:text-brand-primary transition-all uppercase tracking-widest text-lg shadow-2xl inline-block"
          >
            Submit Open Transmission
          </Link>
        </div>
      </motion.section>
      
      <AnimatePresence>
        {selectedJob && (
          <ApplicationModal 
            job={selectedJob} 
            onClose={() => setSelectedJob(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// --- NEW STANDARD APPLICATION MODAL ---
const ApplicationModal = ({ job, onClose }: { job: typeof jobs[0], onClose: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    resume: null as File | null
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init("sTSWywYsy4B058ObE");
      
      // Get current date and time
      const now = new Date();
      const applicationDate = now.toLocaleDateString();
      const applicationTime = now.toLocaleTimeString();
      
      // Prepare email data matching your template
      const emailData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        jobTitle: job.title,
        jobType: job.type,
        message: formData.message,
        applicationDate: applicationDate,
        applicationTime: applicationTime,
        subject: `Job Application: ${job.title}`
      };
      
      // Send email using EmailJS
      await emailjs.send(
        "service_9yq9rzf",
        "template_pqj7bgb",
        emailData
      );
      
      // Success handling
      onClose();
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
      {/* Background Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Surface */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl max-h-full bg-[#0d0d0d] border border-white/10 rounded-2xl shadow-[0_0_50px_-12px_rgba(255,0,0,0.3)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CUSTOM SCROLLBAR CSS */}
        <style jsx global>{`
          .dossier-scroll::-webkit-scrollbar { width: 6px; }
          .dossier-scroll::-webkit-scrollbar-track { background: transparent; }
          .dossier-scroll::-webkit-scrollbar-thumb { 
            background: rgba(255, 0, 0, 0.2); 
            border-radius: 10px; 
          }
          .dossier-scroll::-webkit-scrollbar-thumb:hover { 
            background: #ff0000; 
          }
        `}</style>

        {/* --- MODAL HEADER (STICKY) --- */}
        <div className="shrink-0 flex items-center justify-between p-6 border-b border-white/10 bg-[#0d0d0d]/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-4">
            <div className="hidden md:block p-3 bg-brand-primary/10 rounded-lg border border-brand-primary/20">
                <ShieldCheck className="w-6 h-6 text-brand-primary" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight">{job.title}</h3>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                ID: {job.id} {"//"} DEPT: {job.department}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/5 rounded-full transition-colors group"
          >
            <X className="w-6 h-6 text-slate-400 group-hover:text-white" />
          </button>
        </div>

        {/* --- SCROLLABLE CONTENT AREA --- */}
        <div className="overflow-y-auto dossier-scroll">
          <div className="p-8 space-y-12">
            
            {/* Grid for Info */}
            <div className="grid md:grid-cols-3 gap-8">
                {/* Left Column: Description */}
                <div className="md:col-span-2 space-y-8">
                    <section>
                        <h4 className="text-xs font-mono text-brand-primary uppercase tracking-[0.3em] mb-4">Mission_Brief</h4>
                        <p className="text-slate-300 leading-relaxed text-base">{job.about}</p>
                    </section>
                    
                    <section>
                        <h4 className="text-xs font-mono text-brand-primary uppercase tracking-[0.3em] mb-4">Operational_Directives</h4>
                        <ul className="space-y-3">
                            {job.responsibilities.map((req, i) => (
                                <li key={i} className="flex gap-3 text-base text-slate-400">
                                    <span className="text-brand-primary font-mono">0{i+1}</span> {req}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                {/* Right Column: Requirements Card */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/5 h-fit">
                    <h4 className="text-xs font-mono text-white uppercase tracking-widest mb-6 pb-2 border-b border-white/10">Requirement Set</h4>
                    <ul className="space-y-4">
                        {job.requirements.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-xs text-slate-400 leading-snug">
                                <Cpu className="w-3 h-3 text-brand-primary shrink-0 mt-0.5" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* --- FORM SECTION --- */}
            <section>
                <div className="mb-8">
                    <h4 className="text-xs font-mono text-brand-primary uppercase tracking-[0.3em]">Initialize Identity Transmission</h4>
                    <p className="text-slate-500 text-[11px] mt-1 font-mono uppercase">Secure Channel Established.</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[12px] font-mono text-slate-500 uppercase tracking-widest">First Name *</label>
                            <input 
                                required 
                                value={formData.firstName}
                                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-primary outline-none transition-all text-slate-500 text-[13px] font-mono uppercase tracking-widest" 
                                placeholder="FIRST NAME" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[12px] font-mono text-slate-500 uppercase tracking-widest">Last Name *</label>
                            <input 
                                required 
                                value={formData.lastName}
                                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-primary outline-none transition-all text-slate-500 text-[13px] font-mono uppercase tracking-widest" 
                                placeholder="LAST NAME" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[12px] font-mono text-slate-500 uppercase tracking-widest">Email Address *</label>
                            <input 
                                required 
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-primary outline-none transition-all text-slate-500 text-[13px] font-mono uppercase tracking-widest" 
                                placeholder="EMAIL@DOMAIN.COM" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[12px] font-mono text-slate-500 uppercase tracking-widest">Phone Number</label>
                            <input 
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-primary outline-none transition-all text-slate-500 text-[13px] font-mono uppercase tracking-widest" 
                                placeholder="+1 (___) ___-____" 
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[12px] font-mono text-slate-500 uppercase tracking-widest">Intelligence Report (CV / Resume) *</label>
                        <div className="relative group/upload h-32 border-2 border-dashed border-white/10 rounded-xl hover:border-brand-primary/40 hover:bg-brand-primary/5 transition-all flex flex-col items-center justify-center cursor-pointer">
                            <Upload className="w-6 h-6 text-slate-500 group-hover/upload:text-brand-primary transition-colors mb-2" />
                            <span className="text-xs text-slate-400 group-hover/upload:text-slate-200">Drag or <span className="text-brand-primary font-bold">Select File</span></span>
                            <input 
                                type="file" 
                                className="absolute inset-0 opacity-0 cursor-pointer" 
                                accept=".pdf,.doc,.docx" 
                                required 
                                onChange={(e) => setFormData({...formData, resume: e.target.files?.[0] || null})}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[12px] font-mono text-slate-500 uppercase tracking-widest">Message (Optional)</label>
                        <textarea 
                            rows={4} 
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-primary outline-none transition-all resize-none text-slate-500 text-[13px] font-mono uppercase tracking-widest" 
                            placeholder="Additional information or cover letter..." 
                        />
                    </div>

                    <div className="flex items-center justify-between pt-4 pb-4">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-600">
                           <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" /> Connection_Secure
                        </div>
                        <button 
                            disabled={isSubmitting}
                            className="bg-brand-primary text-black font-black uppercase text-xs tracking-widest px-10 py-4 rounded-lg hover:shadow-[0_0_20px_rgba(255,188,0,0.3)] disabled:opacity-50 flex items-center gap-2"
                        >
                            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Transmit Application'}
                        </button>
                    </div>
                </form>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};