import { FC, useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  ChevronRight,
  DollarSign,
  PiggyBank,
  TrendingDown,
  TrendingUp,
  Building2 as Bank,  // Change Bank to Building2
  Phone,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface UserDetails {
  first_name: string;
  email: string;
  id: string;
}

const Dashboard: FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [_, setIsLoadingUser] = useState(true);
  
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        const response = await fetch('https://cashflow-backend-yko9.onrender.com/api/auth/me', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }

        const data = await response.json();
        setUserDetails(data);
      } catch (error) {
        console.error('Error fetching user details:', error);
        toast.error('Failed to load user details');
      } finally {
        setIsLoadingUser(false);
      }
    };

    fetchUserDetails();
  }, []);

  
 
  // Modal states
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [accountType, setAccountType] = useState<"bank" | "mobile" | null>(null);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  
  // Form states
  const [bankForm, setBankForm] = useState({
    accountNumber: "",
    accountName: "",
    phoneNumber: ""
  });
  
  const [mobileForm, setMobileForm] = useState({
    name: "",
    phoneNumber: ""
  });
  
  // Handle account type selection
  const handleAccountTypeSelect = (type: "bank" | "mobile") => {
    setAccountType(type);
  };
  
  // Handle form submission
  const handleSubmitAccountForm = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAccountModal(false);
    setShowOtpModal(true);
  };
  
  // Handle OTP verification with enhanced feedback
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show loading state (optional)
    const accountTypeLabel = accountType === "bank" ? "bank" : "mobile money";
    
    // Close the modal
    setShowOtpModal(false);
    
    // Show success toast with enhanced message - remove variant that might be causing issues
    toast.success(`Your ${accountTypeLabel} account has been successfully connected!`);
    
    // Reset states
    setAccountType(null);
    setOtpCode("");
    setBankForm({
      accountNumber: "",
      accountName: "",
      phoneNumber: ""
    });
    setMobileForm({
      name: "",
      phoneNumber: ""
    });
  };
  
  // Add function to handle OTP input to allow only numbers
  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numeric input
    if (/^\d*$/.test(value) && value.length <= 6) {
      setOtpCode(value);
    }
  };

  // Handle bank form change
  const handleBankFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBankForm({
      ...bankForm,
      [e.target.name]: e.target.value
    });
  };
  
  // Handle mobile form change
  const handleMobileFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobileForm({
      ...mobileForm,
      [e.target.name]: e.target.value
    });
  };

  // Dummy data for dashboard
  const accountBalances = [
    { name: "Total Amount", balance: 5240.12, change: 2.3, type: "up" },
    { name: "Amount Remaining", balance: 12750.88, change: 4.7, type: "up" },
    { name: "Amount Debited", balance: -1850.44, change: 12.5, type: "down" },
    { name: "AI Investment", balance: 34215.50, change: -1.2, type: "down" },
  ];

  // const recentTransactions = [
  //   { name: "Grocery Store", amount: -123.45, category: "Food & Dining", date: "Today" },
  //   { name: "Salary Deposit", amount: 3200.00, category: "Income", date: "Yesterday" },
  //   { name: "Electric Bill", amount: -94.20, category: "Utilities", date: "May 15, 2023" },
  //   { name: "Netflix Subscription", amount: -17.99, category: "Entertainment", date: "May 14, 2023" },
  //   { name: "Gas Station", amount: -45.30, category: "Transportation", date: "May 12, 2023" },
  // ];

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
      {/* Remove duplicate Toaster since it's already in DashboardLayout */}
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Financial Overview</h1>
              <p className="text-gray-600">
                Welcome back, {userDetails?.first_name}! Here's your financial summary.
              </p>
          </div>
          <div className="hidden md:block">
            <Button 
              className="bg-finance-gradient hover:bg-finance-blue"
              onClick={() => setShowAccountModal(true)}
            >
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

        {/* Account Selection Modal */}
        <Dialog open={showAccountModal} onOpenChange={setShowAccountModal}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Financial Account</DialogTitle>
              <DialogDescription>
                Choose an account type to connect to your dashboard.
              </DialogDescription>
            </DialogHeader>
            
            {!accountType ? (
              <div className="grid grid-cols-2 gap-4 py-4">
                <Card 
                  className={`p-4 cursor-pointer hover:border-finance-blue transition-colors`}
                  onClick={() => handleAccountTypeSelect("bank")}
                >
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="p-3 rounded-full bg-finance-blue/10 text-finance-blue">
                      <Bank size={24} />
                    </div>
                    <h3 className="font-semibold">Bank Account</h3>
                    <p className="text-sm text-gray-500">Connect your traditional bank account</p>
                  </div>
                </Card>
                
                <Card 
                  className={`p-4 cursor-pointer hover:border-finance-blue transition-colors`}
                  onClick={() => handleAccountTypeSelect("mobile")}
                >
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="p-3 rounded-full bg-finance-teal/10 text-finance-teal">
                      <Phone size={24} />
                    </div>
                    <h3 className="font-semibold">Mobile Money</h3>
                    <p className="text-sm text-gray-500">Connect your mobile money account</p>
                  </div>
                </Card>
              </div>
            ) : (
              <form onSubmit={handleSubmitAccountForm} className="space-y-4 py-4">
                {accountType === "bank" ? (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="accountNumber">Account Number</Label>
                      <Input 
                        id="accountNumber" 
                        name="accountNumber"
                        value={bankForm.accountNumber}
                        onChange={handleBankFormChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="accountName">Account Name</Label>
                      <Input 
                        id="accountName" 
                        name="accountName"
                        value={bankForm.accountName}
                        onChange={handleBankFormChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber">Registered Phone Number</Label>
                      <Input 
                        id="phoneNumber" 
                        name="phoneNumber"
                        value={bankForm.phoneNumber}
                        onChange={handleBankFormChange}
                        required
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name"
                        value={mobileForm.name}
                        onChange={handleMobileFormChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber">Phone Number</Label>
                      <Input 
                        id="phoneNumber" 
                        name="phoneNumber"
                        value={mobileForm.phoneNumber}
                        onChange={handleMobileFormChange}
                        required
                      />
                    </div>
                  </>
                )}
                <DialogFooter className="flex justify-between items-center pt-4">
                  <Button 
                    variant="outline" 
                    type="button" 
                    onClick={() => setAccountType(null)}
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-finance-blue hover:bg-finance-blue/90"
                  >
                    Continue
                  </Button>
                </DialogFooter>
              </form>
            )}
          </DialogContent>
        </Dialog>

        {/* OTP Verification Modal */}
        <Dialog open={showOtpModal} onOpenChange={(open) => {
          // If user tries to close modal manually, warn them the process will be canceled
          if (!open) {
            const confirmClose = window.confirm("Are you sure you want to cancel adding your account?");
            if (confirmClose) {
              setShowOtpModal(false);
              setAccountType(null);
              setOtpCode("");
            }
          } else {
            setShowOtpModal(open);
          }
        }}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Verify Your Account</DialogTitle>
              <DialogDescription>
                We've sent a verification code to your {accountType === "bank" ? "registered phone number" : "mobile number"}. 
                Enter it below to complete the process.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleVerifyOtp} className="space-y-6 py-4">
              <div className="space-y-2">
                <Label htmlFor="otp">OTP Code</Label>
                <Input 
                  id="otp" 
                  value={otpCode}
                  onChange={handleOtpChange}
                  type="tel"
                  inputMode="numeric"
                  pattern="\d{6}"
                  maxLength={6}
                  placeholder="Enter 6-digit code"
                  className="text-center text-xl tracking-widest"
                  required
                  autoFocus
                />
                <p className="text-xs text-gray-500">Enter the 6-digit code sent to your device</p>
              </div>
              
              <DialogFooter>
                <Button 
                  type="submit"
                  className="w-full bg-finance-blue hover:bg-finance-blue/90"
                  disabled={otpCode.length !== 6}
                >
                  Verify & Connect
                </Button>
              </DialogFooter>
              
              <div className="text-sm text-center text-gray-500">
                Didn't receive a code? <Button variant="link" className="p-0 h-auto" type="button">Resend</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

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
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
