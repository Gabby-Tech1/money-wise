
import { FC } from "react";
import MainLayout from "@/components/MainLayout";
import FaqAccordion from "@/components/FaqAccordion";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  FileText,
  Search,
  Video,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

const Help: FC = () => {
  // FAQ data for the FaqAccordion component
  const faqItems = [
    {
      question: "How do I connect my bank accounts?",
      answer: "You can connect your bank accounts by navigating to Settings > Linked Accounts and following the secure connection process. We use bank-level encryption to ensure your data remains safe."
    },
    {
      question: "Is my financial data secure?",
      answer: "Yes, we use 256-bit encryption and follow industry best practices for data security. We never store your banking credentials and use token-based secure connections."
    },
    {
      question: "How does the AI categorize my transactions?",
      answer: "Our AI analyzes transaction data including merchant information, amount, and timing to automatically categorize expenses. You can also create custom rules and manually adjust categories when needed."
    },
    {
      question: "Can I export my financial reports?",
      answer: "Yes, you can export your financial reports in PDF, CSV, and Excel formats from the Reports section in your dashboard."
    },
    {
      question: "How are investment recommendations generated?",
      answer: "Our AI analyzes your financial situation, goals, risk tolerance, and market conditions to provide personalized investment recommendations tailored to your specific needs."
    }
  ];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-finance-blue to-finance-purple bg-clip-text text-transparent">
            Help & Resources
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Find answers to your questions and learn how to get the most out of our financial tools.
          </p>
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for help topics..."
                className="w-full py-3 pl-12 pr-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-finance-blue focus:border-transparent"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-finance-gradient hover:bg-finance-blue">
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              title: "Getting Started",
              description: "Everything you need to know to get up and running.",
              icon: BookOpen,
              color: "bg-finance-blue",
            },
            {
              title: "Video Tutorials",
              description: "Visual guides for all our features and tools.",
              icon: Video,
              color: "bg-finance-purple",
            },
            {
              title: "User Guides",
              description: "Detailed documentation and step-by-step instructions.",
              icon: FileText,
              color: "bg-finance-teal",
            },
            {
              title: "Live Support",
              description: "Get help from our customer support team.",
              icon: MessageSquare,
              color: "bg-finance-orange",
            },
          ].map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md"
            >
              <div
                className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-white mb-4`}
              >
                <category.icon size={24} />
              </div>
              <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <Button variant="outline" className="w-full justify-between">
                Explore
                <ChevronRight size={16} />
              </Button>
            </div>
          ))}
        </div>

        {/* Popular Help Topics */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Popular Help Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Setting Up Your Account",
                topics: [
                  "Creating your profile",
                  "Connecting bank accounts",
                  "Security settings",
                  "Setting financial goals",
                  "Verification process",
                ],
              },
              {
                title: "Managing Your Finances",
                topics: [
                  "Creating budgets",
                  "Tracking expenses",
                  "Categorizing transactions",
                  "Setting up bill reminders",
                  "Managing subscriptions",
                ],
              },
              {
                title: "Investments & Planning",
                topics: [
                  "Investment tracking",
                  "Portfolio analysis",
                  "Retirement planning",
                  "Tax optimization",
                  "Financial reports",
                ],
              },
            ].map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.topics.map((topic, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="flex items-center text-gray-700 hover:text-finance-blue transition-colors"
                      >
                        <CheckCircle size={16} className="mr-2 text-finance-blue" />
                        {topic}
                      </a>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full mt-4 text-finance-blue justify-between">
                  View all topics
                  <ChevronRight size={16} />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to the most common questions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FaqAccordion faqs={faqItems} />
            <div className="text-center mt-8">
              <Button variant="outline" className="gap-1">
                View all FAQs
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Financial Education */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Financial Education Center
            </h2>
            <p className="text-gray-600">
              Resources to help you improve your financial literacy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Budgeting Basics",
                description:
                  "Learn how to create and maintain a budget that works for your lifestyle.",
                image: "bg-gray-200", // Would be an actual image
                category: "Beginner",
              },
              {
                title: "Investment Fundamentals",
                description:
                  "Understand the core concepts of investing and building wealth.",
                image: "bg-gray-200",
                category: "Intermediate",
              },
              {
                title: "Tax Optimization Strategies",
                description:
                  "Discover legal ways to minimize your tax burden and maximize returns.",
                image: "bg-gray-200",
                category: "Advanced",
              },
            ].map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <div
                  className={`h-40 ${article.image} flex items-center justify-center`}
                >
                  <span className="text-gray-500">Article Image</span>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium px-2 py-1 bg-finance-blue/10 text-finance-blue rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">5 min read</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {article.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-finance-blue p-0 hover:bg-transparent hover:text-finance-blue/80"
                  >
                    Read Article
                    <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-finance-gradient hover:bg-finance-blue">
              Explore Learning Center
            </Button>
          </div>
        </div>

        {/* Contact Support CTA */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Still Need Help?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our customer support team is available Monday through Friday, 9am-6pm ET to assist you with any questions or issues.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-finance-gradient hover:bg-finance-blue">
              <MessageSquare className="mr-2 h-5 w-5" />
              Live Chat
            </Button>
            <Button variant="outline">Email Support</Button>
            <Button variant="outline">Call Us</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Help;
