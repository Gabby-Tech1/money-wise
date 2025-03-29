
import { FC } from "react";
import { Button } from "@/components/ui/button";
// import { Smartphone } from "lucide-react";
import Mobile from "@/assets/mobile.png";

const MobileAppSection: FC = () => {
  return (
    <div className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          {/* <div className="bg-gray-100 rounded-xl overflow-hidden"> */}
            {/* This would be replaced with an actual device mockup */}
            <img src={Mobile} alt="" />
          {/* </div> */}
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-bold mb-6">
            Take Control On The Go
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Access your finances anytime, anywhere with our powerful mobile application. Get real-time notifications, manage your accounts, and make smart financial decisions from your smartphone.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "Real-time transaction alerts",
              "Face ID and Touch ID authentication",
              "Bill payment on the go",
              "Expense tracking with photo receipts",
              "Investment monitoring and trading",
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <div className="mr-3 bg-green-100 p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                {feature}
              </li>
            ))}
          </ul>
          <p className="py-2 text-lg">Will soon be available on: </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-black text-white hover:bg-gray-800">
              <svg
                className="h-5 w-5 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5645 12.6371C17.5376 9.67194 19.9831 8.31424 20.0827 8.25517C18.5934 6.05821 16.2223 5.75289 15.3988 5.72868C13.3856 5.51657 11.4395 6.91931 10.4209 6.91931C9.3786 6.91931 7.79865 5.75075 6.10132 5.79179C3.93963 5.83284 1.91344 7.07775 0.811469 8.9884C-1.46222 12.8778 0.273839 18.6514 2.45942 21.5666C3.56212 22.9966 4.8511 24.61 6.51423 24.5368C8.14028 24.459 8.75677 23.4725 10.69 23.4725C12.6015 23.4725 13.1768 24.5368 14.8762 24.4905C16.6217 24.459 17.7405 23.0304 18.8009 21.5877C20.0808 19.9337 20.6015 18.3051 20.6268 18.2275C20.5762 18.2085 17.5961 17.0243 17.5645 12.6371Z" />
                <path d="M14.2984 3.80957C15.1655 2.75362 15.7503 1.31292 15.5981 0C14.3491 0.055217 12.833 0.857831 11.9268 1.88724C11.1232 2.79658 10.4094 4.30317 10.5871 5.56713C11.9979 5.67384 13.3859 4.8393 14.2984 3.80957Z" />
              </svg>
              App Store
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800">
              <svg
                className="h-5 w-5 mr-2"
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
  );
};

export default MobileAppSection;
