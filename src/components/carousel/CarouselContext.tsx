import React, { createContext, useContext, useState } from 'react';

interface CarouselContextType {
  isAnimating: boolean;
  setIsAnimating: (value: boolean) => void;
  direction: 'left' | 'right';
  setDirection: (value: 'left' | 'right') => void;
}

const CarouselContext = createContext<CarouselContextType | undefined>(undefined);

export const CarouselProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  return (
    <CarouselContext.Provider value={{ isAnimating, setIsAnimating, direction, setDirection }}>
      {children}
    </CarouselContext.Provider>
  );
};

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a CarouselProvider');
  }
  return context;
};