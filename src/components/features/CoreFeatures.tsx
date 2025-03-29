
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Brain, PieChart, PiggyBank, LineChart, CreditCard, RefreshCcw } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const CoreFeatures: FC = () => {
  return (
    <div className="py-16 bg-gray-50 rounded-3xl px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Core Features</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our platform combines cutting-edge AI with user-friendly design to give you complete control over your finances.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          title="AI-Powered Insights"
          description="Get personalized financial insights and recommendations based on your spending habits and goals."
          icon={Brain}
          iconColor="text-finance-blue"
        />
        <FeatureCard
          title="Smart Budgeting"
          description="Create and manage budgets that adapt to your spending patterns and help you save more effectively."
          icon={PieChart}
          iconColor="text-finance-purple"
        />
        <FeatureCard
          title="Automated Savings"
          description="Set up automatic savings rules that work intelligently based on your income and expenses."
          icon={PiggyBank}
          iconColor="text-finance-teal"
        />
        <FeatureCard
          title="Investment Tracking"
          description="Monitor all your investments in one place with real-time updates and performance analytics."
          icon={LineChart}
          iconColor="text-finance-orange"
        />
        <FeatureCard
          title="Bill Management"
          description="Never miss a payment with automated bill tracking, reminders, and payment scheduling."
          icon={CreditCard}
          iconColor="text-finance-danger"
        />
        <FeatureCard
          title="Financial Automation"
          description="Save time with smart rules that automate transfers, payments, and financial tasks."
          icon={RefreshCcw}
          iconColor="text-finance-success"
        />
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" className="text-finance-blue border-finance-blue/30">
          Explore All Features
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CoreFeatures;
