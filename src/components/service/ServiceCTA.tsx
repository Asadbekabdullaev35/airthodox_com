import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import GetStartedForm from '../GetStartedForm';

const ServiceCTA = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Join thousands of businesses already leveraging our AI solutions to drive growth and efficiency.
          </p>
          <button 
            onClick={() => setIsFormOpen(true)}
            className="group bg-purple-600 text-white px-8 py-4 rounded-lg font-mono hover:bg-purple-700 transition-all flex items-center justify-center border border-purple-400/50 glow-md hover-glow mx-auto"
          >
            Get Started Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <GetStartedForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default ServiceCTA;