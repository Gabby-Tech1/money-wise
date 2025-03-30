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
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from "recharts";

interface PerformanceChartProps {
  performanceData: { date: string; value: number }[];
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
  const filterDataByTimeRange = (data: typeof performanceData, range: string) => {
    if (!data || data.length === 0) return [];
    
    const endDate = new Date();
    const startDate = new Date();

    switch (range) {
      case '1M':
        startDate.setMonth(endDate.getMonth() - 1);
        break;
      case '3M':
        startDate.setMonth(endDate.getMonth() - 3);
        break;
      case '6M':
        startDate.setMonth(endDate.getMonth() - 6);
        break;
      case '1Y':
        startDate.setFullYear(endDate.getFullYear() - 1);
        break;
      case '5Y':
        startDate.setFullYear(endDate.getFullYear() - 5);
        break;
      case 'All':
      default:
        return data;
    }

    return data.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate && itemDate <= endDate;
    });
  };

  const filteredData = filterDataByTimeRange(performanceData, selectedTimeRange);

  // Calculate performance percentage based on filtered data
  const calculatePerformance = () => {
    if (!filteredData || filteredData.length < 2) return 0;
    const firstValue = filteredData[0].value;
    const lastValue = filteredData[filteredData.length - 1].value;
    return ((lastValue - firstValue) / firstValue) * 100;
  };

  const performance = calculatePerformance();

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
            <AreaChart data={filteredData || []}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="date" 
                tickFormatter={(date) => new Date(date).toLocaleDateString('en-US', { month: 'short' })}
              />
              <YAxis 
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                formatter={(value: number) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
                labelFormatter={(date) => new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">Performance ({selectedTimeRange})</p>
            <p className={`text-xl font-bold ${filteredData.length ? (performance >= 0 ? 'text-finance-success' : 'text-finance-danger') : 'text-gray-400'} mt-1`}>
              {filteredData.length ? `${performance >= 0 ? '+' : ''}${performance.toFixed(1)}%` : 'No data'}
            </p>
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
