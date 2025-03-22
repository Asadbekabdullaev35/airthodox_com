import React from 'react';
import { technologies } from '../data/techIcons';

const TechStack = () => {
  return (
    <div className="mt-32 text-center">
      <div className="inline-block mb-16">
        <div className="flex flex-col items-center">
          <span className="font-mono text-purple-500 mb-2 opacity-70"># TECH_STACK</span>
          <h3 className="text-3xl md:text-4xl font-bold text-white font-mono">
            Technologies We Use_
          </h3>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-transparent mt-4" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto px-4">
        {technologies.map((tech) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className="group relative rounded-xl overflow-hidden transition-all duration-500 hover:scale-105"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.bgColor} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative p-6 backdrop-blur-sm">
                <div className="aspect-square mb-4 flex items-center justify-center">
                  <Icon className="w-12 h-12 text-purple-400 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h4 className="text-white font-mono text-sm mb-2 group-hover:text-purple-400 transition-colors">
                  {tech.name}
                </h4>
              </div>

              {/* Border gradient */}
              <div className="absolute inset-0 border border-purple-500/20 group-hover:border-purple-500/50 rounded-xl transition-colors duration-500" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;