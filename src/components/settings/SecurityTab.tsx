
import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Eye, EyeOff } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SecurityTab: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>
        <CardDescription>Manage your password and security preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Change Password</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="currentPassword">
                Current Password
              </label>
              <div className="relative">
                <input
                  id="currentPassword"
                  type={showPassword ? "text" : "password"}
                  className="w-full p-2 border rounded-md pr-10"
                  placeholder="••••••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="newPassword">
                New Password
              </label>
              <input
                id="newPassword"
                type="password"
                className="w-full p-2 border rounded-md"
                placeholder="••••••••••••"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="confirmPassword">
                Confirm New Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="w-full p-2 border rounded-md"
                placeholder="••••••••••••"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Update Password</Button>
          </div>
        </div>

        <div className="pt-6 border-t space-y-4">
          <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
          <div className="flex items-center justify-between p-4 border rounded-md">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-finance-blue" />
              <div>
                <h4 className="font-medium">Two-Factor Authentication</h4>
                <p className="text-sm text-gray-500">
                  Add an extra layer of security to your account
                </p>
              </div>
            </div>
            <Button variant="outline">Enable</Button>
          </div>
        </div>

        <div className="pt-6 border-t space-y-4">
          <h3 className="text-lg font-medium">Login Sessions</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 border rounded-md">
              <div>
                <div className="font-medium">Current Session</div>
                <div className="text-sm text-gray-500">
                  Windows 11 · Chrome · New York, USA
                </div>
              </div>
              <span className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded-full">
                Active Now
              </span>
            </div>
            <div className="flex justify-between items-center p-3 border rounded-md">
              <div>
                <div className="font-medium">iPhone 13</div>
                <div className="text-sm text-gray-500">
                  iOS 16 · Safari · New York, USA · 2 days ago
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-gray-500">
                Logout
              </Button>
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant="outline" className="text-finance-danger">
              Logout of All Devices
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityTab;
