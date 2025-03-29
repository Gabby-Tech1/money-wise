
import { FC } from "react";
import MainLayout from "@/components/MainLayout";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, Mail, ChevronRight } from "lucide-react";

const Contact: FC = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-finance-blue to-finance-purple bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions about our platform or need assistance? Our team is here to help you with any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-finance-gradient p-3 rounded-lg text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email Us</h3>
                    <p className="text-gray-600 mb-2">
                      Our support team will get back to you within 24 hours.
                    </p>
                    <a
                      href="mailto:support@moneywise.com"
                      className="text-finance-blue hover:underline font-medium"
                    >
                      support@moneywise.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-finance-gradient p-3 rounded-lg text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Call Us</h3>
                    <p className="text-gray-600 mb-2">
                      Monday through Friday, 9am-6pm ET.
                    </p>
                    <a
                      href="tel:+1-800-123-4567"
                      className="text-finance-blue hover:underline font-medium"
                    >
                      +1 (800) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-finance-gradient p-3 rounded-lg text-white">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Live Chat</h3>
                    <p className="text-gray-600 mb-2">
                      Chat with our customer support team in real-time.
                    </p>
                    <Button
                      variant="outline"
                      className="gap-1 text-finance-blue border-finance-blue/30 hover:bg-finance-blue/5"
                    >
                      Start a conversation
                      <ChevronRight size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border">
              <h3 className="font-semibold text-lg mb-4">Office Location</h3>
              <p className="text-gray-600 mb-2">
                MoneyWise Financial Technologies
                <br />
                123 Finance Street, Suite 400
                <br />
                New York, NY 10001
              </p>
              <div className="mt-4 h-48 rounded-lg overflow-hidden border">
                {/* Map placeholder - would be replaced with an actual map component */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Interactive Map</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-2">
              Find quick answers to common questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "How secure is my financial data?",
                answer:
                  "Your financial data is protected with bank-level 256-bit encryption and we never store your banking credentials. We use advanced security measures including two-factor authentication and biometric verification to ensure your information remains safe."
              },
              {
                question: "Can I connect multiple bank accounts?",
                answer:
                  "Yes, you can connect as many financial accounts as you wish. MoneyWise supports over 10,000 financial institutions, including banks, credit cards, investment accounts, and loans."
              },
              {
                question: "Is there a mobile app available?",
                answer:
                  "Yes, MoneyWise is available on iOS and Android devices. Download our app from the App Store or Google Play Store to access your financial dashboard on the go."
              }
            ].map((faq, index) => (
              <div key={index} className="border rounded-lg p-5 hover:shadow-sm transition-shadow">
                <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
            <div className="text-center mt-6">
              <Button variant="outline" className="gap-1">
                View all FAQs
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
