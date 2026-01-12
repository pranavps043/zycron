"use client";

import Hero from "@/components/home/Hero";
import ServicesCTA from "@/components/home/ServicesCTA";
import AboutCTA from "@/components/home/AboutCTA";
import ProductsCTA from "@/components/home/ProductsCTA";
import DualCTA from "@/components/home/DualCTA";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ServicesCTA />
      <AboutCTA />
      <ProductsCTA />
      <DualCTA />
    </div>
  );
}
