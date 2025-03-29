import { FC, useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Loader,
  PlusCircle,
  Shuffle,
} from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// Imported components
import PortfolioSummaryCard from "@/components/investments/PortfolioSummaryCard";
import PortfolioHoldingsTable from "@/components/investments/PortfolioHoldingsTable";
import InvestmentRecommendations from "@/components/investments/InvestmentRecommendations";
import PerformanceChart from "@/components/investments/PerformanceChart";
import { useAuth } from "@/hooks/use-auth";

const DashboardInvestments: FC = () => {
  const { user, isLoadingUser } = useAuth();
  const [selectedTimeRange, setSelectedTimeRange] = useState("1Y");

  // Sample data
  const portfolioSummary = {
    totalValue: 145650.78,
    totalReturn: 12.4,
    totalGrowth: 16025.45,
    allocation: [
      { category: "Stocks", percentage: 65, value: 94672.18, color: "#3b82f6" },
      { category: "Bonds", percentage: 20, value: 29130.15, color: "#8b5cf6" },
      { category: "Cash", percentage: 10, value: 14565.08, color: "#10b981" },
      { category: "Alternative", percentage: 5, value: 7282.54, color: "#f97316" },
    ],
  };

  const investmentRecommendations = [
    {
      id: 1,
      name: "Technology ETF",
      ticker: "TECH",
      type: "ETF",
      riskLevel: "Medium",
      expectedReturn: "8-12%",
      description: "A diversified fund of technology companies with strong growth potential.",
      match: 95,
    },
    {
      id: 2,
      name: "Sustainable Energy Fund",
      ticker: "ENRG",
      type: "Mutual Fund",
      riskLevel: "Medium-High",
      expectedReturn: "10-15%",
      description: "Focused on renewable energy companies and sustainable technologies.",
      match: 88,
    },
    {
      id: 3,
      name: "Dividend Aristocrats",
      ticker: "DIVD",
      type: "ETF",
      riskLevel: "Low",
      expectedReturn: "4-7%",
      description: "Companies with a history of increasing dividends for 25+ consecutive years.",
      match: 82,
    },
  ];

  const portfolioHoldings = [
    {
      id: 1,
      name: "Apple Inc.",
      ticker: "AAPL",
      shares: 25,
      avgCost: 145.32,
      currentPrice: 178.56,
      value: 4464.00,
      return: 22.9,
      sector: "Technology",
    },
    {
      id: 2,
      name: "Microsoft Corp.",
      ticker: "MSFT",
      shares: 15,
      avgCost: 240.45,
      currentPrice: 312.78,
      value: 4691.70,
      return: 30.1,
      sector: "Technology",
    },
    {
      id: 3,
      name: "Amazon.com Inc.",
      ticker: "AMZN",
      shares: 10,
      avgCost: 2950.78,
      currentPrice: 3320.45,
      value: 33204.50,
      return: 12.5,
      sector: "Consumer Cyclical",
    },
    {
      id: 4,
      name: "Vanguard Total Bond Market ETF",
      ticker: "BND",
      shares: 50,
      avgCost: 84.23,
      currentPrice: 82.45,
      value: 4122.50,
      return: -2.1,
      sector: "Fixed Income",
    },
    {
      id: 5,
      name: "Berkshire Hathaway Inc.",
      ticker: "BRK.B",
      shares: 8,
      avgCost: 270.45,
      currentPrice: 315.67,
      value: 2525.36,
      return: 16.7,
      sector: "Financial Services",
    },
  ];

  // Sample performance data for the chart
  const performanceData = [
    { month: "Jan", value: 130000 },
    { month: "Feb", value: 128500 },
    { month: "Mar", value: 134000 },
    { month: "Apr", value: 136500 },
    { month: "May", value: 132000 },
    { month: "Jun", value: 137500 },
    { month: "Jul", value: 140000 },
    { month: "Aug", value: 141500 },
    { month: "Sep", value: 139000 },
    { month: "Oct", value: 143000 },
    { month: "Nov", value: 146000 },
    { month: "Dec", value: 145650.78 },
  ];

  // Time range options for performance chart
  const timeRangeOptions = ["1M", "3M", "6M", "1Y", "5Y", "All"];

    if (isLoadingUser) {
      return (
        <DashboardLayout>
          <div className="flex items-center justify-center h-full min-h-96 py-20">
            <Loader className="animate-spin h-10 w-10 text-gray-500" />
          </div>
        </DashboardLayout>
      );
    }
  
    if (!user?.isconnected) {
      return (
        <DashboardLayout>
          <div className="flex items-center justify-center h-full min-h-96 py-20">
            <p className="text-gray-500">Please connect your account to view insights.</p>
          </div>
        </DashboardLayout>
      );
    }
  

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Investments</h1>
            <p className="text-gray-600">Manage your portfolio and discover new opportunities</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Shuffle size={16} />
              <span>Rebalance</span>
            </Button>
            <Button className="bg-finance-gradient text-white hover:bg-finance-blue/90">
              <PlusCircle size={16} className="mr-2" />
              Add Investment
            </Button>
          </div>
        </div>

        {/* Portfolio Summary */}
        <PortfolioSummaryCard portfolioSummary={portfolioSummary} />

        {/* Main Content Tabs */}
        <Tabs defaultValue="holdings" className="space-y-6">
          <TabsList>
            <TabsTrigger value="holdings">Holdings</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          {/* Holdings Tab */}
          <TabsContent value="holdings">
            <PortfolioHoldingsTable holdings={portfolioHoldings} />
          </TabsContent>

          {/* Recommendations Tab */}
          <TabsContent value="recommendations">
            <div className="space-y-6">
              <InvestmentRecommendations recommendations={investmentRecommendations} />
            </div>
          </TabsContent>

          {/* Performance Tab */}
          <TabsContent value="performance">
            <PerformanceChart 
              performanceData={performanceData}
              selectedTimeRange={selectedTimeRange}
              timeRangeOptions={timeRangeOptions}
              setSelectedTimeRange={setSelectedTimeRange}
            />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default DashboardInvestments;
