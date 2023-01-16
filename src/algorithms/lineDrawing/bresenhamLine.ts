import { Display } from '../../lib/display';

export const BresenhamLine = (
  display: Display,
  x1: number,
  y1: number,
  x2: number,
  y2: number
) => {
  display.putPixel(x1, y1, 'red');
  display.putPixel(x2, y2, 'red');

  let m = (y2 - y1) / (x2 - x1);

  if (m < 0) {
    [y1, y2] = [display.resolution - y1, display.resolution - y2];
  }

  if (x1 > x2) {
    [x1, x2] = [x2, x1];
    [y1, y2] = [y2, y1];
  }

  let x = x1,
    y = y1;
  let dx = Math.abs(x2 - x1);
  let dy = Math.abs(y2 - y1);
  let p = dx < dy ? 2 * dx - dy : 2 * dy - dx;
  let pInc1 = dx < dy ? 2 * dx : 2 * dy;
  let pInc2 = dx < dy ? 2 * (dx - dy) : 2 * (dy - dx);

  console.log(dx, dy);
  console.log(x1, y1, x2, y2);

  while (x <= x2 && y <= y2) {
    display.putPixel(x, m < 0 ? display.resolution - y : y);
    dx < dy ? y++ : x++;
    if (p < 0) {
      p += pInc1;
    } else {
      dx < dy ? x++ : y++;
      p += pInc2;
    }
  }
};
