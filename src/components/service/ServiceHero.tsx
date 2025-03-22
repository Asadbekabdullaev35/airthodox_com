import React, { useState } from 'react';
import type { Solution } from '../../data/solutions';
import GetStartedForm from '../GetStartedForm';

interface ServiceHeroProps {
  service: Solution;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ service }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { icon: Icon, title, description } = service;

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="h-20 w-20 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-500 p-4 mb-8">
            <Icon className="h-12 w-12 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-mono">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mb-12">
            {description}
          </p>
          
          <button 
            onClick={() => setIsFormOpen(true)}
            className="bg-purple-600 text-white px-8 py-4 rounded-lg font-mono hover:bg-purple-700 transition-all flex items-center justify-center border border-purple-400/50 glow-md hover-glow"
          >
            Get Started Now
          </button>
        </div>
      </div>

      <GetStartedForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default ServiceHero;