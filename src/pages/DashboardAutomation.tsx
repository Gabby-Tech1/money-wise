import { FC, useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// Imported components
import SummaryCard from "@/components/automation/SummaryCard";
import RulesTab from "@/components/automation/RulesTab";
import AISuggestionsTab from "@/components/automation/AISuggestionsTab";

// Define the Rule type to match what RulesTab expects
interface Rule {
  id: number;
  name: string;
  description: string;
  active: boolean;
  type: "trigger" | "scheduled" | "passive";  // Specific types instead of string
  destination: string;
  amount: number | string;
  frequency: string;
  criteria: string;
  lastRun: string;
  nextRun: string;
}

const DashboardAutomation: FC = () => {
  // State for automation rules
  const [savingRules] = useState<Rule[]>([
    {
      id: 1,
      name: "Automatic Monthly Savings",
      description: "Transfer $200 to savings account on the 1st of each month",
      active: true,
      type: "scheduled",
      destination: "High-Yield Savings",
      amount: 200,
      frequency: "Monthly",
      criteria: "1st of month",
      lastRun: "Dec 1, 2023",
      nextRun: "Jan 1, 2024",
    },
    {
      id: 2,
      name: "Income Savings",
      description: "Save 10% of all income deposits automatically",
      active: true,
      type: "trigger",
      destination: "Emergency Fund",
      amount: "10%",
      frequency: "On deposit",
      criteria: "Income > $100",
      lastRun: "Dec 8, 2023",
      nextRun: "On next income",
    },
    {
      id: 3,
      name: "Round-Up Savings",
      description: "Round up all transactions to the nearest dollar and save the difference",
      active: false,
      type: "passive",
      destination: "Investment Account",
      amount: "Round-up",
      frequency: "Every transaction",
      criteria: "All purchases",
      lastRun: "Nov 30, 2023",
      nextRun: "On next purchase",
    },
  ]);

  const [investmentRules] = useState<Rule[]>([
    {
      id: 1,
      name: "Monthly Portfolio Contribution",
      description: "Invest $400 in index fund portfolio monthly",
      active: true,
      type: "scheduled",
      destination: "Market Index Fund",
      amount: 400,
      frequency: "Monthly",
      criteria: "15th of month",
      lastRun: "Dec 15, 2023",
      nextRun: "Jan 15, 2024",
    },
    {
      id: 2,
      name: "Bonus Investment",
      description: "Invest 40% of any bonus or unexpected income",
      active: true,
      type: "trigger",
      destination: "Growth Portfolio",
      amount: "40%",
      frequency: "On deposit",
      criteria: "Income label: 'Bonus'",
      lastRun: "Never",
      nextRun: "On next bonus",
    },
  ]);

  const [billRules] = useState<Rule[]>([
    {
      id: 1,
      name: "Utility Bills Payment",
      description: "Pay electric, water, and internet bills when they arrive",
      active: true,
      type: "trigger",
      destination: "Utility Providers",
      amount: "Full amount",
      frequency: "On receipt",
      criteria: "Category: Utilities",
      lastRun: "Dec 5, 2023",
      nextRun: "On next bill",
    },
    {
      id: 2,
      name: "Rent Automatic Payment",
      description: "Pay monthly rent of $1,500 on the 28th of each month",
      active: true,
      type: "scheduled",
      destination: "Landlord",
      amount: 1500,
      frequency: "Monthly",
      criteria: "28th of month",
      lastRun: "Dec 28, 2023",
      nextRun: "Jan 28, 2024",
    },
  ]);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Financial Automation</h1>
            <p className="text-gray-600">Set up automatic rules to optimize your finances</p>
          </div>
          <Button className="bg-finance-gradient text-white hover:bg-finance-blue/90">
            <Plus size={16} className="mr-2" />
            Create New Rule
          </Button>
        </div>

        {/* Summary Cards */}
        <SummaryCard 
          savingRules={savingRules}
          investmentRules={investmentRules}
          billRules={billRules}
        />
        
        {/* Automation Rules */}
        <Tabs defaultValue="saving" className="space-y-6">
          <TabsList>
            <TabsTrigger value="saving">Saving</TabsTrigger>
            <TabsTrigger value="investing">Investing</TabsTrigger>
            <TabsTrigger value="bills">Bills & Payments</TabsTrigger>
            <TabsTrigger value="suggestions">AI Suggestions</TabsTrigger>
          </TabsList>

          {/* Saving Rules Tab */}
          <TabsContent value="saving">
            <RulesTab title="Saving Automation Rules" rules={savingRules} />
          </TabsContent>

          {/* Investing Rules Tab */}
          <TabsContent value="investing">
            <RulesTab title="Investment Automation Rules" rules={investmentRules} />
          </TabsContent>

          {/* Bills & Payments Tab */}
          <TabsContent value="bills">
            <RulesTab title="Bill Payment Automation" rules={billRules} />
          </TabsContent>

          {/* AI Suggestions Tab */}
          <TabsContent value="suggestions">
            <AISuggestionsTab />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default DashboardAutomation;
