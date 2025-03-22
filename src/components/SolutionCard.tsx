import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Solution } from '../data/solutions';
import { Check } from 'lucide-react';

interface SolutionCardProps {
  solution: Solution;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => {
  const navigate = useNavigate();
  const { icon: Icon, title, description, features, metrics } = solution;
  
  const handleLearnMore = () => {
    const serviceId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    navigate(`/services/${serviceId}`);
  };
  
  return (
    <div className="group relative">
      <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-purple-600/20 via-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative rounded-lg p-8 bg-gray-900/50 border border-gray-800 group-hover:border-purple-600/50 hover:transform hover:scale-[1.02] transition-all duration-500">
        <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 p-2 mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-8 w-8 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2 font-mono group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-6 font-mono text-sm min-h-[60px]">
          {description}
        </p>

        {metrics && (
          <div className="grid grid-cols-3 gap-4 mb-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center group/metric hover:transform hover:scale-110 transition-all duration-300">
                <div className="text-2xl font-bold text-purple-400 mb-1 group-hover/metric:text-purple-300">
                  {metric.value}
                </div>
                <div className="text-xs text-gray-400 font-mono group-hover/metric:text-gray-300">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {features && (
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li 
                key={index} 
                className="flex items-center text-white font-mono text-sm group-hover:transform group-hover:translate-x-1 transition-transform hover:scale-105 hover:text-purple-300" 
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="transition-colors duration-300">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <button 
          onClick={handleLearnMore}
          className="w-full py-3 mt-8 rounded-lg font-mono text-sm bg-white/10 text-white hover:bg-purple-600/20 transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">Learn More</span>
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-500" />
        </button>
      </div>
    </div>
  );
};

export default SolutionCard;