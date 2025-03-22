import React from 'react';
import { Check } from 'lucide-react';

const SuccessMessage = () => {
  return (
    <div className="text-center space-y-4">
      <div className="mx-auto w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mb-6">
        <Check className="w-8 h-8 text-purple-500" />
      </div>
      <h2 className="text-2xl font-bold text-purple-400 font-mono">Thank You!</h2>
      <p className="text-gray-300">
        We've received your information and will get in touch with you shortly.
      </p>
    </div>
  );
};

export default SuccessMessage;