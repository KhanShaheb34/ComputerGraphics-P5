import { Display } from '../../src/lib/display';

export const plotEightWaySymmetric = (
  display: Display,
  x0: number,
  y0: number,
  x: number,
  y: number
) => {
  display.putPixel(x0 + x, y0 + y);
  display.putPixel(x0 + y, y0 + x);
  display.putPixel(x0 - y, y0 + x);
  display.putPixel(x0 - x, y0 + y);
  display.putPixel(x0 - x, y0 - y);
  display.putPixel(x0 - y, y0 - x);
  display.putPixel(x0 + y, y0 - x);
  display.putPixel(x0 + x, y0 - y);
};
