import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  feature: {
    icon: LucideIcon;
    title: string;
    description: string;
    gradient: string;
  };
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const { icon: Icon, title, description, gradient } = feature;
  
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-600/10 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
      <div className="relative p-6 rounded-xl border border-purple-500/20 bg-black/50 backdrop-blur-sm hover-glow">
        <div className={`h-12 w-12 rounded-lg bg-gradient-to-r ${gradient} p-2 mb-4 glow-sm`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2 font-mono glow-text">{title}</h3>
        <p className="text-gray-400">{description}</p>
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </div>
  );
};

export default FeatureCard;