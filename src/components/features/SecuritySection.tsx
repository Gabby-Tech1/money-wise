
import { FC } from "react";
import { Lock, Shield } from "lucide-react";

const SecuritySection: FC = () => {
  return (
    <div className="py-16 bg-gray-900 text-white rounded-3xl px-4 md:px-8 my-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Bank-Level Security</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Your financial data is protected with the most advanced security measures in the industry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "256-Bit Encryption",
            description:
              "All your data is encrypted with bank-level security protocols",
            icon: Lock,
          },
          {
            title: "Multi-Factor Authentication",
            description:
              "Additional security layers to ensure only you can access your account",
            icon: Shield,
          },
          {
            title: "Secure Data Centers",
            description:
              "Your information is stored in state-of-the-art secure facilities",
            icon: Shield,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 transition-transform hover:scale-105"
          >
            <div className="bg-finance-blue/20 p-3 rounded-full w-fit mb-4">
              <item.icon className="h-6 w-6 text-finance-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecuritySection;
