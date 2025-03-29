
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  image?: string;
  features?: string[];
}

const HeroSection: FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText = "Get Started",
  ctaLink = "/signup",
  secondaryCtaText,
  secondaryCtaLink,
  image,
  features,
}) => {
  return (
    <section className="py-12 md:py-20 px-4 relative overflow-hidden bg-hero-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">{subtitle}</p>

            {features && (
              <div className="space-y-3 mt-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2
                      size={20}
                      className="text-finance-success flex-shrink-0"
                    />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link to={ctaLink}>
                <Button className="bg-finance-gradient hover:bg-finance-blue text-base font-medium h-12 px-6 w-full sm:w-auto">
                  {ctaText}
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              {secondaryCtaText && secondaryCtaLink && (
                <Link to={secondaryCtaLink}>
                  <Button
                    variant="outline"
                    className="text-base font-medium h-12 px-6 w-full sm:w-auto"
                  >
                    {secondaryCtaText}
                  </Button>
                </Link>
              )}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            {image ? (
              <img
                src={image}
                alt="Hero illustration"
                className="max-w-full h-auto rounded-lg shadow-lg animate-fade-in"
              />
            ) : (
              <div className="w-full max-w-lg aspect-square bg-white p-6 rounded-lg shadow-lg glass-card animate-fade-in">
                <div className="h-full w-full bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-xl text-gray-400">Image placeholder</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
