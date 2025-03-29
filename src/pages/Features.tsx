
import { FC } from "react";
import MainLayout from "@/components/MainLayout";

// Imported Components
import FeaturesHero from "@/components/features/FeaturesHero";
import CoreFeatures from "@/components/features/CoreFeatures";
import AITechnologySection from "@/components/features/AITechnologySection";
import SecuritySection from "@/components/features/SecuritySection";
import MobileAppSection from "@/components/features/MobileAppSection";
import CTASection from "@/components/features/CTASection";

const Features: FC = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <FeaturesHero />
        
        {/* Main Features Grid */}
        <CoreFeatures />

        {/* AI Technology Section */}
        <AITechnologySection />

        {/* Security Section */}
        <SecuritySection />

        {/* Mobile App Section */}
        <MobileAppSection />

        {/* CTA Section */}
        <CTASection />
      </div>
    </MainLayout>
  );
};

export default Features;
