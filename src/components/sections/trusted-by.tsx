import React from 'react';
import { LogoLoop } from '../ui/logo-loop';
import { SiOracle, SiSamsung, SiAdobe, SiIntel, SiCisco, SiDell, SiGoogle, SiAmazon, SiApple } from 'react-icons/si';

const corporateLogos = [
  { node: <SiGoogle />, title: "Google", href: "#" },
  { node: <SiAmazon />, title: "Amazon", href: "#" },
  { node: <SiApple />, title: "Apple", href: "#" },
  { node: <SiOracle />, title: "Oracle", href: "#" },
  { node: <SiSamsung />, title: "Samsung", href: "#" },
  { node: <SiAdobe />, title: "Adobe", href: "#" },
  { node: <SiIntel />, title: "Intel", href: "#" },
  { node: <SiCisco />, title: "Cisco", href: "#" },
];

interface TrustedByProps {
  isDarkMode?: boolean;
  className?: string;
}

const TrustedBy: React.FC<TrustedByProps> = ({ isDarkMode = true, className }) => {
  return (
    <section className={`relative z-10 py-16 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-950/30' : 'bg-gray-50/30'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`font-brand text-3xl md:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-4`}>
            Trusted by Industry Leaders
          </h2>
          <p className={`font-body text-lg ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} max-w-3xl mx-auto`}>
            Partnering with Fortune 500 companies and industry leaders worldwide
          </p>
        </div>

        {/* Logo Marquee */}
        <div className="relative overflow-hidden py-8">
          <LogoLoop
            logos={corporateLogos}
            speed={40}
            direction="left"
            width="100%"
            logoHeight={48}
            gap={48}
            pauseOnHover={true}
            fadeOut={false}
            ariaLabel="Industry partner logos"
            className="w-full"
            renderItem={(item, key) => {
              const iconColors = {
                'Google': '#4285F4',
                'Amazon': '#FF9900',
                'Apple': '#000000',
                'Oracle': '#F80000',
                'Samsung': '#1428A0',
                'Adobe': '#FF0000',
                'Intel': '#0071C5',
                'Cisco': '#00BCD4'
              };
              
              const isNodeItem = 'node' in item;
              const iconNode = isNodeItem ? item.node : null;
              
              return (
                <div className="flex items-center justify-center space-x-4 p-3 rounded-lg hover:bg-slate-800/10 transition-all duration-300">
                  <div
                    className="transition-all duration-300 hover:scale-110"
                    style={{ color: iconColors[item.title as keyof typeof iconColors] || (isDarkMode ? '#ffffff' : '#1e293b') }}
                  >
                    {iconNode && React.cloneElement(iconNode as React.ReactElement, {
                      size: 48,
                      className: "transition-colors duration-300"
                    })}
                  </div>
                  <span className={`text-xl font-bold ${isDarkMode ? 'text-gray-200' : 'text-slate-700'} transition-colors duration-300`}>
                    {item.title}
                  </span>
                </div>
              );
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;