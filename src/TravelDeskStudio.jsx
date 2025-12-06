import React, { useState, useEffect } from 'react';
import { Plane, Building, CheckCircle, Menu, X, Star, ArrowRight, Phone, Mail, MapPin, MessageCircle, ChevronLeft, ChevronRight, Moon, Sun, Instagram, Linkedin } from 'lucide-react';
import PropTypes from 'prop-types';
import logo from './assets/logo.png';
import LiquidEther from './components/LiquidEther';
import ClickSpark from './components/ClickSpark';
import TestimonialCarousel from './components/TestimonialCarousel';
import BounceCards from './components/BounceCards';
import PremiumServices from './components/sections/premium-services';
import WhyChooseUs from './components/sections/why-choose-us';
import TrustedBy from './components/sections/trusted-by';
import ContactSection from './components/sections/contact-section';

const TravelDeskStudio = () => {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode as default

  // Color palette
  const colors = isDarkMode ? {
    primary: '#F8FAFC', // Light text for dark mode
    secondary: '#F59E0B', // Amber 500 for dark mode
    whatsapp: '#25D366', // WhatsApp Green
    background: '#0F172A', // Dark background
    cardBg: '#1E293B', // Dark card background
    border: '#334155', // Dark border
    textSecondary: '#94A3B8' // Secondary text for dark mode
  } : {
    primary: '#0F172A', // Slate 900 - Deep Professional Navy
    secondary: '#D97706', // Amber 600 - subtle gold touches
    whatsapp: '#25D366', // WhatsApp Green
    background: '#f8f8f8', // Light background
    cardBg: '#FFFFFF', // Light card background
    border: '#E5E7EB', // Light border
    textSecondary: '#6B7280' // Secondary text for light mode
  };

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      company: "Global Tech Solutions",
      testimonial: "TravelDesk Studio has transformed our corporate travel management. The platform's efficiency and attention to detail is unmatched in the industry.",
      author: "Sarah Chen",
      position: "Travel Director",
      rating: 5,
      backgroundImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    },
    {
      id: 2,
      company: "Summit Conferences",
      testimonial: "By Confroom Hospitality's MICE solutions have elevated our events to world-class standards. Seamless integration and exceptional support.",
      author: "Michael Roberts",
      position: "Events Manager",
      rating: 5,
      backgroundImage: "https://images.unsplash.com/photo-1540575467063-395fd3e2b56b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    },
    {
      id: 3,
      company: "Fortune 500 Logistics",
      testimonial: "The comprehensive travel management tools have reduced our operational costs by 40% while improving employee satisfaction.",
      author: "Jennifer Williams",
      position: "Operations Head",
      rating: 5,
      backgroundImage: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    },
    {
      id: 4,
      company: "Fortune 500 Financial",
      testimonial: "The comprehensive travel management tools have reduced our operational costs by 40% while improving employee satisfaction.",
      author: "Jennifer Williams",
      position: "Operations Head",
      rating: 5,
      backgroundImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    },
    {
      id: 5,
      company: "Global Finance Corp",
      testimonial: "TravelDesk Studio's integrated platform has streamlined our entire travel workflow. The efficiency and attention to detail is unmatched in the industry.",
      author: "David Martinez",
      position: "CFO",
      rating: 5,
      backgroundImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    }
  ];

  // Auto-rotate testimonials with circular loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Navigation items
  const navItems = ['Services', 'Features', 'Contact'];

  // Scroll to contact section function
  const scrollToContact = () => {
    const section = document.getElementById('contact-section');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  // Updated button styles with new color palette
  const buttonStyles = {
    primary: 'bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1',
    whatsapp: 'bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center min-w-[200px]',
    outline: 'border-2 border-slate-900 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300'
  };

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: colors.background }}>
      {/* Liquid Ether Background */}
      <div className="fixed inset-0 z-0">
        <LiquidEther
          colors={isDarkMode ? ["#2563EB", "#60A5FA", "#93C5FD"] : ["#2563EB", "#60A5FA", "#93C5FD"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          dt={0.014}
          BFECC={true}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');
        .font-brand { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .luxury-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(249, 250, 251, 0.98) 100%);
          border: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 12px 24px -6px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .luxury-card-dark {
          background: linear-gradient(145deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.97) 100%);
          border: 1px solid rgba(217, 119, 6, 0.15);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 12px 24px -6px rgba(0, 0, 0, 0.15);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      {/* Navbar */}
      <nav className={`sticky top-0 z-50 ${isDarkMode ? 'bg-slate-900/95 border-slate-700' : 'bg-white/95 border-gray-200'} backdrop-blur-md shadow-md border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img
                src={logo}
                alt="Confroom Hospitality Logo"
                className="h-12 w-auto object-cover object-center"
                style={{ transform: 'scale(1.25) translateY(10%)' }}
              />
              <h1 className="text-2xl font-brand font-bold ml-1" style={{ color: colors.primary }}>
                Confroom Hospitality
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-slate-900'} px-3 py-2 text-sm font-medium transition-colors duration-200`}
                  >
                    {item}
                  </a>
                ))}
              </div>
              
              {/* Social Media Icons */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.instagram.com/confroom_hospitality"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-400 hover:text-white transition-colors duration-200 w-5 h-5`}
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/confroom-hospitality"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-400 hover:text-white transition-colors duration-200 w-5 h-5`}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-colors duration-200 ${isDarkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Dark Mode Toggle - Mobile */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-colors duration-200 ${isDarkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-900'} p-2 rounded-md transition-colors duration-200`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={`md:hidden border-t ${isDarkMode ? 'border-slate-700 bg-slate-900' : 'border-gray-200 bg-white'}`}>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className={`block px-3 py-2 text-base font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-900'} rounded-md transition-colors duration-200`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                
                {/* Social Media Icons - Mobile */}
                <div className="pt-4 border-t border-slate-700/50">
                  <div className="flex justify-center space-x-6 py-3">
                    <a
                      href="https://www.instagram.com/confroom_hospitality"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-slate-400 hover:text-white transition-colors duration-200 w-5 h-5`}
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/confroom-hospitality"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-slate-400 hover:text-white transition-colors duration-200 w-5 h-5`}
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Remove the static image background to let Aurora show through */}
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className={`font-brand text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${isDarkMode ? 'text-white' : 'text-white'} drop-shadow-lg`}>
            Corporate Travel &<br />Events Simplified
          </h1>
          <p className={`font-body text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-200' : 'text-gray-200'} drop-shadow-md`}>
            Transform your business travel and MICE management with our enterprise-grade platform.
            Trusted by Fortune 500 companies for seamless, cost-effective solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ClickSpark
              sparkColor={isDarkMode ? "#F59E0B" : "#3A29FF"}
              sparkSize={10}
              sparkRadius={15}
              sparkCount={8}
              duration={400}
            >
              <button
                onClick={scrollToContact}
                className={`${buttonStyles.primary} text-lg`}
              >
                Request a Quote
                <ArrowRight size={20} className="ml-2 inline" />
              </button>
            </ClickSpark>
            <ClickSpark
              sparkColor="#25D366"
              sparkSize={8}
              sparkRadius={12}
              sparkCount={6}
              duration={300}
            >
              <a
                href="https://wa.me/+919971558487"
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonStyles.whatsapp} text-lg flex items-center justify-center`}
              >
                <MessageCircle size={20} className="mr-2" />
                Chat on WhatsApp
              </a>
            </ClickSpark>
          </div>
        </div>
      </section>

      {/* Travel Gallery Section with BounceCards */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`font-brand text-3xl md:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              Explore Your Next Destination
            </h2>
            <p className={`font-body text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Discover amazing destinations around the world with our curated travel experiences
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <BounceCards
              className="travel-bounce-cards"
              images={[
                "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              ]}
              containerWidth={600}
              containerHeight={300}
              animationDelay={0.8}
              animationStagger={0.1}
              easeType="elastic.out(1, 0.5)"
              transformStyles={[
                "rotate(8deg) translate(-120px)",
                "rotate(4deg) translate(-60px)",
                "rotate(-2deg)",
                "rotate(-8deg) translate(60px)",
                "rotate(4deg) translate(120px)"
              ]}
              enableHover={true}
            />
          </div>

          <div className="text-center">
            <ClickSpark
              sparkColor={isDarkMode ? "#F59E0B" : "#3A29FF"}
              sparkSize={8}
              sparkRadius={12}
              sparkCount={6}
              duration={300}
            >
              <button className={`${buttonStyles.primary} text-lg`}>
                View All Destinations
                <ArrowRight size={20} className="ml-2 inline" />
              </button>
            </ClickSpark>
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <PremiumServices isDarkMode={isDarkMode} />

      {/* Why Choose Us Section with ChromaGrid */}
      <WhyChooseUs isDarkMode={isDarkMode} />

      {/* Trusted By Industry Leaders Section */}
      <TrustedBy isDarkMode={isDarkMode} />

      {/* Testimonials Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`font-brand text-3xl md:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-4`}>
              Trusted by Industry Leaders
            </h2>
            <p className={`font-body text-lg ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
              See what our clients say about our transformative travel solutions
            </p>
          </div>

          <TestimonialCarousel
            items={testimonials}
            autoplay={true}
            autoplayDelay={5000}
            pauseOnHover={true}
            loop={true}
            isDarkMode={isDarkMode}
            baseWidth={400}
          />
        </div>
      </section>

      {/* Contact/CTA Section */}
      <ContactSection isDarkMode={isDarkMode} />

      {/* Footer */}
      <footer className={`relative z-10 ${isDarkMode ? 'bg-gray-950/95' : 'bg-gray-900/95'} text-white py-12 backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img
                  src={logo}
                  alt="Confroom Hospitality Logo"
                  className="h-10 w-auto mr-3 object-cover object-center"
                  style={{ transform: 'scale(1.25) translateY(10%)' }}
                />
                <h3 className="font-brand text-xl font-bold">Confroom Hospitality</h3>
              </div>
              <p className="font-body text-gray-400 mb-6 max-w-md">
                Enterprise travel and events management platform by Conference Room Hospitality.
                Delivering excellence in corporate travel solutions since 1999.
              </p>
              <div className="flex space-x-4">
                {/* Social media placeholders */}
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 font-body text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Corporate Travel</a></li>
                <li><a href="#" className="hover:text-white transition-colors">MICE Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Event Planning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Travel Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 font-body text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 font-body text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="font-body text-sm text-gray-400">
              © 2025 Confroom Hospitality. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// PropTypes validation
TravelDeskStudio.propTypes = {
  // Define props if component accepts any in the future
};

export default TravelDeskStudio;
