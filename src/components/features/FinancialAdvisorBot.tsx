import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { toast } from "sonner";

interface ChatMessage {
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const FinancialAdvisorBot: FC = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: 'bot',
      content: 'Hello! I\'m your MoneyWise Financial Advisor. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !user) return;

    const userMessage: ChatMessage = {
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Add message as query parameter and in body
      const url = new URL(`https://cashflow-backend-yko9.onrender.com/api/auth/${user.id}/chat`);
      url.searchParams.append('message', inputMessage);

      const response = await fetch(url.toString(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          message: inputMessage,
          userId: user.id
        })
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.detail?.[0]?.msg || data.message || 'Failed to get response';
        throw new Error(errorMessage);
      }

      const botMessage: ChatMessage = {
        type: 'bot',
        content: data.response || 'I apologize, but I cannot process your request at the moment.',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      toast.error(error instanceof Error ? error.message : 'Unable to process your request');
    } finally {
      setIsLoading(false);
    }
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
            disabled={isLoading}
          />
          <Button onClick={handleSendMessage} disabled={isLoading}>
            {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinancialAdvisorBot;
