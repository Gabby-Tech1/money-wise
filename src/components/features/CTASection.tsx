
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const CTASection: FC = () => {
  return (
    <div className="rounded-3xl bg-finance-gradient text-white p-10 my-16 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Transform Your Financial Life?
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Join thousands of users who are already managing their finances more effectively with MoneyWise.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button className="bg-white text-finance-blue hover:bg-gray-100">
          Create Free Account
        </Button>
        <Button variant="outline" className="border-white text-finance-blue hover:bg-white/10">
          <MessageSquare className="mr-2 h-5 w-5" />
          Talk to an Advisor
        </Button>
      </div>
    </div>
  );
};

export default CTASection;
