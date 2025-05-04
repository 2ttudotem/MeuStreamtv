import HeroSection from '@/components/hero-section';
import FeaturesSection from '@/components/features-section';
import PricingSection from '@/components/pricing-section';
import MovieSection from '@/components/MovieSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CustomerAlert from '@/components/customer-alert';
import MobileFooterCarousel from '@/components/MobileFooterCarousel';
import HowItWorks from '@/components/how-it-works';

export default function Home() {
  return (
    <div className="flex flex-col">
      <CustomerAlert />
      <HeroSection />
      <MovieSection />
      <FeaturesSection />
      <HowItWorks />
      <PricingSection />
      <TestimonialsSection />
      <MobileFooterCarousel />
    </div>
  );
}