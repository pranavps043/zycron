"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import {
  Shield, Cpu, Search, Crosshair,
  Server, FileCode, Hexagon,
} from "lucide-react";

// --- DATA ---
const services = [
  { id: "01", title: "Security Assessment", department: "Core Security", icon: Shield, color: "#ffbc00", about: "Comprehensive evaluation of security posture and risk identification to protect your business assets.", responsibilities: ["Risk assessment", "Threat modeling", "Gap analysis", "Compliance framework"], requirements: ["Infrastructure analysis", "Risk prioritization", "Compliance mapping"] },
  { id: "02", title: "Vulnerability Ops", department: "Testing Operations", icon: Search, color: "#03a9f4", about: "Systematic scanning and identification of security vulnerabilities across your infrastructure.", responsibilities: ["Automated scanning", "Manual verification", "Risk prioritization", "Remediation guidance"], requirements: ["Asset inventory", "Multi-scanner approach", "False positive reduction"] },
  { id: "03", title: "Penetration Testing", department: "Security Testing", icon: Crosshair, color: "#4dff03", about: "Authorized simulated cyberattacks to identify and exploit vulnerabilities.", responsibilities: ["Web app testing", "Network testing", "Social engineering", "Exploit development"], requirements: ["OWASP methodology", "PTES standards", "Exploitation reporting"] },
  { id: "04", title: "API Security", department: "App Security", icon: FileCode, color: "#a855f7", about: "Specialized testing of web applications and APIs to identify security flaws.", responsibilities: ["OWASP Top 10", "API assessment", "Auth testing", "Input validation"], requirements: ["REST/SOAP testing", "Auth analysis", "Encryption validation"] },
  { id: "05", title: "Server Hardening", department: "Infrastructure", icon: Server, color: "#f43f5e", about: "Security configuration and hardening of Windows and Linux servers.", responsibilities: ["OS hardening", "Service security", "Patch management", "Baseline development"], requirements: ["CIS benchmarks", "Security templates", "Config optimization"] },
  { id: "06", title: "Malware Protection", department: "Endpoint Sec", icon: Cpu, color: "#fb923c", about: "Comprehensive protection for endpoints including detection and response.", responsibilities: ["Antivirus deployment", "EDR implementation", "Threat hunting", "Incident response"], requirements: ["EDR integration", "Malware analysis", "Policy enforcement"] },
  // { id: "07", title: "Network Defense", department: "Network Sec", icon: Wifi, color: "#00d0ff", about: "Analysis and optimization of network security controls and firewalls.", responsibilities: ["Firewall review", "Segmentation design", "Traffic analysis", "NAC implementation"], requirements: ["NGFW expertise", "Pattern analysis", "Policy development"] },
  // { id: "08", title: "SIEM Operations", department: "Sec Ops", icon: Activity, color: "#fb923c", about: "SOC services including log monitoring and security incident detection.", responsibilities: ["Log collection", "SIEM config", "Alert tuning", "Threat detection"], requirements: ["SIEM expertise", "Log integration", "Rule development"] },
  // { id: "09", title: "Incident Response", department: "IR Team", icon: AlertTriangle, color: "#ef4444", about: "Rapid response and recovery services to minimize damage after incidents.", responsibilities: ["Triage", "Containment", "Evidence collection", "Recovery planning"], requirements: ["NIST framework", "Evidence handling", "Forensic analysis"] },
];

type Service = (typeof services)[number];

const ServiceCard = ({
  service,
  index,
  progress,
  range,
  targetScale,
}: {
  service: Service;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const Icon = service.icon;

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-6 lg:px-8">
      <motion.div
        style={{ scale, top: `calc(-2.5% + ${index * 20}px)` }}
        className="relative h-[600px] sm:h-[650px] md:h-[550px] lg:h-[600px] w-full max-w-6xl bg-neutral-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.3)] flex flex-col md:flex-row"
      >
        {/* LEFT SIDE */}
        <div
          className="w-full md:w-1/3 p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-white/5 relative"
          style={{ backgroundColor: `${service.color}05` }}
        >
          <div className="relative z-10 p-6 rounded-3xl border border-white/10 bg-black/40">
            <Icon size={48} style={{ color: service.color }} />
          </div>

          <div className="mt-6 text-center">
            <span className="font-mono text-[10px] text-white/30 tracking-widest block mb-2">
              ID_SYS_{service.id}
            </span>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white uppercase tracking-tighter">
              {service.title}
            </h3>
          </div>

          <Icon
            size={200}
            className="absolute -bottom-10 -left-10 opacity-[0.03] rotate-12"
            style={{ color: service.color }}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ backgroundColor: service.color }} />
            <span
              className="text-xs md:text-sm lg:text-base font-mono uppercase tracking-[0.3em]"
              style={{ color: service.color }}
            >
              {service.department}
            </span>
          </div>

          <p className="text-slate-400 text-sm md:text-base lg:text-lg leading-relaxed mb-8">
            {service.about}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div>
              <h4 className="text-[10px] md:text-[11px] lg:text-[12px] font-black text-white/40 uppercase tracking-[0.3em] mb-4">
                Core Deliverables
              </h4>
              <ul className="space-y-3">
                {service.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs md:text-sm lg:text-base text-slate-300">
                    <Hexagon
                      size={12}
                      style={{ color: service.color }}
                      fill={service.color}
                      fillOpacity={0.2}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] md:text-[11px] lg:text-[12px] font-black text-white/40 uppercase tracking-[0.3em] mb-4">
                Strategic Reqs
              </h4>
              <ul className="space-y-3">
                {service.requirements.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs md:text-sm lg:text-base text-slate-400">
                    <div
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: service.color }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-auto flex justify-between items-center pt-8 border-t border-white/5">
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: service.color }}
              />
              <span className="text-[10px] md:text-[11px] lg:text-[12px] font-mono text-white/40 uppercase">
                System Active
              </span>
            </div>
            <button className="text-[10px] md:text-[11px] lg:text-[12px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function ServicesPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="relative text-white selection:bg-white/20">
      <div className="relative z-20">
        <PageHeader
          title="Security Operations"
          subtitle="Enterprise-grade cyber defense through automated intelligence."
          showDecoration={false}
          className="relative pt-32 pb-24 bg-black/40 backdrop-blur-md border-b border-white/10"
        />
      </div>

      <main ref={container} className="relative px-4 md:px-6 lg:px-8 pb-[10vh] z-10 pt-20">
          {services.map((service, idx) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={idx}
              progress={scrollYProgress}
              range={[idx * (1 / services.length), 1]}
              targetScale={1 - ((services.length - idx) * 0.05)}
            />
          ))}
        </main>

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/serbg.jpg"
          alt="Services Background"
          fill
          priority
          className="object-cover opacity-100 blur-sm"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </div>
  );
}
