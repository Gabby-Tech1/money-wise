
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturesHero: FC = () => {
  return (
    <div className="py-16 md:py-24 text-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-finance-blue to-finance-purple">
        AI-Powered Financial Management
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
        Discover the powerful features that will transform how you manage, save, and grow your money.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button className="bg-finance-gradient hover:bg-finance-blue">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button variant="outline">
          View Demo
        </Button>
      </div>
    </div>
  );
};

export default FeaturesHero;
