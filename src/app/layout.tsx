import type { Metadata } from "next";
import { Roboto } from "next/font/google"; // id: 0
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Zycron | Advanced Cybersecurity Solutions",
  description: "Protect your digital landscape with Zycron's elite threat intelligence, cloud security, and incident response services.",
  keywords: ["cybersecurity", "threat intelligence", "cloud security", "incident response", "network security"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${roboto.variable} antialiased bg-dark-bg text-slate-200 min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
