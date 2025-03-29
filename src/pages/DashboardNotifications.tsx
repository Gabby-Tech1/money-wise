import { FC, useState } from "react";
import { Check, Filter, MoreHorizontal, Trash } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Types for our notifications
interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  date: string;
  read: boolean;
  category: "system" | "security" | "portfolio" | "feature";
}

const DashboardNotifications: FC = () => {
  // Sample notifications - in a real app, these would come from your backend
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Portfolio update",
      message: "Your investment portfolio has grown by 2.3% this week.",
      time: "10:32 AM",
      date: "Today",
      read: false,
      category: "portfolio",
    },
    {
      id: 2,
      title: "New feature available",
      message: "Check out our new automation tools for investing.",
      time: "2:45 PM",
      date: "Yesterday",
      read: false,
      category: "feature",
    },
    {
      id: 3,
      title: "Account security alert",
      message: "We've detected a new login to your account.",
      time: "11:20 AM",
      date: "Mar 15, 2023",
      read: true,
      category: "security",
    },
    {
      id: 4,
      title: "Maintenance notification",
      message: "Scheduled maintenance will occur on March 20th from 2-4 AM EST.",
      time: "9:15 AM",
      date: "Mar 14, 2023",
      read: true,
      category: "system",
    },
    {
      id: 5,
      title: "Stock movement alert",
      message: "AAPL has increased by 5% today.",
      time: "3:30 PM",
      date: "Mar 10, 2023",
      read: true,
      category: "portfolio",
    },
  ]);

  // Function to mark notification as read
  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Function to mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, read: true }))
    );
  };

  // Function to delete notification
  const deleteNotification = (id: number) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  // Function to clear all notifications
  const clearAllNotifications = () => {
    setNotifications([]);
  };

  // Count unread notifications
  const unreadCount = notifications.filter((n) => !n.read).length;

  // Get category badge color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "security":
        return "bg-red-100 text-red-800";
      case "portfolio":
        return "bg-green-100 text-green-800";
      case "feature":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Notifications</h1>
            <p className="text-gray-500">
              {unreadCount > 0
                ? `You have ${unreadCount} unread notification${
                    unreadCount > 1 ? "s" : ""
                  }`
                : "No new notifications"}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={markAllAsRead}>
              <Check className="mr-2 h-4 w-4" />
              Mark all as read
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={clearAllNotifications}
              className="text-finance-danger hover:bg-red-50"
            >
              <Trash className="mr-2 h-4 w-4" />
              Clear all
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="read">Read</TabsTrigger>
            </TabsList>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>All categories</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Portfolio</DropdownMenuItem>
                <DropdownMenuItem>Security</DropdownMenuItem>
                <DropdownMenuItem>System</DropdownMenuItem>
                <DropdownMenuItem>Feature</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <TabsContent value="all">
            {renderNotificationsTable(notifications, { markAsRead, deleteNotification, getCategoryColor })}
          </TabsContent>
          
          <TabsContent value="unread">
            {renderNotificationsTable(
              notifications.filter((n) => !n.read),
              { markAsRead, deleteNotification, getCategoryColor }
            )}
          </TabsContent>
          
          <TabsContent value="read">
            {renderNotificationsTable(
              notifications.filter((n) => n.read),
              { markAsRead, deleteNotification, getCategoryColor }
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

// Helper function to render notifications table
interface TableHelperProps {
  markAsRead: (id: number) => void;
  deleteNotification: (id: number) => void;
  getCategoryColor: (category: string) => string;
}

function renderNotificationsTable(notifications: Notification[], helpers: TableHelperProps) {
  const { markAsRead, deleteNotification, getCategoryColor } = helpers;

  if (notifications.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-md">
        <p className="text-gray-500">No notifications found</p>
      </div>
    );
  }

  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Title</TableHead>
            <TableHead>Message</TableHead>
            <TableHead className="w-[120px]">Date</TableHead>
            <TableHead className="w-[100px]">Category</TableHead>
            <TableHead className="w-[80px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notifications.map((notification) => (
            <TableRow key={notification.id} className={notification.read ? "" : "bg-blue-50"}>
              <TableCell className="font-medium">{notification.title}</TableCell>
              <TableCell>{notification.message}</TableCell>
              <TableCell>
                <div>{notification.date}</div>
                <div className="text-xs text-gray-500">{notification.time}</div>
              </TableCell>
              <TableCell>
                <Badge 
                  variant="outline" 
                  className={`${getCategoryColor(notification.category)} border-0 capitalize`}
                >
                  {notification.category}
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {!notification.read && (
                      <DropdownMenuItem onClick={() => markAsRead(notification.id)}>
                        <Check className="mr-2 h-4 w-4" />
                        Mark as read
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem onClick={() => deleteNotification(notification.id)}>
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default DashboardNotifications;
