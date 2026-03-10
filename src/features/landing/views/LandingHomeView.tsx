import { lazy } from 'react';
import { HeroSection } from '../components/HeroSection';
import { LazySection } from '@/components/ui/lazy-section';

const BentoSection = lazy(() =>
  import('../components/BentoSection').then((m) => ({ default: m.BentoSection })),
);
const FeaturesShowcaseSection = lazy(() =>
  import('../components/FeaturesShowcaseSection').then((m) => ({
    default: m.FeaturesShowcaseSection,
  })),
);
const SavingsCalculatorSection = lazy(() =>
  import('../components/SavingsCalculatorSection').then((m) => ({
    default: m.SavingsCalculatorSection,
  })),
);
const FeaturesSection = lazy(() =>
  import('../components/HowItWorksSection').then((m) => ({ default: m.FeaturesSection })),
);
const AgentsSection = lazy(() =>
  import('../components/AgentsSection').then((m) => ({ default: m.AgentsSection })),
);
const MemorySection = lazy(() =>
  import('../components/MemorySection').then((m) => ({ default: m.MemorySection })),
);
const PricingSection = lazy(() =>
  import('../components/PricingSection').then((m) => ({ default: m.PricingSection })),
);
const IntegrationsSection = lazy(() =>
  import('../components/IntegrationsSection').then((m) => ({
    default: m.IntegrationsSection,
  })),
);
const TestimonialsSection = lazy(() =>
  import('../components/TestimonialsSection').then((m) => ({
    default: m.TestimonialsSection,
  })),
);
const FAQSection = lazy(() =>
  import('../components/FAQSection').then((m) => ({ default: m.FAQSection })),
);
const CTASection = lazy(() =>
  import('../components/CTASection').then((m) => ({ default: m.CTASection })),
);

export function LandingHomeView() {
  return (
    <>
      <HeroSection />
      <LazySection component={BentoSection} />
      <LazySection component={FeaturesShowcaseSection} />
      <LazySection component={SavingsCalculatorSection} />
      <LazySection component={FeaturesSection} />
      <LazySection component={AgentsSection} />
      <LazySection component={MemorySection} />
      <LazySection component={PricingSection} />
      <LazySection component={IntegrationsSection} />
      <LazySection component={TestimonialsSection} />
      <LazySection component={FAQSection} />
      <LazySection component={CTASection} />
    </>
  );
}
