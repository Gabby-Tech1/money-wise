
import { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronRight,
  AlertCircle,
  PiggyBank,
  Percent,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";

const AISuggestionsTab: FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI-Powered Automation Suggestions</CardTitle>
        <CardDescription>
          Smart recommendations based on your financial activity
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-amber-800 mb-1">
              Optimize Your Savings Strategy
            </h3>
            <p className="text-amber-700 text-sm">
              We've noticed you have irregular saving patterns. Setting up an automated
              saving rule can help you save consistently without thinking about it.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-2 bg-amber-100 border-amber-200 text-amber-800 hover:bg-amber-200"
            >
              Create Saving Rule
              <ArrowUpRight size={14} className="ml-1" />
            </Button>
          </div>
        </div>

        <div className="border rounded-lg p-4 space-y-3 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-3 p-2 bg-finance-blue/10 rounded-full">
                <PiggyBank className="h-6 w-6 text-finance-blue" />
              </div>
              <div>
                <h3 className="font-medium">Emergency Fund Builder</h3>
                <p className="text-sm text-gray-600">
                  Automatically save 5% of each paycheck until you reach your emergency fund goal
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Create
            </Button>
          </div>
        </div>

        <div className="border rounded-lg p-4 space-y-3 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-3 p-2 bg-finance-purple/10 rounded-full">
                <Percent className="h-6 w-6 text-finance-purple" />
              </div>
              <div>
                <h3 className="font-medium">Debt Payoff Accelerator</h3>
                <p className="text-sm text-gray-600">
                  Automatically direct 10% of any extra income towards your highest interest debt
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Create
            </Button>
          </div>
        </div>

        <div className="border rounded-lg p-4 space-y-3 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-3 p-2 bg-finance-teal/10 rounded-full">
                <DollarSign className="h-6 w-6 text-finance-teal" />
              </div>
              <div>
                <h3 className="font-medium">Subscription Monitor</h3>
                <p className="text-sm text-gray-600">
                  Get alerted when subscription payments occur and automatically review ones you don't use
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Create
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button variant="ghost" className="w-full text-gray-600">
          View More Suggestions
          <ChevronRight size={16} className="ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AISuggestionsTab;
