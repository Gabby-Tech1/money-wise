import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot } from "lucide-react";

interface ChatMessage {
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const FinancialAdvisorBot: FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: 'bot',
      content: 'Hello! I\'m your MoneyWise Financial Advisor. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    // Simple bot response (you would replace this with actual AI/logic)
    const botMessage: ChatMessage = {
      type: 'bot',
      content: 'Thank you for your message. This is a demo response. In the real application, I would analyze your financial data and provide personalized advice.',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage, botMessage]);
    setInputMessage('');
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="px-4 py-3 border-b">
        <h2 className="text-lg font-semibold">Financial Advisor</h2>
        <p className="text-sm text-gray-500">AI-powered financial guidance</p>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.type === 'user'
                    ? 'bg-finance-blue text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                {message.type === 'bot' && (
                  <div className="flex items-center gap-2 mb-1">
                    <Bot size={16} />
                    <span className="text-xs font-medium">Financial Advisor</span>
                  </div>
                )}
                <p className="text-sm">{message.content}</p>
                <span className="text-xs opacity-70 mt-1 block">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            placeholder="Ask for financial advice..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button onClick={handleSendMessage}>
            <Send size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinancialAdvisorBot;
