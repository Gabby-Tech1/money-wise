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
  Trash,
  PlayCircle,
  PauseCircle,
  // Clock,
  // Activity,
  // RefreshCcw,
  // Brain,
} from "lucide-react";

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

interface RuleCardProps {
  rule: Rule;
}

const RuleCard: FC<RuleCardProps> = ({ rule }) => {
  // const getIcon = () => {
  //   switch (rule.type) {
  //     case "scheduled":
  //       return <Clock className="h-5 w-5" />;
  //     case "trigger":
  //       return <Activity className="h-5 w-5" />;
  //     case "passive":
  //       return <RefreshCcw className="h-5 w-5" />;
  //     default:
  //       return <Brain className="h-5 w-5" />;
  //   }
  // };

  const getTypeColor = () => {
    switch (rule.type) {
      case "scheduled":
        return "bg-blue-100 text-blue-800";
      case "trigger":
        return "bg-purple-100 text-purple-800";
      case "passive":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className={`${!rule.active ? "opacity-70" : ""}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2 py-0.5 rounded-full text-xs ${getTypeColor()}`}>
                {rule.type}
              </span>
              {!rule.active && (
                <span className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded-full text-xs">
                  Disabled
                </span>
              )}
            </div>
            <CardTitle className="text-lg">{rule.name}</CardTitle>
          </div>
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-500 hover:text-gray-700"
            >
              {rule.active ? <PauseCircle size={18} /> : <PlayCircle size={18} />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-500 hover:text-red-600"
            >
              <Trash size={18} />
            </Button>
          </div>
        </div>
        <CardDescription>{rule.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <div>
            <span className="text-gray-500">Amount:</span>{" "}
            <span className="font-medium">
              {typeof rule.amount === "number" ? `$${rule.amount}` : rule.amount}
            </span>
          </div>
          <div>
            <span className="text-gray-500">To:</span>{" "}
            <span className="font-medium">{rule.destination}</span>
          </div>
          <div>
            <span className="text-gray-500">Frequency:</span>{" "}
            <span className="font-medium">{rule.frequency}</span>
          </div>
          <div>
            <span className="text-gray-500">Criteria:</span>{" "}
            <span className="font-medium">{rule.criteria}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-3 text-xs text-gray-500">
        <div className="w-full flex justify-between items-center">
          <div>Last run: {rule.lastRun}</div>
          <div className="font-medium">Next: {rule.nextRun}</div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RuleCard;
