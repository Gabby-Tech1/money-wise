import { FC, useState } from "react";
import { ChevronRight, Circle, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { 
  PieChart as ReChartPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from "recharts";

interface PortfolioSummaryCardProps {
  portfolioSummary: {
    totalValue: number;
    totalReturn: number;
    totalGrowth: number;
    allocation: {
      category: string;
      percentage: number;
      value: number;
      color: string;
    }[];
  };
}

const PortfolioSummaryCard: FC<PortfolioSummaryCardProps> = ({ portfolioSummary }) => {
  const [openPortfolioDetails, setOpenPortfolioDetails] = useState(false);

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Portfolio Summary</CardTitle>
            <CardDescription>Overview of your investment portfolio</CardDescription>
          </div>
          <Collapsible>
            <CollapsibleTrigger
              onClick={() => setOpenPortfolioDetails(!openPortfolioDetails)}
              className="text-gray-500 hover:text-gray-700"
            >
              {openPortfolioDetails ? (
                <ChevronRight className="rotate-90 transition-transform" />
              ) : (
                <ChevronRight className="transition-transform" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-6 pt-6 border-t">
              <h3 className="text-lg font-medium mb-4">Portfolio Allocation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pie Chart */}
                <div className="bg-gray-50 rounded-md h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <ReChartPieChart>
                      <Pie
                        data={portfolioSummary.allocation}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                        label={({category, percentage}) => `${category} ${percentage}%`}
                      >
                        {portfolioSummary.allocation.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                    </ReChartPieChart>
                  </ResponsiveContainer>
                </div>

                {/* Allocation Breakdown */}
                <div className="space-y-4">
                  {portfolioSummary.allocation.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="flex items-center">
                          <Circle 
                            size={12} 
                            className="mr-2 fill-current"
                            style={{ color: item.color }}
                          />
                          {item.category}
                        </span>
                        <span className="font-medium">
                          {item.percentage}% (${item.value.toLocaleString()})
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ 
                            width: `${item.percentage}%`,
                            backgroundColor: item.color
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <p className="text-sm text-gray-500">Total Portfolio Value</p>
            <p className="text-3xl font-bold">
              ${portfolioSummary.totalValue.toLocaleString()}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">Total Return</p>
            <p className="text-3xl font-bold flex items-center text-finance-success">
              <TrendingUp size={24} className="mr-2" />
              {portfolioSummary.totalReturn}%
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">Total Growth</p>
            <p className="text-3xl font-bold text-finance-success">
              +${portfolioSummary.totalGrowth.toLocaleString()}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioSummaryCard;
