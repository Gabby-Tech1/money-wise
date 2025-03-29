
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { 
  Link, 
  Unlink, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// interface Account {
//   id: number;
//   name: string;
//   type: string;
//   status: string;
//   lastSync: string;
//   balance: number;
// }

const AccountsTab: FC = () => {
  // Mock connected accounts
  const connectedAccounts = [
    {
      id: 1,
      name: "Chase Bank",
      type: "Checking & Savings",
      status: "Connected",
      lastSync: "Today at 9:43 AM",
      balance: 5240.12,
    },
    {
      id: 2,
      name: "Vanguard",
      type: "Investment",
      status: "Connected",
      lastSync: "Today at 9:43 AM",
      balance: 134650.78,
    },
    {
      id: 3,
      name: "American Express",
      type: "Credit Card",
      status: "Connected",
      lastSync: "Today at 9:43 AM",
      balance: -1457.23,
    },
    {
      id: 4,
      name: "Bank of America",
      type: "Checking",
      status: "Connection Issue",
      lastSync: "3 days ago",
      balance: 2837.45,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Connected Financial Accounts</CardTitle>
        <CardDescription>
          Manage your linked bank accounts, credit cards, and investments
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-end">
          <Button className="bg-finance-gradient hover:bg-finance-blue">
            <Link className="h-4 w-4 mr-2" />
            Connect New Account
          </Button>
        </div>

        <div className="space-y-4">
          {connectedAccounts.map((account) => (
            <div
              key={account.id}
              className="border rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-700">
                  {account.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-medium">{account.name}</h3>
                  <p className="text-sm text-gray-500">{account.type}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 ml-auto">
                <div className="text-right">
                  <div
                    className={`text-lg font-semibold ${
                      account.balance < 0 ? "text-finance-danger" : ""
                    }`}
                  >
                    {account.balance < 0 ? "-" : ""}$
                    {Math.abs(account.balance).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                  <div className="text-xs text-gray-500">
                    {account.status === "Connected" ? (
                      <span className="flex items-center gap-1 text-finance-success">
                        <CheckCircle2 className="h-3 w-3" />
                        Connected · {account.lastSync}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-finance-warning">
                        <AlertCircle className="h-3 w-3" />
                        Connection Issue · {account.lastSync}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8"
                  >
                    Refresh
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 text-gray-500 hover:text-finance-danger"
                  >
                    <Unlink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border rounded-lg border-dashed p-6 text-center">
          <div className="flex justify-center mb-3">
            <Link className="h-10 w-10 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium mb-1">Connect More Accounts</h3>
          <p className="text-gray-500 mb-4">
            Link your other financial accounts for a complete financial picture
          </p>
          <Button>Connect Account</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountsTab;
