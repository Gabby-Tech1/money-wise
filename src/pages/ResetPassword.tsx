
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2, ArrowLeft, CheckCircle2 } from "lucide-react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      if (email) {
        setIsSubmitted(true);
        toast.success("Reset password link sent to your email");
      } else {
        toast.error("Please enter a valid email address");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border p-8">
        <Link to="/login" className="inline-flex items-center text-gray-600 hover:text-finance-blue transition-colors mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Back to Login
        </Link>
        
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center justify-center gap-2 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-finance-gradient">
              <span className="text-white font-bold text-xl">M</span>
            </div>
          </Link>
          <h1 className="text-2xl font-bold mb-2">Reset Your Password</h1>
          <p className="text-gray-600">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        {!isSubmitted ? (
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

            <Button
              type="submit"
              className="w-full bg-finance-gradient hover:bg-finance-blue"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 size={20} className="mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Reset Link"
              )}
            </Button>

            <div className="text-center text-gray-600 text-sm mt-4">
              Remember your password?{" "}
              <Link to="/login" className="text-finance-blue hover:underline font-medium">
                Sign in
              </Link>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle2 size={64} className="text-finance-success" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Check Your Email</h2>
            <p className="text-gray-600 mb-6">
              We've sent a password reset link to <span className="font-medium">{email}</span>. 
              Please check your email and follow the instructions to reset your password.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              If you don't see the email, check your spam folder or try another email address.
            </p>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => setIsSubmitted(false)}
            >
              Try another email
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
