import { useScrollReveal } from "@/components/useScrollReveal";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import PipelineSection from "@/components/PipelineSection";
import LiveDemoSection from "@/components/LiveDemoSection";
import ComparisonSection from "@/components/ComparisonSection";
import ImpactSection from "@/components/ImpactSection";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <PipelineSection />
      <LiveDemoSection />
      <ComparisonSection />
      <ImpactSection />
      <FooterCTA />
    </div>
  );
};

export default Index;
