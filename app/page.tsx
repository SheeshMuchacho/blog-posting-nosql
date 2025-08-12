// pages/index.tsx (or wherever your HomePage is)
import HeroSection from '@/components/home/hero-section';
import ServicesSection from '@/components/home/services-section';
import { Testimonials } from '@/components/home/testimonials';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <Testimonials />
    </>
  );
}
