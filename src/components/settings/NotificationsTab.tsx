
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const NotificationsTab: FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>
          Control how and when you receive notifications
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Email Notifications</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="email-transactions" />
                <label
                  htmlFor="email-transactions"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Transaction Alerts
                </label>
              </div>
              <span className="text-xs text-gray-500">
                Receive email for large transactions
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="email-bills" defaultChecked />
                <label
                  htmlFor="email-bills"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Bill Reminders
                </label>
              </div>
              <span className="text-xs text-gray-500">
                Get notified before bills are due
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="email-insights" defaultChecked />
                <label
                  htmlFor="email-insights"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Weekly Insights
                </label>
              </div>
              <span className="text-xs text-gray-500">
                Receive weekly financial summaries
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="email-marketing" />
                <label
                  htmlFor="email-marketing"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Marketing Communications
                </label>
              </div>
              <span className="text-xs text-gray-500">
                Updates on new features and offers
              </span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t space-y-4">
          <h3 className="text-lg font-medium">Push Notifications</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="push-transactions" defaultChecked />
                <label
                  htmlFor="push-transactions"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Transaction Alerts
                </label>
              </div>
              <span className="text-xs text-gray-500">
                Real-time transaction notifications
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="push-budget" defaultChecked />
                <label
                  htmlFor="push-budget"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Budget Alerts
                </label>
              </div>
              <span className="text-xs text-gray-500">
                Get notified when approaching budget limits
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="push-security" defaultChecked />
                <label
                  htmlFor="push-security"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Security Alerts
                </label>
              </div>
              <span className="text-xs text-gray-500">
                Important security notifications
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="push-investment" />
                <label
                  htmlFor="push-investment"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Investment Updates
                </label>
              </div>
              <span className="text-xs text-gray-500">
                Market changes and investment alerts
              </span>
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <Button>Save Preferences</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationsTab;
