
import { FC } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import {
  UserCircle,
  CreditCard,
  Lock,
  BellRing,
  Settings,
} from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// Imported components
import ProfileTab from "@/components/settings/ProfileTab";
import AccountsTab from "@/components/settings/AccountsTab";
import SecurityTab from "@/components/settings/SecurityTab"; 
import NotificationsTab from "@/components/settings/NotificationsTab";
import PreferencesTab from "@/components/settings/PreferencesTab";

const DashboardSettings: FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Account Settings</h1>
          <p className="text-gray-600">Manage your profile, security, and preferences</p>
        </div>

        {/* Settings Tabs */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-4">
            <TabsTrigger value="profile" className="flex gap-2 items-center">
              <UserCircle className="h-4 w-4" />
              <span className="hidden md:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="accounts" className="flex gap-2 items-center">
              <CreditCard className="h-4 w-4" />
              <span className="hidden md:inline">Accounts</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex gap-2 items-center">
              <Lock className="h-4 w-4" />
              <span className="hidden md:inline">Security</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex gap-2 items-center">
              <BellRing className="h-4 w-4" />
              <span className="hidden md:inline">Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="preferences" className="flex gap-2 items-center">
              <Settings className="h-4 w-4" />
              <span className="hidden md:inline">Preferences</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <ProfileTab />
          </TabsContent>

          {/* Connected Accounts Tab */}
          <TabsContent value="accounts">
            <AccountsTab />
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security">
            <SecurityTab />
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <NotificationsTab />
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences">
            <PreferencesTab />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default DashboardSettings;
