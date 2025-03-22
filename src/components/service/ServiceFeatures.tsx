import React from 'react';
import { Check } from 'lucide-react';
import type { Solution } from '../../data/solutions';

interface ServiceFeaturesProps {
  service: Solution;
}

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ service }) => {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 font-mono">Key Features</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-lg bg-gray-900/50 border border-purple-500/20 hover:border-purple-500 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-purple-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Check className="h-6 w-6 text-purple-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {feature}
                  </h3>
                  <p className="text-gray-400">
                    Leverage our advanced AI technology to streamline your operations and boost efficiency.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;