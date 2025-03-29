import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReportModal = ({ isOpen, onClose }: ReportModalProps) => {
  const dummyReport = {
    summary: "Your financial health is showing positive trends",
    highlights: [
      "Total spending decreased by 12% compared to last month",
      "Savings increased by 15%",
      "Largest expense category: Housing (35%)",
      "Notable increase in investment activities",
    ],
    recommendations: [
      "Consider increasing emergency fund contributions",
      "Review subscription services for potential savings",
      "Look into diversifying investment portfolio",
    ],
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Financial Insights Report</DialogTitle>
          <DialogDescription>
            AI-generated analysis of your financial activity
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div>
            <h3 className="font-semibold mb-2">Summary</h3>
            <p className="text-gray-600">{dummyReport.summary}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Key Highlights</h3>
            <ul className="list-disc pl-5 space-y-1">
              {dummyReport.highlights.map((highlight, index) => (
                <li key={index} className="text-gray-600">{highlight}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Recommendations</h3>
            <ul className="list-disc pl-5 space-y-1">
              {dummyReport.recommendations.map((recommendation, index) => (
                <li key={index} className="text-gray-600">{recommendation}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-end">
          <Button className="bg-finance-gradient text-white hover:bg-finance-blue/90">
            <Download size={16} className="mr-2" />
            Download Report
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
