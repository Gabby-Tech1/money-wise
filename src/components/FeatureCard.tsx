import { FC } from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  className?: string;
}

const FeatureCard: FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  iconColor = "text-finance-blue",
  className = "",
}) => {
  return (
    <div className={`p-6 rounded-xl bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md ${className}`}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${iconColor} bg-gray-50 mb-5`}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
