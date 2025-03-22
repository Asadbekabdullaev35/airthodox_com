import React from 'react';
import SolutionsCarousel from './SolutionsCarousel';
import TechStack from './TechStack';

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-16">
          <div className="inline-block">
            <div className="flex flex-col items-start">
              <span className="font-mono text-purple-500 mb-2 opacity-70"># SOLUTIONS_MATRIX</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
                AI-Powered Solutions_
              </h2>
              <p className="text-gray-400 mt-4 max-w-2xl">
                Explore our comprehensive suite of AI-powered automation solutions designed to transform your business operations
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-transparent mt-4" />
            </div>
          </div>
        </div>

        <div className="mb-24">
          <SolutionsCarousel />
        </div>

        {/* Combined Impact Section */}
        <div className="border-t border-purple-500/20 pt-24">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white font-mono mb-4">_COMBINED IMPACT</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our integrated AI solutions deliver measurable results across your entire business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '30%', label: 'Revenue Growth in 6 Months' },
              { value: '20+', label: 'Hours Saved per Week' },
              { value: '40%', label: 'Higher Customer Retention' }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-900/50 border border-purple-500/20 rounded-lg p-8 text-center group hover:border-purple-500 transition-colors">
                <div className="text-4xl font-bold text-purple-400 mb-4 font-mono group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <TechStack />
      </div>
    </section>
  );
};

export default Solutions;