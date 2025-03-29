import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "@/components/ProtectedRoute";

// Pages
import Index from "./pages/Index";
import Features from "./pages/Features";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import DashboardInsights from "./pages/DashboardInsights";
import DashboardInvestments from "./pages/DashboardInvestments";
import DashboardAutomation from "./pages/DashboardAutomation";
import DashboardSettings from "./pages/DashboardSettings";
import DashboardNotification from "./pages/DashboardNotifications";
import NotFound from "./pages/NotFound";
import DashboardAdvisor from "./pages/DashboardAdvisor";
import Logout from "./pages/Logout";
import { AuthContextProvider } from "./hooks/use-auth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthContextProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<Features />} />
            <Route path="/help" element={<Help />} />
            <Route path="/contact" element={<Contact />} />

            {/* Authentication Pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/logout" element={<Logout />} />

            {/* Protected Dashboard Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/insights"
              element={
                <ProtectedRoute>
                  <DashboardInsights />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/investments"
              element={
                <ProtectedRoute>
                  <DashboardInvestments />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/automation"
              element={
                <ProtectedRoute>
                  <DashboardAutomation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/settings"
              element={
                <ProtectedRoute>
                  <DashboardSettings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/notifications"
              element={
                <ProtectedRoute>
                  <DashboardNotification />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/advisor"
              element={
                <ProtectedRoute>
                  <DashboardAdvisor />
                </ProtectedRoute>
              }
            />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
