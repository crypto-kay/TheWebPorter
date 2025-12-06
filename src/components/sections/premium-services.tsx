import React from 'react';
import CardSwap, { Card } from '@/components/ui/card-swap';
import { cn } from '@/lib/utils';

interface PremiumServicesProps {
  isDarkMode?: boolean;
  className?: string;
}

const PremiumServices: React.FC<PremiumServicesProps> = ({ isDarkMode = true, className }) => {
  const services = [
    {
      title: "MICE Events",
      description: "Corporate meetings, incentives, conferences, and exhibitions with end-to-end planning.",
      bullets: ["Venue Sourcing", "Event Design", "On-site Management"]
    },
    {
      title: "Travel Bookings",
      description: "Preferred rates at 500+ hotels across India with flexible cancellation policies.",
      bullets: ["Negotiated Rates", "Real-time Status", "Global Inventory"]
    },
    {
      title: "Travel Logistics",
      description: "Complete transportation management including flights, trains, and ground transportation.",
      bullets: ["Flight Booking", "Train Reservations", "Ground Transfers"]
    }
  ];

  return (
    <section className={cn(
      "relative z-10 py-20 px-4 sm:px-6 lg:px-8",
      isDarkMode ? "bg-slate-900/50" : "bg-gray-50/50",
      "backdrop-blur-sm",
      className
    )}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[600px]">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <h2 className={cn(
              "font-brand text-3xl md:text-4xl font-bold",
              isDarkMode ? "text-white" : "text-gray-900"
            )}>
              Our Premium Services
            </h2>
            <p className={cn(
              "font-body text-lg max-w-2xl",
              isDarkMode ? "text-gray-300" : "text-gray-600"
            )}>
              Comprehensive travel solutions to serve your business needs.
            </p>
            
            {/* Service Highlights */}
            <div className="space-y-4 mt-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={cn(
                    "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                    "bg-amber-500"
                  )} />
                  <div>
                    <h3 className={cn(
                      "font-body text-lg font-semibold",
                      isDarkMode ? "text-white" : "text-gray-900"
                    )}>
                      {service.title}
                    </h3>
                    <p className={cn(
                      "font-body text-sm mt-1",
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    )}>
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - CardSwap Component */}
          <div className="relative h-[600px] lg:h-auto">
            <CardSwap
              width={400}
              height={300}
              cardDistance={60}
              verticalDistance={70}
              delay={2500}
              pauseOnHover={true}
              skewAmount={6}
              easing="elastic"
              className="lg:absolute lg:bottom-0 lg:right-0"
            >
              {services.map((service, index) => (
                <Card key={index} className="p-6 text-white">
                  <h3 className="font-brand text-xl font-bold mb-3 text-amber-400">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm mb-4 text-gray-200 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                        <span className="font-body text-xs text-gray-300">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;