
import { FC } from "react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
  rating?: number;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  avatar,
  rating = 5,
}) => {
  return (
    <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      {/* Star Rating */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 mb-6">"{quote}"</p>

      {/* Author info */}
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-3">
          {avatar ? (
            <img src={avatar} alt={author} className="w-10 h-10 rounded-full" />
          ) : (
            <div className="w-10 h-10 rounded-full bg-finance-gradient flex items-center justify-center text-white font-medium">
              {author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-gray-500 text-sm">
            {role}
            {company && `, ${company}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
