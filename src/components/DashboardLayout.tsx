import { FC, ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Home,
  BarChart3,
  Wallet,
  RefreshCcw,
  Settings,
  Bell,
  Search,
  UserCircle,
  LogOut,
  Menu,
  X,
  Settings2,
  MessageSquare,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/use-auth";

// Add interface for notification type
interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
  category?: string;
}

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  // const userEmail = user?.email || 'User';
  const userInitials = user?.first_name?.charAt(0).toUpperCase() || 'U';
  const userFullname = `${user?.first_name || ''} ${user?.last_name || ''}`.trim() || 'User';

  const navItems = [
    { icon: Home, name: "Overview", path: "/dashboard" },
    { icon: BarChart3, name: "Insights", path: "/dashboard/insights" },
    { icon: Wallet, name: "Investments", path: "/dashboard/investments" },
    { icon: RefreshCcw, name: "Automation", path: "/dashboard/automation" },
    { icon: MessageSquare, name: "Financial Advisor", path: "/dashboard/advisor" },
    { icon: Bell, name: "Notification", path: "/dashboard/notifications" },
    { icon: Settings, name: "Settings", path: "/dashboard/settings" },
    // { icon: HelpCircle, name: "Help", path: "/dashboard/help" },
  ];

  // Sample notifications with added category field
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Portfolio update",
      message: "Your investment portfolio has grown by 2.3% this week.",
      time: "10 minutes ago",
      read: false,
      category: "portfolio",
    },
    {
      id: 2,
      title: "New feature",
      message: "Check out our new automation tools for investing.",
      time: "2 hours ago",
      read: false,
      category: "feature",
    },
    {
      id: 3,
      title: "Account security",
      message: "We've detected a new login to your account.",
      time: "Yesterday",
      read: true,
      category: "security",
    },
  ]);
  
  const unreadNotifications = notifications.filter(n => !n.read).length;
  
  // Add function to mark a notification as read
  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Function to close sidebar (useful for mobile navigation)
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar - responsive */}
      <div 
        className={`fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 overflow-y-auto z-30 transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex items-center justify-between px-2 py-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-finance-gradient">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-bold text-xl finance-gradient-text">MoneyWise</span>
            </div>
            <button 
              onClick={closeSidebar} 
              className="p-1 rounded-full hover:bg-gray-100 lg:hidden"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="mt-8 flex-1">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
                        isActive
                          ? "bg-finance-gradient text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={closeSidebar}
                    >
                      <item.icon size={20} />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-auto pt-4 border-t">
            <Link to="/logout" onClick={handleLogout} className="flex items-center cursor-pointer text-finance-danger">
              <Button
                variant="ghost"
                className="w-full justify-start text-gray-700 font-medium hover:bg-gray-100 hover:text-gray-900">
                <LogOut size={20} className="mr-3" />
                Logout
              </Button>
            </Link>
            
          </div>
        </div>
      </div>

      {/* Main content - responsive margin */}
      <div className="flex-1 lg:ml-64">
        {/* Top navigation - responsive */}
        <header className="fixed top-0 right-0 left-0 lg:left-64 bg-white border-b z-20 shadow-sm">
          <div className="flex items-center justify-between px-4 h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-gray-700 p-2 rounded-md hover:bg-gray-100 mr-2"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>

              <div className="lg:hidden flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-finance-gradient">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="font-bold text-lg finance-gradient-text">MoneyWise</span>
              </div>
            </div>

            <div className="hidden md:block flex-1 max-w-md ml-4">
              <div className="relative">
                <Search
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-finance-blue focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              <button className="md:hidden text-gray-700 p-2 rounded-md hover:bg-gray-100">
                <Search size={20} />
              </button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="relative text-gray-700 p-1 rounded-full hover:bg-gray-100">
                    <Bell size={22} />
                    {unreadNotifications > 0 && (
                      <span className="absolute top-0 right-0 w-2 h-2 bg-finance-danger rounded-full"></span>
                    )}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel className="flex justify-between items-center">
                    <span>Notifications</span>
                    {unreadNotifications > 0 && (
                      <span className="bg-finance-danger text-white text-xs px-2 py-0.5 rounded-full">
                        {unreadNotifications} new
                      </span>
                    )}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  
                  {notifications.length === 0 ? (
                    <div className="py-4 text-center text-gray-500">
                      No notifications
                    </div>
                  ) : (
                    notifications.slice(0, 5).map((notification) => (
                      <DropdownMenuItem key={notification.id} className="p-0" onSelect={() => markAsRead(notification.id)}>
                        <div className={`p-3 w-full ${notification.read ? '' : 'bg-gray-50'}`}>
                          <div className="flex justify-between items-start">
                            <div className="font-medium text-sm">{notification.title}</div>
                            <div className="text-xs text-gray-500">{notification.time}</div>
                          </div>
                          <div className="text-sm text-gray-600 mt-1">{notification.message}</div>
                        </div>
                      </DropdownMenuItem>
                    ))
                  )}
                  
                  <DropdownMenuSeparator />
                  <div className="text-center p-2">
                    <Link to="/dashboard/notifications" className="text-sm text-finance-blue hover:underline">
                      View all notifications
                    </Link>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 hover:bg-gray-100 p-1.5 rounded-lg transition-colors">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-finance-gradient flex items-center justify-center text-white font-medium">
                      {userInitials}
                    </div>
                    <span className="hidden md:inline-block font-medium">{userFullname}</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="flex items-center gap-2 p-2">
                    <div className="w-10 h-10 rounded-full bg-finance-gradient flex items-center justify-center text-white font-medium">
                      {userInitials}
                    </div>
                    <div>
                      <p className="font-medium">{userFullname}</p>
                      <p className="text-xs text-gray-500">Logged in</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard/profile" className="flex items-center cursor-pointer">
                      <UserCircle className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard/settings" className="flex items-center cursor-pointer">
                      <Settings2 className="mr-2 h-4 w-4" />
                      <span>Account Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/logout" onClick={handleLogout} className="flex items-center cursor-pointer text-finance-danger">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        
        {/* Main content with responsive padding */}
        <div className="pt-16">
          <main className="p-3 sm:p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
