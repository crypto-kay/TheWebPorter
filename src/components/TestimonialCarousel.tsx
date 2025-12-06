import { useEffect, useState, useRef } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';
import { Star } from 'lucide-react';

export interface TestimonialItem {
  id: number;
  company: string;
  testimonial: string;
  author: string;
  position: string;
  rating: number;
  backgroundImage?: string;
}

export interface TestimonialCarouselProps {
  items: TestimonialItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  isDarkMode?: boolean;
}

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
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
}: TestimonialCarouselProps) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  
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
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0
        }
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
        <motion.div
          className="flex"
          drag="x"
          {...dragProps}
          style={{
            width: itemWidth,
            gap: `${GAP}px`,
            perspective: 1000,
            perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
            x
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(currentIndex * trackItemOffset) }}
          transition={effectiveTransition}
          onAnimationComplete={handleAnimationComplete}
        >
          {carouselItems.map((item, index) => {
            const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
            const outputRange = [90, 0, -90];
            const rotateY = useTransform(x, range, outputRange, { clamp: false });
            
            return (
              <motion.div
                key={index}
                className={`relative shrink-0 flex flex-col ${
                  isDarkMode ? 'bg-slate-800' : 'bg-white'
                } p-8 rounded-2xl shadow-lg text-center cursor-grab active:cursor-grabbing`}
                style={{
                  width: itemWidth,
                  rotateY: rotateY,
                }}
                transition={effectiveTransition}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-amber-500 fill-current" />
                  ))}
                </div>
                <p className={`font-body text-lg ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                } mb-6 italic leading-relaxed`}>
                  "{item.testimonial}"
                </p>
                <div className={`border-t ${
                  isDarkMode ? 'border-slate-700' : 'border-gray-200'
                } pt-6`}>
                  <div className={`font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  } mb-1`}>{item.author}</div>
                  <div className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{item.position}</div>
                  <div className={`text-sm font-medium ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-900'
                  } mt-2`}>{item.company}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      
      {/* Navigation Dots */}
      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          {items.map((_, index) => (
            <motion.button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors duration-150 ${
                currentIndex % items.length === index
                  ? 'bg-amber-500'
                  : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={() => {
          if (currentIndex === 0 && loop) {
            setCurrentIndex(items.length - 1);
          } else {
            setCurrentIndex(prev => Math.max(prev - 1, 0));
          }
        }}
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
        onClick={() => {
          if (currentIndex === items.length - 1 && loop) {
            setCurrentIndex(currentIndex + 1);
          } else {
            setCurrentIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
          }
        }}
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