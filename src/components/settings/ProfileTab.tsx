import { FC } from "react";
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProfileTab: FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>
          Update your personal details and public profile
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-finance-gradient flex items-center justify-center text-white text-2xl font-bold">
                JD
              </div>
              <Button
                variant="secondary"
                size="sm"
                className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0"
              >
                <UserCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="firstName">
                  First Name
                </label>
                <input
                  id="firstName"
                  className="w-full p-2 border rounded-md"
                  value="John"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  id="lastName"
                  className="w-full p-2 border rounded-md"
                  value="Doe"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 border rounded-md"
                  value="john.doe@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  className="w-full p-2 border rounded-md"
                  value="(555) 123-4567"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="dob">
                  Date of Birth
                </label>
                <input
                  id="dob"
                  type="date"
                  className="w-full p-2 border rounded-md"
                  value="1985-06-15"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="country">
                  Country
                </label>
                <select id="country" className="w-full p-2 border rounded-md">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t flex justify-end">
          <div className="flex gap-3">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileTab;
