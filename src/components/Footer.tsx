import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-3xl border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/bgless.png"
                alt="Zycron Logo"
                width={400}
                height={120}
                className="h-15 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering enterprises with cutting-edge cybersecurity solutions. Protect your digital assets with Zycron&apos;s advanced security protocols and elite response teams.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 rounded-lg bg-white/5 hover:bg-brand-primary/20 hover:text-brand-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 rounded-lg bg-white/5 hover:bg-brand-primary/20 hover:text-brand-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 rounded-lg bg-white/5 hover:bg-brand-primary/20 hover:text-brand-primary transition-colors">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "Services", "Products", "About Us", "Careers", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-slate-400 hover:text-brand-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              {["Threat Intelligence", "Cloud Security", "Incident Response", "Compliance", "Identity Management"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-slate-400 hover:text-brand-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5 text-brand-primary shrink-0" />
                <span>One Security Plaza, Silicon Valley, CA 94025</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400 text-sm">
                <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                <span>+1 (800) ZYCRON-SEC</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400 text-sm">
                <Mail className="w-5 h-5 text-brand-primary shrink-0" />
                <span>contact@zycron.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Zycron Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
