
import { FC } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  BarChart3,
  ChevronRight,
  DollarSign,
  PiggyBank,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";

const Dashboard: FC = () => {
  // Dummy data for dashboard
  const accountBalances = [
    { name: "Checking Account", balance: 5240.12, change: 2.3, type: "up" },
    { name: "Savings Account", balance: 12750.88, change: 4.7, type: "up" },
    { name: "Investment Portfolio", balance: 34215.50, change: -1.2, type: "down" },
    { name: "Credit Card", balance: -1850.44, change: 12.5, type: "down" },
  ];

  const recentTransactions = [
    { name: "Grocery Store", amount: -123.45, category: "Food & Dining", date: "Today" },
    { name: "Salary Deposit", amount: 3200.00, category: "Income", date: "Yesterday" },
    { name: "Electric Bill", amount: -94.20, category: "Utilities", date: "May 15, 2023" },
    { name: "Netflix Subscription", amount: -17.99, category: "Entertainment", date: "May 14, 2023" },
    { name: "Gas Station", amount: -45.30, category: "Transportation", date: "May 12, 2023" },
  ];

  const insights = [
    {
      title: "Spending Reduced",
      description: "Your dining out expenses were 15% lower than last month. Great job!",
      icon: TrendingDown,
      iconColor: "text-finance-success",
    },
    {
      title: "Unusual Expense",
      description: "We detected an unusual $59.99 subscription charge yesterday.",
      icon: DollarSign,
      iconColor: "text-finance-warning",
    },
    {
      title: "Savings Opportunity",
      description: "You could save $240 annually by switching phone plans.",
      icon: PiggyBank,
      iconColor: "text-finance-blue",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Financial Overview</h1>
            <p className="text-gray-600">Welcome back, John! Here's your financial summary.</p>
          </div>
          <div className="hidden md:block">
            <Button className="bg-finance-gradient hover:bg-finance-blue">
              <PiggyBank size={18} className="mr-2" />
              Add Account
            </Button>
          </div>
        </div>

        {/* Account Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accountBalances.map((account, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-medium text-gray-600">{account.name}</h3>
                {account.type === "up" ? (
                  <div className="flex items-center text-finance-success">
                    <TrendingUp size={16} />
                    <span className="ml-1 text-sm">{account.change}%</span>
                  </div>
                ) : (
                  <div className="flex items-center text-finance-danger">
                    <TrendingDown size={16} />
                    <span className="ml-1 text-sm">{account.change}%</span>
                  </div>
                )}
              </div>
              <div className="text-2xl font-bold">
                ${Math.abs(account.balance).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {account.balance < 0 ? "You owe" : "Available balance"}
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid - Insights and Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* AI Insights */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">AI Insights</h2>
                <Button variant="ghost" size="sm" className="text-finance-blue hover:text-finance-blue/80">
                  View All
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </div>

              <div className="space-y-5">
                {insights.map((insight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className={`p-2 rounded-full ${insight.iconColor} bg-opacity-10`}>
                      <insight.icon size={20} className={insight.iconColor} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{insight.title}</h3>
                      <p className="text-sm text-gray-600">{insight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Budget */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Monthly Budget</h2>
                <Button variant="ghost" size="sm" className="text-finance-blue hover:text-finance-blue/80">
                  Manage
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </div>

              <div className="space-y-4">
                {[
                  { category: "Food & Dining", current: 430, budget: 600, color: "bg-finance-blue" },
                  { category: "Entertainment", current: 120, budget: 200, color: "bg-finance-purple" },
                  { category: "Transportation", current: 250, budget: 300, color: "bg-finance-teal" },
                ].map((item, index) => {
                  const percentage = Math.min(100, Math.round((item.current / item.budget) * 100));
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{item.category}</span>
                        <span className="text-sm text-gray-600">
                          ${item.current} <span className="text-gray-400">/ ${item.budget}</span>
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Transactions and Spending Chart */}
          <div className="lg:col-span-2 space-y-6">
            {/* Spending Chart */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Spending Analysis</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Weekly
                  </Button>
                  <Button size="sm" className="bg-finance-blue text-white hover:bg-finance-blue/90">
                    Monthly
                  </Button>
                </div>
              </div>

              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center text-gray-500 flex flex-col items-center">
                  <BarChart3 size={36} className="mb-2 text-gray-400" />
                  <span>Spending chart visualization would appear here</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { category: "Food", amount: 650, color: "bg-finance-blue" },
                  { category: "Shopping", amount: 420, color: "bg-finance-purple" },
                  { category: "Transport", amount: 310, color: "bg-finance-teal" },
                ].map((item, index) => (
                  <div key={index} className="text-center p-3 rounded-lg bg-gray-50">
                    <div
                      className={`w-3 h-3 rounded-full ${item.color} mx-auto mb-2`}
                    ></div>
                    <div className="font-medium">${item.amount}</div>
                    <div className="text-xs text-gray-500">{item.category}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Recent Transactions</h2>
                <Button variant="ghost" size="sm" className="text-finance-blue hover:text-finance-blue/80">
                  View All
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </div>

              <div className="space-y-4">
                {recentTransactions.map((transaction, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-2 rounded-full ${
                          transaction.amount > 0 ? "bg-green-100" : "bg-gray-100"
                        }`}
                      >
                        {transaction.amount > 0 ? (
                          <ArrowUpRight
                            size={20}
                            className="text-finance-success"
                          />
                        ) : (
                          <Wallet size={20} className="text-gray-500" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{transaction.name}</div>
                        <div className="text-xs text-gray-500">
                          {transaction.category} • {transaction.date}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`font-medium ${
                        transaction.amount > 0
                          ? "text-finance-success"
                          : "text-gray-700"
                      }`}
                    >
                      {transaction.amount > 0 ? "+" : ""}$
                      {Math.abs(transaction.amount).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
