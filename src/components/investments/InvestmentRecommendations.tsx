import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";

interface Recommendation {
  id: number;
  name: string;
  ticker: string;
  type: "HIHS" | "LILS" | "HILS" | "LIHS";  // Update type to be specific
  riskLevel: string;
  expectedReturn: string;
  description: string;
  match: number;
}

interface InvestmentRecommendationsProps {
  recommendations: Recommendation[];
}

const investmentTypes = [
  {type: "HIHS", summary: "We would suggest investing in Achieve's Global Tech, more volatile than a domestic fund yet offers higher growth potentials."},
  {type: "LILS", summary: "We would suggest investing in Achieve's Africa Eurobond Trust, it invests in USD-denominated securities to provide investors with competitive return."},
  {type: "HILS", summary: "We would suggest investing in Achieve's DigiSave, which offers you the highest possible return for money with a low risk."},
  {type: "LIHS", summary: "We would suggest investing in Cryptocurrency, mainly BTC, USDT, ETH which offers a high reward for high risk but more stable than other cryptocurrencies"},
];

const InvestmentRecommendations: FC<InvestmentRecommendationsProps> = ({ recommendations }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRecommendation, setSelectedRecommendation] = useState<Recommendation | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState('');

  const handleInvestClick = (recommendation: Recommendation) => {
    setSelectedRecommendation(recommendation);
    setShowModal(true);
  };

  const handleInvest = (platform: 'petra' | 'other') => {
    // Handle investment logic here
    toast.success(`Investing $${investmentAmount} in ${selectedRecommendation?.name} via ${platform}`);
    setShowModal(false);
    setInvestmentAmount('');
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimals
    if (/^\d*\.?\d*$/.test(value)) {
      setInvestmentAmount(value);
    }
  };

  const getInvestmentType = (type: string) => {
    return investmentTypes.find(t => t.type === type) || investmentTypes[0];
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI-Powered Investment Recommendations</CardTitle>
        <CardDescription>
          Personalized suggestions based on your financial profile and goals
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {recommendations.map((recommendation) => {
          const investmentType = getInvestmentType(recommendation.type);
          return (
            <div
              key={recommendation.id}
              className="border rounded-lg p-4 space-y-3 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium">{recommendation.name}</h3>
                  <div className="text-sm text-gray-500 flex flex-wrap gap-x-4 gap-y-1 mt-1">
                    <span>Ticker: {recommendation.ticker}</span>
                    <span>Type: {investmentType.type}</span>
                    <span>Risk: {recommendation.riskLevel}</span>
                    <span>Expected Return: {recommendation.expectedReturn}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button 
                    size="sm" 
                    className="bg-finance-gradient text-white hover:bg-finance-blue/90"
                    onClick={() => handleInvestClick(recommendation)}
                  >
                    Invest
                  </Button>
                </div>
              </div>
              <p className="text-gray-700">{investmentType.summary}</p>
            </div>
          );
        })}
      </CardContent>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Invest in {selectedRecommendation?.name}</DialogTitle>
            <DialogDescription>
              {selectedRecommendation ? getInvestmentType(selectedRecommendation.type).summary : 
               "Choose your investment platform and enter the amount you'd like to invest."}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Investment Amount ($)</Label>
              <Input
                id="amount"
                type="text"
                inputMode="decimal"
                min="0"
                step="0.01"
                placeholder="Enter amount"
                value={investmentAmount}
                onChange={handleAmountChange}
              />
              <p className="text-sm text-gray-500">Enter a valid amount to invest</p>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => handleInvest('petra')} disabled={!investmentAmount}>
              Invest via Petra
            </Button>
            <Button variant="outline" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

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
