import React from 'react';
import type { Solution } from '../../data/solutions';

interface ServiceMetricsProps {
  service: Solution;
}

const ServiceMetrics: React.FC<ServiceMetricsProps> = ({ service }) => {
  if (!service.metrics) return null;

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 font-mono">Impact & Results</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real metrics from businesses using our {service.title} solution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.metrics.map((metric, index) => (
            <div 
              key={index}
              className="p-8 rounded-lg bg-gray-900/50 border border-purple-500/20 text-center group hover:border-purple-500 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-purple-400 mb-4 font-mono group-hover:scale-110 transition-transform">
                {metric.value}
              </div>
              <div className="text-gray-400 font-mono">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceMetrics;