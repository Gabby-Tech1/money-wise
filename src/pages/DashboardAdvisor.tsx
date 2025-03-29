import { FC } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import FinancialAdvisorBot from "@/components/features/FinancialAdvisorBot";

const DashboardAdvisor: FC = () => {
  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-4rem)]">        
        <FinancialAdvisorBot />
      </div>
    </DashboardLayout>
  );
};

export default DashboardAdvisor;
