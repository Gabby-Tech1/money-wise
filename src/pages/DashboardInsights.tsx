import { FC } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  ChevronRight,
  DollarSign,
  Filter,
  PieChart,
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";

const DashboardInsights: FC = () => {
  // Sample data for charts and tables
  const monthlySpendingData = [
    { month: "Jan", amount: 1450 },
    { month: "Feb", amount: 1320 },
    { month: "Mar", amount: 1600 },
    { month: "Apr", amount: 1200 },
    { month: "May", amount: 1380 },
    { month: "Jun", amount: 1500 },
    { month: "Jul", amount: 1780 },
    { month: "Aug", amount: 1620 },
    { month: "Sep", amount: 1400 },
    { month: "Oct", amount: 1520 },
    { month: "Nov", amount: 1690 },
    { month: "Dec", amount: 1890 },
  ];

  const categoryBreakdown = [
    { category: "Housing", percentage: 35, amount: 850 },
    { category: "Food", percentage: 18, amount: 435 },
    { category: "Transportation", percentage: 12, amount: 290 },
    { category: "Utilities", percentage: 10, amount: 242 },
    { category: "Entertainment", percentage: 8, amount: 193 },
    { category: "Shopping", percentage: 7, amount: 169 },
    { category: "Health", percentage: 6, amount: 145 },
    { category: "Other", percentage: 4, amount: 97 },
  ];

  const recentTransactions = [
    { 
      id: 1, 
      merchant: "Whole Foods Market", 
      category: "Groceries", 
      date: "Dec 15, 2023", 
      amount: -89.47,
      tags: ["food", "organic"]
    },
    { 
      id: 2, 
      merchant: "Amazon", 
      category: "Shopping", 
      date: "Dec 14, 2023", 
      amount: -129.99,
      tags: ["household", "electronics"]
    },
    { 
      id: 3, 
      merchant: "Netflix", 
      category: "Entertainment", 
      date: "Dec 12, 2023", 
      amount: -17.99,
      tags: ["subscription", "streaming"]
    },
    { 
      id: 4, 
      merchant: "Shell", 
      category: "Transportation", 
      date: "Dec 10, 2023", 
      amount: -45.23,
      tags: ["gas", "auto"]
    },
    { 
      id: 5, 
      merchant: "Paycheck", 
      category: "Income", 
      date: "Dec 8, 2023", 
      amount: 2865.33,
      tags: ["salary"]
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Financial Insights</h1>
            <p className="text-gray-600">Detailed analysis of your spending habits and financial patterns</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              <span>Filter</span>
            </Button>
            <Button className="bg-finance-gradient text-white hover:bg-finance-blue/90">
              <BarChart3 size={16} className="mr-2" />
              Create Report
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="spending" className="space-y-6">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="spending">Spending</TabsTrigger>
              <TabsTrigger value="income">Income</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="predictions">AI Predictions</TabsTrigger>
            </TabsList>
            <Button variant="ghost" size="sm" className="text-finance-blue hover:text-finance-blue/80">
              View All
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>

          {/* Spending Tab Content */}
          <TabsContent value="spending" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Monthly Spending Chart */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Monthly Spending</CardTitle>
                  <CardDescription>Your spending pattern over the last 12 months</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <ChartContainer
                    config={{
                      spending: { 
                        color: "#8B5CF6",
                        label: "Monthly Spending" 
                      },
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlySpendingData}>
                        <XAxis 
                          dataKey="month" 
                          axisLine={false}
                          tickLine={false}
                          tickMargin={10}
                        />
                        <YAxis 
                          axisLine={false}
                          tickLine={false}
                          tickMargin={10}
                          tickFormatter={(value) => `$${value}`}
                        />
                        <ChartTooltip 
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="bg-white p-2 border rounded shadow-sm">
                                  <p className="font-medium">{`$${payload[0].value}`}</p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Bar dataKey="amount">
                          {monthlySpendingData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill="#8B5CF6" />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Spending by Category */}
              <Card>
                <CardHeader>
                  <CardTitle>Spending by Category</CardTitle>
                  <CardDescription>How your spending is distributed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {categoryBreakdown.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{category.category}</span>
                          <span className="text-sm text-gray-600">
                            ${category.amount} ({category.percentage}%)
                          </span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-finance-blue rounded-full"
                            style={{ width: `${category.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Transactions */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Your latest spending activities</CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="text-finance-blue hover:text-finance-blue/80">
                  View All
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Merchant</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Tags</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentTransactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-medium">{transaction.merchant}</TableCell>
                        <TableCell>{transaction.category}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {transaction.tags.map((tag, i) => (
                              <span 
                                key={i}
                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className={`text-right font-medium ${
                          transaction.amount > 0 ? "text-finance-success" : ""
                        }`}>
                          {transaction.amount > 0 ? "+" : ""}
                          ${Math.abs(transaction.amount).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Other Tabs - Placeholder Content */}
          <TabsContent value="income">
            <Card>
              <CardHeader>
                <CardTitle>Income Analysis</CardTitle>
                <CardDescription>Track and analyze your income sources</CardDescription>
              </CardHeader>
              <CardContent className="h-96 flex items-center justify-center">
                <div className="text-center">
                  <DollarSign size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium mb-2">Income Analysis</h3>
                  <p className="text-gray-500">Detailed income analytics will appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends">
            <Card>
              <CardHeader>
                <CardTitle>Financial Trends</CardTitle>
                <CardDescription>Long-term patterns in your financial behavior</CardDescription>
              </CardHeader>
              <CardContent className="h-96 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium mb-2">Trend Analysis</h3>
                  <p className="text-gray-500">Detailed trend analytics will appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="predictions">
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Predictions</CardTitle>
                <CardDescription>Smart forecasts based on your financial history</CardDescription>
              </CardHeader>
              <CardContent className="h-96 flex items-center justify-center">
                <div className="text-center">
                  <PieChart size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium mb-2">Predictive Analytics</h3>
                  <p className="text-gray-500">AI predictions will appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default DashboardInsights;
