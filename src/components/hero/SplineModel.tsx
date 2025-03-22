import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

const SplineModel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="w-full h-[500px] lg:h-[600px] relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500" />
        </div>
      )}
      
      {!hasError ? (
        <Spline 
          className="w-full h-full"
          scene="/nexbot_robot_character_concept (2).spline"
          onLoad={handleLoad}
          onError={handleError}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
          <div className="text-gray-400 text-center">
            <p>3D model could not be loaded</p>
            <p className="text-sm">Please try refreshing the page</p>
          </div>
        </div>
      )}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80 pointer-events-none" />
    </div>
  );
};

export default SplineModel;