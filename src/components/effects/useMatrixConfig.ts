import { useMemo } from 'react';
import type { MatrixConfig } from './types';

export const useMatrixConfig = (): MatrixConfig => {
  return useMemo(() => ({
    fontSize: 16,
    speed: 1.5, // Reduced speed for better visibility
    cursorRadius: 100, // Increased radius for better hover effect
    fadeSpeed: 0.1
  }), []);
};