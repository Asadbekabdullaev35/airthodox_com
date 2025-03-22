import React from 'react';
import { useCarousel } from './CarouselContext';
import type { Solution } from '../../data/solutions';
import SolutionCard from '../SolutionCard';

interface CarouselSlideProps {
  solution: Solution;
  index: number;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ solution, index }) => {
  const { isAnimating, direction } = useCarousel();
  
  return (
    <div
      className={`transform transition-all duration-500 ease-out ${
        isAnimating 
          ? direction === 'right'
            ? '-translate-x-full opacity-0'
            : 'translate-x-full opacity-0'
          : 'translate-x-0 opacity-100'
      }`}
      style={{
        gridColumn: `${index + 1} / span 1`,
        transition: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <SolutionCard solution={solution} />
    </div>
  );
};

export default CarouselSlide;