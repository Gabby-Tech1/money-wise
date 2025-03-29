export interface Transaction {
  id: number;
  merchant: "Mobile Money" | "Bank Transfer";
  category: string;
  date: string;
  amount: number;
  time: string;
}
