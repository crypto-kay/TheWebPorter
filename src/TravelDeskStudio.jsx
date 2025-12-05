import React, { useState, useEffect } from 'react';
import { Plane, Building, Calendar, Users, Briefcase, CheckCircle, Menu, X, Star, ArrowRight, Phone, Mail, MapPin, MessageCircle, ChevronLeft, ChevronRight, Moon, Sun } from 'lucide-react';
import PropTypes from 'prop-types';
import logo from './assets/logo.png';

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
      rating: 5
    },
    {
      id: 2,
      company: "Summit Conferences",
      testimonial: "By Confroom Hospitality's MICE solutions have elevated our events to world-class standards. Seamless integration and exceptional support.",
      author: "Michael Roberts",
      position: "Events Manager",
      rating: 5,
      backgroundImage: "https://images.unsplash.com/photo-1497366754035-5f3f8b7e5c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    },
    {
      id: 3,
      company: "Fortune 500 Logistics",
      testimonial: "The comprehensive travel management tools have reduced our operational costs by 40% while improving employee satisfaction.",
      author: "Jennifer Williams",
      position: "Operations Head",
      rating: 5,
      backgroundImage: "https://images.unsplash.com/photo-1515169380403-7b2b2f75efdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    },
    {
      id: 4,
      company: "Fortune 500 Financial",
      testimonial: "The comprehensive travel management tools have reduced our operational costs by 40% while improving employee satisfaction.",
      author: "Jennifer Williams",
      position: "Operations Head",
      rating: 5,
      backgroundImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    },
    {
      id: 5,
      company: "Global Finance Corp",
      testimonial: "TravelDesk Studio's integrated platform has streamlined our entire travel workflow. The efficiency and attention to detail is unmatched in the industry.",
      author: "David Martinez",
      position: "CFO",
      rating: 5,
      backgroundImage: "https://images.unsplash.com/photo-1600858475838-5c2b4e9a4e0e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
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

  // Updated Services data
  const services = [
    {
      icon: Calendar,
      title: "MICE Management",
      description: "Complete Meetings, Incentives, Conferences, and Exhibitions support"
    },
    {
      icon: Briefcase,
      title: "Corporate Booking Engine",
      description: "Streamlined booking system with approval workflows and policy compliance"
    },
    {
      icon: Users,
      title: "24/7 Logistics",
      description: "Integrated travel booking with real-time availability and competitive pricing"
    }
  ];

  // Updated button styles with new color palette
  const buttonStyles = {
    primary: 'bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1',
    whatsapp: 'bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1 flex items-center',
    outline: 'border-2 border-slate-900 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300'
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
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
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            className="w-full h-full object-cover"
            alt="Business Class Interior"
          />
          <div className="absolute inset-0" style={{ backgroundColor: `${colors.primary}CC` }}></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className={`font-brand text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${isDarkMode ? 'text-slate-600' : 'text-white'}`}>
            Corporate Travel &<br />Events Simplified
          </h1>
          <p className={`font-body text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-slate-700' : 'text-gray-200'}`}>
            Transform your business travel and MICE management with our enterprise-grade platform.
            Trusted by Fortune 500 companies for seamless, cost-effective solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`${buttonStyles.primary} text-lg`}>
              Request a Quote
              <ArrowRight size={20} className="ml-2 inline" />
            </button>
            <a
              href="https://wa.me/+919971558487"
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonStyles.whatsapp} text-lg`}
            >
              <MessageCircle size={20} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`font-brand text-3xl md:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              Comprehensive Travel Solutions
            </h2>
            <p className={`font-body text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              End-to-end management platform designed for corporate travel and events excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className={`text-center p-8 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'} rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border`}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: `${colors.secondary}20` }}>
                    <Icon size={40} style={{ color: colors.secondary }} />
                  </div>
                  <h3 className={`font-body text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                    {service.title}
                  </h3>
                  <p className={`font-body ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className={`font-brand text-3xl md:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                Why Choose Confroom Hospitality?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="mt-1 flex-shrink-0" size={24} style={{ color: colors.secondary }} />
                  <div>
                    <h3 className={`font-body text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                      Powered by 15+ Years of Confroom Hospitality Excellence
                    </h3>
                    <p className={`font-body ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Legacy of hospitality excellence integrated into cutting-edge travel management technology
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="mt-1 flex-shrink-0" size={24} style={{ color: colors.secondary }} />
                  <div>
                    <h3 className="font-body text-lg font-semibold text-gray-900 mb-2">
                      Enterprise-Grade Security
                    </h3>
                    <p className="font-body text-gray-600">
                      SOC 2 compliant with advanced encryption and data protection
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="mt-1 flex-shrink-0" size={24} style={{ color: colors.secondary }} />
                  <div>
                    <h3 className="font-body text-lg font-semibold text-gray-900 mb-2">
                      24/7 Dedicated Support
                    </h3>
                    <p className="font-body text-gray-600">
                      Global support team with average response time under 2 minutes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="p-8 rounded-2xl luxury-card-dark text-white transform hover:scale-105 transition-all duration-400">
                <div className="text-6xl font-bold mb-4">15+</div>
                <div className="text-xl font-semibold mb-2">Years Excellence</div>
                <div className="text-sm opacity-90">By Confroom Hospitality</div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-20" style={{ backgroundColor: colors.secondary }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`font-brand text-3xl md:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-4`}>
              Trusted by Industry Leaders
            </h2>
            <p className={`font-body text-lg ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
              See what our clients say about our transformative travel solutions
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} p-8 rounded-2xl shadow-lg text-center`}>
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={20} className="text-amber-500 fill-current" />
                        ))}
                      </div>
                      <p className={`font-body text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-6 italic leading-relaxed`}>
                        "{testimonial.testimonial}"
                      </p>
                      <div className="border-t border-gray-200 pt-6">
                        <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>{testimonial.author}</div>
                        <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{testimonial.position}</div>
                        <div className={`text-sm font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-900'} mt-2`}>{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Controls */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className={`p-3 rounded-full ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-white'} shadow-md hover:shadow-lg transition-shadow duration-300`}
              >
                <ArrowRight className={`rotate-180 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} size={20} />
              </button>
              <button
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <ArrowRight className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-slate-800' : 'bg-blue-900'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-brand text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Travel Management?
            </h2>
            <p className="font-body text-xl text-blue-100 max-w-3xl mx-auto">
              Schedule a complimentary business audit and discover how we can optimize your corporate travel
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Form */}
            <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-white'} p-8 rounded-2xl`}>
              <h3 className={`font-body text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                Request Your Business Audit
              </h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className={`block font-body text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 border ${isDarkMode ? 'border-slate-600 bg-slate-800 text-white focus:ring-blue-400 focus:border-blue-400' : 'border-gray-300 bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500'} rounded-lg font-body`}
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className={`block font-body text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Company
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 border ${isDarkMode ? 'border-slate-600 bg-slate-800 text-white focus:ring-blue-400 focus:border-blue-400' : 'border-gray-300 bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500'} rounded-lg font-body`}
                    placeholder="Global Tech Solutions"
                  />
                </div>
                <div>
                  <label className={`block font-body text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className={`w-full px-4 py-3 border ${isDarkMode ? 'border-slate-600 bg-slate-800 text-white focus:ring-blue-400 focus:border-blue-400' : 'border-gray-300 bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500'} rounded-lg font-body`}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <button
                  type="submit"
                  className={`${buttonStyles.primary} w-full text-lg`}
                >
                  Submit Quote Request
                  <ArrowRight size={20} className="ml-2 inline" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="text-white">
              <h3 className="font-body text-2xl font-bold mb-8">
                Direct Contact Options
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="text-amber-500" size={24} />
                  <div>
                    <div className="font-semibold">Phone Support</div>
                    <div className={`${isDarkMode ? 'text-blue-200' : 'text-blue-100'}`}>+1 (800) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-amber-500" size={24} />
                  <div>
                    <div className="font-semibold">Email Support</div>
                    <div className={`${isDarkMode ? 'text-blue-200' : 'text-blue-100'}`}>enterprise@confroom.hospitality</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-amber-500" size={24} />
                  <div>
                    <div className="font-semibold">Corporate Office</div>
                    <div className={`${isDarkMode ? 'text-blue-200' : 'text-blue-100'}`}>New York, NY & London, UK</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-gray-950' : 'bg-gray-900'} text-white py-12`}>
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
