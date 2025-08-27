import HeroSection from '@/components/home/hero';
import TopServices from '@/components/home/top-services';
import { Testimonials } from '@/components/home/testimonials';

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <TopServices />
      <Testimonials />
    </>
  );
}
