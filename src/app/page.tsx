import Hero from "@/components/home/Hero";
import ServicesCTA from "@/components/home/ServicesCTA";
import AboutCTA from "@/components/home/AboutCTA";
import ProductsCTA from "@/components/home/ProductsCTA";
import DualCTA from "@/components/home/DualCTA";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ScrollReveal animation="fade-up">
        <ServicesCTA />
      </ScrollReveal>
      <ScrollReveal animation="zoom-in">
        <ProductsCTA />
      </ScrollReveal>
      <ScrollReveal animation="slide-right">
        <AboutCTA />
      </ScrollReveal>
      <ScrollReveal animation="fade-up">
        <DualCTA />
      </ScrollReveal>
    </div>
  );
}
