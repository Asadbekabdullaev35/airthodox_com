import React from 'react';
import { Cpu, Network, Workflow, Zap } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Cpu,
    title: 'Neural Processing',
    description: 'Advanced AI algorithms optimized for your business logic',
    gradient: 'from-purple-500 to-blue-500'
  },
  {
    icon: Network,
    title: 'Quantum Integration',
    description: 'Seamless connection with existing enterprise systems',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Workflow,
    title: 'Smart Workflows',
    description: 'Self-optimizing process automation with ML',
    gradient: 'from-cyan-500 to-purple-500'
  },
  {
    icon: Zap,
    title: 'Instant Deploy',
    description: 'Zero-latency implementation with live monitoring',
    gradient: 'from-purple-500 to-blue-500'
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-16">
          <div className="inline-block">
            <div className="flex flex-col items-start">
              <span className="font-mono text-purple-500 mb-2 opacity-70"># SYSTEM_CAPABILITIES</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
                Advanced Neural Architecture_
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-transparent mt-4" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;