import React from 'react';
import BubbleMenu from '../ui/bubble-menu';

interface WhyChooseUsProps {
  isDarkMode?: boolean;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ isDarkMode = true }) => {
  const whyChooseItems = [
    {
      label: "1000+ Clients",
      href: "#",
      ariaLabel: "1000+ Clients - Trusted by leading global companies",
      rotation: 0,
      hoverStyles: {
        bgColor: "#F59E0B", // Amber - matches website theme
        textColor: "#ffffff"
      }
    },
    {
      label: "24/7 Support",
      href: "#",
      ariaLabel: "24/7 Support - Always available to assist you",
      rotation: 0,
      hoverStyles: {
        bgColor: "#10B981", // Emerald - optimized for theme
        textColor: "#ffffff"
      }
    },
    {
      label: "30% Savings",
      href: "#",
      ariaLabel: "30% Savings - Average cost reduction per trip",
      rotation: 0,
      hoverStyles: {
        bgColor: "#3B82F6", // Blue - matches website
        textColor: "#ffffff"
      }
    },
    {
      label: "Global Reach",
      href: "#",
      ariaLabel: "Global Reach - 100+ Countries covered",
      rotation: 0,
      hoverStyles: {
        bgColor: "#8B5CF6", // Violet - optimized for theme
        textColor: "#ffffff"
      }
    },
    {
      label: "Expert Team",
      href: "#",
      ariaLabel: "Expert Team - Professional travel consultants",
      rotation: 0,
      hoverStyles: {
        bgColor: "#EF4444", // Red
        textColor: "#ffffff"
      }
    },
    {
      label: "Fast Booking",
      href: "#",
      ariaLabel: "Fast Booking - Quick and easy reservations",
      rotation: 0,
      hoverStyles: {
        bgColor: "#06B6D4", // Cyan
        textColor: "#ffffff"
      }
    },
    {
      label: "Premium Service",
      href: "#",
      ariaLabel: "Premium Service - Luxury travel experience",
      rotation: 0,
      hoverStyles: {
        bgColor: "#F97316", // Orange
        textColor: "#ffffff"
      }
    },
    {
      label: "Best Prices",
      href: "#",
      ariaLabel: "Best Prices - Competitive rates guaranteed",
      rotation: 0,
      hoverStyles: {
        bgColor: "#84CC16", // Lime
        textColor: "#ffffff"
      }
    },
    {
      label: "Safe Travel",
      href: "#",
      ariaLabel: "Safe Travel - Health and safety priority",
      rotation: 0,
      hoverStyles: {
        bgColor: "#0EA5E9", // Sky
        textColor: "#ffffff"
      }
    }
  ];

  return (
    <section className={`relative z-10 py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-950/50' : 'bg-gray-50/50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`font-brand text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Why Choose TravelDesk Studio?
          </h2>
          <p className={`font-body text-lg md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            With over 15 years of experience, we redefine corporate travel.
          </p>
        </div>

        {/* BubbleMenu Container */}
        <div className="w-full h-[180px] md:h-[220px] lg:h-[250px] flex justify-center items-center">
          <BubbleMenu
            items={whyChooseItems}
            menuAriaLabel="Toggle why choose us features"
            menuBg={isDarkMode ? "#1e293b" : "#ffffff"}
            menuContentColor={isDarkMode ? "#ffffff" : "#1e293b"}
            useFixedPosition={false}
            animationEase="back.out(1.5)"
            animationDuration={0.5}
            staggerDelay={0.08}
            autoOpen={true}
            autoOpenDelay={300}
            className="relative"
            style={{ position: 'relative' }}
          />
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <p className={`font-body text-sm max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Our key features automatically display to showcase why leading companies choose TravelDesk Studio for their corporate travel needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;