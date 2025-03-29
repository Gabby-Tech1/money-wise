
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Download } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PreferencesTab: FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>App Preferences</CardTitle>
        <CardDescription>Customize your app experience</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Display Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="theme">
                Theme
              </label>
              <select id="theme" className="w-full p-2 border rounded-md">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="dateFormat">
                Date Format
              </label>
              <select id="dateFormat" className="w-full p-2 border rounded-md">
                <option>MM/DD/YYYY</option>
                <option>DD/MM/YYYY</option>
                <option>YYYY-MM-DD</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="currency">
                Default Currency
              </label>
              <select id="currency" className="w-full p-2 border rounded-md">
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
                <option>JPY (¥)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="language">
                Language
              </label>
              <select id="language" className="w-full p-2 border rounded-md">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t space-y-4">
          <h3 className="text-lg font-medium">Dashboard Preferences</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="show-accounts" defaultChecked />
                <label
                  htmlFor="show-accounts"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Show Account Balances
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="show-insights" defaultChecked />
                <label
                  htmlFor="show-insights"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Show AI Insights
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="show-investments" defaultChecked />
                <label
                  htmlFor="show-investments"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Show Investments Section
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="hide-amounts" />
                <label
                  htmlFor="hide-amounts"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Hide Amounts by Default
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t space-y-4">
          <h3 className="text-lg font-medium">Data & Privacy</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="data-collection" defaultChecked />
                <label
                  htmlFor="data-collection"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Usage Data Collection
                </label>
              </div>
              <span className="text-xs text-gray-500">
                Help improve the app by sharing usage data
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="personalized" defaultChecked />
                <label
                  htmlFor="personalized"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Personalized Recommendations
                </label>
              </div>
              <span className="text-xs text-gray-500">
                Get AI recommendations based on your data
              </span>
            </div>
          </div>
          <div className="flex justify-between pt-2">
            <Button variant="outline" className="text-finance-danger">
              <Download className="h-4 w-4 mr-2" />
              Download My Data
            </Button>
            <Button variant="outline" className="text-finance-danger">
              Delete Account
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PreferencesTab;
