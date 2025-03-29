
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  PiggyBank,
  BarChart3,
  Wallet 
} from "lucide-react";

interface RuleSummary {
  length: number;
  filter: (predicate: (value: any, index: number, array: any[]) => boolean) => any[];
}

interface SummaryCardProps {
  savingRules: RuleSummary;
  investmentRules: RuleSummary;
  billRules: RuleSummary;
}

const SummaryCard: FC<SummaryCardProps> = ({ savingRules, investmentRules, billRules }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <PiggyBank className="mr-2 h-5 w-5 text-finance-blue" />
            Saving Rules
          </CardTitle>
          <CardDescription>Automated saving strategies</CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="text-3xl font-bold">{savingRules.length}</div>
          <div className="text-sm text-gray-500 mt-1">
            {savingRules.filter(r => r.active).length} active rules
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <BarChart3 className="mr-2 h-5 w-5 text-finance-purple" />
            Investment Rules
          </CardTitle>
          <CardDescription>Automated investment strategies</CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="text-3xl font-bold">{investmentRules.length}</div>
          <div className="text-sm text-gray-500 mt-1">
            {investmentRules.filter(r => r.active).length} active rules
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <Wallet className="mr-2 h-5 w-5 text-finance-teal" />
            Bill Payment Rules
          </CardTitle>
          <CardDescription>Automated bill payments</CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="text-3xl font-bold">{billRules.length}</div>
          <div className="text-sm text-gray-500 mt-1">
            {billRules.filter(r => r.active).length} active rules
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryCard;
