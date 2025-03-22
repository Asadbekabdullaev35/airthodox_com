import React from 'react';
import { Check } from 'lucide-react';

interface ServiceSolutionProps {
  title: string;
  description: string;
  features: string[];
  metrics: Array<{
    value: string;
    label: string;
  }>;
}

const ServiceSolution: React.FC<ServiceSolutionProps> = ({ title, description, features, metrics }) => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-purple-400 font-mono">{title}</h2>
          <p className="text-gray-400 text-lg max-w-3xl">{description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300"
              >
                <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-purple-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Check className="h-5 w-5 text-purple-400" />
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-110 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-purple-400 mb-2 font-mono">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-400 font-mono">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSolution;