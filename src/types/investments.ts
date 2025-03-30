export interface PerformanceData {
  date: string;
  value: number;
}

export type InvestmentType = "HIHS" | "LILS" | "HILS" | "LIHS";

export interface Recommendation {
  id: number;
  name: string;
  ticker: string;
  type: InvestmentType;
  riskLevel: string;
  expectedReturn: string;
  description: string;
  match: number;
}
