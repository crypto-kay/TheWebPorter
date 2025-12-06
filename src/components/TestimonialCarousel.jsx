import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const GAP = 24;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

export default function TestimonialCarousel({
  items,
  baseWidth = 400,
  autoplay = true,
  autoplayDelay = 5000,
  pauseOnHover = true,
  loop = true,
  isDarkMode = true
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev === items.length - 1 && loop) {
            return 0;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, pauseOnHover]);

  const goToPrevious = () => {
    setCurrentIndex(prev => {
      if (prev === 0 && loop) {
        return items.length - 1;
      }
      return prev - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex(prev => {
      if (prev === items.length - 1 && loop) {
        return 0;
      }
      return prev + 1;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div
        ref={containerRef}
        className="relative overflow-hidden px-4"
        style={{
          width: '100%',
          maxWidth: `${baseWidth}px`,
          margin: '0 auto'
        }}
      >
        <div className="flex" style={{ gap: `${GAP}px` }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className={`relative shrink-0 flex flex-col ${
                isDarkMode ? 'bg-slate-800' : 'bg-white'
              } p-8 rounded-2xl shadow-lg text-center`}
              style={{ width: itemWidth }}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={SPRING_OPTIONS}
            >
              <div className="flex justify-center mb-4">
                {Array.from({ length: items[currentIndex].rating }, (_, i) => (
                  <Star key={i} size={20} className="text-amber-500 fill-current" />
                ))}
              </div>
              <p className={`font-body text-lg ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              } mb-6 italic leading-relaxed`}>
                "{items[currentIndex].testimonial}"
              </p>
              <div className={`border-t ${
                isDarkMode ? 'border-slate-700' : 'border-gray-200'
              } pt-6`}>
                <div className={`font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                } mb-1`}>{items[currentIndex].author}</div>
                <div className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{items[currentIndex].position}</div>
                <div className={`text-sm font-medium ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-900'
                } mt-2`}>{items[currentIndex].company}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Navigation Dots */}
      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          {items.map((_, index) => (
            <motion.button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors duration-150 ${
                currentIndex === index
                  ? 'bg-amber-500'
                  : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
              }`}
              animate={{
                scale: currentIndex === index ? 1.2 : 1
              }}
              onClick={() => goToSlide(index)}
              transition={{ duration: 0.15 }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 rounded-full ${
          isDarkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-white hover:bg-gray-100'
        } shadow-md hover:shadow-lg transition-shadow duration-300`}
        aria-label="Previous testimonial"
      >
        <svg className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 rounded-full ${
          isDarkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-white hover:bg-gray-100'
        } shadow-md hover:shadow-lg transition-shadow duration-300`}
        aria-label="Next testimonial"
      >
        <svg className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}