import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const AnimatedTitle = () => {
  return (
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white glow-text max-w-4xl mx-auto">
      <div className="relative min-h-[3em] md:min-h-[2em]">
        <TypeAnimation
          sequence={[
            'Automating Business Logic...',
            4000,
            'Optimizing Workflows...',
            4000,
            'Maximizing Efficiency...',
            4000,
            'Scaling Operations...',
            4000,
          ]}
          wrapper="div"
          speed={15}
          className="font-mono bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent absolute top-0 left-0 w-full break-words"
          repeat={Infinity}
        />
      </div>
    </h1>
  );
};

export default AnimatedTitle;