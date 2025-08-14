import HeroSection from '@/components/home/hero';
import ServicesSection from '@/components/home/services';
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
