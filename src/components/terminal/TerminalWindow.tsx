import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TerminalWindow = () => {
  return (
    <div className="w-full bg-gray-900/80 rounded-lg border border-purple-500/20 backdrop-blur-sm overflow-hidden glow-sm">
      <div className="bg-black/50 p-3 border-b border-purple-500/20">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <span className="ml-2 text-sm text-gray-400 font-mono">~/airthodox/init.sh</span>
        </div>
      </div>

      <div className="p-4 font-mono text-sm h-[300px]">
        <div className="relative h-full">
          <TypeAnimation
            sequence={[
              '> Initializing AI core...\n',
              2000,
              '> Initializing AI core...\n> Loading neural networks...\n',
              2000,
              '> Initializing AI core...\n> Loading neural networks...\n> Configuring parameters...\n',
              2000,
              '> Initializing AI core...\n> Loading neural networks...\n> Configuring parameters...\n> System ready...\n',
              2000,
            ]}
            wrapper="pre"
            speed={50}
            className="text-purple-400 whitespace-pre-wrap absolute top-0 left-0"
            repeat={1}
          />
          <div className="text-purple-400 absolute bottom-0 left-0">
            $ <span className="animate-pulse">_</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalWindow;