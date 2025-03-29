import { FC, useState } from "react";
import type { Transaction } from "@/types/transaction";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  ChevronRight,
  // DollarSign,
  Filter,
  // PieChart,
  // TrendingUp,
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
import { TransactionsModal } from "@/components/TransactionsModal";
import { ReportModal } from "@/components/ReportModal";

const DashboardInsights: FC = () => {
  const [isTransactionsModalOpen, setIsTransactionsModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

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

  // const categoryBreakdown = [
  //   { category: "Housing", percentage: 35, amount: 850 },
  //   { category: "Food", percentage: 18, amount: 435 },
  //   { category: "Transportation", percentage: 12, amount: 290 },
  //   { category: "Utilities", percentage: 10, amount: 242 },
  //   { category: "Entertainment", percentage: 8, amount: 193 },
  //   { category: "Shopping", percentage: 7, amount: 169 },
  //   { category: "Health", percentage: 6, amount: 145 },
  //   { category: "Other", percentage: 4, amount: 97 },
  // ];

  const recentTransactions: Transaction[] = [
    {
      id: 1,
      merchant: "Mobile Money",  // Updated to match literal type
      category: "Transfer",
      date: "2024-01-20",
      amount: 500,
      time: "14:30"
    },
    {
      id: 2,
      merchant: "Bank Transfer",
      category: "Credit",
      date: "Dec 14, 2023",
      amount: 129.99,
      time: "02:30 PM"
    },
    {
      id: 3,
      merchant: "Mobile Money",
      category: "Debit",
      date: "Dec 12, 2023",
      amount: -17.99,
      time: "11:20 AM"
    },
    {
      id: 4,
      merchant: "Bank Transfer",
      category: "Debit",
      date: "Dec 10, 2023",
      amount: -45.23,
      time: "04:15 PM"
    },
    {
      id: 5,
      merchant: "Bank Transfer",
      category: "Credit",
      date: "Dec 8, 2023",
      amount: 2865.33,
      time: "08:00 AM"
    },
  ];

  // Add more sample data for other tabs
  const incomeData = [
    { source: "Salary", amount: 5000 },
    { source: "Freelance", amount: 1200 },
    { source: "Investments", amount: 800 },
  ];

  const trendsData = [
    { month: "Jan", spending: 1450, income: 5800 },
    { month: "Feb", spending: 1320, income: 5800 },
    { month: "Mar", spending: 1600, income: 6000 },
    // ...add more months
  ];

  // Add chart configurations
  const spendingChartConfig = {
    spending: { 
      color: "#8B5CF6",
      label: "Monthly Spending" 
    }
  };

  const incomeChartConfig = {
    income: {
      color: "#10B981",
      label: "Monthly Income"
    }
  };

  const trendsChartConfig = {
    income: {
      color: "#10B981",
      label: "Income"
    },
    spending: {
      color: "#EF4444",
      label: "Spending"
    }
  };

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
            <Button 
              onClick={() => setIsReportModalOpen(true)}
              className="bg-finance-gradient text-white hover:bg-finance-blue/90"
            >
              <BarChart3 size={16} className="mr-2" />
              Generate Report
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
            {/* <Button variant="ghost" size="sm" className="text-finance-blue hover:text-finance-blue/80">
              View All
              <ChevronRight size={16} className="ml-1" />
            </Button> */}
          </div>

          {/* Spending Tab Content */}
          <TabsContent value="spending" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {/* Monthly Spending Chart */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Monthly Spending</CardTitle>
                  <CardDescription>Your spending pattern over the last 12 months</CardDescription>
                </CardHeader>
                <CardContent className="h-full">
                  <ChartContainer config={spendingChartConfig}>
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
            </div>

            {/* Recent Transactions */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Your latest spending activities</CardDescription>
                </div>
                <Button 
                  onClick={() => setIsTransactionsModalOpen(true)} 
                  variant="ghost" 
                  size="sm" 
                  className="text-finance-blue hover:text-white"
                >
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
                      <TableHead>Time</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentTransactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-medium">{transaction.merchant}</TableCell>
                        <TableCell>{transaction.category}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.time}</TableCell>
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

          {/* Income Tab Content */}
          <TabsContent value="income">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Income Sources</CardTitle>
                  <CardDescription>Breakdown of your income streams</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Source</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {incomeData.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.source}</TableCell>
                          <TableCell className="text-right text-finance-success">
                            ${item.amount}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Income Trends</CardTitle>
                  <CardDescription>Monthly income patterns</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ChartContainer config={incomeChartConfig}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={trendsData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip />
                        <Bar dataKey="income" fill="#10B981" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Trends Tab Content */}
          <TabsContent value="trends">
            <Card>
              <CardHeader>
                <CardTitle>Financial Trends Analysis</CardTitle>
                <CardDescription>Compare income vs. spending over time</CardDescription>
              </CardHeader>
              <CardContent className="h-full">
                <ChartContainer config={trendsChartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={trendsData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip />
                      <Bar dataKey="income" fill="#10B981" stackId="a" />
                      <Bar dataKey="spending" fill="#EF4444" stackId="a" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Predictions Tab Content */}
          <TabsContent value="predictions">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Spending Forecast</CardTitle>
                  <CardDescription>AI-powered spending predictions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium mb-2">Next Month's Estimated Spending</h4>
                      <p className="text-2xl font-bold text-finance-blue">$1,750</p>
                      <p className="text-sm text-gray-500">Based on historical patterns</p>
                    </div>
                    {/* Add more prediction insights */}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Savings Potential</CardTitle>
                  <CardDescription>Opportunities to save</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium mb-2">Potential Monthly Savings</h4>
                      <p className="text-2xl font-bold text-finance-success">$320</p>
                      <p className="text-sm text-gray-500">Based on spending optimization</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <TransactionsModal
        isOpen={isTransactionsModalOpen}
        onClose={() => setIsTransactionsModalOpen(false)}
        transactions={recentTransactions}
      />
      <ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />
    </DashboardLayout>
  );
};

export default DashboardInsights;
