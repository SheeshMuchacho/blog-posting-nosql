// pages/index.tsx (or wherever your HomePage is)
import HeroSection from '@/components/home/hero-section';
import OurReachSection from '@/components/home/our-reach';
import ServicesSection from '@/components/home/services-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <OurReachSection />
    </>
  );
}
