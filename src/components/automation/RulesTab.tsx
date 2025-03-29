
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import RuleCard from "./RuleCard";

interface Rule {
  id: number;
  name: string;
  description: string;
  active: boolean;
  type: "scheduled" | "trigger" | "passive";
  destination: string;
  amount: number | string;
  frequency: string;
  criteria: string;
  lastRun: string;
  nextRun: string;
}

interface RulesTabProps {
  title: string;
  rules: Rule[];
}

const RulesTab: FC<RulesTabProps> = ({ title, rules }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Plus size={16} />
          Add Rule
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rules.map((rule) => (
          <RuleCard key={rule.id} rule={rule} />
        ))}
      </div>
    </div>
  );
};

export default RulesTab;
