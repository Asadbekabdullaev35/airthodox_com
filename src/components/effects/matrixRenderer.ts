import { MatrixSymbol } from './MatrixSymbol';
import type { MatrixConfig } from './types';

export const drawMatrix = (
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  symbols: MatrixSymbol[]
): void => {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = 'bold 16px "Courier New"';
  ctx.shadowBlur = 4;
  ctx.shadowColor = 'rgba(168, 85, 247, 0.5)';

  symbols.forEach(symbol => {
    ctx.fillStyle = `rgba(168, 85, 247, ${symbol.opacity})`;
    ctx.fillText(symbol.value, symbol.x, symbol.y);
    symbol.update(canvas.height);
  });
};