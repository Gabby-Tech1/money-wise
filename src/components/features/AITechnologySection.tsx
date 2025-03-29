
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Zap, BarChart, LineChart, Brain } from "lucide-react";

const AITechnologySection: FC = () => {
  return (
    <div className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Advanced AI Technology
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Our proprietary artificial intelligence engine analyzes your financial data to provide personalized insights and recommendations that help you make smarter decisions.
          </p>
          <ul className="space-y-4">
            {[
              {
                title: "Transaction Classification",
                description:
                  "Automatically categorizes your transactions with 99% accuracy",
                icon: Zap,
              },
              {
                title: "Spending Pattern Analysis",
                description:
                  "Identifies patterns and trends in your spending habits",
                icon: BarChart,
              },
              {
                title: "Predictive Forecasting",
                description:
                  "Predicts future expenses and helps you plan accordingly",
                icon: LineChart,
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-3 mt-1 bg-finance-blue/10 p-1 rounded-full">
                  <item.icon className="h-5 w-5 text-finance-blue" />
                </div>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <Button className="mt-8 bg-finance-gradient hover:bg-finance-blue">
            Learn More About Our AI
          </Button>
        </div>
        <div className="bg-gray-100 rounded-xl overflow-hidden">
          {/* This would be replaced with an actual image or illustration */}
          <div className="aspect-[4/3] bg-gradient-to-br from-finance-blue/30 to-finance-purple/30 flex items-center justify-center">
            <div className="text-center p-6">
              <Brain className="h-16 w-16 text-finance-blue mx-auto mb-4" />
              <p className="text-gray-700 font-medium">
                AI Technology Visualization
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITechnologySection;
