
import { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer
} from "recharts";

interface PerformanceChartProps {
  performanceData: { month: string; value: number }[];
  selectedTimeRange: string;
  timeRangeOptions: string[];
  setSelectedTimeRange: (range: string) => void;
}

const PerformanceChart: FC<PerformanceChartProps> = ({ 
  performanceData, 
  selectedTimeRange, 
  timeRangeOptions, 
  setSelectedTimeRange 
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <CardTitle>Investment Performance</CardTitle>
            <CardDescription>Track the performance of your investments over time</CardDescription>
          </div>
          <div className="flex flex-wrap gap-2">
            {timeRangeOptions.map((range) => (
              <Button 
                key={range}
                variant={selectedTimeRange === range ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTimeRange(range)}
                className={selectedTimeRange === range ? "bg-finance-blue" : ""}
              >
                {range}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={performanceData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
              <XAxis dataKey="month" />
              <YAxis 
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                domain={['dataMin - 5000', 'dataMax + 5000']}
              />
              <Tooltip 
                formatter={(value) => [`$${value.toLocaleString()}`, "Portfolio Value"]} 
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                name="Portfolio Value"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6, strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">Performance ({selectedTimeRange})</p>
            <p className="text-xl font-bold text-finance-success mt-1">+12.4%</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">Benchmark Comparison</p>
            <p className="text-xl font-bold text-finance-success mt-1">+3.2%</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">Volatility</p>
            <p className="text-xl font-bold mt-1">Low</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
