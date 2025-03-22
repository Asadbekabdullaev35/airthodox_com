import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProblemPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceProblemProps {
  title: string;
  description: string;
  problems: ProblemPoint[];
}

const ServiceProblem: React.FC<ServiceProblemProps> = ({ title, description, problems }) => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-400 font-mono">
          {title}
        </h2>
        <p className="text-gray-400 text-lg mb-16 max-w-3xl">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-lg bg-gray-900/50 border border-purple-500/20 hover:border-purple-500 transition-all duration-300"
              >
                <div className="h-16 w-16 rounded-lg bg-purple-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 font-mono group-hover:scale-105 transition-transform">
                  {problem.title}
                </h3>
                <p className="text-gray-400">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceProblem;