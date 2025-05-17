// pages/index.tsx (or wherever your HomePage is)
import HeroSection from '@/sections/hero-section';
import ServicesSection from '@/sections/services-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
    </>
  );
}
