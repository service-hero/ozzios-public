import { HeroSection } from '../components/HeroSection';
import { BentoSection } from '../components/BentoSection';
import { StatsSection } from '../components/StatsSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { AgentsSection } from '../components/AgentsSection';
import { CTASection } from '../components/CTASection';

export function LandingHomeView() {
  return (
    <>
      <HeroSection />
      <BentoSection />
      <StatsSection />
      <FeaturesSection />
      <AgentsSection />
      <CTASection />
    </>
  );
}
