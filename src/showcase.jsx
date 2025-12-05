import React, { useState, useEffect, useRef } from 'react';
import { X, ExternalLink, Eye, Smartphone, Monitor, ChevronRight, Search, MapPin, Layout, Coffee, Stethoscope, GraduationCap, Building2, ShoppingBag, ArrowRight, Star, Menu, Instagram, Facebook, Twitter, ArrowDown, CheckCircle, Play, Clock, Map, Phone, Shield, Activity, Calendar, User, Mail, BookOpen, Video, Award, Users, Heart, HelpCircle, Car, Wifi, Zap, CreditCard, MonitorPlay, Plane, Briefcase, Globe } from 'lucide-react';
import TravelDeskStudio from './TravelDeskStudio';

// --- Mock Data for Portfolio ---
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Skyline Heights Realty",
    category: "Real Estate",
    templateType: "luxury",
    location: "Gurgaon, Sector 42",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A luxury property showcase featuring virtual tours, interactive floor plans, and lead generation forms tailored for high-net-worth individuals in NCR.",
    tags: ["Lead Gen", "3D Tours", "Premium UI"],
  },
  {
    id: 2,
    title: "The Roastery: Hauz Khas",
    category: "Cafe & Hospitality",
    templateType: "cafe", 
    location: "Hauz Khas Village, Delhi",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "An atmospheric website for a boutique cafe. Features include a QR-integrated digital menu, table reservation system, and an Instagram feed integration.",
    tags: ["Menu System", "Reservations", "Social Integration"],
  },
  {
    id: 3,
    title: "Dr. Sharma Cardiology",
    category: "Healthcare",
    templateType: "trust",
    location: "South Extension, Delhi",
    image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Trust-building medical practice website. Includes online appointment booking, patient testimonial sliders, and a blog for health tips.",
    tags: ["Booking Engine", "Clean Design", "SEO Optimized"],
  },
  {
    id: 4,
    title: "EduPrime Coaching",
    category: "Education",
    templateType: "education",
    location: "Noida, Sector 62",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "LMS-ready website for a coaching institute. Features student login, course catalogue, result showcases, and downloadable study materials.",
    tags: ["LMS", "Student Portal", "Video Hosting"],
  },
  {
    id: 5,
    title: "Urban Threads",
    category: "E-Commerce",
    templateType: "lifestyle",
    location: "Connaught Place, Delhi",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A high-conversion Shopify-style store for a local fashion brand. Includes cart functionality, payment gateway integration, and inventory management.",
    tags: ["Shopify", "Payments", "Inventory"],
  },
  {
    id: 6,
    title: "TechSpace Coworking",
    category: "Real Estate",
    templateType: "tech",
    location: "Cyber City, Gurgaon",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Modern booking platform for coworking spaces. Calendar integration for meeting rooms and membership management dashboard.",
    tags: ["Booking System", "Membership", "Modern UI"],
  },
  {
    id: 7,
    title: "TravelDesk Studio – By Confroom Hospitality",
    category: "Corporate Travel",
    templateType: "traveldesk",
    location: "Aerocity, Delhi",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "B2B corporate travel management platform. Streamlined booking, expense tracking, and 24/7 support for business travelers.",
    tags: ["B2B Portal", "Travel Management", "Corporate Solutions"],
  }
];

const CATEGORIES = [
  { id: 'All', label: 'All Projects', icon: Layout },
  { id: 'Real Estate', label: 'Real Estate', icon: Building2 },
  { id: 'Cafe & Hospitality', label: 'Hospitality', icon: Coffee },
  { id: 'Healthcare', label: 'Healthcare', icon: Stethoscope },
  { id: 'Education', label: 'Education', icon: GraduationCap },
  { id: 'E-Commerce', label: 'E-Commerce', icon: ShoppingBag },
  { id: 'Corporate Travel', label: 'Corporate Travel', icon: Plane },
];

// --- UTILITIES ---

const RevealOnScroll = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const handleImageError = (e) => {
  e.target.src = "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=8021"; // Fallback gradient
  e.target.onerror = null; // Prevent infinite loop
};

// --- TEMPLATE ENGINE ---------------------------------------------------------

// 1. LUXURY TEMPLATE (Skyline Heights)
const LuxuryTemplate = ({ project }) => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = (e) => {
    const currentScrollY = e.target.scrollTop;
    if (currentScrollY < 10) {
      setIsAtTop(true);
      setIsNavVisible(true);
    } else {
      setIsAtTop(false);
      if (currentScrollY > lastScrollY.current) setIsNavVisible(false);
      else setIsNavVisible(true);
    }
    lastScrollY.current = currentScrollY;
  };

  return (
    <div 
      className="font-luxury-serif bg-[#0c0c0c] text-[#e5e5e5] min-h-screen overflow-y-auto h-full relative scroll-smooth scrollbar-hide"
      onScroll={handleScroll}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Montserrat:wght@200;300;400;500;600&display=swap');
        .font-luxury-serif { font-family: 'Cormorant Garamond', serif; }
        .font-luxury-sans { font-family: 'Montserrat', sans-serif; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <nav 
        className={`fixed w-full z-50 transition-all duration-500 transform ${
          isNavVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isAtTop ? 'bg-transparent py-4 md:py-8' : 'bg-[#0c0c0c]/95 backdrop-blur-md py-4 shadow-2xl border-b border-white/5'}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="text-lg md:text-3xl tracking-[0.2em] uppercase font-light text-white">
            {project.title.split(' ')[0]}<span className="text-[#d4af37] font-bold">.</span>
          </div>
          <div className="hidden md:flex space-x-10 text-xs font-luxury-sans tracking-[0.2em] font-medium text-gray-300">
            {['Residences', 'Philosophy', 'Amenities', 'Neighborhood'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#d4af37] transition-colors relative group">
                {item.toUpperCase()}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#d4af37] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <button className="font-luxury-sans text-[10px] md:text-xs tracking-[0.2em] border border-[#d4af37] text-[#d4af37] px-4 md:px-8 py-2 md:py-3 hover:bg-[#d4af37] hover:text-black transition-all duration-300">
            INQUIRE
          </button>
        </div>
      </nav>

      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.image} 
            className="w-full h-full object-cover scale-105 animate-pulse-slow" 
            alt="Luxury Architecture" 
            style={{ animationDuration: '20s' }}
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0c0c0c]"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <RevealOnScroll>
            <div className="font-luxury-sans text-[#d4af37] text-xs md:text-base tracking-[0.4em] mb-4 md:mb-6 uppercase">
              {project.location}
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-thin mb-6 md:mb-8 leading-none tracking-tight text-white">
              Beyond <br/> <span className="italic font-normal text-gray-200">Extraordinary</span>
            </h1>
            <p className="text-sm md:text-xl font-luxury-sans font-light text-gray-300 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
              A sanctuary of sophistication tailored for the modern elite. 
              Experience the pinnacle of urban living.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
              <button className="bg-[#d4af37] text-black font-luxury-sans px-8 md:px-10 py-3 md:py-4 text-xs md:text-sm tracking-[0.2em] hover:bg-white transition-colors">
                EXPLORE RESIDENCES
              </button>
              <button className="border border-white/30 text-white font-luxury-sans px-8 md:px-10 py-3 md:py-4 text-xs md:text-sm tracking-[0.2em] hover:border-white hover:bg-white/5 transition-colors flex items-center justify-center">
                <Play size={14} className="mr-3" /> WATCH FILM
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </header>

      <section className="border-y border-white/10 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { label: 'Stories', value: '42' },
            { label: 'Residences', value: '128' },
            { label: 'Ceiling Height', value: '12 FT' },
            { label: 'City Views', value: '360°' }
          ].map((stat, index) => (
            <div key={index} className={`py-12 text-center border-r border-white/10 ${index === 3 ? 'border-r-0' : ''}`}>
              <div className="text-4xl md:text-5xl font-light text-[#d4af37] mb-2">{stat.value}</div>
              <div className="font-luxury-sans text-xs tracking-[0.2em] text-gray-500 uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="philosophy" className="py-32 px-6 bg-[#111]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 relative">
             <RevealOnScroll>
               <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-[#d4af37]/30"></div>
               <img 
                 src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Interior Detail" 
                 className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                 onError={handleImageError}
               />
               <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-[#d4af37]/30"></div>
             </RevealOnScroll>
          </div>
          <div className="w-full md:w-1/2">
            <RevealOnScroll>
              <span className="text-[#d4af37] font-luxury-sans text-xs tracking-[0.3em] uppercase mb-6 block">The Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
                Curated for the <br/> <span className="italic text-gray-400">Uncompromising.</span>
              </h2>
              <p className="text-gray-400 font-luxury-sans font-light leading-loose mb-8">
                Every line, every curve, and every material has been chosen with deliberate intent. 
                We believe that true luxury lies not in excess, but in the precision of execution.
              </p>
              <a href="#" className="inline-flex items-center text-[#d4af37] font-luxury-sans text-xs tracking-[0.2em] hover:text-white transition-colors">
                READ THE STORY <ChevronRight size={14} className="ml-2" />
              </a>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Residence Layouts (Horizontal Scroll) */}
      <section id="residences" className="py-32 bg-[#0c0c0c] overflow-hidden">
        <div className="px-6 mb-16 text-center">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-white">The Collections</h2>
            <p className="text-gray-500 font-luxury-sans tracking-wider">SELECT YOUR SANCTUARY</p>
          </RevealOnScroll>
        </div>
        
        <div className="flex overflow-x-auto pb-12 px-6 space-x-8 scrollbar-hide">
          {[
            { name: "The Penthouse", size: "6,500 SQ.FT", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80" },
            { name: "Sky Villa", size: "4,200 SQ.FT", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
            { name: "Garden Suite", size: "3,800 SQ.FT", img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80" },
            { name: "The Atelier", size: "2,900 SQ.FT", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" }
          ].map((item, i) => (
            <div key={i} className="flex-none w-[85vw] md:w-[400px] group cursor-pointer">
              <div className="h-[500px] overflow-hidden relative mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                <img src={item.img} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" alt={item.name} onError={handleImageError} />
              </div>
              <div className="flex justify-between items-end border-b border-white/20 pb-4 group-hover:border-[#d4af37] transition-colors">
                <div>
                  <h3 className="text-2xl font-light text-white">{item.name}</h3>
                  <p className="text-xs font-luxury-sans text-gray-500 mt-2">{item.size}</p>
                </div>
                <ArrowRight className="text-[#d4af37] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Grid */}
      <section id="amenities" className="py-32 px-6 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/10 border border-white/10">
              {[
                { icon: Coffee, title: "Private Lounge", desc: "For intimate gatherings" },
                { icon: Star, title: "Infinity Pool", desc: "Overlooking the skyline" },
                { icon: Monitor, title: "Cinema", desc: "Private screening room" },
                { icon: GraduationCap, title: "Library", desc: "Curated collection" },
                { icon: Stethoscope, title: "Wellness Spa", desc: "Holistic rejuvenation" },
                { icon: Car, title: "Valet Service", desc: "24/7 Assistance" },
              ].map((amenity, idx) => {
                const Icon = amenity.icon; 
                return (
                  <div key={idx} className="bg-[#111] p-12 text-center group hover:bg-[#161616] transition-colors border border-white/5">
                    <div className="flex justify-center mb-6 text-gray-600 group-hover:text-[#d4af37] transition-colors">
                      <Icon size={32} strokeWidth={1} />
                    </div>
                    <h3 className="text-xl font-light text-white mb-2">{amenity.title}</h3>
                    <p className="text-sm font-luxury-sans text-gray-500">{amenity.desc}</p>
                  </div>
                )
              })}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="contact" className="py-32 px-6 bg-[#0c0c0c] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#111] -skew-x-12 translate-x-1/4 z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <input type="text" placeholder="First Name" className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[#d4af37] transition-colors font-luxury-sans font-light placeholder-gray-600" />
                </div>
                <div className="group">
                  <input type="text" placeholder="Last Name" className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[#d4af37] transition-colors font-luxury-sans font-light placeholder-gray-600" />
                </div>
              </div>
              <div className="group">
                <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[#d4af37] transition-colors font-luxury-sans font-light placeholder-gray-600" />
              </div>
              <div className="group">
                 <select className="w-full bg-transparent border-b border-white/20 py-4 text-gray-400 focus:outline-none focus:border-[#d4af37] transition-colors font-luxury-sans font-light">
                    <option className="bg-[#0c0c0c]">Interested in 3 BHK</option>
                    <option className="bg-[#0c0c0c]">Interested in 4 BHK</option>
                    <option className="bg-[#0c0c0c]">Penthouse Inquiry</option>
                 </select>
              </div>
              
              <div className="flex justify-center pt-8">
                <button className="bg-[#d4af37] text-black font-luxury-sans px-16 py-4 text-sm tracking-[0.2em] hover:bg-white transition-colors">
                  SUBMIT INQUIRY
                </button>
              </div>
            </form>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <footer className="bg-black py-12 text-center border-t border-white/5 font-luxury-sans text-xs tracking-[0.2em] text-gray-600">
        <div className="mb-4 text-white text-xl font-luxury-serif">{project.title}</div>
        <p>© 2025 {project.title.toUpperCase()}. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

// 2. CAFE TEMPLATE (The Roastery)
const CafeTemplate = ({ project }) => (
  <div className="font-cafe-body bg-[#FDFBF7] text-[#2c2c2c] min-h-screen overflow-y-auto scrollbar-hide">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Oswald:wght@300;400;500&display=swap');
      .font-cafe-head { font-family: 'Playfair Display', serif; }
      .font-cafe-body { font-family: 'Oswald', sans-serif; }
      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    `}</style>

    <nav className="sticky top-0 bg-[#FDFBF7]/95 backdrop-blur z-50 border-b border-[#2c2c2c]/10 py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="text-2xl font-cafe-head font-bold tracking-tighter flex items-center">
        <Coffee className="mr-2 text-orange-800" size={24} />
        THE ROASTERY<span className="text-orange-600">.</span>
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase text-[#5c5c5c]">
        {['Our Story', 'Menu', 'Vibes', 'Visit Us'].map(link => (
          <a key={link} href="#" className="hover:text-orange-800 transition-colors">{link}</a>
        ))}
      </div>
      <button className="bg-[#2c2c2c] text-white px-6 py-2 text-sm uppercase tracking-widest hover:bg-orange-800 transition-colors">
        Reserve Table
      </button>
    </nav>

    <header className="relative h-[85vh] flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        alt="Coffee Shop Interior"
        onError={handleImageError}
      />
      <div className="relative z-10 text-center px-4">
        <RevealOnScroll>
          <span className="text-orange-400 tracking-[0.3em] text-sm uppercase mb-4 block font-bold">Est. 2018 • {project.location}</span>
          <h1 className="text-6xl md:text-8xl font-cafe-head text-white mb-6 italic leading-none">
            Roasting Stories, <br/> <span className="not-italic text-[#FDFBF7]">Brewing Life.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-lg mx-auto mb-10 font-light tracking-wide">
            Small batch artisanal coffee sourced from the finest estates in India. 
            Poured with love in the heart of Delhi.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-4 bg-white text-black font-bold tracking-widest uppercase hover:bg-orange-100 transition-colors">
              View Menu
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </header>

    <div className="bg-orange-800 py-4 overflow-hidden whitespace-nowrap text-[#FDFBF7] border-y-4 border-[#2c2c2c]">
      <div className="inline-flex animate-marquee font-cafe-body text-2xl font-bold tracking-widest uppercase">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="mx-8 flex items-center">
            <Star size={16} className="mr-4 text-orange-300" /> Fresh Roast Daily <span className="mx-4">•</span> Hauz Khas Village <span className="mx-4">•</span> Artisanal Bakes
          </span>
        ))}
      </div>
    </div>

    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <RevealOnScroll>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="w-full h-[500px] object-cover rounded-none"
                alt="Barista"
                onError={handleImageError}
              />
              <div className="absolute -bottom-6 -right-6 bg-[#2c2c2c] text-white p-6 max-w-xs shadow-xl">
                <p className="font-cafe-head italic text-xl">"Coffee is a language in itself."</p>
                <p className="text-xs text-gray-400 mt-2 uppercase tracking-wider">— Jackie Chan</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
        <div className="w-full md:w-1/2">
          <RevealOnScroll>
            <h2 className="text-5xl font-cafe-head mb-6 leading-tight text-[#2c2c2c]">
              From the Hills of Coorg to <span className="italic text-orange-800">Hauz Khas.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light mb-6">
              We don't just serve coffee; we curate experiences. Our beans are hand-picked from single-origin estates in Coorg and roasted in small batches right here in the cafe. 
              The aroma that hits you when you walk in? That's the smell of dedication.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8 border-t border-gray-200 pt-8">
               <div>
                 <h4 className="text-3xl font-cafe-head text-orange-800 mb-1">100%</h4>
                 <p className="text-sm uppercase tracking-wider text-gray-500">Arabica Beans</p>
               </div>
               <div>
                 <h4 className="text-3xl font-cafe-head text-orange-800 mb-1">Daily</h4>
                 <p className="text-sm uppercase tracking-wider text-gray-500">Fresh Baking</p>
               </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <section className="py-24 bg-[#F3EFE6]">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
             <span className="text-orange-800 uppercase tracking-[0.2em] font-bold text-sm">Curated Selection</span>
             <h2 className="text-5xl font-cafe-head mt-3 text-[#2c2c2c]">The Daily Pour</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Signature Cold Brew", desc: "Steeped for 18 hours, notes of chocolate & hazelnut.", img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80" },
              { title: "Smashed Avo Toast", desc: "Sourdough, poached farm egg, chili flakes, microgreens.", img: "https://images.unsplash.com/photo-1541519527309-5181235af41d?auto=format&fit=crop&w=600&q=80" },
              { title: "Hazelnut Croissant", desc: "French butter, roasted hazelnuts, dark chocolate filling.", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-4 shadow-sm hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                <div className="h-64 overflow-hidden mb-6 relative">
                  <img src={item.img} onError={handleImageError} className="w-full h-full object-cover" alt={item.title} />
                </div>
                <h3 className="text-2xl font-cafe-head mb-2">{item.title}</h3>
                <p className="text-gray-500 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="border-b-2 border-[#2c2c2c] pb-1 text-lg hover:text-orange-800 hover:border-orange-800 transition-colors uppercase tracking-widest">
              View Full Menu
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section className="py-32 bg-fixed bg-center bg-cover relative" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1442512595367-f2d30a2919d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')` }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <RevealOnScroll>
          <h2 className="text-5xl md:text-7xl font-cafe-head text-white italic leading-tight">
            "Life happens, <br/> Coffee helps."
          </h2>
        </RevealOnScroll>
      </div>
    </section>

    <section className="py-24 px-6 max-w-7xl mx-auto">
       <RevealOnScroll>
          <div className="flex justify-between items-end mb-12">
             <div>
               <h2 className="text-4xl font-cafe-head mb-2">The Vibe</h2>
               <p className="text-gray-500 tracking-wide">@TheRoasteryHKV</p>
             </div>
             <button className="flex items-center text-sm uppercase tracking-widest hover:text-orange-800 font-bold">
               <Instagram size={18} className="mr-2" /> Follow Us
             </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
             <div className="col-span-2 row-span-2 relative overflow-hidden group">
                <img onError={handleImageError} src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Vibe 1" />
             </div>
             <div className="col-span-1 row-span-1 relative overflow-hidden group">
                <img onError={handleImageError} src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Vibe 2" />
             </div>
             <div className="col-span-1 row-span-2 relative overflow-hidden group">
                <img onError={handleImageError} src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Vibe 3" />
             </div>
             <div className="col-span-1 row-span-1 relative overflow-hidden group">
                <img onError={handleImageError} src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Vibe 4" />
             </div>
          </div>
       </RevealOnScroll>
    </section>

    <footer className="bg-[#1a1a1a] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-cafe-head mb-6">THE ROASTERY</h3>
          <p className="text-gray-400 text-sm leading-loose mb-6">
            Crafting the finest coffee experiences in Delhi since 2018. 
            Come for the coffee, stay for the vibes.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Instagram className="text-gray-400 hover:text-white cursor-pointer" />
            <Facebook className="text-gray-400 hover:text-white cursor-pointer" />
            <Twitter className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold uppercase tracking-widest mb-6 text-orange-500">Visit Us</h4>
          <p className="text-gray-300 mb-2 flex items-center justify-center md:justify-start"><MapPin size={16} className="mr-2"/> Hauz Khas Village, New Delhi</p>
          <p className="text-gray-300 mb-2">Building No. 12, Lake View</p>
          <p className="text-gray-300 flex items-center justify-center md:justify-start"><Map size={16} className="mr-2"/> Get Directions</p>
        </div>
        <div>
          <h4 className="text-lg font-bold uppercase tracking-widest mb-6 text-orange-500">Hours</h4>
          <div className="text-gray-300 space-y-2">
            <p className="flex justify-between max-w-[200px] mx-auto md:mx-0"><span>Mon - Fri:</span> <span>8am - 11pm</span></p>
            <p className="flex justify-between max-w-[200px] mx-auto md:mx-0"><span>Sat - Sun:</span> <span>9am - 12am</span></p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-600 text-xs tracking-widest uppercase">
        © 2025 The Roastery. All Rights Reserved.
      </div>
    </footer>
  </div>
);

// 3. LIFESTYLE TEMPLATE (Urban Threads)
const LifestyleTemplate = ({ project }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // --- HERO CAROUSEL LOGIC ---
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const heroImages = [
    project.image,
    "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1503342217505-b0815a046baf?auto=format&fit=crop&w=1600&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // --- PRODUCT SLIDER LOGIC ---
  const sliderRef = useRef(null);
  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 320; // width of card + gap
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="font-street-body bg-white text-black min-h-screen overflow-x-hidden relative scrollbar-hide">
       <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;800&display=swap');
        .font-street-head { font-family: 'Anton', sans-serif; }
        .font-street-body { font-family: 'Inter', sans-serif; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
      `}</style>

      {/* Sidebar Overlay */}
       <div className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)} />

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-zinc-950 text-white z-[70] transform transition-transform duration-500 ease-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} p-8 flex flex-col shadow-2xl border-r border-zinc-800`}>
        <div className="flex justify-between items-center mb-16">
           <span className="font-street-head text-3xl tracking-wider text-white">MENU</span>
           <X className="cursor-pointer hover:text-yellow-400 transition-colors" onClick={() => setIsMenuOpen(false)} size={28} />
        </div>
        <nav className="flex flex-col space-y-8 font-street-head text-4xl tracking-wide">
           {['New Arrivals', 'Men', 'Women', 'Accessories', 'Collections', 'Sale'].map((item, i) => (
             <a 
                key={item} 
                href="#" 
                className="hover:text-yellow-400 transition-all origin-left hover:translate-x-2 duration-300 block"
                style={{ transitionDelay: `${i * 50}ms` }}
             >
               {item.toUpperCase()}
             </a>
           ))}
        </nav>
        <div className="mt-auto space-y-6 text-zinc-500 font-street-body text-sm font-medium">
           <div className="flex items-center cursor-pointer hover:text-white transition-colors"><User size={18} className="mr-3"/> Account</div>
           <div className="flex items-center cursor-pointer hover:text-white transition-colors"><Heart size={18} className="mr-3"/> Wishlist</div>
           <div className="flex items-center cursor-pointer hover:text-white transition-colors"><HelpCircle size={18} className="mr-3"/> Support</div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 md:p-6 sticky top-0 bg-white/95 backdrop-blur z-50 border-b-2 border-black">
         <div className="flex items-center gap-4 md:gap-6">
            <Menu className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setIsMenuOpen(true)} size={28} strokeWidth={2} />
            <Search className="cursor-pointer hidden md:block hover:text-zinc-600" size={24} strokeWidth={2} />
         </div>
         <div className="font-street-head text-2xl md:text-4xl tracking-tighter uppercase select-none cursor-pointer text-center">{project.title}</div>
         <div className="flex items-center gap-4 md:gap-6">
            <div className="relative cursor-pointer hover:scale-110 transition-transform">
               <ShoppingBag size={24} strokeWidth={2} />
               <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold border-2 border-white">2</span>
            </div>
         </div>
      </nav>

      {/* Hero Carousel */}
      <header className="relative h-[80vh] w-full bg-zinc-100 overflow-hidden flex items-center">
         {heroImages.map((img, index) => (
            <div 
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentHeroIndex ? 'opacity-100' : 'opacity-0'}`}
            >
                <img 
                  src={img} 
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 ease-out scale-105"
                  alt={`Urban Fashion ${index + 1}`}
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            </div>
         ))}

         <div className="absolute bottom-8 right-8 flex space-x-2 z-20">
            {heroImages.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentHeroIndex(idx)}
                className={`w-12 h-1 transition-all ${idx === currentHeroIndex ? 'bg-yellow-400' : 'bg-white/50 hover:bg-white'}`}
              />
            ))}
         </div>

         <div className="relative z-10 px-8 md:px-16 max-w-4xl">
            <RevealOnScroll>
               <div className="bg-yellow-400 text-black font-bold text-xs px-4 py-1 inline-block mb-4 uppercase tracking-widest border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  Fall / Winter 2025
               </div>
               <h1 className="font-street-head text-5xl md:text-9xl text-white leading-[0.85] mb-8 drop-shadow-xl">
                  STREETWEAR <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">REDEFINED.</span>
               </h1>
               <button className="bg-white text-black px-10 py-4 font-street-head text-xl tracking-widest hover:bg-black hover:text-white transition-all border-2 border-white hover:border-black hover:scale-105">
                  SHOP THE DROP
               </button>
            </RevealOnScroll>
         </div>
      </header>

      {/* Ticker */}
      <div className="bg-black text-white py-3 overflow-hidden border-y border-white/10">
         <div className="inline-flex animate-marquee font-street-body font-bold text-sm uppercase tracking-[0.2em]">
            {[...Array(6)].map((_, i) => (
               <span key={i} className="mx-8">Free Shipping on orders over ₹2000 • 30-Day Returns • Global Delivery</span>
            ))}
         </div>
      </div>

      {/* Collections Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 h-auto md:h-[80vh]">
         {[
            { title: "MEN", img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80" },
            { title: "WOMEN", img: "https://images.unsplash.com/photo-1550614000-4b9519e02d48?auto=format&fit=crop&w=800&q=80" },
            { title: "ACCESSORIES", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80" }
         ].map((cat, i) => (
            <div key={i} className="relative group overflow-hidden cursor-pointer border-r border-b border-black h-[500px] md:h-full">
               <img src={cat.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt={cat.title} onError={handleImageError} />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="font-street-head text-6xl text-white tracking-tighter relative z-10 group-hover:scale-125 transition-transform duration-500 drop-shadow-lg stroke-black stroke-2">
                     {cat.title}
                  </h2>
               </div>
               <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                   <span className="bg-white text-black px-6 py-2 font-bold uppercase text-sm border-2 border-black hover:bg-black hover:text-white transition-colors">Explore</span>
               </div>
            </div>
         ))}
      </section>

      {/* The Drop (Product Slider) */}
      <section className="py-24 px-6 overflow-hidden border-b-2 border-black">
         <div className="max-w-full mx-auto">
            <div className="flex justify-between items-end mb-12 px-4">
               <h2 className="font-street-head text-6xl md:text-8xl leading-none">LATEST <br/> DROPS</h2>
               <div className="hidden md:flex space-x-4">
                  <button 
                    onClick={() => scrollSlider('left')}
                    className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition-colors active:scale-95"
                  >
                    <ArrowRight className="rotate-180" />
                  </button>
                  <button 
                    onClick={() => scrollSlider('right')}
                    className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition-colors active:scale-95"
                  >
                    <ArrowRight />
                  </button>
               </div>
            </div>
            
            <div 
              ref={sliderRef}
              className="flex overflow-x-auto pb-8 space-x-8 scrollbar-hide px-4 scroll-smooth"
            >
               {[
                 { name: "Oversized Graphic Tee", price: "₹1,499", img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80" },
                 { name: "Cargo Utility Pants", price: "₹2,999", img: "https://images.unsplash.com/photo-1624378439575-d8aa1a5f4d71?auto=format&fit=crop&w=600&q=80" },
                 { name: "Retro High-Tops", price: "₹5,499", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80" },
                 { name: "Distressed Denim Jacket", price: "₹3,299", img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=600&q=80" },
                 { name: "Bucket Hat", price: "₹899", img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?auto=format&fit=crop&w=600&q=80" }
               ].map((prod, i) => (
                  <div key={i} className="flex-none w-[300px] group cursor-pointer">
                     <div className="h-[400px] bg-zinc-100 mb-4 relative overflow-hidden border-2 border-transparent group-hover:border-black transition-all">
                        <img src={prod.img} className="w-full h-full object-cover mix-blend-multiply" alt={prod.name} onError={handleImageError} />
                        <div className="absolute top-4 right-4 bg-black text-white px-2 py-1 font-bold text-xs">NEW</div>
                        <button className="absolute bottom-0 w-full bg-black text-white py-3 font-bold uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300">Add to Cart</button>
                     </div>
                     <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg leading-tight max-w-[70%]">{prod.name}</h3>
                        <span className="font-street-head text-xl">{prod.price}</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Shop The Look */}
      <section className="py-24 bg-black text-white">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
               <RevealOnScroll>
                   <img src="https://images.unsplash.com/photo-1529139574466-a302d27f6054?auto=format&fit=crop&w=800&q=80" alt="Lookbook" className="w-full grayscale hover:grayscale-0 transition-all duration-700 border-2 border-zinc-800" onError={handleImageError} />
               </RevealOnScroll>
            </div>
            <div className="w-full md:w-1/2">
               <RevealOnScroll>
                  <h2 className="font-street-head text-8xl mb-6">ESSENTIALS <br/> ONLY.</h2>
                  <p className="text-zinc-400 text-lg mb-8 max-w-md font-street-body leading-relaxed">
                     Quality fabrics, oversized fits, and designs that speak for themselves. 
                     Upgrade your wardrobe with our curated selection of everyday essentials.
                  </p>
                  <button className="bg-white text-black px-12 py-4 font-street-head text-xl tracking-widest hover:bg-yellow-400 transition-colors">
                     VIEW LOOKBOOK
                  </button>
               </RevealOnScroll>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black py-16 px-6 border-t-2 border-black">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
               <h3 className="font-street-head text-5xl mb-6">{project.title}</h3>
               <p className="max-w-sm text-zinc-600 font-medium mb-8">
                  Redefining street culture through fashion. Based in New Delhi. 
                  Designed for the world.
               </p>
               <div className="flex space-x-4">
                  <Instagram className="hover:text-zinc-600 cursor-pointer" strokeWidth={2} />
                  <Facebook className="hover:text-zinc-600 cursor-pointer" strokeWidth={2} />
                  <Twitter className="hover:text-zinc-600 cursor-pointer" strokeWidth={2} />
               </div>
            </div>
            <div>
               <h4 className="font-bold uppercase tracking-wider mb-6">Shop</h4>
               <ul className="space-y-2 text-sm font-medium text-zinc-600">
                  <li className="hover:text-black cursor-pointer">New Arrivals</li>
                  <li className="hover:text-black cursor-pointer">Best Sellers</li>
                  <li className="hover:text-black cursor-pointer">Sale</li>
                  <li className="hover:text-black cursor-pointer">Gift Cards</li>
               </ul>
            </div>
            <div>
               <h4 className="font-bold uppercase tracking-wider mb-6">Support</h4>
               <ul className="space-y-2 text-sm font-medium text-zinc-600">
                  <li className="hover:text-black cursor-pointer">Order Status</li>
                  <li className="hover:text-black cursor-pointer">Returns & Exchanges</li>
                  <li className="hover:text-black cursor-pointer">Size Guide</li>
                  <li className="hover:text-black cursor-pointer">Contact Us</li>
               </ul>
            </div>
         </div>
         <div className="text-center text-xs font-bold uppercase mt-16 pt-8 border-t border-black/10">
            © 2025 Urban Threads. All Rights Reserved.
         </div>
      </footer>
    </div>
  );
};

// 4. TRUST TEMPLATE (Healthcare - Dr. Sharma)
const TrustTemplate = ({ project }) => (
  <div className="font-trust-sans bg-white text-slate-700 min-h-screen overflow-y-auto scrollbar-hide">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@300;400;700&display=swap');
      .font-trust-sans { font-family: 'Inter', sans-serif; }
      .font-trust-serif { font-family: 'Merriweather', serif; }
      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    `}</style>

    {/* Emergency Bar */}
    <div className="bg-[#E63946] text-white text-xs font-bold py-2 px-6 flex justify-between items-center">
       <div className="flex items-center animate-pulse"><Activity size={14} className="mr-2" /> 24/7 EMERGENCY SERVICE AVAILABLE</div>
       <div className="hidden md:block">CALL AMBULANCE: 102</div>
    </div>

    {/* Top Info Bar */}
    <div className="bg-[#F1FAEE] text-[#1D3557] text-sm py-3 px-6 border-b border-[#A8DADC]/30 hidden md:flex justify-between items-center">
      <div className="flex space-x-6">
        <span className="flex items-center"><MapPin size={14} className="mr-1 text-[#457B9D]" /> {project.location}</span>
        <span className="flex items-center"><Mail size={14} className="mr-1 text-[#457B9D]" /> contact@drsharma.com</span>
      </div>
      <div className="flex items-center font-semibold">
        <Clock size={14} className="mr-1 text-[#457B9D]" /> Mon - Sat: 9:00 AM - 7:00 PM
      </div>
    </div>

    {/* Nav */}
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#457B9D] rounded-lg flex items-center justify-center text-white shadow-md">
            <Stethoscope size={20} />
          </div>
          <div>
            <span className="font-trust-serif font-bold text-xl text-[#1D3557] block leading-none">Dr. Sharma</span>
            <span className="text-[10px] uppercase tracking-widest text-[#457B9D] font-bold">Cardiology Center</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-[#1D3557]">
          {['Home', 'About Doctor', 'Services', 'Patient Portal'].map(item => (
             <a key={item} href="#" className="hover:text-[#E63946] transition-colors py-2 border-b-2 border-transparent hover:border-[#E63946]">{item}</a>
          ))}
        </div>
        <button className="bg-[#1D3557] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#457B9D] transition-all shadow-lg hover:shadow-[#457B9D]/30 flex items-center">
          <Calendar size={16} className="mr-2" /> Book Appointment
        </button>
      </div>
    </nav>

    {/* Hero */}
    <header className="bg-gradient-to-r from-[#F1FAEE] to-white py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1">
          <span className="bg-[#E63946]/10 text-[#E63946] font-bold text-xs px-3 py-1 rounded-full mb-6 inline-block">
            #1 CARDIOLOGIST IN DELHI NCR
          </span>
          <h1 className="text-5xl md:text-6xl font-trust-serif font-bold text-[#1D3557] mb-6 leading-tight">
            Your Heart is in <br/> <span className="text-[#457B9D]">Safe Hands.</span>
          </h1>
          <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg">
            Combining 20+ years of experience with advanced medical technology to provide world-class cardiac care. Compassionate, personalized, and effective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-[#E63946] text-white rounded-lg font-bold shadow-lg shadow-[#E63946]/20 hover:-translate-y-1 transition-all">
              Make an Appointment
            </button>
            <button className="px-8 py-4 bg-white border border-slate-200 text-[#1D3557] rounded-lg font-bold hover:bg-[#F1FAEE] transition-colors flex items-center justify-center">
              <Play size={16} className="mr-2 text-[#E63946]" /> Learn More
            </button>
          </div>
          <div className="mt-12 flex items-center space-x-8 border-t border-slate-200 pt-8">
             <div>
                <div className="text-3xl font-bold text-[#1D3557]">10k+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide">Patients Healed</div>
             </div>
             <div>
                <div className="text-3xl font-bold text-[#1D3557]">20+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide">Years Exp.</div>
             </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#457B9D]/10 rounded-full blur-3xl -z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            className="relative rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover" 
            alt="Doctor Portrait" 
            onError={handleImageError}
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-[#E63946]">
             <div className="flex items-center mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-yellow-400 fill-current" />)}
             </div>
             <p className="text-sm font-bold text-[#1D3557]">"Best cardiac care in the city."</p>
             <p className="text-xs text-slate-400 mt-1">- Rajesh K., Patient</p>
          </div>
        </div>
      </div>
    </header>

    {/* Services Grid */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
         <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-trust-serif font-bold text-[#1D3557] mb-4">Comprehensive Cardiac Care</h2>
              <p className="text-slate-500">We utilize the latest diagnostic and treatment technologies to ensure the best outcomes for your heart health.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "Clinical Cardiology", icon: Activity, desc: "Diagnosis and treatment of heart diseases using medication and lifestyle changes." },
                 { title: "Intervention", icon: Shield, desc: "Minimally invasive procedures like Angioplasty and Stenting." },
                 { title: "Preventive Care", icon: CheckCircle, desc: "Risk assessment and management programs to prevent heart attacks." },
                 { title: "Heart Failure", icon: Activity, desc: "Specialized care plans for managing and treating chronic heart failure." },
                 { title: "Diagnostic Labs", icon: Monitor, desc: "In-house ECG, Echocardiography, and Stress Testing facilities." },
                 { title: "Rehabilitation", icon: User, desc: "Post-procedure recovery programs tailored to your needs." },
               ].map((s, i) => (
                 <div key={i} className="p-8 rounded-2xl border border-slate-100 hover:border-[#457B9D] hover:shadow-xl transition-all group bg-slate-50/50 hover:bg-white cursor-pointer">
                    <div className="w-14 h-14 bg-[#F1FAEE] text-[#457B9D] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#457B9D] group-hover:text-white transition-colors">
                       <s.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-[#1D3557] mb-3">{s.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                 </div>
               ))}
            </div>
         </RevealOnScroll>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-[#1D3557] text-white relative overflow-hidden">
       <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
       <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <RevealOnScroll>
             <h2 className="text-3xl md:text-4xl font-trust-serif font-bold mb-6">Prioritize Your Heart Health Today</h2>
             <p className="text-blue-100 mb-10 text-lg">Don't wait for symptoms to worsen. Early detection is key to a healthy life. Schedule your consultation now.</p>
             <div className="bg-white rounded-2xl p-2 inline-flex items-center p-2 max-w-md w-full mx-auto shadow-2xl">
                <input type="text" placeholder="Enter your phone number" className="flex-1 px-4 py-3 text-slate-900 focus:outline-none rounded-l-xl" />
                <button className="bg-[#E63946] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#D62828] transition-colors whitespace-nowrap">
                   Request Call
                </button>
             </div>
          </RevealOnScroll>
       </div>
    </section>

    {/* Footer */}
    <footer className="bg-[#F1FAEE] pt-16 pb-8 border-t border-[#A8DADC]">
       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
             <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-[#1D3557] rounded flex items-center justify-center text-white">
                  <Stethoscope size={16} />
                </div>
                <span className="font-trust-serif font-bold text-lg text-[#1D3557]">Dr. Sharma</span>
             </div>
             <p className="text-slate-500 text-sm leading-relaxed">
                Dedicated to providing the highest quality cardiac care with compassion and integrity.
             </p>
          </div>
          <div>
             <h4 className="font-bold text-[#1D3557] mb-4">Quick Links</h4>
             <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-[#E63946]">About Us</a></li>
                <li><a href="#" className="hover:text-[#E63946]">Our Services</a></li>
                <li><a href="#" className="hover:text-[#E63946]">Doctors</a></li>
                <li><a href="#" className="hover:text-[#E63946]">Contact</a></li>
             </ul>
          </div>
          <div>
             <h4 className="font-bold text-[#1D3557] mb-4">Legal</h4>
             <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-[#E63946]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#E63946]">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#E63946]">Patient Rights</a></li>
             </ul>
          </div>
          <div>
             <h4 className="font-bold text-[#1D3557] mb-4">Contact</h4>
             <p className="text-sm text-slate-600 mb-2 flex items-center"><Phone size={14} className="mr-2"/> +91 98765 43210</p>
             <p className="text-sm text-slate-600 mb-2 flex items-center"><Mail size={14} className="mr-2"/> info@drsharma.com</p>
             <p className="text-sm text-slate-600 flex items-start"><MapPin size={14} className="mr-2 mt-1"/> South Ext II, New Delhi - 110049</p>
          </div>
       </div>
       <div className="text-center text-slate-400 text-xs border-t border-slate-200 pt-8">
          © 2025 Dr. Sharma Cardiology. All Rights Reserved.
       </div>
    </footer>
  </div>
);

// 5. EDUCATION TEMPLATE (EduPrime)
const EducationTemplate = ({ project }) => (
  <div className="font-sans bg-slate-50 text-slate-800 min-h-screen overflow-y-auto scrollbar-hide">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
      .font-edu-head { font-family: 'Outfit', sans-serif; }
      .font-edu-body { font-family: 'Plus Jakarta Sans', sans-serif; }
      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    `}</style>

    {/* Announcement Bar */}
    <div className="bg-gradient-to-r from-[#ff9f1c] to-[#ffb703] text-[#1e293b] font-edu-body font-bold text-xs py-2 px-6 text-center">
      <span className="animate-pulse mr-2">🔥</span> ADMISSIONS OPEN FOR 2025 BATCH - NEET & JEE <span className="underline cursor-pointer ml-2">APPLY NOW</span>
    </div>

    {/* Navbar */}
    <nav className="sticky top-0 bg-white/95 backdrop-blur z-50 border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#2ec4b6] rounded-xl rotate-3 flex items-center justify-center text-white shadow-lg shadow-[#2ec4b6]/30">
            <GraduationCap size={24} strokeWidth={2.5} />
          </div>
          <span className="font-edu-head font-extrabold text-2xl text-[#0f172a] tracking-tight">Edu<span className="text-[#2ec4b6]">Prime</span></span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-edu-body font-semibold text-slate-600">
           {['Courses', 'Results', 'Study Material', 'Faculty'].map(link => (
             <a key={link} href="#" className="hover:text-[#2ec4b6] transition-colors">{link}</a>
           ))}
        </div>
        <div className="flex items-center space-x-4">
          <button className="hidden md:block text-sm font-bold text-[#2ec4b6] hover:text-[#208b81]">Student Login</button>
          <button className="bg-[#0f172a] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#1e293b] transition-colors shadow-lg">
            Join Demo Class
          </button>
        </div>
      </div>
    </nav>

    {/* Hero */}
    <header className="bg-[#0f172a] text-white py-24 px-6 relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2ec4b6]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ff9f1c]/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1">
           <span className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 border border-white/10 text-[#2ec4b6] font-bold text-xs mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#2ec4b6] rounded-full mr-2 animate-pulse"></span> LIVE CLASSES ENABLED
           </span>
           <h1 className="font-edu-head font-extrabold text-5xl md:text-7xl mb-6 leading-tight">
             Unlock Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ec4b6] to-[#cbfffd]">True Potential.</span>
           </h1>
           <p className="font-edu-body text-slate-300 text-lg mb-10 max-w-xl leading-relaxed">
             India's most trusted coaching institute for JEE, NEET, and Foundation courses. 
             Learn from top IITian faculty and get personalized mentorship.
           </p>
           <div className="flex flex-col sm:flex-row gap-4">
             <button className="px-8 py-4 bg-[#2ec4b6] text-white rounded-xl font-bold shadow-xl shadow-[#2ec4b6]/20 hover:-translate-y-1 transition-all font-edu-body">
               View All Courses
             </button>
             <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-colors flex items-center justify-center font-edu-body backdrop-blur-sm">
               <Play size={18} className="mr-2 fill-current" /> Watch Success Story
             </button>
           </div>
           <div className="mt-12 flex items-center space-x-8">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0f172a] bg-slate-700 flex items-center justify-center overflow-hidden">
                    <img src={`https://source.unsplash.com/random/100x100?face,${i}`} alt="Student" className="w-full h-full object-cover" onError={handleImageError} />
                  </div>
                ))}
              </div>
              <div className="text-sm font-semibold">
                <span className="text-[#ff9f1c]">5000+</span> Students Trusted Us
              </div>
           </div>
        </div>
        <div className="flex-1 relative hidden md:block">
           <div className="relative z-10 bg-gradient-to-b from-slate-800 to-slate-900 p-2 rounded-3xl shadow-2xl border border-slate-700">
             <img 
               src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               className="rounded-2xl w-full h-full object-cover" 
               alt="Student Studying" 
               onError={handleImageError}
             />
             <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] border-l-8 border-[#ff9f1c]">
               <div className="text-[#0f172a] font-extrabold text-4xl font-edu-head">98%</div>
               <div className="text-slate-500 text-xs font-bold uppercase mt-1">Selection Rate</div>
             </div>
           </div>
           {/* Floating Elements */}
           <div className="absolute top-10 -left-10 bg-white p-4 rounded-xl shadow-lg animate-bounce-slow">
              <BookOpen size={24} className="text-[#2ec4b6]" />
           </div>
           <div className="absolute bottom-20 -left-5 bg-white p-4 rounded-xl shadow-lg animate-bounce-slow" style={{ animationDelay: '1s' }}>
              <Award size={24} className="text-[#ff9f1c]" />
           </div>
        </div>
      </div>
    </header>

    {/* Stats Strip */}
    <div className="bg-[#2ec4b6] py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around gap-8 text-center">
         {[
           { num: "15+", label: "Years Experience" },
           { num: "200+", label: "Expert Faculty" },
           { num: "10k+", label: "Selections" },
           { num: "50+", label: "Centers" }
         ].map((stat, i) => (
           <div key={i} className="text-white">
             <div className="text-3xl font-extrabold font-edu-head mb-1">{stat.num}</div>
             <div className="text-xs font-bold uppercase tracking-wider opacity-80">{stat.label}</div>
           </div>
         ))}
      </div>
    </div>

    {/* Popular Courses */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
           <div className="text-center mb-16">
             <h2 className="text-4xl font-extrabold font-edu-head text-[#0f172a] mb-4">Our Popular Courses</h2>
             <p className="text-slate-500 max-w-2xl mx-auto">Comprehensive study programs designed by experts to ensure your success in competitive exams.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: "JEE Main & Advanced", tag: "ENGINEERING", color: "bg-blue-100 text-blue-700" },
               { title: "NEET Medical", tag: "MEDICAL", color: "bg-green-100 text-green-700" },
               { title: "Foundation (8th-10th)", tag: "EARLY START", color: "bg-orange-100 text-orange-700" }
             ].map((course, i) => (
               <div key={i} className="border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer bg-white group relative overflow-hidden">
                  <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold mb-6 ${course.color}`}>
                    {course.tag}
                  </div>
                  <h3 className="text-2xl font-bold font-edu-head text-[#0f172a] mb-4">{course.title}</h3>
                  <ul className="space-y-3 mb-8">
                    {['Daily Live Classes', 'Comprehensive Study Material', 'Regular Mock Tests'].map((feat, j) => (
                      <li key={j} className="flex items-center text-sm text-slate-600">
                        <CheckCircle size={16} className="text-[#2ec4b6] mr-2" /> {feat}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 border-2 border-[#0f172a] text-[#0f172a] font-bold rounded-xl hover:bg-[#0f172a] hover:text-white transition-colors">
                    View Details
                  </button>
                  <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-[#2ec4b6]/10 transition-colors"></div>
               </div>
             ))}
           </div>
        </RevealOnScroll>
      </div>
    </section>

    {/* LMS Features */}
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
         <div className="w-full md:w-1/2">
           <RevealOnScroll>
             <img 
               src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               className="rounded-2xl shadow-2xl w-full" 
               alt="LMS Interface" 
               onError={handleImageError}
             />
           </RevealOnScroll>
         </div>
         <div className="w-full md:w-1/2">
            <RevealOnScroll>
              <h2 className="text-4xl font-extrabold font-edu-head text-[#0f172a] mb-6">Smart Learning App <br/> For Smart Students</h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Access your classroom from anywhere. Our AI-powered learning management system ensures you never miss a beat.
              </p>
              <div className="space-y-6">
                 {[
                   { icon: Video, title: "Recorded Lectures", desc: "Missed a class? Watch high-quality recordings anytime." },
                   { icon: BookOpen, title: "Digital Library", desc: "Access thousands of e-books and notes on the go." },
                   { icon: Activity, title: "Performance Analytics", desc: "Track your progress with detailed test analysis reports." }
                 ].map((feat, i) => (
                   <div key={i} className="flex items-start">
                     <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#2ec4b6] mr-4 shrink-0">
                       <feat.icon size={24} />
                     </div>
                     <div>
                       <h4 className="font-bold text-[#0f172a] text-lg">{feat.title}</h4>
                       <p className="text-slate-500 text-sm">{feat.desc}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </RevealOnScroll>
         </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-[#0f172a] text-slate-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
           <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-[#2ec4b6] rounded-lg flex items-center justify-center text-white">
                <GraduationCap size={18} />
              </div>
              <span className="font-edu-head font-bold text-2xl text-white">Edu<span className="text-[#2ec4b6]">Prime</span></span>
           </div>
           <p className="max-w-sm text-sm leading-relaxed mb-8">
             EduPrime is committed to empowering students with the knowledge and skills required to ace competitive exams and build a successful career.
           </p>
           <div className="flex space-x-4">
             <Instagram className="hover:text-[#2ec4b6] cursor-pointer" />
             <Facebook className="hover:text-[#2ec4b6] cursor-pointer" />
             <Twitter className="hover:text-[#2ec4b6] cursor-pointer" />
           </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Courses</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-[#2ec4b6] cursor-pointer">JEE Main & Advanced</li>
            <li className="hover:text-[#2ec4b6] cursor-pointer">NEET Medical</li>
            <li className="hover:text-[#2ec4b6] cursor-pointer">Class 11th & 12th</li>
            <li className="hover:text-[#2ec4b6] cursor-pointer">Foundation (8-10)</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>Noida Sector 62, UP</li>
            <li>support@eduprime.com</li>
            <li>+91 98765 43210</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs">
        © 2025 EduPrime Coaching. All Rights Reserved.
      </div>
    </footer>
  </div>
);

// 6. TECH/COWORKING TEMPLATE (TechSpace)
const TechTemplate = ({ project }) => (
  <div className="font-tech-sans bg-zinc-950 text-white min-h-screen overflow-y-auto scrollbar-hide">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
      .font-tech-head { font-family: 'Space Grotesk', sans-serif; }
      .font-tech-sans { font-family: 'Inter', sans-serif; }
      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    `}</style>

    {/* Navbar */}
    <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="text-2xl font-tech-head font-bold tracking-tighter flex items-center">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg mr-3 flex items-center justify-center text-black">
            <Zap size={20} fill="currentColor" />
          </div>
          TechSpace
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-zinc-400">
          {['Locations', 'Membership', 'Enterprise', 'Events'].map(link => (
            <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button className="hidden md:block text-sm text-zinc-300 hover:text-white">Log In</button>
          <button className="bg-white text-black px-5 py-2 rounded-lg font-bold text-sm hover:bg-emerald-400 transition-colors">
            Book a Tour
          </button>
        </div>
      </div>
    </nav>

    {/* Hero */}
    <header className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-medium text-emerald-400 uppercase tracking-wide">Now Open in Cyber City</span>
          </div>
          <h1 className="font-tech-head text-5xl md:text-7xl font-bold leading-tight mb-6">
            Workspace for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">The Future.</span>
          </h1>
          <p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-md">
            Join a community of innovators, creators, and tech leaders. 
            High-speed internet, 24/7 access, and coffee on tap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-emerald-500 text-black rounded-xl font-bold hover:bg-emerald-400 transition-colors flex items-center justify-center">
              Get Started <ArrowRight size={18} className="ml-2" />
            </button>
            <button className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-xl font-bold hover:border-zinc-600 transition-colors">
              View Locations
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-emerald-500/10">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Modern Office" 
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
            {/* Floating UI Card */}
            <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4">
               <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border border-black overflow-hidden">
                      <img src={`https://source.unsplash.com/random/100x100?portrait,${i}`} className="w-full h-full object-cover" onError={handleImageError} />
                    </div>
                  ))}
               </div>
               <div className="text-xs">
                 <span className="block font-bold text-white">500+ Members</span>
                 <span className="text-emerald-400">Active Now</span>
               </div>
            </div>
          </div>
          {/* Grid pattern decoration */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-20"></div>
        </div>
      </div>
    </header>

    {/* Amenities (Bento Grid) */}
    <section className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-tech-head text-3xl md:text-4xl font-bold mb-4">Engineered for Productivity</h2>
          <p className="text-zinc-400">Everything you need to ship faster.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-950 p-8 rounded-3xl border border-white/5 col-span-1 md:col-span-2 flex items-center justify-between group hover:border-emerald-500/30 transition-colors">
             <div>
               <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-4 text-emerald-400">
                 <Wifi size={24} />
               </div>
               <h3 className="text-xl font-bold mb-2">Gigabit Internet</h3>
               <p className="text-zinc-400 text-sm">Dedicated fiber lines with redundancy.</p>
             </div>
             <div className="text-4xl font-tech-head font-bold text-zinc-800 group-hover:text-emerald-500/20 transition-colors">1GBPS</div>
          </div>
          <div className="bg-zinc-950 p-8 rounded-3xl border border-white/5 group hover:border-emerald-500/30 transition-colors">
             <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-4 text-purple-400">
               <Coffee size={24} />
             </div>
             <h3 className="text-xl font-bold mb-2">Unlimited Brews</h3>
             <p className="text-zinc-400 text-sm">Artisanal coffee & tea on tap.</p>
          </div>
          <div className="bg-zinc-950 p-8 rounded-3xl border border-white/5 group hover:border-emerald-500/30 transition-colors">
             <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-4 text-blue-400">
               <MonitorPlay size={24} />
             </div>
             <h3 className="text-xl font-bold mb-2">Zoom Rooms</h3>
             <p className="text-zinc-400 text-sm">Soundproof pods for calls.</p>
          </div>
          <div className="bg-zinc-950 p-8 rounded-3xl border border-white/5 col-span-1 md:col-span-2 group hover:border-emerald-500/30 transition-colors">
             <div className="flex items-start justify-between">
                <div>
                   <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-4 text-orange-400">
                     <Users size={24} />
                   </div>
                   <h3 className="text-xl font-bold mb-2">Community Events</h3>
                   <p className="text-zinc-400 text-sm">Weekly workshops, founder talks, and happy hours.</p>
                </div>
                <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-950"></div>)}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    {/* Pricing */}
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-tech-head text-3xl md:text-4xl font-bold mb-16 text-center">Flexible Membership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Hot Desk", price: "₹7,999", period: "/mo", desc: "Access to open workspace in common areas.", icon: Zap },
            { title: "Dedicated Desk", price: "₹12,999", period: "/mo", desc: "Your own fixed desk with lockable storage.", icon: Monitor, featured: true },
            { title: "Private Office", price: "₹24,999", period: "/mo", desc: "Fully furnished enclosed offices for teams.", icon: Building2 }
          ].map((plan, i) => (
            <div key={i} className={`relative p-8 rounded-3xl border ${plan.featured ? 'bg-white/5 border-emerald-500' : 'bg-zinc-950 border-white/5'} flex flex-col`}>
               {plan.featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>}
               <div className="mb-6 p-3 bg-zinc-900 rounded-xl w-fit">
                 <plan.icon size={24} className="text-white" />
               </div>
               <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
               <div className="flex items-baseline mb-6">
                 <span className="text-3xl font-bold">{plan.price}</span>
                 <span className="text-zinc-500 text-sm ml-1">{plan.period}</span>
               </div>
               <p className="text-zinc-400 text-sm mb-8 flex-1">{plan.desc}</p>
               <button className={`w-full py-3 rounded-xl font-bold transition-colors ${plan.featured ? 'bg-emerald-500 text-black hover:bg-emerald-400' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}>
                 Choose Plan
               </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-white/10 py-12 px-6 bg-zinc-950 text-sm text-zinc-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Zap size={16} className="text-emerald-500 mr-2" />
          <span className="text-white font-bold">TechSpace</span>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>
        <div className="mt-4 md:mt-0">
          &copy; 2025 TechSpace Coworking.
        </div>
      </div>
    </footer>
  </div>
);

// --- MAIN APP COMPONENTS ---

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex-shrink-0">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent cursor-pointer">
            TheWebPorter
          </span>
        </div>
        <div className="hidden md:block">
          <button
            onClick={() => window.open('https://wa.me/919166361317?text=send%20your%20software%20queries%20we%20will%20respond%20ASAP%0A%0Aअपने%20सॉफ्टवेयर%20प्रश्न%20भेजें%2C%20हम%20जल्द%20से%20जल्द%20जवाााब%20देंगे', '_blank')}
            className="bg-white text-black hover:bg-purple-400 hover:text-white px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105"
          >
            Start Project
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Modal = ({ project, onClose, onPreview }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="relative bg-zinc-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-white/10 flex flex-col md:flex-row">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="w-full md:w-1/2 h-64 md:h-auto relative group">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
             <span className="text-white text-sm font-medium">Preview Available</span>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-xs font-medium text-purple-400 bg-purple-400/10 rounded-full mb-3">
              {project.category}
            </span>
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            <div className="flex items-center text-zinc-400 text-sm mb-4">
              <MapPin size={14} className="mr-1" />
              {project.location}
            </div>
            <p className="text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Key Features</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-sm text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-white/10">
            <button 
              onClick={() => onPreview(project)}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center group shadow-lg hover:shadow-purple-500/30"
            >
              Launch Live Preview
              <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-zinc-500 text-xs text-center mt-3">
              Opens interactive demo tailored for {project.category}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-white/5 hover:border-purple-500/50 transition-all duration-500 cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className="aspect-w-16 aspect-h-12 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
          <span className="bg-white text-black px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center">
            View Project <Eye size={16} className="ml-2" />
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-zinc-500 text-sm mt-1 flex items-center">
              {project.category}
            </p>
          </div>
          <div className="p-2 bg-zinc-800 rounded-full text-zinc-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
             <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [viewMode, setViewMode] = useState('catalogue'); // 'catalogue' | 'preview'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activePreviewProject, setActivePreviewProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(PORTFOLIO_ITEMS);

  useEffect(() => {
    const lowerQuery = searchQuery.toLowerCase();
    const filtered = PORTFOLIO_ITEMS.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(lowerQuery) || 
                            item.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
                            item.location.toLowerCase().includes(lowerQuery);
      return matchesCategory && matchesSearch;
    });
    setFilteredProjects(filtered);
  }, [selectedCategory, searchQuery]);

  const handleLivePreview = (project) => {
    setSelectedProject(null); // Close modal
    setActivePreviewProject(project);
    setViewMode('preview');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  const closePreview = () => {
    setViewMode('catalogue');
    setActivePreviewProject(null);
  };

  // --- PREVIEW RENDERER ---
  if (viewMode === 'preview' && activePreviewProject) {
    return (
      <div className="relative w-full h-screen overflow-hidden bg-black">
        {/* Preview Controls */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
          <button 
            onClick={closePreview}
            className="bg-black text-white px-6 py-3 rounded-full font-bold shadow-2xl border border-white/20 hover:bg-zinc-800 transition-colors flex items-center"
          >
            <X size={18} className="mr-2" /> Close Preview
          </button>
        </div>
        
        {/* Template Switcher */}
        <div className="h-full w-full overflow-y-auto bg-white animate-in fade-in duration-500 slide-in-from-bottom-10 scrollbar-hide">
          {activePreviewProject.templateType === 'luxury' && <LuxuryTemplate project={activePreviewProject} />}
          {activePreviewProject.templateType === 'cafe' && <CafeTemplate project={activePreviewProject} />}
          {activePreviewProject.templateType === 'lifestyle' && <LifestyleTemplate project={activePreviewProject} />}
          {activePreviewProject.templateType === 'trust' && <TrustTemplate project={activePreviewProject} />}
          {activePreviewProject.templateType === 'education' && <EducationTemplate project={activePreviewProject} />}
          {activePreviewProject.templateType === 'tech' && <TechTemplate project={activePreviewProject} />}
          {activePreviewProject.templateType === 'traveldesk' && <TravelDeskStudio project={activePreviewProject} />}
        </div>
      </div>
    );
  }

  // --- CATALOGUE VIEW ---
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Curated Web Experiences<br />
            <span className="text-white">For Delhi NCR Businesses</span>
          </h1>
          <p className="text-lg text-zinc-400 mb-8">
            Explore our catalogue of premium, conversion-focused websites. 
            Click <span className="text-purple-400 font-bold">Live Preview</span> to see the templates in action.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-zinc-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-zinc-700 rounded-full leading-5 bg-zinc-900 text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent sm:text-sm transition-all"
              placeholder="Search by niche (e.g. 'Real Estate', 'South Delhi')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`
                    flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
                    ${selectedCategory === cat.id 
                      ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                      : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white'}
                  `}
                >
                  <Icon size={16} className="mr-2" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={setSelectedProject} 
            />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-24 bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-3xl p-12 text-center relative overflow-hidden border border-white/5">
          <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to elevate your business?</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Whether you are a startup in Gurgaon or a clinic in South Delhi, we build digital experiences that convert.
            </p>
            <button
            onClick={() => window.open('https://wa.me/919166361317?text=send%20your%20software%20queries%20we%20will%20respond%20ASAP%0A%0Aअपने%20सॉफ्टवेयर%20प्रश्न%20भेजें%2C%20हम%20जल्द%20से%20जल्द%20जवााााब%20देंगे', '_blank')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 duration-300"
            >
              Get a Free Consultation
            </button>
          </div>
        </div>

      </main>

      {/* Modal */}
      {selectedProject && (
        <Modal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
          onPreview={handleLivePreview}
        />
      )}
    </div>
  );
};

export default App;