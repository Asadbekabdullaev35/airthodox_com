import React, { useEffect, useRef } from 'react';
import { MatrixSymbol } from './MatrixSymbol';
import { drawMatrix } from './matrixRenderer';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const symbolsRef = useRef<MatrixSymbol[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);

      // Reinitialize symbols when canvas is resized
      const fontSize = 16;
      const columns = Math.ceil(canvas.width / fontSize);
      symbolsRef.current = Array.from({ length: columns }, (_, i) => 
        new MatrixSymbol(i * fontSize, Math.random() * canvas.height, 2)
      );
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const animate = () => {
      drawMatrix(ctx, canvas, symbolsRef.current);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full opacity-75"
      style={{ background: 'black' }}
    />
  );
};

export default MatrixRain;