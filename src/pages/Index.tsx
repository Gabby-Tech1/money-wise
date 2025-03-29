
import { FC } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Brain,
  Check,
  CreditCard,
  LineChart,
  Lock,
  PiggyBank,
  Shield,
} from "lucide-react";
import Mobile from '@/assets/mobile.png'

const Index: FC = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSection 
        title="AI-Powered Financial Intelligence"
        subtitle="Take control of your finances with our intelligent platform that helps you save, invest, and grow your wealth automatically."
        ctaText="Start for Free"
        ctaLink="/signup"
        secondaryCtaText="Learn More"
        secondaryCtaLink="/features"
        features={[
          "AI-powered expense categorization",
          "Smart investment recommendations",
          "Automated savings rules",
          "Bank-level security protection"
        ]}
      />

      {/* Feature Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Smart Financial Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides the tools you need to manage, save, and grow your money efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="AI-Powered Insights"
              description="Get personalized financial recommendations based on your spending patterns."
              icon={Brain}
            />
            <FeatureCard
              title="Automated Budgeting"
              description="Create smart budgets that adapt to your financial habits and goals."
              icon={PiggyBank}
              iconColor="text-finance-purple"
            />
            <FeatureCard
              title="Investment Tracking"
              description="Monitor your investments and receive optimized portfolio suggestions."
              icon={LineChart}
              iconColor="text-finance-teal"
            />
            <FeatureCard
              title="Expense Analysis"
              description="Visualize your spending with detailed categorization and trends."
              icon={BarChart3}
              iconColor="text-finance-orange"
            />
            <FeatureCard
              title="Bill Management"
              description="Never miss a payment with automated bill tracking and reminders."
              icon={CreditCard}
              iconColor="text-finance-danger"
            />
            <FeatureCard
              title="Bank-Level Security"
              description="Your data is protected with 256-bit encryption and secure authentication."
              icon={Shield}
              iconColor="text-finance-success"
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/features">
              <Button variant="outline" className="text-finance-blue border-finance-blue/30">
                Explore All Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started with MoneyWise is simple and secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {[
              {
                step: "Step 1",
                title: "Create Your Account",
                description:
                  "Sign up in minutes with our secure and streamlined process.",
                image: "bg-finance-blue",
              },
              {
                step: "Step 2",
                title: "Connect Your Accounts",
                description:
                  "Securely link your bank accounts, credit cards, and investments.",
                image: "bg-finance-purple",
              },
              {
                step: "Step 3",
                title: "Get Personalized Insights",
                description:
                  "Receive AI-powered recommendations tailored to your financial situation.",
                image: "bg-finance-teal",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full ${item.image} flex items-center justify-center text-white text-2xl font-bold`}
                >
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/signup">
              <Button className="bg-finance-gradient hover:bg-finance-blue">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thousands of users have transformed their financial lives with MoneyWise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="MoneyWise has completely changed how I manage my money. The AI insights helped me identify spending patterns I never noticed before."
              author="Sarah J."
              role="Small Business Owner"
              rating={5}
            />
            <TestimonialCard
              quote="I've tried many finance apps, but this one is different. The automated savings feature helped me build my emergency fund without thinking about it."
              author="Michael T."
              role="Software Developer"
              rating={5}
            />
            <TestimonialCard
              quote="The investment recommendations have been spot on. I've seen a 12% increase in my portfolio since I started following MoneyWise's suggestions."
              author="Jennifer R."
              role="Marketing Executive"
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Bank-Level Security</h2>
              <p className="text-lg text-gray-600 mb-8">
                Your financial data deserves the highest level of protection. We implement bank-level security measures to ensure your information remains safe and private.
              </p>
              <ul className="space-y-4">
                {[
                  "256-bit encryption for all data",
                  "Multi-factor authentication",
                  "Biometric security options",
                  "Secure data centers with 24/7 monitoring",
                  "Regular security audits and testing",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-finance-success" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/features">
                  <Button variant="outline" className="gap-2">
                    <Lock size={16} />
                    Learn More About Security
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-4/5 aspect-square bg-gray-100 rounded-full flex items-center justify-center">
                <div className="w-3/4 aspect-square bg-gray-200 rounded-full flex items-center justify-center">
                  <Shield className="h-24 w-24 text-finance-blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex justify-center">
                {/* <div className="relative">
                  <div className="w-64 h-[500px] bg-black rounded-[40px] p-4">
                    <div className="w-full h-full bg-gray-800 rounded-[32px] flex items-center justify-center">
                      <Smartphone className="h-16 w-16 text-white opacity-25" />
                    </div>
                  </div>
                  <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-black rounded-b-xl z-10"></div>
                </div> */}
                <img src={Mobile} alt="" className="w-[300px]" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">
                Manage Your Finances On The Go
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Access your financial dashboard anytime, anywhere with our powerful mobile application. Get real-time alerts, track expenses, and make informed decisions on the go.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Real-time transaction notifications",
                  "Bill payment reminders",
                  "Quick expense tracking",
                  "Budget monitoring",
                  "Investment portfolio updates",
                  "Secure biometric login",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-finance-success" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <Button variant="default" className="gap-2 bg-black hover:bg-gray-800">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.5645 12.6371C17.5376 9.67194 19.9831 8.31424 20.0827 8.25517C18.5934 6.05821 16.2223 5.75289 15.3988 5.72868C13.3856 5.51657 11.4395 6.91931 10.4209 6.91931C9.3786 6.91931 7.79865 5.75075 6.10132 5.79179C3.93963 5.83284 1.91344 7.07775 0.811469 8.9884C-1.46222 12.8778 0.273839 18.6514 2.45942 21.5666C3.56212 22.9966 4.8511 24.61 6.51423 24.5368C8.14028 24.459 8.75677 23.4725 10.69 23.4725C12.6015 23.4725 13.1768 24.5368 14.8762 24.4905C16.6217 24.459 17.7405 23.0304 18.8009 21.5877C20.0808 19.9337 20.6015 18.3051 20.6268 18.2275C20.5762 18.2085 17.5961 17.0243 17.5645 12.6371Z" />
                    <path d="M14.2984 3.80957C15.1655 2.75362 15.7503 1.31292 15.5981 0C14.3491 0.055217 12.833 0.857831 11.9268 1.88724C11.1232 2.79658 10.4094 4.30317 10.5871 5.56713C11.9979 5.67384 13.3859 4.8393 14.2984 3.80957Z" />
                  </svg>
                  App Store
                </Button>
                <Button variant="default" className="gap-2 bg-black hover:bg-gray-800">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.22183 0.767677C1.22183 0.767677 0.695432 1.30473 0.695432 2.16233V22.212C0.695432 23.0696 1.22183 23.6066 1.22183 23.6066L12.0764 12.1972L1.22183 0.767677Z" />
                    <path d="M16.1887 8.08279L4.35461 0.82177L4.32593 0.80457C3.73576 0.443726 3.14655 0.674768 3.14655 0.674768L13.9803 12.1899L16.1887 8.08279Z" />
                    <path d="M16.1887 16.318L14.0027 12.1982L3.14655 23.7186C3.14655 23.7186 3.7348 23.9515 4.32686 23.5878L16.1887 16.318Z" />
                    <path d="M22.2261 10.6402L18.3921 8.30664L15.9326 12.1983L18.3921 16.0909L22.2261 13.7583C23.9128 12.6908 23.3103 12.1993 22.2261 10.6402Z" />
                  </svg>
                  Google Play
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-finance-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Financial Life?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of users who are already managing their finances more effectively with MoneyWise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/signup">
              <Button className="bg-wxt-finance-blue hover:bg-gray-300 text-lg py-2 px-6 h-auto rounded-md">
                Get Started — It's Free
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border-white text-finance-blue hover:bg-white/10 text-lg py-2 px-6 h-auto">
                Log In
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
