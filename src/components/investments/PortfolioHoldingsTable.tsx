
import { FC } from "react";
import {
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Holding {
  id: number;
  name: string;
  ticker: string;
  shares: number;
  avgCost: number;
  currentPrice: number;
  value: number;
  return: number;
  sector: string;
}

interface PortfolioHoldingsTableProps {
  holdings: Holding[];
}

const PortfolioHoldingsTable: FC<PortfolioHoldingsTableProps> = ({ holdings }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Holdings</CardTitle>
        <CardDescription>All your current investments</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Ticker</TableHead>
              <TableHead>Shares</TableHead>
              <TableHead>Avg. Cost</TableHead>
              <TableHead>Current Price</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Return</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {holdings.map((holding) => (
              <TableRow key={holding.id}>
                <TableCell className="font-medium">{holding.name}</TableCell>
                <TableCell>{holding.ticker}</TableCell>
                <TableCell>{holding.shares}</TableCell>
                <TableCell>${holding.avgCost.toFixed(2)}</TableCell>
                <TableCell>${holding.currentPrice.toFixed(2)}</TableCell>
                <TableCell className="font-medium">
                  ${holding.value.toFixed(2)}
                </TableCell>
                <TableCell>
                  <span
                    className={`flex items-center ${
                      holding.return >= 0 ? "text-finance-success" : "text-finance-danger"
                    }`}
                  >
                    {holding.return >= 0 ? (
                      <TrendingUp size={16} className="mr-1" />
                    ) : (
                      <TrendingDown size={16} className="mr-1" />
                    )}
                    {holding.return.toFixed(1)}%
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PortfolioHoldingsTable;
