
import { FC, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

const FaqAccordion: FC<FaqAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border rounded-lg bg-white overflow-hidden"
        >
          <button
            className="flex items-center justify-between w-full p-5 text-left font-medium"
            onClick={() => toggleFaq(index)}
          >
            <span>{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp size={20} className="text-finance-blue" />
            ) : (
              <ChevronDown size={20} className="text-gray-500" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="p-5 pt-0 text-gray-600 border-t">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
