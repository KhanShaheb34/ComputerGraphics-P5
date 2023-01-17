import { Display } from '../lib/display';

export const Line = (
  display: Display,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  { color, dotted }: { color?: string; dotted?: boolean } = {}
) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const steps = Math.max(Math.abs(dx), Math.abs(dy));
  const xInc = dx / steps;
  const yInc = dy / steps;
  let x = x1;
  let y = y1;
  for (let i = 0; i < steps; i++) {
    if (dotted && i % 2 === 0)
      display.putPixel(Math.round(x), Math.round(y), 'white');
    else display.putPixel(Math.round(x), Math.round(y), color);
    x += xInc;
    y += yInc;
  }
  display.putPixel(Math.round(x), Math.round(y), color);
};
