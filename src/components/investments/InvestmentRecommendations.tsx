
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Info } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Recommendation {
  id: number;
  name: string;
  ticker: string;
  type: string;
  riskLevel: string;
  expectedReturn: string;
  description: string;
  match: number;
}

interface InvestmentRecommendationsProps {
  recommendations: Recommendation[];
}

const InvestmentRecommendations: FC<InvestmentRecommendationsProps> = ({ recommendations }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI-Powered Investment Recommendations</CardTitle>
        <CardDescription>
          Personalized suggestions based on your financial profile and goals
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {recommendations.map((recommendation) => (
          <div
            key={recommendation.id}
            className="border rounded-lg p-4 space-y-3 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium">{recommendation.name}</h3>
                <div className="text-sm text-gray-500 flex flex-wrap gap-x-4 gap-y-1 mt-1">
                  <span>Ticker: {recommendation.ticker}</span>
                  <span>Type: {recommendation.type}</span>
                  <span>Risk: {recommendation.riskLevel}</span>
                  <span>Expected Return: {recommendation.expectedReturn}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-finance-blue/10 text-finance-blue font-medium rounded-full px-3 py-1 text-sm flex items-center">
                  <Info size={14} className="mr-1" />
                  {recommendation.match}% Match
                </div>
                <Button variant="outline" size="sm">
                  Research
                </Button>
                <Button size="sm" className="bg-finance-gradient text-white hover:bg-finance-blue/90">
                  Invest
                </Button>
              </div>
            </div>
            <p className="text-gray-700">{recommendation.description}</p>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-center pt-2 pb-4">
        <Button variant="outline">
          View More Recommendations
          <ChevronRight size={16} className="ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InvestmentRecommendations;
