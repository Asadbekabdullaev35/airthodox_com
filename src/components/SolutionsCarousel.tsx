import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { solutions } from '../data/solutions';
import { CarouselProvider } from './carousel/CarouselContext';
import CarouselSlide from './carousel/CarouselSlide';

const ANIMATION_DURATION = 500;

const SolutionsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cardsToShow = isMobile ? 1 : 3;

  const handleSlide = useCallback((newDirection: 'left' | 'right') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection(newDirection);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        if (newDirection === 'right') {
          return (prevIndex + 1) % solutions.length;
        }
        return prevIndex - 1 < 0 ? solutions.length - 1 : prevIndex - 1;
      });
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, ANIMATION_DURATION / 2);
  }, [isAnimating]);

  const nextSlide = () => handleSlide('right');
  const prevSlide = () => handleSlide('left');

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [handleSlide]);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % solutions.length;
      cards.push(solutions[index]);
    }
    return cards;
  };

  return (
    <CarouselProvider>
      <div className="relative w-full overflow-hidden px-4 sm:px-12">
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-purple-600/20 hover:bg-purple-600/40 p-2 rounded-full backdrop-blur-sm border border-purple-500/20 transition-all duration-300 group disabled:opacity-50"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-purple-600/20 hover:bg-purple-600/40 p-2 rounded-full backdrop-blur-sm border border-purple-500/20 transition-all duration-300 group disabled:opacity-50"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-4 sm:gap-6`}>
          {getVisibleCards().map((solution, index) => (
            <CarouselSlide
              key={`${solution.title}-${currentIndex}-${index}`}
              solution={solution}
              index={index}
            />
          ))}
        </div>
      </div>
    </CarouselProvider>
  );
};

export default SolutionsCarousel;