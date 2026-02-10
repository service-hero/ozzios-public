import { HeroSection } from '../components/HeroSection';
import { BentoSection } from '../components/BentoSection';
import { SavingsCalculatorSection } from '../components/SavingsCalculatorSection';
import { FeaturesSection } from '../components/HowItWorksSection';
import { AgentsSection } from '../components/AgentsSection';
import { MemorySection } from '../components/MemorySection';
import { PricingSection } from '../components/PricingSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { CTASection } from '../components/CTASection';

export function LandingHomeView() {
  return (
    <>
      <HeroSection />
      <BentoSection />
      <SavingsCalculatorSection />
      <FeaturesSection />
      <AgentsSection />
      <MemorySection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
