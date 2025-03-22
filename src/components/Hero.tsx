import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedTitle from './hero/AnimatedTitle';
import TerminalWindow from './terminal/TerminalWindow';
import MatrixRain from './effects/MatrixRain';
import GetStartedForm from './GetStartedForm';

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center bg-black relative overflow-hidden">
      {/* Matrix rain background */}
      <MatrixRain />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
      
      <div className="relative w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32 mt-16 sm:mt-20">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12">
          <AnimatedTitle />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-8 sm:mb-12">
              <TerminalWindow />
            </div>

            <button 
              onClick={() => setIsFormOpen(true)}
              className="w-full sm:w-auto group bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-mono hover:bg-purple-700 transition-all inline-flex items-center justify-center border border-purple-400/50 glow-md hover-glow"
            >
              ./deploy.sh <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { value: '99.9%', label: 'Uptime' },
                { value: '500ms', label: 'Response Time' },
                { value: '24/7', label: 'Support' },
                { value: '100+', label: 'Integrations' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 sm:p-6 text-center group hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="text-xl sm:text-3xl font-bold text-purple-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-mono text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <GetStartedForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default Hero;