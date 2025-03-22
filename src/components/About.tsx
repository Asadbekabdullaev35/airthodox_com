import React from 'react';
import { Bot, Clock, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="font-mono text-purple-500 mb-2 opacity-70 block"># ABOUT_US</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-mono mb-4">
            Expert AI Automation Solutions_
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-transparent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Bot,
              title: 'AI Expertise',
              description: 'Our team of AI and automation experts is committed to empowering businesses with innovative, tailor-made solutions.'
            },
            {
              icon: Clock,
              title: 'Efficiency Focus',
              description: 'We specialize in automating repetitive tasks and streamlining workflows to save time and reduce operational costs.'
            },
            {
              icon: TrendingUp,
              title: 'Growth Driven',
              description: 'Position your company for success in today\'s competitive environment with our cutting-edge solutions.'
            }
          ].map((item, index) => (
            <div key={index} className="group p-6 rounded-xl border border-purple-500/20 bg-gray-900/50 hover:border-purple-500/50 transition-all duration-500">
              <div className="h-12 w-12 rounded-lg bg-purple-600/20 p-2 mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-mono">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto text-center">
          Let's collaborate to harness the power of AI, reshape your business operations, and position your company for success in today's competitive environment.
        </p>
      </div>
    </section>
  );
};

export default About;