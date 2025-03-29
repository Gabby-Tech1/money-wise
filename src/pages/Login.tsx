import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Eye, EyeOff, Loader2, ArrowLeft, Github, Mail } from "lucide-react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('https://cashflow-backend-yko9.onrender.com/api/auth/login', {
        email,
        password
      });

      if (response.data.access_token) {
        // Store auth data
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('token_type', response.data.token_type);
        localStorage.setItem('user_email', email); // Store email for now

        toast.success("Login successful!");
        
        // Redirect to the originally attempted URL or dashboard
        const origin = (location.state as any)?.from?.pathname || '/dashboard';
        navigate(origin);
      } else {
        toast.error("Invalid response from server");
      }
    } catch (error: any) {
      console.error('Login error:', error);
      const errorMessage = error.response?.data?.message || 
                          error.response?.data?.error || 
                          error.message || 
                          "Invalid credentials";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 md:p-12 lg:p-16">
        <div className="w-full max-w-md">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-finance-blue transition-colors mb-8">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>

          <div className="mb-10">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-finance-gradient">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-bold text-2xl finance-gradient-text">
                MoneyWise
              </span>
            </Link>
            <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
            <p className="text-gray-600">
              Sign in to your account to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-finance-blue focus:border-transparent"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Link to="/reset-password" className="text-sm text-finance-blue hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-finance-blue focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-finance-gradient hover:bg-finance-blue"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 size={20} className="mr-2 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>

            <div className="relative flex items-center justify-center my-6">
              <div className="border-t border-gray-300 absolute w-full"></div>
              <div className="bg-white px-4 z-10 text-sm text-gray-500">
                or continue with
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                type="button"
                variant="outline"
                className="flex items-center justify-center gap-2"
                onClick={() => toast.info("Google Sign In would be implemented here")}
              >
                <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex items-center justify-center gap-2"
                onClick={() => toast.info("Apple Sign In would be implemented here")}
              >
                <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  />
                </svg>
                Apple
              </Button>
            </div>

            <div className="text-center text-gray-600 text-sm mt-6">
              Don't have an account?{" "}
              <Link to="/signup" className="text-finance-blue hover:underline font-medium">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Image/Graphics */}
      <div className="hidden md:flex flex-1 bg-finance-gradient items-center justify-center p-12">
        <div className="max-w-md text-white">
          <h2 className="text-3xl font-bold mb-6">
            Unlock Financial Intelligence
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Sign in to access your personalized insights, investment recommendations, and automated financial tools.
          </p>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Daily Insights</h3>
                <p className="text-white/80">
                  Receive daily financial insights tailored to your spending habits and goals.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Github size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Smart Automation</h3>
                <p className="text-white/80">
                  Set up intelligent rules to automate your savings and optimize your finances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
